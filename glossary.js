/* glossary.js — renders a unit's Glossary tab (#pg-glossary) from glossary-data.js.
   Mount: <div class="gl-mount" data-unit="N"></div> inside the pg-glossary page.
   Deep links: unitN.html#g-<slug> opens the Glossary tab and highlights that term
   (site search links here). Styles use each unit page's own tokens (--ink, --red…). */
(function () {
  var mount = document.querySelector('.gl-mount');
  if (!mount || !window.GLOSSARY_LIST) return;
  var unit = +mount.dataset.unit;
  var ALL = window.GLOSSARY_LIST(unit).sort(function (a, b) { return sortKey(a.term).localeCompare(sortKey(b.term)); });
  var topics = [];
  ALL.forEach(function (e) { if (topics.indexOf(e.topic) < 0) topics.push(e.topic); });
  topics.sort(function (a, b) { return +a.split('.')[1] - +b.split('.')[1]; });
  var state = { q: '', topic: '' };

  function sortKey(t) { return t.replace(/^(the|a|an)\s+/i, '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase(); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  var CSS =
    '.gl-tools{display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin-bottom:14px}' +
    '.gl-find{flex:1 1 240px;min-width:0;padding:11px 14px;border:1.5px solid var(--border2,#b8a478);background:var(--white,#fff);color:var(--ink,#241d10);font:600 .95rem Lato,system-ui,sans-serif;border-radius:3px}' +
    '.gl-find:focus{outline:2px solid var(--red,#7a5500);outline-offset:1px}' +
    '.gl-count{font:700 .62rem Lato,system-ui,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:var(--muted,#7a7860)}' +
    '.gl-chips{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px}' +
    '.gl-chip{appearance:none;border:1.5px solid var(--border2,#b8a478);background:none;color:var(--ink,#241d10);font:700 .62rem Lato,system-ui,sans-serif;letter-spacing:.08em;text-transform:uppercase;padding:6px 10px;border-radius:999px;cursor:pointer}' +
    '.gl-chip:hover{border-color:var(--red,#7a5500)}' +
    '.gl-chip.on{background:var(--ink,#241d10);border-color:var(--ink,#241d10);color:#fff}' +
    '.gl-az{display:flex;flex-wrap:wrap;gap:2px;margin-bottom:22px;padding-bottom:14px;border-bottom:1px solid var(--border,#ddd0b8)}' +
    '.gl-az a{font:800 .78rem Lato,system-ui,sans-serif;color:var(--red,#7a5500);text-decoration:none;padding:4px 7px;border-radius:3px}' +
    '.gl-az a:hover{background:rgba(244,205,79,.25)}' +
    '.gl-az span{font:800 .78rem Lato,system-ui,sans-serif;color:var(--muted,#7a7860);opacity:.4;padding:4px 7px}' +
    '.gl-letter{margin-bottom:26px;scroll-margin-top:130px}' +
    '.gl-letter h3{font:900 1.5rem/1 Lato,system-ui,sans-serif;color:var(--red,#7a5500);margin:0 0 10px;padding-bottom:6px;border-bottom:2px solid var(--border,#ddd0b8)}' +
    '.gl-item{padding:12px 14px;border-bottom:1px solid var(--border,#ddd0b8);scroll-margin-top:140px;border-left:3px solid transparent}' +
    '.gl-head{display:flex;flex-wrap:wrap;align-items:baseline;gap:8px 12px}' +
    '.gl-term{font:800 1.02rem/1.3 Lato,system-ui,sans-serif;color:var(--ink,#241d10)}' +
    '.gl-topic{font:700 .58rem Lato,system-ui,sans-serif;letter-spacing:.1em;text-transform:uppercase;color:var(--muted,#7a7860);border:1px solid var(--border,#ddd0b8);padding:2px 7px;border-radius:3px}' +
    '.gl-def{margin:4px 0 0;color:var(--mid,#48483a);font-size:.93rem;line-height:1.6}' +
    '.gl-item.gl-hit{animation:gl-hit 4s ease-out}' +
    '@keyframes gl-hit{0%,55%{background:rgba(244,205,79,.35);border-left-color:var(--red,#7a5500)}100%{background:transparent;border-left-color:transparent}}' +
    '.gl-none{padding:30px 0;text-align:center;color:var(--muted,#7a7860)}' +
    'mark.gl-m{background:rgba(244,205,79,.5);color:inherit;padding:0 1px}';
  var st = document.createElement('style'); st.id = 'gl-css'; st.textContent = CSS;
  document.head.appendChild(st);

  mount.innerHTML =
    '<div class="gl-tools"><input class="gl-find" type="search" placeholder="Filter ' + ALL.length + ' terms…" aria-label="Filter glossary terms" autocomplete="off"/>' +
    '<span class="gl-count" aria-live="polite"></span></div>' +
    '<div class="gl-chips" role="group" aria-label="Filter by topic"><button type="button" class="gl-chip on" data-t="">All topics</button>' +
      topics.map(function (t) { return '<button type="button" class="gl-chip" data-t="' + t + '">' + t + '</button>'; }).join('') + '</div>' +
    '<nav class="gl-az" aria-label="Jump to letter"></nav><div class="gl-list"></div>';
  var find = mount.querySelector('.gl-find'), count = mount.querySelector('.gl-count'),
      az = mount.querySelector('.gl-az'), list = mount.querySelector('.gl-list');

  function hl(text) {
    var h = esc(text);
    if (!state.q) return h;
    return h.replace(new RegExp('(' + state.q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig'), '<mark class="gl-m">$1</mark>');
  }
  function render() {
    var q = state.q.toLowerCase();
    var shown = ALL.filter(function (e) {
      return (!state.topic || e.topic === state.topic) && (!q || (e.term + ' ' + e.def).toLowerCase().indexOf(q) > -1);
    });
    count.textContent = shown.length + ' of ' + ALL.length + ' terms';
    var groups = {}, letters = [];
    shown.forEach(function (e) {
      var L = sortKey(e.term).charAt(0).toUpperCase();
      if (!/[A-Z]/.test(L)) L = '#';
      if (!groups[L]) { groups[L] = []; letters.push(L); }
      groups[L].push(e);
    });
    az.innerHTML = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(function (L) {
      return groups[L] ? '<a href="#gl-' + L + '" data-l="' + L + '">' + L + '</a>' : '<span>' + L + '</span>';
    }).join('');
    if (!shown.length) { list.innerHTML = '<p class="gl-none">No terms match. Try a different word or topic.</p>'; return; }
    list.innerHTML = letters.map(function (L) {
      return '<section class="gl-letter" id="gl-' + L + '"><h3>' + L + '</h3>' + groups[L].map(function (e) {
        return '<div class="gl-item" id="g-' + e.slug + '"><div class="gl-head"><span class="gl-term">' + hl(e.term) + '</span>' +
          '<span class="gl-topic">Topic ' + e.topic + '</span></div><p class="gl-def">' + hl(e.def) + '</p></div>';
      }).join('') + '</section>';
    }).join('');
  }
  find.addEventListener('input', function () { state.q = find.value.trim(); render(); });
  mount.querySelector('.gl-chips').addEventListener('click', function (ev) {
    var b = ev.target.closest('.gl-chip'); if (!b) return;
    state.topic = b.dataset.t;
    mount.querySelectorAll('.gl-chip').forEach(function (c) { c.classList.toggle('on', c === b); });
    render();
  });
  // letter links scroll in place (a real #gl-X hash would fight the unit tab router)
  az.addEventListener('click', function (ev) {
    var a = ev.target.closest('a'); if (!a) return;
    ev.preventDefault();
    var sec = document.getElementById('gl-' + a.dataset.l);
    if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  render();

  // #g-<slug> → open the Glossary tab and spotlight the term
  function jump() {
    var m = /^#g-(.+)$/.exec(location.hash);
    if (!m) return;
    var slug = decodeURIComponent(m[1]);
    if (!ALL.some(function (e) { return e.slug === slug; })) return;
    state.q = ''; state.topic = ''; find.value = '';
    mount.querySelectorAll('.gl-chip').forEach(function (c) { c.classList.toggle('on', c.dataset.t === ''); });
    render();
    if (typeof window.showTab === 'function') window.showTab('pg-glossary');
    setTimeout(function () {   // after showTab's scrollTo(0,0)
      var el = document.getElementById('g-' + slug);
      if (!el) return;
      el.scrollIntoView({ block: 'center' });
      el.classList.add('gl-hit');
      setTimeout(function () { el.classList.remove('gl-hit'); }, 4000);
    }, 60);
  }
  window.addEventListener('hashchange', jump);
  // units 5–8 build their nav (and reset to pg-home) on DOMContentLoaded, so wait for that
  function initialJump() { setTimeout(jump, 0); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialJump);
  else initialJump();
})();
