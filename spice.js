/* spice.js: the SPICE-T tab for every unit, drawn from spice-data.js.
   Mount: <div class="spice-mount" data-unit="N"></div> inside #pg-spice.
   Six cards in AP theme order; the letter and category name are fixed here so
   every unit labels them the same way. Site convention: plain global, no imports. */
(function () {
  'use strict';
  var CATS = { s: 'Social', p: 'Political', i: 'Interaction with the Environment', c: 'Cultural', e: 'Economic', t: 'Technology' };
  function mount(el) {
    var cards = (window.SPICE || {})[el.getAttribute('data-unit')] || [];
    el.innerHTML = '<div class="spice-grid">' + cards.map(function (c) {
      return '<div class="spice-card spice-' + c.key + '"><div class="spice-letter">' + c.key.toUpperCase() + '</div>' +
        '<div class="spice-cat">' + CATS[c.key] + '</div><div class="spice-desc">' + c.desc + '</div>' +
        '<ul class="spice-list">' + c.items.map(function (li) { return '<li>' + li + '</li>'; }).join('') + '</ul></div>';
    }).join('') + '</div>';
  }
  function init() { Array.prototype.forEach.call(document.querySelectorAll('.spice-mount'), mount); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
