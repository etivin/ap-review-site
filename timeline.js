/* timeline.js: draws the illustrated timeline on a unit's Overview tab from
   timeline-data.js into <div id="tl-list" data-unit="N">, and wires the
   "scroll to timeline" button (#scroll-timeline-btn → #timeline-section).
   Cards alternate left / right and fade in as they scroll into view.
   Styles (.tl-item, .tl-img-wrap, .tl-content ...) live in each unit page.
   Site convention: plain global, no build step, no imports. */
(function () {
  'use strict';
  function card(it, i) {
    var crop = it.pos || 'center';
    return '<div class="tl-item ' + (i % 2 === 0 ? 'tl-left' : 'tl-right') + '">' +
      '<div class="tl-img-wrap">' +
        '<img src="' + it.img + '" alt="' + String(it.alt || it.title).replace(/"/g, '&quot;') + '" style="object-position:' + crop + '" loading="lazy" ' +
          'onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'"/>' +
        '<div class="tl-img-fallback" style="display:none">' + it.year + '<br/>' + it.title + '</div>' +
      '</div>' +
      '<div class="tl-spine"><div class="tl-dot"></div></div>' +
      '<div class="tl-content">' +
        '<div class="tl-year-badge">' + it.year + '</div>' +
        (it.topic ? '<div class="tl-topic-tag">' + it.topic + '</div>' : '') +
        '<h3 class="tl-title">' + it.title + '</h3>' +
        '<p class="tl-desc">' + it.desc + '</p>' +
      '</div></div>';
  }
  function init() {
    var list = document.getElementById('tl-list');
    if (list) {
      var rows = (window.TIMELINE_DATA || {})[list.getAttribute('data-unit')] || [];
      list.innerHTML = rows.map(card).join('');
      if ('IntersectionObserver' in window) {
        var obs = new IntersectionObserver(function (entries) {
          entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        Array.prototype.forEach.call(list.querySelectorAll('.tl-item'), function (el) { obs.observe(el); });
      } else {
        Array.prototype.forEach.call(list.querySelectorAll('.tl-item'), function (el) { el.classList.add('visible'); });
      }
    }
    var btn = document.getElementById('scroll-timeline-btn'), sec = document.getElementById('timeline-section');
    if (btn && sec) btn.addEventListener('click', function () { sec.scrollIntoView({ behavior: 'smooth' }); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
