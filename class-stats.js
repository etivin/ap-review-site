/* ─────────────────────────────────────────────────────────────
   class-stats.js  "How did the class do?" for bank MCQs, no accounts.

   When a student answers a bank question (MCQ Practice, Cumulative Review, Work Through
   It), mcq-engine.js calls CLASS_STATS.submit(id, pick, ok, el). This sends the answer to
   the class-stats Worker (cloudflare/class-stats-worker.js) with a random browser id and
   shows the reply under the explanation: how many students got it right on their first
   try and how the picks split. Only the first answer from each browser counts.

   Nothing personal is sent: the id is random (localStorage "classStatsId").
   If the server is missing or slow, nothing shows and nothing breaks.
   Totals show only once MIN_N students have answered.
   On localhost it is off unless the page sets window.CLASS_STATS_URL.
   ───────────────────────────────────────────────────────────── */
(function () {
  var MIN_N = 5;
  var L = ['A', 'B', 'C', 'D', 'E'];

  function base() {
    if (window.CLASS_STATS_URL) return window.CLASS_STATS_URL;
    var h = location.hostname;
    if (/(^|\.)tivinteaches\.com$/.test(h)) return '/api/class-stats';
    if (/ap-review-site\.(pages\.dev|elitivin\.workers\.dev)$/.test(h)) return 'https://tivinteaches.com/api/class-stats';
    return null;
  }

  function who() {
    var id = null;
    try { id = localStorage.getItem('classStatsId'); } catch (e) {}
    if (id && /^[a-z0-9-]{16,40}$/.test(id)) return id;
    if (window.crypto && crypto.randomUUID) id = crypto.randomUUID();
    else id = 'x' + Date.now().toString(36) + Math.random().toString(36).slice(2, 14);
    try { localStorage.setItem('classStatsId', id); } catch (e) {}
    return id;
  }

  function css() {
    if (document.getElementById('cs-style')) return;
    var s = document.createElement('style');
    s.id = 'cs-style';
    s.textContent =
      '.cs-box{margin-top:10px;padding-top:9px;border-top:1px dashed var(--border2,#ccc);font-size:.8rem;line-height:1.45;color:var(--mid,#444)}' +
      '.cs-box strong{color:var(--ink,#111)}' +
      '.cs-bars{display:flex;gap:6px;margin-top:6px;flex-wrap:wrap}' +
      '.cs-bar{flex:1 1 52px;min-width:52px}' +
      '.cs-bar .cs-l{display:flex;justify-content:space-between;font-size:.72rem;font-weight:700;color:var(--mid,#444)}' +
      '.cs-bar .cs-t{height:6px;border-radius:3px;background:var(--border,#e5e5e5);overflow:hidden;margin-top:2px}' +
      '.cs-bar .cs-f{height:100%;background:var(--muted,#999)}' +
      '.cs-bar.cs-key .cs-f{background:var(--mx-grn,#2e7d4f)}' +
      '.cs-bar.cs-key .cs-l{color:var(--mx-grn,#2e7d4f)}' +
      '.cs-bar.cs-you .cs-l span:first-child::after{content:" (you)";font-weight:400}' +
      '.cs-wait{color:var(--muted,#888);font-style:italic}';
    document.head.appendChild(s);
  }

  function render(el, t, pick, key) {
    css();
    if (!t || !t.n || t.n < MIN_N) {
      el.innerHTML = '<span class="cs-wait">Class results show once ' + MIN_N + ' students have answered this one.</span>';
      return;
    }
    var pct = Math.round(t.right / t.n * 100);
    var nOpts = Math.max(4, key + 1, pick + 1, t.picks[4] ? 5 : 4);
    var h = '<strong>Class first tries:</strong> ' + pct + '% of ' + t.n + ' students got this right.';
    var wrong = -1, wn = 0;
    for (var j = 0; j < nOpts; j++) if (j !== key && t.picks[j] > wn) { wn = t.picks[j]; wrong = j; }
    if (wrong >= 0 && wn / t.n >= 0.2) h += ' Most common wrong answer: ' + L[wrong] + '.';
    h += '<div class="cs-bars">';
    for (var k = 0; k < nOpts; k++) {
      var p = Math.round((t.picks[k] || 0) / t.n * 100);
      h += '<div class="cs-bar' + (k === key ? ' cs-key' : '') + (k === pick ? ' cs-you' : '') + '">' +
           '<div class="cs-l"><span>' + L[k] + '</span><span>' + p + '%</span></div>' +
           '<div class="cs-t"><div class="cs-f" style="width:' + p + '%"></div></div></div>';
    }
    el.innerHTML = h + '</div>';
  }

  // id: u{unit}_{topic}_{idx}; pick/key: option index; el: where the result goes
  function submit(id, pick, key, el) {
    var b = base();
    if (!b || !el || !window.fetch || pick == null) return;
    var box = document.createElement('div');
    box.className = 'cs-box';
    box.hidden = true;
    el.appendChild(box);
    var ctl = window.AbortController ? new AbortController() : null;
    var timer = setTimeout(function () { if (ctl) ctl.abort(); }, 6000);
    fetch(b + '/answer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: id, pick: pick, ok: pick === key, who: who() }),
      signal: ctl ? ctl.signal : undefined
    }).then(function (r) { return r.ok ? r.json() : null; })
      .then(function (t) {
        clearTimeout(timer);
        if (!t || !t.picks || !box.isConnected) return;
        render(box, t, pick, key);
        box.hidden = false;
      })
      .catch(function () { clearTimeout(timer); });
  }

  window.CLASS_STATS = { submit: submit, render: render, base: base, MIN_N: MIN_N };
})();
