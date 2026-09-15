# Progress snapshot

Current state, not a log — overwrite in place as things move. Read this first in any new chat.
`AGENT_LOG.md` has the append-only history if you need "what happened, in order."

## Standing rules (settled, don't re-derive)

- **Ignore `docs/directives/` and `docs/knowledge/` entirely.** Stale earlier-iteration files.
  Ankit's direct word is the only source of truth.
- **Always ask before assuming** any real-world detail: emails, handles, copy, numbers, tool lists,
  guarantee terms. Don't invent a plausible default.
- **Commit and push to `main` when a chunk is done**, without being asked. Ankit reviews live.
- **State which model a chunk of work needs, every single time, before doing it** — this is now a
  global hard rule in `~/.claude/CLAUDE.md`, not project-specific. Judgment/copy/positioning work
  (Opus). Mechanical wiring, renames, CSS, builds (Sonnet). Say it up front, don't wait to be asked.
- **Ankit has no web design background.** Make visual calls yourself and explain them. When it's a
  real judgment call, *render it and show him the image* — he decides instantly once he can see it.
- **Mobile is first-class, same quality bar as desktop** (explicit ask, referencing leftclick.ai).
  No browser tooling in this session — say plainly when something is reasoned from CSS rather than
  observed, never claim visual verification that didn't happen.
- **HARD RULE: nothing on a page may repeat anything else on that page.** Check every new heading
  against every existing one before shipping.
- **HARD RULE: nothing wordy.** Simple, straightforward, direct. Short declarative sentences.
- **No pricing anywhere, in any form.** Asked and refused explicitly, more than once.
- **No invented numbers, clients, logos, quotes, stats, or guarantee terms.** Ever. If a claim can't
  be verified against something already established, ask before writing it.
- **No industry/niche claims**, neither "we help any industry" nor naming specific verticals.
  Ankit's explicit call after a discussion about being falsifiable vs. vague.
- `data/routes.ts` has one `SITE_URL` constant. Domain moves to `glidescale.ai` in a few weeks —
  never hardcode the domain anywhere else.
- **"Glidescale" is a contested brand term** — an unrelated affiliate-marketing company owns
  glidescale.com with press coverage. Already ranking #2 on Google for the bare term. Don't expect
  #1 quickly; that's an entity-authority problem, not a tags problem.

## Live and shipped — full picture

**Routes (8 total, all prerendered, all in sitemap):** `/`, `/work`, `/work/ghar-apna`,
`/work/upscalers`, `/services`, `/process`, `/privacy`, `/contact`.

**Homepage section order:** Hero → ToolMarquee → Authority → HomeProof → Guarantee → Services →
Process → Founder → Metrics → Testimonials → (CallToAction, via the shell, not the homepage tree).

**Page shell (`App.tsx`):** `CallToAction` renders on every route via the shell, **except
`/contact`** (that page IS the CTA in a different shape — showing both repeats the ask).

**Technical infra:**
- Prerendering: every route builds to its own static HTML with its own title/description/OG tags
  (`scripts/prerender.mjs` + `entry-server.tsx`). Crawlers, link previews, WebFetch all see real
  content. **Any new route MUST be added to `data/routes.ts`** or it won't prerender or appear in
  the sitemap — for `/work/<id>` routes this happens automatically, generated from
  `caseStudies.filter(featured)` in `data/routes.ts`.
- `sitemap.xml` + `robots.txt`, generated from the same route list, can't drift.
- Per-route canonicals + Organization JSON-LD with `sameAs` links.
- OG image (`npm run og-image`), favicons (`npm run favicons`, includes `favicon.ico` at root).
  Favicon mark is currently at `MARK_WIDTH_RATIO = 0.96` in `scripts/favicons.mjs` (bumped up from
  0.84 — Ankit wanted it bigger in the browser tab).
- Google confirmed showing a **stale cached favicon** as of 2026-09-16 (verified by diffing
  `google.com/s2/favicons` against the real file, pixel dimensions didn't match). Not a code bug —
  Google's favicon cache lags page-content indexing by days-to-weeks. Only lever: Request Indexing
  again in Search Console. No fixed timeline exists.
- Homepage `<title>` was 70 chars, past Google's practical ~60-char SERP limit, causing mid-sentence
  truncation in search results — fixed, now 51 chars. `index.html`'s static fallback meta tags were
  also still carrying old abstract copy ("AI Operating Systems for Growth-Stage Founders") with
  em-dashes; synced to match the real copy.

**Real content (not placeholder), as of this session:**
- `/work` is an index (card grid) + one page per featured case study (`/work/<id>`), not one long
  scrolling page — Ankit asked for this explicitly, leftclick's pattern. `data/clients.ts` drives
  both; adding a client is one object, no other changes needed.
- **Real client logos are live**, not AI-generated stock photos. Gharapna's actual wordmark (URL
  was already documented in `clients/gharapna/_context/brand.md` from earlier client work) and
  Upscalers.io's app-icon mark (pulled from their live favicon, since their homepage is a
  client-rendered SPA with no logo reachable in static HTML). Both vendored in `public/logos/`,
  not hotlinked. **Permission to display either client's branding publicly has NOT been
  confirmed** — flagged to Ankit multiple times, he's aware, hasn't blocked on it.
- Display name corrected "Ghar Apna" → "Gharapna" (one word) to match the real wordmark now
  visible next to it. URL slug `/work/ghar-apna` unchanged since already live/indexed.
- `data/services.ts` (5 services) and `data/process.ts` (6 steps) each have `short` (homepage) +
  `long` (full page) copy, so the two can never drift.
- `components/ToolMarquee.tsx` — **one row** (not two, deviated from an earlier plan — 11 tools
  didn't justify two rows), 11 real vendored logos in `public/logos/tools/` via
  `scripts/tool-logos.mjs`, white-silhouette CSS filter, pause on hover.
- `components/Guarantee.tsx` — new homepage section. Deliberately states NO fixed terms: Ankit's
  reasoning was that a guarantee tied to leads is meaningless for a workflow-automation build
  measured in hours saved, so a single published term would be dishonest for most engagement
  types. Copy: "Every engagement has a guarantee written into it. What it is tied to depends on
  what we are building, and we agree it with you before any work starts." Renders homepage-only,
  not in the shell.
- `components/HomeProof.tsx` — new homepage section, names Gharapna + Upscalers.io directly with
  logos, links to `/work/<id>`.
- Footer restructured to 4 columns (Services, Company, Resources, Connect) — scoped to only what
  actually exists on the site, no invented categories. Email link label changed from the raw
  address to "Email" (mailto: href still has the real address).
- Navbar: logo moved toward the true left edge (was ~360px in on a wide screen inside a max-w-1200
  container). Nav links stay centred on the viewport — Ankit's explicit preference. **Capped at
  `max-w-[1600px]`** — an earlier version went full-width unbounded, which also pushed the "Let's
  talk" CTA all the way to the right edge on wide screens (a real regression, caught and fixed
  same session). Nav label "Methodology" renamed to "Process".
- Hero's "See How We Work" button now links to `/process` (a real page), not a same-page scroll to
  the Services section — changed from a `<SecondaryCTA onClick>` button to a real `<a href>` for
  accessibility/right-click/new-tab support.
- CallToAction copy rewritten: "Limited Capacity" / "Scale without operational drag" / the 24-hour
  reply promise are ALL gone (unsubstantiated claims, same category as the fake logo wall deleted
  earlier). Current: eyebrow "Work with us", headline "Start with a call.", body "Thirty minutes.
  We map where your bottlenecks are. You leave with clarity on how we can help, and something
  about your business you did not know." — Ankit's explicit framing: no "building" talk, no "free"
  anywhere on the site (removed from 4 locations), outcome is diagnostic clarity, not a build
  commitment.
- Density pass done across all standard sections (`py-16 lg:py-24` instead of the original
  `py-20 lg:py-40`, which stacked ~320px of dead space between every section pair).

## Perf pass (2026-09-16)

Founder photo (`public/ankit.jpg`) was a PNG saved with a `.jpg` extension — 1MB, zero real
JPEG compression, loaded eagerly on every homepage visit. Recompressed to a real JPEG (57KB),
`loading="lazy"` added since it's mid-page. Google Fonts (Inter, 5 weights) was pulled from
`fonts.googleapis.com` — two extra external round trips before any text could render — now
self-hosted via `@fontsource-variable/inter`, bundled into the app CSS, same-origin. JS was a
single 323KB bundle regardless of route; `vite.config.ts` now splits `react`/`react-dom` and
`framer-motion` into separate vendor chunks (`isSsrBuild` guard needed — `manualChunks`
breaks the SSR build since React is external there, not bundled). Nav logo (`logo-dark.svg`,
rendered on every page) run through `svgo`: 46KB → 17KB. `vercel.json` now sets
`Cache-Control: immutable, max-age=31536000` on `/assets`, `/tools`, `/logos`. Total `dist/`
dropped from ~2.4MB to 1.1MB. `gharapna.svg` left as-is — real path data, not bloat, svgo only
shaved 0.8%.

## Known live tension, NOT resolved — Ankit's call

Hero headline is **"AI systems that remove bottlenecks and unlock scale."** Leads with "AI
systems" — the exact framing Ankit said nobody has budget for ("sell outcomes... not AI
implementation"). He separately, explicitly said the headline stays unchanged. These two
instructions conflict. Flagged once in a plan doc; not changed unilaterally. Surface again only if
he raises hero copy specifically.

## Blocked on Ankit

- **Real numbers** — percentages/revenue for the `metrics` slots in `data/clients.ts`. Blocks
  outcome-selling copy (the `Moves:` vocabulary is fully built, 14 metrics named across service
  cards — response time, pipeline value, cost per lead, etc. — just no number attached to any of
  them yet), the stat tiles on Metrics.tsx (8 wks / 30 hrs/wk / 3× — still unsourced, kept live by
  Ankit's explicit choice), and the `/work` card headlines.
- **Permission to display Gharapna and Upscalers.io branding publicly** — real logos are live,
  permission not confirmed.
- **Real per-step detail for `/process`** — Ankit said he'd dictate specifics (timeframes,
  deliverables, what the client gets at each stage) to make the page substantial rather than a
  2-line-per-step summary. Not yet supplied.
- **Testimonials** — Ankit considers the 3 on the homepage placeholders he'll replace with real
  ones, not fakes to delete. Raised twice with evidence (leftclick uses zero testimonials, relies
  on logos+numbers instead); he's aware, has declined to remove them. Don't re-raise again.

## Decisions Ankit has explicitly made (do not re-litigate)

- Hero headline + subhead: headline stays, subhead deleted. See tension noted above.
- Stat tiles and testimonials stay live for now — explicit, twice-confirmed.
- No `/about` page yet ("I'll add it later"), no FAQ page. One `/services` page, not five separate
  ones. One `/process` page.
- Tool marquee: one row, real logos only (not text, not invented icons), 11 tools.
- Process steps: Discovery IS the call (no separate proposal step), Ongoing step added at the end.
- Guarantee: no fixed terms published, ever — terms vary too much by engagement type to state one
  honestly. Structural section, not a page.
- Footer: only real destinations, restructured into Company/Resources/Connect but scoped to what
  exists — explicitly rejected padding it out with fake categories.
- Navbar nav links stay centred on the viewport (not moved to sit next to the logo).

## Research findings still relevant (leftclick.ai teardown, 2026-09-15)

- **Their palette is two colours and one typeface** — no gradients/glows/glassmorphism/animated
  counters. *Credibility comes from restraint and falsifiability, not production value.* This is
  the main reason our site reads as templated. Ankit approved toning this down, then correctly
  paused it ("are you sure we need to change the styling") since there's no browser here to verify
  a redesign against — **explicitly skipped, not forgotten.** Revisit only with a way to actually
  preview changes first.
- **Zero testimonials or star ratings anywhere on their site.** They use named clients + numbers +
  real photos instead. Relevant given Ankit's testimonials decision above.
- **No tech-stack logo wall** on their site — their marquee is client logos. We kept a tool marquee
  anyway (Ankit's call, it's already built and he wants it kept until real client logos exist to
  replace the slot with).
- Case studies should be **outcomes-first**, then challenge, then solution (their order) — our
  `/work/<id>` pages currently go problem → what we built → what changed. Not yet changed to match;
  low priority, cosmetic ordering difference.
