/* ─────────────────────────────────────────────────────────────
   Pomodoro break reminder (every page except timer.html).

   Counts time a student actually spends looking at the site (a tab is
   visible), shared across pages and tabs. After 25 minutes it asks the
   student to take a 5-minute break:

     "Start my 5-minute break"  covers the page with a countdown (every open
                                tab shows it); "End break early" stays visible.
     "5 more minutes"           snoozes the prompt for 5 minutes.

   Being away from the site for 5 minutes or more counts as a break, so the
   25 minutes start over. State: localStorage pomoBreak_v1 =
   {work: ms studied since last break, last: last tick, breakEnd: ms or 0}.
   Self-contained: injects its own styles; picks up the page's --red accent.
   ───────────────────────────────────────────────────────────── */
(function () {
  "use strict";

  var WORK_MS  = 25 * 60 * 1000; // study block
  var BREAK_MS = 5 * 60 * 1000;  // break length
  var SNOOZE_MS = 5 * 60 * 1000; // "5 more minutes"
  var AWAY_MS  = 5 * 60 * 1000;  // away this long = already rested
  var TICK_MS  = 5000;
  var MAX_STEP = 15000;          // never count more than this per tick
  var KEY = 'pomoBreak_v1';

  if (window.self !== window.top) return; // never inside embedded frames

  function load() {
    try {
      var s = JSON.parse(localStorage.getItem(KEY));
      if (s && typeof s === 'object') return { work: +s.work || 0, last: +s.last || 0, breakEnd: +s.breakEnd || 0 };
    } catch (e) {}
    return { work: 0, last: 0, breakEnd: 0 };
  }
  function save(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {} }

  // Read-modify-write so several open tabs never overwrite each other.
  function update(fn) { var s = load(); fn(s); save(s); return s; }

  function fmt(ms) {
    var t = Math.max(0, Math.ceil(ms / 1000));
    var m = Math.floor(t / 60), s = t % 60;
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  // ---- Styles ------------------------------------------------------------
  function injectStyles() {
    if (document.getElementById('pomo-styles')) return;
    var css = ''
      + '#pomo-overlay{position:fixed;inset:0;z-index:2147482000;display:flex;align-items:center;justify-content:center;'
      + 'padding:16px;background:rgba(10,14,28,.55);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);'
      + 'font-family:system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;}'
      + '#pomo-overlay.pomo-break{background:rgba(10,14,28,.88);}'
      + '#pomo-card{--pa:var(--red,#c0392b);width:100%;max-width:440px;background:#fff;color:#1d2433;border-radius:18px;'
      + 'padding:28px 26px 22px;box-shadow:0 24px 60px rgba(0,0,0,.35);text-align:center;}'
      + 'html[data-theme="dark"] #pomo-card{background:#1b2131;color:#e8ecf6;}'
      + '#pomo-card .pomo-eye{font-size:12px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--pa);margin:0 0 8px;}'
      + '#pomo-card h2{margin:0 0 10px;font-size:24px;font-weight:800;line-height:1.2;color:inherit;}'
      + '#pomo-card p{margin:0 0 16px;font-size:15px;line-height:1.5;opacity:.85;}'
      + '#pomo-card ul{list-style:none;margin:0 0 20px;padding:0;text-align:left;font-size:14px;line-height:1.45;}'
      + '#pomo-card li{padding:8px 12px;border-radius:10px;margin:0 0 6px;background:rgba(127,127,127,.1);}'
      + '#pomo-card .pomo-clock{font-size:56px;font-weight:800;font-variant-numeric:tabular-nums;color:var(--pa);margin:4px 0 14px;line-height:1;}'
      + '#pomo-card .pomo-row{display:flex;flex-direction:column;gap:8px;}'
      + '.pomo-btn{border:0;border-radius:12px;padding:13px 18px;font:inherit;font-size:15px;font-weight:700;cursor:pointer;}'
      + '.pomo-primary{background:var(--pa);color:#fff;}'
      + '.pomo-primary:hover{filter:brightness(1.08);}'
      + '.pomo-secondary{background:transparent;color:inherit;opacity:.75;border:1px solid rgba(127,127,127,.45);font-weight:600;font-size:14px;padding:10px 18px;}'
      + '.pomo-secondary:hover{opacity:1;}'
      + '@media (max-width:480px){#pomo-card{padding:22px 18px 18px;}#pomo-card h2{font-size:21px;}#pomo-card .pomo-clock{font-size:46px;}}';
    var s = document.createElement('style');
    s.id = 'pomo-styles';
    s.textContent = css;
    document.head.appendChild(s);
  }

  // ---- Overlay -----------------------------------------------------------
  var overlay = null, shown = '', countdown = null;

  function close() {
    if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
    overlay = null; shown = '';
    clearInterval(countdown); countdown = null;
  }

  function open(kind, html) {
    injectStyles();
    close();
    overlay = document.createElement('div');
    overlay.id = 'pomo-overlay';
    if (kind !== 'prompt') overlay.className = 'pomo-break';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-labelledby', 'pomo-title');
    overlay.innerHTML = '<div id="pomo-card">' + html + '</div>';
    document.body.appendChild(overlay);
    shown = kind;
    var first = overlay.querySelector('button');
    if (first) first.focus();
  }

  function showPrompt() {
    open('prompt',
        '<div class="pomo-eye">Pomodoro</div>'
      + '<h2 id="pomo-title">25 minutes of studying. Time for a <span style="white-space:nowrap">5-minute</span> break.</h2>'
      + '<p>Short breaks help your brain hold on to what you just studied.</p>'
      + '<div class="pomo-row">'
      +   '<button type="button" class="pomo-btn pomo-primary" id="pomo-start">Start my 5-minute break</button>'
      +   '<button type="button" class="pomo-btn pomo-secondary" id="pomo-snooze">5 more minutes</button>'
      + '</div>');
    document.getElementById('pomo-start').onclick = function () {
      update(function (s) { s.breakEnd = Date.now() + BREAK_MS; s.work = 0; });
      sync();
    };
    document.getElementById('pomo-snooze').onclick = snooze;
  }

  function snooze() {
    update(function (s) { s.work = WORK_MS - SNOOZE_MS; });
    close();
  }

  function showBreak() {
    open('break',
        '<div class="pomo-eye">Break time</div>'
      + '<h2 id="pomo-title">Step away from the screen.</h2>'
      + '<div class="pomo-clock" id="pomo-clock">5:00</div>'
      + '<ul>'
      +   '<li>Stand up and stretch.</li>'
      +   '<li>Get a drink of water.</li>'
      +   '<li>Look at something far away to rest your eyes.</li>'
      + '</ul>'
      + '<div class="pomo-row">'
      +   '<button type="button" class="pomo-btn pomo-secondary" id="pomo-end">End break early</button>'
      + '</div>');
    document.getElementById('pomo-end').onclick = endBreak;
    var clock = document.getElementById('pomo-clock');
    var draw = function () {
      var left = load().breakEnd - Date.now();
      if (left <= 0) { sync(); return; }
      clock.textContent = fmt(left);
    };
    draw();
    countdown = setInterval(draw, 250);
  }

  function showDone() {
    open('done',
        '<div class="pomo-eye">Break over</div>'
      + '<h2 id="pomo-title">Ready for another 25 minutes?</h2>'
      + '<p>Your next study block starts when you click below.</p>'
      + '<div class="pomo-row">'
      +   '<button type="button" class="pomo-btn pomo-primary" id="pomo-back">Back to studying</button>'
      + '</div>');
    document.getElementById('pomo-back').onclick = endBreak;
  }

  function endBreak() {
    update(function (s) { s.breakEnd = 0; s.work = 0; s.last = Date.now(); });
    close();
  }

  // Show whatever the shared state calls for (keeps every tab in step).
  function sync() {
    var s = load(), now = Date.now();
    var want = '';
    if (s.breakEnd) want = now < s.breakEnd ? 'break' : 'done';
    else if (s.work >= WORK_MS) want = 'prompt';
    if (want === shown) return;
    if (want === 'break') showBreak();
    else if (want === 'done') showDone();
    else if (want === 'prompt') showPrompt();
    else close();
  }

  // ---- Clock -------------------------------------------------------------
  function tick() {
    if (document.visibilityState !== 'visible') return;
    var now = Date.now();
    update(function (s) {
      var gap = s.last ? now - s.last : 0;
      if (s.breakEnd) {
        // Gone well past the end of a break: they rested, start fresh.
        if (now - s.breakEnd >= AWAY_MS && gap >= AWAY_MS) { s.breakEnd = 0; s.work = 0; }
      } else if (gap >= AWAY_MS) {
        s.work = 0; // away from the site long enough to count as a break
      } else if (s.work < WORK_MS) {
        s.work += Math.min(gap, MAX_STEP);
      }
      s.last = now;
    });
    sync();
  }

  function init() {
    tick();
    setInterval(tick, TICK_MS);
    document.addEventListener('visibilitychange', tick);
    window.addEventListener('storage', function (e) { if (e.key === KEY) sync(); });
    // Escape on the prompt means "5 more minutes", so it never traps anyone.
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && shown === 'prompt') snooze();
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
