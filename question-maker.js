/* ─────────────────────────────────────────────────────────────
   question-maker.js  "Make a question" tab on class-stats.html (teacher only).

   Eli types a multiple-choice question (optional source text, source line and a
   dragged-in image; 4 or 5 choices he can drag to reorder; the key; an explanation),
   sees it as students will, and saves it to the class-stats Worker
   (cloudflare/class-stats-worker.js, POST /custom/save). The Worker serves every saved
   question as /api/class-stats/custom.js, which the unit pages load right after
   mcq-bank.js: each unit with questions gets the topic "N.0 Mr. Tivin's Questions".
   Questions keep their slot for good, so "Remove" only hides one (it can be shown again).

   Checks before saving (site rules): the key should not be the longest choice, and no
   em dashes (U+2014).
   ───────────────────────────────────────────────────────────── */
(function () {
  var L = ['A', 'B', 'C', 'D', 'E'];
  var EM = '\u2014';
  var root, list = [], stats = {}, editing = null, img = null, key = null, pendingOk = false;

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
      '.qm .field>label{display:block;margin-bottom:5px}' +
      '.qm textarea,.qm input[type=text],.qm select{width:100%;font:inherit;font-size:.92rem;padding:8px 10px;border:1px solid var(--border2);background:var(--white);color:var(--ink)}' +
      '.qm textarea{min-height:70px;resize:vertical;line-height:1.5}' +
      '.qm .hint{font-size:.78rem;color:var(--muted);margin-top:4px}' +
      '.qm-drop{border:2px dashed var(--border2);padding:16px;text-align:center;color:var(--muted);font-size:.86rem;cursor:pointer;background:var(--cream)}' +
      '.qm-drop.over{border-color:var(--red);color:var(--red)}' +
      '.qm-drop img{max-width:100%;max-height:220px;display:block;margin:0 auto 8px}' +
      '.qm-opts{list-style:none}' +
      '.qm-opt{display:grid;grid-template-columns:22px 26px 1fr auto;gap:8px;align-items:center;padding:7px 8px;margin-bottom:6px;background:var(--white);border:1px solid var(--border)}' +
      '.qm-opt.key{border-color:var(--green);box-shadow:inset 3px 0 0 var(--green)}' +
      '.qm-opt.dragging{opacity:.4}' +
      '.qm-opt.over{border-top:3px solid var(--red)}' +
      '.qm-grip{cursor:grab;color:var(--muted);font-size:1.1rem;line-height:1;user-select:none;text-align:center}' +
      '.qm-let{font-weight:900;text-align:center}' +
      '.qm-opt input[type=text]{border:none;border-bottom:1px solid var(--border);padding:5px 2px}' +
      '.qm-keyb{font-size:.62rem;padding:6px 9px;background:var(--white);color:var(--mid);border:1px solid var(--border)}' +
      '.qm-keyb:hover{background:var(--white);color:var(--green);border-color:var(--green)}' +
      '.qm-opt.key .qm-keyb{background:var(--green);border-color:var(--green);color:#fff}' +
      '.qm-checks{list-style:none;margin:10px 0;font-size:.84rem}' +
      '.qm-checks li{padding:3px 0}' +
      '.qm-checks .ok{color:var(--green)}.qm-checks .warn{color:#a15c00}.qm-checks .bad{color:var(--red)}' +
      '.qm-checks button{font-size:.6rem;padding:4px 8px;margin-left:6px}' +
      '.qm-prev{background:var(--white);border:1px solid var(--border);padding:16px;position:sticky;top:90px}' +
      '.qm-prev .src{background:var(--cream);border-left:3px solid var(--border2);padding:10px 12px;margin-bottom:12px;font-size:.88rem}' +
      '.qm-prev .src .sl{font-weight:700;font-size:.78rem;color:var(--mid);margin-bottom:6px}' +
      '.qm-prev .src img{max-width:100%;display:block;margin:6px 0}' +
      '.qm-prev .stem{font-weight:700;margin-bottom:10px}' +
      '.qm-prev .po{display:flex;gap:10px;padding:8px 10px;border:1px solid var(--border);margin-bottom:6px;font-size:.9rem}' +
      '.qm-prev .po b{min-width:16px}' +
      '.qm-prev .po.key{border-color:var(--green);background:rgba(26,104,37,.07)}' +
      '.qm-prev .ex{margin-top:10px;font-size:.84rem;color:var(--mid)}' +
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
    var h = '', U = (window.APWH_MCQ && APWH_MCQ.units) || {};
    for (var u = 1; u <= 9; u++) h += '<option value="' + u + '">Unit ' + u + (U[u] ? ': ' + U[u].title : '') + '</option>';
    return h;
  }
  function topicOptions(u) {
    var U = (window.APWH_MCQ && APWH_MCQ.units) || {}, h = '<option value="">(none)</option>';
    ((U[u] && U[u].topics) || []).forEach(function (t) {
      if (t.id === u + '.0') return;
      var d = document.createElement('div'); d.innerHTML = t.name;
      h += '<option value="' + t.id + '">' + t.id + ': ' + esc(d.textContent) + '</option>';
    });
    return h;
  }

  function build() {
    root.innerHTML =
      '<div class="qm">' +
      '<div>' +
        '<div class="panel">' +
          '<div class="row" style="margin-bottom:14px"><label for="qm-unit">Unit</label><select id="qm-unit" style="width:auto">' + unitOptions() + '</select>' +
          '<label for="qm-topic">AP topic (for you)</label><select id="qm-topic" style="width:auto"></select></div>' +
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
          '<ul class="qm-checks" id="qm-checks"></ul>' +
          '<div class="qm-actions"><button type="button" id="qm-save">Save question</button>' +
            '<button type="button" class="ghost hidden" id="qm-cancel">Cancel edit</button>' +
            '<button type="button" class="ghost" id="qm-clear">Clear form</button>' +
            '<span class="msg" id="qm-msg" style="margin:0"></span></div>' +
        '</div>' +
      '</div>' +
      '<div><div class="qm-prev" id="qm-prev"></div></div>' +
      '</div>' +
      '<div class="qm-list"><h2>Your questions</h2>' +
        '<p class="note">These show on each unit page under MCQ Practice as the topic "Mr. Tivin\'s Questions" (within about a minute of saving), and in Cumulative Review. Remove hides a question from students; you can show it again.</p>' +
        '<div id="qm-list"></div></div>';

    $('qm-unit').addEventListener('change', function () { $('qm-topic').innerHTML = topicOptions(this.value); refresh(); });
    $('qm-topic').innerHTML = topicOptions($('qm-unit').value);
    ['qm-s', 'qm-sl', 'qm-q', 'qm-e', 'qm-topic'].forEach(function (id) { $(id).addEventListener('input', refresh); });
    $('qm-add').addEventListener('click', function () {
      var rows = optRows();
      if (rows.length < 5) { addOpt(''); } else { removeLast(); }
      refresh();
    });
    $('qm-save').addEventListener('click', save);
    $('qm-clear').addEventListener('click', function () { fill(null); });
    $('qm-cancel').addEventListener('click', function () { fill(null); });
    wireDrop();
    fill(null);
  }

  /* ---- choices with drag to reorder ---- */
  function optRows() { return Array.prototype.slice.call($('qm-opts').children); }
  function addOpt(text) {
    var li = document.createElement('li');
    li.className = 'qm-opt';
    li.draggable = true;
    li.innerHTML = '<span class="qm-grip" title="Drag to reorder" aria-hidden="true">&#8942;&#8942;</span><span class="qm-let"></span>' +
      '<input type="text" aria-label="Choice text"/><button type="button" class="qm-keyb">Correct</button>';
    li.querySelector('input').value = text || '';
    li.querySelector('input').addEventListener('input', refresh);
    li.querySelector('.qm-keyb').addEventListener('click', function () { key = li; refresh(); });
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
    li.querySelector('input').addEventListener('mousedown', function () { li.draggable = false; });
    li.querySelector('input').addEventListener('blur', function () { li.draggable = true; });
    $('qm-opts').appendChild(li);
    return li;
  }
  function removeLast() {
    var rows = optRows(), last = rows[rows.length - 1];
    if (key === last) key = null;
    last.remove();
  }
  // drop at the end of the list
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
  function read() {
    var rows = optRows();
    return {
      unit: +$('qm-unit').value,
      data: {
        s: $('qm-s').value.trim(),
        sl: $('qm-sl').value.trim(),
        q: $('qm-q').value.trim(),
        o: rows.map(function (r) { return r.querySelector('input').value.trim(); }),
        c: rows.indexOf(key),
        e: $('qm-e').value.trim(),
        t: $('qm-topic').value,
        simg: img || undefined
      }
    };
  }
  function checks(d) {
    var out = [], ok = true;
    if (!d.q) { out.push(['bad', 'Type the question.']); ok = false; }
    var blank = d.o.filter(function (x) { return !x; }).length;
    if (blank) { out.push(['bad', blank === 1 ? 'One choice is empty.' : blank + ' choices are empty.']); ok = false; }
    if (d.c < 0) { out.push(['bad', 'Click "Correct" on the right answer.']); ok = false; }
    if (d.c >= 0 && !blank) {
      var keyLen = d.o[d.c].length, others = d.o.filter(function (_, j) { return j !== d.c; });
      var mean = others.reduce(function (a, x) { return a + x.length; }, 0) / others.length;
      var longest = d.o.every(function (x, j) { return j === d.c || x.length < keyLen; });
      var ratio = mean ? keyLen / mean : 1;
      if (longest && ratio > 1.15) out.push(['warn', 'The correct answer is the longest choice (' + ratio.toFixed(2) + ' times the others). Students can spot that: make the wrong choices as long and specific.']);
      else out.push(['ok', 'Choice lengths are balanced (correct answer ' + ratio.toFixed(2) + ' times the others).']);
    }
    var all = [d.s, d.sl, d.q, d.e].concat(d.o).join(' ');
    if (all.indexOf(EM) >= 0) out.push(['warn', 'Has an em dash (the long dash). The site uses a colon, a comma or an en dash instead.', 'fixdash']);
    if (!d.e) out.push(['warn', 'No explanation yet. Students see it after they answer.']);
    return { list: out, ok: ok };
  }
  function refresh() {
    pendingOk = false;
    optRows().forEach(function (r, j) {
      r.querySelector('.qm-let').textContent = L[j];
      r.classList.toggle('key', r === key);
      r.querySelector('.qm-keyb').textContent = r === key ? 'Correct \u2713' : 'Correct';
    });
    $('qm-add').textContent = optRows().length < 5 ? 'Add choice E' : 'Remove choice E';
    var f = read(), d = f.data, c = checks(d);
    $('qm-checks').innerHTML = c.list.map(function (x) {
      return '<li class="' + x[0] + '">' + (x[0] === 'ok' ? '\u2713 ' : x[0] === 'bad' ? '\u2717 ' : '! ') + esc(x[1]) +
        (x[2] === 'fixdash' ? '<button type="button" class="ghost" data-fix="dash">Change to en dashes</button>' : '') + '</li>';
    }).join('');
    var fx = $('qm-checks').querySelector('[data-fix="dash"]');
    if (fx) fx.addEventListener('click', fixDashes);
    $('qm-save').disabled = !c.ok;
    $('qm-save').style.opacity = c.ok ? '' : '.5';
    $('qm-save').textContent = editing ? 'Save changes' : 'Save question';
    // preview, as students see it
    var p = '<div class="eyebrow">Preview: what students see</div>';
    if (d.s || d.sl || d.simg) {
      p += '<div class="src">' + (d.sl ? '<div class="sl">' + esc(d.sl) + '</div>' : '') + (d.simg ? '<img src="' + d.simg + '" alt=""/>' : '') +
        (d.s ? esc(d.s).replace(/\n/g, '<br>') : '') + '</div>';
    }
    p += '<div class="stem">' + (d.q ? esc(d.q) : '<span style="color:var(--muted)">Your question shows here.</span>') + '</div>';
    d.o.forEach(function (x, j) { p += '<div class="po' + (j === d.c ? ' key' : '') + '"><b>' + L[j] + '</b><span>' + esc(x) + '</span></div>'; });
    if (d.e) p += '<div class="ex"><strong>Explanation:</strong> ' + esc(d.e).replace(/\n/g, '<br>') + '</div>';
    $('qm-prev').innerHTML = p;
  }
  function fixDashes() {
    function fix(v) { return v.replace(/\s*\u2014\s*/g, ' \u2013 '); }
    ['qm-s', 'qm-sl', 'qm-q', 'qm-e'].forEach(function (id) { $(id).value = fix($(id).value); });
    optRows().forEach(function (r) { var i = r.querySelector('input'); i.value = fix(i.value); });
    refresh();
  }

  function fill(item) {
    editing = item ? { unit: item.unit, slot: item.slot } : null;
    var d = item ? item.data : { s: '', sl: '', q: '', o: ['', '', '', ''], c: -1, e: '', t: '' };
    if (item) { $('qm-unit').value = item.unit; $('qm-topic').innerHTML = topicOptions(item.unit); }
    $('qm-unit').disabled = !!item;   // a saved question stays in its unit (its id depends on it)
    $('qm-topic').value = d.t || '';
    $('qm-s').value = d.s || ''; $('qm-sl').value = d.sl || ''; $('qm-q').value = d.q || ''; $('qm-e').value = d.e || '';
    $('qm-opts').innerHTML = ''; key = null;
    d.o.forEach(function (x, j) { var li = addOpt(x); if (j === d.c) key = li; });
    img = d.simg || null; showImg();
    $('qm-cancel').classList.toggle('hidden', !item);
    $('qm-clear').classList.toggle('hidden', !!item);
    $('qm-msg').textContent = item ? 'Editing Unit ' + item.unit + ' question ' + (item.slot + 1) + '.' : '';
    $('qm-msg').className = 'msg';
    refresh();
  }

  function save() {
    var f = read();
    if (!checks(f.data).ok) return;
    var body = { unit: f.unit, data: f.data };
    if (editing) { body.unit = editing.unit; body.slot = editing.slot; }
    var dashes = [f.data.s, f.data.sl, f.data.q, f.data.e].concat(f.data.o).join(' ').indexOf(EM) >= 0;
    var warnKey = checks(f.data).list.some(function (x) { return x[0] === 'warn' && /longest/.test(x[1]); });
    if ((dashes || warnKey) && !confirmSave(dashes, warnKey)) return;
    $('qm-save').disabled = true;
    $('qm-msg').className = 'msg'; $('qm-msg').textContent = 'Saving...';
    api('/custom/save', body).then(function (r) {
      var was = !!editing;
      fill(null);
      $('qm-msg').textContent = (was ? 'Saved changes to ' : 'Saved as ') + 'Unit ' + r.unit + ', question ' + (r.slot + 1) + '. It shows on the unit page within about a minute.';
      load();
    }).catch(function (e) {
      $('qm-msg').className = 'msg bad'; $('qm-msg').textContent = e.message || 'Could not save.';
      $('qm-save').disabled = false;
    });
  }
  // Warnings are allowed through, but only after a visible second click.

  function confirmSave(dashes, warnKey) {
    if (pendingOk) { pendingOk = false; return true; }
    pendingOk = true;
    $('qm-msg').className = 'msg bad';
    $('qm-msg').textContent = 'Check the warnings above' + (warnKey && dashes ? ' (longest answer, em dash)' : warnKey ? ' (longest answer)' : ' (em dash)') + '. Click Save again to save anyway.';
    return false;
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
      var d = it.data, id = 'u' + it.unit + '_' + it.unit + '.0_' + it.slot, st = stats[id];
      h += '<div class="qm-item' + (it.hidden ? ' off' : '') + '"><div>' +
        '<div class="meta">UNIT ' + it.unit + ' \u00b7 QUESTION ' + (it.slot + 1) + (d.t ? ' \u00b7 TOPIC ' + esc(d.t) : '') +
        (it.hidden ? ' \u00b7 HIDDEN FROM STUDENTS' : '') +
        (st && st.n ? ' \u00b7 ' + Math.round(st.right / st.n * 100) + '% RIGHT (' + st.n + ')' : '') + '</div>' +
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
