# Directive: Deployment

**Purpose**: Steps for deploying the Glidescale website to Vercel and verifying the live site.

---

## When to Use This Directive
- Deploying a new feature or fix to production
- Setting up the project on a new Vercel account
- Diagnosing a production build failure
- Updating environment variables in production

---

## Deployment Platform
**Vercel** — auto-deploys on push to the connected Git branch (typically `main`).

Config file: `glidescale antigravity file/vercel.json`

---

## Pre-Deploy Checklist

Before pushing/merging to the deploy branch:

1. **TypeCheck passes** — zero errors required
```bash
cd "glidescale antigravity file"
npm run typecheck
```

2. **Production build succeeds locally**
```bash
npm run build
```
Build output goes to `dist/`. Verify no errors.

3. **Preview the build locally**
```bash
npm run preview
```
Open the preview URL and manually test:
- [ ] Hero section renders and CTA works
- [ ] StrategyGenerator demo works (if `VITE_GEMINI_API_KEY` is set)
- [ ] All sections animate correctly
- [ ] No console errors
- [ ] Mobile layout looks correct (DevTools device simulation)
- [ ] CTA links to the correct cal.com booking URL

4. **No sensitive data committed**
Confirm `.env.local` is in `.gitignore` and was NOT staged:
```bash
git status
```

---

## Deploying

### Automatic (standard)
Push to the connected branch:
```bash
git push origin main
```
Vercel auto-detects the push and runs a new deployment. Monitor at the Vercel dashboard.

### Manual (Vercel CLI)
```bash
npm install -g vercel  # if not installed
vercel --prod
```

---

## Environment Variables

All `VITE_*` variables must be set in **Vercel project settings**, not just in `.env.local`.

**Required production env vars:**
| Variable | Description |
|---|---|
| `VITE_GEMINI_API_KEY` | Google Gemini API key for StrategyGenerator |

**How to set:**
1. Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add each variable for Production (and Preview if needed)
3. Redeploy for changes to take effect

---

## vercel.json Reference

Current config in `glidescale antigravity file/vercel.json`:
- `outputDirectory`: should match Vite's `build.outDir` (default: `dist`)
- If direct URL access returns 404, add: `"rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]`

---

## Post-Deploy Verification

After deployment completes:
1. Open https://glidescales.com in an incognito window
2. Check all sections load without errors
3. Test the primary CTA ("Book a Strategy Call") — confirm it opens cal.com/ankitsethy/30
4. Test StrategyGenerator (if live on the page)
5. Check mobile layout on a real device or via browser DevTools

---

## Edge Cases

### Vercel Build Fails — TypeScript Errors
- **Symptom**: Build succeeds locally but fails on Vercel
- **Fix**: Run `npm run typecheck` locally. TypeScript errors suppressed by IDE extensions may still fail the build.

### Vercel Build Fails — Missing Env Var
- **Symptom**: Build fails with `VITE_GEMINI_API_KEY is not defined` or Gemini-related error
- **Fix**: Add `VITE_GEMINI_API_KEY` to Vercel project environment variables (see above)

### Deploy Succeeded but Changes Not Visible
- **Symptom**: Old version still shows after deployment
- **Fix**: Hard refresh (`Ctrl+Shift+R`). If still stale, check Vercel dashboard for the correct deployment URL vs. the custom domain assignment.

### Custom Domain Not Resolving
- **Symptom**: `glidescales.com` not pointing to Vercel
- **Fix**: Verify DNS records in domain registrar. Vercel requires either an A record (`76.76.21.21`) or CNAME pointing to `cname.vercel-dns.com`.
