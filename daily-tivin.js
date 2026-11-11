/* ============================================================
   daily-tivin.js: the Daily Tivin on the home page.
   Four short daily challenges, the same for every student on a given day
   (picked from the Eastern-time date):
     1. Deep Cut     type an answer to each prompt in 25 seconds; rarer answers score more
     2. Two MCQs     two bank questions from DAILY_TIVIN.units (mcq-bank.js, loaded on demand);
                     answers go to SPACED.recordReview like MCQ Practice (10 s read, confidence tap)
     3. Four Links   sort 16 terms into 4 hidden groups, 4 mistakes allowed
     4. Tivin Word   guess the AP World word in 6 tries
   Content: daily-tivin-data.js (window.DAILY_TIVIN).
   Mount: <section id="daily-tivin"></section>, then load both scripts.
   Storage: localStorage dailyTivin_v1 = {days:{'YYYY-MM-DD':{deep, mcq, groups, word}}}
   (last 40 days kept). Plain global window.DAILY_TIVIN_APP.
   ============================================================ */
(function () {
  'use strict';
  var D = window.DAILY_TIVIN;
  var KEY = 'dailyTivin_v1';
  var BANK_SRC = 'mcq-bank.js?v=20261109a';
  var DEEP_SECS = 25, GATE_MS = 10000, WORD_TRIES = 6, LINK_MISTAKES = 4;
  var TIER = { 1: ['Textbook', 10], 2: ['Solid', 30], 3: ['Sharp', 60], 4: ['Deep Cut', 85], 5: ['Tivin Approved', 100] };
  var LV_CLASS = { 1: 'dt-lv1', 2: 'dt-lv2', 3: 'dt-lv3', 4: 'dt-lv4' };
  if (!D) return;

  /* ---------- date + seeded picks ---------- */
  function todayKey() {
    try {
      return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/New_York', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
    } catch (e) { var d = new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
  }
  function dayNum(k) { var p = k.split('-'); return Math.round(Date.UTC(+p[0], +p[1] - 1, +p[2]) / 864e5); }
  function keyFromNum(n) { var d = new Date(n * 864e5); return d.toISOString().slice(0, 10); }
  function hash(s) { var h = 2166136261; for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function rng(seed) { var a = seed >>> 0; return function () { a = (a + 0x6D2B79F5) | 0; var t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  function shuffled(n, seedStr) { var r = rng(hash(seedStr)), a = []; for (var i = 0; i < n; i++) a.push(i); for (i = n - 1; i > 0; i--) { var j = Math.floor(r() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  // Item j of day d: walks a fresh shuffle of the whole list each cycle, so nothing repeats until the list runs out.
  function pick(n, perDay, salt, day) {
    var out = [];
    for (var j = 0; j < perDay; j++) { var i = day * perDay + j, cyc = Math.floor(i / n); out.push(shuffled(n, salt + ':' + cyc)[i % n]); }
    return out;
  }

  /* ---------- storage ---------- */
  function load() { try { var s = JSON.parse(localStorage.getItem(KEY) || '{}'); s.days = s.days || {}; return s; } catch (e) { return { days: {} }; } }
  function saveDay(k, part, val) {
    try {
      var s = load(); s.days[k] = s.days[k] || {}; s.days[k][part] = val;
      var keys = Object.keys(s.days).sort(); while (keys.length > 40) delete s.days[keys.shift()];
      localStorage.setItem(KEY, JSON.stringify(s));
    } catch (e) {}
  }
  function getDay(k) { return load().days[k] || {}; }
  function allDone(d) { return !!(d && d.deep && d.deep.done && d.mcq && d.mcq.done && d.groups && d.groups.done && d.word && d.word.done); }
  function streak() {
    var s = load(), n = dayNum(todayKey()), c = 0;
    if (!allDone(s.days[keyFromNum(n)])) n--;
    while (allDone(s.days[keyFromNum(n)])) { c++; n--; }
    return c;
  }

  /* ---------- helpers ---------- */
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  // restart a one-shot CSS animation class on an element
  function anim(node, cls) { if (!node) return; node.classList.remove(cls); void node.offsetWidth; node.classList.add(cls); }
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function norm(s) {
    s = String(s || '').toLowerCase();
    try { s = s.normalize('NFD').replace(/[̀-ͯ]/g, ''); } catch (e) {}
    s = s.replace(/[’']/g, '').replace(/&/g, 'and').replace(/[^a-z0-9]+/g, ' ').trim().replace(/^(the|a|an) /, '');
    return s.replace(/ /g, '');
  }
  function lev(a, b) {
    if (Math.abs(a.length - b.length) > 3) return 9;
    var p = [], i, j; for (j = 0; j <= b.length; j++) p[j] = j;
    for (i = 1; i <= a.length; i++) { var prev = p[0]; p[0] = i; for (j = 1; j <= b.length; j++) { var t = p[j]; p[j] = Math.min(p[j] + 1, p[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1)); prev = t; } }
    return p[b.length];
  }
  function matchAnswer(prompt, typed) {
    var t = norm(typed); if (!t) return null;
    var ts = t.replace(/s$/, ''), best = null;
    prompt.a.forEach(function (row) {
      for (var k = 1; k < row.length; k++) {
        var a = norm(row[k]), as = a.replace(/s$/, '');
        var ok = a === t || as === ts;
        if (ok && (!best || row[0] > best[0])) best = row;
      }
    });
    return best;
  }
  // Close but not exact: up to 3 answers to offer as "Did you mean ...?" (typos, or one word of a longer name).
  function suggest(prompt, typed) {
    var t = norm(typed); if (t.length < 4) return [];
    var tol = t.length <= 5 ? 1 : t.length <= 8 ? 2 : 3, found = [];
    prompt.a.forEach(function (row) {
      var best = 99;
      for (var k = 1; k < row.length; k++) {
        var a = norm(row[k]); if (!a) continue;
        var d = lev(a, t); if (d <= tol && d < best) best = d;
        String(row[k]).split(/[\s\-]+/).forEach(function (w) {
          var nw = norm(w); if (nw.length >= 4 && nw !== a && (nw === t || (nw.length >= 6 && lev(nw, t) <= 1))) best = Math.min(best, 0.5);
        });
      }
      if (best < 99) found.push({ row: row, d: best });
    });
    found.sort(function (x, y) { return x.d - y.d; });
    return found.slice(0, 3).map(function (x) { return x.row; });
  }

  /* ---------- styles ---------- */
  function css() {
    if (document.getElementById('dt-css')) return;
    var s = document.createElement('style'); s.id = 'dt-css';
    s.textContent = [
      ':root{--dt-navy:var(--navy,#16244d);--dt-gold:var(--lime,#f4cd4f);--dt-blue:var(--red,#345fbf);--dt-coral:var(--coral,#e2703f);--dt-good:var(--green,#1a6825);--dt-near:var(--gold,#b8860b);--dt-ink:var(--ink,#16244d);--dt-mut:var(--muted,#66748f);--dt-bg:var(--cream,#eef3fa);--dt-panel:var(--white,#fff);--dt-line:var(--border,#cfdcec);--dt-sky:var(--sky,#eaf2fb);--dt-miss:#7d879e}',
      'html[data-theme="dark"]{--dt-ink:#e9eeff;--dt-mut:#aab5e2;--dt-bg:#0b1130;--dt-panel:#141c44;--dt-line:#333e78;--dt-sky:#1c2650;--dt-miss:#4a5175}',
      '#daily-tivin{margin:0 0 30px}',
      '.dt-card{background:var(--dt-ink);color:#fff;border:2px solid var(--dt-blue);box-shadow:6px 6px 0 var(--dt-gold);padding:18px 22px;display:grid;grid-template-columns:minmax(220px,300px) 1fr;gap:20px;align-items:center}',
      'html[data-theme="dark"] .dt-card{background:#141c44;color:#e9eeff}',
      '.dt-eyebrow{font:700 .62rem Lato,sans-serif;letter-spacing:.16em;text-transform:uppercase;color:var(--dt-gold)}',
      '.dt-card h2{font:900 1.9rem/1 Lato,sans-serif;letter-spacing:-.05em;margin:6px 0 6px;color:#fff}',
      '.dt-card h2 b{color:var(--dt-gold)}',
      '.dt-sub{font-size:.74rem;color:#cfdcec;margin:0}',
      '.dt-meta{display:flex;gap:10px;flex-wrap:wrap;margin-top:10px;align-items:center}',
      '.dt-pill{font:700 .62rem Lato,sans-serif;letter-spacing:.08em;text-transform:uppercase;border:1px solid rgba(255,255,255,.35);padding:4px 9px;color:#fff}',
      '.dt-pill.on{background:var(--dt-gold);color:var(--dt-navy);border-color:var(--dt-gold)}',
      '.dt-copy{font:700 .62rem Lato,sans-serif;letter-spacing:.08em;text-transform:uppercase;background:none;border:1px solid var(--dt-gold);color:var(--dt-gold);padding:4px 9px;cursor:pointer}',
      '.dt-tiles{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}',
      '.dt-tile{all:unset;box-sizing:border-box;cursor:pointer;background:rgba(255,255,255,.06);border:2px solid rgba(255,255,255,.2);padding:12px 13px;display:flex;flex-direction:column;gap:4px;min-height:112px;transition:transform .12s,border-color .12s}',
      '.dt-tile:hover,.dt-tile:focus-visible{transform:translate(-2px,-2px);border-color:var(--dt-gold)}',
      '.dt-tile i{font:700 .56rem Lato,sans-serif;font-style:normal;letter-spacing:.14em;text-transform:uppercase;color:#a9c1de}',
      '.dt-tile b{font:900 1.05rem Lato,sans-serif;letter-spacing:-.02em;color:#fff}',
      '.dt-tile span{font-size:.64rem;line-height:1.35;color:#cfdcec}',
      '.dt-tile em{margin-top:auto;font:700 .62rem Lato,sans-serif;font-style:normal;letter-spacing:.08em;text-transform:uppercase;color:var(--dt-gold)}',
      '.dt-tile.done{border-color:var(--dt-gold);background:rgba(244,205,79,.12)}',
      '.dt-tile.done em{color:var(--dt-navy);background:var(--dt-gold);align-self:flex-start;padding:2px 7px}',
      '@media(max-width:1080px){.dt-card{grid-template-columns:1fr}}',
      '@media(max-width:620px){.dt-tiles{grid-template-columns:1fr 1fr}.dt-card{padding:16px}}',
      /* overlay */
      '.dt-ov{position:fixed;inset:0;z-index:9000;background:rgba(10,15,40,.72);display:flex;align-items:flex-start;justify-content:center;overflow:auto;padding:4vh 14px}',
      '.dt-box{background:var(--dt-bg);color:var(--dt-ink);width:min(760px,100%);border:2px solid var(--dt-ink);box-shadow:8px 8px 0 var(--dt-gold);font:1rem/1.5 Lato,sans-serif;position:relative}',
      'html[data-theme="dark"] .dt-box{border-color:#333e78}',
      '.dt-head{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 18px;background:var(--dt-navy);color:#fff}',
      '.dt-head b{font:900 1.05rem Lato,sans-serif;letter-spacing:-.02em}',
      '.dt-head b span{color:var(--dt-gold)}',
      '.dt-x{all:unset;cursor:pointer;font:700 .66rem Lato,sans-serif;letter-spacing:.1em;text-transform:uppercase;border:1px solid #fff;padding:5px 10px}',
      '.dt-x:hover{background:#fff;color:var(--dt-navy)}',
      '.dt-body{padding:20px 22px 24px}',
      '.dt-body h3{font:900 1.35rem/1.15 Lato,sans-serif;letter-spacing:-.03em;margin:0 0 8px}',
      '.dt-body p{margin:0 0 12px;font-size:.84rem;color:var(--dt-mut)}',
      '.dt-btn{all:unset;box-sizing:border-box;cursor:pointer;background:var(--dt-navy);color:#fff;font:700 .7rem Lato,sans-serif;letter-spacing:.08em;text-transform:uppercase;padding:11px 16px;border:2px solid var(--dt-navy);text-align:center}',
      'html[data-theme="dark"] .dt-btn{border-color:var(--dt-gold)}',
      '.dt-btn:hover{background:var(--dt-blue);border-color:var(--dt-blue)}',
      '.dt-btn.lime{background:var(--dt-gold);color:var(--dt-navy);border-color:var(--dt-navy)}',
      '.dt-btn.ghost{background:none;color:var(--dt-ink);border-color:var(--dt-line)}',
      '.dt-btn[disabled]{opacity:.4;cursor:default;pointer-events:none}',
      '.dt-row{display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-top:14px}',
      '.dt-step{font:700 .6rem Lato,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:var(--dt-blue);margin-bottom:6px}',
      'html[data-theme="dark"] .dt-step{color:#a9c1de}',
      /* deep cut */
      '.dt-timer{height:8px;background:var(--dt-sky);margin:4px 0 16px;overflow:hidden}',
      '.dt-timer i{display:block;height:100%;background:var(--dt-blue);transition:width .2s linear}',
      '.dt-timer.low i{background:var(--dt-coral)}',
      '.dt-in{width:100%;box-sizing:border-box;font:700 1.1rem Lato,sans-serif;padding:12px 14px;border:2px solid var(--dt-ink);background:var(--dt-panel);color:var(--dt-ink)}',
      '.dt-msg{min-height:1.4em;font-size:.8rem;margin-top:8px;color:var(--dt-coral);font-weight:700}',
      '.dt-dym{display:flex;flex-wrap:wrap;gap:8px;align-items:center;padding:10px 12px;background:var(--dt-sky);border:1px solid var(--dt-line);border-left:4px solid var(--dt-gold);color:var(--dt-ink);font-weight:700}',
      '.dt-dym span{font-size:.8rem}',
      '.dt-dym-b{all:unset;cursor:pointer;background:var(--dt-gold);color:#16244d;font:900 .78rem Lato,sans-serif;padding:6px 12px;border:2px solid var(--dt-navy);transition:transform .15s}',
      '.dt-dym-b:hover,.dt-dym-b:focus-visible{transform:translate(-1px,-1px);box-shadow:2px 2px 0 var(--dt-navy)}',
      '.dt-dym-no{all:unset;cursor:pointer;font:700 .66rem Lato,sans-serif;letter-spacing:.06em;text-transform:uppercase;color:var(--dt-mut);text-decoration:underline;margin-left:auto}',
      '.dt-tier{display:inline-block;font:900 .7rem Lato,sans-serif;letter-spacing:.08em;text-transform:uppercase;padding:3px 8px;background:var(--dt-gold);color:var(--dt-navy)}',
      '.dt-tier.t0{background:var(--dt-miss);color:#fff}',
      '.dt-res{border-top:1px solid var(--dt-line);padding:10px 0;font-size:.82rem}',
      '.dt-res small{display:block;color:var(--dt-mut);font-size:.72rem;margin-top:3px}',
      '.dt-big{font:900 2.4rem/1 Lato,sans-serif;letter-spacing:-.05em;margin:4px 0 10px}',
      '.dt-scale{display:flex;flex-wrap:wrap;gap:6px;margin:6px 0 14px}',
      '.dt-scale span{font-size:.66rem;border:1px solid var(--dt-line);padding:3px 7px;color:var(--dt-mut)}',
      '.dt-box.dt-wide{width:min(900px,100%)}',
      '.dt-body.dt-deepbody{padding:0}',
      '.dt-deepwrap{display:grid;grid-template-columns:clamp(124px,34%,280px) 1fr;align-items:stretch}',
      '.dt-deepmain{padding:20px 22px 24px;min-width:0}',
      '.dt-dive{background:#050a1a;display:flex;flex-direction:column;border-right:3px solid var(--dt-navy)}',
      '.dt-dive canvas{display:block;width:100%;height:auto;image-rendering:pixelated;image-rendering:crisp-edges}',
      '.dt-dcap{padding:10px 12px 12px;color:#fff;font:700 .66rem/1.35 ui-monospace,Consolas,monospace;letter-spacing:.03em;flex:1}',
      '.dt-dcap b{display:block;font-size:1.35rem;line-height:1.1;color:var(--dt-gold);letter-spacing:-.01em;margin-bottom:4px;font-variant-numeric:tabular-nums}',
      '.dt-dcap span{display:block;color:#cfdcec}',
      '@media(max-width:560px){.dt-deepwrap{grid-template-columns:40% 1fr}.dt-deepmain{padding:14px 12px 18px}.dt-dcap b{font-size:1rem}.dt-deepmain h3{font-size:1.05rem}}',
      /* mcq */
      '.dt-src{background:var(--dt-panel);border:1px solid var(--dt-line);border-left:4px solid var(--dt-blue);padding:12px 14px;font-size:.84rem;margin-bottom:12px;max-height:280px;overflow:auto}',
      '.dt-src .dt-sl{display:block;margin-top:8px;font-size:.72rem;color:var(--dt-mut);font-style:italic}',
      '.dt-q{font-weight:700;font-size:.92rem;margin-bottom:10px}',
      '.dt-opts{display:flex;flex-direction:column;gap:8px}',
      '.dt-opt{all:unset;box-sizing:border-box;cursor:pointer;border:2px solid var(--dt-line);background:var(--dt-panel);padding:10px 12px;font-size:.84rem;display:flex;gap:10px}',
      '.dt-opt b{min-width:1.2em}',
      '.dt-opt:hover{border-color:var(--dt-blue)}',
      '.dt-opt.sel{border-color:var(--dt-blue);background:var(--dt-sky)}',
      '.dt-opt.right{border-color:var(--dt-good);background:rgba(26,104,37,.12)}',
      '.dt-opt.wrong{border-color:var(--dt-coral);background:rgba(226,112,63,.14)}',
      '.dt-opts.gated .dt-opt{opacity:.45;pointer-events:none}',
      '.dt-gate{font-size:.74rem;color:var(--dt-mut);margin:8px 0;font-weight:700}',
      '.dt-conf{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px;align-items:center;font-size:.74rem;color:var(--dt-mut)}',
      '.dt-conf button{all:unset;cursor:pointer;border:1px solid var(--dt-line);padding:6px 11px;font:700 .66rem Lato,sans-serif;letter-spacing:.06em;text-transform:uppercase;color:var(--dt-ink)}',
      '.dt-conf button.on{background:var(--dt-ink);color:var(--dt-bg);border-color:var(--dt-ink)}',
      '.dt-fb{margin-top:14px;padding:12px 14px;border:1px solid var(--dt-line);background:var(--dt-panel);font-size:.82rem}',
      '.dt-fb b.ok{color:var(--dt-good)}.dt-fb b.no{color:var(--dt-coral)}',
      /* four links */
      '.dt-solved{display:flex;flex-direction:column;gap:8px;margin-bottom:8px}',
      '.dt-sg{padding:10px 12px;text-align:center;color:var(--dt-navy)}',
      '.dt-sg b{display:block;font:900 .8rem Lato,sans-serif;letter-spacing:.06em;text-transform:uppercase}',
      '.dt-sg span{font-size:.78rem}',
      '.dt-lv1{background:var(--dt-gold)}.dt-lv2{background:#a9c1de}.dt-lv3{background:#f0b08f}.dt-lv4{background:#a8d5b0}',
      '.dt-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}',
      '.dt-w{all:unset;box-sizing:border-box;cursor:pointer;background:var(--dt-sky);color:var(--dt-ink);min-height:64px;padding:6px;display:flex;align-items:center;justify-content:center;text-align:center;font:900 .74rem/1.15 Lato,sans-serif;text-transform:uppercase;letter-spacing:.02em;word-break:break-word;border:2px solid transparent}',
      '.dt-w:hover{border-color:var(--dt-blue)}',
      '.dt-w.sel{background:var(--dt-navy);color:#fff}',
      'html[data-theme="dark"] .dt-w.sel{background:var(--dt-gold);color:var(--dt-navy)}',
      '.dt-dots{display:flex;gap:6px;align-items:center;font-size:.74rem;color:var(--dt-mut)}',
      '.dt-dots i{width:11px;height:11px;border-radius:50%;background:var(--dt-ink);display:inline-block}',
      '.dt-dots i.off{background:var(--dt-line)}',
      '.dt-shake{animation:dtShake .35s}',
      '@keyframes dtShake{25%{transform:translateX(-6px)}75%{transform:translateX(6px)}}',
      '@media(max-width:520px){.dt-w{font-size:.6rem;min-height:56px}}',
      /* word */
      '.dt-wgrid{display:flex;flex-direction:column;gap:6px;align-items:center;margin:8px 0 14px}',
      '.dt-wrow{display:flex;gap:6px}',
      '.dt-cell{width:46px;height:46px;border:2px solid var(--dt-line);display:flex;align-items:center;justify-content:center;font:900 1.2rem Lato,sans-serif;text-transform:uppercase;background:var(--dt-panel)}',
      '.dt-cell.f{border-color:var(--dt-ink)}',
      '.dt-cell.g{background:var(--dt-good);border-color:var(--dt-good);color:#fff}',
      '.dt-cell.y{background:var(--dt-near);border-color:var(--dt-near);color:#fff}',
      '.dt-cell.x{background:var(--dt-miss);border-color:var(--dt-miss);color:#fff}',
      '@media(max-width:520px){.dt-cell{width:36px;height:40px;font-size:1rem}}',
      '.dt-kb{display:flex;flex-direction:column;gap:6px;align-items:center}',
      '.dt-kr{display:flex;gap:5px}',
      '.dt-k{all:unset;cursor:pointer;min-width:30px;height:44px;padding:0 6px;box-sizing:border-box;display:flex;align-items:center;justify-content:center;background:var(--dt-sky);font:900 .78rem Lato,sans-serif;color:var(--dt-ink)}',
      '.dt-k.wide{min-width:56px;font-size:.6rem;letter-spacing:.06em}',
      '.dt-k.g{background:var(--dt-good);color:#fff}.dt-k.y{background:var(--dt-near);color:#fff}.dt-k.x{background:var(--dt-miss);color:#fff}',
      '@media(max-width:520px){.dt-body{padding:16px 12px 20px}.dt-ov{padding:2vh 8px}.dt-kr{gap:4px}}',
      '@media(max-width:420px){.dt-k{min-width:26px;padding:0 3px}.dt-k.wide{min-width:46px}}',
      '.dt-clue{text-align:center;font-size:.8rem;color:var(--dt-mut);margin-bottom:4px}',
      '.dt-clue b{color:var(--dt-ink)}',
      /* soft motion: every nudge is short and small */
      '@keyframes dtPop{0%{transform:scale(1)}45%{transform:scale(1.12)}100%{transform:scale(1)}}',
      '@keyframes dtTap{0%{transform:scale(1)}40%{transform:scale(.94)}100%{transform:scale(1)}}',
      '@keyframes dtFlip{0%{transform:rotateX(0)}50%{transform:rotateX(90deg)}100%{transform:rotateX(0)}}',
      '@keyframes dtBounce{0%,100%{transform:translateY(0)}35%{transform:translateY(-12px)}65%{transform:translateY(2px)}}',
      '@keyframes dtHop{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}',
      '@keyframes dtGone{to{opacity:0;transform:scale(.85)}}',
      '@keyframes dtFade{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}',
      '@keyframes dtRise{from{opacity:0;transform:translateY(14px) scale(.97)}to{opacity:1;transform:none}}',
      '@keyframes dtDrop{0%{transform:scale(1.5);background:var(--dt-coral)}100%{transform:scale(1)}}',
      '@keyframes dtGlow{0%{box-shadow:0 0 0 0 rgba(26,104,37,.45)}100%{box-shadow:0 0 0 12px rgba(26,104,37,0)}}',
      '@keyframes dtOv{from{opacity:0}to{opacity:1}}',
      '.dt-pop{animation:dtPop .14s ease-out}',
      '.dt-tap{animation:dtTap .16s ease-out}',
      '.dt-press{animation:dtTap .12s ease-out}',
      '.dt-flip{animation:dtFlip .3s ease-in-out}',
      '.dt-bounce{animation:dtBounce .5s ease-out both}',
      '.dt-hop{animation:dtHop .32s ease-in-out both}',
      '.dt-gone{animation:dtGone .26s ease-in forwards}',
      '.dt-fade{animation:dtFade .25s ease-out both}',
      '.dt-rise{animation:dtRise .38s cubic-bezier(.2,.8,.3,1) both}',
      '.dt-drop{animation:dtDrop .45s ease-out}',
      '.dt-glow{animation:dtGlow .7s ease-out}',
      '.dt-ov{animation:dtOv .18s ease-out}',
      '.dt-ov .dt-box{animation:dtRise .3s cubic-bezier(.2,.8,.3,1)}',
      '.dt-w,.dt-opt,.dt-conf button,.dt-k,.dt-cell{transition:background-color .15s,border-color .15s,color .15s,transform .15s}',
      '.dt-w.sel{transform:translateY(-1px)}',
      '@keyframes dtPulse{from{opacity:1}to{opacity:.55}}',
      '.dt-timer.low i{animation:dtPulse .5s ease-in-out infinite alternate}',
      '@media(prefers-reduced-motion:reduce){.dt-ov,.dt-ov *{animation:none!important;transition:none!important}}'
    ].join('\n');
    document.head.appendChild(s);
  }

  /* ---------- today's set ---------- */
  var TODAY = todayKey(), DAY = dayNum(TODAY);
  function deepToday() { return pick(D.deep.length, D.deepPerDay || 4, 'deep', DAY).map(function (i) { return D.deep[i]; }); }
  function groupsToday() { return D.groups[pick(D.groups.length, 1, 'groups', DAY)[0]]; }
  function wordToday() { return D.words[pick(D.words.length, 1, 'word', DAY)[0]]; }

  /* ---------- home card ---------- */
  var root, ov, box, keyHandler = null;
  var GAMES = [
    { id: 'deep', n: '1', name: 'Deep Cut', desc: 'Type an answer in 25 seconds. Rarer answers score more.' },
    { id: 'mcq', n: '2', name: 'Two MCQs', desc: 'Two stimulus questions from Units ' + D.units[0] + '–' + D.units[D.units.length - 1] + '.' },
    { id: 'groups', n: '3', name: 'Four Links', desc: 'Sort 16 terms into four hidden groups.' },
    { id: 'word', n: '4', name: 'Tivin Word', desc: 'Guess the AP World word in six tries.' }
  ];
  function status(id, d) {
    var p = d[id]; if (!p || !p.done) return p && p.started ? 'Resume' : 'Play';
    if (id === 'deep') return p.score + ' pts';
    if (id === 'mcq') return p.res.filter(function (r) { return r.ok; }).length + ' of 2 right';
    if (id === 'groups') return p.won ? 'Solved, ' + p.mistakes + ' miss' + (p.mistakes === 1 ? '' : 'es') : 'Out of tries';
    if (id === 'word') return p.won ? 'Got it in ' + p.guesses.length : 'Missed';
    return 'Done';
  }
  function renderCard() {
    if (!root) return;
    var d = getDay(TODAY), done = GAMES.filter(function (g) { return d[g.id] && d[g.id].done; }).length, st = streak();
    var date = new Date(DAY * 864e5).toLocaleDateString('en-US', { timeZone: 'UTC', weekday: 'long', month: 'long', day: 'numeric' });
    root.innerHTML = '';
    var card = el('div', 'dt-card');
    var left = el('div', '', '<div class="dt-eyebrow">' + esc(date) + '</div><h2>Daily <b>Tivin</b></h2>' +
      '<p class="dt-sub">Four quick challenges, the same for the whole class. A new set every morning.</p>');
    var meta = el('div', 'dt-meta');
    meta.appendChild(el('span', 'dt-pill' + (done === 4 ? ' on' : ''), done + ' of 4 done'));
    meta.appendChild(el('span', 'dt-pill', 'Streak: ' + st + ' day' + (st === 1 ? '' : 's')));
    if (done === 4) { var cp = el('button', 'dt-copy', 'Copy my results'); cp.type = 'button'; cp.onclick = function () { copyResults(cp); }; meta.appendChild(cp); }
    left.appendChild(meta); card.appendChild(left);
    var tiles = el('div', 'dt-tiles');
    GAMES.forEach(function (g) {
      var p = d[g.id], t = el('button', 'dt-tile' + (p && p.done ? ' done' : ''));
      t.type = 'button';
      t.innerHTML = '<i>' + g.n + ' of 4</i><b>' + g.name + '</b><span>' + esc(g.desc) + '</span><em>' + esc(status(g.id, d)) + '</em>';
      t.onclick = function () { open(g.id); };
      tiles.appendChild(t);
    });
    card.appendChild(tiles); root.appendChild(card);
  }
  function copyResults(btn) {
    var d = getDay(TODAY), lines = ['Daily Tivin ' + TODAY];
    lines.push('Deep Cut: ' + d.deep.score + ' pts');
    lines.push('MCQs: ' + d.mcq.res.map(function (r) { return r.ok ? 'right' : 'wrong'; }).join(', '));
    lines.push('Four Links: ' + (d.groups.won ? 'solved with ' + d.groups.mistakes + ' mistakes' : 'not solved'));
    lines.push('Tivin Word: ' + (d.word.won ? d.word.guesses.length + '/' + WORD_TRIES : 'X/' + WORD_TRIES));
    lines.push('tivinteaches.com');
    var txt = lines.join('\n');
    try { navigator.clipboard.writeText(txt).then(function () { btn.textContent = 'Copied'; }, function () { btn.textContent = 'Could not copy'; }); } catch (e) { btn.textContent = 'Could not copy'; }
  }

  /* ---------- overlay ---------- */
  function open(id) {
    close();
    ov = el('div', 'dt-ov'); ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-modal', 'true');
    box = el('div', 'dt-box' + (id === 'deep' ? ' dt-wide' : ''));
    var g = GAMES.filter(function (x) { return x.id === id; })[0];
    var head = el('div', 'dt-head', '<b>Daily <span>Tivin</span> &middot; ' + g.name + '</b>');
    var x = el('button', 'dt-x', 'Close'); x.type = 'button'; x.onclick = close; head.appendChild(x);
    var body = el('div', 'dt-body');
    box.appendChild(head); box.appendChild(body); ov.appendChild(box);
    ov.addEventListener('mousedown', function (e) { if (e.target === ov) close(); });
    document.body.appendChild(ov);
    document.addEventListener('keydown', escKey);
    ({ deep: playDeep, mcq: playMcq, groups: playGroups, word: playWord })[id](body);
  }
  function escKey(e) { if (e.key === 'Escape') close(); }
  var timers = [];
  function later(fn, ms) { var t = setTimeout(fn, ms); timers.push(t); return t; }
  function every(fn, ms) { var t = setInterval(fn, ms); timers.push(t); return t; }
  function stopTimers() { timers.forEach(function (t) { clearTimeout(t); clearInterval(t); }); timers = []; }
  function close() {
    stopTimers();
    cleanups.forEach(function (f) { try { f(); } catch (e) {} }); cleanups = [];
    if (keyHandler) { document.removeEventListener('keydown', keyHandler); keyHandler = null; }
    document.removeEventListener('keydown', escKey);
    if (ov && ov.parentNode) ov.parentNode.removeChild(ov);
    ov = null; renderCard();
  }
  function doneRow(body, label) {
    var r = el('div', 'dt-row');
    var b = el('button', 'dt-btn lime', label || 'Back to the Daily Tivin'); b.type = 'button'; b.onclick = close; r.appendChild(b);
    body.appendChild(r);
  }

  /* ---------- 8-bit dive scene for Deep Cut ----------
     A tall, narrow pixel ocean (W x H, scaled up with pixelated rendering) over a
     deep world: a dhow on the surface, the Swahili Coast reef, jellyfish, Ming
     porcelain, a junk's anchor and wreck, the midnight zone, and a Manila galleon
     with Potosi silver on the sea floor. The diver sinks in proportion to the score
     (max = prompts x 100 = the floor); a ruler on the left marks every 500 m.
     Static scenery is drawn once to an offscreen canvas; animated parts each frame. */
  var cleanups = [];
  var FONT = { '0': '111101101101111', '1': '010110010010111', '2': '111001111100111', '3': '111001111001111', '4': '101101111001001', '5': '111100111001111', '6': '111100111101111', '7': '111001001001001', '8': '111101111101111', '9': '111101111001111', '+': '000010111010000', 'M': '101111111101101' };
  function makeDive(maxScore) {
    var W = 112, H = 192, SURF = 40, TOP = 54, BOTTOM = 878, FLOOR = 896, WORLD = 912, MAXM = maxScore * 10;
    var reduce = false; try { reduce = matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
    var wrap = el('div', 'dt-dive');
    var cv = document.createElement('canvas'); cv.width = W; cv.height = H; cv.setAttribute('aria-hidden', 'true');
    var cap = el('div', 'dt-dcap', '<b></b><span></span>');
    wrap.appendChild(cv); wrap.appendChild(cap);
    var c = cv.getContext('2d');
    var ZONES = [
      [0, 'On deck: a dhow riding the monsoon winds'],
      [TOP, 'Sunlit shallows of the Indian Ocean'],
      [150, 'Coral reef off the Swahili Coast'],
      [280, 'Jellyfish drifting in the twilight'],
      [360, 'Blue-and-white Ming porcelain from a lost trade ship'],
      [470, 'The iron anchor of a Chinese junk'],
      [575, 'Wreck of a junk that sailed the Indian Ocean'],
      [690, 'The midnight zone: only glowing fish down here'],
      [815, 'Wreck of a Manila galleon on the sea floor'],
      [866, 'Spanish silver from Potosí, bound for China']
    ];
    function yFor(s) { return TOP + Math.min(1, s / maxScore) * (BOTTOM - TOP); }
    function mFor(y) { return Math.max(0, Math.round((y - TOP) / (BOTTOM - TOP) * MAXM / 10) * 10); }
    function P(ctx, x, y, w, h, col) { ctx.fillStyle = col; ctx.fillRect(Math.round(x), Math.round(y), w, h); }
    function text(ctx, s, x, y, col) { String(s).split('').forEach(function (ch, i) { var g = FONT[ch]; if (!g) return; for (var k = 0; k < 15; k++) if (g[k] === '1') P(ctx, x + i * 4 + (k % 3), y + Math.floor(k / 3), 1, 1, col); }); }
    function ease(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
    var STOPS = [[0, [122, 163, 230]], [0.12, [74, 120, 208]], [0.3, [47, 86, 179]], [0.5, [29, 58, 130]], [0.68, [19, 34, 77]], [0.84, [10, 19, 48]], [1, [5, 10, 26]]];
    function waterRGB(f) {
      for (var i = 1; i < STOPS.length; i++) if (f <= STOPS[i][0]) {
        var a = STOPS[i - 1], b = STOPS[i], t = (f - a[0]) / (b[0] - a[0]);
        return 'rgb(' + [0, 1, 2].map(function (k) { return Math.round(a[1][k] + (b[1][k] - a[1][k]) * t); }).join(',') + ')';
      }
      return 'rgb(5,10,26)';
    }

    /* ----- static scenery, drawn once ----- */
    var bg = document.createElement('canvas'); bg.width = W; bg.height = WORLD;
    var b = bg.getContext('2d'), R = rng(hash('dive-walls'));
    // sky
    for (var y = 0; y < SURF; y++) P(b, 0, y, W, 1, y < 14 ? '#cfe0f7' : y < 28 ? '#dde9fa' : '#eaf2fc');
    P(b, 86, 8, 10, 10, '#f4cd4f'); P(b, 84, 10, 14, 6, '#f4cd4f'); P(b, 88, 6, 6, 14, '#f4cd4f'); P(b, 88, 9, 3, 3, '#fbe39a');
    // water: 26 stepped bands with a dithered seam between each
    var BANDS = 26, span = (FLOOR - SURF) / BANDS;
    for (y = SURF; y < FLOOR; y++) {
      var k = Math.floor((y - SURF) / span), off = (y - SURF) - k * span;
      var col = waterRGB(k / (BANDS - 1)), prev = waterRGB(Math.max(0, k - 1) / (BANDS - 1));
      if (k > 0 && off < 2) for (var x = 0; x < W; x++) P(b, x, y, 1, 1, (x + y) % 2 ? col : prev);
      else P(b, 0, y, W, 1, col);
    }
    // canyon walls that close in as you go deeper
    var lw = 0, rw = 0;
    for (y = 230; y < FLOOR; y += 4) {
      var depthF = (y - 230) / (FLOOR - 230);
      lw = Math.max(0, Math.min(26, lw + Math.round((R() - 0.45) * 4) + (depthF > 0.4 ? 1 : 0)));
      rw = Math.max(0, Math.min(22, rw + Math.round((R() - 0.48) * 4) + (depthF > 0.5 ? 1 : 0)));
      var wc = depthF < 0.5 ? '#1d2747' : '#121933', edge = depthF < 0.5 ? '#2b3762' : '#1b2446';
      if (lw) { P(b, 0, y, lw, 4, wc); P(b, lw - 1, y, 1, 4, edge); }
      if (rw) { P(b, W - rw, y, rw, 4, wc); P(b, W - rw, y, 1, 4, edge); }
    }
    // reef (Swahili Coast): rock shelf with coral
    P(b, 0, 196, 50, 16, '#2b3150'); P(b, 0, 190, 34, 6, '#2b3150'); P(b, 0, 186, 18, 4, '#2b3150'); P(b, 0, 190, 34, 1, '#3d4570');
    [[4, 14, '#e2703f'], [10, 18, '#f4cd4f'], [17, 12, '#f08aa0'], [24, 16, '#e2703f'], [31, 9, '#f4cd4f'], [39, 11, '#f08aa0'], [45, 7, '#e2703f']].forEach(function (q) {
      var base = q[0] < 18 ? 186 : q[0] < 34 ? 190 : 196, top = base - q[1];
      P(b, q[0], top, 2, q[1], q[2]); P(b, q[0] - 3, top + 3, 3, 1, q[2]); P(b, q[0] - 3, top + 1, 1, 2, q[2]);
      P(b, q[0] + 2, top + 6, 3, 1, q[2]); P(b, q[0] + 4, top + 4, 1, 2, q[2]); P(b, q[0], top, 2, 1, '#ffffff33');
    });
    P(b, 70, 214, 42, 10, '#2b3150'); P(b, 80, 210, 32, 4, '#2b3150');
    // Ming porcelain on a ledge
    P(b, 58, 402, 54, 8, '#262d4d'); P(b, 66, 398, 46, 4, '#262d4d'); P(b, 66, 398, 46, 1, '#36406a');
    var jx = 80;
    P(b, jx + 3, 382, 5, 2, '#e8eef9'); P(b, jx + 1, 384, 9, 2, '#e8eef9'); P(b, jx, 386, 11, 9, '#e8eef9'); P(b, jx + 2, 395, 7, 3, '#e8eef9');
    P(b, jx, 388, 11, 2, '#2f56b3'); P(b, jx + 2, 391, 2, 2, '#2f56b3'); P(b, jx + 7, 391, 2, 2, '#2f56b3'); P(b, jx + 4, 393, 3, 1, '#2f56b3'); P(b, jx + 3, 384, 5, 1, '#2f56b3');
    P(b, jx + 1, 386, 1, 6, '#ffffff'); // glint
    P(b, 96, 393, 10, 4, '#e8eef9'); P(b, 97, 397, 8, 1, '#e8eef9'); P(b, 98, 394, 6, 1, '#2f56b3');
    P(b, 70, 396, 6, 2, '#d4dceb'); P(b, 72, 394, 3, 2, '#d4dceb'); // a broken shard
    // junk anchor on the left wall
    P(b, 0, 514, 44, 8, '#232a48'); P(b, 0, 514, 44, 1, '#36406a');
    var ax = 24;
    P(b, ax, 490, 3, 22, '#6a6f84'); P(b, ax - 6, 493, 15, 2, '#6a6f84'); P(b, ax - 1, 485, 5, 2, '#6a6f84'); P(b, ax - 1, 487, 1, 3, '#6a6f84'); P(b, ax + 3, 487, 1, 3, '#6a6f84');
    P(b, ax - 9, 510, 21, 3, '#6a6f84'); P(b, ax - 9, 506, 3, 4, '#6a6f84'); P(b, ax + 9, 506, 3, 4, '#6a6f84'); P(b, ax - 10, 505, 2, 1, '#6a6f84'); P(b, ax + 11, 505, 2, 1, '#6a6f84');
    for (var r2 = 0; r2 < 26; r2++) P(b, ax + 2 + Math.round(r2 * 0.9), 484 - r2 * 2 - (r2 % 2), 2, 2, r2 % 2 ? '#585d72' : '#4a4f63'); // chain
    P(b, ax + 1, 500, 1, 6, '#8a6a3a'); // rust streak
    // junk wreck on the right
    P(b, 44, 636, 68, 10, '#1d2442'); P(b, 52, 632, 60, 4, '#1d2442');
    var kx = 54;
    for (var h = 0; h < 9; h++) P(b, kx + h, 628 - h, 52 - h * 2, 1, h % 3 === 0 ? '#5c3a1c' : '#6e4420');
    P(b, kx + 4, 627, 44, 1, '#3e2612');
    P(b, kx + 24, 590, 2, 32, '#4a2f17'); P(b, kx + 25, 588, 1, 2, '#4a2f17');
    for (var s = 0; s < 7; s++) { P(b, kx + 12 + s, 592 + s * 4, 12 - s, 3, '#9a4a35'); P(b, kx + 12 + s, 595 + s * 4, 12 - s, 1, '#5e2a1e'); }
    P(b, kx + 15, 600, 3, 4, '#0d1226'); P(b, kx + 19, 612, 2, 3, '#0d1226'); // torn holes
    P(b, kx + 34, 622, 3, 3, '#0d1226'); P(b, kx + 40, 620, 2, 2, '#0d1226'); // portholes
    // sea floor: sand, galleon, silver
    P(b, 0, FLOOR, W, WORLD - FLOOR, '#6d5c3c'); P(b, 0, FLOOR, W, 2, '#8a7650');
    for (x = 0; x < W; x += 3) if (R() < 0.5) P(b, x, FLOOR + 3 + Math.floor(R() * 10), 1, 1, '#9c8760');
    var gx = 40;
    P(b, gx, 880, 66, 16, '#4e3218'); P(b, gx + 4, 876, 58, 4, '#5c3a1c'); P(b, gx + 52, 870, 14, 6, '#5c3a1c'); P(b, gx + 54, 866, 10, 4, '#6e4420');
    P(b, gx + 2, 880, 62, 1, '#6e4420'); P(b, gx + 2, 887, 62, 1, '#3e2612');
    for (var pp = 0; pp < 5; pp++) P(b, gx + 8 + pp * 11, 883, 3, 2, '#0d1226');
    P(b, gx + 20, 836, 2, 40, '#3e2612'); P(b, gx + 21, 832, 1, 4, '#3e2612'); P(b, gx + 40, 852, 2, 24, '#3e2612'); P(b, gx + 34, 850, 14, 1, '#3e2612');
    P(b, gx + 10, 842, 10, 8, '#b9b19a'); P(b, gx + 22, 842, 8, 7, '#b9b19a'); P(b, gx + 12, 850, 8, 3, '#a39b84'); P(b, gx + 24, 844, 3, 1, '#8a3a2a'); P(b, gx + 25, 843, 1, 3, '#8a3a2a');
    var cx0 = 8; // treasure chest of silver
    P(b, cx0, 886, 18, 10, '#6e4420'); P(b, cx0, 883, 18, 3, '#8a5a2b'); P(b, cx0, 889, 18, 1, '#4a2f17'); P(b, cx0 + 8, 888, 3, 3, '#f4cd4f');
    P(b, cx0 + 2, 879, 14, 4, '#c9cfdb'); P(b, cx0 + 4, 877, 10, 2, '#e3e7ef'); P(b, cx0 + 6, 876, 5, 1, '#ffffff');
    [[2, 893], [27, 894], [31, 892], [36, 895]].forEach(function (q) { P(b, q[0], q[1], 2, 1, '#d9dee8'); });
    // depth ruler on the left edge
    for (var m = 0; m <= MAXM; m += 250) {
      var ty = Math.round(yFor(m / 10));
      P(b, 0, ty, m % 1000 === 0 ? 5 : 3, 1, 'rgba(255,255,255,.55)');
      if (m && m < MAXM && m % 1000 === 0) text(b, m + 'M', 7, ty - 2, 'rgba(255,255,255,.6)');
    }

    /* ----- animated pieces ----- */
    var dy = SURF - 16, from = dy, to = dy, t0 = 0, dur = 1, onBoat = true, frame = 0, raf = 0, alive = true, score = 0, pop = null, splash = 0, lastCap = '';
    var bubbles = [], FISHC = ['#f4cd4f', '#e2703f', '#a9c1de', '#e8eef9', '#f08aa0'];
    var fish = [[96, 1], [120, -1], [168, 1], [176, -1], [232, 1], [330, -1], [440, 1], [540, -1], [610, 1]].map(function (f, i) {
      return { x: (i * 37) % W, y: f[0], d: f[1], s: 0.12 + (i % 3) * 0.07, col: FISHC[i % 5], school: i < 4 };
    });
    var jellies = [{ x: 22, y: 286 }, { x: 74, y: 304 }, { x: 46, y: 330 }];
    var snow = []; for (var i = 0; i < 46; i++) snow.push({ x: R() * W, y: 430 + R() * (FLOOR - 430), v: 0.04 + R() * 0.08 });

    function waves(cam) {
      var y = SURF - cam; if (y < -2 || y > H) return;
      for (var x = 0; x < W; x++) {
        var up = Math.sin((x + frame * 0.6) / 5) > 0.55;
        P(c, x, y - (up ? 1 : 0), 1, 1, up ? '#ffffff' : '#a9c1de');
      }
      var cx = (frame * 0.04) % (W + 30) - 30;
      P(c, cx, 10 - cam, 14, 3, '#ffffff'); P(c, cx + 3, 8 - cam, 7, 2, '#ffffff');
      P(c, (cx + 70) % (W + 30) - 30, 22 - cam, 10, 2, '#ffffff');
    }
    function rays(cam) {
      for (var r = 0; r < 4; r++) {
        var a = 0.05 + 0.035 * Math.sin(frame / 40 + r * 1.7);
        c.fillStyle = 'rgba(255,255,255,' + a.toFixed(3) + ')';
        for (var y = SURF; y < SURF + 150; y += 2) {
          var sy = y - cam; if (sy < 0 || sy > H) continue;
          var x = 10 + r * 28 + (y - SURF) * 0.35, w = 3 + (y - SURF) / 30;
          c.fillRect(Math.round(x), sy, Math.round(w), 2);
        }
      }
    }
    function dhow(cam) {
      var y = SURF - cam + Math.round(Math.sin(frame / 25)), x = 38;
      if (y < -26 || y > H + 6) return;
      P(c, x + 16, y - 22, 1, 22, '#4a2f17');
      for (var r = 0; r < 18; r++) P(c, x + 16 - r, y - 21 + r, r + 1 + Math.floor(r / 3), 1, r % 5 === 4 ? '#e4d8b8' : '#f2e8cf');
      P(c, x + 1, y - 22, 26, 1, '#4a2f17');
      P(c, x - 2, y - 2, 38, 1, '#5c3a1c'); P(c, x - 1, y - 1, 36, 2, '#7a4a22'); P(c, x + 2, y + 1, 30, 1, '#7a4a22'); P(c, x + 5, y + 2, 24, 1, '#5c3a1c');
      P(c, x + 33, y - 4, 3, 2, '#5c3a1c'); P(c, x + 17, y - 25, 4, 2, '#e2703f');
      P(c, x + 2, y + 3, 30, 1, 'rgba(255,255,255,.25)'); // reflection
    }
    function weed(cam) {
      for (var s = 0; s < 5; s++) {
        var sx = 78 + s * 6, base = 210 - cam; if (base < -20 || base > H + 20) continue;
        for (var hh = 0; hh < 14 + (s % 2) * 5; hh++) P(c, sx + Math.round(Math.sin(frame / 22 + s + hh / 5) * (hh / 7)), base - hh, 1, 1, hh % 4 ? '#2f7d3a' : '#3f9a4c');
      }
    }
    function jellyfish(cam) {
      jellies.forEach(function (j, n) {
        var pulse = Math.sin(frame / 18 + n * 2), y = j.y + Math.sin(frame / 60 + n) * 4 - cam, x = j.x + Math.sin(frame / 90 + n) * 3;
        if (y < -12 || y > H + 12) return;
        var w = 7 + (pulse > 0 ? 1 : 0);
        P(c, x - w / 2 + 1, y, w - 2, 1, '#f6c3d3'); P(c, x - w / 2, y + 1, w, 2, '#f3a9c0'); P(c, x - w / 2 + 1, y + 1, 1, 1, '#ffffff');
        for (var t = 0; t < 3; t++) for (var l = 0; l < 6; l++) P(c, x - 2 + t * 2 + Math.round(Math.sin(frame / 10 + l + t) * 0.8), y + 3 + l, 1, 1, l % 2 ? 'rgba(243,169,192,.6)' : 'rgba(243,169,192,.9)');
      });
    }
    function angler(cam) {
      var y = 748 - cam, x = 76 + Math.round(Math.sin(frame / 80) * 6); if (y < -20 || y > H + 20) return;
      var g = 0.25 + 0.2 * Math.sin(frame / 12);
      c.fillStyle = 'rgba(244,205,79,' + (g * 0.35).toFixed(3) + ')'; c.fillRect(x - 6, y - 12, 9, 9);
      c.fillStyle = 'rgba(244,205,79,' + (g * 0.6).toFixed(3) + ')'; c.fillRect(x - 4, y - 10, 5, 5);
      P(c, x - 2, y - 8, 1, 1, '#fff6c8');
      P(c, x - 1, y - 7, 1, 2, '#3a4366'); P(c, x, y - 5, 1, 2, '#3a4366');
      P(c, x - 1, y - 3, 12, 8, '#232a48'); P(c, x + 11, y - 1, 3, 4, '#232a48'); P(c, x + 14, y - 2, 2, 6, '#232a48');
      P(c, x + 1, y - 1, 2, 2, '#c9e3ff'); P(c, x - 1, y + 3, 6, 1, '#e8eef9'); P(c, x, y + 2, 1, 1, '#e8eef9'); P(c, x + 3, y + 2, 1, 1, '#e8eef9');
    }
    function drawDiver(cam) {
      var moving = Math.abs(to - dy) > 0.6 && !onBoat, headDown = moving && to > dy;
      var x = 60 + Math.round(Math.sin(frame / 30) * (onBoat ? 0 : 3)), y = Math.round(dy - cam);
      var kick = Math.floor(frame / (moving ? 4 : 14)) % 2;
      var O = '#e2703f', Od = '#b9532a', G = '#d4a72c', Gd = '#a8811b', Wn = '#bfe3ff';
      function D(dx, row, w, hh, col) { P(c, x + dx, headDown ? y + (14 - (row + hh - 1)) : y + row, w, hh, col); }
      D(1, 0, 5, 1, G); D(0, 1, 7, 4, G); D(1, 5, 5, 1, Gd); D(6, 2, 1, 2, Gd);
      D(2, 2, 3, 2, Wn); D(3, 2, 1, 1, '#16244d'); D(2, 2, 1, 1, '#ffffff');
      D(0, 6, 7, 4, O); D(5, 6, 2, 4, Od); D(-1, 7 - kick, 1, 2, O); D(7, 6 + kick, 1, 2, O);
      D(1, 10, 2, 3 + kick, O); D(4, 10, 2, 4 - kick, Od);
      D(0, 13 + kick, 3, 1, '#16244d'); D(4, 14 - kick, 3, 1, '#16244d');
      if (!onBoat && dy > 640) { // helmet lamp
        for (var r = 0; r < 18; r++) {
          c.fillStyle = 'rgba(255,240,180,' + (0.16 - r * 0.008).toFixed(3) + ')';
          if (headDown) c.fillRect(x + 3 - Math.floor(r / 2), y + 15 + r, 1 + r, 1);   // beam ahead, downward
          else c.fillRect(x + 7 + r, y + 3 - Math.floor(r / 2), 1, 1 + r);            // beam forward from the helmet
        }
      }
      var bx = x + (headDown ? 4 : 5), byy = headDown ? dy + 13 : dy + 1;
      if (!onBoat && frame % (moving ? 5 : 26) === 0) bubbles.push({ x: bx, y: byy, life: 0, big: Math.random() < 0.3 });
    }
    function draw() {
      if (!alive) return;
      frame++;
      if (t0) { var kk = Math.min(1, (performance.now() - t0) / dur); dy = from + (to - from) * ease(kk); if (kk >= 1) t0 = 0; }
      var cam = Math.max(0, Math.min(WORLD - H, dy - 84));
      c.drawImage(bg, 0, cam, W, H, 0, 0, W, H);
      waves(cam); rays(cam); weed(cam);
      var dstart = Math.floor(cam);
      fish.forEach(function (f, n) {
        f.x += f.d * f.s; if (f.x > W + 8) f.x = -8; if (f.x < -8) f.x = W + 8;
        var count = f.school ? 3 : 1;
        for (var q = 0; q < count; q++) {
          var fx = f.x - q * 7 * f.d, y = f.y + q * 3 + Math.round(Math.sin(frame / 20 + n + q)) - dstart;
          if (y < -3 || y > H + 3) continue;
          P(c, fx, y, 5, 3, f.col); P(c, fx + (f.d > 0 ? -2 : 5), y + (frame % 24 < 12 ? 0 : 1), 2, 2, f.col);
          P(c, fx + (f.d > 0 ? 3 : 1), y, 1, 1, '#16244d');
        }
      });
      jellyfish(cam); angler(cam);
      snow.forEach(function (p) { p.y += p.v; if (p.y > FLOOR) p.y = 430; var y = p.y - cam; if (y > 0 && y < H) P(c, p.x, y, 1, 1, 'rgba(220,230,255,.45)'); });
      dhow(cam);
      if (splash > 0) { splash--; var sy = SURF - cam, sp = 22 - splash; for (var s2 = -1; s2 <= 1; s2 += 2) { P(c, 63 + s2 * sp, sy - 1 - Math.floor(splash / 6), 2, 1, '#ffffff'); P(c, 63 + s2 * (sp + 3), sy, 1, 1, '#ffffff'); } }
      bubbles = bubbles.filter(function (q) { q.y -= q.big ? 0.45 : 0.32; q.life++; q.x += Math.sin(q.life / 6) * 0.22; return q.y > SURF + 1 && q.life < 220; });
      bubbles.forEach(function (q) { var y = q.y - cam; if (y > -3 && y < H) { if (q.big) { P(c, q.x, y, 2, 2, 'rgba(214,230,255,.85)'); P(c, q.x, y, 1, 1, '#ffffff'); } else P(c, q.x, y, 1, 1, 'rgba(214,230,255,.8)'); } });
      drawDiver(cam);
      var chestY = 878 - cam; // sparkles on the silver
      if (chestY < H + 4) { if (frame % 50 < 25) { P(c, 17, chestY - 6, 1, 3, '#ffffff'); P(c, 16, chestY - 5, 3, 1, '#ffffff'); } if ((frame + 20) % 70 < 20) P(c, 12, chestY - 3, 1, 1, '#ffffff'); }
      if (pop && frame < pop.until) {
        var ry = Math.round(dy - cam) - Math.floor((180 - (pop.until - frame)) / 18);
        text(c, pop.text, 72, ry + 1, '#16244d'); text(c, pop.text, 71, ry, '#f4cd4f');
      }
      caption();
      raf = requestAnimationFrame(draw);
    }
    function caption() {
      var m = onBoat ? 0 : mFor(dy), z = ZONES[0][1];
      ZONES.forEach(function (q) { if (dy >= q[0] - 4) z = q[1]; });
      if (onBoat) z = ZONES[0][1];
      var key = m + '|' + z; if (key === lastCap) return; lastCap = key;
      cap.firstChild.textContent = m.toLocaleString() + ' m';
      cap.lastChild.textContent = z;
    }
    function goTo(y, ms) { from = dy; to = y; if (reduce || !ms) { dy = to; t0 = 0; } else { t0 = performance.now(); dur = ms; } }
    caption(); raf = requestAnimationFrame(draw);
    var api = {
      el: wrap,
      set: function (s) { score = s; onBoat = false; goTo(yFor(s), 0); },
      jump: function () { onBoat = false; splash = 22; goTo(TOP, 800); for (var i = 0; i < 10; i++) bubbles.push({ x: 60 + (i % 5) * 2, y: TOP + 6 + i, life: i * 3, big: i % 3 === 0 }); },
      dive: function (s, pts) { score = s; onBoat = false; goTo(yFor(s), pts ? 1500 + pts * 8 : 600); pop = { text: pts ? '+' + pts : '0', until: frame + 180 }; },
      stop: function () { alive = false; cancelAnimationFrame(raf); }
    };
    cleanups.push(api.stop);
    return api;
  }

  /* ---------- 1. Deep Cut ---------- */
  function playDeep(outer) {
    var prompts = deepToday();
    var st = getDay(TODAY).deep || { res: [], score: 0 };
    function save() { saveDay(TODAY, 'deep', st); }
    var dive = makeDive(prompts.length * 100);
    outer.classList.add('dt-deepbody');
    var grid = el('div', 'dt-deepwrap'), body = el('div', 'dt-deepmain');
    grid.appendChild(dive.el); grid.appendChild(body); outer.appendChild(grid);
    if (st.started) dive.set(st.score || 0);
    function scale() {
      return '<div class="dt-scale">' + [1, 2, 3, 4, 5].map(function (t) { return '<span>' + TIER[t][0] + ' ' + TIER[t][1] + '</span>'; }).join('') + '</div>';
    }
    if (st.done) return summary();
    if (!st.started) {
      body.innerHTML = '<div class="dt-step">' + prompts.length + ' prompts &middot; ' + DEEP_SECS + ' seconds each</div><h3>Go deep, not obvious</h3>' +
        '<p>Type one answer for each prompt. Any correct answer scores, but the answers most people would say score least. Dig for the deep cuts.</p>' + scale() +
        '<p>If an answer is not on the list, try another before the time runs out. Leaving in the middle of a prompt counts it as blank.</p>';
      var r = el('div', 'dt-row'), go = el('button', 'dt-btn lime', 'Start'); go.type = 'button';
      go.onclick = function () { st.started = true; dive.jump(); ask(); }; r.appendChild(go); body.appendChild(r);
      return;
    }
    ask();
    function ask() {
      var i = st.res.length;
      if (i >= prompts.length) { st.done = true; save(); return summary(); }
      var P = prompts[i];
      // a prompt counts as blank unless answered, so leaving mid-prompt cannot be used to peek
      st.res.push({ p: P.p, typed: '', tier: 0, name: '' }); save();
      body.innerHTML = '<div class="dt-step">Prompt ' + (i + 1) + ' of ' + prompts.length + ' &middot; Unit ' + P.u + '</div><h3>' + esc(P.p) + '</h3>';
      var bar = el('div', 'dt-timer', '<i style="width:100%"></i>'); body.appendChild(bar);
      var inp = el('input', 'dt-in'); inp.type = 'text'; inp.autocomplete = 'off'; inp.spellcheck = false; inp.placeholder = 'Type your answer, then press Enter';
      body.appendChild(inp);
      var msg = el('div', 'dt-msg'); body.appendChild(msg);
      var r = el('div', 'dt-row'), sub = el('button', 'dt-btn', 'Submit'), skip = el('button', 'dt-btn ghost', 'Pass');
      sub.type = skip.type = 'button'; r.appendChild(sub); r.appendChild(skip); body.appendChild(r);
      body.appendChild(el('div', '', scale()));
      inp.focus();
      var t0 = Date.now(), over = false;
      var tick = every(function () {
        var left = Math.max(0, DEEP_SECS * 1000 - (Date.now() - t0));
        bar.firstChild.style.width = (left / (DEEP_SECS * 10)) + '%';
        bar.classList.toggle('low', left < 6000);
        if (left <= 0) finish(null, '');
      }, 100);
      function finish(row, typed) {
        if (over) return; over = true; clearInterval(tick);
        var res = st.res[i]; res.typed = typed; res.tier = row ? row[0] : 0; res.name = row ? row[1] : '';
        st.score = st.res.reduce(function (s, x) { return s + (x.tier ? TIER[x.tier][1] : 0); }, 0);
        if (st.res.length >= prompts.length) st.done = true;
        save(); dive.dive(st.score, res.tier ? TIER[res.tier][1] : 0); reveal(P, res, i);
      }
      function trySubmit() {
        if (over) return;
        var v = inp.value.trim(); if (!v) return;
        var m = matchAnswer(P, v);
        if (m) return finish(m, v);
        var near = suggest(P, v);
        msg.innerHTML = ''; inp.value = ''; inp.focus();
        if (!near.length) { msg.textContent = '“' + v + '” is not on the list. Try another.'; anim(msg, 'dt-fade'); anim(inp, 'dt-shake'); return; }
        // close but not exact: the student picks the answer they meant, or keeps typing (the clock keeps running)
        var box = el('div', 'dt-dym dt-fade', '<span>Did you mean</span>');
        near.forEach(function (row) {
          var b = el('button', 'dt-dym-b', esc(row[1]) + '?'); b.type = 'button';
          b.onclick = function () { finish(row, v); };
          box.appendChild(b);
        });
        var no = el('button', 'dt-dym-no', 'No, try another'); no.type = 'button';
        no.onclick = function () { msg.innerHTML = ''; inp.focus(); };
        box.appendChild(no);
        msg.appendChild(box);
      }
      inp.addEventListener('input', function () { if (msg.querySelector('.dt-dym')) msg.innerHTML = ''; });
      sub.onclick = trySubmit; skip.onclick = function () { finish(null, ''); };
      inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); trySubmit(); } });
    }
    function reveal(P, res, i) {
      var deep = P.a.filter(function (a) { return a[0] >= 4; }).map(function (a) { return a[1]; });
      var common = P.a.filter(function (a) { return a[0] <= 2; }).map(function (a) { return a[1]; });
      body.innerHTML = '<div class="dt-step">Prompt ' + (i + 1) + ' of ' + prompts.length + '</div><h3>' + esc(P.p) + '</h3>' +
        (res.tier ? '<p class="dt-rise"><span class="dt-tier dt-pop">' + TIER[res.tier][0] + ' &middot; +' + TIER[res.tier][1] + '</span> &nbsp;<b>' + esc(res.name) + '</b></p>'
                  : '<p class="dt-fade"><span class="dt-tier t0">No answer &middot; 0</span></p>') +
        '<div class="dt-res">Most common: ' + esc(common.slice(0, 5).join(', ')) + '<small>Deep cuts: ' + esc(deep.slice(0, 6).join(', ')) + '</small></div>';
      var r = el('div', 'dt-row'), nx = el('button', 'dt-btn lime', i + 1 < prompts.length ? 'Next prompt' : 'See my score'); nx.type = 'button';
      nx.onclick = ask; r.appendChild(nx); body.appendChild(r); nx.focus();
    }
    function summary() {
      var max = prompts.length * 100;
      body.innerHTML = '<div class="dt-step">Deep Cut &middot; today</div><h3>Your score</h3><div class="dt-big">' + st.score + ' <small style="font-size:1rem;color:var(--dt-mut)">of ' + max + '</small></div>';
      st.res.forEach(function (x) {
        body.appendChild(el('div', 'dt-res', esc(x.p) + '<small>' + (x.tier ? '<b>' + esc(x.name) + '</b>: ' + TIER[x.tier][0] + ', ' + TIER[x.tier][1] + ' pts' : 'No answer, 0 pts') + '</small>'));
      });
      doneRow(body);
    }
  }

  /* ---------- 2. Two MCQs ---------- */
  function bankReady(cb) {
    if (window.APWH_MCQ && window.APWH_MCQ.units && window.APWH_MCQ.units['1']) return cb();
    var s = document.querySelector('script[data-dt-bank]');
    if (!s) { s = document.createElement('script'); s.src = BANK_SRC; s.setAttribute('data-dt-bank', '1'); document.body.appendChild(s); }
    s.addEventListener('load', function () { cb(); });
    s.addEventListener('error', function () { cb(true); });
  }
  function mcqPool() {
    var U = window.APWH_MCQ.units, out = [];
    D.units.forEach(function (u) {
      var unit = U[String(u)]; if (!unit) return;
      (unit.topics || []).forEach(function (t) {
        (unit.questions[t.id] || []).forEach(function (q, i) {
          // text sources only (scanned images are read best in MCQ Practice)
          if (!q || q.hidden || q.simg || q.simgs || !q.o || q.c == null) return;
          out.push({ id: 'u' + u + '_' + t.id + '_' + i, u: u, topic: t.name, q: q });
        });
      });
    });
    return out;
  }
  function findQ(id) {
    var m = /^u(\d+)_(.+)_(\d+)$/.exec(id); if (!m) return null;
    var unit = window.APWH_MCQ.units[m[1]]; if (!unit) return null;
    var q = (unit.questions[m[2]] || [])[+m[3]], t = (unit.topics || []).filter(function (x) { return x.id === m[2]; })[0];
    return q ? { id: id, u: +m[1], topic: t ? t.name : m[2], q: q } : null;
  }
  function playMcq(body) {
    body.innerHTML = '<p>Loading questions&hellip;</p>';
    bankReady(function (err) {
      if (err || !window.APWH_MCQ) { body.innerHTML = '<p>The questions did not load. Check your connection and try again.</p>'; return; }
      var st = getDay(TODAY).mcq;
      if (!st || !st.ids) {
        var pool = mcqPool(); if (pool.length < 2) { body.innerHTML = '<p>No questions found.</p>'; return; }
        st = { started: true, ids: pick(pool.length, 2, 'mcq', DAY).map(function (i) { return pool[i].id; }), res: [] };
        saveDay(TODAY, 'mcq', st);
      }
      var items = st.ids.map(findQ);
      if (st.done) return summary();
      show(st.res.length);
      function show(i) {
        if (i >= items.length) { st.done = true; saveDay(TODAY, 'mcq', st); return summary(); }
        var it = items[i]; if (!it) { st.res.push({ id: st.ids[i], ok: false, pick: -1 }); return show(i + 1); }
        var q = it.q, pickI = -1, conf = null, L = 'ABCDE';
        body.innerHTML = '<div class="dt-step">Question ' + (i + 1) + ' of 2 &middot; Unit ' + it.u + ': ' + it.topic + '</div>';
        if (q.s && !/^\s*\[Standalone/i.test(q.s)) body.appendChild(el('div', 'dt-src', q.s + (q.sl ? '<span class="dt-sl">' + q.sl + '</span>' : '')));
        body.appendChild(el('div', 'dt-q', q.q));
        var gate = el('div', 'dt-gate', 'Read first: choices open in 10 seconds.'); body.appendChild(gate);
        var opts = el('div', 'dt-opts gated'), btns = [];
        q.o.forEach(function (o, k) {
          var b = el('button', 'dt-opt', '<b>' + L[k] + '</b><span>' + o + '</span>'); b.type = 'button';
          b.onclick = function () { if (opts.classList.contains('locked')) return; pickI = k; btns.forEach(function (x, j) { x.classList.toggle('sel', j === k); }); anim(b, 'dt-tap'); upd(); };
          btns.push(b); opts.appendChild(b);
        });
        body.appendChild(opts);
        var cf = el('div', 'dt-conf', '<span>How sure are you?</span>'), cbs = [];
        [['confident', 'Confident'], ['shaky', 'Shaky'], ['guessing', 'Guessing']].forEach(function (c) {
          var b = el('button', '', c[1]); b.type = 'button';
          b.onclick = function () { if (opts.classList.contains('locked')) return; conf = c[0]; cbs.forEach(function (x) { x.classList.toggle('on', x === b); }); anim(b, 'dt-tap'); upd(); };
          cbs.push(b); cf.appendChild(b);
        });
        body.appendChild(cf);
        var r = el('div', 'dt-row'), chk = el('button', 'dt-btn', 'Check my answer'); chk.type = 'button'; chk.disabled = true; r.appendChild(chk); body.appendChild(r);
        function upd() { chk.disabled = !(pickI >= 0 && conf); }
        var t0 = Date.now();
        var gt = every(function () {
          var left = Math.ceil((GATE_MS - (Date.now() - t0)) / 1000);
          if (document.hidden) { t0 += 250; return; }
          if (left <= 0) { clearInterval(gt); opts.classList.remove('gated'); gate.textContent = 'Pick an answer, then say how sure you are.'; }
          else gate.textContent = 'Read first: choices open in ' + left + ' second' + (left === 1 ? '' : 's') + '.';
        }, 250);
        chk.onclick = function () {
          if (chk.disabled) return;
          var ok = pickI === q.c;
          opts.classList.add('locked'); chk.disabled = true;
          btns.forEach(function (b, j) { if (j === q.c) { b.classList.add('right'); anim(b, 'dt-glow'); } else if (j === pickI) { b.classList.add('wrong'); anim(b, 'dt-shake'); } });
          st.res.push({ id: it.id, pick: pickI, ok: ok, conf: conf }); saveDay(TODAY, 'mcq', st);
          try { if (window.SPACED && SPACED.recordReview) SPACED.recordReview(it.id, ok, conf); } catch (e) {}
          var fb = el('div', 'dt-fb dt-rise', (ok ? '<b class="ok">Correct.</b> ' : '<b class="no">Not quite.</b> The answer is ' + L[q.c] + '. ') + (q.e || ''));
          body.appendChild(fb);
          var r2 = el('div', 'dt-row'), nx = el('button', 'dt-btn lime', i === 0 ? 'Next question' : 'Finish'); nx.type = 'button';
          nx.onclick = function () { show(i + 1); }; r2.appendChild(nx); body.appendChild(r2);
          fb.scrollIntoView({ block: 'nearest' });
        };
      }
      function summary() {
        var right = st.res.filter(function (x) { return x.ok; }).length;
        body.innerHTML = '<div class="dt-step">Two MCQs &middot; today</div><h3>' + right + ' of 2 right</h3><p>These count toward your unit progress, just like MCQ Practice.</p>';
        st.res.forEach(function (x, k) {
          var it = items[k]; if (!it) return;
          body.appendChild(el('div', 'dt-res', '<b>' + (x.ok ? 'Right' : 'Missed') + '</b> &middot; Unit ' + it.u + ': ' + it.topic + '<small>' + it.q.q + '</small>'));
        });
        doneRow(body);
      }
    });
  }

  /* ---------- 3. Four Links ---------- */
  function playGroups(body) {
    var G = groupsToday();
    var st = getDay(TODAY).groups || { solved: [], mistakes: 0, tried: [] };
    var words = []; G.forEach(function (g, gi) { g.w.forEach(function (w) { words.push({ w: w, g: gi }); }); });
    var order = shuffled(words.length, 'links-order:' + TODAY).map(function (i) { return words[i]; });
    var sel = [], msgEl, busy = false, btnOf = [];
    function save() { saveDay(TODAY, 'groups', st); }
    draw({});
    function say(t) { msgEl.textContent = t; anim(msgEl, 'dt-fade'); }
    function draw(fx) {
      body.innerHTML = '<div class="dt-step">Find four groups of four</div>';
      if (!st.solved.length && !st.done) body.appendChild(el('p', '', 'Each term belongs to exactly one group. Watch for terms that seem to fit two.'));
      var sv = el('div', 'dt-solved');
      var showGroups = st.solved.concat(st.done && !st.won ? [0, 1, 2, 3].filter(function (x) { return st.solved.indexOf(x) === -1; }) : []);
      showGroups.forEach(function (gi, k) {
        var g = G[gi], bar = el('div', 'dt-sg ' + LV_CLASS[g.lv], '<b>' + esc(g.t) + '</b><span>' + esc(g.w.join(', ')) + '</span>');
        if (gi === fx.newGroup || (fx.reveal && k >= fx.solvedBefore)) { bar.classList.add('dt-rise'); bar.style.animationDelay = (fx.reveal ? (k - fx.solvedBefore) * 180 : 0) + 'ms'; }
        sv.appendChild(bar);
      });
      body.appendChild(sv);
      if (st.done) {
        body.appendChild(el('h3', 'dt-fade', st.won ? 'Solved with ' + st.mistakes + ' mistake' + (st.mistakes === 1 ? '' : 's') : 'Out of tries. Here are the groups.'));
        doneRow(body); return;
      }
      var grid = el('div', 'dt-grid'); btnOf = [];
      order.forEach(function (o) {
        if (st.solved.indexOf(o.g) !== -1) return;
        var b = el('button', 'dt-w' + (sel.indexOf(o) !== -1 ? ' sel' : ''), esc(o.w)); b.type = 'button';
        if (fx.tap === o) b.classList.add('dt-tap');
        if (fx.mix) b.classList.add('dt-fade');
        b.onclick = function () {
          if (busy) return;
          var k = sel.indexOf(o);
          if (k !== -1) sel.splice(k, 1); else if (sel.length < 4) sel.push(o); else return;
          draw({ tap: o });
        };
        btnOf.push({ o: o, b: b });
        grid.appendChild(b);
      });
      body.appendChild(grid);
      if (fx.shake) anim(grid, 'dt-shake');
      msgEl = el('div', 'dt-msg'); body.appendChild(msgEl);
      if (fx.msg) say(fx.msg);
      var dots = el('div', 'dt-dots', 'Mistakes left: ');
      for (var i = 0; i < LINK_MISTAKES; i++) {
        var dot = el('i', i < LINK_MISTAKES - st.mistakes ? '' : 'off');
        if (fx.lost && i === LINK_MISTAKES - st.mistakes) dot.classList.add('dt-drop');
        dots.appendChild(dot);
      }
      body.appendChild(dots);
      var r = el('div', 'dt-row');
      var mix = el('button', 'dt-btn ghost', 'Shuffle'), clr = el('button', 'dt-btn ghost', 'Deselect all'), sub = el('button', 'dt-btn', 'Submit');
      mix.type = clr.type = sub.type = 'button'; sub.disabled = sel.length !== 4; clr.disabled = !sel.length;
      mix.onclick = function () { if (busy) return; for (var i = order.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = order[i]; order[i] = order[j]; order[j] = t; } draw({ mix: true }); };
      clr.onclick = function () { if (busy) return; sel = []; draw({}); };
      sub.onclick = submit;
      r.appendChild(mix); r.appendChild(clr); r.appendChild(sub); body.appendChild(r);
    }
    function submit() {
      if (sel.length !== 4 || busy) return;
      var key = sel.map(function (o) { return o.w; }).sort().join('|');
      if (st.tried.indexOf(key) !== -1) { say('You already tried that group.'); return; }
      busy = true;
      // the four picks hop one after another, then the verdict lands
      var picked = btnOf.filter(function (x) { return sel.indexOf(x.o) !== -1; });
      picked.forEach(function (x, k) { x.b.style.animationDelay = (k * 90) + 'ms'; anim(x.b, 'dt-hop'); });
      later(function () {
        st.tried.push(key);
        var counts = {}; sel.forEach(function (o) { counts[o.g] = (counts[o.g] || 0) + 1; });
        var top = Object.keys(counts).reduce(function (a, b) { return counts[a] >= counts[b] ? a : b; });
        if (counts[top] === 4) {
          picked.forEach(function (x) { x.b.style.animationDelay = '0ms'; anim(x.b, 'dt-gone'); });
          later(function () {
            st.solved.push(+top); sel = [];
            if (st.solved.length === 4) { st.done = true; st.won = true; }
            save(); busy = false; draw({ newGroup: +top });
          }, 260);
        } else {
          st.mistakes++;
          var near = counts[top] === 3;
          if (st.mistakes >= LINK_MISTAKES) { var before = st.solved.length; st.done = true; st.won = false; sel = []; save(); busy = false; return draw({ reveal: true, solvedBefore: before }); }
          save(); busy = false;
          draw({ shake: true, lost: true, msg: near ? 'One away.' : 'Not a group.' });
        }
      }, 90 * 3 + 380);
    }
  }

  /* ---------- 4. Tivin Word ---------- */
  var DICT = null;
  function dict() {
    if (DICT) return DICT;
    if (!window.DAILY_TIVIN_DICT) return null;
    DICT = {};
    (window.DAILY_TIVIN_DICT + ' ' + (D.extraWords || '')).split(/\s+/).forEach(function (w) { if (w) DICT[w.toUpperCase()] = 1; });
    D.words.forEach(function (w) { DICT[w[0].toUpperCase()] = 1; });
    return DICT;
  }
  function playWord(body) {
    var W = wordToday(), ans = W[0].toUpperCase(), N = ans.length, FLIP = 300;
    var st = getDay(TODAY).word || { guesses: [] };
    var cur = '', busy = false, cells = [], rows = [], keys = {}, keyState = {};
    function save() { saveDay(TODAY, 'word', st); }
    function score(g) {
      var res = [], left = {}, i;
      for (i = 0; i < N; i++) { if (g[i] === ans[i]) res[i] = 'g'; else left[ans[i]] = (left[ans[i]] || 0) + 1; }
      for (i = 0; i < N; i++) { if (res[i]) continue; if (left[g[i]]) { res[i] = 'y'; left[g[i]]--; } else res[i] = 'x'; }
      return res;
    }
    function clueHtml() {
      return '<b>' + N + ' letters</b> &middot; Unit ' + W[1] +
        (st.guesses.length >= 3 || st.done ? ' &middot; Clue: ' + esc(W[2]) : ' &middot; a clue appears after 3 guesses');
    }
    function paintKeys(g, sc) {
      var rank = { g: 3, y: 2, x: 1 };
      for (var c = 0; c < N; c++) {
        var k = g[c], prev = keyState[k];
        if (!prev || rank[sc[c]] > rank[prev]) {
          keyState[k] = sc[c];
          if (keys[k]) { keys[k].className = 'dt-k ' + sc[c]; }
        }
      }
    }
    body.innerHTML = '';
    var clue = el('div', 'dt-clue', clueHtml()); body.appendChild(clue);
    var grid = el('div', 'dt-wgrid');
    for (var r = 0; r < WORD_TRIES; r++) {
      var row = el('div', 'dt-wrow'); cells[r] = [];
      for (var c = 0; c < N; c++) { var cell = el('div', 'dt-cell'); cells[r].push(cell); row.appendChild(cell); }
      rows.push(row); grid.appendChild(row);
    }
    body.appendChild(grid);
    var msg = el('div', 'dt-msg'); msg.style.textAlign = 'center'; body.appendChild(msg);
    var kb = el('div', 'dt-kb');
    ['QWERTYUIOP', 'ASDFGHJKL', '+ZXCVBNM-'].forEach(function (line) {
      var kr = el('div', 'dt-kr');
      line.split('').forEach(function (k) {
        var label = k === '+' ? 'Enter' : k === '-' ? 'Delete' : k;
        var b = el('button', 'dt-k' + (k === '+' || k === '-' ? ' wide' : ''), label); b.type = 'button';
        b.onclick = function () { anim(b, 'dt-press'); press(k === '+' ? 'Enter' : k === '-' ? 'Backspace' : k); };
        if (k !== '+' && k !== '-') keys[k] = b;
        kr.appendChild(b);
      });
      kb.appendChild(kr);
    });
    body.appendChild(kb);
    // guesses from earlier today, shown without animation
    st.guesses.forEach(function (g, r) {
      var sc = score(g);
      for (var c = 0; c < N; c++) { cells[r][c].textContent = g[c]; cells[r][c].className = 'dt-cell ' + sc[c]; }
      paintKeys(g, sc);
    });
    if (st.done) finish(false);
    function say(t) { msg.textContent = t; anim(msg, 'dt-fade'); }
    function finish(animate) {
      kb.style.display = 'none';
      clue.innerHTML = clueHtml();
      var box = el('div', animate ? 'dt-rise' : '');
      box.appendChild(el('h3', '', (st.won ? 'You got it: ' : 'The word was ') + ans));
      box.appendChild(el('p', '', esc(W[3])));
      body.appendChild(box); doneRow(box);
    }
    function typeRow() {
      var r = st.guesses.length;
      for (var c = 0; c < N; c++) { cells[r][c].textContent = cur[c] || ''; cells[r][c].classList.toggle('f', !!cur[c]); }
    }
    function press(k) {
      if (st.done || busy) return;
      var r = st.guesses.length;
      if (k === 'Enter') {
        if (cur.length !== N) { say('Use all ' + N + ' letters.'); anim(rows[r], 'dt-shake'); return; }
        var d = dict();
        if (d && !d[cur]) { say('“' + cur + '” is not in the word list.'); anim(rows[r], 'dt-shake'); return; }
        var g = cur, sc = score(g); cur = ''; busy = true; msg.textContent = '';
        st.guesses.push(g);
        if (g === ans) { st.done = true; st.won = true; } else if (st.guesses.length >= WORD_TRIES) { st.done = true; st.won = false; }
        save();
        // flip each tile in turn; its color lands at the halfway point of the flip
        cells[r].forEach(function (cell, c) {
          later(function () { anim(cell, 'dt-flip'); }, c * FLIP);
          later(function () { cell.classList.remove('f'); cell.classList.add(sc[c]); }, c * FLIP + FLIP / 2);
        });
        later(function () {
          paintKeys(g, sc); busy = false;
          if (st.guesses.length === 3 && !st.done) { clue.innerHTML = clueHtml(); anim(clue, 'dt-fade'); }
          if (st.won) {
            cells[r].forEach(function (cell, c) { cell.style.animationDelay = (c * 90) + 'ms'; anim(cell, 'dt-bounce'); });
            later(function () { finish(true); }, N * 90 + 500);
          } else if (st.done) finish(true);
        }, N * FLIP + 150);
        return;
      }
      if (k === 'Backspace') { if (!cur) return; cur = cur.slice(0, -1); typeRow(); return; }
      if (/^[A-Z]$/.test(k) && cur.length < N) {
        cur += k; typeRow(); anim(cells[r][cur.length - 1], 'dt-pop');
      }
    }
    keyHandler = function (e) {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      var k = e.key;
      if (k === 'Enter' || k === 'Backspace') { e.preventDefault(); press(k); }
      else if (/^[a-zA-Z]$/.test(k)) { e.preventDefault(); press(k.toUpperCase()); }
    };
    document.addEventListener('keydown', keyHandler);
  }

  /* ---------- mount ---------- */
  function mount() {
    root = document.getElementById('daily-tivin'); if (!root) return;
    css(); renderCard();
    // a new day starts while the page is open: refresh the card
    setInterval(function () { var k = todayKey(); if (k !== TODAY && !ov) { TODAY = k; DAY = dayNum(k); renderCard(); } }, 60000);
  }
  window.DAILY_TIVIN_APP = { open: open, today: function () { return TODAY; }, match: matchAnswer, suggest: suggest };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount); else mount();
})();
