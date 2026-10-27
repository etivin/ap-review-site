/* games-lock.js: locks a unit's games until the student has answered MCQ_NEEDED of that
   unit's practice questions correctly within the last 7 days (FRESH_DAYS; MCQ Practice tab,
   Cumulative Review or a walkthrough's Work it; each question counts once).
   MCQ_NEEDED is a number of questions (20) or a share of the unit's bank ('25%'). Answers are
   read from the reviewHistory in apReview_v1.spaced under the ids mcq-engine.js writes
   (u{n}_{topic}_{idx}); the bank size comes from APWH_MCQ on unit pages and from the mcqTotal
   spaced.js saves (components.uN) on game pages.

   Game time: each unlock opens that unit's games for PLAY_MIN (30) minutes of clock time,
   shown in a visible "game time left" box. The 30 minutes start the first time the unlocked
   games show (Games tab open or a game page loaded) and are saved in gamesWin_uN = {start}, so
   every page of the unit shares them. When they run out, the Games tab or game page locks again
   mid-game. To reopen, the student gets AGAIN_NEEDED (5) more questions right after the time ran
   out, for another 30 minutes, and so on. If the last 30 minutes ended more than FRESH_DAYS ago,
   the full MCQ_NEEDED rule applies again.

   Two modes, picked from the page:
   - Unit page (unitN.html): everything in the Games tab (#pg-games, every .inner
     block) stays visible but blurred and inert under a lock panel showing progress.
   - Game page (unitN-*.html, e.g. unit3-racer.html): a full-screen lock
     covers the page and swallows keystrokes, with a link back to the unit's
     MCQ Practice tab.
   The panel has a visible "Teacher unlock" button: the code is checked
   against a SHA-256 hash and unlocks games for every unit on that browser
   (localStorage gamesLock_teacher). When a student earns the games, the
   lock plays an opening animation once per unit (gamesLock_seen_uN).

   Load after flashcard-data.js: on unit pages just before unit-shell.js,
   on game pages at the end of <body>. */
(function () {
  'use strict';
  var HASH = 'f0edbe28ac723c57055d27fb30cbe4f12d934dce606f6348ad8d17fa77d03822';
  var TKEY = 'gamesLock_teacher';
  var FRESH_DAYS = 7;    // a right answer counts toward the unlock for this many days after it was given
  var MCQ_NEEDED = 20;   // questions to get right: a number (20) or a share of the unit's bank ('25%')
  var PLAY_MIN = 30;     // minutes the games stay open after each unlock (clock time)
  var AGAIN_NEEDED = 5;  // right answers, given after the time ran out, that reopen the games
  var TICK = 1000;       // the time box and the relock are checked every second

  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  function bankSize(unit, store) {
    var u = window.APWH_MCQ && APWH_MCQ.units && APWH_MCQ.units[unit];
    if (u) { var n = 0, q = u.questions || {}; for (var t in q) n += (q[t] || []).length; return n; }
    return ((store.components || {})['u' + unit] || {}).mcqTotal || 0;
  }
  // How many answers unlock the unit (never more than the whole bank, when its size is known).
  function needed(total) {
    var pct = /%$/.test(String(MCQ_NEEDED)) ? parseFloat(MCQ_NEEDED) : null;
    var need = pct !== null ? (total ? Math.ceil(total * pct / 100) : 0) : MCQ_NEEDED;
    return total ? Math.min(need, total) : need;
  }
  /* ---- game time: the current 30 minutes per unit (gamesWin_uN = {start: ms}) ---- */
  function getWin(unit) { try { return JSON.parse(get('gamesWin_u' + unit) || 'null'); } catch (e) { return null; } }
  function startWin(unit) { set('gamesWin_u' + unit, JSON.stringify({ start: Date.now() })); }

  function progress(unit) {
    var store = {};
    try { store = JSON.parse(get('apReview_v1') || '{}') || {}; } catch (e) {}
    var now = Date.now(), full = PLAY_MIN * 60000, win = getWin(unit), end = win && win.start ? win.start + full : 0;
    if (end > now) return { open: true, ready: true, leftMs: end - now };
    // The time ran out within the last FRESH_DAYS: AGAIN_NEEDED answers given since then reopen the games.
    var again = end > 0 && now - end < FRESH_DAYS * 864e5;
    var sp = store.spaced || {}, right = 0, since = again ? end : now - FRESH_DAYS * 864e5;
    var re = new RegExp('^u' + unit + '_(?!fc_)');   // MCQ ids; flashcards are u{n}_fc_*
    // A question counts once if any answer to it since then was right.
    function rightSince(h) { return !!(h && h.correct && new Date(h.date).getTime() >= since); }
    for (var k in sp) {
      if (re.test(k) && sp[k] && (sp[k].reviewHistory || []).some(rightSince)) right++;
    }
    var need = again ? AGAIN_NEEDED : needed(bankSize(unit, store));
    return {
      open: false, again: again, ready: need > 0 && right >= need, leftMs: full,
      done: need ? Math.min(right, need) : right, total: need, right: right,
      // Percent rule on a game page before the unit page was ever opened: size unknown, show the share.
      pctOnly: !need
    };
  }
  // Games are open: inside a 30-minute window, or earned and waiting to start one.
  function finished(unit) { var p = progress(unit); return p.open || p.ready; }
  function teacher() { return get(TKEY) === '1'; }

  function sha256(s) {
    if (!(window.crypto && crypto.subtle && window.TextEncoder)) return Promise.reject();
    return crypto.subtle.digest('SHA-256', new TextEncoder().encode(s)).then(function (buf) {
      return Array.prototype.map.call(new Uint8Array(buf), function (b) { return ('0' + b.toString(16)).slice(-2); }).join('');
    });
  }

  function injectCSS() {
    if (document.getElementById('glk-css')) return;
    var st = document.createElement('style');
    st.id = 'glk-css';
    // Game pages use their own palette (--navy --blue --line --sky), so every color falls back to it.
    st.textContent =
      '.glk-panel{--gk-ink:var(--ink,var(--navy,#111a3f));--gk-acc:var(--red,var(--blue,#2d5deb));--gk-bg:var(--white,#fff);--gk-mid:var(--mid,var(--muted,#485586));--gk-muted:var(--muted,#6b7280);--gk-border:var(--border,var(--line,#d5d9e2));--gk-cream:var(--cream,var(--sky,#eef1f6));--gk-paper:var(--paper,#fff)}' +
      '#pg-games .inner{position:relative}' +
      '#pg-games.glk-on .glk-dim{filter:blur(7px) grayscale(.5);opacity:.45;pointer-events:none;user-select:none;transition:filter .6s,opacity .6s}' +
      '.glk-panel{position:sticky;top:140px;z-index:20;max-width:520px;margin:10px auto 28px;background:var(--gk-bg);border:1px solid var(--gk-border);box-shadow:0 18px 50px rgba(0,0,0,.18);padding:30px 28px 24px;text-align:center;font-family:Lato,system-ui,sans-serif;color:var(--gk-ink);animation:glk-in .5s ease-out;box-sizing:border-box}' +
      '.glk-panel.glk-gone{animation:glk-out .55s ease-in forwards}' +
      '.glk-screen{position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(10,14,30,.55);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);transition:opacity .55s}' +
      '.glk-screen .glk-panel{position:relative;top:auto;margin:0;width:100%}' +
      '.glk-screen.glk-gone{opacity:0}' +
      '.glk-svg{width:84px;height:96px;display:block;margin:0 auto 12px;color:var(--gk-acc);cursor:pointer}' +
      '.glk-svg .glk-shackle{transform-origin:62px 40px;transition:transform .7s cubic-bezier(.3,1.6,.5,1)}' +
      '.glk-panel.glk-open .glk-shackle{transform:translateY(-14px) rotate(28deg)}' +
      '.glk-panel:not(.glk-open) .glk-svg{animation:glk-bob 3.2s ease-in-out infinite}' +
      '.glk-panel.glk-shake .glk-svg{animation:glk-shake .5s}' +
      '.glk-eyebrow{font-weight:700;font-size:.56rem;letter-spacing:.2em;text-transform:uppercase;color:var(--gk-acc);margin-bottom:6px}' +
      '.glk-panel h3{margin:0 0 8px;font-weight:900;font-size:1.35rem;letter-spacing:-.02em;color:var(--gk-ink)}' +
      '.glk-panel p{margin:0 0 14px;color:var(--gk-mid);font-size:.88rem;line-height:1.5}' +
      '.glk-bar{height:10px;background:var(--gk-cream);border:1px solid var(--gk-border);margin:4px 0 6px;overflow:hidden}' +
      '.glk-bar i{display:block;height:100%;background:var(--gk-acc);transition:width .8s ease-out}' +
      '.glk-count{font-size:.74rem;color:var(--gk-muted);margin-bottom:16px}' +
      '.glk-go{display:inline-block;background:var(--gk-ink);color:#fff;border:0;cursor:pointer;padding:13px 22px;font-family:inherit;font-weight:700;font-size:.64rem;letter-spacing:.14em;text-transform:uppercase;text-decoration:none}' +
      '.glk-go:hover{background:var(--gk-acc);color:#fff}' +
      '.glk-teach{display:block;margin:16px auto 0;background:none;border:0;color:var(--gk-muted);font-family:inherit;font-size:.7rem;text-decoration:underline;cursor:pointer}' +
      '.glk-form{display:none;margin-top:12px;gap:8px;justify-content:center}' +
      '.glk-form.on{display:flex}' +
      '.glk-form input{width:140px;padding:9px 10px;border:1px solid var(--gk-border);background:var(--gk-paper);color:var(--gk-ink);font-family:inherit;font-size:.9rem;letter-spacing:.2em;text-align:center}' +
      '.glk-form button{background:var(--gk-acc);color:#fff;border:0;padding:9px 14px;font-family:inherit;font-weight:700;font-size:.62rem;letter-spacing:.12em;text-transform:uppercase;cursor:pointer}' +
      '.glk-msg{min-height:1em;margin-top:8px;font-size:.72rem;color:var(--gk-acc)}' +
      '.glk-tbar{--gk-acc:var(--red,#2d5deb);display:flex;flex-wrap:wrap;gap:10px;align-items:center;justify-content:space-between;max-width:820px;margin:0 auto 18px;padding:10px 14px;border:1px dashed var(--border2,var(--border,#c9ced8));background:var(--cream,#f6f3ec);color:var(--mid,#444);font-family:Lato,system-ui,sans-serif;font-size:.78rem}' +
      '.glk-tbar button{background:var(--gk-acc);color:#fff;border:0;padding:8px 14px;font-family:inherit;font-weight:700;font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;cursor:pointer}' +
      '.glk-time{display:flex;flex-wrap:wrap;gap:4px 12px;align-items:baseline;max-width:820px;margin:0 auto 14px;padding:9px 14px;border:1px solid var(--border,#d5d9e2);background:var(--cream,#f6f3ec);color:var(--mid,#444);font-family:Lato,system-ui,sans-serif;font-size:.8rem;box-sizing:border-box}' +
      '.glk-time[hidden]{display:none}' +
      '.glk-time b{font-size:1.05rem;color:var(--red,#2d5deb);font-variant-numeric:tabular-nums}' +
      '.glk-time-note{font-size:.72rem;color:var(--muted,#6b7280)}' +
      '.glk-time.glk-fixed{position:fixed;left:12px;bottom:12px;z-index:2147482500;margin:0;max-width:300px;background:#fff;color:#222;box-shadow:0 6px 18px rgba(0,0,0,.25)}' +
      '.glk-time.glk-fixed{padding:6px 11px;font-size:.74rem}.glk-time.glk-fixed b{color:#2d5deb}.glk-time.glk-fixed .glk-time-note{display:none}' +
      '@keyframes glk-in{from{opacity:0;transform:translateY(14px) scale(.97)}to{opacity:1;transform:none}}' +
      '@keyframes glk-out{0%{opacity:1;transform:none}100%{opacity:0;transform:translateY(-20px) scale(.94)}}' +
      '@keyframes glk-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}' +
      '@keyframes glk-shake{0%,100%{transform:translateX(0)}20%{transform:translateX(-8px) rotate(-6deg)}40%{transform:translateX(7px) rotate(5deg)}60%{transform:translateX(-5px) rotate(-3deg)}80%{transform:translateX(3px)}}' +
      '@media (prefers-reduced-motion:reduce){.glk-panel,.glk-panel *,.glk-screen{animation:none!important;transition:none!important}}';
    document.head.appendChild(st);
  }

  var LOCK_SVG =
    '<svg class="glk-svg" viewBox="0 0 84 96" aria-hidden="true">' +
      '<path class="glk-shackle" d="M22 44V30a20 20 0 0 1 40 0v14" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round"/>' +
      '<rect x="8" y="42" width="68" height="50" rx="9" fill="currentColor"/>' +
      '<circle cx="42" cy="62" r="7" fill="#fff"/><rect x="38.5" y="64" width="7" height="14" rx="3" fill="#fff"/>' +
    '</svg>';

  /* Builds the lock panel. goHtml is the "Go to MCQ Practice" control;
     onOpen(teacher) runs when the teacher code is accepted. */
  function buildPanel(unit, goHtml, onOpen) {
    var p = progress(unit), goal = p.pctOnly ? String(MCQ_NEEDED) + ' of the' : p.total, body;
    if (p.again) {
      // The 30 minutes ran out: AGAIN_NEEDED more right answers reopen the games.
      var more = p.total - p.done, pct = Math.round(p.done / p.total * 100);
      body = '<div class="glk-eyebrow">Unit ' + unit + ' Games: Time is up</div>' +
        '<h3>Earn more game time</h3>' +
        '<p>Your ' + PLAY_MIN + ' minutes of game time are up. Get ' + p.total + ' more Unit ' + unit +
          ' practice questions right to unlock ' + PLAY_MIN + ' more. ' +
          (more === 1 ? '1 question to go.' : more + ' questions to go.') + '</p>' +
        '<div class="glk-bar"><i style="width:0"></i></div>' +
        '<div class="glk-count">' + p.done + ' / ' + p.total + ' more questions right (' + pct + '%)</div>';
    } else {
      var left = p.total - p.done, pct = p.total ? Math.round(p.done / p.total * 100) : 0;
      body = '<div class="glk-eyebrow">Unit ' + unit + ' Games: Locked</div>' +
        '<h3>Earn your games</h3>' +
        '<p>Get ' + goal + ' Unit ' + unit + ' practice questions right to unlock ' + PLAY_MIN + ' minutes of games.' +
          ' Each right answer counts for ' + FRESH_DAYS + ' days.' +
          (p.pctOnly ? '' : left === 1 ? ' 1 question to go.' : ' ' + left + ' questions to go.') + '</p>' +
        '<div class="glk-bar"><i style="width:0"></i></div>' +
        '<div class="glk-count">' + (p.pctOnly ? p.done + ' questions right' : p.done + ' / ' + p.total + ' questions right') +
          ' in the last ' + FRESH_DAYS + ' days' + (p.pctOnly ? '' : ' (' + pct + '%)') + '</div>';
    }
    var panel = document.createElement('div');
    panel.className = 'glk-panel';
    panel.setAttribute('role', 'region');
    panel.setAttribute('aria-label', 'Games locked');
    panel.innerHTML = LOCK_SVG + body +
      goHtml +
      '<button type="button" class="glk-teach">Teacher unlock</button>' +
      '<form class="glk-form"><input type="password" inputmode="numeric" autocomplete="off" placeholder="Code" aria-label="Teacher code"><button type="submit">Unlock</button></form>' +
      '<div class="glk-msg" aria-live="polite"></div>';
    setTimeout(function () { var bar = panel.querySelector('.glk-bar i'); if (bar) bar.style.width = pct + '%'; }, 60);

    var form = panel.querySelector('.glk-form'), input = form.querySelector('input'), msg = panel.querySelector('.glk-msg');
    function shake() { panel.classList.remove('glk-shake'); void panel.offsetWidth; panel.classList.add('glk-shake'); }
    panel.querySelector('.glk-teach').addEventListener('click', function () { form.classList.toggle('on'); if (form.classList.contains('on')) input.focus(); });
    panel.querySelector('.glk-svg').addEventListener('click', shake);
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      sha256(input.value.trim()).then(function (h) {
        if (h === HASH) { set(TKEY, '1'); msg.textContent = ''; onOpen(true); }
        else { msg.textContent = 'That code is not right.'; input.value = ''; shake(); }
      }, function () { msg.textContent = 'Unlock needs the https site.'; });
    });
    return panel;
  }

  // Swings the shackle open and relabels the panel; the caller removes it afterwards.
  function playOpen(panel, unit, byTeacher) {
    panel.classList.add('glk-open');
    panel.querySelector('.glk-eyebrow').textContent = 'Unlocked';
    panel.querySelector('h3').textContent = byTeacher ? 'Teacher access on' : 'Games unlocked!';
    if (!byTeacher) { panel.querySelector('.glk-bar i').style.width = '100%'; panel.querySelector('.glk-count').textContent = ''; }
    panel.querySelector('p').textContent = byTeacher ? 'Games are open on every unit in this browser.' :
      'You have ' + Math.ceil(progress(unit).leftMs / 60000) + ' minutes of Unit ' + unit + ' game time. Go play.';
    set('gamesLock_seen_u' + unit, '1');
  }

  function setInert(els, on) {
    els.forEach(function (el) {
      if (on) { el.setAttribute('inert', ''); el.setAttribute('aria-hidden', 'true'); }
      else { el.removeAttribute('inert'); el.removeAttribute('aria-hidden'); }
    });
  }

  function clock(ms) { var s = Math.ceil(ms / 1000); return Math.floor(s / 60) + ':' + ('0' + (s % 60)).slice(-2); }
  function timePill(unit, fixed) {
    var pill = document.createElement('div');
    pill.className = 'glk-time' + (fixed ? ' glk-fixed' : '');
    pill.setAttribute('role', 'status');
    pill.innerHTML = '<span>Unit ' + unit + ' game time left: <b></b></span>' +
      '<span class="glk-time-note">When it runs out, get ' + AGAIN_NEEDED + ' more questions right for ' + PLAY_MIN + ' more minutes.</span>';
    return pill;
  }
  /* Runs the 30 minutes: they start the first time the unlocked games show (isActive() is true)
     and then count on the clock, on or off the page. Keeps the pill current and runs onUp() when
     the time runs out while the games show. Returns a function that refreshes the pill. */
  function playClock(unit, isActive, pill, onUp) {
    function show() {
      var on = !teacher() && finished(unit) && isActive();
      pill.hidden = !on;
      if (on) pill.querySelector('b').textContent = clock(progress(unit).leftMs);
    }
    setInterval(function () {
      if (!teacher() && isActive()) {
        var p = progress(unit);
        if (!p.ready) { show(); onUp(); return; }
        if (!p.open) startWin(unit);
      }
      show();
    }, TICK);
    show();
    return show;
  }

  /* ---- unit page: lock the Games tab ---- */
  function initTab(unit, page) {
    var inner = page.querySelector('.inner');
    if (!inner) return;
    // Units 2-4 split the tab into two .inner blocks (inline matching, then the shared games): lock them all.
    var kids = [];
    Array.prototype.forEach.call(page.querySelectorAll('.inner'), function (box) {
      Array.prototype.forEach.call(box.children, function (el) {
        if (!el.classList.contains('pg-nav-row') && el.tagName !== 'SCRIPT' && el.tagName !== 'STYLE') kids.push(el);
      });
    });
    var panel = null;

    function unlockedNow() { return teacher() || finished(unit); }
    function setDim(on) {
      page.classList.toggle('glk-on', on);
      kids.forEach(function (el) { el.classList.toggle('glk-dim', on); });
      setInert(kids, on);
    }
    function openLock(byTeacher) {
      if (!panel) { setDim(false); return; }
      var pnl = panel;
      playOpen(pnl, unit, byTeacher);
      setTimeout(function () { pnl.classList.add('glk-gone'); setDim(false); syncTeacherBar(); }, 1300);
      setTimeout(function () { pnl.remove(); if (panel === pnl) panel = null; }, 1900);
    }
    function lock() {
      if (panel) panel.remove();
      // Relocked (answers went stale): play the opening again when they re-earn it.
      if (!finished(unit)) { try { localStorage.removeItem('gamesLock_seen_u' + unit); } catch (e) {} }
      panel = buildPanel(unit, '<button type="button" class="glk-go" data-tab="pg-mcq">Go to MCQ Practice</button>', openLock);
      var nav = inner.querySelector('.pg-nav-row');
      inner.insertBefore(panel, nav ? nav.nextSibling : inner.firstChild);
      setDim(true);
    }
    // While the teacher code is active, a visible bar says so and can turn it off.
    var tbar = null;
    function syncTeacherBar() {
      if (!teacher()) { if (tbar) tbar.remove(); tbar = null; return; }
      if (tbar) return;
      tbar = document.createElement('div');
      tbar.className = 'glk-tbar';
      tbar.innerHTML = '<span>Teacher access is on in this browser: games are unlocked on every unit.</span>' +
        '<button type="button">Lock games again</button>';
      tbar.querySelector('button').addEventListener('click', function () {
        try { localStorage.removeItem(TKEY); } catch (e) {}
        refresh(false);
      });
      var nav = inner.querySelector('.pg-nav-row');
      inner.insertBefore(tbar, nav ? nav.nextSibling : inner.firstChild);
    }
    function refresh(animate) {
      syncTeacherBar();
      if (!unlockedNow()) { lock(); }
      else if (panel && animate) openLock(teacher());
      else { if (panel) panel.remove(); panel = null; setDim(false); }
      if (showPill) showPill();
    }
    // Game time: counts while the Games tab is showing and unlocked, then relocks the tab.
    var pill = timePill(unit, false), showPill = null;
    var nav0 = inner.querySelector('.pg-nav-row');
    inner.insertBefore(pill, nav0 ? nav0.nextSibling : inner.firstChild);
    showPill = playClock(unit, function () { return !panel && page.offsetParent !== null; }, pill, lock);

    // Earned elsewhere (e.g. Cumulative Review) and the opening was never shown: keep the lock up to play it.
    if (!teacher() && finished(unit) && get('gamesLock_seen_u' + unit) !== '1') lock();
    else refresh(false);

    document.addEventListener('unit:tab', function (e) {
      if (!e.detail || e.detail.id !== 'pg-games') return;
      if (panel && unlockedNow()) setTimeout(function () { openLock(teacher()); }, 450);
      else refresh(false);
    });
    window.addEventListener('storage', function (e) { if (e.key === 'apReview_v1' || e.key === TKEY) refresh(true); });
  }

  /* ---- game page: full-screen lock ---- */
  function initPage(unit) {
    var screen = null, panel = null, kids = [], prevOverflow = '';

    // Games listen for keys on window; swallow them (except in the code box) while locked.
    function blockKeys(e) {
      if (screen && screen.contains(e.target)) return;
      e.stopImmediatePropagation(); e.preventDefault();
    }
    function release() {
      ['keydown', 'keyup', 'keypress'].forEach(function (t) { window.removeEventListener(t, blockKeys, true); });
      setInert(kids, false);
      document.documentElement.style.overflow = prevOverflow;
    }
    function openLock(byTeacher) {
      var scr = screen;
      playOpen(panel, unit, byTeacher);
      setTimeout(function () { scr.classList.add('glk-gone'); release(); }, 1300);
      setTimeout(function () { scr.remove(); if (screen === scr) screen = null; showPill(); }, 1900);
    }
    // Covers the page: at load when the games are locked, or when the game time runs out mid-game.
    function lockScreen() {
      if (screen) return;
      kids = Array.prototype.filter.call(document.body.children, function (el) { return el.tagName !== 'SCRIPT' && el !== pill; });
      screen = document.createElement('div');
      screen.className = 'glk-screen';
      prevOverflow = document.documentElement.style.overflow;
      ['keydown', 'keyup', 'keypress'].forEach(function (t) { window.addEventListener(t, blockKeys, true); });
      panel = buildPanel(unit, '<a class="glk-go" href="unit' + unit + '.html#pg-mcq">Go to Unit ' + unit + ' MCQ Practice</a>', openLock);
      screen.appendChild(panel);
      document.body.appendChild(screen);
      setInert(kids, true);
      document.documentElement.style.overflow = 'hidden';
    }

    var pill = timePill(unit, true);
    document.body.appendChild(pill);
    var showPill = playClock(unit, function () { return !screen; }, pill, lockScreen);
    if (!(teacher() || finished(unit))) lockScreen();

    window.addEventListener('storage', function (e) {
      if ((e.key === 'apReview_v1' || e.key === TKEY) && (teacher() || finished(unit)) && screen && screen.isConnected) openLock(teacher());
    });
  }

  function init() {
    // The site also answers without .html (/unit4, /unit4-fleet), so the extension is optional.
    var m = location.pathname.match(/unit(\d)(-[\w-]+)?(?:\.html)?$/i);
    if (!m || !(window.FC_DATA || {})[+m[1]]) return;
    var unit = +m[1];
    if (m[2]) {
      if (/-map$/i.test(m[2])) return;   // maps are a Sources tab, not a game
      injectCSS(); initPage(unit);
    } else {
      var page = document.getElementById('pg-games');
      if (page) { injectCSS(); initTab(unit, page); }
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
