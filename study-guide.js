/* study-guide.js: renders a unit's Study Guide tab from study-guide-data.js.
   Mount: <div class="sg-mount" data-unit="N"></div> inside #pg-guide.
   Each section is an accordion: click the header to open or close it.
   Site convention: plain global, no build step, no imports. */
(function () {
  'use strict';
  function mount(el) {
    var unit = el.getAttribute('data-unit'), rows = (window.STUDY_GUIDE || {})[unit] || [];
    el.innerHTML = rows.map(function (s, i) {
      return '<div class="sg-section">' +
        '<div class="sg-hdr" role="button" tabindex="0" aria-expanded="false" data-sgi="' + i + '">' +
          '<div class="sg-htitle">' + s.title + '</div>' +
          '<div class="sg-hmeta">' + (s.num ? '<span class="sg-hnum">' + s.num + '</span>' : '') + '<span class="sg-arr">&#9660;</span></div>' +
        '</div>' +
        '<div class="sg-body">' + s.body + '</div>' +
      '</div>';
    }).join('');
    function toggle(hdr) {
      var open = !hdr.classList.contains('open');
      hdr.classList.toggle('open', open); hdr.setAttribute('aria-expanded', open ? 'true' : 'false');
      hdr.nextElementSibling.classList.toggle('open', open);
    }
    el.addEventListener('click', function (e) { var h = e.target.closest('.sg-hdr'); if (h && el.contains(h)) toggle(h); });
    el.addEventListener('keydown', function (e) {
      var h = e.target.closest && e.target.closest('.sg-hdr');
      if (h && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); toggle(h); }
    });
  }
  function init() { Array.prototype.forEach.call(document.querySelectorAll('.sg-mount'), mount); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
