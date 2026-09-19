/* ─────────────────────────────────────────────────────────────
   Bedtime guard.
   Between 10:30 PM and 5:00 AM (US Eastern), any page load throws up
   a full-screen overlay asking the student whether they should be
   asleep, with the science on why sleep matters for study & memory.
   The student can dismiss it to continue to the site — but every
   15 minutes after that, the overlay comes back to nudge again.

   - Time is computed in America/New_York regardless of the device's
     own clock/timezone, so it fires on Eastern time for everyone.
   - Self-contained: injects its own styles, respects dark mode, and
     never blocks the page permanently.
   ───────────────────────────────────────────────────────────── */
(function () {
  "use strict";

  // ---- Config ------------------------------------------------------------
  var START_MIN   = 22 * 60 + 30; // 10:30 PM  -> minutes since midnight
  var END_MIN     = 5  * 60;      // 5:00 AM    (window wraps past midnight)
  var NAG_MS      = 15 * 60 * 1000; // re-prompt every 15 minutes

  // ---- Eastern-time helper ----------------------------------------------
  // Returns minutes-since-midnight in America/New_York (handles EST/EDT).
  function easternMinutes() {
    try {
      var parts = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      }).formatToParts(new Date());
      var h = 0, m = 0;
      for (var i = 0; i < parts.length; i++) {
        if (parts[i].type === "hour")   h = parseInt(parts[i].value, 10);
        if (parts[i].type === "minute") m = parseInt(parts[i].value, 10);
      }
      if (h === 24) h = 0; // some engines report "24" at midnight
      return h * 60 + m;
    } catch (e) {
      // Fall back to the local clock if Intl/timezone data is unavailable.
      var d = new Date();
      return d.getHours() * 60 + d.getMinutes();
    }
  }

  function inBedtimeWindow() {
    var now = easternMinutes();
    // Window wraps midnight: 22:30–23:59 OR 00:00–05:00
    return now >= START_MIN || now < END_MIN;
  }

  // ---- Styles ------------------------------------------------------------
  function injectStyles() {
    if (document.getElementById("bedtime-styles")) return;
    var css = ''
      + '#bedtime-overlay{position:fixed;inset:0;z-index:2147483000;'
      + 'display:flex;align-items:center;justify-content:center;padding:24px;'
      + 'background:radial-gradient(120% 120% at 50% 0%,#1a2340 0%,#0b1020 60%,#05070f 100%);'
      + 'font-family:system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;'
      + 'color:#e8ecf6;overflow-y:auto;-webkit-tap-highlight-color:transparent;'
      + 'animation:bedtimeFade .35s ease both;}'
      + '@keyframes bedtimeFade{from{opacity:0}to{opacity:1}}'
      + '@keyframes bedtimeRise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}'
      + '#bedtime-card{max-width:560px;width:100%;margin:auto;'
      + 'background:rgba(20,27,48,.72);border:1px solid rgba(120,140,210,.28);'
      + 'border-radius:20px;padding:34px 30px 30px;'
      + 'box-shadow:0 30px 80px rgba(0,0,0,.55);backdrop-filter:blur(6px);'
      + 'animation:bedtimeRise .45s .05s ease both;}'
      + '#bedtime-card h2{margin:0 0 6px;text-align:center;font-size:26px;'
      + 'font-weight:800;letter-spacing:.2px;color:#fff;}'
      + '#bedtime-card .bt-clock{text-align:center;font-size:14px;'
      + 'color:#9fb0d8;margin:0 0 20px;font-variant-numeric:tabular-nums;}'
      + '#bedtime-card .bt-lead{text-align:center;font-size:15px;color:#c7d0ea;'
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
      + 'html.bedtime-locked,body.bedtime-locked{overflow:hidden !important;}'
      + '@media(max-width:480px){#bedtime-card{padding:26px 20px 24px;}'
      + '#bedtime-card h2{font-size:22px;}}';
    var s = document.createElement("style");
    s.id = "bedtime-styles";
    s.textContent = css;
    document.head.appendChild(s);
  }

  // ---- Overlay -----------------------------------------------------------
  var nagTimer = null;

  function easternClockLabel() {
    try {
      return new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        hour: "numeric",
        minute: "2-digit",
        hour12: true
      }).format(new Date()) + " ET";
    } catch (e) {
      return "";
    }
  }

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
      : "It's " + easternClockLabel() + ". Real studying happens while you sleep — here's why tonight's rest matters more than another hour of cramming:";
    var btnLabel = isNag
      ? "No, I'd still like to get sub-optimal sleep"
      : "No, I would like to get sub-optimal sleep";

    overlay.innerHTML = ''
      + '<div id="bedtime-card">'
      +   '<h2 id="bedtime-title">' + heading + '</h2>'
      +   '<p class="bt-clock">Bedtime guard · active 10:30 PM–5:00 AM Eastern</p>'
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

  function lockScroll(on) {
    var d = document.documentElement, b = document.body;
    if (on) { d.classList.add("bedtime-locked"); if (b) b.classList.add("bedtime-locked"); }
    else    { d.classList.remove("bedtime-locked"); if (b) b.classList.remove("bedtime-locked"); }
  }

  function dismiss() {
    var o = document.getElementById("bedtime-overlay");
    if (o) o.parentNode.removeChild(o);
    lockScroll(false);
    // Schedule the next nudge in 15 minutes, as long as it's still bedtime.
    if (nagTimer) clearTimeout(nagTimer);
    nagTimer = setTimeout(function () {
      if (inBedtimeWindow()) showOverlay(true);
    }, NAG_MS);
  }

  function showOverlay(isNag) {
    if (!inBedtimeWindow()) return;                  // window closed since scheduled
    if (document.getElementById("bedtime-overlay")) return; // already showing
    injectStyles();
    var overlay = buildOverlay(isNag);
    document.body.appendChild(overlay);
    lockScroll(true);

    overlay.querySelector("#bt-stay").addEventListener("click", dismiss);
    overlay.querySelector("#bt-sleep").addEventListener("click", function () {
      // Gentle sign-off, then try to close the tab (works if the tab was
      // script-opened; otherwise the message stands on its own).
      var card = overlay.querySelector("#bedtime-card");
      card.innerHTML = '<h2>Good night — sleep well.</h2>'
        + '<p class="bt-lead">Your brain will do the studying for you now. See you tomorrow, sharp and ready.</p>'
        + '<div id="bedtime-actions"><button type="button" class="bt-btn bt-secondary" id="bt-close">Close this tab</button></div>';
      lockScroll(true);
      var c = card.querySelector("#bt-close");
      if (c) c.addEventListener("click", function () { window.close(); });
    });

    // Keyboard: Escape acts as "stay" so the page never traps the user.
    overlay.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape") dismiss();
    });
    overlay.tabIndex = -1;
    overlay.focus();
  }

  // ---- Boot --------------------------------------------------------------
  function boot() {
    if (inBedtimeWindow()) showOverlay(false);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
