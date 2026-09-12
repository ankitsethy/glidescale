# Directive: Component Development

**Purpose**: Guidelines for creating, modifying, and refactoring React components in the Glidescale website.

---

## When to Use This Directive
- Adding a new page section
- Modifying an existing component's layout, copy, or behavior
- Refactoring for performance or maintainability
- Adding interactivity to a static section

---

## Inputs
- Task description (what to add/change)
- Target component file path (e.g., `glidescale antigravity file/components/Hero.tsx`)
- Design reference (if applicable)

---

## Pre-Flight Checklist
1. Read `knowledge/edge_cases.md` → scan "Component Development" section
2. Run `npm run typecheck` from `"glidescale antigravity file/"` to confirm baseline (zero errors)
3. Check `components/Primitives.tsx` — use existing primitives before building new ones
4. Check `types.ts` — use existing types before creating new ones

---

## Step-by-Step Process

### 1. Plan the change
- Identify the target component
- List what props/state will change
- Note if `types.ts` needs a new interface
- Note if `tailwind.config.js` needs a new token

### 2. Implement
- Edit the target `.tsx` file
- Use `motion.*` from Framer Motion for any animations
- Use design tokens from `tailwind.config.js` — never raw hex
- For new sections: follow the existing section pattern (see below)

### 3. Verify
```bash
cd "glidescale antigravity file"
npm run typecheck
```
Zero errors required. Fix any errors before proceeding.

### 4. Test in browser
```bash
npm run dev
```
Open http://localhost:3000 and verify:
- [ ] Component renders correctly at desktop (1440px)
- [ ] Component renders correctly at mobile (375px)
- [ ] Animations play correctly
- [ ] No console errors
- [ ] CTAs link to correct targets

### 5. Post-run
- If new edge cases discovered → append to `knowledge/edge_cases.md`
- Log in `knowledge/run_log.md`

---

## New Section Pattern

Every page section follows this structure:

```tsx
import { motion } from 'framer-motion';
// Import primitives as needed: SectionEyebrow, PrimaryCTA, SecondaryCTA

const SectionName: React.FC = () => {
  return (
    <section className="relative py-24 bg-base-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section content */}
      </div>
    </section>
  );
};

export default SectionName;
```

Key layout classes:
- Section wrapper: `relative py-24`
- Background: `bg-base-900` or `bg-base-950`
- Container: `max-w-7xl mx-auto px-6 lg:px-8`
- Section heading: `text-3xl md:text-4xl lg:text-5xl font-bold text-ink-100`
- Subtext: `text-ink-60` or `text-ink-40`

---

## Animation Pattern (Framer Motion)

### Fade-in on scroll (most common)
```tsx
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
>
  {/* content */}
</motion.div>
```

### Staggered children
```tsx
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

<motion.ul variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
  {items.map(i => <motion.li key={i.id} variants={item}>{i.content}</motion.li>)}
</motion.ul>
```

---

## Registering a New Section in App.tsx

After creating `components/NewSection.tsx`:
1. Import it in `App.tsx`
2. Add `<NewSection />` in the appropriate position in the render tree
3. Run typecheck to confirm

---

## Edge Cases

- **Space in folder name**: Always run npm commands as `cd "glidescale antigravity file" && npm run ...` or quote the path
- **Unused imports**: TypeScript strict mode throws on unused imports — remove them immediately
- **`_` prefix for unused params**: If a callback param is required by the API but unused, prefix with `_` (e.g., `_event`)
- **Framer Motion + `viewport={{ once: true }}`**: Always set `once: true` on scroll animations to prevent re-firing
- **Tailwind purge**: Custom classes used dynamically (template literals) may be purged — use full class names in JSX, never interpolate Tailwind classes
- **`whileInView` on hidden elements**: Elements with `display: none` don't trigger `whileInView` — use `opacity: 0` instead
