# News refresh spec — Mission Control "Breaking history" carousel

This is the single source of truth for how the news slides in
`mission-control.html` are written. The every-5-days cloud routine reads
this file and follows it exactly. A human can also run it on demand by
telling Claude Code "refresh the news, following .claude/news-refresh.md".

## Goal

Replace the five current-events slides in the "Breaking history" carousel
with five fresh stories that (a) are genuinely trending in reputable news
right now and (b) connect cleanly to the AP World History: Modern course.
This is a study aid for high-school students, so accuracy, sourcing, and
tone matter more than novelty.

## Step 1 — Find the stories

Use WebSearch (and WebFetch to confirm details) across high-quality
outlets: Associated Press, Reuters, BBC, NPR, PBS, The Guardian, major
national papers, and topic authorities (EIA for energy, BLS for jobs,
Nature/Quanta for science). Prefer wire services and primary sources.

Pick FIVE stories from the last ~7 days that map onto AP World themes:
governance and the state, economic systems and trade, technology and
industrialization, environment, conflict and its aftermath, culture and
knowledge, empire and its legacies. Aim for a spread of units and topics —
do not pick five stories about the same thing. Avoid graphic tragedy,
partisan hot-takes, and anything you cannot verify in at least two
reputable sources. When a story is contested or a claim is disputed, say
so plainly in the blurb ("OpenAI says…", "still being checked").

## Step 2 — Write each slide

Match the existing house style exactly. Each slide is:

```html
      <article class="slide">
        <div>
          <h2>Headline as a plain declarative sentence, ending in a period.</h2>
          <p>First paragraph: what happened, ~2 sentences, concrete and factual.</p>
          <p>Second paragraph: the tension, stakes, or dispute, ~2 sentences.</p>
        </div>
        <aside class="lens">
          <b>AP World lens &middot; Unit N</b>
          <p>One-line takeaway: the historical throughline in plain words.</p>
          <ul class="lens-q">
            <li>An analytical question linking the story to course content.</li>
            <li><span class="norm">Normative</span> A should/ought question with no clean answer.</li>
            <li>A comparison or continuity-and-change question to the past.</li>
          </ul>
        </aside>
      </article>
```

Rules:
- The FIRST of the five must be `<article class="slide active">`; the other
  four are `<article class="slide">`. Exactly one `active`.
- Unit tag is `Unit N` or `Unit N &amp; M` (units 1–9). Pick the unit(s)
  the story actually illuminates.
- Exactly three `<li>` questions per slide, and exactly one carries
  `<span class="norm">Normative</span>` (the should/ought one).
- **No em dashes anywhere** — not `&mdash;` and not the literal `—`
  character. Use commas, colons, semicolons, or periods. En dashes
  (`&ndash;`) are fine only inside compound names ("Navier–Stokes",
  "post–Cold War", numeric ranges like "Sept. 1–10").
- Use HTML entities the rest of the file uses: `&ldquo; &rdquo;` for quotes,
  `&rsquo;` for apostrophes, `&middot;` for the dot, `&amp;` for "&".
- Keep blurbs tight (roughly 2 short sentences each) and readable for a
  high-school audience. No hype, no editorializing in the blurb itself.

## Step 3 — Update the file

1. In `mission-control.html`, replace everything between
   `<div class="slides">` and its matching closing `</div>` (the one
   immediately before `<div class="news-controls">`) with the five new
   `<article class="slide">…</article>` blocks. The carousel JS
   auto-generates the dots and timer from the slide count, so no JS edits.
2. Update the footer date range in the `.foot` paragraph to
   `Sept. 1&ndash;DD, 2026` (or the correct month/range) to reflect the
   window the stories were drawn from. Keep the "News sources:" label.
3. Do not touch any other part of the file.

## Step 4 — Verify

- Confirm there are exactly 5 `<article class="slide"` occurrences and
  exactly one contains `slide active`.
- Confirm zero em dashes remain in the file:
  `grep -nP "\xe2\x80\x94|&mdash;" mission-control.html` must return nothing.
- Confirm exactly five `<span class="norm">Normative</span>` occurrences.

## Step 5 — Open a pull request (do NOT push to main)

- Create a branch named `news-refresh-YYYY-MM-DD`.
- Commit only `mission-control.html` with a message summarizing the five
  headlines.
- Open a PR against `main` with `gh pr create`. The PR body must list all
  five headlines, each with its unit tag and a source link, so the diff can
  be reviewed at a glance. Title: "News refresh — <date>".
- Leave it as a PR for human review. Never merge and never push to `main`.
