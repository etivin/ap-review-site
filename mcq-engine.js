/* ============================================================
   mcq-engine.js  —  Shared, mode-aware MCQ session engine.
   Consumes window.APWH_MCQ (mcq-bank.js). Renders a self-contained,
   namespaced UI (.mcqx-*) styled with the site's CSS variables, so it
   looks native on every unit page and on the cumulative hub.

   Public API (window.APWH):
     APWH.mountMCQ(rootEl, opts)
       opts.unit        : unit id ('1'..'8')  -> per-unit home with topic buttons
       opts.pool        : [{unit,topic,idx}]  -> run this exact set (hub)
       opts.title       : session/home heading
       opts.defaultMode : 'quick' | 'test'   (default 'quick' for units, 'test' for pool)
       opts.calibration : bool (default true) — confidence chips in Test Mode
       opts.showModeToggle : bool (default true)
       opts.regenerate  : function -> new pool (hub "New Set" button)
       opts.newSetLabel : label for the regenerate button
     APWH.store.load() / APWH.store.save(obj)      — the apReview_v1 blob
     APWH.markSeen(['1','2'])                       — stamp lastSeen timestamps
     APWH.poolFromUnit(unitId, {mode,mixedPerTopic,topic})
   Two feedback modes:
     Quick Check — immediate correct/incorrect + explanation per click.
     Test Mode   — batched: record answers (+ optional confidence) with no
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

  function recordAnswer(ref, q, userAnswer, correct) {
    var s = store.load(); s.mcq = s.mcq || {};
    s.mcq[ref.topic + '_' + ref.idx] = {
      unit: ref.unit, topic: ref.topic, topicIdx: ref.idx,
      userAnswer: userAnswer, correctAnswer: q.c, correct: !!correct, ts: Date.now()
    };
    store.save(s);
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
      'font-family:inherit;color:var(--mx-ink)}',
      '.mcqx button{font-family:inherit}',
      '.mcqx-modebar{display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin-bottom:18px;padding:14px 16px;background:var(--mx-paper);border:1px solid var(--mx-line)}',
      '.mcqx-modebar .mx-lbl{font-family:"IBM Plex Mono",monospace;font-size:.62rem;letter-spacing:.16em;text-transform:uppercase;color:var(--mx-mut)}',
      '.mcqx-modebtn{padding:8px 15px;background:var(--mx-card);border:1px solid var(--mx-line);cursor:pointer;font-size:.86rem;color:var(--mx-mut);transition:all .13s}',
      '.mcqx-modebtn.active{background:var(--mx-ink);color:#fff;border-color:var(--mx-ink)}',
      '.mcqx-modehint{flex-basis:100%;font-size:.8rem;color:var(--mx-mut);line-height:1.5;font-style:italic}',
      '.mcqx-topics{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px;margin-bottom:16px}',
      '.mcqx-tc{text-align:left;padding:14px 16px;background:var(--mx-card);border:1px solid var(--mx-line);border-left:4px solid var(--mx-red);cursor:pointer;transition:transform .12s,box-shadow .12s}',
      '.mcqx-tc:hover{transform:translateY(-2px);box-shadow:0 4px 14px rgba(0,0,0,.1)}',
      '.mcqx-tc .mx-tn{font-family:"IBM Plex Mono",monospace;font-size:.56rem;letter-spacing:.14em;text-transform:uppercase;color:var(--mx-red)}',
      '.mcqx-tc .mx-tt{font-weight:600;margin:3px 0 4px;font-size:.98rem}',
      '.mcqx-tc .mx-tcnt{font-family:"IBM Plex Mono",monospace;font-size:.62rem;color:var(--mx-mut)}',
      '.mcqx-actions{display:flex;flex-wrap:wrap;gap:12px}',
      '.mcqx-bigbtn{flex:1;min-width:220px;padding:14px;border:1px solid var(--mx-line);background:var(--mx-card);cursor:pointer;font-size:.92rem;font-weight:600;transition:all .13s}',
      '.mcqx-bigbtn.mx-primary{background:var(--mx-ink);color:#fff;border-color:var(--mx-ink)}',
      '.mcqx-bigbtn:hover{box-shadow:0 4px 14px rgba(0,0,0,.12)}',
      '.mcqx-shead{display:flex;flex-wrap:wrap;align-items:center;gap:10px 16px;margin-bottom:8px}',
      '.mcqx-back{padding:7px 13px;background:none;border:1px solid var(--mx-line);cursor:pointer;font-size:.8rem;color:var(--mx-mut)}',
      '.mcqx-back:hover{color:var(--mx-ink)}',
      '.mcqx-title{font-weight:700;font-size:1.05rem}',
      '.mcqx-prog{font-family:"IBM Plex Mono",monospace;font-size:.66rem;letter-spacing:.08em;color:var(--mx-mut);margin-left:auto}',
      '.mcqx-score{font-family:"IBM Plex Mono",monospace;font-size:.72rem;padding:3px 10px;background:var(--mx-paper);border:1px solid var(--mx-line)}',
      '.mcqx-pbar{height:5px;background:var(--mx-line);margin:0 0 22px}',
      '.mcqx-pbar-f{height:100%;width:0;background:var(--mx-red);transition:width .25s}',
      '.mcqx-sbr{border:none;border-top:1px dashed var(--mx-line);margin:26px 0}',
      '.mcqx-sset{font-family:"IBM Plex Mono",monospace;font-size:.56rem;letter-spacing:.18em;text-transform:uppercase;color:var(--mx-mut);margin:0 0 8px}',
      '.mcqx-stim{background:var(--mx-paper);border:1px solid var(--mx-line);border-left:4px solid var(--mx-mut);padding:14px 16px;margin-bottom:14px}',
      '.mcqx-stim-lbl{font-family:"IBM Plex Mono",monospace;font-size:.54rem;letter-spacing:.16em;text-transform:uppercase;color:var(--mx-red);margin-bottom:4px}',
      '.mcqx-stim-src{font-size:.78rem;color:var(--mx-mut);font-style:italic;margin-bottom:8px}',
      '.mcqx-stim img{max-width:100%;height:auto;margin:8px 0;border:1px solid var(--mx-line)}',
      '.mcqx-stim-txt p{margin:0 0 8px;line-height:1.6}',
      '.mcqx-qcard{margin-bottom:20px;padding-bottom:6px}',
      '.mcqx-qnum{font-family:"IBM Plex Mono",monospace;font-size:.56rem;letter-spacing:.14em;text-transform:uppercase;color:var(--mx-mut);margin-bottom:6px}',
      '.mcqx-qtxt{font-weight:600;line-height:1.55;margin-bottom:12px}',
      '.mcqx-opts{display:flex;flex-direction:column;gap:9px}',
      '.mcqx-opt{display:flex;gap:11px;align-items:flex-start;text-align:left;padding:12px 14px;background:var(--mx-card);border:1px solid var(--mx-line);cursor:pointer;font-size:.9rem;line-height:1.45;transition:border-color .12s,background .12s}',
      '.mcqx-opt:hover:not(:disabled){border-color:var(--mx-ink)}',
      '.mcqx-opt:disabled{cursor:default}',
      '.mcqx-opt .mx-ol{font-family:"IBM Plex Mono",monospace;font-weight:600;color:var(--mx-mut);flex-shrink:0}',
      '.mcqx-opt.mx-sel{border-color:var(--mx-ink);background:var(--mx-paper)}',
      '.mcqx-opt.mx-sel .mx-ol{color:var(--mx-ink)}',
      '.mcqx-opt.mx-correct{border-color:var(--mx-grn);background:var(--mx-grnbg)}',
      '.mcqx-opt.mx-correct .mx-ol{color:var(--mx-grn)}',
      '.mcqx-opt.mx-reveal{border-color:var(--mx-grn);background:var(--mx-grnbg)}',
      '.mcqx-opt.mx-wrong{border-color:var(--mx-red);background:var(--mx-redbg)}',
      '.mcqx-opt.mx-wrong .mx-ol{color:var(--mx-red)}',
      '.mcqx-conf{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-top:11px;padding:9px 12px;background:var(--mx-paper);border:1px dashed var(--mx-line)}',
      '.mcqx-conf .mx-clbl{font-family:"IBM Plex Mono",monospace;font-size:.56rem;letter-spacing:.12em;text-transform:uppercase;color:var(--mx-mut)}',
      '.mcqx-chip{padding:5px 12px;background:var(--mx-card);border:1px solid var(--mx-line);cursor:pointer;font-size:.78rem;color:var(--mx-mut);border-radius:14px;transition:all .12s}',
      '.mcqx-chip.mx-on{background:var(--mx-ink);color:#fff;border-color:var(--mx-ink)}',
      '.mcqx-fb{margin-top:11px;padding:0 13px;max-height:0;overflow:hidden;font-size:.86rem;line-height:1.55;border-left:3px solid transparent;transition:none}',
      '.mcqx-fb.mx-show{max-height:none;padding:11px 13px}',
      '.mcqx-fb.mx-ok{background:var(--mx-grnbg);border-left-color:var(--mx-grn)}',
      '.mcqx-fb.mx-bad{background:var(--mx-redbg);border-left-color:var(--mx-red)}',
      '.mcqx-foot{position:sticky;bottom:0;display:flex;flex-wrap:wrap;gap:10px;align-items:center;padding:14px 0;margin-top:8px;background:linear-gradient(to top,var(--cream,#f9f6ef) 65%,transparent)}',
      '.mcqx-reveal{padding:12px 22px;background:var(--mx-red);color:#fff;border:none;cursor:pointer;font-weight:600;font-size:.92rem}',
      '.mcqx-reveal:disabled{opacity:.5;cursor:not-allowed}',
      '.mcqx-reset,.mcqx-newset{padding:11px 18px;background:var(--mx-card);border:1px solid var(--mx-line);cursor:pointer;font-size:.86rem}',
      '.mcqx-summary{margin:4px 0 22px;padding:18px 20px;background:var(--mx-paper);border:1px solid var(--mx-line);border-top:4px solid var(--mx-red)}',
      '.mcqx-summary h4{font-family:"Playfair Display",serif;font-size:1.15rem;margin:0 0 10px}',
      '.mcqx-summary .mx-big{font-size:1.6rem;font-weight:700}',
      '.mcqx-calib{margin-top:12px;display:flex;flex-wrap:wrap;gap:10px}',
      '.mcqx-cbucket{padding:8px 14px;background:var(--mx-card);border:1px solid var(--mx-line);font-size:.82rem}',
      '.mcqx-cbucket b{font-family:"IBM Plex Mono",monospace}',
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

  /* ---- the session ---- */
  function runSession(ctx, pool, label) {
    var mode = ctx.mode;                 // 'quick' | 'test'
    var calib = ctx.calibration && mode === 'test';
    var qs = pool.map(function (ref) { return { ref: ref, q: resolve(ref) }; })
                 .filter(function (o) { return o.q; });
    var answered = new Array(qs.length);   // chosen option index or undefined
    var conf = new Array(qs.length);       // confidence id
    var locked = mode === 'quick';         // quick locks each on click; test locks all on reveal
    var revealed = false;

    APWH.markSeen(pool.map(function (r) { return String(r.unit); }).filter(function (v, i, a) { return a.indexOf(v) === i; }));

    ctx.home.classList.add('mcqx-hidden');
    ctx.session.classList.remove('mcqx-hidden');
    ctx.titleEl.textContent = label || 'Questions';
    ctx.scoreEl.classList.toggle('mcqx-hidden', mode !== 'quick');

    var footHTML = '';
    if (mode === 'test') footHTML += '<button type="button" class="mcqx-reveal">Reveal All &amp; Score</button>';
    footHTML += '<button type="button" class="mcqx-reset">↺ Reset &amp; Retry</button>';
    if (ctx.opts.regenerate) footHTML += '<button type="button" class="mcqx-newset">🎲 ' + esc(ctx.opts.newSetLabel || 'New Set') + '</button>';
    ctx.foot.innerHTML = footHTML;

    function progress() {
      var n = answered.filter(function (v) { return v != null; }).length;
      ctx.progEl.textContent = n + ' of ' + qs.length + ' answered';
      ctx.pbarF.style.width = qs.length ? (n / qs.length * 100) + '%' : '0%';
      var rv = ctx.foot.querySelector('.mcqx-reveal');
      if (rv) rv.disabled = n === 0;
      if (mode === 'quick') {
        var right = 0; qs.forEach(function (o, i) { if (answered[i] === o.q.c) right++; });
        ctx.scoreEl.textContent = right + ' / ' + n;
      }
    }

    function render() {
      var h = '', last = null, sn = 0;
      qs.forEach(function (o, i) {
        var q = o.q;
        if (q.s !== last) {
          if (i > 0) h += '<hr class="mcqx-sbr"/>';
          sn++;
          h += '<div class="mcqx-sset">Stimulus Set ' + sn + '</div>';
          if (q.s) {
            h += '<div class="mcqx-stim"><div class="mcqx-stim-lbl">&#128196; Source</div>' +
                 '<div class="mcqx-stim-src">' + esc(q.sl) + '</div>' +
                 (q.simg ? '<img src="' + esc(q.simg) + '" alt="Source" loading="lazy" onerror="this.style.display=\'none\'"/>' : '') +
                 '<div class="mcqx-stim-txt"><p>' + esc(q.s).replace(/\n/g, '</p><p>') + '</p></div></div>';
          }
          last = q.s;
        }
        h += '<div class="mcqx-qcard" id="' + ctx.uid + '-qc' + i + '">' +
             '<div class="mcqx-qnum">Question ' + (i + 1) + ' of ' + qs.length + '</div>' +
             '<div class="mcqx-qtxt">' + esc(q.q) + '</div><div class="mcqx-opts">';
        q.o.forEach(function (x, j) {
          h += '<button type="button" class="mcqx-opt" data-i="' + i + '" data-j="' + j + '">' +
               '<span class="mx-ol">' + L[j] + '</span><span>' + esc(x) + '</span></button>';
        });
        h += '</div>';
        if (calib) {
          h += '<div class="mcqx-conf" data-i="' + i + '"><span class="mx-clbl">Before you check &mdash; how sure?</span>';
          CONF.forEach(function (c) { h += '<button type="button" class="mcqx-chip" data-i="' + i + '" data-conf="' + c.id + '">' + c.label + '</button>'; });
          h += '</div>';
        }
        h += '<div class="mcqx-fb" id="' + ctx.uid + '-fb' + i + '"></div></div>';
      });
      ctx.body.innerHTML = h;
      ctx.body.querySelectorAll('.mcqx-opt').forEach(function (b) {
        b.addEventListener('click', function () { pick(+this.dataset.i, +this.dataset.j); });
      });
      ctx.body.querySelectorAll('.mcqx-chip').forEach(function (b) {
        b.addEventListener('click', function () { setConf(+this.dataset.i, this.dataset.conf); });
      });
      progress();
    }

    function optsOf(i) { return ctx.body.querySelectorAll('.mcqx-opt[data-i="' + i + '"]'); }

    function setConf(i, id) {
      if (revealed) return;
      conf[i] = id;
      ctx.body.querySelectorAll('.mcqx-chip[data-i="' + i + '"]').forEach(function (b) {
        b.classList.toggle('mx-on', b.dataset.conf === id);
      });
    }

    function showFeedback(i) {
      var q = qs[i].q, j = answered[i], ok = j === q.c;
      var fb = document.getElementById(ctx.uid + '-fb' + i);
      if (fb) {
        fb.className = 'mcqx-fb mx-show ' + (ok ? 'mx-ok' : 'mx-bad');
        fb.innerHTML = '<strong>' + (ok ? '✓ Correct.' : '✗ Incorrect.') + '</strong> ' + (q.e || '');
      }
    }

    function markGraded(i) {
      var q = qs[i].q, j = answered[i], ok = j === q.c;
      optsOf(i).forEach(function (b) {
        var bj = +b.dataset.j; b.disabled = true;
        b.classList.remove('mx-sel');
        if (bj === q.c) b.classList.add(ok ? 'mx-correct' : 'mx-reveal');
        if (bj === j && !ok) b.classList.add('mx-wrong');
      });
      showFeedback(i);
    }

    function pick(i, j) {
      if (mode === 'quick') {
        if (answered[i] != null) return;
        answered[i] = j;
        markGraded(i);
        recordAnswer(qs[i].ref, qs[i].q, j, j === qs[i].q.c);
        progress();
      } else {
        if (revealed) return;
        answered[i] = j;
        optsOf(i).forEach(function (b) { b.classList.toggle('mx-sel', +b.dataset.j === j); });
        progress();
      }
    }

    function reveal() {
      if (revealed) return;
      revealed = true;
      var right = 0, tot = 0;
      var buckets = { confident: [0, 0], shaky: [0, 0], guessing: [0, 0], none: [0, 0] };
      qs.forEach(function (o, i) {
        if (answered[i] == null) return;
        tot++;
        var ok = answered[i] === o.q.c;
        if (ok) right++;
        markGraded(i);
        recordAnswer(o.ref, o.q, answered[i], ok);
        var b = conf[i] || 'none';
        buckets[b][1]++; if (ok) buckets[b][0]++;
      });
      // lock confidence chips
      ctx.body.querySelectorAll('.mcqx-chip').forEach(function (b) { b.disabled = true; });
      // summary
      var pct = tot ? Math.round(right / tot * 100) : 0;
      var sum = document.createElement('div');
      sum.className = 'mcqx-summary';
      var html = '<h4>Results</h4><div class="mx-big">' + right + ' / ' + tot + '  <span style="font-size:1rem;color:var(--muted)">(' + pct + '%)</span></div>';
      if (calib) {
        var parts = [];
        CONF.forEach(function (c) {
          var bk = buckets[c.id];
          if (bk[1]) parts.push('<div class="mcqx-cbucket">' + c.label + ' &middot; <b>' + bk[0] + '/' + bk[1] + '</b> correct</div>');
        });
        if (buckets.none[1]) parts.push('<div class="mcqx-cbucket">No rating &middot; <b>' + buckets.none[0] + '/' + buckets.none[1] + '</b></div>');
        html += '<div class="mcqx-calib">' + parts.join('') + '</div>';
        var cb = buckets.confident;
        if (cb[1]) {
          var gap = cb[1] - cb[0];
          html += '<div class="mcqx-gap">' + (gap === 0
            ? 'You were <strong>Confident ' + cb[0] + ' times and right every time</strong> — your calibration is solid here.'
            : 'You said <strong>Confident on ' + cb[1] + '</strong> question' + (cb[1] > 1 ? 's' : '') + ' but were right on <strong>' + cb[0] + '</strong>. That ' + gap + '-question gap is the illusion of mastery made visible — those confident misses are exactly what to review.') + '</div>';
        }
      }
      sum.innerHTML = html;
      ctx.body.insertBefore(sum, ctx.body.firstChild);
      var rv = ctx.foot.querySelector('.mcqx-reveal'); if (rv) rv.remove();
      sum.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    ctx.foot.querySelector('.mcqx-reset').addEventListener('click', function () { runSession(ctx, pool, label); });
    var rvBtn = ctx.foot.querySelector('.mcqx-reveal');
    if (rvBtn) rvBtn.addEventListener('click', reveal);
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
        ? 'Test Mode: answer the whole set, rate your confidence, and see nothing until you Reveal — closest to real exam conditions.'
        : 'Quick Check: instant right/wrong after each question — good for a first pass through new material.';
    }
    syncMode();
    ctx.home.querySelectorAll('.mcqx-modebtn').forEach(function (b) {
      b.addEventListener('click', function () { ctx.mode = b.dataset.mode; syncMode(); });
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

    var backToHome = function () {
      ctx.session.classList.add('mcqx-hidden');
      ctx.home.classList.remove('mcqx-hidden');
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
