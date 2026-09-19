/* ============================================================
   bd-confidence.js  —  Calibration layer for the Brain Dump tool.
   Before the model answer is revealed, force a one-tap prediction of
   completeness (Nailed it / Half there / Blank), then echo it above the
   revealed content. Applies the same predict-before-you-check mechanic
   the MCQ Test Mode uses, in the one place it was missing.

   Works on both Brain Dump variants on the site because both toggle
   `.active` on #bd-reveal and render into .bd-card-list / .bd-reveal-hdr.
   Purely additive: it does NOT modify either unit's reveal() function —
   it injects a gate and lets CSS hide the answer until a rating is tapped,
   so there is no flash of the answer and no timing race.
   Site convention: plain global, no build step, no imports.
   ============================================================ */
(function () {
  'use strict';

  function injectCSS() {
    if (document.getElementById('bdc-css')) return;
    var css =
      '.bdc-gate{display:none;background:var(--gold-bg,#fdf7e8);border:1px solid var(--gold-b,#d4b84a);border-left:4px solid var(--gold,#7a5500);padding:15px 18px;margin-bottom:8px}' +
      '.bd-reveal.active:not(.bdc-revealed) .bdc-gate{display:block}' +
      '.bd-reveal.active:not(.bdc-revealed) .bd-card-list{display:none}' +
      '.bd-reveal.active:not(.bdc-revealed) .bd-reveal-hdr{display:none}' +
      '.bdc-q{font-weight:600;margin-bottom:10px;color:var(--ink,#1a1a12);line-height:1.5}' +
      '.bdc-btns{display:flex;flex-wrap:wrap;gap:8px}' +
      '.bdc-btns button{padding:8px 16px;border:1px solid var(--border,#ddd0b8);background:var(--white,#fff);cursor:pointer;font-family:inherit;font-size:.9rem;color:var(--ink,#1a1a12);transition:border-color .12s,background .12s}' +
      '.bdc-btns button:hover{border-color:var(--ink,#1a1a12);background:var(--paper,#f3ece0)}' +
      '.bdc-verdict{display:none;background:var(--paper,#f3ece0);border-left:3px solid var(--gold,#7a5500);padding:11px 15px;margin-bottom:14px;font-size:.9rem;line-height:1.55}' +
      '.bd-reveal.active.bdc-revealed .bdc-verdict{display:block}';
    var st = document.createElement('style'); st.id = 'bdc-css'; st.textContent = css;
    document.head.appendChild(st);
  }

  function init() {
    var rev = document.getElementById('bd-reveal');
    if (!rev || rev.getAttribute('data-bdc')) return;
    if (!rev.querySelector('.bd-card-list')) return; // not a compatible brain-dump reveal
    rev.setAttribute('data-bdc', '1');
    injectCSS();

    var verdict = document.createElement('div');
    verdict.className = 'bdc-verdict';

    var gate = document.createElement('div');
    gate.className = 'bdc-gate';
    gate.innerHTML =
      '<div class="bdc-q">Before you see the model answer &mdash; how complete was your brain dump?</div>' +
      '<div class="bdc-btns">' +
        '<button type="button" data-bdc-rating="Nailed it">Nailed it</button>' +
        '<button type="button" data-bdc-rating="Half there">Half there</button>' +
        '<button type="button" data-bdc-rating="Blank">Blank</button>' +
      '</div>';

    rev.insertBefore(verdict, rev.firstChild);
    rev.insertBefore(gate, rev.firstChild);

    gate.querySelectorAll('button').forEach(function (b) {
      b.addEventListener('click', function () {
        var v = this.getAttribute('data-bdc-rating');
        verdict.innerHTML = '<strong>You predicted: ' + v + '.</strong> Now compare it to the model answer below &mdash; the gap between what you felt you knew and what you actually wrote is exactly what to study next.';
        rev.classList.add('bdc-revealed');
      });
    });

    // Reset the gate whenever the reveal is closed (new session / reset),
    // so the next brain dump asks for a fresh prediction.
    var mo = new MutationObserver(function () {
      // Only act when there is a real change to make, and disconnect while we
      // write so our own class change can never re-enter this callback. Without
      // the guard + disconnect, toggling `active` on #bd-reveal while the page
      // is live-compositing spins the observer and hard-freezes the tab.
      if (rev.classList.contains('active')) return;        // still open
      if (!rev.classList.contains('bdc-revealed')) return; // already reset — no write
      mo.disconnect();
      rev.classList.remove('bdc-revealed');
      mo.observe(rev, { attributes: true, attributeFilter: ['class'] });
    });
    mo.observe(rev, { attributes: true, attributeFilter: ['class'] });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
