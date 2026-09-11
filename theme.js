/* ─────────────────────────────────────────────────────────────
   Site-wide dark-mode toggle.
   - Theme choice is stored in localStorage('mcTheme') and is shared
     across every page on the origin, so turning it on/off anywhere
     turns it on/off everywhere.
   - A tiny inline snippet in each page's <head> applies the saved
     theme before paint (no flash); this file injects the toggle
     control into the page's top bar and wires the click.
   - Mission Control ships its own toggle, so this bails if one
     already exists.
   ───────────────────────────────────────────────────────────── */
(function(){
  "use strict";
  var root = document.documentElement;
  var KEY = 'mcTheme';

  if (document.getElementById('themeToggle')) return; // page already has its own

  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'theme-toggle';
  btn.id = 'themeToggle';
  btn.setAttribute('role', 'switch');
  btn.setAttribute('aria-label', 'Toggle dark mode');
  btn.title = 'Toggle dark mode';
  btn.innerHTML =
    '<span class="tt-ico tt-sun" aria-hidden="true">☀</span>' +
    '<span class="tt-ico tt-moon" aria-hidden="true">☾</span>' +
    '<span class="tt-knob"></span>';

  function place(){
    // Navy bars (Mission Control-style / interrogate games) + the 404 bar
    var links = document.querySelector('.bar .links, .topbar .links');
    if (links){ links.appendChild(btn); return; }
    // Cream/paper content pages + unit hubs: a flex .top-bar with the tag on the right
    var topbar = document.querySelector('.top-bar');
    if (topbar){
      var last = topbar.lastElementChild;
      var wrap = document.createElement('div');
      wrap.className = 'tt-barwrap';
      topbar.appendChild(wrap);
      if (last && last !== wrap) wrap.appendChild(last);
      wrap.appendChild(btn);
      return;
    }
    // Generic fallback
    var bar = document.querySelector('.bar, .topbar, header nav, header');
    if (bar){ bar.appendChild(btn); return; }
    // Last resort: float it top-right
    btn.classList.add('tt-float');
    document.body.appendChild(btn);
  }

  function paint(){
    btn.setAttribute('aria-checked', root.getAttribute('data-theme') === 'dark' ? 'true' : 'false');
  }

  place();
  paint();
  btn.addEventListener('click', function(){
    var dark = root.getAttribute('data-theme') === 'dark';
    if (dark) root.removeAttribute('data-theme'); else root.setAttribute('data-theme', 'dark');
    try{ localStorage.setItem(KEY, dark ? 'light' : 'dark'); }catch(e){}
    paint();
  });
})();
