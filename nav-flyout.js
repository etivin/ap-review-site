/* nav-flyout.js — hover/tap flyout menus for the unit sidebar.
   Each sidebar group (e.g. "Review & Recall") that holds 2+ sub-pages gets a
   flyout listing them, so students can jump straight to Glossary, Games, etc.
   Clicking the group itself still opens its first page as before.
   Reads the sub-page list from data-subs, which each unit's renderNav sets as
   JSON [[pageId,label],...]. Works whether the nav is built before or after
   this script runs (units 5–8 build it on DOMContentLoaded). */
(function(){
  var css =
    '.nav-flyout{position:fixed;z-index:1000;min-width:210px;padding:8px 0;border-radius:10px;box-shadow:0 10px 30px rgba(0,0,0,.35);border:1px solid rgba(255,255,255,.08);opacity:0;transform:translateX(-4px);transition:opacity .12s,transform .12s;pointer-events:none}' +
    '.nav-flyout.open{opacity:1;transform:none;pointer-events:auto}' +
    '.nav-flyout-head{padding:6px 16px 8px;font-size:.66rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.45)}' +
    '.nav-flyout button{display:block;width:100%;text-align:left;appearance:none;background:none;border:none;border-left:3px solid transparent;padding:9px 16px;font:500 .9rem Lato,system-ui,sans-serif;color:rgba(255,255,255,.75);cursor:pointer}' +
    '.nav-flyout button:hover,.nav-flyout button:focus-visible{color:#fff;background:rgba(255,255,255,.08);outline:none}' +
    '.nav-flyout button.active{color:#fff;border-left-color:var(--red,#c0392b)}' +
    '.nav-item[data-subs]{position:relative}' +
    '.nav-caret{margin-left:auto;display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;margin-right:-8px;border-radius:6px;font-size:.8rem;opacity:.55;transition:opacity .12s,background .12s}' +
    '.nav-item:hover .nav-caret,.nav-item.flyout-open .nav-caret{opacity:1}' +
    '.nav-caret:hover{background:rgba(255,255,255,.1)}';
  var st = document.createElement('style'); st.textContent = css;
  (document.head || document.documentElement).appendChild(st);

  var fly = null, owner = null, hideTimer = null;

  function subsOf(item){
    try { return JSON.parse(item.getAttribute('data-subs') || '[]'); } catch(e){ return []; }
  }
  function activePageId(){
    var p = document.querySelector('.page.active'); return p ? p.id : '';
  }
  function ensureFly(){
    if (fly) return fly;
    fly = document.createElement('div');
    fly.className = 'nav-flyout'; fly.setAttribute('role','menu');
    fly.addEventListener('mouseenter', cancelHide);
    fly.addEventListener('mouseleave', scheduleHide);
    document.body.appendChild(fly);
    return fly;
  }
  function show(item){
    var subs = subsOf(item);
    if (subs.length < 2) return;
    cancelHide();
    if (owner && owner !== item) owner.classList.remove('flyout-open');
    owner = item; item.classList.add('flyout-open');
    var f = ensureFly(), cur = activePageId();
    var sb = item.closest('.sidebar');
    f.style.background = sb ? getComputedStyle(sb).backgroundColor : '#1b2a2f';
    f.innerHTML = '';
    var h = document.createElement('div'); h.className = 'nav-flyout-head';
    h.textContent = item.getAttribute('data-group') || ''; f.appendChild(h);
    subs.forEach(function(s){
      var b = document.createElement('button'); b.type = 'button'; b.setAttribute('role','menuitem');
      b.textContent = s[1]; if (s[0] === cur) b.className = 'active';
      b.addEventListener('click', function(e){
        e.stopPropagation(); hide();
        if (typeof window.showTab === 'function') window.showTab(s[0]);
      });
      f.appendChild(b);
    });
    place();
    f.classList.add('open');
  }
  // Place to the right of the sidebar item; fall back to below it when the
  // sidebar spans the screen (mobile layout).
  function place(){
    if (!fly || !owner) return;
    var r = owner.getBoundingClientRect(), fw = fly.offsetWidth, fh = fly.offsetHeight;
    var left, top;
    if (r.right + fw + 8 <= window.innerWidth) { left = r.right - 2; top = r.top - 8; }
    else { left = Math.max(8, Math.min(r.left + 24, window.innerWidth - fw - 8)); top = r.bottom + 2; }
    top = Math.max(8, Math.min(top, window.innerHeight - fh - 8));
    fly.style.left = left + 'px'; fly.style.top = top + 'px';
  }
  function hide(){
    cancelHide();
    if (fly) fly.classList.remove('open');
    if (owner) owner.classList.remove('flyout-open');
    owner = null;
  }
  function scheduleHide(){ cancelHide(); hideTimer = setTimeout(hide, 180); }
  function cancelHide(){ if (hideTimer){ clearTimeout(hideTimer); hideTimer = null; } }

  // Add a ▸ caret to multi-page groups. The caret is a tap target on touch
  // screens (where hover doesn't exist); tapping the label still opens page 1.
  function decorate(){
    document.querySelectorAll('#sb-nav-items .nav-item[data-subs]').forEach(function(item){
      if (item.querySelector('.nav-caret') || subsOf(item).length < 2) return;
      var c = document.createElement('span'); c.className = 'nav-caret';
      c.setAttribute('aria-label','Show sections'); c.setAttribute('role','button');
      c.textContent = '▸';
      c.addEventListener('click', function(e){
        e.stopPropagation();
        // A mouse click on the arrow keeps the hover-opened menu open; a tap toggles.
        if (e.pointerType !== 'mouse' && owner === item && fly && fly.classList.contains('open')) hide(); else show(item);
      });
      item.appendChild(c);
      // Hover with a real mouse (on the arrow or the label) opens the menu.
      // Checked per pointer, not via (hover:hover), so touchscreen laptops and
      // Chromebooks with a trackpad/mouse still get hover.
      item.addEventListener('pointerenter', function(e){ if (e.pointerType === 'mouse') show(item); });
      item.addEventListener('pointerleave', function(e){ if (e.pointerType === 'mouse') scheduleHide(); });
      item.addEventListener('click', function(){ hide(); });
    });
  }

  function init(){
    decorate();
    var wrap = document.getElementById('sb-nav-items');
    if (wrap && window.MutationObserver) new MutationObserver(decorate).observe(wrap, {childList:true});
    document.addEventListener('click', function(e){
      if (fly && !fly.contains(e.target) && !(owner && owner.contains(e.target))) hide();
    });
    document.addEventListener('keydown', function(e){ if (e.key === 'Escape') hide(); });
    // Keep the menu pinned to its tab while the page or sidebar scrolls.
    window.addEventListener('scroll', place, {passive:true});
    window.addEventListener('resize', place);
    var sb = document.querySelector('.sidebar');
    if (sb) sb.addEventListener('scroll', place, {passive:true});
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
