# Edge Cases & Known Failure Modes

This is the single searchable database of all known failure modes. Read this before every run.
Format: symptom → root cause → fix → status.

---

## General Development

### TypeScript Strict Mode — Unused Variables
- **Symptom**: TS errors like `'x' is declared but never used`
- **Root cause**: `noUnusedLocals: true` and `noUnusedParameters: true` in `tsconfig.json`
- **Fix**: Remove the unused variable, or prefix unused params with `_` (e.g., `_event`)
- **Status**: Baked in — check tsconfig if you're unsure

### Vite Environment Variables Not Available at Runtime
- **Symptom**: `import.meta.env.GEMINI_API_KEY` is `undefined`
- **Root cause**: Vite only exposes vars prefixed with `VITE_` to the client bundle
- **Fix**: Rename to `VITE_GEMINI_API_KEY` in `.env.local`; reference as `import.meta.env.VITE_GEMINI_API_KEY`
- **Status**: Fixed in current code

### Vite Dev Server Doesn't Pick Up `.env.local` Changes
- **Symptom**: New env var is undefined even after adding it to `.env.local`
- **Root cause**: Vite reads env files at startup, not on hot reload
- **Fix**: Kill the dev server and restart: `npm run dev`
- **Status**: Known behavior, not a bug

### Bash Path Error — Space in Folder Name
- **Symptom**: `cd: glidescale: No such file or directory` or similar
- **Root cause**: `glidescale antigravity file/` contains spaces — unquoted in shell
- **Fix**: Always quote: `cd "glidescale antigravity file"` or use the full quoted path
- **Status**: Always apply this when running any npm command

---

## Component Development

### Tailwind Custom Classes Not Applied (Purged)
- **Symptom**: Custom classes like `bg-accent-500` appear in JSX but don't render in browser
- **Root cause**: Tailwind purges classes not found in its content scan. Dynamic template literals fool the scanner.
- **Fix**: Never interpolate Tailwind class names. Use full static strings: `bg-accent-500` not `` `bg-${color}-500` ``
- **Status**: Always avoid dynamic class interpolation

### Framer Motion `whileInView` Not Triggering
- **Symptom**: Scroll animation never fires
- **Root cause**: Either the element is hidden (`display: none`), or `viewport` prop is misconfigured
- **Fix**: Ensure element is visible. Always add `viewport={{ once: true }}` to prevent re-fire
- **Status**: Use `once: true` as default

### Framer Motion Stagger Not Working on Children
- **Symptom**: Staggered list items all animate at the same time
- **Root cause**: Parent `motion.div` must have `variants` with a `transition.staggerChildren` value; children must reference the same variants
- **Fix**: Use the stagger pattern from `directives/component_development.md`
- **Status**: Known pattern

### `whileInView` Fires on Page Load (Before Scroll)
- **Symptom**: Elements that should animate on scroll animate immediately on load
- **Root cause**: Element is already in the initial viewport
- **Fix**: Expected behavior — use `viewport={{ once: true, margin: '-15%' }}` to require the element to be deeper in view
- **Status**: Normal behavior

---

## Gemini API

### StrategyGenerator Not in App.tsx
- **Symptom**: The StrategyGenerator component exists in `components/StrategyGenerator.tsx` but is NOT imported or rendered in `App.tsx`
- **Root cause**: Component was built but never added to the page
- **Fix**: Import `StrategyGenerator` in `App.tsx` and add `<StrategyGenerator />` after `<Process />` (before `<Transition />` or `<Founder />`)
- **Status**: OPEN — this is the highest-ROI improvement pending

### Missing API Key — StrategyGenerator Silent Failure
- **Symptom**: StrategyGenerator renders but button does nothing or shows generic error
- **Root cause**: `VITE_GEMINI_API_KEY` not set in `.env.local`
- **Fix**: Add key to `.env.local`, restart dev server. Add a disabled/placeholder state to component when key is absent.
- **Status**: Open — no defensive guard exists yet

### Gemini Returns Empty String
- **Symptom**: Strategy result renders blank
- **Root cause**: Gemini occasionally returns empty `text` field
- **Fix**: Check `response.text && response.text.length > 0` before setting state. Show fallback message if empty.
- **Status**: Open — not handled in current code

### Gemini Returns Markdown Instead of HTML
- **Symptom**: Raw markdown syntax (`##`, `**bold**`) appears in the rendered output
- **Root cause**: Model ignores or partially ignores the HTML format instruction
- **Fix**: Make the HTML format instruction more explicit in the prompt (e.g., "ONLY use HTML tags, never markdown")
- **Status**: Monitor — not yet observed but likely on edge cases

### Rate Limit (429) on Rapid Clicks
- **Symptom**: API calls fail immediately after rapid successive submissions
- **Root cause**: Free tier: 15 RPM
- **Fix**: Disable submit button during loading state (already partially done). Add debounce (500ms) on input changes if using auto-submit.
- **Status**: Partially addressed — button disabled during loading

---

## Content & Copy Issues (Open Action Items)

### Placeholder Testimonials (HIGH PRIORITY)
- **Location**: `components/Testimonials.tsx` lines 6–28
- **Issue**: All three testimonials are fabricated (Maya R., David K., Priya S.) with a `TODO` comment
- **Fix**: Replace with real client testimonials. If none available yet, remove section or replace with a waiting-list / "results in progress" placeholder.
- **Status**: OPEN — TODO comment exists in code

### Fake Company Logos in LogoCloud (HIGH PRIORITY)
- **Location**: `components/LogoCloud.tsx` lines 10–66
- **Issue**: All 6 logos (Northwind, Helio Labs, Vector Tide, Atlas Forge, Quanta, Stratify) are fabricated companies with generic SVG illustrations
- **Fix**: Replace with real client logos. If no real logos available, change label to "Tools we build with" and use real tool logos (Clay, Instantly, Apollo, HubSpot, etc.)
- **Status**: OPEN

### StrategyGenerator Missing from Live Page
- **Location**: `App.tsx` (absent) / `components/StrategyGenerator.tsx` (exists)
- **Issue**: The most differentiating interactive feature of the site is built but not deployed
- **Fix**: Add `<StrategyGenerator />` to `App.tsx` — see "StrategyGenerator Not in App.tsx" above
- **Status**: OPEN — highest conversion impact

### Services "Learn More" Links Go Nowhere
- **Location**: `components/Services.tsx` line 130
- **Issue**: Each service card has "Learn more →" text that appears clickable but has no link or action
- **Fix**: Either link to a dedicated services page, scroll to a relevant section, or remove the text
- **Status**: OPEN

### Founder Photo Missing (`/ankit.jpg`)
- **Location**: `components/Founder.tsx` line 26
- **Issue**: Primary image src is `/ankit.jpg` (local file). Falls back to Google Drive thumbnail, then Unsplash stock photo
- **Fix**: Ensure `/ankit.jpg` exists in `glidescale antigravity file/public/` and is committed to the repo
- **Status**: Check if file exists — may already be present

---

## Vercel Deployment

### Build Succeeds Locally but Fails on Vercel
- **Symptom**: `npm run build` passes locally, Vercel build fails
- **Root cause 1**: `VITE_GEMINI_API_KEY` not set in Vercel project environment variables
- **Root cause 2**: TypeScript errors that were being suppressed locally
- **Fix**: Set all `VITE_*` env vars in Vercel dashboard → Project Settings → Environment Variables. Run `npm run typecheck` locally before pushing.
- **Status**: Known — always set env vars in Vercel dashboard

### 404 on Direct URL Access
- **Symptom**: Visiting `glidescales.com/some-path` returns 404
- **Root cause**: SPA with no server-side routing — Vercel serves `index.html` only for `/`
- **Fix**: Add to `vercel.json`: `"rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]`
- **Status**: Check current `vercel.json` — may already be configured
