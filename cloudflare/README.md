# Cloudflare Workers

These files are not part of the GitHub Pages site. They are pasted into the Cloudflare
dashboard. When you change one here, paste it into the dashboard too.

- `night-lock-worker.js`: closes the site from 11:00 PM to 5:00 AM Eastern (see CLAUDE.md §2).
- `class-stats-worker.js`: class-wide MCQ totals with no accounts (steps below).

## Class stats: one-time setup (about 10 minutes)

Done on 2026-11-09 (database `class-stats`, Worker `class-stats`, route, `TEACHER_CODE`).
The steps stay here in case it ever has to be rebuilt.

Until this is done, the site works exactly as before: `class-stats.js` gets no answer
from the server and shows nothing.

1. **Make the database.** Cloudflare dashboard > Storage & Databases > D1 > Create.
   Name it `class-stats`.
2. **Make the table.** Open the new database > Console. Paste and run:

   ```sql
   CREATE TABLE IF NOT EXISTS answers (
     qid  TEXT NOT NULL,
     who  TEXT NOT NULL,
     pick INTEGER NOT NULL,
     ok   INTEGER NOT NULL,
     ts   INTEGER NOT NULL,
     PRIMARY KEY (qid, who)
   );
   CREATE INDEX IF NOT EXISTS answers_who ON answers (who, ts);
   CREATE TABLE IF NOT EXISTS custom_qs (
     unit    INTEGER NOT NULL,
     slot    INTEGER NOT NULL,
     data    TEXT NOT NULL,
     hidden  INTEGER NOT NULL DEFAULT 0,
     updated INTEGER NOT NULL,
     PRIMARY KEY (unit, slot)
   );
   ```

   (`custom_qs`, the teacher questions made on `class-stats.html`, was added on 2026-11-09.)

3. **Make the Worker.** Workers & Pages > Create > Worker. Name it `class-stats`, deploy
   the starter code, then Edit code: replace everything with `class-stats-worker.js` and Deploy.
4. **Connect the database.** Worker > Settings > Bindings > Add > D1 database.
   Variable name `DB`, database `class-stats`.
5. **Set the teacher code.** Worker > Settings > Variables and Secrets > Add, type Secret,
   name `TEACHER_CODE`, value: the code you'll type on `class-stats.html`.
6. **Add the route.** Worker > Settings > Domains & Routes > Add > Route:
   `*tivinteaches.com/api/class-stats*`, zone `tivinteaches.com`.
   This is more specific than the night lock's `*tivinteaches.com/*`, so these requests go to
   class-stats instead (the night lock still covers every page).
7. **Check it.** Open `https://tivinteaches.com/api/class-stats/q?id=u4_4.1_0`. You should see
   `{"id":"u4_4.1_0","n":0,...}`. Then open `https://tivinteaches.com/class-stats.html` and
   type your code.

## What it stores

One row per browser per question: the question id, a random browser id, the option picked,
right or wrong, and the time. Only the first answer from each browser counts. No names,
emails or IP addresses. A browser can save at most 400 answers a day.

Free-plan limits (D1: 100,000 rows written and 5 million rows read a day; Workers: 100,000
requests a day) are far above what a few classes use.

Teacher questions: one row per question (unit, slot, the question as JSON with its AP topic `t` and optional walkthrough `w`, hidden or not). Each one joins its topic at index 1000 + slot.
A slot is never reused, so "Remove" on the teacher page only hides a question. Images are
shrunk in the browser before saving (under about 650 KB each).

To start fresh (for example, a new school year), run `DELETE FROM answers;` in the D1 console.
Don't delete rows from `custom_qs`: students' saved progress points at those slots.
To turn it off, delete the route; the site stops showing class results.
