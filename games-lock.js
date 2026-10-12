/* games-lock.js: locks a unit's games until the student has rated 20 (CARDS_NEEDED)
   flashcards from that unit's deck within the last 7 days (FRESH_DAYS; front or reverse side, from
   the unit Flashcards tab or the Flashcard Hub). Cards come from FC_DATA[n];
   ratings are read from apReview_v1.spaced using the same ids
   unit-flashcards.js writes (u{n}_fc_{slug(term)}, rv_ for reverse).

   Two modes, picked from the page:
   - Unit page (unitN.html): the Games tab (#pg-games) stays visible but
     blurred and inert under a lock panel showing progress.
   - Game page (unitN-*.html, e.g. unit3-racer.html): a full-screen lock
     covers the page and swallows keystrokes, with a link back to the unit's
     Flashcards tab.
   The panel has a visible "Teacher unlock" button: the code is checked
   against a SHA-256 hash and unlocks games for every unit on that browser
   (localStorage gamesLock_teacher). When a student finishes the deck, the
   lock plays an opening animation once per unit (gamesLock_seen_uN).

   Load after flashcard-data.js: on unit pages just before unit-shell.js,
   on game pages at the end of <body>. */
(function () {
  'use strict';
  var HASH = 'f0edbe28ac723c57055d27fb30cbe4f12d934dce606f6348ad8d17fa77d03822';
  var TKEY = 'gamesLock_teacher';
  var FRESH_DAYS = 7;   // a card counts toward the unlock for this many days after it was last rated
  var CARDS_NEEDED = 20; // any this many cards (or the whole deck, if smaller) unlock the games

  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function slug(s) { return (s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').slice(0, 48); }

  function progress(unit) {
    var rows = (window.FC_DATA || {})[unit] || [];
    var sp = {};
    try { sp = (JSON.parse(get('apReview_v1') || '{}').spaced) || {}; } catch (e) {}
    var done = 0, since = Date.now() - FRESH_DAYS * 864e5;
    function fresh(it) { return !!(it && it.lastReviewed && new Date(it.lastReviewed).getTime() >= since); }
    rows.forEach(function (r) {
      var k = 'u' + unit + '_fc_' + slug(r[1]);
      if (fresh(sp[k]) || fresh(sp['rv_' + k])) done++;
    });
    var need = Math.min(CARDS_NEEDED, rows.length);
    return { done: Math.min(done, need), total: need };
  }
  function finished(unit) { var p = progress(unit); return p.total > 0 && p.done >= p.total; }
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

  /* Builds the lock panel. goHtml is the "Go to Flashcards" control;
     onOpen(teacher) runs when the teacher code is accepted. */
  function buildPanel(unit, goHtml, onOpen) {
    var p = progress(unit), left = p.total - p.done, pct = p.total ? Math.round(p.done / p.total * 100) : 0;
    var panel = document.createElement('div');
    panel.className = 'glk-panel';
    panel.setAttribute('role', 'region');
    panel.setAttribute('aria-label', 'Games locked');
    panel.innerHTML = LOCK_SVG +
      '<div class="glk-eyebrow">Unit ' + unit + ' Games: Locked</div>' +
      '<h3>Earn your games</h3>' +
      '<p>Review ' + p.total + ' Unit ' + unit + ' flashcards to unlock the games. Each card counts for ' + FRESH_DAYS +
        ' days, so keep reviewing to keep them open. ' +
        (left === 1 ? '1 card to go.' : left + ' cards to go.') + '</p>' +
      '<div class="glk-bar"><i style="width:0"></i></div>' +
      '<div class="glk-count">' + p.done + ' / ' + p.total + ' cards reviewed in the last ' + FRESH_DAYS + ' days (' + pct + '%)</div>' +
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
    panel.querySelector('p').textContent = byTeacher ? 'Games are open on every unit in this browser.' : 'You reviewed ' + progress(unit).total + ' Unit ' + unit + ' flashcards. Go play.';
    set('gamesLock_seen_u' + unit, '1');
  }

  function setInert(els, on) {
    els.forEach(function (el) {
      if (on) { el.setAttribute('inert', ''); el.setAttribute('aria-hidden', 'true'); }
      else { el.removeAttribute('inert'); el.removeAttribute('aria-hidden'); }
    });
  }

  /* ---- unit page: lock the Games tab ---- */
  function initTab(unit, page) {
    var inner = page.querySelector('.inner');
    if (!inner) return;
    var kids = Array.prototype.filter.call(inner.children, function (el) {
      return !el.classList.contains('pg-nav-row') && el.tagName !== 'SCRIPT' && el.tagName !== 'STYLE';
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
      setTimeout(function () { pnl.classList.add('glk-gone'); setDim(false); }, 1300);
      setTimeout(function () { pnl.remove(); if (panel === pnl) panel = null; }, 1900);
    }
    function lock() {
      if (panel) panel.remove();
      // Relocked (cards went stale): play the opening again when they re-earn it.
      if (!finished(unit)) { try { localStorage.removeItem('gamesLock_seen_u' + unit); } catch (e) {} }
      panel = buildPanel(unit, '<button type="button" class="glk-go" data-tab="pg-flash">Go to Flashcards</button>', openLock);
      var nav = inner.querySelector('.pg-nav-row');
      inner.insertBefore(panel, nav ? nav.nextSibling : inner.firstChild);
      setDim(true);
    }
    function refresh(animate) {
      if (!unlockedNow()) { lock(); return; }
      if (panel && animate) openLock(teacher());
      else { if (panel) panel.remove(); panel = null; setDim(false); }
    }

    // A deck finished elsewhere (e.g. the Hub) whose opening was never shown: keep the lock up to play it.
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
    if (teacher() || finished(unit)) return;
    var kids = Array.prototype.filter.call(document.body.children, function (el) { return el.tagName !== 'SCRIPT'; });
    var screen = document.createElement('div');
    screen.className = 'glk-screen';
    var prevOverflow = document.documentElement.style.overflow;

    // Games listen for keys on window; swallow them (except in the code box) while locked.
    function blockKeys(e) {
      if (screen.contains(e.target)) return;
      e.stopImmediatePropagation(); e.preventDefault();
    }
    ['keydown', 'keyup', 'keypress'].forEach(function (t) { window.addEventListener(t, blockKeys, true); });

    function release() {
      ['keydown', 'keyup', 'keypress'].forEach(function (t) { window.removeEventListener(t, blockKeys, true); });
      setInert(kids, false);
      document.documentElement.style.overflow = prevOverflow;
    }
    function openLock(byTeacher) {
      playOpen(panel, unit, byTeacher);
      setTimeout(function () { screen.classList.add('glk-gone'); release(); }, 1300);
      setTimeout(function () { screen.remove(); }, 1900);
    }
    var panel = buildPanel(unit, '<a class="glk-go" href="unit' + unit + '.html#pg-flash">Go to Unit ' + unit + ' Flashcards</a>', openLock);
    screen.appendChild(panel);
    document.body.appendChild(screen);
    setInert(kids, true);
    document.documentElement.style.overflow = 'hidden';

    window.addEventListener('storage', function (e) {
      if ((e.key === 'apReview_v1' || e.key === TKEY) && (teacher() || finished(unit)) && screen.isConnected) openLock(teacher());
    });
  }

  function init() {
    var m = location.pathname.match(/unit(\d)(-[\w-]+)?\.html/i);
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
