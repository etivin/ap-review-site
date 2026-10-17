/* ─────────────────────────────────────────────────────────────
   Night lock: Cloudflare Worker that sits in front of tivinteaches.com.
   NOT part of the GitHub Pages site. Paste this into the Cloudflare dashboard
   (Workers & Pages > night-lock > Edit code). Setup steps: cloudflare/README.md.

   From 10:30 PM to 5:00 AM Eastern (Cloudflare's clock, not the student's),
   every request gets the "closed for the night" page instead of the site,
   unless the browser has a signed teacher-unlock cookie for tonight.
   Developer tools on the student's side cannot get around it, because the
   real pages are never sent.

   Secrets (Worker > Settings > Variables and Secrets, type "Secret"):
     TEACHER_CODE   the unlock code
     UNLOCK_SECRET  any long random string; signs the unlock cookie
   ───────────────────────────────────────────────────────────── */

const LOCK_MIN = 22 * 60 + 30; // 10:30 PM
const END_MIN = 5 * 60;        // 5:00 AM
const COOKIE = "bt_unlock";

function eastern() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", hour12: false
  }).formatToParts(new Date());
  const p = {};
  for (const x of parts) p[x.type] = x.value;
  const h = parseInt(p.hour, 10) % 24;
  return { min: h * 60 + parseInt(p.minute, 10), ymd: `${p.year}-${p.month}-${p.day}` };
}

// One id per night: after midnight it still belongs to the evening before.
function nightId(e) {
  if (e.min >= END_MIN) return e.ymd;
  const d = new Date(e.ymd + "T12:00:00Z");
  d.setUTCDate(d.getUTCDate() - 1);
  return d.toISOString().slice(0, 10);
}

function clockLabel() {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York", hour: "numeric", minute: "2-digit", hour12: true
  }).format(new Date()) + " ET";
}

async function sign(secret, msg) {
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(msg));
  return [...new Uint8Array(sig)].map(b => b.toString(16).padStart(2, "0")).join("");
}

function getCookie(request, name) {
  const all = request.headers.get("Cookie") || "";
  for (const part of all.split(";")) {
    const [k, ...v] = part.trim().split("=");
    if (k === name) return v.join("=");
  }
  return null;
}

async function unlocked(request, env, id) {
  const c = getCookie(request, COOKIE);
  if (!c || !env.UNLOCK_SECRET) return false;
  const [cid, sig] = c.split(".");
  return cid === id && sig === await sign(env.UNLOCK_SECRET, id);
}

const STATS = [
  ["8–10 hrs", "Sleep teenagers (13–18) need every night for health, memory, and mood.", "American Academy of Sleep Medicine, endorsed by the American Academy of Pediatrics (2016)"],
  ["3 in 4", "U.S. high school students get less than 8 hours on school nights. Most of your classmates are running short.", "CDC Youth Risk Behavior Survey"],
  ["~40%", "Drop in the brain’s ability to form new memories after one night without sleep. What you study tired doesn’t stick.", "Yoo, Walker et al., Nature Neuroscience (2007)"],
  ["Worse", "Students who gave up sleep to study extra understood less in class and struggled more on tests the next day.", "Gillen-O’Neel, Huynh &amp; Fuligni, Child Development (2013)"],
  ["+38%", "For each hour of sleep a teen loses, the odds of feeling sad or hopeless rise by about 38%.", "Winsler et al., Journal of Youth and Adolescence (2015)"],
  ["1.7×", "Teen athletes sleeping under 8 hours were about 1.7 times as likely to get injured.", "Milewski et al., Journal of Pediatric Orthopaedics (2014)"],
  ["0.05%", "Being awake 17–19 hours slows reaction time and judgment about as much as a 0.05% blood alcohol level.", "Williamson &amp; Feyer, Occupational and Environmental Medicine (2000)"],
  ["2 hrs", "How much later a teen body clock releases melatonin than a child’s. Screens at night push it later still.", "National Sleep Foundation; Carskadon, sleep research on adolescents"]
];

function lockPage(msg, status) {
  const cards = STATS.map(([n, t, s]) =>
    `<div class="st"><div class="n">${n}</div><p>${t}</p><div class="src">${s}</div></div>`).join("");
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex">
<title>Closed for the Night · Tivin Teaches</title>
<link rel="icon" href="/favicon.ico">
<style>
*{box-sizing:border-box}
body{margin:0;min-height:100vh;background:radial-gradient(120% 120% at 50% 0%,#1a2340 0%,#0b1020 60%,#05070f 100%);color:#e8ecf6;font-family:system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif}
.w{max-width:1040px;margin:0 auto;padding:56px 24px 48px}
.moon{display:block;margin:0 auto 14px;width:64px;height:64px;color:#ffd98a;filter:drop-shadow(0 0 24px rgba(255,217,138,.45))}
h1{margin:0 0 8px;text-align:center;font-size:clamp(28px,5vw,44px);font-weight:800;color:#fff}
.sub{text-align:center;max-width:640px;margin:0 auto 36px;font-size:16px;line-height:1.55;color:#c7d0ea}
h3{margin:0 0 14px;font-size:13px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:#8fa0c8}
.g{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:14px;margin:0 0 40px}
.st{background:rgba(20,27,48,.72);border:1px solid rgba(120,140,210,.24);border-radius:16px;padding:20px 18px 16px}
.n{font-size:38px;font-weight:800;line-height:1;color:#fff;margin-bottom:10px}
.st p{margin:0 0 10px;font-size:14px;line-height:1.45;color:#dbe2f4}
.src{font-size:11.5px;color:#7f8fb6;line-height:1.35}
.why{background:rgba(91,124,255,.1);border:1px solid rgba(91,124,255,.3);border-radius:16px;padding:22px 22px 8px;margin:0 0 40px}
.why ul{margin:0;padding:0 0 0 20px}.why li{margin:0 0 14px;font-size:15px;line-height:1.5;color:#dbe2f4}.why b{color:#fff}
.t{max-width:420px;margin:0 auto;text-align:center;border-top:1px solid rgba(143,160,200,.2);padding-top:26px}
.t p{margin:0 0 12px;font-size:13px;color:#8fa0c8}
form{display:flex;gap:8px;justify-content:center}
input{flex:1;min-width:0;max-width:200px;background:rgba(255,255,255,.06);border:1px solid rgba(143,160,200,.35);border-radius:10px;padding:11px 12px;font:inherit;font-size:15px;color:#fff;text-align:center;letter-spacing:.2em}
button{border:0;border-radius:12px;padding:11px 18px;font:inherit;font-size:15px;font-weight:700;cursor:pointer;color:#fff;background:linear-gradient(180deg,#5b7cff,#3f5be0)}
.msg{min-height:18px;margin-top:10px;font-size:13px;color:#ff9a9a}
@media(max-width:480px){.w{padding:36px 16px}}
</style></head><body><div class="w">
<svg class="moon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
<h1>The site is closed for the night</h1>
<p class="sub">It’s ${clockLabel()}. Tivin Teaches locks from 10:30 PM to 5:00 AM Eastern. Anything you would review right now, you will remember better after a full night of sleep, so going to bed is the best studying you can do tonight.</p>
<h3>The sleep numbers</h3><div class="g">${cards}</div>
<div class="why"><h3>Why sleeping beats studying right now</h3><ul>
<li><b>Your brain studies while you sleep.</b> Deep sleep replays what you learned today and files it into long-term memory. Stay up and you skip the step that makes it stick.</li>
<li><b>Tomorrow’s test runs on tonight’s sleep.</b> Recall, focus, and reading speed all fall when you’re short on sleep, and those are exactly what a timed AP exam measures.</li>
<li><b>Late-night review is low quality.</b> An hour of tired studying is worth far less than twenty sharp minutes tomorrow morning or at lunch.</li>
<li><b>The site will be here at 5:00 AM.</b> Your flashcards, streak, and progress are all saved. Nothing is lost by stopping now.</li>
</ul></div>
<div class="t"><h3>Teacher unlock</h3><p>Your teacher can unlock the site on this browser for the rest of tonight.</p>
<form method="post" action="/__teacher-unlock"><input type="password" name="code" autocomplete="off" placeholder="Teacher code" aria-label="Teacher code"><button type="submit">Unlock</button></form>
<div class="msg" role="status">${msg}</div></div>
</div></body></html>`;
  return new Response(html, {
    status,
    headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store", "retry-after": "3600" }
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const e = eastern();
    const id = nightId(e);
    const night = e.min >= LOCK_MIN || e.min < END_MIN;

    if (url.pathname === "/__teacher-unlock" && request.method === "POST") {
      const form = await request.formData();
      const code = String(form.get("code") || "").trim();
      if (!env.TEACHER_CODE || code !== env.TEACHER_CODE) return lockPage("That code is not right.", 403);
      const sig = await sign(env.UNLOCK_SECRET, id);
      // Also tell bedtime.js (the in-page lock) that tonight is unlocked.
      return new Response(
        `<!doctype html><meta charset="utf-8"><script>try{localStorage.setItem("bedtimeUnlock","${id}")}catch(e){}location.replace("/")</script>`,
        { headers: {
            "content-type": "text/html; charset=utf-8",
            "cache-control": "no-store",
            "set-cookie": `${COOKIE}=${id}.${sig}; Path=/; Secure; HttpOnly; SameSite=Lax; Max-Age=43200`
        } });
    }

    if (night && url.pathname !== "/favicon.ico" && !(await unlocked(request, env, id))) {
      const accept = request.headers.get("Accept") || "";
      // 503 = "temporarily closed", so search engines keep the real pages indexed.
      if (accept.includes("text/html")) return lockPage("", 503);
      return new Response("Closed for the night.", { status: 503, headers: { "cache-control": "no-store" } });
    }

    // Normal hours (or unlocked): pass through to GitHub Pages. Pages must
    // revalidate so a copy cached before 10:30 is not shown after it.
    const res = await fetch(request);
    const type = res.headers.get("content-type") || "";
    if (!type.includes("text/html")) return res;
    const out = new Response(res.body, res);
    out.headers.set("cache-control", "no-cache");
    return out;
  }
};
