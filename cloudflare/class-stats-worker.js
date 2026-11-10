/* Class stats + teacher questions: Cloudflare Worker + D1 database behind
   tivinteaches.com/api/class-stats. NOT part of the GitHub Pages site: paste this into
   the Cloudflare dashboard (Workers & Pages > class-stats > Edit code). Setup and the
   database schema: cloudflare/README.md.

   Class stats: each browser makes a random id (class-stats.js) and sends
   { id, pick, ok, who } when it answers a bank question. Only the first answer from each
   browser to each question is kept. Nothing personal is stored.

   Teacher questions: MCQs typed in on class-stats.html. They are served as a script
   (custom.js) that every unit page loads right after mcq-bank.js; it adds a topic
   "N.0 Mr. Tivin's Questions" to each unit that has any. Each question keeps its slot
   for good (removing one only hides it), so question ids never shift.

   Routes (teacher routes need header X-Teacher-Code = TEACHER_CODE)
     POST /api/class-stats/answer         save one answer, reply with that question's totals
     GET  /api/class-stats/q?id=u4_4.1_0  totals for one question
     GET  /api/class-stats/report         every question's totals (teacher)
     GET  /api/class-stats/custom.js      teacher questions as a script (public)
     GET  /api/class-stats/custom/list    every teacher question, hidden ones too (teacher)
     POST /api/class-stats/custom/save    {unit, slot?, data} add (no slot) or edit (teacher)
     POST /api/class-stats/custom/hide    {unit, slot, hidden} hide or show again (teacher)

   Bindings: DB (D1 database "class-stats"), TEACHER_CODE (Secret). */

const ORIGINS = [
  /^https:\/\/(www\.)?tivinteaches\.com$/,
  /^https:\/\/[a-z0-9-]+\.ap-review-site\.pages\.dev$/,
  /^https:\/\/ap-review-site\.pages\.dev$/,
  /^https:\/\/ap-review-site\.elitivin\.workers\.dev$/
];
const QID = /^u[1-9]_[0-9.]+_\d{1,4}$/;
const WHO = /^[a-z0-9-]{16,40}$/;
const PER_WHO_DAY = 400;
const TOPIC_NAME = "Mr. Tivin's Questions";
const IMG = /^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+\/=]+$/;
const NL = String.fromCharCode(10);   // newline and backslash, written this way so the
const BS = String.fromCharCode(92);   // code survives being typed into the dashboard editor

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

function teacher(req, env) {
  return same(req.headers.get("X-Teacher-Code"), env.TEACHER_CODE);
}

function str(v, max) {
  return typeof v === "string" && v.length <= max ? v : null;
}

// Checks a typed-in question; returns the clean copy or null.
function cleanQ(d) {
  if (!d || typeof d !== "object") return null;
  const q = str(d.q, 2000), e = str(d.e || "", 4000), s = str(d.s || "", 8000), sl = str(d.sl || "", 400);
  if (!q || !q.trim() || e === null || s === null || sl === null) return null;
  if (!Array.isArray(d.o) || d.o.length < 4 || d.o.length > 5) return null;
  const o = d.o.map(x => str(x, 800));
  if (o.some(x => x === null || !x.trim())) return null;
  if (!Number.isInteger(d.c) || d.c < 0 || d.c >= o.length) return null;
  const out = { s, sl, q, o, c: d.c, e };
  if (d.simg) {
    if (typeof d.simg !== "string" || d.simg.length > 900000 || !IMG.test(d.simg)) return null;
    out.simg = d.simg;
  }
  const t = str(d.t || "", 40);
  if (t) out.t = t;
  return out;
}

function escHtml(s) {
  return String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

async function customJs(env) {
  const { results } = await env.DB.prepare(
    "SELECT unit, slot, data, hidden FROM custom_qs ORDER BY unit, slot"
  ).all();
  const D = {};
  for (const r of results) {
    let q;
    try { q = JSON.parse(r.data); } catch (e) { q = { q: "(missing)", o: ["-", "-", "-", "-"], c: 0, e: "" }; }
    // The engine escapes stem, choices, source text; the explanation is shown as HTML.
    q.e = escHtml(q.e).split(NL).join("<br>");
    q.src = "Mr. Tivin";
    if (r.hidden) q.hidden = true;
    (D[r.unit] = D[r.unit] || [])[r.slot] = q;
  }
  const data = JSON.stringify(D).split("<").join(BS + "u003c");
  return "/* Teacher questions from class-stats.html (served by the class-stats Worker). */" + NL +
    "(function(){var U=window.APWH_MCQ&&window.APWH_MCQ.units;if(!U)return;var D=" + data + ";" +
    "for(var u in D){if(!U[u])continue;var id=u+'.0';" +
    "if(!U[u].questions[id])U[u].topics.push({id:id,name:" + JSON.stringify(TOPIC_NAME) + "});" +
    "U[u].questions[id]=D[u];}})();" + NL;
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

      if (path === "/api/class-stats/custom.js" && req.method === "GET") {
        return new Response(await customJs(env), {
          headers: { "Content-Type": "application/javascript; charset=utf-8", "Cache-Control": "public, max-age=60" }
        });
      }

      if (path.indexOf("/api/class-stats/custom/") === 0 || path === "/api/class-stats/report") {
        if (!teacher(req, env)) return json(req, { error: "wrong code" }, 403);
      }

      if (path === "/api/class-stats/report" && req.method === "GET") {
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

      if (path === "/api/class-stats/custom/list" && req.method === "GET") {
        const { results } = await env.DB.prepare(
          "SELECT unit, slot, data, hidden, updated FROM custom_qs ORDER BY unit, slot"
        ).all();
        return json(req, {
          questions: results.map(r => ({ unit: r.unit, slot: r.slot, hidden: !!r.hidden, updated: r.updated, data: JSON.parse(r.data) }))
        });
      }

      if (path === "/api/class-stats/custom/save" && req.method === "POST") {
        const b = await req.json().catch(() => null);
        const unit = b && b.unit;
        const data = cleanQ(b && b.data);
        if (!Number.isInteger(unit) || unit < 1 || unit > 9 || !data) return json(req, { error: "bad question" }, 400);
        if (b.slot == null) {
          const row = await env.DB.prepare("SELECT COALESCE(MAX(slot) + 1, 0) AS s FROM custom_qs WHERE unit = ?").bind(unit).first();
          const slot = row ? row.s : 0;
          if (slot > 999) return json(req, { error: "too many questions" }, 400);
          await env.DB.prepare("INSERT INTO custom_qs (unit, slot, data, hidden, updated) VALUES (?, ?, ?, 0, ?)")
            .bind(unit, slot, JSON.stringify(data), Date.now()).run();
          return json(req, { unit, slot });
        }
        if (!Number.isInteger(b.slot)) return json(req, { error: "bad slot" }, 400);
        const r = await env.DB.prepare("UPDATE custom_qs SET data = ?, updated = ? WHERE unit = ? AND slot = ?")
          .bind(JSON.stringify(data), Date.now(), unit, b.slot).run();
        if (!r.meta || !r.meta.changes) return json(req, { error: "not found" }, 404);
        return json(req, { unit, slot: b.slot });
      }

      if (path === "/api/class-stats/custom/hide" && req.method === "POST") {
        const b = await req.json().catch(() => null);
        if (!b || !Number.isInteger(b.unit) || !Number.isInteger(b.slot) || typeof b.hidden !== "boolean") {
          return json(req, { error: "bad request" }, 400);
        }
        await env.DB.prepare("UPDATE custom_qs SET hidden = ?, updated = ? WHERE unit = ? AND slot = ?")
          .bind(b.hidden ? 1 : 0, Date.now(), b.unit, b.slot).run();
        return json(req, { ok: true });
      }

      return json(req, { error: "not found" }, 404);
    } catch (e) {
      return json(req, { error: "server" }, 500);
    }
  }
};
