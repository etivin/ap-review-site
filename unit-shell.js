/* unit-shell.js: the sidebar, sub-tab bar, and tab switching for every unit page.
   Load it LAST on a unit page (just before </body>), after the page's own scripts.

   Builds the six sidebar groups below into #sb-nav-items (pages that don't exist
   on the page are skipped), adds the sub-tab bar under the top bar, and exposes
   window.showTab(id). Any element with data-tab="pg-xxx" opens that tab, and
   unitN.html#pg-xxx deep-links to it. nav-flyout.js and tour.js read the
   data-subs list each sidebar item carries.

   Per-unit differences go in an optional config object set before this file loads:
     window.UNIT_SHELL = { titles: {'pg-xxx':'Top-bar title'}, sublabels: {'pg-xxx':'Sub-tab label'} };
   Pages that need to react to a tab opening can listen for the 'unit:tab' event
   (detail.id), or define window.renderGuide, which runs when the Study Guide opens.
   Site convention: plain global, no build step, no imports. */
(function () {
  'use strict';
  var cfg = window.UNIT_SHELL || {};

  var PAGE_TITLES = {
    'pg-home': 'Overview', 'pg-mcq': 'MCQ Practice', 'pg-walk': 'MCQ Walkthrough', 'pg-web': 'Globalization Web',
    'pg-write': 'Writing Practice', 'pg-writing': 'Writing Drills', 'pg-guide': 'Study Guide',
    'pg-source': 'Documents', 'pg-visual': 'Visual Sources', 'pg-maps': 'Maps',
    'pg-flash': 'Flashcards', 'pg-glossary': 'Glossary', 'pg-brain': 'Brain Dump', 'pg-spice': 'SPICE-T Analysis',
    'pg-games': 'Games', 'pg-slides': 'Slides'
  };
  var GROUPS = [
    { label: 'Overview', pages: ['pg-home'] },
    { label: 'Practice', pages: ['pg-mcq', 'pg-walk', 'pg-web'] },
    { label: 'Writing', pages: ['pg-write', 'pg-writing'] },
    { label: 'Study Guide', pages: ['pg-guide'] },
    { label: 'Sources', pages: ['pg-source', 'pg-visual', 'pg-maps'] },
    { label: 'Review & Recall', pages: ['pg-flash', 'pg-glossary', 'pg-brain', 'pg-spice', 'pg-games'] }
  ];
  var SUBLABELS = {
    'pg-mcq': 'Questions', 'pg-walk': 'How to Attack an MCQ', 'pg-web': 'Web Review',
    'pg-write': 'FRQ Grader', 'pg-writing': 'Writing Drills',
    'pg-guide': 'Study Guide',
    'pg-source': 'Documents', 'pg-visual': 'Visual Sources', 'pg-maps': 'Maps',
    'pg-flash': 'Flashcards', 'pg-glossary': 'Glossary', 'pg-brain': 'Brain Dump', 'pg-spice': 'SPICE-T', 'pg-games': 'Games'
  };
  var k;
  for (k in (cfg.titles || {})) PAGE_TITLES[k] = cfg.titles[k];
  for (k in (cfg.sublabels || {})) SUBLABELS[k] = cfg.sublabels[k];

  var LIVE = null;   // GROUPS minus pages missing from this unit
  function live() {
    if (!LIVE) LIVE = GROUPS.map(function (g) {
      return { label: g.label, pages: g.pages.filter(function (id) { return document.getElementById(id); }) };
    }).filter(function (g) { return g.pages.length; });
    return LIVE;
  }
  function groupOf(id) {
    var L = live();
    for (var i = 0; i < L.length; i++) if (L[i].pages.indexOf(id) > -1) return L[i];
    return null;
  }
  function label(id) { return SUBLABELS[id] || PAGE_TITLES[id] || id; }

  function injectCSS() {
    if (document.getElementById('subtab-css')) return;
    var s = document.createElement('style'); s.id = 'subtab-css';
    s.textContent = '.subtab-bar{display:flex;flex-wrap:wrap;align-items:center;gap:0 26px;background:var(--white);border-bottom:1px solid var(--border);padding:0 32px;position:sticky;top:62px;z-index:90;box-shadow:0 1px 3px rgba(0,0,0,.04)}' +
      '.subtab-bar:empty{display:none}' +
      '.subtab{appearance:none;background:none;border:none;border-bottom:3px solid transparent;padding:11px 2px;font-family:Lato,system-ui,sans-serif;font-weight:700;font-size:.7rem;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);cursor:pointer;transition:color .13s,border-color .13s;white-space:nowrap}' +
      '.subtab:hover{color:var(--ink)}.subtab.active{color:var(--red);border-bottom-color:var(--red)}';
    document.head.appendChild(s);
  }
  function ensureSubtabBar() {
    if (document.getElementById('subtab-bar')) return;
    var tb = document.querySelector('.top-bar');
    if (!tb || !tb.parentNode) return;
    var ref = tb.nextElementSibling && tb.nextElementSibling.id === 'spx-banner' ? tb.nextElementSibling : tb;
    var bar = document.createElement('div'); bar.id = 'subtab-bar'; bar.className = 'subtab-bar';
    ref.parentNode.insertBefore(bar, ref.nextSibling);
  }
  function renderNav() {
    var wrap = document.getElementById('sb-nav-items');
    if (!wrap) return;
    wrap.innerHTML = '';
    live().forEach(function (g) {
      var it = document.createElement('div');
      it.className = 'nav-item'; it.dataset.group = g.label;
      it.dataset.subs = JSON.stringify(g.pages.map(function (id) { return [id, label(id)]; }));
      var dot = document.createElement('span'); dot.className = 'nav-dot';
      it.appendChild(dot); it.appendChild(document.createTextNode(g.label));
      it.addEventListener('click', function () { showTab(g.pages[0]); });
      wrap.appendChild(it);
    });
  }
  function renderSubtabs(group, activeId) {
    var bar = document.getElementById('subtab-bar');
    if (!bar) return;
    bar.innerHTML = '';
    if (!group || group.pages.length < 2) return;
    group.pages.forEach(function (id) {
      var b = document.createElement('button'); b.type = 'button';
      b.className = 'subtab' + (id === activeId ? ' active' : '');
      b.textContent = label(id);
      b.addEventListener('click', function () { showTab(id); });
      bar.appendChild(b);
    });
  }

  function showTab(id) {
    Array.prototype.forEach.call(document.querySelectorAll('.page'), function (p) { p.classList.remove('active'); });
    var t = document.getElementById(id);
    if (t) t.classList.add('active');
    var group = groupOf(id);
    Array.prototype.forEach.call(document.querySelectorAll('#sb-nav-items .nav-item'), function (n) {
      n.classList.toggle('active', !!group && n.dataset.group === group.label);
    });
    renderSubtabs(group, id);
    var tt = document.getElementById('top-title');
    if (tt) tt.textContent = group ? group.label : (PAGE_TITLES[id] || '');
    if (id === 'pg-guide' && typeof window.renderGuide === 'function') window.renderGuide();
    try { document.dispatchEvent(new CustomEvent('unit:tab', { detail: { id: id } })); } catch (e) {}
    window.scrollTo(0, 0);
  }
  window.showTab = showTab;

  function hashPage() {
    var h = (location.hash || '').replace(/^#/, ''), t = h && document.getElementById(h);
    return t && t.classList && t.classList.contains('page') ? h : null;
  }
  function init() {
    injectCSS(); ensureSubtabBar(); renderNav();
    showTab(hashPage() || 'pg-home');
    window.addEventListener('hashchange', function () { var h = hashPage(); if (h) showTab(h); });
    document.addEventListener('click', function (e) {
      var el = e.target.closest && e.target.closest('[data-tab]');
      if (el) showTab(el.getAttribute('data-tab'));
    });
    var back = document.getElementById('hdr-back');
    if (back) back.addEventListener('click', function () { showTab('pg-home'); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
