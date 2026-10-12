/* games-lock.js: locks a unit's Games tab (#pg-games) until the student has
   rated every flashcard in that unit's deck at least once (front or reverse
   side, from the unit Flashcards tab or the Flashcard Hub). Cards come from
   FC_DATA[n]; ratings are read from apReview_v1.spaced using the same ids
   unit-flashcards.js writes (u{n}_fc_{slug(term)}, rv_ for reverse).

   While locked, the games stay visible but blurred and inert under a lock
   panel showing progress. The panel has a visible "Teacher unlock" button:
   the code is checked against a SHA-256 hash and unlocks Games for every
   unit on that browser (localStorage gamesLock_teacher). When a student
   finishes the deck, the lock plays an opening animation once per unit
   (localStorage gamesLock_seen_uN).

   Load on unit pages after flashcard-data.js, before unit-shell.js. */
(function () {
  'use strict';
  var HASH = 'f0edbe28ac723c57055d27fb30cbe4f12d934dce606f6348ad8d17fa77d03822';
  var TKEY = 'gamesLock_teacher';

  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function slug(s) { return (s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').slice(0, 48); }

  function progress(unit) {
    var rows = (window.FC_DATA || {})[unit] || [];
    var sp = {};
    try { sp = (JSON.parse(get('apReview_v1') || '{}').spaced) || {}; } catch (e) {}
    var done = 0;
    rows.forEach(function (r) {
      var k = 'u' + unit + '_fc_' + slug(r[1]);
      if (sp[k] || sp['rv_' + k]) done++;
    });
    return { done: done, total: rows.length };
  }

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
    st.textContent =
      '#pg-games .inner{position:relative}' +
      '#pg-games.glk-on .glk-dim{filter:blur(7px) grayscale(.5);opacity:.45;pointer-events:none;user-select:none;transition:filter .6s,opacity .6s}' +
      '.glk-panel{position:sticky;top:140px;z-index:20;max-width:520px;margin:10px auto 28px;background:var(--white);border:1px solid var(--border);box-shadow:0 18px 50px rgba(0,0,0,.18);padding:30px 28px 24px;text-align:center;font-family:Lato,system-ui,sans-serif;color:var(--ink);animation:glk-in .5s ease-out}' +
      '.glk-panel.glk-gone{animation:glk-out .55s ease-in forwards}' +
      '.glk-svg{width:84px;height:96px;display:block;margin:0 auto 12px;color:var(--red)}' +
      '.glk-svg .glk-shackle{transform-origin:62px 40px;transition:transform .7s cubic-bezier(.3,1.6,.5,1)}' +
      '.glk-panel.glk-open .glk-shackle{transform:translateY(-14px) rotate(28deg)}' +
      '.glk-svg .glk-body{transform-origin:50% 100%}' +
      '.glk-panel:not(.glk-open) .glk-svg{animation:glk-bob 3.2s ease-in-out infinite}' +
      '.glk-panel.glk-shake .glk-svg{animation:glk-shake .5s}' +
      '.glk-eyebrow{font-weight:700;font-size:.56rem;letter-spacing:.2em;text-transform:uppercase;color:var(--red);margin-bottom:6px}' +
      '.glk-panel h3{margin:0 0 8px;font-weight:900;font-size:1.35rem;letter-spacing:-.02em;color:var(--ink)}' +
      '.glk-panel p{margin:0 0 14px;color:var(--mid);font-size:.88rem;line-height:1.5}' +
      '.glk-bar{height:10px;background:var(--cream);border:1px solid var(--border);margin:4px 0 6px;overflow:hidden}' +
      '.glk-bar i{display:block;height:100%;background:var(--red);transition:width .8s ease-out}' +
      '.glk-count{font-size:.74rem;color:var(--muted);margin-bottom:16px}' +
      '.glk-go{display:inline-block;background:var(--ink);color:#fff;border:0;cursor:pointer;padding:13px 22px;font-family:inherit;font-weight:700;font-size:.64rem;letter-spacing:.14em;text-transform:uppercase}' +
      '.glk-go:hover{background:var(--red)}' +
      '.glk-teach{display:block;margin:16px auto 0;background:none;border:0;color:var(--muted);font-family:inherit;font-size:.7rem;text-decoration:underline;cursor:pointer}' +
      '.glk-form{display:none;margin-top:12px;gap:8px;justify-content:center}' +
      '.glk-form.on{display:flex}' +
      '.glk-form input{width:140px;padding:9px 10px;border:1px solid var(--border2);background:var(--paper);color:var(--ink);font-family:inherit;font-size:.9rem;letter-spacing:.2em;text-align:center}' +
      '.glk-form button{background:var(--red);color:#fff;border:0;padding:9px 14px;font-family:inherit;font-weight:700;font-size:.62rem;letter-spacing:.12em;text-transform:uppercase;cursor:pointer}' +
      '.glk-msg{min-height:1em;margin-top:8px;font-size:.72rem;color:var(--red)}' +
      '@keyframes glk-in{from{opacity:0;transform:translateY(14px) scale(.97)}to{opacity:1;transform:none}}' +
      '@keyframes glk-out{0%{opacity:1;transform:none}100%{opacity:0;transform:translateY(-20px) scale(.94)}}' +
      '@keyframes glk-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}' +
      '@keyframes glk-shake{0%,100%{transform:translateX(0)}20%{transform:translateX(-8px) rotate(-6deg)}40%{transform:translateX(7px) rotate(5deg)}60%{transform:translateX(-5px) rotate(-3deg)}80%{transform:translateX(3px)}}' +
      '@media (prefers-reduced-motion:reduce){.glk-panel,.glk-panel *{animation:none!important;transition:none!important}}';
    document.head.appendChild(st);
  }

  var LOCK_SVG =
    '<svg class="glk-svg" viewBox="0 0 84 96" aria-hidden="true">' +
      '<path class="glk-shackle" d="M22 44V30a20 20 0 0 1 40 0v14" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round"/>' +
      '<g class="glk-body"><rect x="8" y="42" width="68" height="50" rx="9" fill="currentColor"/>' +
      '<circle cx="42" cy="62" r="7" fill="var(--white)"/><rect x="38.5" y="64" width="7" height="14" rx="3" fill="var(--white)"/></g>' +
    '</svg>';

  function init() {
    var page = document.getElementById('pg-games');
    var inner = page && page.querySelector('.inner');
    var m = location.pathname.match(/unit(\d)\.html/i);
    var unit = m ? +m[1] : 0;
    if (!inner || !unit || !(window.FC_DATA || {})[unit]) return;
    injectCSS();

    var kids = Array.prototype.filter.call(inner.children, function (el) {
      return !el.classList.contains('pg-nav-row') && el.tagName !== 'SCRIPT' && el.tagName !== 'STYLE';
    });
    var panel = null;

    function unlockedNow() {
      if (get(TKEY) === '1') return true;
      var p = progress(unit);
      return p.total > 0 && p.done >= p.total;
    }
    function setDim(on) {
      page.classList.toggle('glk-on', on);
      kids.forEach(function (el) {
        el.classList.toggle('glk-dim', on);
        if (on) { el.setAttribute('inert', ''); el.setAttribute('aria-hidden', 'true'); }
        else { el.removeAttribute('inert'); el.removeAttribute('aria-hidden'); }
      });
    }
    function openLock(teacher) {
      if (!panel) { setDim(false); return; }
      panel.classList.add('glk-open');
      panel.querySelector('.glk-eyebrow').textContent = 'Unlocked';
      panel.querySelector('h3').textContent = teacher ? 'Teacher access on' : 'Games unlocked!';
      panel.querySelector('p').textContent = teacher ? 'Games are open on every unit in this browser.' : 'You reviewed every Unit ' + unit + ' flashcard. Go play.';
      set('gamesLock_seen_u' + unit, '1');
      setTimeout(function () { panel.classList.add('glk-gone'); setDim(false); }, 1300);
      setTimeout(function () { if (panel) panel.remove(); panel = null; }, 1900);
    }
    function build() {
      var p = progress(unit), left = p.total - p.done, pct = p.total ? Math.round(p.done / p.total * 100) : 0;
      panel = document.createElement('div');
      panel.className = 'glk-panel';
      panel.setAttribute('role', 'region');
      panel.setAttribute('aria-label', 'Games locked');
      panel.innerHTML = LOCK_SVG +
        '<div class="glk-eyebrow">Unit ' + unit + ' Games: Locked</div>' +
        '<h3>Earn your games</h3>' +
        '<p>Review every Unit ' + unit + ' flashcard at least once to unlock the games. ' +
          (left === 1 ? '1 card to go.' : left + ' cards to go.') + '</p>' +
        '<div class="glk-bar"><i style="width:0"></i></div>' +
        '<div class="glk-count">' + p.done + ' / ' + p.total + ' cards reviewed (' + pct + '%)</div>' +
        '<button type="button" class="glk-go" data-tab="pg-flash">Go to Flashcards</button>' +
        '<button type="button" class="glk-teach">Teacher unlock</button>' +
        '<form class="glk-form"><input type="password" inputmode="numeric" autocomplete="off" placeholder="Code" aria-label="Teacher code"><button type="submit">Unlock</button></form>' +
        '<div class="glk-msg" aria-live="polite"></div>';
      var nav = inner.querySelector('.pg-nav-row');
      inner.insertBefore(panel, nav ? nav.nextSibling : inner.firstChild);
      setTimeout(function () { var bar = panel && panel.querySelector('.glk-bar i'); if (bar) bar.style.width = pct + '%'; }, 60);

      var form = panel.querySelector('.glk-form'), input = form.querySelector('input'), msg = panel.querySelector('.glk-msg');
      panel.querySelector('.glk-teach').addEventListener('click', function () { form.classList.toggle('on'); if (form.classList.contains('on')) input.focus(); });
      panel.querySelector('.glk-svg').addEventListener('click', shake);
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        sha256(input.value.trim()).then(function (h) {
          if (h === HASH) { set(TKEY, '1'); msg.textContent = ''; openLock(true); }
          else { msg.textContent = 'That code is not right.'; input.value = ''; shake(); }
        }, function () { msg.textContent = 'Unlock needs the https site.'; });
      });
    }
    function shake() {
      if (!panel) return;
      panel.classList.remove('glk-shake'); void panel.offsetWidth; panel.classList.add('glk-shake');
    }
    function refresh(animate) {
      if (unlockedNow()) {
        if (panel && animate) openLock(get(TKEY) === '1');
        else if (panel) { panel.remove(); panel = null; setDim(false); }
        else setDim(false);
        return;
      }
      if (panel) { panel.remove(); panel = null; }
      build(); setDim(true);
    }

    // First paint: if the deck was finished but the opening was never shown, show it.
    var p0 = progress(unit), finished = p0.total > 0 && p0.done >= p0.total;
    if (get(TKEY) !== '1' && finished && get('gamesLock_seen_u' + unit) !== '1') { build(); setDim(true); }
    else refresh(false);

    document.addEventListener('unit:tab', function (e) {
      if (!e.detail || e.detail.id !== 'pg-games') return;
      if (panel && unlockedNow()) setTimeout(function () { openLock(get(TKEY) === '1'); }, 450);
      else if (!panel && !unlockedNow()) refresh(false);
      else if (panel) refresh(false);
    });
    window.addEventListener('storage', function (e) { if (e.key === 'apReview_v1' || e.key === TKEY) refresh(true); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
