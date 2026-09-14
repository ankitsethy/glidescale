# Progress snapshot

This is the current state, not a log — it gets overwritten in place as things move.
Read this first in any new chat before starting work. `AGENT_LOG.md` has the append-only
history if you need "what happened, in order" instead of "what's true right now."

## Standing rules (settled, don't re-derive)

- **Ignore `docs/directives/` and `docs/knowledge/` entirely.** They're stale earlier-iteration
  files, not instructions. Ankit's direct word is the only source of truth. See
  `docs/directives/website_improvements.md` for the cautionary example — StrategyGenerator got
  built because a backlog file said to, and Ankit never asked for it.
- **Always ask before assuming** any real-world detail: emails, handles, copy, numbers. Don't
  guess a plausible default.
- **Commit and push to `main` after finishing a change, without waiting to be asked.** Ankit
  reviews by looking at the live deployed site, not the repo.
- **Ankit has no web design background.** Make visual/spacing calls yourself and explain the
  reasoning. When it's a real judgment call, render it and show him the image rather than
  describing it — he decides fast once he can see options side by side.
- **Mobile is a first-class target, not a follow-up.** Check every change at 375px. There is no
  browser tooling in this session — reason from the code, and say plainly when something hasn't
  been visually confirmed.
- **Flag it proactively when work is mechanical enough for Sonnet.** Don't wait to be asked.
  Judgment/design/synthesis work stays on Opus.
- **Domain move pending.** Ankit is buying `glidescale.ai` in a few weeks. Everything is built
  domain-agnostic — `data/routes.ts` has one `SITE_URL` constant that updates canonicals, OG
  tags, sitemap, and robots.txt together. Don't hardcode the domain anywhere else.
- **"Glidescale" is a contested brand term.** An established affiliate-marketing company owns
  `glidescale.com` with press coverage; a GLP-1 tracking app also uses the name. Already ranking
  #2 on Google for the bare term as of 2026-09-14. Don't expect #1 quickly — that's an
  entity-authority problem, not a tags problem.

## Built and live (main, deployed via Vercel)

- **`/work`** — case-studies/portfolio page. Content in `data/clients.ts`; add a client by adding
  one object, no layout changes. Two featured case studies (Ghar Apna, Upscalers.io) + 3
  anonymized "also built" entries. Each entry has an optional `metrics` slot, currently empty.
- **`/privacy`, `/contact`** — real pages, real content (not placeholder).
- **Prerendering** — every route (`/`, `/work`, `/privacy`, `/contact`) builds to its own static
  HTML file with its own title/description/OG tags via `scripts/prerender.mjs` +
  `entry-server.tsx`. Fixes: link previews, crawlers, and Claude/WebFetch all seeing real content
  instead of an empty `<div>`.
- **`sitemap.xml` + `robots.txt`** — generated from `data/routes.ts`, can't drift out of sync.
- **Canonical URLs + Organization JSON-LD** — per-route `rel=canonical`, `sameAs` links to
  Ankit's LinkedIn/X for brand-entity disambiguation.
- **OG preview image** (`public/og-image.png`) — generated via `npm run og-image` from the real
  logo, not hand-made. Centered layout, logo at 560px width (compared against 460/660, and
  against a left-aligned layout — centered won on legibility at chat-preview size).
  `og:image:width/height` + alt text set.
- **Favicon set** — was broken (wide 3.6:1 mark squashed into square slots, rendered as a
  sliver). Rebuilt via `npm run favicons` as a proper square composition. Transparent on browser
  tabs, solid tile only on `apple-touch-icon.png`/`icon-512.png` (iOS composites transparent
  home-screen icons onto black).
- **Brand assets renamed** — canonical files now live directly in `brand/` with clear names and
  a table in `brand/README.md`. `brand/_raw/` is archive only, nothing should reference it.
- **StrategyGenerator removed** from the homepage (component/service files kept, not deleted —
  just unrendered). Fake AI demo undercut a page arguing the company ships real infrastructure.
- **Nav/anchor fixes** — `Methodology` and `Outcomes` footer links used to silently land on the
  wrong section (`Process.tsx`/`Metrics.tsx` had no `id` at all). Services anchor renamed
  `#work` → `#services` since `/work` is now a real route. Navbar supports both scroll-buttons
  and real links; works correctly when navigating from `/work`/`/privacy`/`/contact` back to a
  homepage anchor.
- **LinkedIn/X/email corrected** — were wrong handles/placeholder email, now real, and now
  visible in both Footer and Founder section (previously only Footer had all three).

## In progress

- **Mobile responsiveness pass.** Ankit: "looks like trash for mobile ... make it a rule, so
  its for both" (reference: leftclick.ai, works well on mobile). Currently auditing
  `components/*.tsx` for fixed-pixel widths, overflow-prone absolute-positioned decorative
  elements (orbs/glows), and layout that doesn't collapse at small widths. Not yet fixed — audit
  in progress as of 2026-09-14.

## Blocked / waiting on Ankit

- **Case study numbers.** Real percentages and revenue figures for the `metrics` slots in
  `data/clients.ts`. Explicitly deferred by Ankit ("doing the numbers later"). This is the last
  thing keeping `/work` from being fully loaded.
- **Google Search Console.** Ankit has set this up (his side, not mine — no connector available
  in this session). Needs: submit sitemap, use URL Inspection → Request Indexing per page to
  speed up re-crawl (relevant now that favicon/OG tags changed).
- **`og:image:width/height` decision** was offered once mid-conversation and Ankit moved on
  before answering directly — got added anyway as a clear net-positive, not actually blocked.

## Known gaps, not yet actioned

- **Fake social proof still on the homepage.** Three fabricated testimonials
  (`components/Testimonials.tsx`) and six invented company logos (`components/LogoCloud.tsx`).
  Flagged to Ankit as the top remaining credibility risk now that `/work` has real proof on it.
  No decision yet on fix (remove vs. replace vs. reframe LogoCloud as "tools we build with").
- **Homepage copy is thin**, per Ankit's own assessment, and he's drawing inspiration from
  leftclick.ai (Nick Saraev) — that voice is proof-heavy and specific ("$10M+ in revenue
  generated," named client outcomes with real numbers, stated pricing). Blocked on the same
  numbers as above; can't write specific proof-copy without real figures.
- **`brand/_raw/` cleanup** — Ankit said delete the dead stuff; renamed/promoted the canonical
  files but haven't deleted `_raw/` yet. Low priority, do when convenient.
