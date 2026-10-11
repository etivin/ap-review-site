# Tivin Teaches: AP World History review site

**Read this file first.** It describes how the whole site is built, so you can work on any
unit without reading all nine unit pages. If you change how something is built (add a shared
module, move a feature out of the unit pages, rename an id), update this file in the same commit.

Owner: Eli Tivin (AP World History teacher, Archbishop Moeller High School). Students use the
site; Eli edits content.

---

## 1. Ground rules (always)

1. **No em dashes anywhere on the site** (the long dash U+2014, written `&mdash;` in HTML). Use a colon, a comma, or an en dash.
2. **Use text Eli supplies verbatim** (syllabus lines, quotes, test questions). Don't paraphrase.
3. **Progress is earned only by doing.** Opening a tab never awards progress. Anything new that a
   student completes must report it: flashcards and MCQs through `SPACED.recordReview(...)`, games
   through an end-screen element watched by `activity.js` (or `APWH_ACTIVITY.done('game', id)`).
4. **Multiple-choice questions you write:** the correct option must **not** be the longest. Write
   distractors as long and specific as the key, and vary the answer position (A–D). The MCQ engine
   does **not** shuffle options. Check: key length ÷ mean distractor length ≈ 1.0.
5. **No hidden controls.** No secret click targets, password gates, or `display:none` buttons that
   never appear. Everything a student can trigger should be visible.
6. **No build step.** Plain HTML/CSS/JS, plain globals (`window.X`), no imports, no frameworks,
   no npm at runtime. Scripts are loaded with `<script src>`.
7. **Content belongs in data files, not in pages.** If a feature exists on more than one unit, it
   lives in a shared `*.js` engine + a data file keyed by unit number. Don't paste a new copy of an
   engine into a unit page.
8. **Theme tokens, not hard-coded colors.** Use the page tokens (`--ink --mid --muted --red --white
   --paper --border --border2 --cream`). Dark mode (`theme.css`) redefines them. Each unit sets its
   own `--red` accent, so shared modules automatically take the unit's color.
9. **Canonical unit names** (exact spelling, used in sidebars, headings, cards):

   | Unit | Name | | Unit | Name |
   |---|---|---|---|---|
   | 1 | The Global Tapestry | | 6 | Consequences of Industrialization |
   | 2 | Networks of Exchange | | 7 | Global Conflict |
   | 3 | Land-Based Empires | | 8 | Cold War & Decolonization (`&amp;` in HTML) |
   | 4 | Transoceanic Interconnections | | 9 | Globalization |
   | 5 | Revolutions | | | |

   Label format: `Unit N: Name`. Never rename official AP topic titles (e.g. "4.4: Maritime Empires Established").
10. **Sourcing vocabulary is HIPP:** Historical Situation, **Intended Audience** (never just "Audience"),
    Purpose, Point of View. Never write "HAPP".

## 2. Deploy, preview, verify

- `main` **is production.** Every push to `main` deploys to **https://tivinteaches.com** via
  `.github/workflows/pages.yml` (GitHub Actions → Pages). Commit straight to `main` only when the
  change is verified.
- **Local preview:** `.claude/launch.json` config `class-site` (PowerShell `serve.ps1`, port 5173).
  No Node or Python is installed on Eli's machine.
- **Verify in the browser** before committing: load the page, open the tab you changed with
  `showTab('pg-xxx')`, check the console for errors, and exercise the feature. Known noise you can
  ignore: `Invalid LatLng` errors from the map iframe when it's hidden, and a 404 for
  `unit 7 slides.pdf`.
- Commit trailer used in this repo: `Co-Authored-By: Claude <model> <noreply@anthropic.com>`.

## 3. Site map

| Page | What it is |
|---|---|
| `index.html` | Home dashboard ("Mission Control"): unit cards with progress rings, search, news carousel, study timer. |
| `unit1.html` … `unit9.html` | The nine unit hubs (anatomy in §4). |
| `unitN-map.html` | Interactive Leaflet map, embedded in each unit's Maps tab. Units 1, 5–9 use `unit-map-engine.js` + a `window.UNIT_MAP` object; Units 2–4 are hand-built. |
| `unitN-interrogate.html` | "Myth Sweeper" fact/myth game, one per unit, linked from the Games tab. |
| `unit2-hexweb.html`, `unit3-racer.html` | One-off games (Hex Web, Empire Road). |
| `cumulative.html` + `cumulative.js` | Cumulative Review: cross-unit MCQ mix. |
| `flashcards.html` | Flashcard Hub (Anki-style decks, custom study, browse) for every unit. |
| `sbmcq.html` | "Attack the Stimulus MCQ" strategy page and worked examples. |
| `writing-guide.html` | How to write the SAQ, LEQ, and DBQ. |
| `brain-sculptor.html` | How to study. |
| `resources.html` | Review videos and outside resources. |
| `fullcourse.html` | Course narrative. |
| `timer.html` | Study timer. |
| `classic-hub.html` | Old home page (kept for reference); `mission-control.html` redirects to `index.html`. |
| `source-docs/released-frqs/` | Catalog of every released College Board FRQ (README) + prompt PDFs. Use only to fill gaps. |

## 4. Anatomy of a unit page (`unitN.html`)

One HTML file per unit. Fixed sidebar + top bar + a set of tab "pages" that `showTab(id)` switches.

### 4.1 Tabs (`<div class="page" id="pg-…">`)

| id | Tab | Built by |
|---|---|---|
| `pg-home` | Overview (hero, videos, unit timeline) | per-unit hero and videos; timeline shared: `timeline.js` + `timeline-data.js` |
| `pg-mcq` | MCQ Practice | shared: `mcq-engine.js` + `mcq-bank.js` |
| `pg-walk` | MCQ Walkthrough | shared: `sbmcq.js` (`renderWalk(el,{unit})`) |
| `pg-writing` | Writing Drills | shared: `writing-drills.js` + `writing-prompts.js` |
| `pg-guide` | Study Guide | shared: `study-guide.js` + `study-guide-data.js` |
| `pg-source` | Documents (sourcing practice) | shared: `source-practice.js` + `source-practice-data.js` |
| `pg-visual` | Visual Sources | shared: `visual-sources.js` + `visual-sources-data.js` |
| `pg-maps` | Maps | iframe of `unitN-map.html` |
| `pg-flash` | Flashcards | shared: `unit-flashcards.js` + `flashcard-data.js` |
| `pg-glossary` | Glossary | shared: `glossary.js` + `glossary-data.js` |
| `pg-brain` | Brain Dump | shared: `brain-dump.js` + `brain-dump-data.js` (+ `bd-confidence.js` layer) |
| `pg-spice` | SPICE-T Analysis | shared: `spice.js` + `spice-data.js` |
| `pg-games` | Games | shared: `review-games.js` + `review-games-data.js`, plus links to `unitN-interrogate.html` etc. |

Unit-only tabs: `pg-write` (Unit 7 FRQ Grader), `pg-slides` (Unit 7 class slides), `pg-web` (Unit 9 Globalization Web).
Reuse these ids; don't invent per-unit variants.

### 4.2 Navigation (shared: `unit-shell.js`)

`unit-shell.js` (loaded last, just before `</body>`) builds the sidebar groups into
`#sb-nav-items`, adds the sub-tab bar under the top bar, and defines `window.showTab(id)`.
The six groups are fixed for every unit:
Overview · Practice (`pg-mcq pg-walk pg-web`) · Writing (`pg-write pg-writing`) · Study Guide ·
Sources (`pg-source pg-visual pg-maps`) · Review & Recall (`pg-flash pg-glossary pg-brain pg-spice pg-games`).
Tabs missing from a page are skipped. Labels live in `unit-shell.js`; a unit can override them
with `window.UNIT_SHELL = {titles:{...}, sublabels:{...}}` set before the script loads (no unit
needs to today). Any element with `data-tab="pg-xxx"` opens that tab; `unitN.html#pg-xxx` deep-links;
`#g-<slug>` opens a glossary term. On every switch the shell fires a `unit:tab` event
(`e.detail.id`).
`nav-flyout.js` and `tour.js` read each sidebar item's `data-subs`.

### 4.3 Shared includes every unit loads

`<head>`: `mission-theme.css`, `mc-mode.js`, `theme.css`, `theme.js`, `bedtime.js`, `brand.css`,
`brand.js`, `search.js`, `nav-flyout.js`, `tour.js`, `glossary-data.js`, `glossary.js`,
`flashcard-data.js`, `sbmcq.css/js`, `review-games.css`, `unit-flashcards.css`, `study-guide.css`, `brain-dump.css`, `visual-sources.css`, `source-practice.css`, `spice.css`.
End of `<body>`: `spaced.js`, `activity.js`, `flashcard-tags.js`, `unit-flashcards.js`,
`mcq-bank.js`, `mcq-engine.js`, `brain-dump-data.js`, `brain-dump.js`, `bd-confidence.js`, `writing-prompts.js`, `writing-drills.js`, `source-practice-data.js`, `source-practice.js`, `spice-data.js`, `spice.js`, `timeline-data.js`, `timeline.js`, `visual-sources-data.js`, `visual-sources.js`, `study-guide-data.js`, `study-guide.js`, and last `unit-shell.js`.
Inside `#pg-games`: `review-games-data.js`, `review-games.js`, then the mount call.

### 4.4 Mount points (copy exactly; N = unit number)

```html
<div id="mcq-root"></div>  <script>APWH.mountMCQ(document.getElementById('mcq-root'), {unit:'N'});</script>
<div class="wd-mount" data-unit="N" data-unit-label="Unit N"></div>
<div class="ufc-mount" data-unit="N"></div>
<div class="sg-mount" data-unit="N"></div>
<div class="bd-mount" data-unit="N"></div>
<div class="vs-mount" data-unit="N"></div>
<div class="sp-mount" data-unit="N"></div>
<div class="spice-mount" data-unit="N"></div>
<div class="gl-mount" data-unit="N"></div>
<div id="review-games"></div>  <script>APWH_GAMES.mount(document.getElementById('review-games'), GAME_DATA[N]);</script>
```
Flashcards tab heading: eyebrow `Unit N Flashcards` + `<h2>Key Terms &amp; Concepts</h2>`.

## 5. Shared modules: what they do and where their data lives

| File | Role | Data / API |
|---|---|---|
| `mcq-bank.js` | All MCQs | `APWH_MCQ.units[n] = {title, topics:[{id,name}], questions:{'n.x':[{s, sl, simg?, q, o:[4], c, e}]}}`. New topics: `addTopic(u,id,name,qs)` block before `/* @@APPEND_UNITS_HERE@@ */`. |
| `mcq-engine.js` | MCQ UI (Quick Check / Test Mode, confidence tap) | `APWH.mountMCQ(el, {unit} or {pool})` |
| `sbmcq.js` | Stimulus-MCQ strategy + worked examples | `SBMCQ_WORKED` list; `renderWalk(el,{unit})`, `renderCheatsheet(el)` |
| `flashcard-data.js` | **Single source of truth for flashcards** | `FC_DATA[n] = [[topic, term, def], ...]`, `FC_UNITS`; also feeds Brain Dump for Units 6, 7, 9 |
| `flashcard-tags.js` | AP theme + region tags per term | `FC_TAGS[term] = "GESCTN EA,SA"` (themes, then regions) |
| `unit-flashcards.js/.css` | Unit Flashcards tab (Flashcard Hub layout) | mounts `.ufc-mount` |
| `flashcards.html` | Flashcard Hub | same card ids as the unit tabs |
| `glossary-data.js` / `glossary.js` | Glossary tab + search terms | `GLOSSARY[n] = [[topic, term, def], ...]` |
| `review-games.js/.css` + `review-games-data.js` | Games tab: Jeopardy, Narrative Matching, Sort It, Source Line Warm-up, Speed Quiz, Timeline Builder, Asteroid Blaster | `GAME_DATA[n] = {jeopardy, matching?, sortit, warmup?, speedquiz, timeline, asteroid}`; shapes in the header of `review-games.js`. Leave a game out to hide it. Units 2–4 omit `matching` (they still have their own inline `ng-*` matching game). |
| `writing-drills.js/.css` + `writing-prompts.js` | Writing Drills tab | `WRITING_PROMPTS[n] = {saq:[{source, excerpt, parts, partExemplars}], leq:[{intro, prompt, rubric}], dbq:[{documents:[{n, source, text, image?, imageAlt?, imageCredit?}], rubric}]}`; add prompts as a merge IIFE at the end of the file |
| `spaced.js` | Spaced-review store + streak banner | `SPACED.recordReview(itemId, correct, confidence)`; ids: MCQ `u{n}_{topic}_{idx}`, flashcards `u{n}_fc_{slug(term)}`, reverse side `rv_u{n}_fc_{slug}` |
| `activity.js` | Records finished games and watched videos | `INPAGE` table watches end-screen ids: `#jeop-winner #match-success/#ng-success #sortit-score #sq-final #tl-result #ast-end #warmup-result` + Documents tab `#sa-model #rg-cards #pu-model`. Keep these ids. |
| `bd-confidence.js` | Predict-before-reveal layer on Brain Dump | hooks `#bd-reveal.active`, `.bd-card-list` |
| `timeline.js` + `timeline-data.js` | Overview tab illustrated timeline | `TIMELINE_DATA[n] = [{year, title, topic?, desc, img, alt, pos?}]`; renders into `<div id="tl-list" data-unit="N">`, wires `#scroll-timeline-btn` |
| `spice.js/.css` + `spice-data.js` | SPICE-T cards | `SPICE[n] = [{key:"s"|"p"|"i"|"c"|"e"|"t", desc, items:[html]}]`; category names fixed in `spice.js`; mount `<div class="spice-mount" data-unit="N">` |
| `source-practice.js/.css` + `source-practice-data.js` | Documents tab: Sourcing Practice drill (+ optional Red / Green Sort, Paragraph Upgrade) | `SOURCE_PRACTICE[n] = {docs:[{type, sl, excerpt?, img?, models:{pov, purpose, situation, audience}}], redgreen?, paraup?}`; mount `<div class="sp-mount" data-unit="N">`; ids `#sa-* #rg-* #pu-*` are watched by `activity.js` |
| `visual-sources.js/.css` + `visual-sources-data.js` | Visual Sources (AP question + HIPP analysis per image) | `VISUAL_SOURCES[n] = {items:[{num, title, source, desc, img or imgs/imgTitles/imgSources, q, o, c, e, model:{h,a,p,pov}}]}`; mount `<div class="vs-mount" data-unit="N">` |
| `brain-dump.js/.css` + `brain-dump-data.js` | Brain Dump (5-minute write, then reveal) | `BRAIN_DUMP[n] = {topics:[{id, name, stem, points:[{t,d}]}], fromFlashcards?}`; mount `<div class="bd-mount" data-unit="N">`. Load before `bd-confidence.js`. |
| `study-guide.js/.css` + `study-guide-data.js` | Study Guide accordion | `STUDY_GUIDE[n] = [{num, title, body}]`; mount `<div class="sg-mount" data-unit="N">` |
| `unit-shell.js` | Unit sidebar, sub-tab bar, `showTab`, deep links, `data-tab` buttons | optional `window.UNIT_SHELL` overrides; `unit:tab` event |
| `tour.js` | "How to Work This Unit" game plan + spotlight tour | reads `data-subs` and `showTab` |
| `nav-flyout.js` | Sidebar hover menus | reads `data-subs` |
| `search.js` | Site search (`/` or Ctrl+K) | hand-built `UNITS`/`PAGES` index; add new resources there |
| `mc-mode.js` + `mission-theme.css` | Mission Control theme + shared top bar (`#mc-bar`) on every page | sets `<html data-mc="on">` |
| `theme.js/.css` | Dark mode | `localStorage.mcTheme`, `[data-theme="dark"]` |
| `brand.js/.css` | Tivin Teaches logo lockup | |
| `bedtime.js` | 8 PM–5 AM "go to sleep" overlay | |
| `unit-map-engine.js` + `world-basemap.js` + `unit-map.css` | Unit maps | `window.UNIT_MAP = {routes, polities, themes}` |
| `cumulative.js` | Cumulative Review logic | reads `mcq-bank.js` |

### Browser storage keys
`apReview_v1` (everything about progress: `spaced`, `studyLog`, `components['uN']` games/videos,
`lastSeen`, legacy `mcq`/`drafts`). **Always read-modify-write the current value; never write back
a copy loaded earlier** (that erases progress saved since). Others: `mcTheme`, `fcHub_v1` (Hub
settings), `ufc_v1` (unit flashcard settings), `unitPlan_uN`, `unitTourSeen`, `u3RacerBest`,
`apwh-timer-*`.

## 6. Not shared yet (each unit has its own inline copy)

These still live inside the unit pages, in slightly different formats per unit. To change one,
you currently have to edit each unit. **The plan is to move each into a shared engine + data file
(like the games and flashcards were)**; update this table as each one moves.

| Feature | Current state | Target |
|---|---|---|
| ~~Sidebar nav / `showTab`~~ | **Done:** `unit-shell.js` | |
| ~~Study Guide (`pg-guide`)~~ | **Done:** `study-guide.js` + `study-guide-data.js` | |
| ~~Brain Dump (`pg-brain`)~~ | **Done:** `brain-dump.js` + `brain-dump-data.js` | |
| ~~Visual Sources (`pg-visual`)~~ | **Done:** `visual-sources.js` + `visual-sources-data.js` | |
| ~~Documents (`pg-source`)~~ | **Done:** `source-practice.js` + `source-practice-data.js` (Unit 7 adds Red / Green Sort and Paragraph Upgrade) | |
| ~~SPICE-T (`pg-spice`)~~ | **Done:** `spice.js` + `spice-data.js` | |
| ~~Overview timeline (`pg-home`)~~ | **Done:** `timeline.js` + `timeline-data.js`. Its CSS (`.tl-item` etc.) is still in each page and differs slightly per unit | move to a shared `timeline.css` |
| Narrative Matching (Units 2–4) | Extra inline `ng-*` game next to the shared games | move pairs into `GAME_DATA[n].matching`, delete the inline copy |

## 7. Recipes

- **Fix or add a flashcard:** edit `flashcard-data.js` only (and its tag in `flashcard-tags.js`).
  Renaming a term resets that card's review history.
- **Add a glossary term:** `glossary-data.js` (shows in Glossary and search).
- **Add MCQs:** `mcq-bank.js` (see rule 4). At least 5 questions per topic.
- **Edit a study guide section:** `study-guide-data.js` → `STUDY_GUIDE[n]`.
- **Edit Brain Dump topics, starters or key points:** `brain-dump-data.js` → `BRAIN_DUMP[n]`.
- **Edit an Overview timeline event:** `timeline-data.js` → `TIMELINE_DATA[n]`.
- **Edit SPICE-T bullets:** `spice-data.js` → `SPICE[n]`.
- **Edit a Documents-tab source:** `source-practice-data.js` → `SOURCE_PRACTICE[n]`.
- **Edit a visual source:** `visual-sources-data.js` → `VISUAL_SOURCES[n]` (MCQ rule 4 applies to its question).
- **Edit game content:** `review-games-data.js` → `GAME_DATA[n]`.
- **Add a writing prompt:** append a merge IIFE to `writing-prompts.js`.
- **New shared feature:** write `feature.js` (+ `.css`) exposing one global with a `mount(el, data)`
  function; put content in `feature-data.js` keyed by unit; add a mount point to each unit; make
  completion report through `SPACED`/`activity.js`; add the tab to `search.js`; document it here.
- **New unit tab:** add `<div class="page" id="pg-xxx">` with the standard `.pg-nav-row` and
  `.pg-hero`, then add it to `PAGE_TITLES`, `GROUPS`, `SUBLABELS` (and `search.js` tabs).

## 8. Content provenance

Units 1–8 content mostly comes from Eli's materials and tests. Unit 9's MCQs, documents, visuals,
SPICE-T, all of the shared game content for Units 1–4 and 9, and the gap-filling study-guide
sections and the Unit 9 Brain Dump sentence starters were written by Claude (October 2026). Released College Board FRQs are cataloged in
`source-docs/released-frqs/README.md`. See also `SECURITY-NOTES.md`.
