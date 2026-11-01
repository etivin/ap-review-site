/* ============================================================
   mcq-engine.js: Shared, mode-aware MCQ session engine.
   Consumes window.APWH_MCQ (mcq-bank.js). Renders a self-contained,
   namespaced UI (.mcqx-*) styled with the site's CSS variables, so it
   looks native on every unit page and on the cumulative hub.

   Public API (window.APWH):
     APWH.mountMCQ(rootEl, opts)
       opts.unit        : unit id ('1'..'8')  -> per-unit home with topic buttons
       opts.pool        : [{unit,topic,idx}]  -> run this exact set (hub)
       opts.title       : session/home heading
       opts.defaultMode : 'quick' | 'test'   (default 'quick' for units, 'test' for pool)
       opts.calibration : bool (default true): confidence chips in Test Mode
       opts.showModeToggle : bool (default true)
       opts.regenerate  : function -> new pool (hub "New Set" button)
       opts.newSetLabel : label for the regenerate button
     APWH.store.load() / APWH.store.save(obj): the apReview_v1 blob
     APWH.markSeen(['1','2']): stamp lastSeen timestamps
     APWH.poolFromUnit(unitId, {mode,mixedPerTopic,topic})
   Two feedback modes:
     Quick Check: immediate correct/incorrect + explanation per click.
     Test Mode: batched: record answers (+ optional confidence) with no
                   correctness shown until "Reveal All & Score", which then
                   shows every answer vs. correct, explanations, the total
                   score, and a confidence-vs-accuracy calibration summary.
   Site convention: plain global, no build step, no imports.
   ============================================================ */
(function () {
  'use strict';
  var APWH = (window.APWH = window.APWH || {});
  var PKEY = 'apReview_v1';
  var L = ['A', 'B', 'C', 'D', 'E', 'F'];

  function units() { return (window.APWH_MCQ && window.APWH_MCQ.units) || {}; }
  function esc(s) { return s ? String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') : ''; }

  var store = {
    load: function () { try { return JSON.parse(localStorage.getItem(PKEY) || '{}'); } catch (e) { return {}; } },
    save: function (o) { try { localStorage.setItem(PKEY, JSON.stringify(o)); } catch (e) {} }
  };
  APWH.store = store;

  APWH.markSeen = function (unitList) {
    var s = store.load(); s.lastSeen = s.lastSeen || {};
    var now = Date.now();
    (unitList || []).forEach(function (u) { s.lastSeen[String(u)] = now; });
    store.save(s);
  };

  // Globally-unique, unit-qualified id, fixes the old topic_idx collision
  // across units and matches the spaced-review item-id scheme (u{unit}_{topic}_{idx}).
  function itemIdFor(ref) { return 'u' + ref.unit + '_' + ref.topic + '_' + ref.idx; }

  function recordAnswer(ref, q, userAnswer, correct, confidence) {
    var s = store.load(); s.mcq = s.mcq || {};
    s.mcq[itemIdFor(ref)] = {
      unit: ref.unit, topic: ref.topic, topicIdx: ref.idx,
      userAnswer: userAnswer, correctAnswer: q.c, correct: !!correct,
      confidence: confidence || null, ts: Date.now()
    };
    store.save(s);
  }

  // Single spaced-review write path (spaced.js) + the legacy mcq log, together.
  function recordReview(ref, q, userAnswer, correct, confidence) {
    if (window.SPACED && window.SPACED.recordReview) {
      window.SPACED.recordReview(itemIdFor(ref), !!correct, confidence || null);
    }
    recordAnswer(ref, q, userAnswer, correct, confidence);
    // A unit counts as practiced (for Cumulative Review's staleness weighting) when
    // one of its questions is graded, not when a set is merely opened.
    APWH.markSeen([String(ref.unit)]);
  }

  /* ---- pool helpers ---- */
  function resolve(ref) {
    var u = units()[String(ref.unit)];
    var arr = (u && u.questions[ref.topic]) || [];
    return arr[ref.idx];
  }
  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  APWH.poolFromUnit = function (unitId, o) {
    o = o || {}; var u = units()[String(unitId)]; if (!u) return [];
    var pool = [];
    (u.topics || []).forEach(function (t) {
      var arr = u.questions[t.id] || [];
      if (o.topic && o.topic !== t.id) return;
      if (o.mode === 'mixed') {
        var idx = shuffle(arr.map(function (_, i) { return i; })).slice(0, o.mixedPerTopic || 2);
        idx.forEach(function (i) { pool.push({ unit: String(unitId), topic: t.id, idx: i }); });
      } else {
        arr.forEach(function (_, i) { pool.push({ unit: String(unitId), topic: t.id, idx: i }); });
      }
    });
    return pool;
  };

  /* ---- CSS (once) ---- */
  function injectCSS() {
    if (document.getElementById('mcqx-css')) return;
    var css = [
      '.mcqx{--mx-line:var(--border,#ddd0b8);--mx-ink:var(--ink,#1a1a12);--mx-mut:var(--muted,#7a7860);',
      '--mx-red:var(--red,#b0001c);--mx-grn:var(--green,#1a6825);--mx-card:var(--white,#fff);',
      '--mx-paper:var(--paper,#f3ece0);--mx-grnbg:var(--green-bg,#eef7f0);--mx-redbg:var(--red-bg,#fdf1f3);',
      '--mx-bad:#c62828;--mx-badbg:#fdecec;',
      'font-family:inherit;color:var(--mx-ink)}',
      '[data-theme="dark"] .mcqx{--mx-ink:#e8ecf5;--mx-grn:#5fd08f;--mx-bad:#ef6b6b;--mx-badbg:rgba(239,107,107,.14);--mx-grnbg:rgba(70,190,130,.16)}',
      /* theme.css forces light text on spans and buttons in dark mode; keep dark text on the light-filled pieces */
      '[data-theme="dark"] .mcqx :is(.mcqx-qbox,.mcqx-qpill,.mcqx-reveal,.mcqx-navb.mx-ans,.mcqx-modebtn.active,.mcqx-bigbtn.mx-primary,.mcqx-opt.mx-sel .mx-ol),[data-theme="dark"] .mcqx :is(.mcqx-qbox,.mcqx-qpill,.mcqx-reveal,.mcqx-bigbtn.mx-primary) *{color:#12141b}',
      '.mcqx button{font-family:inherit}',
      '.mcqx-modebar{display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin-bottom:18px;padding:14px 16px;background:var(--mx-paper);border:1px solid var(--mx-line)}',
      '.mcqx-modebar .mx-lbl{font-family:Lato,system-ui,sans-serif;font-weight:700;font-size:.62rem;letter-spacing:.16em;text-transform:uppercase;color:var(--mx-mut)}',
      '.mcqx-modebtn{padding:8px 15px;background:var(--mx-card);border:1px solid var(--mx-line);cursor:pointer;font-size:.86rem;color:var(--mx-mut);transition:all .13s}',
      '.mcqx-modebtn.active{background:var(--mx-ink);color:var(--mx-card);border-color:var(--mx-ink)}',
      '.mcqx-modehint{flex-basis:100%;font-size:.8rem;color:var(--mx-mut);line-height:1.5;font-style:italic}',
      '.mcqx-topics{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px;margin-bottom:16px}',
      '.mcqx-tc{text-align:left;padding:14px 16px;background:var(--mx-card);border:1px solid var(--mx-line);border-left:4px solid var(--mx-red);cursor:pointer;transition:transform .12s,box-shadow .12s}',
      '.mcqx-tc:hover{transform:translateY(-2px);box-shadow:0 4px 14px rgba(0,0,0,.1)}',
      '.mcqx-tc .mx-tn{font-family:Lato,system-ui,sans-serif;font-weight:700;font-size:.56rem;letter-spacing:.14em;text-transform:uppercase;color:var(--mx-red)}',
      '.mcqx-tc .mx-tt{font-weight:600;margin:3px 0 4px;font-size:.98rem}',
      '.mcqx-tc .mx-tcnt{font-family:Lato,system-ui,sans-serif;font-weight:700;font-size:.62rem;color:var(--mx-mut)}',
      '.mcqx-actions{display:flex;flex-wrap:wrap;gap:12px}',
      '.mcqx-bigbtn{flex:1;min-width:220px;padding:14px;border:1px solid var(--mx-line);background:var(--mx-card);cursor:pointer;font-size:.92rem;font-weight:600;transition:all .13s}',
      '.mcqx-bigbtn.mx-primary{background:var(--mx-ink);color:var(--mx-card);border-color:var(--mx-ink)}',
      '.mcqx-bigbtn:hover{box-shadow:0 4px 14px rgba(0,0,0,.12)}',
      '.mcqx-shead{display:flex;flex-wrap:wrap;align-items:center;gap:10px 16px;padding:12px 18px;background:var(--mx-paper);border-bottom:2px dashed var(--mx-ink)}',
      '.mcqx-back{padding:8px 14px;background:var(--mx-card);border:1px solid var(--mx-line);border-radius:6px;cursor:pointer;font-size:.86rem;color:var(--mx-ink)}',
      '.mcqx-back:hover{border-color:var(--mx-ink)}',
      '.mcqx-title{font-weight:700;font-size:1.2rem}',
      '.mcqx-prog{font-family:Lato,system-ui,sans-serif;font-weight:700;font-size:.78rem;letter-spacing:.06em;color:var(--mx-mut);margin-left:auto}',
      '.mcqx-score{font-family:Lato,system-ui,sans-serif;font-weight:700;font-size:.82rem;padding:4px 11px;background:var(--mx-card);border:1px solid var(--mx-line)}',
      '.mcqx-pbar{height:4px;background:var(--mx-line);margin:0 0 22px}',
      '.mcqx-pbar-f{height:100%;width:0;background:var(--mx-red);transition:width .25s}',
      '.mcqx-sbr{border:none;border-top:1px dashed var(--mx-line);margin:26px 0}',
      /* exam layout: source on the left, question on the right (stacks when narrow) */
      '.mcqx-split{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);align-items:start;max-width:1700px;margin:0 auto}',
      '.mcqx-split.mx-solo{grid-template-columns:minmax(0,1fr);max-width:900px}',
      '.mcqx-left{position:sticky;top:150px;max-height:calc(100vh - 250px);overflow:auto;padding:6px 32px 22px 6px;border-right:3px solid var(--mx-line)}',
      '.mcqx-right{min-width:0;padding:6px 6px 22px 32px}',
      '.mx-solo .mcqx-right{padding:6px 0 22px}',
      '.mcqx-all .mcqx-left{position:static;max-height:70vh}',
      /* full window: the test fills the browser; source and question each scroll on their own */
      'html.mcqx-open,html.mcqx-open body{overflow:hidden}',
      '.mcqx-session.mx-full.mcqx-hidden{display:none}',
      '.mcqx-session.mx-full{position:fixed;inset:0;z-index:999;box-shadow:0 0 0 1px var(--mx-line);display:flex;flex-direction:column;background:var(--cream,#f9f6ef)}',
      '.mx-full .mcqx-pbar{margin:0;flex-shrink:0}',
      '.mx-full .mcqx-body{flex:1;min-height:0;overflow:auto;padding:22px clamp(16px,3vw,48px) 0}',
      '.mx-full .mcqx-body:not(.mcqx-all){overflow:hidden;display:flex;flex-direction:column;padding-bottom:0}',
      '.mx-full .mcqx-body:not(.mcqx-all) .mcqx-page.mx-on{flex:1;min-height:0}',
      '.mx-full .mcqx-body:not(.mcqx-all) .mcqx-split{height:100%}',
      '.mx-full .mcqx-body:not(.mcqx-all) .mcqx-left,.mx-full .mcqx-body:not(.mcqx-all) .mcqx-right{position:static;height:100%;max-height:none;overflow:auto}',
      '.mx-full .mcqx-foot{margin-top:0;flex-shrink:0}',
      '@media (max-width:820px){.mcqx-split{grid-template-columns:minmax(0,1fr)}.mcqx-left{position:static;max-height:none;overflow:visible;border-right:none;border-bottom:3px solid var(--mx-line);padding:0 0 16px;margin-bottom:16px}.mcqx-right{padding:0 0 18px}',
      '.mx-full .mcqx-body:not(.mcqx-all){overflow:auto;display:block}.mx-full .mcqx-body:not(.mcqx-all) .mcqx-split{height:auto}',
      '.mx-full .mcqx-body:not(.mcqx-all) .mcqx-left,.mx-full .mcqx-body:not(.mcqx-all) .mcqx-right{height:auto;overflow:visible}}',
      '.mcqx-sset{font-size:1.3rem;font-weight:400;color:var(--mx-ink);margin:0 0 18px}',
      '.mcqx-stim-src{font-family:Lato,system-ui,sans-serif;font-weight:700;font-size:.92rem;letter-spacing:.03em;text-transform:uppercase;text-align:center;line-height:1.55;color:var(--mx-ink);margin:0 0 14px}',
      '.mcqx-stim-txt{font-size:1.06rem}',
      '.mcqx-stim-txt p{margin:0 0 12px;line-height:1.75}',
      '.mcqx-stim-cap{font-size:.86rem;color:var(--mx-mut);text-align:center;margin:6px 0 18px}',
      /* image viewer: zoom in / out / reset / enlarge above every source image */
      '.mcqx-img{margin:10px auto 4px;border:1px solid var(--mx-line);background:var(--mx-card)}',
      '.mcqx-itools{display:flex;align-items:center;justify-content:center;gap:4px;padding:5px 8px;background:var(--mx-paper);border-bottom:1px solid var(--mx-line)}',
      '.mcqx-itools button{min-width:34px;height:32px;padding:0 9px;background:var(--mx-card);border:1px solid var(--mx-line);border-radius:5px;cursor:pointer;color:var(--mx-ink);font-size:.95rem;font-weight:700}',
      '.mcqx-itools button:hover{border-color:var(--mx-ink)}',
      '.mcqx-itools .mx-zpct{min-width:52px;text-align:center;font-family:Lato,system-ui,sans-serif;font-weight:700;font-size:.82rem;color:var(--mx-mut)}',
      '.mcqx-itools .mx-zbig{margin-left:10px}',
      '.mcqx-ivp{overflow:auto;max-height:75vh}',
      '.mcqx-ivp img{display:block;width:100%;max-width:none;height:auto;margin:0 auto;cursor:zoom-in}',
      '.mcqx-lb{position:fixed;inset:0;z-index:1500;display:flex;flex-direction:column;background:rgba(10,12,18,.92)}',
      '.mcqx-lb .mcqx-itools{background:#1c2029;border-bottom:1px solid #333a49}',
      '.mcqx-lb .mcqx-itools .mx-zpct{color:#c4cad7}',
      '.mcqx-lb .mx-lbcap{flex:1;color:#e8ecf5;font-size:.9rem;padding:0 10px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}',
      '.mcqx-lb .mcqx-img{flex:1;min-height:0;display:flex;flex-direction:column;margin:0;border:none;background:none}',
      '.mcqx-lb .mcqx-ivp{flex:1;max-height:none;padding:16px}',
      '.mcqx-lb .mcqx-ivp img{cursor:default;background:#fff}',
      '.mcqx-qhead{display:flex;align-items:center;gap:14px;background:var(--mx-paper);border-bottom:2px dashed var(--mx-ink);margin-bottom:22px;padding-right:8px}',
      '.mcqx-qbox{display:flex;align-items:center;justify-content:center;min-width:40px;height:44px;padding:0 8px;background:var(--mx-ink);color:var(--mx-card);font-family:Lato,system-ui,sans-serif;font-weight:700;font-size:1.2rem}',
      '.mcqx-flag{display:flex;align-items:center;gap:8px;padding:6px 4px;background:none;border:none;cursor:pointer;color:var(--mx-ink);font-size:1rem}',
      '.mcqx-flag svg{width:16px;height:20px;fill:none;stroke:currentColor;stroke-width:2}',
      '.mcqx-flag[aria-pressed="true"] svg{fill:var(--mx-bad);stroke:var(--mx-bad)}',
      '.mcqx-qcard{margin-bottom:8px}',
      '.mcqx-qtxt{font-size:1.14rem;line-height:1.65;margin-bottom:22px}',
      '.mcqx-opts{display:flex;flex-direction:column;gap:14px}',
      '.mcqx-opt{display:flex;gap:18px;align-items:flex-start;text-align:left;padding:16px 20px;background:var(--mx-card);border:1.5px solid var(--border2,var(--mx-mut));border-radius:10px;cursor:pointer;color:var(--mx-ink);font-size:1.04rem;line-height:1.55;transition:border-color .12s,background .12s}',
      '.mcqx-opt:hover:not(:disabled){border-color:var(--mx-ink)}',
      '.mcqx-opt:disabled{cursor:default;color:var(--mx-ink)}',
      '.mcqx-opt .mx-ol{display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;margin-top:-3px;border-radius:50%;border:1.5px solid var(--mx-ink);font-family:Lato,system-ui,sans-serif;font-weight:700;font-size:.88rem;color:var(--mx-ink);flex-shrink:0}',
      '.mcqx-opt{flex-wrap:wrap;row-gap:8px}.mcqx-opt .mx-ot{flex:1 1 calc(100% - 50px);min-width:0}',
      '.mcqx-opt .mx-tag{align-self:flex-start;margin-left:48px;flex-shrink:0;font-family:Lato,system-ui,sans-serif;font-weight:700;font-size:.58rem;letter-spacing:.1em;text-transform:uppercase;padding:4px 9px;border-radius:10px;white-space:nowrap}',
      '.mcqx-opt .mx-tag:empty{display:none}',
      '.mcqx-opt .mx-tag.mx-tok{background:var(--mx-grn);color:#fff}',
      '.mcqx-opt .mx-tag.mx-tbad{background:var(--mx-bad);color:#fff}',
      '.mcqx-opt .mx-tag.mx-tkey{border:1.5px solid var(--mx-grn);color:var(--mx-grn)}',
      '.mcqx-opt.mx-sel{border-color:var(--mx-ink);background:var(--mx-paper);box-shadow:inset 0 0 0 1px var(--mx-ink)}',
      '.mcqx-opt.mx-sel .mx-ol{background:var(--mx-ink);border-color:var(--mx-ink);color:var(--mx-card)}',
      '.mcqx-opt.mx-correct{border-color:var(--mx-grn);background:var(--mx-grnbg);box-shadow:inset 0 0 0 1px var(--mx-grn)}',
      '.mcqx-opt.mx-correct .mx-ol{background:var(--mx-grn);border-color:var(--mx-grn);color:#fff}',
      '.mcqx-opt.mx-reveal{border:1.5px dashed var(--mx-grn);background:var(--mx-grnbg)}',
      '.mcqx-opt.mx-reveal .mx-ol{border-color:var(--mx-grn);color:var(--mx-grn)}',
      '.mcqx-opt.mx-wrong{border-color:var(--mx-bad);background:var(--mx-badbg);box-shadow:inset 0 0 0 1px var(--mx-bad)}',
      '.mcqx-opt.mx-wrong .mx-ol{background:var(--mx-bad);border-color:var(--mx-bad);color:#fff}',
      /* cross out: the "Cross out" toggle in the question header shows a button beside every choice */
      '.mcqx-orow{display:flex;gap:4px;align-items:center}',
      '.mcqx-orow .mcqx-opt{flex:1;min-width:0}',
      '.mcqx-xbtn{display:flex;flex-shrink:0;width:54px;align-self:stretch;align-items:center;justify-content:center;padding:0;background:none;border:none;color:var(--mx-ink);cursor:pointer}',
      '.mcqx-all .mcqx-xbtn{display:none}',
      '.mcqx-intro-off > .pg-hero{display:none}',
      '.mcqx-xbtn .mx-xc{position:relative;display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border:1.5px solid currentColor;border-radius:50%;font-family:Lato,system-ui,sans-serif;font-weight:700;font-size:.72rem}',
      '.mcqx-xbtn .mx-xc::after{content:"";position:absolute;left:-6px;right:-6px;top:50%;height:2px;margin-top:-1px;background:currentColor}',
      '.mcqx-xbtn .mx-xu{font-weight:700;font-size:.82rem;text-decoration:underline}',
      '.mcqx-xbtn:hover:not(:disabled){color:var(--mx-bad)}',
      '.mcqx-xbtn:disabled{opacity:.35;cursor:default}',
      '.mcqx-orow.mx-x .mcqx-opt{opacity:.5}',
      '.mcqx-orow.mx-x .mcqx-opt.mx-correct,.mcqx-orow.mx-x .mcqx-opt.mx-reveal,.mcqx-orow.mx-x .mcqx-opt.mx-wrong{opacity:.9}',
      '.mcqx-orow.mx-x .mx-ot{text-decoration:line-through;text-decoration-thickness:2px;text-decoration-color:var(--mx-bad)}',
      /* question map: in the bottom bar's pop-up, and inline above the review */
      '.mcqx-nav{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 18px;padding:10px 12px;background:var(--mx-paper);border:1px solid var(--mx-line)}',
      '.mcqx-nav.mx-inline{display:none}.mcqx-all .mcqx-nav.mx-inline{display:flex}',
      '.mcqx-navb.mx-flag::before{content:"";position:absolute;top:-1px;left:-1px;border-top:11px solid var(--mx-bad);border-right:11px solid transparent}',
      '.mcqx-nav .mx-nl{flex-basis:100%;font-size:.74rem;color:var(--mx-mut);margin-bottom:2px}',
      '.mcqx-nav .mx-nl b{font-family:Lato,system-ui,sans-serif;font-size:.58rem;letter-spacing:.16em;text-transform:uppercase;margin-right:8px;color:var(--mx-ink)}',
      '.mcqx-navb{position:relative;min-width:34px;height:34px;padding:0 6px;border:1px solid var(--mx-line);background:var(--mx-card);color:var(--mx-mut);font-family:Lato,system-ui,sans-serif;font-weight:700;font-size:.8rem;cursor:pointer}',
      '.mcqx-navb:hover{border-color:var(--mx-ink);color:var(--mx-ink)}',
      '.mcqx-navb.mx-ans{background:var(--mx-ink);border-color:var(--mx-ink);color:var(--mx-card)}',
      '.mcqx-navb.mx-noconf::after{content:"";position:absolute;top:-5px;right:-5px;width:10px;height:10px;border-radius:50%;background:var(--mx-bad);border:2px solid var(--mx-paper)}',
      '.mcqx-navb.mx-ok{background:var(--mx-grn);border-color:var(--mx-grn);color:#fff}',
      '.mcqx-navb.mx-bad{background:var(--mx-bad);border-color:var(--mx-bad);color:#fff}',
      '.mcqx-navb.mx-blank{border:1.5px dashed var(--mx-bad);color:var(--mx-bad)}',
      '.mcqx-navb.mx-cur{outline:2px solid var(--mx-red);outline-offset:2px}',
      /* review: verdict banner on each question */
      '.mcqx-verdict{display:none}',
      '.mcqx-verdict.mx-on{display:flex;flex-wrap:wrap;align-items:center;gap:6px 14px;margin:0 0 14px;padding:10px 14px;border-left:5px solid var(--mx-mut);background:var(--mx-paper)}',
      '.mcqx-verdict .mx-vh{font-family:Lato,system-ui,sans-serif;font-weight:700;font-size:1.02rem}',
      '.mcqx-verdict .mx-vd{font-size:.86rem;color:var(--mx-ink)}',
      '.mcqx-verdict.mx-vok{border-left-color:var(--mx-grn);background:var(--mx-grnbg)}.mcqx-verdict.mx-vok .mx-vh{color:var(--mx-grn)}',
      '.mcqx-verdict.mx-vbad{border-left-color:var(--mx-bad);background:var(--mx-badbg)}.mcqx-verdict.mx-vbad .mx-vh{color:var(--mx-bad)}',
      '.mcqx-verdict.mx-vblank .mx-vh{color:var(--mx-bad)}',
      '.mcqx-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:14px 0 4px}',
      '.mcqx-stat{padding:10px 8px;background:var(--mx-card);border:1px solid var(--mx-line);border-top:4px solid var(--mx-mut);text-align:center}',
      '.mcqx-stat b{display:block;font-family:Lato,system-ui,sans-serif;font-size:1.5rem;line-height:1.1}',
      '.mcqx-stat span{font-family:Lato,system-ui,sans-serif;font-weight:700;font-size:.58rem;letter-spacing:.12em;text-transform:uppercase;color:var(--mx-mut)}',
      '.mcqx-stat.mx-sok{border-top-color:var(--mx-grn)}.mcqx-stat.mx-sok b{color:var(--mx-grn)}',
      '.mcqx-stat.mx-sbad{border-top-color:var(--mx-bad)}.mcqx-stat.mx-sbad b{color:var(--mx-bad)}',
      '.mcqx-filter{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-top:14px}',
      '.mcqx-filter .mx-lbl{font-family:Lato,system-ui,sans-serif;font-weight:700;font-size:.6rem;letter-spacing:.16em;text-transform:uppercase;color:var(--mx-mut)}',
      '.mcqx-all .mcqx-page.mx-filt{display:none}',
      '.mcqx-conf{margin-top:11px;padding:10px 13px;background:var(--mx-paper);border:1px dashed var(--mx-line)}',
      '.mcqx-conf.mcqx-conf-hide{display:none}',
      '.mcqx-conf .mx-clbl{display:block;font-family:Lato,system-ui,sans-serif;font-weight:700;font-size:.56rem;letter-spacing:.12em;text-transform:uppercase;color:var(--mx-mut)}',
      '.mcqx-chips{display:flex;gap:8px;margin-top:9px}',
      '.mcqx-chip{flex:1;padding:9px 8px;background:var(--mx-card);border:1px solid var(--mx-line);cursor:pointer;font-family:Lato,system-ui,sans-serif;font-weight:700;font-size:.66rem;letter-spacing:.08em;text-transform:uppercase;color:var(--mx-mut);text-align:center;transition:all .12s}',
      '.mcqx-chip:hover:not(:disabled){border-color:var(--mx-red);color:var(--mx-ink)}',
      '.mcqx-chip:disabled{cursor:default;opacity:.75}',
      '.mcqx-chip.mx-on{background:var(--mx-red);color:#fff;border-color:var(--mx-red)}',
      '.mcqx-reason{margin-top:10px;padding:11px 13px;background:var(--mx-card);border:1px solid var(--mx-line);border-left:3px solid var(--mx-mut)}',
      '.mcqx-reason.mx-need{border-left-color:var(--mx-red)}',
      '.mcqx-reason .mx-rst{font-family:Lato,system-ui,sans-serif;font-weight:700;font-size:.64rem;letter-spacing:.05em;color:var(--mx-mut);margin-bottom:7px}',
      '.mcqx-reason .mx-rst .mx-rok{color:var(--mx-grn);font-weight:600}',
      '.mcqx-reason .mx-rst .mx-rbad{color:var(--mx-bad);font-weight:600}',
      '.mcqx-reason textarea{width:100%;font-family:inherit;font-size:.86rem;line-height:1.5;padding:8px 10px;border:1px solid var(--mx-line);background:var(--mx-paper);color:var(--mx-ink);resize:vertical;min-height:44px}',
      '.mcqx-reason textarea:focus{outline:none;border-color:var(--mx-red)}',
      '.mcqx-fb{margin-top:11px;padding:0 13px;max-height:0;overflow:hidden;font-size:.86rem;line-height:1.55;border-left:3px solid transparent;transition:none}',
      '.mcqx-fb.mx-show{max-height:none;padding:11px 13px}',
      '.mcqx-fb.mx-ok{background:var(--mx-grnbg);border-left-color:var(--mx-grn)}',
      '.mcqx-fb.mx-bad{background:var(--mx-badbg);border-left-color:var(--mx-bad)}',
      '.mcqx-walk{display:block;margin-top:10px;font-family:inherit;font-weight:700;font-size:.72rem;letter-spacing:.06em;text-transform:uppercase;padding:8px 14px;border:1px solid var(--red,#6b4a2b);background:var(--red,#6b4a2b);color:#fff;border-radius:3px;cursor:pointer}',
      '.mcqx-walk:hover{filter:brightness(1.1)}',
      '.mcqx-walkrow{display:flex;flex-wrap:wrap;gap:8px}',
      '.mcqx-retry{background:var(--mx-card);color:var(--mx-ink);border-color:var(--mx-ink)}',
      '.mcqx-fb.mx-retrying{background:var(--mx-paper);border-left-color:var(--mx-ink)}',
      '.mcqx-page{display:none}.mcqx-page.mx-on,.mcqx-all .mcqx-page{display:block}',
      '.mcqx-all .mcqx-page{padding:16px 18px 4px;background:var(--mx-card);border:1px solid var(--mx-line);border-left:6px solid var(--mx-line)}',
      '.mcqx-all .mcqx-page+.mcqx-page{margin-top:18px}',
      '.mcqx-all .mcqx-page.mx-rok{border-left-color:var(--mx-grn)}',
      '.mcqx-all .mcqx-page.mx-rbad{border-left-color:var(--mx-bad)}',
      '.mcqx-all .mcqx-page.mx-rblank{border-left-style:dashed;border-left-color:var(--mx-bad)}',
      '.mcqx-prev,.mcqx-next{padding:9px 20px;border:1.5px solid var(--mx-red);border-radius:20px;background:var(--mx-card);color:var(--mx-red);cursor:pointer;font-size:.9rem;font-weight:700}',
      '.mcqx-next{background:var(--mx-red);color:#fff}',
      '.mcqx-prev:disabled,.mcqx-next:disabled{opacity:.35;cursor:default}',
      '.mx-review .mcqx-prev,.mx-review .mcqx-next{display:none}',
      '.mcqx-gate{display:none;margin:0 0 10px;padding:9px 12px;border:1px dashed var(--mx-red);font-size:.84rem;color:var(--mx-ink)}',
      '.mcqx-gate.mx-on{display:block}.mcqx-gate b{color:var(--mx-red);font-size:1rem}',
      '.mcqx-opt.mx-wait{opacity:.5}',
      /* bottom bar: reset | Question N of M (opens the question map) | Previous, Next, Reveal */
      '.mcqx-foot{position:sticky;bottom:0;z-index:20;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:10px;padding:11px 14px;margin-top:18px;background:var(--mx-paper);border-top:2px dashed var(--mx-ink)}',
      '.mcqx-foot .mx-fl{display:flex;flex-wrap:wrap;gap:8px}',
      '.mcqx-foot .mx-fc{position:relative;display:flex;justify-content:center}',
      '.mcqx-foot .mx-fr{display:flex;flex-wrap:wrap;gap:8px;justify-content:flex-end}',
      '@media (max-width:760px){.mcqx-foot{display:flex;flex-wrap:wrap;gap:8px;padding:8px 10px}.mcqx-foot .mx-fc{order:-1;flex-basis:100%}.mcqx-foot .mx-fl,.mcqx-foot .mx-fr{flex:1 1 0;flex-wrap:nowrap}',
      '.mcqx-foot .mx-fl button,.mcqx-foot .mx-fr button{padding:7px 11px;font-size:.8rem;white-space:nowrap}}',
      '.mcqx-qpill{display:flex;align-items:center;gap:9px;padding:9px 16px;background:var(--mx-ink);color:var(--mx-card);border:none;border-radius:6px;cursor:pointer;font-weight:700;font-size:.9rem;white-space:nowrap}',
      '.mcqx-qpill .mx-car{display:inline-block;font-size:.7rem;transition:transform .15s}',
      '.mcqx-qpill[aria-expanded="true"] .mx-car{transform:rotate(180deg)}',
      '.mcqx-pop{position:absolute;bottom:calc(100% + 14px);left:50%;transform:translateX(-50%);width:min(540px,88vw);padding:14px 16px;background:var(--mx-card);border:1px solid var(--mx-line);border-radius:8px;box-shadow:0 12px 34px rgba(0,0,0,.28);z-index:30}',
      '.mcqx-pop .mx-ph{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;font-weight:700}',
      '.mcqx-pop .mx-pclose{background:none;border:1px solid var(--mx-line);border-radius:4px;padding:3px 9px;cursor:pointer;color:var(--mx-ink);font-size:.8rem}',
      '.mcqx-pop .mcqx-nav{margin:0;padding:0;border:none;background:none;max-height:50vh;overflow:auto}',
      '.mcqx-reveal{padding:10px 20px;background:var(--mx-ink);color:var(--mx-card);border:none;border-radius:20px;cursor:pointer;font-weight:700;font-size:.9rem}',
      '.mcqx-reveal:disabled{opacity:.45;cursor:not-allowed}',
      '.mcqx-reset,.mcqx-newset{padding:8px 14px;background:var(--mx-card);border:1px solid var(--mx-line);border-radius:6px;cursor:pointer;color:var(--mx-ink);font-size:.82rem}',
      '.mcqx-summary{margin:4px 0 22px;padding:18px 20px;background:var(--mx-paper);border:1px solid var(--mx-line);border-top:4px solid var(--mx-red)}',
      '.mcqx-summary h4{font-family:Lato,system-ui,sans-serif;letter-spacing:-.02em;font-size:1.15rem;margin:0 0 10px}',
      '.mcqx-summary .mx-big{font-size:1.6rem;font-weight:700}',
      '.mcqx-cgrid{margin-top:14px;display:grid;grid-template-columns:1fr;gap:0;border:1px solid var(--mx-line)}',
      '.mcqx-crow{display:grid;grid-template-columns:1fr auto 2fr;align-items:center;gap:12px;padding:9px 14px;border-bottom:1px solid var(--mx-line);background:var(--mx-card)}',
      '.mcqx-crow:last-child{border-bottom:none}',
      '.mcqx-crow .mx-crl{font-family:Lato,system-ui,sans-serif;font-weight:700;font-size:.66rem;letter-spacing:.06em;text-transform:uppercase;color:var(--mx-mut)}',
      '.mcqx-crow .mx-crn{font-family:Lato,system-ui,sans-serif;font-weight:700;font-size:1.05rem;font-weight:600;color:var(--mx-ink);text-align:right}',
      '.mcqx-crow .mx-crt{font-size:.8rem;color:var(--mx-mut);line-height:1.4}',
      '.mcqx-crow.mx-over{background:var(--mx-badbg);border-left:4px solid var(--mx-bad)}',
      '.mcqx-crow.mx-over .mx-crl,.mcqx-crow.mx-over .mx-crn,.mcqx-crow.mx-over .mx-crt{color:var(--mx-bad)}',
      '.mcqx-gap{margin-top:12px;font-size:.86rem;line-height:1.55;color:var(--mx-ink)}',
      '.mcqx-hidden{display:none}'
    ].join('');
    var st = document.createElement('style'); st.id = 'mcqx-css'; st.textContent = css;
    document.head.appendChild(st);
  }

  var CONF = [
    { id: 'confident', label: 'Confident' },
    { id: 'shaky', label: 'Shaky' },
    { id: 'guessing', label: 'Guessing' }
  ];
  var CONF_LBL = { confident: 'Confident', shaky: 'Shaky', guessing: 'Guessing' };

  var CONF_UP = { confident: 'CONFIDENT', shaky: 'SHAKY', guessing: 'GUESSING' };

  // One image (simg, optional simgCap) or several (simgs, optional simgCaps), each with its caption.
  function stimImages(q) {
    var srcs = q.simgs || (q.simg ? [q.simg] : []);
    var caps = q.simgCaps || (q.simgCap ? [q.simgCap] : []);
    return srcs.map(function (src, k) {
      return imgViewer('<img src="' + esc(src) + '" alt="' + esc(caps[k] || 'Source') + '" loading="lazy" onerror="this.closest(\'.mcqx-img\').style.display=\'none\'"/>', '') +
        (caps[k] ? '<div class="mcqx-stim-cap">' + esc(caps[k]) + '</div>' : '');
    }).join('');
  }

  /* ---- image viewer: zoom out / in / reset, and Enlarge (full-window view) ----
     Zoom is the image's width as a share of its box (ZMIN..ZMAX); the box scrolls when
     zoomed in. Clicking the image also opens the enlarged view; Esc or Close shuts it. */
  var ZMIN = 50, ZMAX = 400, ZSTEP = 25;
  function imgViewer(imgHTML, extra) {
    return '<div class="mcqx-img" data-z="100"><div class="mcqx-itools">' + (extra || '') +
      '<button type="button" class="mx-zout" title="Zoom out" aria-label="Zoom out">&minus;</button>' +
      '<span class="mx-zpct">100%</span>' +
      '<button type="button" class="mx-zin" title="Zoom in" aria-label="Zoom in">+</button>' +
      '<button type="button" class="mx-zreset">Reset</button>' +
      (extra ? '<button type="button" class="mx-lbclose">&#10005; Close</button>'
             : '<button type="button" class="mx-zbig" title="Open the image larger">&#10530; Enlarge</button>') +
      '</div><div class="mcqx-ivp">' + imgHTML + '</div></div>';
  }
  function setZoom(box, z) {
    z = Math.max(ZMIN, Math.min(ZMAX, z));
    box.dataset.z = z;
    var img = box.querySelector('img'), base = +(box.dataset.base || 100);
    if (img) img.style.width = (base * z / 100) + '%';
    box.querySelector('.mx-zpct').textContent = z + '%';
  }
  function closeLightbox() {
    var lb = document.getElementById('mcqx-lb');
    if (lb) lb.remove();
    document.removeEventListener('keydown', lbKey);
  }
  function lbKey(e) { if (e.key === 'Escape') closeLightbox(); }
  function openLightbox(img) {
    closeLightbox();
    var lb = document.createElement('div');
    lb.id = 'mcqx-lb'; lb.className = 'mcqx-lb mcqx';
    lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-label', 'Enlarged image');
    lb.innerHTML = imgViewer('<img src="' + esc(img.getAttribute('src')) + '" alt="' + esc(img.alt) + '"/>',
      '<span class="mx-lbcap">' + esc(img.alt) + '</span>');
    document.body.appendChild(lb);
    // Start at "fit": as wide as the window allows without the image running past its height.
    var box = lb.querySelector('.mcqx-img'), vp = lb.querySelector('.mcqx-ivp'), big = lb.querySelector('img');
    function fit() {
      var w = vp.clientWidth - 32, h = vp.clientHeight - 32;
      if (big.naturalWidth && w > 0 && h > 0) box.dataset.base = Math.min(100, (h / big.naturalHeight) * big.naturalWidth / w * 100);
      setZoom(box, 100);
    }
    if (big.complete) fit(); else big.addEventListener('load', fit);
    document.addEventListener('keydown', lbKey);
    lb.querySelector('.mx-lbclose').focus();
  }
  document.addEventListener('click', function (e) {
    var t = e.target.closest ? e.target.closest('.mcqx-itools button, .mcqx-ivp img') : null;
    if (!t) { if (e.target.id === 'mcqx-lb') closeLightbox(); return; }
    var box = t.closest('.mcqx-img'), z = +(box.dataset.z || 100);
    if (t.tagName === 'IMG') { if (!t.closest('#mcqx-lb')) openLightbox(t); return; }
    if (t.classList.contains('mx-zin')) setZoom(box, z + ZSTEP);
    else if (t.classList.contains('mx-zout')) setZoom(box, z - ZSTEP);
    else if (t.classList.contains('mx-zreset')) setZoom(box, 100);
    else if (t.classList.contains('mx-zbig')) openLightbox(box.querySelector('img'));
    else if (t.classList.contains('mx-lbclose')) closeLightbox();
  });

  /* ---- the session ---- */
  function runSession(ctx, pool, label) {
    var mode = ctx.mode;                 // 'quick' | 'test'
    var calib = ctx.calibration !== false; // confidence tap is MANDATORY in BOTH modes
    var qs = pool.map(function (ref) { return { ref: ref, q: resolve(ref) }; })
                 .filter(function (o) { return o.q; });
    var answered = new Array(qs.length);   // chosen option index or undefined
    var conf = new Array(qs.length);       // confidence id
    var graded = new Array(qs.length);     // quick mode: this item revealed/scored
    var crossed = qs.map(function () { return {}; }); // choices the student crossed out
    var reasoning = false;                 // test mode: in the reasoning-unlock stage
    var revealed = false;                  // test mode: correct answers unlocked


    ctx.home.classList.add('mcqx-hidden');
    ctx.session.classList.remove('mcqx-hidden');
    ctx.hideIntro();
    ctx.setFull(ctx.full);
    ctx.titleEl.textContent = label || 'Questions';
    ctx.scoreEl.classList.toggle('mcqx-hidden', mode !== 'quick');

    var flagged = [];                      // "Mark for Review" bookmarks
    var footHTML = '<div class="mx-fl">' + (mode === 'test' ? '<button type="button" class="mcqx-reveal">Reveal All &amp; Score</button>' : '') +
      '<button type="button" class="mcqx-reset">↺ Reset &amp; Retry</button>';
    if (ctx.opts.regenerate) footHTML += '<button type="button" class="mcqx-newset">🎲 ' + esc(ctx.opts.newSetLabel || 'New Set') + '</button>';
    footHTML += '</div><div class="mx-fc"><button type="button" class="mcqx-qpill" aria-expanded="false"><span class="mx-pt"></span><span class="mx-car">&#9650;</span></button>' +
      '<div class="mcqx-pop mcqx-hidden"><div class="mx-ph"><span>' + esc(label || 'Questions') + '</span><button type="button" class="mx-pclose">Close</button></div>' +
      navHTML('') + '</div></div>' +
      '<div class="mx-fr"><button type="button" class="mcqx-prev">Previous</button><button type="button" class="mcqx-next">Next</button>';
    footHTML += '</div>';
    ctx.foot.innerHTML = footHTML;
    ctx.session.classList.remove('mx-review');

    function navHTML(cls) {
      var s = '<div class="mcqx-nav' + cls + '"><div class="mx-nl"></div>';
      qs.forEach(function (o, i) { s += '<button type="button" class="mcqx-navb" data-n="' + i + '">' + (i + 1) + '</button>'; });
      return s + '</div>';
    }
    var pill = ctx.foot.querySelector('.mcqx-qpill'), pop = ctx.foot.querySelector('.mcqx-pop');
    function setPop(open) {
      pop.classList.toggle('mcqx-hidden', !open);
      pill.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
    pill.addEventListener('click', function () { setPop(pop.classList.contains('mcqx-hidden')); });
    pop.querySelector('.mx-pclose').addEventListener('click', function () { setPop(false); });
    if (ctx.offPop) document.removeEventListener('click', ctx.offPop);
    ctx.offPop = function (e) { if (!pop.isConnected) return; if (!e.target.closest || !e.target.closest('.mx-fc')) setPop(false); };
    document.addEventListener('click', ctx.offPop);
    ctx.foot.querySelector('.mcqx-prev').addEventListener('click', function () { showPage(cur - 1); });
    ctx.foot.querySelector('.mcqx-next').addEventListener('click', function () { showPage(cur + 1); });

    function toggleFlag(i) {
      flagged[i] = !flagged[i];
      var b = ctx.body.querySelector('.mcqx-flag[data-i="' + i + '"]');
      if (b) { b.setAttribute('aria-pressed', flagged[i] ? 'true' : 'false'); b.lastChild.textContent = flagged[i] ? 'Marked for Review' : 'Mark for Review'; }
      updateNav();
    }

    function record(i) {
      var o = qs[i], ok = answered[i] === o.q.c;
      recordReview(o.ref, o.q, answered[i], ok, conf[i] || null);
    }

    function progress() {
      var n = answered.filter(function (v) { return v != null; }).length;
      ctx.progEl.textContent = n + ' of ' + qs.length + ' answered';
      ctx.pbarF.style.width = qs.length ? (n / qs.length * 100) + '%' : '0%';
      if (mode === 'quick') {
        var right = 0, done = 0;
        qs.forEach(function (o, i) { if (graded[i]) { done++; if (answered[i] === o.q.c) right++; } });
        ctx.scoreEl.textContent = right + ' / ' + done;
      } else if (!reasoning && !revealed) {
        var rv = ctx.foot.querySelector('.mcqx-reveal');
        if (rv) {
          var missing = qs.some(function (o, i) { return calib && answered[i] != null && !conf[i]; });
          rv.disabled = (n === 0) || missing;
          rv.title = missing ? 'Rate your confidence on every answered question first' : '';
        }
      }
      updateNav();
    }

    /* ---- question map: one numbered square per question, colored by its state ---- */
    function updateNav() {
      var all = ctx.body.classList.contains('mcqx-all');
      var pt = ctx.foot.querySelector('.mx-pt');
      if (pt) pt.textContent = all ? 'Jump to a question' : 'Question ' + (cur + 1) + ' of ' + qs.length;
      ctx.session.querySelectorAll('.mcqx-nav').forEach(function (nav) { paintNav(nav, all); });
    }
    function paintNav(nav, all) {
      nav.querySelectorAll('.mcqx-navb').forEach(function (b) {
        var i = +b.dataset.n, a = answered[i] != null, ok = a && answered[i] === qs[i].q.c, st = '';
        if (revealed) st = !a ? 'mx-blank' : ok ? 'mx-ok' : 'mx-bad';
        else if (mode === 'quick' && graded[i]) st = ok ? 'mx-ok' : 'mx-bad';
        else if (a) st = 'mx-ans' + (calib && !conf[i] ? ' mx-noconf' : '');
        b.className = 'mcqx-navb ' + st + (!all && i === cur ? ' mx-cur' : '') + (flagged[i] ? ' mx-flag' : '');
        b.title = 'Question ' + (i + 1) + (revealed ? (!a ? ': left blank' : ok ? ': correct' : ': missed')
          : (mode === 'quick' && graded[i]) ? (ok ? ': correct' : ': missed') : a ? (calib && !conf[i] ? ': answered, needs a confidence tap' : ': answered') : ': not answered yet') +
          (flagged[i] ? ' (marked for review)' : '');
      });
      var lbl = nav.querySelector('.mx-nl');
      lbl.innerHTML = '<b>Questions</b>' + (revealed || mode === 'quick'
        ? 'Green = correct &middot; red = missed' + (revealed ? ' &middot; dashed = left blank' : '')
        : 'Dark = answered &middot; red dot = still needs a confidence tap') +
        ' &middot; red corner = marked for review &middot; tap a number to jump to it';
    }
    function goTo(n) {
      setPop(false);
      if (!ctx.body.classList.contains('mcqx-all')) { showPage(n); return; }
      var p = ctx.body.querySelector('.mcqx-page[data-p="' + n + '"]');
      if (!p) return;
      if (ctx.full) ctx.body.scrollTo({ top: p.getBoundingClientRect().top - ctx.body.getBoundingClientRect().top + ctx.body.scrollTop - 12, behavior: 'smooth' });
      else window.scrollTo({ top: p.getBoundingClientRect().top + window.pageYOffset - 90, behavior: 'smooth' });
    }

    /* ---- cross out: rule out a choice before answering ----
       Crossing out a choice greys and strikes it; tapping again brings it back. Picking a
       crossed-out choice un-crosses it, and crossing out the choice you picked clears that
       pick. Locked once the question is graded (Quick Check) or answers are locked in (Test). */
    function setX(i, j, on) {
      if (isLocked(i)) return;
      crossed[i][j] = on;
      var row = ctx.body.querySelector('.mcqx-orow[data-i="' + i + '"][data-j="' + j + '"]');
      if (row) {
        row.classList.toggle('mx-x', on);
        var xb = row.querySelector('.mcqx-xbtn');
        xb.setAttribute('aria-pressed', on ? 'true' : 'false');
        xb.title = (on ? 'Bring back choice ' : 'Cross out choice ') + L[j];
        xb.innerHTML = on ? '<span class="mx-xu">Undo</span>' : '<span class="mx-xc">' + L[j] + '</span>';
      }
      if (on && answered[i] === j && !graded[i]) {
        answered[i] = undefined;
        optsOf(i).forEach(function (b) { b.classList.remove('mx-sel'); });
        progress();
      }
    }
    function isLocked(i) { return (mode === 'quick' && graded[i] && !retrying[i]) || reasoning || revealed; }

    // "Your answer" / "Correct answer" tags on a graded question's choices.
    function tagOpts(i, j) {
      var q = qs[i].q;
      optsOf(i).forEach(function (b) {
        var bj = +b.dataset.j, t = b.querySelector('.mx-tag');
        if (!t) return;
        t.className = 'mx-tag'; t.textContent = '';
        if (bj === j) { t.classList.add(j === q.c ? 'mx-tok' : 'mx-tbad'); t.textContent = (j === q.c ? '✓' : '✗') + ' Your answer'; }
        else if (bj === q.c) { t.classList.add('mx-tkey'); t.textContent = 'Correct answer'; }
      });
    }

    // Test Mode review: banner at the top of each question and a colored edge on its card.
    function setVerdict(i) {
      var q = qs[i].q, j = answered[i], a = j != null, ok = a && j === q.c;
      var vd = document.getElementById(ctx.uid + '-vd' + i);
      var pg = ctx.body.querySelector('.mcqx-page[data-p="' + i + '"]');
      if (pg) { pg.classList.remove('mx-rok', 'mx-rbad', 'mx-rblank'); pg.classList.add(!a ? 'mx-rblank' : ok ? 'mx-rok' : 'mx-rbad'); }
      if (!vd) return;
      vd.className = 'mcqx-verdict mx-on ' + (!a ? 'mx-vblank' : ok ? 'mx-vok' : 'mx-vbad');
      vd.innerHTML = '<span class="mx-vh">' + (i + 1) + '. ' + (!a ? '&#9675; Left blank' : ok ? '&#10003; Correct' : '&#10007; Missed') + '</span>' +
        '<span class="mx-vd">' + (a ? 'You chose <b>' + L[j] + '</b>' + (ok ? '' : ' &middot; ') : '') +
        (ok ? '' : 'Correct answer: <b>' + L[q.c] + '</b>') +
        (a && calib && conf[i] ? ' &middot; You felt: <b>' + CONF_LBL[conf[i]] + '</b>' : '') + '</span>';
    }

    function render() {
      var h = '<div class="mcqx-summary mcqx-hidden" id="' + ctx.uid + '-sum"></div>' + navHTML(' mx-inline');
      // Questions that share a source in a row form a set: "Questions 1 through 3 refer to the following."
      var setEnd = [];
      for (var k = qs.length - 1; k >= 0; k--) setEnd[k] = (k < qs.length - 1 && qs[k + 1].q.s === qs[k].q.s) ? setEnd[k + 1] : k;
      var setStart = 0;
      // One page per question, each with its own copy of the source (see showPage).
      qs.forEach(function (o, i) {
        var q = o.q;
        if (i === 0 || qs[i - 1].q.s !== q.s) setStart = i;
        h += '<div class="mcqx-page" data-p="' + i + '"><div class="mcqx-verdict" id="' + ctx.uid + '-vd' + i + '"></div>' +
             '<div class="mcqx-split' + (q.s ? '' : ' mx-solo') + '">';
        if (q.s) {
          h += '<div class="mcqx-left"><div class="mcqx-sset">' + (setEnd[i] === setStart
                 ? 'Question ' + (i + 1) + ' refers to the following.'
                 : 'Questions ' + (setStart + 1) + ' through ' + (setEnd[i] + 1) + ' refer to the following.') + '</div>' +
               '<div class="mcqx-stim"><div class="mcqx-stim-src">' + esc(q.sl) + '</div>' +
               stimImages(q) +
               '<div class="mcqx-stim-txt"><p>' + esc(q.s).replace(/\n/g, '</p><p>') + '</p></div></div></div>';
        }
        h += '<div class="mcqx-right"><div class="mcqx-qhead"><span class="mcqx-qbox">' + (i + 1) + '</span>' +
             '<button type="button" class="mcqx-flag" data-i="' + i + '" aria-pressed="false">' +
             '<svg viewBox="0 0 14 18" aria-hidden="true"><path d="M1 1h12v16l-6-4.5L1 17z"/></svg><span>Mark for Review</span></button></div>' +
             '<div class="mcqx-qcard" id="' + ctx.uid + '-qc' + i + '">' +
             '<div class="mcqx-qtxt">' + esc(q.q) + '</div>' +
             '<div class="mcqx-gate" id="' + ctx.uid + '-gt' + i + '" aria-live="polite"></div><div class="mcqx-opts">';
        q.o.forEach(function (x, j) {
          h += '<div class="mcqx-orow" data-i="' + i + '" data-j="' + j + '">' +
               '<button type="button" class="mcqx-opt" data-i="' + i + '" data-j="' + j + '">' +
               '<span class="mx-ol">' + L[j] + '</span><span class="mx-ot">' + esc(x) + '</span><span class="mx-tag"></span></button>' +
               '<button type="button" class="mcqx-xbtn" data-i="' + i + '" data-j="' + j + '" aria-pressed="false" title="Cross out choice ' + L[j] + '">' +
               '<span class="mx-xc">' + L[j] + '</span></button></div>';
        });
        h += '</div>';
        if (calib) {
          h += '<div class="mcqx-conf mcqx-conf-hide" data-i="' + i + '"><span class="mx-clbl">Before you check: how sure are you?</span><div class="mcqx-chips">';
          CONF.forEach(function (c) { h += '<button type="button" class="mcqx-chip" data-i="' + i + '" data-conf="' + c.id + '">' + CONF_UP[c.id] + '</button>'; });
          h += '</div></div>';
        }
        h += '<div class="mcqx-reason mcqx-hidden" id="' + ctx.uid + '-rz' + i + '"></div>';
        h += '<div class="mcqx-fb" id="' + ctx.uid + '-fb' + i + '"></div></div></div></div></div>';
      });
      ctx.body.classList.remove('mcqx-all');
      ctx.body.innerHTML = h;
      ctx.body.querySelectorAll('.mcqx-flag').forEach(function (b) {
        b.addEventListener('click', function () { toggleFlag(+this.dataset.i); });
      });
      ctx.body.querySelectorAll('.mcqx-opt').forEach(function (b) {
        b.addEventListener('click', function () { pick(+this.dataset.i, +this.dataset.j); });
      });
      ctx.body.querySelectorAll('.mcqx-chip').forEach(function (b) {
        b.addEventListener('click', function () { setConf(+this.dataset.i, this.dataset.conf); });
      });
      ctx.body.querySelectorAll('.mcqx-xbtn').forEach(function (b) {
        b.addEventListener('click', function () { setX(+this.dataset.i, +this.dataset.j, !crossed[+this.dataset.i][+this.dataset.j]); });
      });
      ctx.session.querySelectorAll('.mcqx-navb').forEach(function (b) {
        b.addEventListener('click', function () { goTo(+this.dataset.n); });
      });
      gateLeft = qs.map(function () { return GATE_MS; });
      showPage(0);
      clearInterval(ctx.gateTimer);
      ctx.gateTimer = setInterval(gateTick, 250);
      progress();
    }

    /* ---- one question per screen, and a 10-second read before answering ----
       Each question shows on its own page with its source. Its choices stay greyed out,
       with a countdown, until the page has been on screen for GATE_MS; the clock runs only
       while that page shows and the browser tab is visible, and once a question opens it
       stays open. Test Mode's review (after Reveal All) shows every page at once. */
    var GATE_MS = 10000, cur = 0, gateLeft = [];
    function showPage(k) {
      cur = Math.max(0, Math.min(qs.length - 1, k));
      ctx.body.querySelectorAll('.mcqx-page').forEach(function (p) { p.classList.toggle('mx-on', +p.dataset.p === cur); });
      ctx.foot.querySelector('.mcqx-prev').disabled = cur === 0;
      ctx.foot.querySelector('.mcqx-next').disabled = cur === qs.length - 1;
      syncGate(cur);
      updateNav();
      var top = ctx.body.getBoundingClientRect().top;
      if (top < 0) window.scrollBy(0, top - 90);
    }
    function syncGate(i) {
      var el = document.getElementById(ctx.uid + '-gt' + i), wait = gateLeft[i] > 0;
      if (el) {
        el.classList.toggle('mx-on', wait);
        el.innerHTML = wait ? '&#9201; Read the source and the question. You can answer in <b>' + Math.ceil(gateLeft[i] / 1000) + '</b> s.' : '';
      }
      var locked = isLocked(i);
      optsOf(i).forEach(function (b) { b.disabled = wait || locked; b.classList.toggle('mx-wait', wait); });
      ctx.body.querySelectorAll('.mcqx-xbtn[data-i="' + i + '"]').forEach(function (b) { b.disabled = locked; });
    }
    function gateTick() {
      if (!ctx.body.isConnected) { clearInterval(ctx.gateTimer); return; }
      if (ctx.body.classList.contains('mcqx-all') || document.visibilityState !== 'visible' || !(gateLeft[cur] > 0)) return;
      gateLeft[cur] = Math.max(0, gateLeft[cur] - 250);
      syncGate(cur);
    }

    function optsOf(i) { return ctx.body.querySelectorAll('.mcqx-opt[data-i="' + i + '"]'); }
    function showConf(i) {
      var c = ctx.body.querySelector('.mcqx-conf[data-i="' + i + '"]');
      if (c) c.classList.remove('mcqx-conf-hide');
    }

    function setConf(i, id) {
      if (revealed || reasoning) return;
      if (mode === 'quick' && graded[i]) return;   // locked after grading
      conf[i] = id;
      ctx.body.querySelectorAll('.mcqx-chip[data-i="' + i + '"]').forEach(function (b) {
        b.classList.toggle('mx-on', b.dataset.conf === id);
      });
      if (mode === 'quick') { if (answered[i] != null) gradeQuick(i); }
      else { progress(); }
    }

    function showFeedback(i) {
      var q = qs[i].q, j = answered[i], ok = j === q.c;
      var fb = document.getElementById(ctx.uid + '-fb' + i);
      if (fb) {
        fb.className = 'mcqx-fb mx-show ' + (ok ? 'mx-ok' : 'mx-bad');
        fb.innerHTML = '<strong>' + (ok ? '✓ Correct.' : '✗ Incorrect.') + '</strong> ' + (q.e || '');
        if (!ok) offerWalk(i, fb);
      }
    }

    /* ---- wrong answer: walkthrough, then a practice-only retry ----
       A wrongly answered question that has a step-by-step walkthrough (sbmcq.js +
       walkthrough-data.js) gets a "Walk me through it" button. In Quick Check, opening it
       adds "Try again": the question resets (fresh 10-second read) for one more pick. The
       retry is practice only: it is not recorded, so it never counts toward the games
       unlock and the score keeps the first answer. */
    var retrying = [];
    function offerWalk(i, fb) {
      var wid = itemIdFor(qs[i].ref);
      if (!(window.SBMCQ && SBMCQ.has(wid))) return;
      var row = document.createElement('div');
      row.className = 'mcqx-walkrow';
      var wb = document.createElement('button');
      wb.type = 'button'; wb.className = 'mcqx-walk'; wb.textContent = 'Walk me through it';
      row.appendChild(wb);
      fb.appendChild(row);
      wb.addEventListener('click', function () {
        var tb = mode === 'quick' ? row.querySelector('.mcqx-retry') : null;
        if (mode === 'quick' && !tb) {
          tb = document.createElement('button');
          tb.type = 'button'; tb.className = 'mcqx-walk mcqx-retry'; tb.textContent = 'Try again';
          tb.addEventListener('click', function () { startRetry(i); });
          row.appendChild(tb);
        }
        SBMCQ.open(wid, function () { if (tb && tb.isConnected) tb.focus(); });
      });
    }
    function startRetry(i) {
      retrying[i] = true;
      optsOf(i).forEach(function (b) { b.classList.remove('mx-correct', 'mx-reveal', 'mx-wrong', 'mx-sel'); });
      optsOf(i).forEach(function (b) { var t = b.querySelector('.mx-tag'); if (t) { t.className = 'mx-tag'; t.textContent = ''; } });
      var fb = document.getElementById(ctx.uid + '-fb' + i);
      if (fb) {
        fb.className = 'mcqx-fb mx-show mx-retrying';
        fb.innerHTML = '<strong>Try again.</strong> Pick the answer you now think is right. ' +
          'This try is practice only: it does not count toward unlocking games.';
      }
      gateLeft[i] = GATE_MS;
      syncGate(i);
    }
    function retryPick(i, j) {
      var q = qs[i].q, ok = j === q.c;
      retrying[i] = false;
      optsOf(i).forEach(function (b) {
        var bj = +b.dataset.j; b.disabled = true;
        if (bj === q.c) b.classList.add(ok ? 'mx-correct' : 'mx-reveal');
        if (bj === j && !ok) b.classList.add('mx-wrong');
      });
      tagOpts(i, j);
      syncGate(i);
      var fb = document.getElementById(ctx.uid + '-fb' + i);
      if (!fb) return;
      fb.className = 'mcqx-fb mx-show ' + (ok ? 'mx-ok' : 'mx-bad');
      fb.innerHTML = ok
        ? '<strong>✓ Right this time.</strong> Practice only, so it does not count toward unlocking games.'
        : '<strong>✗ Not yet.</strong> The answer is ' + L[q.c] + '. ' + (q.e || '');
      if (!ok) offerWalk(i, fb);
    }

    function markGraded(i) {
      var q = qs[i].q, j = answered[i], ok = j === q.c;
      optsOf(i).forEach(function (b) {
        var bj = +b.dataset.j; b.disabled = true;
        b.classList.remove('mx-sel');
        if (bj === q.c) b.classList.add(ok ? 'mx-correct' : 'mx-reveal');
        if (bj === j && !ok) b.classList.add('mx-wrong');
      });
      tagOpts(i, j);
      showFeedback(i);
    }

    // Test Mode: a blank question still shows its correct answer in the review.
    function markBlank(i) {
      var q = qs[i].q;
      optsOf(i).forEach(function (b) { b.disabled = true; if (+b.dataset.j === q.c) b.classList.add('mx-reveal'); });
      tagOpts(i, null);
      var fb = document.getElementById(ctx.uid + '-fb' + i);
      if (fb) { fb.className = 'mcqx-fb mx-show mx-bad'; fb.innerHTML = '<strong>Left blank.</strong> ' + (q.e || ''); }
    }

    /* ---- QUICK CHECK: pick -> confidence tap -> grade ---- */
    function pick(i, j) {
      if (crossed[i][j] && !isLocked(i)) setX(i, j, false);
      if (mode === 'quick') {
        if (retrying[i]) { retryPick(i, j); return; }
        if (graded[i]) return;
        answered[i] = j;
        optsOf(i).forEach(function (b) { b.classList.toggle('mx-sel', +b.dataset.j === j); });
        showConf(i);                          // the confidence commitment is required next
        if (conf[i] || !calib) gradeQuick(i); // already rated, or no confidence chips on this mount
        progress();
      } else {
        if (reasoning || revealed) return;
        answered[i] = j;
        optsOf(i).forEach(function (b) { b.classList.toggle('mx-sel', +b.dataset.j === j); });
        showConf(i);
        progress();
      }
    }

    function gradeQuick(i) {
      if (graded[i]) return;
      graded[i] = true;
      markGraded(i);
      syncGate(i);
      ctx.body.querySelectorAll('.mcqx-chip[data-i="' + i + '"]').forEach(function (b) { b.disabled = true; });
      record(i);
      progress();
    }

    /* ---- TEST MODE: reveal -> reasoning gate -> unlock ---- */
    function toReasoning() {
      if (reasoning || revealed) return;
      if (qs.some(function (o, i) { return calib && answered[i] != null && !conf[i]; })) return; // guarded by disabled btn too
      var blank = qs.filter(function (o, i) { return answered[i] == null; }).length;
      if (blank && !window.confirm(blank + ' of ' + qs.length + ' questions are still blank. Blank questions count as wrong in your score. Lock in your answers anyway?')) return;
      reasoning = true;
      ctx.body.classList.add('mcqx-all');   // the review shows every question at once
      ctx.session.classList.add('mx-review');
      ctx.body.querySelectorAll('.mcqx-opt').forEach(function (b) { b.disabled = true; });
      ctx.body.querySelectorAll('.mcqx-chip').forEach(function (b) { b.disabled = true; });
      ctx.body.querySelectorAll('.mcqx-xbtn').forEach(function (b) { b.disabled = true; });
      updateNav();
      qs.forEach(function (o, i) {
        if (answered[i] == null) return;
        var ok = answered[i] === o.q.c;
        var needNote = !ok || conf[i] === 'guessing';
        var rz = document.getElementById(ctx.uid + '-rz' + i);
        if (!rz) return;
        var status = 'Your answer: <strong>' + L[answered[i]] + '</strong> &middot; Confidence: <strong>' +
          (CONF_UP[conf[i]] || '-') + '</strong> &middot; ' +
          (ok ? '<span class="mx-rok">&#10003; correct</span>' : '<span class="mx-rbad">&#10007; incorrect</span>');
        var html = '<div class="mx-rst">' + status + '</div>';
        if (needNote) {
          html += '<textarea data-i="' + i + '" placeholder="One line: why did you pick that, or what made it a guess?"></textarea>';
        }
        rz.className = 'mcqx-reason' + (needNote ? ' mx-need' : '');
        rz.innerHTML = html;
      });
      ctx.body.querySelectorAll('.mcqx-reason textarea').forEach(function (t) {
        t.addEventListener('input', validateNotes);
      });
      var rv = ctx.foot.querySelector('.mcqx-reveal');
      if (rv) rv.textContent = 'Unlock Correct Answers';
      // Banner note before the questions so the student knows what to do.
      var sumEl = document.getElementById(ctx.uid + '-sum');
      if (sumEl) {
        sumEl.classList.remove('mcqx-hidden');
        sumEl.innerHTML = '<h4>Before the answers unlock</h4><div class="mcqx-gap">Your answers are locked in. ' +
          'For every question you got wrong or tapped <strong>Guessing</strong> on, write one line on what tripped you up, ' +
          'then unlock the correct answers.</div>';
      }
      validateNotes();
      var firstNeed = ctx.body.querySelector('.mcqx-reason.mx-need');
      if (firstNeed) firstNeed.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function validateNotes() {
      var ok = true;
      ctx.body.querySelectorAll('.mcqx-reason.mx-need textarea').forEach(function (t) {
        if (!t.value.trim()) ok = false;
      });
      var rv = ctx.foot.querySelector('.mcqx-reveal');
      if (rv) rv.disabled = !ok;
    }

    function finalReveal() {
      if (revealed) return;
      revealed = true;
      qs.forEach(function (o, i) {
        setVerdict(i);
        var rz = document.getElementById(ctx.uid + '-rz' + i);
        if (rz) rz.querySelectorAll('.mx-rst').forEach(function (s) { s.remove(); }); // the verdict banner says it now
        if (answered[i] == null) { markBlank(i); return; }
        markGraded(i);
        record(i);
      });
      ctx.body.querySelectorAll('.mcqx-reason').forEach(function (rz) { if (!rz.querySelector('textarea')) rz.classList.add('mcqx-hidden'); });
      updateNav();
      updateSummary();
      var rv = ctx.foot.querySelector('.mcqx-reveal'); if (rv) rv.remove();
      var sumEl = document.getElementById(ctx.uid + '-sum');
      if (sumEl) sumEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    /* ---- calibration summary (exact 2x2, both modes) ---- */
    function crow(label, n, tag, over) {
      return '<div class="mcqx-crow' + (over ? ' mx-over' : '') + '">' +
        '<span class="mx-crl">' + label + '</span>' +
        '<span class="mx-crn">' + n + '</span>' +
        '<span class="mx-crt">' + (tag || '') + '</span></div>';
    }
    // Test Mode results card, shown after Reveal All & Score.
    function updateSummary() {
      var sumEl = document.getElementById(ctx.uid + '-sum');
      if (!sumEl) return;
      var b = { confident: [0, 0], shaky: [0, 0], guessing: [0, 0] }; // [correct, total]
      var right = 0, tot = 0;
      qs.forEach(function (o, i) {
        var counted = mode === 'quick' ? graded[i] : (revealed && answered[i] != null);
        if (!counted) return;
        tot++;
        var ok = answered[i] === o.q.c; if (ok) right++;
        var k = conf[i]; if (b[k]) { b[k][1]++; if (ok) b[k][0]++; }
      });
      if (!tot) { sumEl.classList.add('mcqx-hidden'); return; }
      var c = b.confident, s = b.shaky, g = b.guessing;
      var cWrong = c[1] - c[0], sWrong = s[1] - s[0], gWrong = g[1] - g[0];
      // Test Mode scores the whole set: a blank question counts as wrong.
      var skipped = 0;
      if (mode === 'test') { skipped = qs.length - tot; tot = qs.length; }
      var pct = Math.round(right / tot * 100);
      var rows =
        crow('CONFIDENT + Correct', c[0], c[0] ? '&#10003; well-calibrated' : '') +
        crow('CONFIDENT + Wrong', cWrong, cWrong ? '&#9888; overconfident: worth a second look' : '', cWrong > 0) +
        crow('SHAKY + Correct', s[0], '') +
        crow('SHAKY + Wrong', sWrong, '') +
        crow('GUESSING + Correct', g[0], g[0] ? 'lucky: treat as unlearned' : '') +
        crow('GUESSING + Wrong', gWrong, '');
      var head = '<h4>Results &amp; Calibration</h4><div class="mx-big">' + right + ' / ' + tot +
            ' <span style="font-size:1rem;color:var(--muted)">(' + pct + '%)</span></div>' +
            (skipped ? '<div class="mcqx-gap">' + skipped + ' question' + (skipped === 1 ? '' : 's') +
              ' left blank, counted as wrong. The calibration rows below cover only the questions you answered.</div>' : '');
      var missed = tot - right - skipped;
      var stats = '<div class="mcqx-stats">' +
        '<div class="mcqx-stat mx-sok"><b>' + right + '</b><span>Correct</span></div>' +
        '<div class="mcqx-stat mx-sbad"><b>' + missed + '</b><span>Missed</span></div>' +
        '<div class="mcqx-stat"><b>' + skipped + '</b><span>Left blank</span></div></div>';
      var filt = '<div class="mcqx-filter"><span class="mx-lbl">Show</span>' +
        '<button type="button" class="mcqx-modebtn active" data-f="all">All ' + qs.length + '</button>' +
        '<button type="button" class="mcqx-modebtn" data-f="miss">Missed &amp; blank ' + (missed + skipped) + '</button>' +
        '<button type="button" class="mcqx-modebtn" data-f="ok">Correct ' + right + '</button></div>';
      sumEl.innerHTML = head + stats + '<div class="mcqx-cgrid">' + rows + '</div>' + filt;
      sumEl.classList.remove('mcqx-hidden');
      sumEl.querySelectorAll('[data-f]').forEach(function (b) {
        b.addEventListener('click', function () {
          var f = b.dataset.f;
          sumEl.querySelectorAll('[data-f]').forEach(function (x) { x.classList.toggle('active', x === b); });
          ctx.body.querySelectorAll('.mcqx-page').forEach(function (p) {
            var ok = p.classList.contains('mx-rok');
            p.classList.toggle('mx-filt', (f === 'miss' && ok) || (f === 'ok' && !ok));
          });
        });
      });
    }

    ctx.foot.querySelector('.mcqx-reset').addEventListener('click', function () { runSession(ctx, pool, label); });
    var rvBtn = ctx.foot.querySelector('.mcqx-reveal');
    if (rvBtn) rvBtn.addEventListener('click', function () { if (!reasoning) toReasoning(); else finalReveal(); });
    var nsBtn = ctx.foot.querySelector('.mcqx-newset');
    if (nsBtn) nsBtn.addEventListener('click', function () {
      var np = ctx.opts.regenerate(); if (np && np.length) runSession(ctx, np, label);
    });

    render();
    ctx.session.scrollIntoView ? window.scrollTo(0, 0) : null;
  }

  /* ---- home screen (per-unit) ---- */
  function buildHome(ctx) {
    var u = units()[String(ctx.opts.unit)];
    var h = '';
    if (ctx.opts.showModeToggle !== false) {
      h += '<div class="mcqx-modebar"><span class="mx-lbl">Mode</span>' +
           '<button type="button" class="mcqx-modebtn" data-mode="quick">&#9889; Quick Check</button>' +
           '<button type="button" class="mcqx-modebtn" data-mode="test">&#128221; Test Mode</button>' +
           '<div class="mcqx-modehint"></div></div>';
    }
    h += '<div class="mcqx-topics">';
    (u.topics || []).forEach(function (t) {
      var n = (u.questions[t.id] || []).length;
      h += '<button type="button" class="mcqx-tc" data-topic="' + t.id + '"' + (n ? '' : ' disabled style="opacity:.5"') + '>' +
           '<div class="mx-tn">Topic ' + t.id + '</div><div class="mx-tt">' + t.name + '</div>' +
           '<div class="mx-tcnt">' + n + ' question' + (n === 1 ? '' : 's') + '</div></button>';
    });
    h += '</div><div class="mcqx-actions">' +
         '<button type="button" class="mcqx-bigbtn mx-primary" data-act="all">&#128203; Practice All Questions</button>' +
         '<button type="button" class="mcqx-bigbtn" data-act="mixed">&#9889; Quick Mixed Quiz</button></div>';
    ctx.home.innerHTML = h;

    function syncMode() {
      ctx.home.querySelectorAll('.mcqx-modebtn').forEach(function (b) { b.classList.toggle('active', b.dataset.mode === ctx.mode); });
      var hint = ctx.home.querySelector('.mcqx-modehint');
      if (hint) hint.textContent = ctx.mode === 'test'
        ? 'Test Mode: answer the whole set, commit your confidence, and see nothing until you write a line on your misses and Unlock, closest to real exam conditions.'
        : 'Quick Check: pick an answer, commit how sure you are, then get instant right/wrong, the confidence tap is what builds calibration.';
    }
    syncMode();
    ctx.home.querySelectorAll('.mcqx-modebtn').forEach(function (b) {
      b.addEventListener('click', function () { ctx.mode = b.dataset.mode; syncMode(); ctx.hideIntro(); });
    });
    ctx.home.querySelectorAll('.mcqx-tc').forEach(function (b) {
      b.addEventListener('click', function () {
        var tid = b.dataset.topic;
        runSession(ctx, APWH.poolFromUnit(ctx.opts.unit, { topic: tid }), 'Topic ' + tid);
      });
    });
    ctx.home.querySelector('[data-act="all"]').addEventListener('click', function () {
      runSession(ctx, APWH.poolFromUnit(ctx.opts.unit, {}), 'All Unit ' + ctx.opts.unit + ' Questions');
    });
    ctx.home.querySelector('[data-act="mixed"]').addEventListener('click', function () {
      runSession(ctx, APWH.poolFromUnit(ctx.opts.unit, { mode: 'mixed', mixedPerTopic: 2 }), '⚡ Quick Mixed Quiz');
    });
  }

  /* ---- public mount ---- */
  var UID = 0;
  APWH.mountMCQ = function (root, opts) {
    injectCSS();
    opts = opts || {};
    var ctx = {
      opts: opts,
      uid: 'mcqx' + (++UID),
      mode: opts.defaultMode || (opts.pool ? 'test' : 'quick'),
      calibration: opts.calibration !== false
    };
    root.classList.add('mcqx');
    root.innerHTML =
      '<div class="mcqx-home"></div>' +
      '<div class="mcqx-session mcqx-hidden">' +
        '<div class="mcqx-shead">' +
          '<button type="button" class="mcqx-back">&#8592; Back</button>' +
          '<div class="mcqx-title"></div>' +
          '<div class="mcqx-prog"></div>' +
          '<div class="mcqx-score mcqx-hidden"></div>' +
        '</div>' +
        '<div class="mcqx-pbar"><div class="mcqx-pbar-f"></div></div>' +
        '<div class="mcqx-body"></div>' +
        '<div class="mcqx-foot"></div>' +
      '</div>';
    ctx.home = root.querySelector('.mcqx-home');
    ctx.session = root.querySelector('.mcqx-session');
    ctx.titleEl = root.querySelector('.mcqx-title');
    ctx.progEl = root.querySelector('.mcqx-prog');
    ctx.scoreEl = root.querySelector('.mcqx-score');
    ctx.pbarF = root.querySelector('.mcqx-pbar-f');
    ctx.body = root.querySelector('.mcqx-body');
    ctx.foot = root.querySelector('.mcqx-foot');

    /* Full window: a unit's question set fills the space beside the sidebar and below the
       site's top bars, like the AP exam app; the Cumulative Review set (pool) starts in the
       page. The page scroll is locked only while the
       full-window set is actually on screen. */
    ctx.full = opts.fullWindow != null ? !!opts.fullWindow : !opts.pool;
    // Top edge: below the lowest bar pinned to the top (fixed, or sticky and stuck, which
    // lockScroll makes sure of by scrolling down to the set first).
    // Left edge: right of the sidebar when it is pinned (wide screens).
    function place() {
      if (!ctx.full) { ctx.session.style.top = ctx.session.style.left = ''; return; }
      var top = 0, left = 0;
      document.querySelectorAll('#mc-bar, .top-bar, .subtab-bar').forEach(function (el) {
        if (!el.getClientRects().length || !/fixed|sticky/.test(getComputedStyle(el).position)) return;
        var b = el.getBoundingClientRect().bottom;
        if (b > 0 && b < window.innerHeight / 2) top = Math.max(top, b);
      });
      var sb = document.querySelector('.sidebar');
      if (sb && sb.getClientRects().length && /fixed|sticky/.test(getComputedStyle(sb).position)) {
        var r = sb.getBoundingClientRect();
        if (r.right < window.innerWidth / 2) left = r.right;
      }
      ctx.session.style.top = Math.round(top) + 'px';
      ctx.session.style.left = Math.round(left) + 'px';
    }
    window.addEventListener('resize', place);
    // While full window, the set lives on <body> (the unit page's tab panel would otherwise
    // clip a fixed box), and it hides whenever its tab is not the one showing.
    function lockScroll() {
      var shown = root.getClientRects().length > 0;
      if (ctx.session.parentNode === document.body) ctx.session.style.display = shown ? '' : 'none';
      var on = shown && ctx.session.classList.contains('mx-full') && !ctx.session.classList.contains('mcqx-hidden');
      // Bring the sticky bars to their stuck spot before the page scroll locks.
      if (on && !document.documentElement.classList.contains('mcqx-open')) {
        var y = root.getBoundingClientRect().top + window.pageYOffset - 140;
        if (window.pageYOffset < y) window.scrollTo({ top: y, behavior: 'instant' });
      }
      document.documentElement.classList.toggle('mcqx-open', on);
      place();
    }
    ctx.setFull = function (on) {
      ctx.full = on;
      ctx.session.classList.toggle('mx-full', on);
      ctx.session.classList.toggle('mcqx', on);
      if (on && ctx.session.parentNode !== document.body) document.body.appendChild(ctx.session);
      if (!on && ctx.session.parentNode !== root) { ctx.session.style.display = ''; root.appendChild(ctx.session); }
      lockScroll();
    };
    document.addEventListener('unit:tab', function () { setTimeout(lockScroll, 0); });
    document.documentElement.classList.remove('mcqx-open');
    // The tab's intro ("Stimulus-Based Questions") steps aside once a mode or a set is picked.
    ctx.hideIntro = function () { if (root.parentElement) root.parentElement.classList.add('mcqx-intro-off'); };

    var backToHome = function () {
      ctx.session.classList.add('mcqx-hidden');
      ctx.home.classList.remove('mcqx-hidden');
      lockScroll();
    };

    if (opts.pool) {
      // hub / direct-pool mode: no per-unit home; Back regenerates or returns
      ctx.home.classList.add('mcqx-hidden');
      root.querySelector('.mcqx-back').addEventListener('click', function () {
        if (opts.onBack) opts.onBack(); else if (opts.regenerate) { var np = opts.regenerate(); if (np && np.length) runSession(ctx, np, opts.title || 'Cumulative Review'); }
      });
      runSession(ctx, opts.pool, opts.title || 'Cumulative Review');
    } else {
      root.querySelector('.mcqx-back').addEventListener('click', backToHome);
      buildHome(ctx);
    }
    return ctx;
  };
})();
