/* Class stats + teacher questions: Cloudflare Worker + D1 database behind
   tivinteaches.com/api/class-stats. NOT part of the GitHub Pages site: paste this into
   the Cloudflare dashboard (Workers & Pages > class-stats > Edit code). Setup and the
   database schema: cloudflare/README.md.

   Class stats: each browser makes a random id (class-stats.js) and sends
   { id, pick, ok, who } when it answers a bank question. Only the first answer from each
   browser to each question is kept. Nothing personal is stored.

   Teacher questions: MCQs typed in on class-stats.html, each placed in one of the unit's
   AP topics (data.t). They are served as a script (custom.js) that every unit page loads
   right after mcq-bank.js; it puts each question into its topic at index 1000 + slot, so
   it never collides with bank questions (which fill 0..n-1) and its id u{unit}_{topic}_{idx}
   never shifts. Removing one only hides it. An optional walkthrough (data.w: the
   plain-English Work it steps, same fields as walkthrough-data.js) goes into WALKTHROUGH.

   Routes (teacher routes need header X-Teacher-Code = TEACHER_CODE)
     POST /api/class-stats/answer         save one answer, reply with that question's totals
     GET  /api/class-stats/q?id=u4_4.1_0  totals for one question
     GET  /api/class-stats/report         every question's totals (teacher)
     GET  /api/class-stats/custom.js      teacher questions as a script (public)
     GET  /api/class-stats/custom/list    every teacher question, hidden ones too (teacher)
     POST /api/class-stats/custom/save    {unit, slot?, data} add (no slot) or edit (teacher)
     POST /api/class-stats/custom/hide    {unit, slot, hidden} hide or show again (teacher)
     POST /api/class-stats/score          {game, score, who} keep this browser's best, reply with the top 5
     GET  /api/class-stats/scores?game=x  the top 5 scores (numbers only)
     GET  /api/class-stats/board/list     top 5 per game with browser ids (teacher)
     POST /api/class-stats/board/remove   {game, who} delete a score (teacher)
   Racing-game leaderboards (table scores, made on first use): one row per browser per game,
   its best score. Nothing personal; students see only the numbers.

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
const TOPIC_NAME = "Mr. Tivin's Questions";   // only for a question saved without a topic
const TOPIC = /^[1-9]\.\d{1,2}$/;
const IDX0 = 1000;                            // teacher questions sit at index 1000 + slot
const TYPES = ["bestillustrates", "context", "causation", "purpose", "similar"];
const SRC_TAGS = ["WHO", "WHEN", "WHERE", "WHAT", "WHY"];
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
  if (typeof d.t !== "string" || !TOPIC.test(d.t)) return null;
  out.t = d.t;
  if (d.w) {
    out.w = cleanW(d.w, o.length, d.c);
    if (!out.w) return null;
  }
  return out;
}

// Checks a walkthrough: the plain-English Work it steps of sbmcq.js.
function cleanW(w, n, key) {
  if (!w || typeof w !== "object" || TYPES.indexOf(w.type) < 0) return null;
  const three = a => Array.isArray(a) && a.length === 3 && a.every(x => str(x, 400) && x.trim()) ? a : null;
  const say = three(w.say), plain = three(w.plain);
  const hq = str(w.hq || "", 300), meaning = str(w.meaning || "", 800), trap = str(w.trap || "", 1000);
  if (!say || !plain || hq === null || meaning === null || trap === null) return null;
  if (!Array.isArray(w.cut) || w.cut.length !== n || !w.cut.every(x => str(x, 800) !== null)) return null;
  if (!Number.isInteger(w.trapIdx) || w.trapIdx < 0 || w.trapIdx >= n || w.trapIdx === key) return null;
  const hs = Array.isArray(w.hs) ? w.hs.filter(x => str(x, 400) && x.trim()).slice(0, 6) : [];
  const src = Array.isArray(w.src) ? w.src.filter(r => r && SRC_TAGS.indexOf(r.tag) >= 0 &&
    str(r.since, 400) && str(r.therefore, 400)).slice(0, 4).map(r => ({ tag: r.tag, since: r.since, therefore: r.therefore })) : [];
  return { type: w.type, hq, hs, src, say, plain, meaning, cut: w.cut, trapIdx: w.trapIdx, trap };
}

// Racing-game leaderboards: each browser's best score per game; the top 5 are public (numbers only).
const GAMES = ["racer", "voyage", "minecart", "rails", "tank", "sputnik", "freight"];
const MAX_SCORE = 10000000;
const TOP = 5;
let scoresReady = false;
async function scoresTable(env) {
  if (scoresReady) return;
  await env.DB.prepare("CREATE TABLE IF NOT EXISTS scores (game TEXT NOT NULL, who TEXT NOT NULL, " +
    "score INTEGER NOT NULL, ts INTEGER NOT NULL, PRIMARY KEY (game, who))").run();
  scoresReady = true;
}
async function topScores(env, game) {
  const { results } = await env.DB.prepare(
    "SELECT score FROM scores WHERE game = ? ORDER BY score DESC, ts ASC LIMIT ?"
  ).bind(game, TOP).all();
  return results.map(r => r.score);
}

function escHtml(s) {
  return String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

async function customJs(env) {
  const { results } = await env.DB.prepare(
    "SELECT unit, slot, data, hidden FROM custom_qs ORDER BY unit, slot"
  ).all();
  const D = [];
  for (const r of results) {
    let q;
    try { q = JSON.parse(r.data); } catch (e) { continue; }
    const t = q.t && TOPIC.test(q.t) ? q.t : r.unit + ".0";
    const w = q.w;
    delete q.w; delete q.t;
    // The engine escapes stem, choices, source text; the explanation is shown as HTML.
    q.e = escHtml(q.e).split(NL).join("<br>");
    if (r.hidden) q.hidden = true;
    const x = { u: String(r.unit), t, i: IDX0 + r.slot, q };
    if (w && !r.hidden) x.w = w;
    D.push(x);
  }
  const data = JSON.stringify(D).split("<").join(BS + "u003c");
  return "/* Teacher questions from class-stats.html (served by the class-stats Worker). */" + NL +
    "(function(){var U=window.APWH_MCQ&&window.APWH_MCQ.units;if(!U)return;" +
    "var W=window.WALKTHROUGH=window.WALKTHROUGH||{};var D=" + data + ";" +
    "D.forEach(function(x){var u=U[x.u];if(!u)return;var a=u.questions[x.t];" +
    "if(!a){u.topics.push({id:x.t,name:" + JSON.stringify(TOPIC_NAME) + "});a=u.questions[x.t]=[];}" +
    "a[x.i]=x.q;if(x.w)W['u'+x.u+'_'+x.t+'_'+x.i]=x.w;});})();" + NL;
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

      if (path === "/api/class-stats/score" && req.method === "POST") {
        const b = await req.json().catch(() => null);
        if (!b || GAMES.indexOf(b.game) < 0 || !WHO.test(b.who || "") ||
            !Number.isInteger(b.score) || b.score < 1 || b.score > MAX_SCORE) {
          return json(req, { error: "bad score" }, 400);
        }
        await scoresTable(env);
        await env.DB.prepare("INSERT INTO scores (game, who, score, ts) VALUES (?, ?, ?, ?) " +
          "ON CONFLICT (game, who) DO UPDATE SET score = excluded.score, ts = excluded.ts WHERE excluded.score > scores.score")
          .bind(b.game, b.who, b.score, Date.now()).run();
        return json(req, { game: b.game, top: await topScores(env, b.game) });
      }

      if (path === "/api/class-stats/scores" && req.method === "GET") {
        const game = url.searchParams.get("game") || "";
        if (GAMES.indexOf(game) < 0) return json(req, { error: "bad game" }, 400);
        await scoresTable(env);
        return json(req, { game, top: await topScores(env, game) });
      }

      if (path.indexOf("/api/class-stats/custom/") === 0 || path.indexOf("/api/class-stats/board/") === 0 ||
          path === "/api/class-stats/report") {
        if (!teacher(req, env)) return json(req, { error: "wrong code" }, 403);
      }

      if (path === "/api/class-stats/board/list" && req.method === "GET") {
        await scoresTable(env);
        const out = {};
        for (const g of GAMES) {
          const { results } = await env.DB.prepare(
            "SELECT who, score, ts FROM scores WHERE game = ? ORDER BY score DESC, ts ASC LIMIT ?"
          ).bind(g, TOP).all();
          out[g] = results;
        }
        return json(req, { games: out });
      }

      if (path === "/api/class-stats/board/remove" && req.method === "POST") {
        const b = await req.json().catch(() => null);
        if (!b || GAMES.indexOf(b.game) < 0 || !WHO.test(b.who || "")) return json(req, { error: "bad request" }, 400);
        await scoresTable(env);
        await env.DB.prepare("DELETE FROM scores WHERE game = ? AND who = ?").bind(b.game, b.who).run();
        return json(req, { ok: true });
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
        if (!Number.isInteger(unit) || unit < 1 || unit > 9 || !data || data.t.split(".")[0] !== String(unit)) {
          return json(req, { error: "bad question" }, 400);
        }
        if (b.slot == null) {
          const row = await env.DB.prepare("SELECT COALESCE(MAX(slot) + 1, 0) AS s FROM custom_qs WHERE unit = ?").bind(unit).first();
          const slot = row ? row.s : 0;
          if (slot > 999) return json(req, { error: "too many questions" }, 400);
          await env.DB.prepare("INSERT INTO custom_qs (unit, slot, data, hidden, updated) VALUES (?, ?, ?, 0, ?)")
            .bind(unit, slot, JSON.stringify(data), Date.now()).run();
          return json(req, { unit, slot });
        }
        if (!Number.isInteger(b.slot)) return json(req, { error: "bad slot" }, 400);
        // A saved question stays in its topic: its id (and students' progress) depends on it.
        const old = await env.DB.prepare("SELECT data FROM custom_qs WHERE unit = ? AND slot = ?").bind(unit, b.slot).first();
        if (!old) return json(req, { error: "not found" }, 404);
        try { const ot = JSON.parse(old.data).t; if (ot) data.t = ot; } catch (e) {}
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
