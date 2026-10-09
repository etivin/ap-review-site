/* activity.js: records COMPLETED review activities per unit so the dashboard
   progress rings only move when a student actually does something.
     - games:  a game is finished (Interrogate won, Hex Web goal reached,
               Empire Road 10 correct gates, in-page matching game solved)
     - videos: a YouTube review video is actually played (60% of it, or 8 min)
   MCQ and flashcards are tracked separately by spaced.js (real reviews only).
   Stored at apReview_v1.components['u'+n] = {
     done: { game: {id:ts}, video: {id:ts} }, gameIds:[...], videoIds:[...], lastDone:ts } */
(function () {
  var KEY = 'apReview_v1';
  function load() { try { return JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) { return {}; } }
  function save(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {} }
  function unitOf() { var m = (location.pathname || '').match(/unit(\d+)/i); return m ? m[1] : null; }
  function compFor(s, u) {
    s.components = s.components || {};
    return (s.components['u' + u] = s.components['u' + u] || {});
  }

  function done(kind, id, unit) {
    unit = unit || unitOf();
    if (!unit || !id) return;
    var s = load(), c = compFor(s, unit), now = Date.now();
    c.done = c.done || {};
    var bucket = (c.done[kind] = c.done[kind] || {});
    bucket[id] = now;
    c.lastDone = now;
    save(s);
  }
  window.APWH_ACTIVITY = { done: done };

  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  function boot() {
    var unit = unitOf();
    if (!unit) return;
    var isHub = /unit\d+\.html$/i.test(location.pathname) || /\/unit\d+$/i.test(location.pathname);

    /* ---- Unit hub page: record what games and videos exist (the denominators) ---- */
    if (isHub) {
      var gameIds = [];
      Array.prototype.forEach.call(document.querySelectorAll('#pg-games a[href]'), function (a) {
        var m = (a.getAttribute('href') || '').match(/unit\d+-(\w+)\.html/i);
        if (m && m[1] !== 'map' && gameIds.indexOf(m[1]) < 0) gameIds.push(m[1]);
      });
      // In-page games: credit when their end screen appears AND the game was
      // genuinely finished (not skipped, idled through, or ended early).
      INPAGE.forEach(function (g) {
        var el = document.querySelector((g.scope || '#pg-games') + ' ' + g.sel);
        if (!el) return;
        gameIds.push(g.id);
        new MutationObserver(function () {
          var ok = false;
          try { ok = g.finished(el); } catch (e) {}
          if (ok) done('game', g.id, unit);
        }).observe(el, { attributes: true, attributeFilter: ['style', 'class'], childList: true, subtree: true, characterData: true });
      });
      var videoIds = [];
      Array.prototype.forEach.call(document.querySelectorAll('iframe[src*="youtube.com/embed/"]'), function (f) {
        var vid = videoId(f.getAttribute('src'));
        if (vid && videoIds.indexOf(vid) < 0) videoIds.push(vid);
      });
      var s = load(), c = compFor(s, unit);
      c.gameIds = gameIds; c.videoIds = videoIds;
      save(s);
      trackVideos(unit);
    }
  }

  function shown(el) { return el.style.display !== 'none' && el.style.display !== ''; }
  function txt(id) { var e = document.getElementById(id); return e ? e.textContent : ''; }
  var INPAGE = [
    // Narrative matching (all units): success panel only appears once every pair is matched.
    { id: 'match', sel: '#ng-success, #match-success', finished: function (el) { return el.style.display !== 'none'; } },
    // Jeopardy: every tile played (the End Game button alone does not count).
    { id: 'jeopardy', sel: '#jeop-winner', finished: function (el) {
        return shown(el) && document.querySelectorAll('#jeop-board .jeop-cell').length > 0 &&
               !document.querySelector('#jeop-board .jeop-cell:not(.used)'); } },
    // Sort It: submitted with every card sorted.
    { id: 'sortit', sel: '#sortit-score', finished: function (el) {
        return shown(el) && !Array.prototype.some.call(document.querySelectorAll('#sortit-cards .sortit-card, .sortit-card'),
               function (c) { return !c.dataset.choice; }); } },
    // Speed Quiz: finished all questions with at least half right (no idling through).
    { id: 'speedquiz', sel: '#sq-final', finished: function (el) {
        var m = txt('sq-final-correct').match(/(\d+)\s*\/\s*(\d+)/);
        return shown(el) && m && +m[1] * 2 >= +m[2]; } },
    // Timeline Builder: wrong picks never advance, so reaching the result means every event was placed.
    { id: 'timeline', sel: '#tl-result', finished: shown },
    // Asteroid Blaster: survive the mission (a destroyed ship does not count).
    { id: 'asteroid', sel: '#ast-end', finished: function (el) {
        return el.classList.contains('show') && !/over|destroyed/i.test(txt('ast-end-title')); } },
    // Source Line Warm-up: a real (8+ word) answer checked on the final document.
    { id: 'warmup', sel: '#warmup-result', finished: function (el) {
        var m = txt('warmup-doc-num').match(/(\d+)\s+of\s+(\d+)/);
        return m && m[1] === m[2] && el.textContent.trim() && !/too short/i.test(el.textContent); } },

    // Source Analysis drills (Unit 7). These have no end screen, so "finished" is defined here.
    // Red / Green Sort: every sentence in the set sorted.
    { id: 'redgreen', scope: '#pg-source', sel: '#rg-cards', finished: function (el) {
        var cards = el.querySelectorAll('.rg-card');
        return cards.length > 0 && !Array.prototype.some.call(cards, function (c) {
          return !c.classList.contains('correct') && !c.classList.contains('wrong'); }); } },
    // Isolation Drill: a real sentence written, then checked against the model, on 3 different documents.
    { id: 'isolation', scope: '#pg-source', sel: '#iso-model', finished: wroteOn('isolation', 'iso-text', 'iso-doc', 3) },
    // Paragraph Upgrade: same, on 2 different paragraphs.
    { id: 'paraup', scope: '#pg-source', sel: '#pu-model', finished: wroteOn('paraup', 'pu-text', 'pu-para', 2) }
  ];

  // Counts distinct prompts where the student wrote 8+ words before revealing the model.
  // Saved at components['uN'].drills[id] = [prompt keys], so the count carries across visits.
  function wroteOn(id, textId, promptId, need) {
    return function (el) {
      if (!el.classList.contains('show')) return false;
      var t = document.getElementById(textId), p = document.getElementById(promptId);
      var words = t ? t.value.trim().split(/\s+/).filter(Boolean).length : 0;
      var key = p ? p.textContent.trim().slice(0, 120) : '';
      var unit = unitOf(), s = load(), c = compFor(s, unit);
      c.drills = c.drills || {};
      var seen = (c.drills[id] = c.drills[id] || []);
      if (words >= 8 && key && seen.indexOf(key) < 0) { seen.push(key); save(s); }
      return seen.length >= need;
    };
  }

  /* ---- YouTube videos: credit only real playback time ---- */
  function videoId(src) { var m = (src || '').match(/youtube\.com\/embed\/([\w-]{6,})/); return m ? m[1] : null; }

  function trackVideos(unit) {
    var frames = Array.prototype.slice.call(document.querySelectorAll('iframe[src*="youtube.com/embed/"]'));
    if (!frames.length) return;
    frames.forEach(function (f, i) {
      var src = f.getAttribute('src');
      if (!/enablejsapi=1/.test(src)) f.setAttribute('src', src + (src.indexOf('?') < 0 ? '?' : '&') + 'enablejsapi=1');
      if (!f.id) f.id = 'apwh-yt-' + i;
    });
    var prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = function () {
      if (typeof prev === 'function') try { prev(); } catch (e) {}
      frames.forEach(function (f) { attach(f, unit); });
    };
    if (window.YT && window.YT.Player) { window.onYouTubeIframeAPIReady(); return; }
    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(tag);
  }

  function attach(frame, unit) {
    var vid = videoId(frame.getAttribute('src'));
    if (!vid) return;
    var watched = 0, lastT = null, timer = null, credited = false, player;
    function tick() {
      try {
        var t = player.getCurrentTime(), dur = player.getDuration() || 0;
        // Count forward progress only; a jump of more than 2.5s is a seek, not watching.
        if (lastT != null) { var dt = t - lastT; if (dt > 0 && dt <= 2.5) watched += dt; }
        lastT = t;
        var need = dur ? Math.min(dur * 0.6, 480) : 480;
        if (!credited && watched >= need) { credited = true; done('video', vid, unit); }
      } catch (e) {}
    }
    player = new YT.Player(frame.id, {
      events: {
        onStateChange: function (e) {
          if (e.data === YT.PlayerState.PLAYING) {
            lastT = null;
            if (!timer) timer = setInterval(tick, 1000);
          } else if (timer) { tick(); clearInterval(timer); timer = null; }
        }
      }
    });
  }

  ready(boot);
})();
