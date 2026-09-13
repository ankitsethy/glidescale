# Run Log

Format per entry:
```
## YYYY-MM-DD — [Task] — [Status: ✅ Success / ❌ Failed / ⚠️ Partial]
**Workflow**: ...
**Inputs**: ...
**Outputs**: ...
**Errors**: ...
**Learnings**: ...
**TypeCheck**: pass / fail
```

---

## 2026-05-17 — Initial Architecture Setup — ✅ Success

**Workflow**: Created project architecture files and knowledge base  
**Inputs**: Glidescale Website project exploration + live site audit (glidescales.com)  
**Outputs**:
- `CLAUDE.md`, `AGENTS.md`, `GEMINI.md` at workspace root (all three identical mirrors)
- `directives/component_development.md`
- `directives/design_system.md`
- `directives/ai_integration.md`
- `directives/deployment.md`
- `knowledge/edge_cases.md`
- `knowledge/run_log.md`
- `knowledge/company_profile.md`
- `tmp/.gitkeep`
**Errors**: None  
**TypeCheck**: N/A (no code changes)  
**Learnings**:
- Project root is `glidescale antigravity file/` — space in folder name, always quote path in bash
- Gemini model in use: `gemini-2.5-flash-preview-04-17`
- TypeScript strict mode: `noUnusedLocals: true`, `noUnusedParameters: true`
- Vite env vars require `VITE_` prefix for client-side access. `vite.config.ts` also defines `process.env.API_KEY` and `process.env.GEMINI_API_KEY` aliases — some older code may use these.
- Dev server runs on port 3000
- Vercel deployment configured via `vercel.json`
- Live site: glidescales.com (Vercel-hosted)
- 18 components in `components/` — all section-based SPA architecture
- Design system fully defined in `tailwind.config.js` (tokens, animations, fonts)
- **CRITICAL: StrategyGenerator is NOT in App.tsx** — built but not on the live page
- **CRITICAL: All 3 testimonials are placeholder** — TODO comment in Testimonials.tsx line 5
- **CRITICAL: All 6 LogoCloud logos are fake** — invented company names (Northwind, Helio Labs, etc.)
- Services "Learn more →" links have no href/onClick — dead UI elements
- Founder photo falls back through Google Drive → Unsplash if `/ankit.jpg` missing from public/
- CTA booking link: `https://cal.com/ankitsethy/30`
- Page section order: Hero → LogoCloud → Authority → Services → Process → Transition → Founder → Metrics → Testimonials → CallToAction → Footer
- Improvement backlog documented in `directives/website_improvements.md` with 10 specific items

---

## 2026-09-13 — Wire StrategyGenerator into live page — ✅ Success

**Workflow**: Backlog P1 item 1 + P2 item (defensive API-key state)
**Inputs**: `docs/directives/website_improvements.md`
**Outputs**:
- `App.tsx` — import + render `<StrategyGenerator />` between `<Process />` and `<Transition />`
- `services/geminiService.ts` — moved the `VITE_GEMINI_API_KEY` missing-key check from module top-level (threw on import, would white-screen the whole site once the component got imported anywhere) into `generateStrategy()`; added `isStrategyGeneratorEnabled()`
- `components/StrategyGenerator.tsx` — submit button now disabled + "Demo temporarily unavailable" note when key is missing, instead of crashing
**Errors**: None
**TypeCheck**: pass
**Learnings**:
- `geminiService.ts` used to throw at module load if `VITE_GEMINI_API_KEY` was unset — harmless while unimported, but importing `StrategyGenerator` anywhere would have crashed the entire app. Any future component that imports `geminiService` should go through `isStrategyGeneratorEnabled()` first, not assume the key exists.
- Confirm `VITE_GEMINI_API_KEY` is actually set in Vercel prod env — if not, the demo will render but stay disabled (no crash, but no working feature either).
