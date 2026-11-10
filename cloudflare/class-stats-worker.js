/* ─────────────────────────────────────────────────────────────
   Class stats: Cloudflare Worker + D1 database behind tivinteaches.com/api/class-stats.
   NOT part of the GitHub Pages site. Paste this into the Cloudflare dashboard
   (Workers & Pages > class-stats > Edit code). Setup steps: cloudflare/README.md.

   Students never sign in. Each browser makes a random id (class-stats.js) and sends
   { id: question id, pick: 0-4, ok: true/false, who: random id } when it answers a
   bank question. Only the FIRST answer from each browser to each question is kept,
   so the numbers measure first tries. Nothing personal is stored: no name, no email,
   no IP address.

   Routes
     POST /api/class-stats/answer        save one answer, reply with that question's totals
     GET  /api/class-stats/q?id=u4_4.1_0 totals for one question
     GET  /api/class-stats/report        every question's totals (teacher only:
                                         header X-Teacher-Code must match TEACHER_CODE)

   Bindings (Worker > Settings > Bindings / Variables and Secrets)
     DB            D1 database "class-stats" (schema below)
     TEACHER_CODE  Secret: the code class-stats.html asks for

   Schema (run once in the D1 console):
     CREATE TABLE IF NOT EXISTS answers (
       qid  TEXT NOT NULL,
       who  TEXT NOT NULL,
       pick INTEGER NOT NULL,
       ok   INTEGER NOT NULL,
       ts   INTEGER NOT NULL,
       PRIMARY KEY (qid, who)
     );
     CREATE INDEX IF NOT EXISTS answers_who ON answers (who, ts);
   ───────────────────────────────────────────────────────────── */

const ORIGINS = [
  /^https:\/\/(www\.)?tivinteaches\.com$/,
  /^https:\/\/[a-z0-9-]+\.ap-review-site\.pages\.dev$/,
  /^https:\/\/ap-review-site\.pages\.dev$/,
  /^https:\/\/ap-review-site\.elitivin\.workers\.dev$/
];
const QID = /^u[1-9]_[0-9.]+_\d{1,4}$/;      // u{unit}_{topic}_{idx}, same as spaced.js
const WHO = /^[a-z0-9-]{16,40}$/;
const PER_WHO_DAY = 400;                       // answers one browser may save per day

function cors(req) {
  const o = req.headers.get("Origin") || "";
  const h = { "Vary": "Origin" };
  if (ORIGINS.some(r => r.test(o))) {
    h["Access-Control-Allow-Origin"] = o;
    h["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS";
    h["Access-Control-Allow-Headers"] = "Content-Type, X-Teacher-Code";
  }
  return h;
}

function json(req, body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store", ...cors(req) }
  });
}

async function totals(env, qid) {
  const { results } = await env.DB.prepare(
    "SELECT pick, COUNT(*) AS n, SUM(ok) AS r FROM answers WHERE qid = ? GROUP BY pick"
  ).bind(qid).all();
  const picks = [0, 0, 0, 0, 0];
  let n = 0, right = 0;
  for (const row of results) {
    if (row.pick >= 0 && row.pick < 5) picks[row.pick] = row.n;
    n += row.n; right += row.r || 0;
  }
  return { id: qid, n, right, picks };
}

// Constant-time compare, so the code can't be guessed one letter at a time.
function same(a, b) {
  const x = new TextEncoder().encode(a || ""), y = new TextEncoder().encode(b || "");
  let d = x.length ^ y.length;
  for (let i = 0; i < Math.max(x.length, y.length); i++) d |= (x[i] || 0) ^ (y[i] || 0);
  return d === 0 && x.length > 0;
}

export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    const path = url.pathname.replace(/\/+$/, "");
    if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: cors(req) });

    try {
      if (path === "/api/class-stats/answer" && req.method === "POST") {
        const b = await req.json().catch(() => null);
        if (!b || !QID.test(b.id || "") || !WHO.test(b.who || "") ||
            !Number.isInteger(b.pick) || b.pick < 0 || b.pick > 4 || typeof b.ok !== "boolean") {
          return json(req, { error: "bad answer" }, 400);
        }
        const dayAgo = Date.now() - 864e5;
        const cnt = await env.DB.prepare("SELECT COUNT(*) AS c FROM answers WHERE who = ? AND ts > ?")
          .bind(b.who, dayAgo).first();
        if (!cnt || cnt.c < PER_WHO_DAY) {
          await env.DB.prepare("INSERT OR IGNORE INTO answers (qid, who, pick, ok, ts) VALUES (?, ?, ?, ?, ?)")
            .bind(b.id, b.who, b.pick, b.ok ? 1 : 0, Date.now()).run();
        }
        return json(req, await totals(env, b.id));
      }

      if (path === "/api/class-stats/q" && req.method === "GET") {
        const qid = url.searchParams.get("id") || "";
        if (!QID.test(qid)) return json(req, { error: "bad id" }, 400);
        return json(req, await totals(env, qid));
      }

      if (path === "/api/class-stats/report" && req.method === "GET") {
        if (!same(req.headers.get("X-Teacher-Code"), env.TEACHER_CODE)) {
          return json(req, { error: "wrong code" }, 403);
        }
        const { results } = await env.DB.prepare(
          "SELECT qid, pick, COUNT(*) AS n, SUM(ok) AS r FROM answers GROUP BY qid, pick"
        ).all();
        const by = {};
        for (const row of results) {
          const q = by[row.qid] || (by[row.qid] = { id: row.qid, n: 0, right: 0, picks: [0, 0, 0, 0, 0] });
          if (row.pick >= 0 && row.pick < 5) q.picks[row.pick] = row.n;
          q.n += row.n; q.right += row.r || 0;
        }
        const browsers = await env.DB.prepare("SELECT COUNT(DISTINCT who) AS c FROM answers").first();
        return json(req, { questions: Object.values(by), browsers: browsers ? browsers.c : 0, at: Date.now() });
      }

      return json(req, { error: "not found" }, 404);
    } catch (e) {
      return json(req, { error: "server" }, 500);
    }
  }
};
