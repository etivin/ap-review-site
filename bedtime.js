/* ─────────────────────────────────────────────────────────────
   Bedtime guard (US Eastern time, whatever the device clock says).

   8:00 PM–11:00 PM Soft nudge: an overlay asks whether the student should
                    be asleep. It can be dismissed and comes back every
                    15 minutes.
   11:00 PM–5:00 AM Night lock: a full page of sleep statistics covers the
                    site and cannot be dismissed. The page underneath is
                    inert and keys are swallowed. A visible "Teacher unlock"
                    box takes Eli's code (stored only as a SHA-256 hash, same
                    code as games-lock.js) and unlocks this browser for the
                    rest of tonight (localStorage bedtimeUnlock = night id).

   A page left open re-checks the clock every 30 seconds, so it locks at
   11:00 on its own. Self-contained: injects its own styles.
   ───────────────────────────────────────────────────────────── */
(function () {
  "use strict";

  // ---- Config ------------------------------------------------------------
  var NUDGE_MIN   = 20 * 60;        // 8:00 PM -> minutes since midnight
  var LOCK_MIN    = 23 * 60;        // 11:00 PM
  var END_MIN     = 5  * 60;        // 5:00 AM (window wraps past midnight)
  var NAG_MS      = 15 * 60 * 1000; // re-prompt every 15 minutes
  var WAKE_MIN    = 6 * 60 + 30;    // assumed school-day wake-up for the sleep math
  var HASH = 'f0edbe28ac723c57055d27fb30cbe4f12d934dce606f6348ad8d17fa77d03822';
  var UKEY = 'bedtimeUnlock';

  if (window.self !== window.top) return; // never inside embedded frames

  // ---- Eastern-time helpers ----------------------------------------------
  // {min: minutes since midnight, ymd: "YYYY-MM-DD"} in America/New_York.
  function eastern() {
    try {
      var parts = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        year: "numeric", month: "2-digit", day: "2-digit",
        hour: "2-digit", minute: "2-digit", hour12: false
      }).formatToParts(new Date());
      var p = {};
      for (var i = 0; i < parts.length; i++) p[parts[i].type] = parts[i].value;
      var h = parseInt(p.hour, 10) % 24; // some engines report "24" at midnight
      return { min: h * 60 + parseInt(p.minute, 10), ymd: p.year + "-" + p.month + "-" + p.day };
    } catch (e) {
      var d = new Date();
      return { min: d.getHours() * 60 + d.getMinutes(),
               ymd: d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() };
    }
  }

  function phase() {
    var m = eastern().min;
    if (m >= LOCK_MIN || m < END_MIN) return "lock";
    if (m >= NUDGE_MIN) return "nudge";
    return "day";
  }

  // One id per night: after midnight it still belongs to the evening before.
  function nightId() {
    var e = eastern();
    if (e.min >= END_MIN) return e.ymd;
    var d = new Date(e.ymd + "T12:00:00");
    d.setDate(d.getDate() - 1);
    return d.toISOString().slice(0, 10);
  }

  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function unlockedTonight() { return get(UKEY) === nightId(); }

  function sha256(s) {
    if (!window.crypto || !crypto.subtle) return Promise.resolve("");
    return crypto.subtle.digest("SHA-256", new TextEncoder().encode(s)).then(function (buf) {
      return Array.prototype.map.call(new Uint8Array(buf), function (b) {
        return ("0" + b.toString(16)).slice(-2);
      }).join("");
    });
  }

  function easternClockLabel() {
    try {
      return new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York", hour: "numeric", minute: "2-digit", hour12: true
      }).format(new Date()) + " ET";
    } catch (e) { return ""; }
  }

  // Hours of sleep left if the student goes to bed right now.
  function sleepLeftLabel() {
    var m = eastern().min;
    var left = (WAKE_MIN - m + 1440) % 1440;
    var h = Math.floor(left / 60), mm = left % 60;
    return h + " hr" + (mm ? " " + mm + " min" : "");
  }

  // ---- Styles ------------------------------------------------------------
  function injectStyles() {
    if (document.getElementById("bedtime-styles")) return;
    var css = ''
      + '#bedtime-overlay,#bedtime-lock{position:fixed;inset:0;z-index:2147483000;'
      + 'background:radial-gradient(120% 120% at 50% 0%,#1a2340 0%,#0b1020 60%,#05070f 100%);'
      + 'font-family:system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;'
      + 'color:#e8ecf6;overflow-y:auto;-webkit-tap-highlight-color:transparent;'
      + 'animation:bedtimeFade .35s ease both;box-sizing:border-box;}'
      + '#bedtime-overlay{display:flex;align-items:center;justify-content:center;padding:24px;}'
      + '@keyframes bedtimeFade{from{opacity:0}to{opacity:1}}'
      + '@keyframes bedtimeRise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}'
      + '#bedtime-card{max-width:560px;width:100%;margin:auto;'
      + 'background:rgba(20,27,48,.72);border:1px solid rgba(120,140,210,.28);'
      + 'border-radius:20px;padding:34px 30px 30px;'
      + 'box-shadow:0 30px 80px rgba(0,0,0,.55);backdrop-filter:blur(6px);'
      + 'animation:bedtimeRise .45s .05s ease both;}'
      + '#bedtime-card h2{margin:0 0 6px;text-align:center;font-size:26px;'
      + 'font-weight:800;letter-spacing:.2px;color:#fff;}'
      + '.bt-clock{text-align:center;font-size:14px;'
      + 'color:#9fb0d8;margin:0 0 20px;font-variant-numeric:tabular-nums;}'
      + '.bt-lead{text-align:center;font-size:15px;color:#c7d0ea;'
      + 'margin:0 0 20px;line-height:1.5;}'
      + '#bedtime-card ul{list-style:none;margin:0 0 26px;padding:0;'
      + 'display:grid;gap:12px;}'
      + '#bedtime-card li{display:flex;gap:12px;align-items:flex-start;'
      + 'background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.06);'
      + 'border-radius:12px;padding:12px 14px;font-size:14px;line-height:1.45;color:#dbe2f4;}'
      + '#bedtime-card li b{color:#fff;font-weight:700;}'
      + '#bedtime-actions{display:flex;flex-direction:column;gap:10px;}'
      + '.bt-btn{border:0;border-radius:12px;padding:14px 18px;font-size:15px;'
      + 'font-weight:700;cursor:pointer;font-family:inherit;transition:transform .12s ease,filter .12s ease;}'
      + '.bt-btn:active{transform:translateY(1px);}'
      + '.bt-primary{background:linear-gradient(180deg,#5b7cff,#3f5be0);color:#fff;'
      + 'box-shadow:0 8px 24px rgba(63,91,224,.45);}'
      + '.bt-primary:hover{filter:brightness(1.08);}'
      + '.bt-secondary{background:transparent;color:#8fa0c8;border:1px solid rgba(143,160,200,.35);'
      + 'font-weight:600;font-size:13px;padding:11px 18px;}'
      + '.bt-secondary:hover{color:#c7d0ea;border-color:rgba(143,160,200,.6);}'
      // Night lock page
      + '#bedtime-lock .bl-wrap{max-width:1040px;margin:0 auto;padding:56px 24px 48px;animation:bedtimeRise .5s ease both;}'
      + '#bedtime-lock .bl-moon{display:block;margin:0 auto 14px;width:64px;height:64px;color:#ffd98a;filter:drop-shadow(0 0 24px rgba(255,217,138,.45));}'
      + '#bedtime-lock h1{margin:0 0 8px;text-align:center;font-size:clamp(28px,5vw,44px);font-weight:800;color:#fff;letter-spacing:.2px;}'
      + '#bedtime-lock .bl-sub{text-align:center;max-width:640px;margin:0 auto 10px;font-size:16px;line-height:1.55;color:#c7d0ea;}'
      + '#bedtime-lock .bl-left{text-align:center;margin:18px auto 36px;font-size:15px;color:#9fb0d8;}'
      + '#bedtime-lock .bl-left b{display:block;font-size:34px;color:#ffd98a;font-variant-numeric:tabular-nums;margin-top:4px;}'
      + '#bedtime-lock h3{margin:0 0 14px;font-size:13px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:#8fa0c8;}'
      + '#bedtime-lock .bl-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:14px;margin:0 0 40px;}'
      + '#bedtime-lock .bl-stat{background:rgba(20,27,48,.72);border:1px solid rgba(120,140,210,.24);border-radius:16px;padding:20px 18px 16px;}'
      + '#bedtime-lock .bl-num{font-size:38px;font-weight:800;line-height:1;color:#fff;margin-bottom:10px;font-variant-numeric:tabular-nums;}'
      + '#bedtime-lock .bl-stat p{margin:0 0 10px;font-size:14px;line-height:1.45;color:#dbe2f4;}'
      + '#bedtime-lock .bl-src{font-size:11.5px;color:#7f8fb6;line-height:1.35;}'
      + '#bedtime-lock .bl-why{background:rgba(91,124,255,.1);border:1px solid rgba(91,124,255,.3);border-radius:16px;padding:22px 22px 8px;margin:0 0 40px;}'
      + '#bedtime-lock .bl-why ul{margin:0;padding:0 0 0 20px;}'
      + '#bedtime-lock .bl-why li{margin:0 0 14px;font-size:15px;line-height:1.5;color:#dbe2f4;}'
      + '#bedtime-lock .bl-why li b{color:#fff;}'
      + '#bedtime-lock .bl-teacher{max-width:420px;margin:0 auto;text-align:center;border-top:1px solid rgba(143,160,200,.2);padding-top:26px;}'
      + '#bedtime-lock .bl-teacher p{margin:0 0 12px;font-size:13px;color:#8fa0c8;line-height:1.45;}'
      + '#bedtime-lock .bl-form{display:flex;gap:8px;justify-content:center;}'
      + '#bedtime-lock input{flex:1;min-width:0;max-width:200px;background:rgba(255,255,255,.06);border:1px solid rgba(143,160,200,.35);border-radius:10px;padding:11px 12px;font:inherit;font-size:15px;color:#fff;text-align:center;letter-spacing:.2em;}'
      + '#bedtime-lock input:focus{outline:2px solid #5b7cff;outline-offset:1px;}'
      + '#bedtime-lock .bl-msg{min-height:18px;margin-top:10px;font-size:13px;color:#ff9a9a;}'
      + '@keyframes blShake{0%,100%{transform:translateX(0)}25%{transform:translateX(-7px)}50%{transform:translateX(6px)}75%{transform:translateX(-3px)}}'
      + '#bedtime-lock .bl-shake{animation:blShake .4s;}'
      + 'html.bedtime-locked,body.bedtime-locked{overflow:hidden !important;}'
      + '@media(max-width:480px){#bedtime-card{padding:26px 20px 24px;}'
      + '#bedtime-card h2{font-size:22px;}#bedtime-lock .bl-wrap{padding:36px 16px 36px;}}';
    var s = document.createElement("style");
    s.id = "bedtime-styles";
    s.textContent = css;
    document.head.appendChild(s);
  }

  function lockScroll(on) {
    var d = document.documentElement, b = document.body;
    if (on) { d.classList.add("bedtime-locked"); if (b) b.classList.add("bedtime-locked"); }
    else    { d.classList.remove("bedtime-locked"); if (b) b.classList.remove("bedtime-locked"); }
  }

  // ---- Soft nudge (8:00 PM–11:00 PM) ---------------------------------------
  var nagTimer = null;

  function buildOverlay(isNag) {
    var overlay = document.createElement("div");
    overlay.id = "bedtime-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-labelledby", "bedtime-title");

    var heading = isNag
      ? "Still up? Should you go to bed now?"
      : "Shouldn't you go to bed soon?";
    var lead = isNag
      ? "It's " + easternClockLabel() + ". Getting to bed now is the single best thing you can do to be ready for tomorrow."
      : "It's " + easternClockLabel() + ". Real studying happens while you sleep, here's why tonight's rest matters more than another hour of cramming:";
    var btnLabel = isNag
      ? "No, I'd still like to get sub-optimal sleep"
      : "No, I would like to get sub-optimal sleep";

    overlay.innerHTML = ''
      + '<div id="bedtime-card">'
      +   '<h2 id="bedtime-title">' + heading + '</h2>'
      +   '<p class="bt-clock">Bedtime reminder 8:00 PM · site locks at 11:00 PM Eastern</p>'
      +   '<p class="bt-lead">' + lead + '</p>'
      +   '<ul>'
      +     '<li><span><b>Memory gets locked in overnight.</b> During deep sleep your brain replays the day and moves what you studied into long-term memory. Skip the sleep and a lot of tonight’s work simply doesn’t stick.</span></li>'
      +     '<li><span><b>Recall &amp; focus tank when you’re tired.</b> One short night can cut next-day attention and memory recall by up to ~40%. On a test, that’s letter grades.</span></li>'
      +     '<li><span><b>Sleep beats cramming.</b> Study after study shows students who sleep on the material outperform those who trade sleep for extra review hours.</span></li>'
      +     '<li><span><b>Problem-solving improves by morning.</b> Sleep reorganizes what you learned, so tricky connections you couldn’t see tonight often click after rest.</span></li>'
      +     '<li><span><b>Mood, stress &amp; immunity.</b> Consistent 8–9 hours steadies your mood, lowers test anxiety, and keeps you from getting sick before the big day.</span></li>'
      +   '</ul>'
      +   '<div id="bedtime-actions">'
      +     '<button type="button" class="bt-btn bt-primary" id="bt-sleep">Okay, I’ll go to sleep</button>'
      +     '<button type="button" class="bt-btn bt-secondary" id="bt-stay">' + btnLabel + '</button>'
      +   '</div>'
      + '</div>';

    return overlay;
  }

  function dismiss() {
    var o = document.getElementById("bedtime-overlay");
    if (o) o.parentNode.removeChild(o);
    lockScroll(false);
    if (nagTimer) clearTimeout(nagTimer);
    nagTimer = setTimeout(function () {
      if (phase() === "nudge") showOverlay(true);
    }, NAG_MS);
  }

  function showOverlay(isNag) {
    if (phase() !== "nudge") return;
    if (document.getElementById("bedtime-overlay")) return;
    injectStyles();
    var overlay = buildOverlay(isNag);
    document.body.appendChild(overlay);
    lockScroll(true);

    overlay.querySelector("#bt-stay").addEventListener("click", dismiss);
    overlay.querySelector("#bt-sleep").addEventListener("click", function () {
      var card = overlay.querySelector("#bedtime-card");
      card.innerHTML = '<h2>Good night: sleep well.</h2>'
        + '<p class="bt-lead">Your brain will do the studying for you now. See you tomorrow, sharp and ready.</p>'
        + '<div id="bedtime-actions"><button type="button" class="bt-btn bt-secondary" id="bt-close">Close this tab</button></div>';
      lockScroll(true);
      var c = card.querySelector("#bt-close");
      if (c) c.addEventListener("click", function () { window.close(); });
    });

    // Escape acts as "stay" so the nudge never traps the user.
    overlay.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape") dismiss();
    });
    overlay.tabIndex = -1;
    overlay.focus();
  }

  // ---- Night lock (11:00 PM–5:00 AM) ---------------------------------------
  var STATS = [
    { num: "8–10 hrs", txt: "Sleep teenagers (13–18) need every night for health, memory, and mood.",
      src: "American Academy of Sleep Medicine, endorsed by the American Academy of Pediatrics (2016)" },
    { num: "3 in 4", txt: "U.S. high school students get less than 8 hours on school nights. Most of your classmates are running short.",
      src: "CDC Youth Risk Behavior Survey" },
    { num: "~40%", txt: "Drop in the brain’s ability to form new memories after one night without sleep. What you study tired doesn’t stick.",
      src: "Yoo, Walker et al., Nature Neuroscience (2007)" },
    { num: "Worse", txt: "Students who gave up sleep to study extra understood less in class and struggled more on tests the next day.",
      src: "Gillen-O’Neel, Huynh &amp; Fuligni, Child Development (2013)" },
    { num: "+38%", txt: "For each hour of sleep a teen loses, the odds of feeling sad or hopeless rise by about 38%.",
      src: "Winsler et al., Journal of Youth and Adolescence (2015)" },
    { num: "1.7×", txt: "Teen athletes sleeping under 8 hours were about 1.7 times as likely to get injured.",
      src: "Milewski et al., Journal of Pediatric Orthopaedics (2014)" },
    { num: "0.05%", txt: "Being awake 17–19 hours slows reaction time and judgment about as much as a 0.05% blood alcohol level.",
      src: "Williamson &amp; Feyer, Occupational and Environmental Medicine (2000)" },
    { num: "2 hrs", txt: "How much later a teen body clock releases melatonin than a child’s. Screens at night push it later still.",
      src: "National Sleep Foundation; Carskadon, sleep research on adolescents" }
  ];

  var lockTimer = null;

  function buildLock() {
    var lock = document.createElement("div");
    lock.id = "bedtime-lock";
    lock.setAttribute("role", "dialog");
    lock.setAttribute("aria-modal", "true");
    lock.setAttribute("aria-labelledby", "bl-title");

    var cards = STATS.map(function (s) {
      return '<div class="bl-stat"><div class="bl-num">' + s.num + '</div><p>' + s.txt + '</p>'
        + '<div class="bl-src">' + s.src + '</div></div>';
    }).join("");

    lock.innerHTML = ''
      + '<div class="bl-wrap">'
      +   '<svg class="bl-moon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>'
      +   '<h1 id="bl-title">The site is closed for the night</h1>'
      +   '<p class="bl-sub">It’s <span class="bl-now">' + easternClockLabel() + '</span>. Tivin Teaches locks from 11:00 PM to 5:00 AM Eastern. '
      +   'Anything you would review right now, you will remember better after a full night of sleep, so going to bed is the best studying you can do tonight.</p>'
      +   '<p class="bl-left">If you go to sleep right now and get up at 6:30 AM, you’ll get<b class="bl-hrs">' + sleepLeftLabel() + '</b></p>'
      +   '<h3>The sleep numbers</h3>'
      +   '<div class="bl-grid">' + cards + '</div>'
      +   '<div class="bl-why"><h3>Why sleeping beats studying right now</h3><ul>'
      +     '<li><b>Your brain studies while you sleep.</b> Deep sleep replays what you learned today and files it into long-term memory. Stay up and you skip the step that makes it stick.</li>'
      +     '<li><b>Tomorrow’s test runs on tonight’s sleep.</b> Recall, focus, and reading speed all fall when you’re short on sleep, and those are exactly what a timed AP exam measures.</li>'
      +     '<li><b>Late-night review is low quality.</b> An hour of tired studying is worth far less than twenty sharp minutes tomorrow morning or at lunch.</li>'
      +     '<li><b>The site will be here at 5:00 AM.</b> Your flashcards, streak, and progress are all saved. Nothing is lost by stopping now.</li>'
      +   '</ul></div>'
      +   '<div class="bl-teacher">'
      +     '<h3>Teacher unlock</h3>'
      +     '<p>Your teacher can unlock the site on this browser for the rest of tonight.</p>'
      +     '<div class="bl-form">'
      +       '<input type="password" inputmode="numeric" autocomplete="off" placeholder="Teacher code" aria-label="Teacher code" id="bl-code">'
      +       '<button type="button" class="bt-btn bt-primary" id="bl-go" style="padding:11px 18px">Unlock</button>'
      +     '</div>'
      +     '<div class="bl-msg" id="bl-msg" role="status"></div>'
      +   '</div>'
      + '</div>';
    return lock;
  }

  // Swallow keys aimed at the page (site search, game shortcuts) while locked.
  function keyGuard(ev) {
    var lock = document.getElementById("bedtime-lock");
    if (!lock) return;
    if (lock.contains(ev.target)) {
      ev.stopPropagation();
      if (ev.type === "keydown" && ev.key === "Enter" && ev.target.id === "bl-code") {
        ev.preventDefault();
        tryCode();
      }
      return;
    }
    ev.preventDefault();
    ev.stopPropagation();
    var input = document.getElementById("bl-code");
    if (input) input.focus();
  }

  function setInert(on) {
    var kids = document.body ? document.body.children : [];
    for (var i = 0; i < kids.length; i++) {
      var k = kids[i];
      if (k.id === "bedtime-lock" || k.tagName === "SCRIPT" || k.tagName === "STYLE") continue;
      if (on) { if (!k.hasAttribute("inert")) { k.setAttribute("inert", ""); k.setAttribute("data-bt-inert", ""); } }
      else if (k.hasAttribute("data-bt-inert")) { k.removeAttribute("inert"); k.removeAttribute("data-bt-inert"); }
    }
  }

  function tryCode() {
    var input = document.getElementById("bl-code");
    var msg = document.getElementById("bl-msg");
    if (!input) return;
    sha256(input.value.trim()).then(function (h) {
      if (h === HASH) {
        set(UKEY, nightId());
        hideLock();
      } else {
        msg.textContent = "That code is not right.";
        input.value = "";
        var f = input.parentNode;
        f.classList.remove("bl-shake"); void f.offsetWidth; f.classList.add("bl-shake");
      }
    });
  }

  function showLock() {
    if (document.getElementById("bedtime-lock")) return;
    dismissNudgeSilently();
    injectStyles();
    var lock = buildLock();
    document.body.appendChild(lock);
    setInert(true);
    lockScroll(true);
    lock.querySelector("#bl-go").addEventListener("click", tryCode);
    window.addEventListener("keydown", keyGuard, true);
    window.addEventListener("keypress", keyGuard, true);
    window.addEventListener("keyup", keyGuard, true);
    // Keep the clock and the sleep math current while the page sits open.
    lockTimer = setInterval(function () {
      var n = lock.querySelector(".bl-now"), hr = lock.querySelector(".bl-hrs");
      if (n) n.textContent = easternClockLabel();
      if (hr) hr.textContent = sleepLeftLabel();
    }, 30000);
  }

  function hideLock() {
    var lock = document.getElementById("bedtime-lock");
    if (lock) lock.parentNode.removeChild(lock);
    if (lockTimer) clearInterval(lockTimer);
    lockTimer = null;
    window.removeEventListener("keydown", keyGuard, true);
    window.removeEventListener("keypress", keyGuard, true);
    window.removeEventListener("keyup", keyGuard, true);
    setInert(false);
    lockScroll(false);
  }

  function dismissNudgeSilently() {
    var o = document.getElementById("bedtime-overlay");
    if (o) o.parentNode.removeChild(o);
    if (nagTimer) clearTimeout(nagTimer);
    nagTimer = null;
  }

  // ---- Boot --------------------------------------------------------------
  function check(first) {
    var p = phase();
    if (p === "lock" && !unlockedTonight()) { showLock(); return; }
    if (document.getElementById("bedtime-lock") && (p !== "lock" || unlockedTonight())) hideLock();
    if (p === "nudge" && (first || !nagTimer)) showOverlay(false);
    if (p === "day") { dismissNudgeSilently(); lockScroll(false); }
  }

  function boot() {
    check(true);
    setInterval(function () { check(false); }, 30000);
    // A teacher unlock in another tab frees this one too.
    window.addEventListener("storage", function (e) { if (e.key === UKEY) check(false); });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
