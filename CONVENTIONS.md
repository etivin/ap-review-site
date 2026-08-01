# Site Naming Conventions

This file is the single source of truth for how things are named across the AP World History
review site. When you add a new unit page or edit an existing one, follow these so that a change
in one place looks the same everywhere and is easy to find.

## Canonical unit names

Use these exact names everywhere a unit is labeled (sidebars, home cards, hero headings, walkthrough
titles). These match the official College Board unit titles.

| Unit | Canonical name |
|------|----------------|
| 1 | The Global Tapestry |
| 2 | Networks of Exchange |
| 3 | Land-Based Empires |
| 4 | Transoceanic Interconnections |
| 5 | Revolutions |
| 6 | Consequences of Industrialization |
| 7 | Global Conflict |
| 8 | Cold War & Decolonization |
| 9 | Globalization |

Formatting:
- Sidebar / nav / card labels: `Unit N — Name` (em-dash, spaces around it). Use `&amp;` for the
  ampersand in Unit 8.
- Unit-page hero heading (`<h2>` inside `.pg-hero`): `Unit N: Name` (colon — this element keeps the
  colon style site-wide; the sidebar keeps the em-dash).
- `sbmcq.js` `UNIT_TITLES`: `'Unit N &mdash; Name'` (HTML entities, inserted via innerHTML).
- Do **not** rename AP topic sub-titles (e.g. "4.4 — Maritime Empires Established"). Those are official
  topic names and are independent of the unit name.

## Page-section ids (the `pg-*` scheme)

Every major section on a unit page is `<div class="page" id="pg-XXX">`. Reuse these ids; don't invent
per-unit variants:

`pg-home` · `pg-mcq` · `pg-walk` · `pg-writing` · `pg-guide` · `pg-tips` · `pg-flash` · `pg-brain`
· `pg-spice` · `pg-source` · `pg-visual` · `pg-games`

Unit-specific one-offs that are allowed because the feature only exists there:
`pg-maps` (Unit 8), `pg-slides` / `pg-progress` (Unit 7), `pg-web` (Unit 9 — the Globalization Web).

Nav config (`GROUPS` / `SUBLABELS`, or `NAV_GROUPS`) auto-filters ids that don't exist on the page, so
don't list dead ids like `pg-write` — use `pg-writing`.

## MCQ practice containers

Reuse these ids/classes in every unit's MCQ section:
`#mcq-home`, `#mcq-session.qsession` (the session div must carry `class="qsession"`),
`#mcq-mixed-btn`, `#mcq-all-btn`, `#qbody`, `#qpbf`.

## Shared CSS class names (use these spellings)

| Component | Canonical class |
|-----------|-----------------|
| Timeline year badge | `.tl-year-badge` |
| Flashcard back-of-card tag | `class="card-tag back-tag"` markup + standalone `.back-tag{…!important}` rule |
| Brain-dump reveal state | `.active` (e.g. `.bd-reveal.active`) — not `.show` |

## Unit hook for shared modules

The shared writing module (`writing-drills.js`) and the stimulus module (`sbmcq.js`) key off a plain
integer. On the writing mount, provide **both** the numeric hook and the display label:

```html
<div class="wd-mount" data-unit="N" data-unit-label="Unit N"></div>
```

`data-unit="N"` is the canonical numeric hook; `data-unit-label` supplies the display string. New
mounts should always include `data-unit`.

## Flashcard section heading

Eyebrow `Unit N Flashcards` + `<h2>Key Terms & Concepts</h2>`. Keep the unit number in the eyebrow
correct (a copy-paste "Unit 1" on Unit 2 was a real bug — double-check it when cloning a page).
