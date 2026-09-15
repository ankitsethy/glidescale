# Progress snapshot

Current state, not a log — overwrite in place as things move. Read this first in any new chat.
`AGENT_LOG.md` has the append-only history if you need "what happened, in order."

## ⚠️ The repo is mid-rebuild and does NOT build right now

`App.tsx` still imports `LogoCloud` and `Transition`, both of which have been deleted.
Nothing is committed or pushed, so the live site is unaffected. Finish the wiring below
before running a build.

## Standing rules (settled, don't re-derive)

- **Ignore `docs/directives/` and `docs/knowledge/` entirely.** Stale earlier-iteration files.
  Ankit's direct word is the only source of truth.
- **Always ask before assuming** any real-world detail: emails, handles, copy, numbers, tool lists.
- **Commit and push to `main` when a chunk is done**, without being asked. Ankit reviews live.
- **Ankit has no web design background.** Make visual calls yourself and explain them. When it's a
  real judgment call, *render it and show him the image* — he decides instantly once he can see it.
- **Mobile is first-class.** Check at 375px. No browser tooling in session — say plainly when
  something is reasoned from CSS rather than observed.
- **Flag proactively when work is mechanical enough for Sonnet.** Don't wait to be asked.
- **HARD RULE: nothing on a page may repeat anything else on that page.** Ankit is emphatic.
  Check every new heading against every existing one.
- **HARD RULE: nothing wordy.** Simple, straightforward, direct. Short declarative sentences.
- **No pricing anywhere, in any form.** Asked and refused explicitly.
- **No invented numbers, clients, logos, quotes or stats.** Ever.
- `data/routes.ts` has one `SITE_URL` constant. Domain moves to `glidescale.ai` in a few weeks —
  never hardcode the domain anywhere else.

## Live and shipped

- Prerendering: every route builds to its own static HTML with its own title/description/OG tags
  (`scripts/prerender.mjs` + `entry-server.tsx`). Crawlers, link previews and WebFetch all see real
  content. **Any new route MUST be added to `data/routes.ts` or it won't prerender or appear in the
  sitemap.**
- `sitemap.xml` + `robots.txt`, generated from `data/routes.ts`.
- Per-route canonicals + Organization JSON-LD with `sameAs`.
- OG image (`npm run og-image`), favicons (`npm run favicons`), `favicon.ico` at root.
- `/work` case studies page, `/privacy`, `/contact`.
- Brand assets renamed canonically in `brand/`; `brand/_raw/` is archive only.

## Built this session, NOT yet wired or committed

- `data/services.ts` — 5 services, each with `short` (homepage) + `long` (/services) + `moves[]`.
- `data/process.ts` — 6 steps (Discovery → Mapping → ROI Analysis → Build → Deploy → Ongoing).
- `data/tools.ts` — 11 tools.
- `public/tools/*.svg` — 11 vendored logos, via `npm run tool-logos` (`scripts/tool-logos.mjs`).
- `components/ToolMarquee.tsx` — one row, white-silhouette filter, pause on hover.
- `components/Services.tsx` — rewritten, 5 cards + "All services →" link.
- `components/Process.tsx` — rewritten, 6 steps + "The full process →" link.
- `components/Authority.tsx` — copy is now just "You can't fix what you can't see."
- `components/CallToAction.tsx` — new copy ("Start with a call."), 24h promise removed.
- `components/Hero.tsx` — subhead removed, `min-h-[100vh]` removed.
- Deleted: `components/LogoCloud.tsx`, `components/Transition.tsx`.

## Remaining work in this wave

1. **`Hero.tsx`** — delete the bottom marquee strip (lines ~77-100). It lists the OLD service names
   and an unsourced "Deployed in 8 weeks", and sits directly above the new tool marquee.
2. **`App.tsx`** — import `ToolMarquee` in LogoCloud's slot, drop `Transition`, and **move
   `CallToAction` out of `Home` into the shell** so it renders above `Footer` on every route.
   **Suppress it on `/contact`** (that page IS the CTA; showing both repeats).
3. **New `/services` page** — all five from `data/services.ts` using the `long` copy.
4. **New `/process` page** — six steps using `long` copy. Opening line, which belongs ONLY here and
   must not appear on the homepage: *"We find what's slowing your business down, then build the
   system that fixes it."* (On the homepage it would echo the hero's "remove bottlenecks".)
5. **`data/routes.ts`** — add `/services` and `/process` with titles + descriptions.
6. **`Footer.tsx`** — 4 columns, real destinations only, no invented pages. Services column must use
   the NEW five service names (currently shows the old three).
7. **`/contact` page buildout** — leftclick-style rows. Confirmed: **no phone, no hours.**
   Serving line: **US, UK, Canada, Australia, India.** Email, LinkedIn, X, book-a-call.
8. **Homepage proof section** (Ankit approved) — Ghar Apna + Upscalers.io named, from
   `data/clients.ts`, linking to `/work`. Evidence currently only exists on `/work`.
9. **Density pass** — standard sections `py-20 lg:py-40` → `py-16 lg:py-24`; `CallToAction`
   `lg:py-56` → `lg:py-32`; section headers `mb-20` → `mb-10 lg:mb-14`; `Metrics` cards drop
   `min-h-[340px]`, `p-10 lg:p-12` → `p-8 lg:p-10`.
10. **Styling: SKIPPED this round, explicitly.** Ankit initially approved toning down
    gradient-shimmer/animated counters/orbs, then asked "are you sure we need to change the
    styling" — correctly pointed out no browser exists in this session to preview it. Descoped to
    nothing rather than ship unverifiable visual changes. Revisit as its own pass later, ideally
    with a way to actually render/screenshot a comparison first.
11. Verify, then **commit and push** so Ankit can see it live.

## Next wave

- **`/work` restructure to an index + detail pages**, matching leftclick: a card grid where each
  card is client name + a one-line outcome, each linking to `/work/<id>`. Requires prefix routing
  (current routing is exact-match only) and a `headline` field on `CaseStudy`. **The one-line
  outcome is the whole point of the pattern and it needs Ankit's real numbers.**
- Case studies should be **outcomes-first**, then challenge, then solution — leftclick's order,
  and the reverse of the current `/work`.

## Blocked on Ankit

- **Real numbers** — percentages and revenue figures for the `metrics` slots in `data/clients.ts`.
  Blocks the `/work` restructure and the homepage stat tiles.
- **Client logos + one real testimonial** — `CaseStudy.logo` is `null` everywhere. Needs permission
  from Ghar Apna and Upscalers.io.
- **Google Search Console** — set up and indexing requested by Ankit. Nothing left on our side.

## Decisions Ankit has explicitly made (do not re-litigate)

- Hero headline stays: "AI systems that remove bottlenecks and unlock scale." Subhead deleted.
- Testimonials **stay for now** — he considers them placeholders he'll replace, not fakes. Raised
  twice with evidence; he's aware. Drop it.
- Stat tiles (8 wks / 30 hrs/wk / 3×) stay for batch 2.
- No `/about` page. No FAQ page. One `/services` page, not five.
- Tool marquee stays, one row, 11 tools.
- Process: Discovery is the call, no Proposal step, Ongoing step added.

## Research findings (leftclick.ai teardown, 2026-09-15)

Three agents fetched their homepage, all 15 sub-pages, and did a gap analysis. Key points:

- **They have ~18 pages but only ~6 are load-bearing**: pricing, case studies + details, about,
  process, contact. The rest are thin SEO/answer-engine pages that all carry the same CTA.
- **Their palette is two colours and one typeface.** No gradients, glows, glassmorphism, animated
  counters or shimmer. Hand-built static HTML, 25KB of CSS. *Credibility comes from restraint and
  falsifiability, not production value.* This is the main reason our site reads as templated.
- **Zero testimonials or star ratings anywhere**, including on a section literally named
  `reviews-section`. They use named clients + numbers + real photos instead.
- **No tech-stack logo wall.** Their marquee is client logos, hedged as "Nick & his team have
  worked with" — weak enough to be true, which is why it reads credible.
- **7 CTAs, all to one calendar URL.** No forms, no lead magnets, no popups, no scarcity.
- **Hero is `min-height: 80svh`** — deliberately does not fill the viewport.
- Headings are short declarative sentences ending in a period.
- **Our `/work` page is genuinely better than their case studies** — we name the actual systems and
  platforms; they give a logo and a number. It's just buried on the wrong page.
