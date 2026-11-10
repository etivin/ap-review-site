/* ─────────────────────────────────────────────────────────────
   question-maker.js  "Make a question" tab on class-stats.html (teacher only).

   Eli types a multiple-choice question (unit and AP topic; optional source text, source
   line and a dragged-in image; 4 or 5 choices he can drag to reorder; the key; an
   explanation), sees it as students will, and saves it to the class-stats Worker
   (cloudflare/class-stats-worker.js, POST /custom/save). The Worker serves every saved
   question as /api/class-stats/custom.js, which the unit pages load right after
   mcq-bank.js: each question joins its topic's bank at index 1000 + slot, so its id never
   shifts. "Remove" only hides a question (it can be shown again). A saved question keeps
   its unit and topic.

   "Build a walkthrough" adds the plain-English Work it / Watch it steps (sbmcq.js):
   question type, trigger words, what the source is saying (right + 2 wrong), the reworded
   question (right + 2 wrong) and what it means, a reason to cross out or keep each choice
   (typed on the choice's own row, so it moves when the choices are dragged), the trap
   choice and why. "Preview walkthrough" draws it with the real sbmcq.js card.

   Checks (site rules): the key, and the right walkthrough choices, should not be the
   longest; no em dashes.
   ───────────────────────────────────────────────────────────── */
(function () {
  var L = ['A', 'B', 'C', 'D', 'E'];
  var EM = String.fromCharCode(8212), EN = String.fromCharCode(8211);
  var TICK = String.fromCharCode(10003), CROSS = String.fromCharCode(10007), DOT = String.fromCharCode(183);
  var TYPES = [['bestillustrates', 'Best Illustrates'], ['context', 'Context'], ['causation', 'Causation'], ['purpose', 'Purpose'], ['similar', 'Similar / Compare']];
  var TAGS = ['WHO', 'WHEN', 'WHERE', 'WHAT', 'WHY'];
  var IDX0 = 1000, PREVIEW_IDX = 9999;
  var root, list = [], stats = {}, editing = null, img = null, key = null, trap = null, pendingOk = false;

  function $(id) { return document.getElementById(id); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function code() { var el = $('code'); return el ? el.value.trim() : ''; }
  function base() { return (window.CLASS_STATS && CLASS_STATS.base()) || 'https://tivinteaches.com/api/class-stats'; }
  function api(path, body) {
    var o = { headers: { 'X-Teacher-Code': code() } };
    if (body) { o.method = 'POST'; o.headers['Content-Type'] = 'application/json'; o.body = JSON.stringify(body); }
    return fetch(base() + path, o).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (j) {
        if (!r.ok) throw new Error(r.status === 403 ? 'That code did not work.' : (j.error || ('Server said ' + r.status)));
        return j;
      });
    });
  }
  function units() { return (window.APWH_MCQ && APWH_MCQ.units) || {}; }
  function plainName(html) { var d = document.createElement('div'); d.innerHTML = html; return d.textContent; }
  function topicName(u, t) {
    var tp = ((units()[u] || {}).topics || []).filter(function (x) { return x.id === t; })[0];
    return tp ? plainName(tp.name) : '';
  }

  function css() {
    var s = document.createElement('style');
    s.textContent =
      '.tabs{display:flex;gap:0;margin-bottom:16px;border-bottom:2px solid var(--border)}' +
      '.tab{background:none;color:var(--mid);border:none;border-bottom:3px solid transparent;margin-bottom:-2px;padding:10px 16px}' +
      '.tab:hover{background:none;color:var(--red)}' +
      '.tab.on{color:var(--ink);border-bottom-color:var(--red)}' +
      '.qm{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);gap:18px;align-items:start}' +
      '@media(max-width:860px){.qm{grid-template-columns:1fr}}' +
      '.qm .field{margin-bottom:14px}' +
      '.qm .field>label,.qm .lab{display:block;margin-bottom:5px}' +
      '.qm textarea,.qm input[type=text],.qm select{width:100%;font:inherit;font-size:.92rem;padding:8px 10px;border:1px solid var(--border2);background:var(--white);color:var(--ink)}' +
      '.qm textarea{min-height:70px;resize:vertical;line-height:1.5}' +
      '.qm .hint{font-size:.78rem;color:var(--muted);margin-top:4px}' +
      '.qm-two{display:grid;grid-template-columns:1fr 1fr;gap:10px}' +
      '@media(max-width:520px){.qm-two{grid-template-columns:1fr}}' +
      '.qm-drop{border:2px dashed var(--border2);padding:16px;text-align:center;color:var(--muted);font-size:.86rem;cursor:pointer;background:var(--cream)}' +
      '.qm-drop.over{border-color:var(--red);color:var(--red)}' +
      '.qm-drop img{max-width:100%;max-height:220px;display:block;margin:0 auto 8px}' +
      '.qm-opts{list-style:none}' +
      '.qm-opt{padding:7px 8px;margin-bottom:6px;background:var(--white);border:1px solid var(--border)}' +
      '.qm-orow{display:grid;grid-template-columns:22px 26px 1fr auto;gap:8px;align-items:center}' +
      '.qm-opt.key{border-color:var(--green);box-shadow:inset 3px 0 0 var(--green)}' +
      '.qm-opt.dragging{opacity:.4}' +
      '.qm-opt.over{border-top:3px solid var(--red)}' +
      '.qm-grip{cursor:grab;color:var(--muted);font-size:1.1rem;line-height:1;user-select:none;text-align:center}' +
      '.qm-let{font-weight:900;text-align:center}' +
      '.qm-opt input[type=text]{border:none;border-bottom:1px solid var(--border);padding:5px 2px}' +
      '.qm-btns{display:flex;gap:4px}' +
      '.qm-keyb,.qm-trapb{font-size:.6rem;padding:6px 8px;background:var(--white);color:var(--mid);border:1px solid var(--border)}' +
      '.qm-keyb:hover{background:var(--white);color:var(--green);border-color:var(--green)}' +
      '.qm-trapb:hover{background:var(--white);color:#a15c00;border-color:#a15c00}' +
      '.qm-opt.key .qm-keyb{background:var(--green);border-color:var(--green);color:#fff}' +
      '.qm-opt.trap .qm-trapb{background:#a15c00;border-color:#a15c00;color:#fff}' +
      '.qm-opt.key .qm-trapb{visibility:hidden}' +
      '.qm-cut{margin:6px 0 0 56px}' +
      '.qm-cut input{font-size:.84rem!important;border:1px dashed var(--border)!important;padding:5px 8px!important}' +
      '.qm-wt-off .qm-cut,.qm-wt-off .qm-trapb{display:none}' +
      '.qm-toggle{display:flex;align-items:center;gap:10px;padding:12px 14px;margin:6px 0 14px;background:var(--paper);border:1px solid var(--border);cursor:pointer;font-weight:700}' +
      '.qm-toggle input{width:18px;height:18px;accent-color:var(--red)}' +
      '.qm-wt{border-left:3px solid var(--red);padding:2px 0 2px 14px;margin-bottom:14px}' +
      '.qm-wt h3{font-size:.95rem;font-weight:900;margin:12px 0 6px}' +
      '.qm-wt .trio input{margin-bottom:5px}' +
      '.qm-wt .trio input:first-child{border-color:var(--green)}' +
      '.qm-src{display:grid;grid-template-columns:90px 1fr 1fr 28px;gap:6px;margin-bottom:6px}' +
      '.qm-src button{padding:4px;font-size:.8rem}' +
      '.qm-checks{list-style:none;margin:10px 0;font-size:.84rem}' +
      '.qm-checks li{padding:3px 0}' +
      '.qm-checks .ok{color:var(--green)}.qm-checks .warn{color:#a15c00}.qm-checks .bad{color:var(--red)}' +
      '.qm-checks button{font-size:.6rem;padding:4px 8px;margin-left:6px}' +
      '.qm-prev{background:var(--white);border:1px solid var(--border);padding:16px;position:sticky;top:90px;max-height:calc(100vh - 110px);overflow:auto}' +
      '.qm-prev .src{background:var(--cream);border-left:3px solid var(--border2);padding:10px 12px;margin-bottom:12px;font-size:.88rem}' +
      '.qm-prev .src .sl{font-weight:700;font-size:.78rem;color:var(--mid);margin-bottom:6px}' +
      '.qm-prev .src img{max-width:100%;display:block;margin:6px 0}' +
      '.qm-prev .stem{font-weight:700;margin-bottom:10px}' +
      '.qm-prev .po{display:flex;gap:10px;padding:8px 10px;border:1px solid var(--border);margin-bottom:6px;font-size:.9rem}' +
      '.qm-prev .po b{min-width:16px}' +
      '.qm-prev .po.key{border-color:var(--green);background:rgba(26,104,37,.07)}' +
      '.qm-prev .ex{margin-top:10px;font-size:.84rem;color:var(--mid)}' +
      '.qm-prev .pv-tabs{display:flex;gap:6px;margin-bottom:12px}' +
      '.qm-prev .pv-tabs button{font-size:.6rem;padding:6px 10px}' +
      '.qm-actions{display:flex;flex-wrap:wrap;gap:8px;align-items:center}' +
      '.qm-list{margin-top:26px}' +
      '.qm-item{display:grid;grid-template-columns:1fr auto;gap:10px;padding:10px 12px;background:var(--white);border:1px solid var(--border);margin-bottom:6px}' +
      '.qm-item.off{opacity:.55}' +
      '.qm-item .meta{font-size:.74rem;color:var(--muted);font-weight:700;letter-spacing:.04em}' +
      '.qm-item .btns{display:flex;gap:6px;align-items:start}' +
      '.qm-item .btns button{font-size:.6rem;padding:6px 9px}';
    document.head.appendChild(s);
  }

  function unitOptions() {
    var h = '', U = units();
    for (var u = 1; u <= 9; u++) h += '<option value="' + u + '">Unit ' + u + (U[u] ? ': ' + esc(U[u].title) : '') + '</option>';
    return h;
  }
  function topicOptions(u) {
    var h = '';
    ((units()[u] || {}).topics || []).forEach(function (t) {
      if (t.id === u + '.0') return;
      h += '<option value="' + t.id + '">' + t.id + ': ' + esc(plainName(t.name)) + '</option>';
    });
    return h;
  }
  function trio(id, ph) {
    return '<div class="trio" id="' + id + '">' +
      '<input type="text" data-k="0" placeholder="' + esc(ph[0]) + '"/>' +
      '<input type="text" data-k="1" placeholder="' + esc(ph[1]) + '"/>' +
      '<input type="text" data-k="2" placeholder="' + esc(ph[2]) + '"/></div>';
  }

  function build() {
    root.innerHTML =
      '<div class="qm">' +
      '<div>' +
        '<div class="panel" id="qm-form">' +
          '<div class="qm-two field"><div><label class="lab" for="qm-unit">Unit</label><select id="qm-unit">' + unitOptions() + '</select></div>' +
          '<div><label class="lab" for="qm-topic">Topic (the question joins this topic\'s bank)</label><select id="qm-topic"></select></div></div>' +
          '<div class="field"><label for="qm-s">Source text (optional)</label><textarea id="qm-s" placeholder="Paste or type the excerpt students read first."></textarea></div>' +
          '<div class="field"><label for="qm-sl">Source line (optional)</label><input type="text" id="qm-sl" placeholder="e.g. Ibn Battuta, travel account, 1350s"/></div>' +
          '<div class="field"><label>Source image (optional)</label>' +
            '<div class="qm-drop" id="qm-drop" tabindex="0" role="button">Drag an image here, or click to choose one.</div>' +
            '<input type="file" id="qm-file" accept="image/*" class="hidden"/></div>' +
          '<div class="field"><label for="qm-q">Question</label><textarea id="qm-q" placeholder="e.g. Which of the following best explains..."></textarea></div>' +
          '<div class="field"><label>Choices</label><ul class="qm-opts" id="qm-opts"></ul>' +
            '<div class="hint">Drag the &#8942;&#8942; handle to reorder. Click "Correct" on the right answer.</div>' +
            '<div class="row" style="margin-top:6px"><button type="button" class="ghost" id="qm-add">Add choice E</button></div></div>' +
          '<div class="field"><label for="qm-e">Explanation (shown after they answer)</label><textarea id="qm-e"></textarea></div>' +
          '<label class="qm-toggle"><input type="checkbox" id="qm-wt-on"/> Build a walkthrough for this question (Work it / Watch it)</label>' +
          '<div class="qm-wt hidden" id="qm-wt">' +
            '<div class="qm-two"><div><label class="lab" for="qm-type">Question type</label><select id="qm-type">' +
              TYPES.map(function (t) { return '<option value="' + t[0] + '">' + t[1] + '</option>'; }).join('') + '</select></div>' +
            '<div><label class="lab" for="qm-hq">Trigger words (copied exactly from the question)</label><input type="text" id="qm-hq" placeholder="e.g. most directly led to"/></div></div>' +
            '<h3>Step 1: What is the source saying?</h3>' +
            '<div class="hint" style="margin:-2px 0 6px">The right plain-English summary first (green), then two wrong ones. Students see them shuffled.</div>' +
            trio('qm-say', ['Right summary of the source', 'Wrong summary', 'Wrong summary']) +
            '<label class="lab" for="qm-hs" style="margin-top:8px">Key phrases to highlight in the source (optional, one per line, copied exactly)</label>' +
            '<textarea id="qm-hs" style="min-height:50px"></textarea>' +
            '<label class="lab" style="margin-top:8px">Source line notes (optional): since ..., therefore ...</label>' +
            '<div id="qm-srcrows"></div><button type="button" class="ghost" id="qm-addsrc" style="font-size:.6rem;padding:6px 9px">Add a note</button>' +
            '<h3>Step 2: Reword the question</h3>' +
            trio('qm-plain', ['Right plain-English version of the question', 'Wrong version', 'Wrong version']) +
            '<label class="lab" for="qm-meaning" style="margin-top:6px">What it means (a sentence or two shown after)</label>' +
            '<textarea id="qm-meaning" style="min-height:50px"></textarea>' +
            '<h3>Step 3: Cross out what is wrong, and why</h3>' +
            '<div class="hint" style="margin-top:-2px">Type a reason on each choice above (for the correct one: why it stays). Click "Trap" on the wrong choice students fall for most.</div>' +
            '<label class="lab" for="qm-trap" style="margin-top:8px">Why the trap is tempting, and why it is wrong ("What NOT to do")</label>' +
            '<textarea id="qm-trap" style="min-height:50px"></textarea>' +
          '</div>' +
          '<ul class="qm-checks" id="qm-checks"></ul>' +
          '<div class="qm-actions"><button type="button" id="qm-save">Save question</button>' +
            '<button type="button" class="ghost hidden" id="qm-cancel">Cancel edit</button>' +
            '<button type="button" class="ghost" id="qm-clear">Clear form</button>' +
            '<span class="msg" id="qm-msg" style="margin:0"></span></div>' +
        '</div>' +
      '</div>' +
      '<div><div class="qm-prev"><div class="pv-tabs"><button type="button" id="pv-q">Preview question</button>' +
        '<button type="button" class="ghost hidden" id="pv-w">Preview walkthrough</button></div><div id="qm-prev"></div></div></div>' +
      '</div>' +
      '<div class="qm-list"><h2>Your questions</h2>' +
        '<p class="note">Each one joins its topic in MCQ Practice on the unit page (within about a minute of saving) and in Cumulative Review. Remove hides a question from students; you can show it again.</p>' +
        '<div id="qm-list"></div></div>';

    $('qm-unit').addEventListener('change', function () { $('qm-topic').innerHTML = topicOptions(this.value); refresh(); });
    $('qm-topic').innerHTML = topicOptions($('qm-unit').value);
    $('qm-form').addEventListener('input', refresh);
    $('qm-form').addEventListener('change', function (e) { if (e.target.id !== 'qm-unit') refresh(); });
    $('qm-wt-on').addEventListener('change', function () { showWt(this.checked); });
    $('qm-addsrc').addEventListener('click', function () { addSrc(); refresh(); });
    $('qm-add').addEventListener('click', function () {
      if (optRows().length < 5) addOpt('', ''); else removeLast();
      refresh();
    });
    $('qm-save').addEventListener('click', save);
    $('qm-clear').addEventListener('click', function () { fill(null); });
    $('qm-cancel').addEventListener('click', function () { fill(null); });
    $('pv-q').addEventListener('click', function () { pvMode = 'q'; refresh(); });
    $('pv-w').addEventListener('click', function () { pvMode = 'w'; drawWalkPreview(); });
    wireDrop();
    fill(null);
  }
  var pvMode = 'q';

  function showWt(on) {
    $('qm-wt-on').checked = on;
    $('qm-wt').classList.toggle('hidden', !on);
    $('qm-opts').classList.toggle('qm-wt-off', !on);
    $('pv-w').classList.toggle('hidden', !on);
    if (!on) pvMode = 'q';
    refresh();
  }

  /* ---- source line notes ---- */
  function addSrc(r) {
    r = r || { tag: 'WHO', since: '', therefore: '' };
    var row = document.createElement('div');
    row.className = 'qm-src';
    row.innerHTML = '<select aria-label="Note type">' + TAGS.map(function (t) { return '<option' + (t === r.tag ? ' selected' : '') + '>' + t + '</option>'; }).join('') + '</select>' +
      '<input type="text" class="since" placeholder="since ..." aria-label="since"/><input type="text" class="therefore" placeholder="therefore ..." aria-label="therefore"/>' +
      '<button type="button" class="ghost" title="Remove this note" aria-label="Remove this note">x</button>';
    row.querySelector('.since').value = r.since || '';
    row.querySelector('.therefore').value = r.therefore || '';
    row.querySelector('button').addEventListener('click', function () { row.remove(); refresh(); });
    $('qm-srcrows').appendChild(row);
  }

  /* ---- choices with drag to reorder (the reason and trap move with the choice) ---- */
  function optRows() { return Array.prototype.slice.call($('qm-opts').children); }
  function addOpt(text, cut) {
    var li = document.createElement('li');
    li.className = 'qm-opt';
    li.draggable = true;
    li.innerHTML = '<div class="qm-orow"><span class="qm-grip" title="Drag to reorder" aria-hidden="true">&#8942;&#8942;</span><span class="qm-let"></span>' +
      '<input type="text" class="qm-otext" aria-label="Choice text"/>' +
      '<span class="qm-btns"><button type="button" class="qm-keyb">Correct</button><button type="button" class="qm-trapb">Trap</button></span></div>' +
      '<div class="qm-cut"><input type="text" class="qm-cutin" aria-label="Reason for this choice"/></div>';
    li.querySelector('.qm-otext').value = text || '';
    li.querySelector('.qm-cutin').value = cut || '';
    li.querySelector('.qm-keyb').addEventListener('click', function () { key = li; if (trap === li) trap = null; refresh(); });
    li.querySelector('.qm-trapb').addEventListener('click', function () { trap = trap === li ? null : li; refresh(); });
    li.addEventListener('dragstart', function (e) { li.classList.add('dragging'); try { e.dataTransfer.setData('text/plain', 'opt'); e.dataTransfer.effectAllowed = 'move'; } catch (x) {} });
    li.addEventListener('dragend', function () { li.classList.remove('dragging'); optRows().forEach(function (r) { r.classList.remove('over'); }); refresh(); });
    li.addEventListener('dragover', function (e) {
      var d = $('qm-opts').querySelector('.dragging'); if (!d || d === li) return;
      e.preventDefault(); li.classList.add('over');
    });
    li.addEventListener('dragleave', function () { li.classList.remove('over'); });
    li.addEventListener('drop', function (e) {
      var d = $('qm-opts').querySelector('.dragging'); if (!d || d === li) return;
      e.preventDefault(); li.classList.remove('over');
      $('qm-opts').insertBefore(d, li);
      refresh();
    });
    // a text box inside a draggable row should still select text normally
    li.querySelectorAll('input').forEach(function (inp) {
      inp.addEventListener('mousedown', function () { li.draggable = false; });
      inp.addEventListener('blur', function () { li.draggable = true; });
    });
    $('qm-opts').appendChild(li);
    return li;
  }
  function removeLast() {
    var rows = optRows(), last = rows[rows.length - 1];
    if (key === last) key = null;
    if (trap === last) trap = null;
    last.remove();
  }
  function wireListEnd() {
    var ul = $('qm-opts');
    ul.addEventListener('dragover', function (e) { if (ul.querySelector('.dragging')) e.preventDefault(); });
    ul.addEventListener('drop', function (e) {
      var d = ul.querySelector('.dragging');
      if (d && e.target === ul) { e.preventDefault(); ul.appendChild(d); refresh(); }
    });
  }

  /* ---- image: drag in or choose; shrunk so it loads fast ---- */
  function wireDrop() {
    var dz = $('qm-drop'), file = $('qm-file');
    wireListEnd();
    dz.addEventListener('click', function (e) { if (e.target.closest('.qm-rmimg')) return; file.click(); });
    dz.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); file.click(); } });
    file.addEventListener('change', function () { if (file.files[0]) readImg(file.files[0]); file.value = ''; });
    dz.addEventListener('dragover', function (e) { e.preventDefault(); dz.classList.add('over'); });
    dz.addEventListener('dragleave', function () { dz.classList.remove('over'); });
    dz.addEventListener('drop', function (e) {
      e.preventDefault(); dz.classList.remove('over');
      var f = e.dataTransfer.files && e.dataTransfer.files[0];
      if (f && /^image\//.test(f.type)) readImg(f);
    });
  }
  function readImg(f) {
    var r = new FileReader();
    r.onload = function () {
      var im = new Image();
      im.onload = function () {
        var max = 1100, w = im.width, h = im.height, k = Math.min(1, max / Math.max(w, h));
        var c = document.createElement('canvas');
        c.width = Math.round(w * k); c.height = Math.round(h * k);
        var x = c.getContext('2d');
        x.fillStyle = '#fff'; x.fillRect(0, 0, c.width, c.height);
        x.drawImage(im, 0, 0, c.width, c.height);
        var q = 0.85, out = c.toDataURL('image/jpeg', q);
        while (out.length > 850000 && q > 0.4) { q -= 0.1; out = c.toDataURL('image/jpeg', q); }
        img = out;
        showImg(); refresh();
      };
      im.src = r.result;
    };
    r.readAsDataURL(f);
  }
  function showImg() {
    var dz = $('qm-drop');
    dz.innerHTML = img
      ? '<img src="' + img + '" alt=""/><button type="button" class="ghost qm-rmimg">Remove image</button>'
      : 'Drag an image here, or click to choose one.';
    var rm = dz.querySelector('.qm-rmimg');
    if (rm) rm.addEventListener('click', function () { img = null; showImg(); refresh(); });
  }

  /* ---- read the form, check it, preview it ---- */
  function vals(id) { return Array.prototype.map.call($(id).querySelectorAll('input'), function (i) { return i.value.trim(); }); }
  function readW(rows) {
    if (!$('qm-wt-on').checked) return null;
    return {
      type: $('qm-type').value,
      hq: $('qm-hq').value.trim(),
      hs: $('qm-hs').value.split('\n').map(function (x) { return x.trim(); }).filter(Boolean),
      src: Array.prototype.map.call($('qm-srcrows').children, function (r) {
        return { tag: r.querySelector('select').value, since: r.querySelector('.since').value.trim(), therefore: r.querySelector('.therefore').value.trim() };
      }).filter(function (r) { return r.since && r.therefore; }),
      say: vals('qm-say'),
      plain: vals('qm-plain'),
      meaning: $('qm-meaning').value.trim(),
      cut: rows.map(function (r) { return r.querySelector('.qm-cutin').value.trim(); }),
      trapIdx: rows.indexOf(trap),
      trap: $('qm-trap').value.trim()
    };
  }
  function read() {
    var rows = optRows();
    var d = {
      s: $('qm-s').value.trim(),
      sl: $('qm-sl').value.trim(),
      q: $('qm-q').value.trim(),
      o: rows.map(function (r) { return r.querySelector('.qm-otext').value.trim(); }),
      c: rows.indexOf(key),
      e: $('qm-e').value.trim(),
      t: $('qm-topic').value
    };
    if (img) d.simg = img;
    var w = readW(rows);
    if (w) d.w = w;
    return { unit: +$('qm-unit').value, data: d };
  }
  function lenCheck(arr, right, label) {
    var keyLen = arr[right].length, others = arr.filter(function (_, j) { return j !== right; });
    var mean = others.reduce(function (a, x) { return a + x.length; }, 0) / others.length;
    var longest = arr.every(function (x, j) { return j === right || x.length < keyLen; });
    var ratio = mean ? keyLen / mean : 1;
    if (longest && ratio > 1.15) return ['warn', label + ': the right one is the longest (' + ratio.toFixed(2) + ' times the others). Make the wrong ones as long and specific.'];
    return ['ok', label + ': lengths are balanced (' + ratio.toFixed(2) + ').'];
  }
  function checks(d) {
    var out = [], ok = true;
    if (!d.t) { out.push(['bad', 'Pick a topic.']); ok = false; }
    if (!d.q) { out.push(['bad', 'Type the question.']); ok = false; }
    var blank = d.o.filter(function (x) { return !x; }).length;
    if (blank) { out.push(['bad', blank === 1 ? 'One choice is empty.' : blank + ' choices are empty.']); ok = false; }
    if (d.c < 0) { out.push(['bad', 'Click "Correct" on the right answer.']); ok = false; }
    if (d.c >= 0 && !blank) out.push(lenCheck(d.o, d.c, 'Choices'));
    if (!d.e) out.push(['warn', 'No explanation yet. Students see it after they answer.']);
    var w = d.w, texts = [d.s, d.sl, d.q, d.e].concat(d.o);
    if (w) {
      texts = texts.concat(w.say, w.plain, w.cut, [w.meaning, w.trap, w.hq], w.hs);
      w.src.forEach(function (r) { texts.push(r.since, r.therefore); });
      if (w.say.some(function (x) { return !x; })) { out.push(['bad', 'Walkthrough step 1: fill in all three summaries.']); ok = false; }
      else out.push(lenCheck(w.say, 0, 'Step 1 summaries'));
      if (w.plain.some(function (x) { return !x; })) { out.push(['bad', 'Walkthrough step 2: fill in all three reworded questions.']); ok = false; }
      else out.push(lenCheck(w.plain, 0, 'Step 2 questions'));
      var noCut = w.cut.filter(function (x) { return !x; }).length;
      if (noCut) { out.push(['bad', 'Walkthrough step 3: type a reason on every choice (' + noCut + ' missing).']); ok = false; }
      if (w.trapIdx < 0) { out.push(['bad', 'Walkthrough: click "Trap" on the wrong choice students fall for.']); ok = false; }
      if (!w.trap) out.push(['warn', 'Walkthrough: say why the trap is wrong ("What NOT to do").']);
      if (!w.meaning) out.push(['warn', 'Walkthrough step 2: add what the reworded question means.']);
      if (!w.hq) out.push(['warn', 'Walkthrough: add the trigger words from the question.']);
      else if (d.q.indexOf(w.hq) < 0) out.push(['warn', 'The trigger words are not in the question exactly as typed, so they will not be underlined.']);
      var missing = w.hs.filter(function (p) { return d.s.indexOf(p) < 0; });
      if (missing.length) out.push(['warn', missing.length + ' highlight phrase' + (missing.length > 1 ? 's are' : ' is') + ' not in the source text exactly as typed.']);
    }
    if (texts.join(' ').indexOf(EM) >= 0) out.push(['warn', 'Has an em dash (the long dash). The site uses a colon, a comma or an en dash instead.', 'fixdash']);
    return { list: out, ok: ok };
  }
  function refresh() {
    pendingOk = false;
    optRows().forEach(function (r, j) {
      r.querySelector('.qm-let').textContent = L[j];
      r.classList.toggle('key', r === key);
      r.classList.toggle('trap', r === trap);
      r.querySelector('.qm-keyb').textContent = r === key ? 'Correct ' + TICK : 'Correct';
      r.querySelector('.qm-cutin').placeholder = r === key ? 'Why choice ' + L[j] + ' stays (it is the answer)' : 'Why choice ' + L[j] + ' can be crossed out';
    });
    $('qm-add').textContent = optRows().length < 5 ? 'Add choice E' : 'Remove choice E';
    var f = read(), d = f.data, c = checks(d);
    $('qm-checks').innerHTML = c.list.map(function (x) {
      return '<li class="' + x[0] + '">' + (x[0] === 'ok' ? TICK + ' ' : x[0] === 'bad' ? CROSS + ' ' : '! ') + esc(x[1]) +
        (x[2] === 'fixdash' ? '<button type="button" class="ghost" data-fix="dash">Change to en dashes</button>' : '') + '</li>';
    }).join('');
    var fx = $('qm-checks').querySelector('[data-fix="dash"]');
    if (fx) fx.addEventListener('click', fixDashes);
    $('qm-save').disabled = !c.ok;
    $('qm-save').style.opacity = c.ok ? '' : '.5';
    $('qm-save').textContent = editing ? 'Save changes' : 'Save question';
    $('pv-q').className = pvMode === 'q' ? '' : 'ghost';
    $('pv-w').className = (pvMode === 'w' ? '' : 'ghost') + ($('qm-wt-on').checked ? '' : ' hidden');
    if (pvMode === 'q') drawQPreview(d);
  }
  function drawQPreview(d) {
    var p = '<div class="eyebrow">What students see' + (d.t ? ': Topic ' + esc(d.t) : '') + '</div>';
    if (d.s || d.sl || d.simg) {
      p += '<div class="src">' + (d.sl ? '<div class="sl">' + esc(d.sl) + '</div>' : '') + (d.simg ? '<img src="' + d.simg + '" alt=""/>' : '') +
        (d.s ? esc(d.s).replace(/\n/g, '<br>') : '') + '</div>';
    }
    p += '<div class="stem">' + (d.q ? esc(d.q) : '<span style="color:var(--muted)">Your question shows here.</span>') + '</div>';
    d.o.forEach(function (x, j) { p += '<div class="po' + (j === d.c ? ' key' : '') + '"><b>' + L[j] + '</b><span>' + esc(x) + '</span></div>'; });
    if (d.e) p += '<div class="ex"><strong>Explanation:</strong> ' + esc(d.e).replace(/\n/g, '<br>') + '</div>';
    $('qm-prev').innerHTML = p;
  }
  // The real walkthrough card (sbmcq.js), built from a temporary copy of the question.
  function drawWalkPreview() {
    refresh();
    var f = read(), d = f.data, el = $('qm-prev');
    if (!window.SBMCQ || !SBMCQ.card) { el.innerHTML = '<p class="msg bad">The walkthrough engine did not load.</p>'; return; }
    if (!d.w || !checks(d).ok) { el.innerHTML = '<p class="note">Fill in the parts marked with ' + CROSS + ' first, then preview the walkthrough.</p>'; return; }
    var u = units()[f.unit]; if (!u) return;
    var arr = u.questions[d.t] || (u.questions[d.t] = []);
    var q = { s: d.s, sl: d.sl, q: d.q, o: d.o, c: d.c, e: esc(d.e).replace(/\n/g, '<br>'), hidden: true };
    if (d.simg) q.simg = d.simg;
    arr[PREVIEW_IDX] = q;
    var id = 'u' + f.unit + '_' + d.t + '_' + PREVIEW_IDX;
    window.WALKTHROUGH = window.WALKTHROUGH || {};
    WALKTHROUGH[id] = d.w;
    el.innerHTML = '<div class="eyebrow">Walkthrough preview: try it as a student</div><div class="sbmcq-root">' + SBMCQ.card(id) + '</div>';
    SBMCQ.wire(el);
  }
  function fixDashes() {
    function fix(v) { return v.split(EM).join(' ' + EN + ' ').replace(/ +/g, ' ').replace(/ ([,.;:])/g, '$1'); }
    $('qm-form').querySelectorAll('input[type=text], textarea').forEach(function (i) { i.value = fix(i.value); });
    refresh();
  }

  function fill(item) {
    editing = item ? { unit: item.unit, slot: item.slot } : null;
    var d = item ? item.data : { s: '', sl: '', q: '', o: ['', '', '', ''], c: -1, e: '', t: '' };
    if (item) { $('qm-unit').value = item.unit; $('qm-topic').innerHTML = topicOptions(String(item.unit)); }
    // a saved question keeps its unit and topic (its id, and students' progress, depend on them)
    $('qm-unit').disabled = !!item;
    $('qm-topic').disabled = !!item;
    if (d.t) $('qm-topic').value = d.t;
    $('qm-s').value = d.s || ''; $('qm-sl').value = d.sl || ''; $('qm-q').value = d.q || ''; $('qm-e').value = d.e || '';
    var w = d.w || null;
    $('qm-opts').innerHTML = ''; key = null; trap = null;
    d.o.forEach(function (x, j) {
      var li = addOpt(x, w && w.cut ? w.cut[j] : '');
      if (j === d.c) key = li;
      if (w && j === w.trapIdx) trap = li;
    });
    $('qm-type').value = (w && w.type) || 'bestillustrates';
    $('qm-hq').value = (w && w.hq) || '';
    $('qm-hs').value = w && w.hs ? w.hs.join('\n') : '';
    $('qm-srcrows').innerHTML = '';
    if (w && w.src) w.src.forEach(addSrc);
    ['say', 'plain'].forEach(function (k) {
      var ins = $('qm-' + k).querySelectorAll('input');
      for (var i = 0; i < 3; i++) ins[i].value = w && w[k] ? (w[k][i] || '') : '';
    });
    $('qm-meaning').value = (w && w.meaning) || '';
    $('qm-trap').value = (w && w.trap) || '';
    img = d.simg || null; showImg();
    $('qm-cancel').classList.toggle('hidden', !item);
    $('qm-clear').classList.toggle('hidden', !!item);
    $('qm-msg').textContent = item ? 'Editing Unit ' + item.unit + ', topic ' + d.t + ', question ' + (item.slot + 1) + '.' : '';
    $('qm-msg').className = 'msg';
    pvMode = 'q';
    showWt(!!w);
  }

  function save() {
    var f = read(), c = checks(f.data);
    if (!c.ok) return;
    var body = { unit: f.unit, data: f.data };
    if (editing) { body.unit = editing.unit; body.slot = editing.slot; }
    var warns = c.list.filter(function (x) { return x[0] === 'warn'; });
    if (warns.length && !pendingOk) {
      pendingOk = true;
      $('qm-msg').className = 'msg bad';
      $('qm-msg').textContent = 'Check the ' + (warns.length === 1 ? 'warning' : warns.length + ' warnings') + ' above. Click Save again to save anyway.';
      return;
    }
    pendingOk = false;
    $('qm-save').disabled = true;
    $('qm-msg').className = 'msg'; $('qm-msg').textContent = 'Saving...';
    api('/custom/save', body).then(function (r) {
      var was = !!editing;
      fill(null);
      $('qm-msg').textContent = (was ? 'Saved changes to ' : 'Saved as ') + 'Unit ' + r.unit + ', topic ' + f.data.t + '. It shows on the unit page within about a minute.';
      load();
    }).catch(function (e) {
      $('qm-msg').className = 'msg bad'; $('qm-msg').textContent = e.message || 'Could not save.';
      $('qm-save').disabled = false;
    });
  }

  /* ---- the list of saved questions ---- */
  function load() {
    if (!root) init();
    if (!root) return;
    $('qm-list').innerHTML = '<p class="note">Loading...</p>';
    api('/custom/list').then(function (r) { list = r.questions || []; drawList(); })
      .catch(function (e) { $('qm-list').innerHTML = '<p class="msg bad">' + esc(e.message) + '</p>'; });
    var rep = window.CS_REPORT;
    stats = {};
    if (rep && rep.questions) rep.questions.forEach(function (q) { stats[q.id] = q; });
  }
  function drawList() {
    if (!list.length) { $('qm-list').innerHTML = '<p class="note">No questions yet. The first one you save shows up here.</p>'; return; }
    var h = '';
    list.forEach(function (it, i) {
      var d = it.data, t = d.t || (it.unit + '.0');
      var id = 'u' + it.unit + '_' + t + '_' + (IDX0 + it.slot), st = stats[id];
      h += '<div class="qm-item' + (it.hidden ? ' off' : '') + '"><div>' +
        '<div class="meta">UNIT ' + it.unit + ' ' + DOT + ' TOPIC ' + esc(t) + (topicName(String(it.unit), t) ? ': ' + esc(topicName(String(it.unit), t).toUpperCase()) : '') +
        (d.w ? ' ' + DOT + ' WALKTHROUGH' : '') +
        (it.hidden ? ' ' + DOT + ' HIDDEN FROM STUDENTS' : '') +
        (st && st.n ? ' ' + DOT + ' ' + Math.round(st.right / st.n * 100) + '% RIGHT (' + st.n + ')' : '') + '</div>' +
        '<div>' + esc(d.q.length > 160 ? d.q.slice(0, 160) + '...' : d.q) + '</div>' +
        '<div class="note" style="margin:3px 0 0">Correct: ' + L[d.c] + '. ' + esc(d.o[d.c]) + '</div></div>' +
        '<div class="btns"><button type="button" class="ghost" data-act="edit" data-i="' + i + '">Edit</button>' +
        '<button type="button" class="ghost" data-act="hide" data-i="' + i + '">' + (it.hidden ? 'Show again' : 'Remove') + '</button></div></div>';
    });
    $('qm-list').innerHTML = h;
  }
  function onList(e) {
    var b = e.target.closest('button[data-act]'); if (!b) return;
    var it = list[+b.dataset.i]; if (!it) return;
    if (b.dataset.act === 'edit') { fill(it); root.scrollIntoView({ behavior: 'instant', block: 'start' }); return; }
    b.disabled = true;
    api('/custom/hide', { unit: it.unit, slot: it.slot, hidden: !it.hidden }).then(load)
      .catch(function (err) { b.disabled = false; $('qm-msg').className = 'msg bad'; $('qm-msg').textContent = err.message; });
  }

  /* ---- tabs ---- */
  function wireTabs() {
    document.querySelectorAll('.tabs .tab').forEach(function (t) {
      t.addEventListener('click', function () {
        document.querySelectorAll('.tabs .tab').forEach(function (x) {
          var on = x === t;
          x.classList.toggle('on', on); x.setAttribute('aria-selected', on ? 'true' : 'false');
          $(x.dataset.tab).classList.toggle('hidden', !on);
        });
      });
    });
  }

  function init() {
    if (root) return;
    root = $('tab-make'); if (!root) return;
    css(); build(); wireTabs();
    $('qm-list').addEventListener('click', onList);
  }
  window.QMAKER = { load: load, fill: fill };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
