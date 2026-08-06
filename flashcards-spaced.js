/* ============================================================
   flashcards-spaced.js  —  Phase 2 flashcard self-rate + sparkline.
   Additive: it does NOT modify any unit's flashcard flip logic. It finds
   the flip card, watches for a flip (via class MutationObserver, like
   bd-confidence.js), and drops a panel below the card with:
     • a per-item retention sparkline (SPACED.sparklineSVG)
     • a CONFIDENT / SHAKY / GUESSING self-rate that fires SPACED.recordReview

   Handles both flashcard layouts on the site:
     • standard  — flip el #fc-card,       container #card-area   (units 1-5,7,8)
     • unit6     — flip el #fc-card-inner,  container #fc-scene
   Pages with no flashcards (unit9) are skipped automatically.

   Flashcard recall maps onto the shared (correct, confidence) model:
     CONFIDENT -> (correct, 'confident')   box +2   — knew it cold
     SHAKY     -> (correct, 'shaky')       box +1   — shaky recall
     GUESSING  -> (wrong,   'guessing')    box -> 1 — didn't really know it

   itemId scheme: u{unit}_fc_{slug(term)} — globally unique, unit from URL.
   Site convention: plain global, no build step, no imports.
   ============================================================ */
(function () {
  'use strict';

  function unitFromURL() { var m = (location.pathname || '').match(/unit(\d+)/i); return m ? m[1] : '?'; }
  function slug(s) {
    return (s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').slice(0, 48);
  }
  function isLoading(t) { return !t || t.indexOf('Loading') === 0; }

  function injectCSS() {
    if (document.getElementById('fcx-css')) return;
    var css =
      '.fcx-panel{max-width:520px;margin:14px auto 0;background:var(--white,#fff);border:1px solid var(--border,#ddd0b8);border-left:4px solid var(--red,#b0001c);padding:12px 15px}' +
      '.fcx-top{display:flex;align-items:center;gap:14px;flex-wrap:wrap}' +
      '.fcx-spark{flex-shrink:0;line-height:0}' +
      '.fcx-spark svg{display:block}' +
      '.fcx-spark.fcx-anim .fcx-line{stroke-dasharray:640;stroke-dashoffset:640;animation:fcxDraw .7s ease forwards}' +
      '@keyframes fcxDraw{to{stroke-dashoffset:0}}' +
      '.fcx-meta{font-family:"IBM Plex Mono",monospace;font-size:.64rem;letter-spacing:.04em;line-height:1.5;color:var(--muted,#7a7860)}' +
      '.fcx-rate{display:flex;gap:8px;margin-top:11px}' +
      '.fcx-btn{flex:1;padding:9px 8px;background:var(--white,#fff);border:1px solid var(--border,#ddd0b8);cursor:pointer;font-family:"IBM Plex Mono",monospace;font-size:.62rem;letter-spacing:.07em;text-transform:uppercase;color:var(--muted,#7a7860);text-align:center;transition:all .12s}' +
      '.fcx-btn:hover:not(:disabled){border-color:var(--red,#b0001c);color:var(--ink,#1a1a12)}' +
      '.fcx-btn:disabled{opacity:.5;cursor:default}' +
      '.fcx-btn.fcx-on{background:var(--red,#b0001c);border-color:var(--red,#b0001c);color:#fff}' +
      '.fcx-btn small{display:block;font-size:.52rem;letter-spacing:.02em;text-transform:none;margin-top:3px;opacity:.8}';
    var st = document.createElement('style'); st.id = 'fcx-css'; st.textContent = css;
    document.head.appendChild(st);
  }

  var RATE = { confident: [true, 'confident'], shaky: [true, 'shaky'], guessing: [false, 'guessing'] };

  function buildPanel() {
    var p = document.createElement('div');
    p.className = 'fcx-panel';
    p.innerHTML =
      '<div class="fcx-top"><div class="fcx-spark"></div><div class="fcx-meta"></div></div>' +
      '<div class="fcx-rate">' +
        '<button type="button" class="fcx-btn" data-rate="confident">Confident<small>knew it cold</small></button>' +
        '<button type="button" class="fcx-btn" data-rate="shaky">Shaky<small>half there</small></button>' +
        '<button type="button" class="fcx-btn" data-rate="guessing">Guessing<small>blanked</small></button>' +
      '</div>';
    return p;
  }

  function init() {
    var flipEl = document.getElementById('fc-card') || document.getElementById('fc-card-inner');
    var termEl = document.getElementById('fc-term');
    if (!flipEl || !termEl) return;                  // no flashcards here
    if (flipEl.getAttribute('data-fcx')) return;
    flipEl.setAttribute('data-fcx', '1');
    injectCSS();

    var unit = unitFromURL();
    var container = document.getElementById('card-area') || document.getElementById('fc-scene') || flipEl.parentElement;
    var panel = buildPanel();
    container.parentNode.insertBefore(panel, container.nextSibling);

    var sparkEl = panel.querySelector('.fcx-spark');
    var metaEl = panel.querySelector('.fcx-meta');
    var btns = panel.querySelectorAll('.fcx-btn');
    var state = { term: null, id: null, revealed: false, rated: false };

    function curTerm() { return (termEl.textContent || '').trim(); }
    function dueDays(item) {
      if (!item || !item.nextDue) return 'a day';
      var d = Math.round((new Date(item.nextDue).getTime() - Date.now()) / 86400000);
      return d <= 1 ? '1 day' : (d + ' days');
    }
    function render(animate) {
      if (window.SPACED && SPACED.sparklineSVG) sparkEl.innerHTML = SPACED.sparklineSVG(state.id, { w: 200, h: 70 });
      if (animate) { sparkEl.classList.remove('fcx-anim'); void sparkEl.offsetWidth; sparkEl.classList.add('fcx-anim'); }
      var item = (window.SPACED && SPACED.getItem) ? SPACED.getItem(state.id) : null;
      if (state.rated) {
        metaEl.innerHTML = '<b style="color:var(--ink,#1a1a12)">Logged.</b> Resurfaces in ' + dueDays(item) + '.';
      } else if (state.revealed) {
        metaEl.textContent = 'How well did you recall it?';
      } else if (item) {
        metaEl.textContent = 'Recall estimate ' + Math.round(SPACED.retention(item)) + '% · flip, then rate.';
      } else {
        metaEl.textContent = 'New card · flip, then rate your recall.';
      }
      Array.prototype.forEach.call(btns, function (b) {
        b.disabled = !state.revealed || state.rated;
        b.classList.remove('fcx-on');
      });
    }
    function loadCard(term) {
      state.term = term;
      state.id = 'u' + unit + '_fc_' + slug(term);
      state.revealed = false; state.rated = false;
      render(false);
    }

    Array.prototype.forEach.call(btns, function (b) {
      b.addEventListener('click', function (e) {
        e.stopPropagation();
        if (!state.revealed || state.rated) return;
        var m = RATE[b.dataset.rate];
        if (window.SPACED && SPACED.recordReview) SPACED.recordReview(state.id, m[0], m[1]);
        state.rated = true;
        render(true);
        b.classList.add('fcx-on');
      });
    });

    // Flip -> the answer has been revealed; rating unlocks.
    new MutationObserver(function () {
      if (flipEl.classList.contains('flipped') && !state.revealed) { state.revealed = true; render(false); }
    }).observe(flipEl, { attributes: true, attributeFilter: ['class'] });

    // Term text change -> a new card is showing; reset the panel.
    new MutationObserver(function () {
      var t = curTerm();
      if (!isLoading(t) && t !== state.term) loadCard(t);
    }).observe(termEl, { childList: true, characterData: true, subtree: true });

    var t0 = curTerm();
    if (!isLoading(t0)) loadCard(t0);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
