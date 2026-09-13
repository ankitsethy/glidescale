# Directive: Website Improvement Backlog

**Purpose**: Prioritized list of all known improvements to glidescales.com. Every item is grounded in a specific component and line number. Work from this list — don't improvise.

---

## How to Work This List

1. Read the relevant item below
2. Read `knowledge/edge_cases.md` for the corresponding edge case entry
3. Implement the change
4. Run `npm run typecheck` — zero errors
5. Mark the item `[x]` with the date completed
6. Log in `knowledge/run_log.md`

---

## Priority 1 — Conversion Killers (Fix First)

### [x] Add StrategyGenerator to the live page — done 2026-09-13
**File**: [App.tsx](../glidescale%20antigravity%20file/App.tsx)  
**What**: `StrategyGenerator.tsx` is built but not in `App.tsx`. This is the most differentiating feature on the site — an interactive AI demo — and it's invisible.  
**Fix**: Import `StrategyGenerator` in `App.tsx` and render it between `<Process />` and `<Founder />` (or after `<Services />`). Good positioning: after the process section, right when the visitor is asking "but does this actually work?"  
**Impact**: High — live AI demos are a major trust signal for an AI consultancy  
**Effort**: Low (30 min)

### [ ] Replace placeholder testimonials with real ones
**File**: [components/Testimonials.tsx](../glidescale%20antigravity%20file/components/Testimonials.tsx) lines 6–28  
**What**: All three testimonials (Maya R., David K., Priya S.) are fabricated. There is a `// TODO(ankit): Replace with real testimonials` comment in the code.  
**Fix options**:
  1. Replace with real client quotes (ideal)
  2. If no approved quotes yet: remove the Testimonials section from `App.tsx` temporarily and add it back when real quotes are ready
  3. Do NOT leave fabricated testimonials on a live site — trust risk  
**Impact**: High — fake testimonials undermine credibility if discovered  
**Effort**: Content-dependent

### [ ] Replace fake company logos with real ones
**File**: [components/LogoCloud.tsx](../glidescale%20antigravity%20file/components/LogoCloud.tsx) lines 10–66  
**What**: All 6 logos (Northwind, Helio Labs, Vector Tide, Atlas Forge, Quanta, Stratify) are invented companies.  
**Fix options**:
  1. Replace with logos of real clients (with permission)
  2. Change label from "Trusted by operators at growth-stage teams" to "Tools we build with" and use logos of real tools (Clay, Instantly, Apollo, HubSpot, Make, etc.)
  3. Remove the section entirely if neither option is feasible  
**Impact**: High — "social proof" that's obviously fake does more harm than no social proof  
**Effort**: Design work needed for real logos

---

## Priority 2 — Credibility & Trust

### [x] Fix "Learn more" dead links in Services cards — done 2026-09-13
**File**: [components/Services.tsx](../glidescale%20antigravity%20file/components/Services.tsx) line 130  
**What**: Each service card has "Learn more →" text that looks clickable but has no `href` or `onClick` handler.  
**Fix options**:
  1. Link to a dedicated `/services` page (requires building that page)
  2. Make it scroll to the `#contact` section
  3. Remove the "Learn more" text entirely  
**Recommended**: Option 2 (scroll to contact) — simplest, keeps the CTA flow  
**Effort**: Low (15 min)

### [x] Verify founder photo exists in production — confirmed present 2026-09-13
**File**: [components/Founder.tsx](../glidescale%20antigravity%20file/components/Founder.tsx) line 26  
**What**: Primary image is `/ankit.jpg`. Falls back to a Google Drive URL, then an Unsplash stock photo.  
**Fix**: Confirm `ankit.jpg` exists in `glidescale antigravity file/public/` and is deployed to Vercel. Check the live site — if you see a generic stock photo, the file is missing.  
**Effort**: Very low (5 min to check)

### [x] Add a defensive state to StrategyGenerator when API key is missing — done 2026-09-13
**File**: [components/StrategyGenerator.tsx](../glidescale%20antigravity%20file/components/StrategyGenerator.tsx)  
**What**: If `VITE_GEMINI_API_KEY` is not set, the component should show a graceful disabled state, not silently fail.  
**Fix**: On mount, check `import.meta.env.VITE_GEMINI_API_KEY`. If absent, render a "Demo temporarily unavailable" placeholder.  
**Effort**: Low (20 min)

---

## Priority 3 — Copy & Messaging

### [ ] Hero subtext — tighten the value proposition
**File**: [components/Hero.tsx](../glidescale%20antigravity%20file/components/Hero.tsx) line 69  
**Current**: "We redesign how growth operates inside your company, replacing manual drag with AI-backed operating infrastructure."  
**Issue**: "Operating infrastructure" is abstract. Consider making it more concrete — what does the prospect stop doing? What do they gain?  
**Suggested direction**: Lead with the outcome ("More revenue. Less manual work.") before describing the mechanism  
**Effort**: Copy only — 10 min

### [ ] Authority section — add a supporting sentence
**File**: [components/Authority.tsx](../glidescale%20antigravity%20file/components/Authority.tsx)  
**Current**: Just the big statement "Growth does not break businesses. Poor systems do." with no supporting copy.  
**Fix**: Add 2–3 lines of supporting context below the headline to explain what "poor systems" means and bridge to the services  
**Effort**: Copy only — 15 min

### [ ] Metrics — add source or qualifier
**File**: [components/Metrics.tsx](../glidescale%20antigravity%20file/components/Metrics.tsx) lines 6–25  
**What**: "30 hrs/wk reclaimed", "3× output", "8 weeks to live" — these are strong claims but have no qualifier ("per client, on average" exists for hours but not for the others)  
**Fix**: Add "avg. per client" or "based on X engagements" to each metric for credibility  
**Effort**: Low

---

## Priority 4 — Technical Improvements

### [x] Handle empty Gemini response in StrategyGenerator — done 2026-09-13
**File**: `components/StrategyGenerator.tsx` / `services/geminiService.ts`  
**What**: Gemini occasionally returns empty strings. Current code may set state to empty and render a blank result.  
**Fix**: Check `response.text && response.text.length > 0` before setting result. Show "Something went wrong — try again." if empty.  
**Effort**: Low (15 min)

### [x] Debounce StrategyGenerator submit button — done 2026-09-13
**File**: `components/StrategyGenerator.tsx`  
**What**: Rapid clicking can fire multiple Gemini API calls, hitting rate limits  
**Fix**: Disable the button during loading (check if already done). Add 500ms debounce if using auto-submit.  
**Effort**: Low

### [x] Verify `vercel.json` has SPA rewrites — confirmed present 2026-09-13
**File**: `glidescale antigravity file/vercel.json`  
**What**: Direct URL access to non-root paths returns 404 without a rewrite rule  
**Fix**: Confirm `"rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]` is present  
**Effort**: Very low (5 min)

---

## Completed Items

*(move completed items here with date)*

---

## Notes for AI Agents

- Always check this file before starting any website improvement task
- After completing any item, mark it `[x]` with the date and move to Completed section
- If you discover a new improvement while working, add it to the appropriate priority tier
- Keep effort estimates honest — don't inflate scope
