/* ─────────────────────────────────────────────────────────────
   leaderboard-admin.js  "Leaderboards" tab on class-stats.html (teacher only).
   Shows each racing game's class top 5 (from the class-stats Worker, GET /board/list) and
   lets Eli remove a score that looks fake (POST /board/remove). Students see only the
   numbers (leaderboard.js); the short browser id here is only to tell rows apart.
   ───────────────────────────────────────────────────────────── */
(function () {
  var NAMES = {
    racer: 'Unit 3: Empire Road', voyage: 'Unit 4: Sea Lanes', minecart: 'Unit 5: Coal Cart',
    rails: 'Unit 6: Iron Rails', tank: 'Unit 7: Front Line', sputnik: 'Unit 8: Space Race', freight: 'Unit 9: Global Freight'
  };
  var root;
  function $(id) { return document.getElementById(id); }
  function base() { return (window.CLASS_STATS && CLASS_STATS.base()) || 'https://tivinteaches.com/api/class-stats'; }
  function api(path, body) {
    var code = $('code') ? $('code').value.trim() : '';
    var o = { headers: { 'X-Teacher-Code': code } };
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
      '.lba{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:14px}' +
      '.lba .card{background:var(--white);border:1px solid var(--border);padding:12px 14px}' +
      '.lba h3{font-size:.9rem;font-weight:900;margin:0 0 8px}' +
      '.lba table{width:100%;border-collapse:collapse;font-size:.84rem}' +
      '.lba td{padding:5px 4px;border-top:1px solid var(--border)}' +
      '.lba td.n{font-weight:900;font-variant-numeric:tabular-nums}' +
      '.lba td.w{color:var(--muted);font-size:.72rem}' +
      '.lba button{font-size:.58rem;padding:5px 8px}';
    document.head.appendChild(s);
  }
  function load() {
    root.innerHTML = '<p class="note">Loading...</p>';
    api('/board/list').then(function (d) {
      var g = d.games || {}, h = '<p class="note">Each player\'s best score per game. Students see only the numbers. Remove a score that looks fake; that player can set a new one by playing.</p><div class="lba">';
      Object.keys(NAMES).forEach(function (k) {
        var rows = g[k] || [];
        h += '<div class="card"><h3>' + NAMES[k] + '</h3>';
        if (!rows.length) h += '<p class="note" style="margin:0">No scores yet.</p>';
        else {
          h += '<table>';
          rows.forEach(function (r, i) {
            h += '<tr><td>' + (i + 1) + '</td><td class="n">' + Number(r.score).toLocaleString() + '</td>' +
              '<td class="w" title="Browser id">' + String(r.who).slice(0, 6) + ' ' + String.fromCharCode(183) + ' ' +
              new Date(r.ts).toLocaleDateString() + '</td>' +
              '<td><button type="button" class="ghost" data-g="' + k + '" data-w="' + String(r.who).replace(/[^a-z0-9-]/g, '') + '">Remove</button></td></tr>';
          });
          h += '</table>';
        }
        h += '</div>';
      });
      root.innerHTML = h + '</div>';
    }).catch(function (e) { root.innerHTML = '<p class="msg bad">' + e.message + '</p>'; });
  }
  function init() {
    root = $('tab-board'); if (!root) return;
    css();
    var tab = document.querySelector('.tab[data-tab="tab-board"]');
    if (tab) tab.addEventListener('click', load);
    root.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-g]'); if (!b) return;
      b.disabled = true;
      api('/board/remove', { game: b.dataset.g, who: b.dataset.w }).then(load)
        .catch(function (err) { b.disabled = false; b.textContent = err.message; });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
