# Directive: Design System

**Purpose**: Rules and reference for maintaining visual consistency across the Glidescale website. All design decisions must trace back to tokens defined in `tailwind.config.js`.

---

## When to Use This Directive
- Adding new visual elements (colors, spacing, animations)
- Auditing a component for design consistency
- Extending the design system with new tokens
- Troubleshooting visual inconsistencies

---

## Core Principle
**Never use raw values.** Every color, animation, and spacing decision must use a design token from `tailwind.config.js`. This keeps the entire site themeable and consistent.

---

## Color System

### Base (Backgrounds)
| Token | Hex | Use |
|---|---|---|
| `bg-base-950` | `#07070C` | Deepest page background, hero backgrounds |
| `bg-base-900` | `#0D0D14` | Primary section background |
| `bg-base-800` | `#13131E` | Card and panel backgrounds |
| `bg-base-700` | `#1B1B28` | Elevated surfaces, hover states |

Always use the darkest shade as the page background and lighter shades for elevation.

### Accent (Brand Color)
| Token | Hex | Use |
|---|---|---|
| `accent-500` | `#7C5CFF` | Primary CTAs, active states, highlights, borders |

Use accent sparingly — it should feel like a spotlight, not a flood.

### Ink (Text)
| Token | Use |
|---|---|
| `text-ink-100` | Primary headings — maximum contrast |
| `text-ink-80` | Body text, descriptions |
| `text-ink-60` | Secondary text, subtitles |
| `text-ink-40` | Tertiary text, labels, placeholders |

### Semantic Rules
- **Never use white (`#ffffff`)** for text — use `text-ink-100` instead
- **Never use gray-*00 classes** — use ink tokens
- **Border color**: `border-white/10` or `border-accent-500/30` for accent borders

---

## Typography

### Font Stack
```
font-sans  → Inter (all UI text)
font-mono  → JetBrains Mono (metrics, code, technical labels)
```

### Scale (use Tailwind defaults + custom tokens)
| Context | Classes |
|---|---|
| Display / Hero H1 | `text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight` |
| Section H2 | `text-3xl md:text-4xl lg:text-5xl font-bold` |
| Card H3 | `text-xl md:text-2xl font-semibold` |
| Body | `text-base text-ink-80 leading-relaxed` |
| Small / Caption | `text-sm text-ink-60` |
| Eyebrow | `text-xs font-semibold uppercase tracking-widest text-accent-500` |
| Metric number | `font-mono text-4xl font-bold text-ink-100` |

---

## Animation Tokens

All animations are defined in `tailwind.config.js` under `theme.extend.animation` and `theme.extend.keyframes`.

| Class | Keyframe | Best Use |
|---|---|---|
| `animate-shimmer` | Left-to-right highlight sweep | Buttons, loading states |
| `animate-float` | Gentle vertical bob (0 → -10px → 0) | Hero decorative elements |
| `animate-pulse-glow` | Box shadow pulse with accent color | Accent badges, live indicators |
| `animate-breathe` | Scale 1 → 1.05 → 1 | Logos, subtle call-outs |
| `animate-marquee` | translateX(0) → translateX(-50%) | Logo cloud ticker |
| `animate-spin-slow` | Full rotation, slow | Decorative spinners |
| `animate-draw` | stroke-dashoffset draw-in | SVG line animations |

### Adding a New Animation
1. Add the keyframe in `tailwind.config.js` under `keyframes`
2. Add the animation reference under `animation`
3. Use via `animate-{name}` Tailwind class
4. Document it in this table

---

## Spacing System

Follow Tailwind's default 4px-base scale. Section-level spacing guidelines:
- **Section vertical padding**: `py-20` (mobile) → `py-28 lg:py-36` (desktop)
- **Content container**: `max-w-7xl mx-auto px-6 lg:px-8`
- **Card internal padding**: `p-6 md:p-8`
- **Component gap**: `gap-6 md:gap-8 lg:gap-12`

---

## Component Patterns

### Section Eyebrow (from Primitives.tsx)
```tsx
<SectionEyebrow>Label Text</SectionEyebrow>
// → text-xs uppercase tracking-widest text-accent-500
```

### Primary CTA (from Primitives.tsx)
```tsx
<PrimaryCTA href="...">Book a Strategy Call</PrimaryCTA>
// → accent-500 fill button with shimmer animation
```

### Secondary CTA (from Primitives.tsx)
```tsx
<SecondaryCTA href="...">Learn More</SecondaryCTA>
// → outline/ghost button
```

### Card Pattern
```tsx
<div className="bg-base-800 border border-white/10 rounded-2xl p-6 md:p-8">
  {/* card content */}
</div>
```

### Accent Highlight (inline text)
```tsx
<span className="text-accent-500">highlighted text</span>
```

### Gradient Text
```tsx
<span className="bg-gradient-to-r from-white to-ink-60 bg-clip-text text-transparent">
  Gradient Heading
</span>
```

---

## Responsive Breakpoints

| Prefix | Width | Notes |
|---|---|---|
| (none) | 0px+ | Mobile-first base |
| `sm:` | 640px+ | Large phones |
| `md:` | 768px+ | Tablets |
| `lg:` | 1024px+ | Laptops |
| `xl:` | 1280px+ | Desktop |
| `2xl:` | 1536px+ | Wide desktop |

Always design mobile-first. Stack columns vertically on mobile, side-by-side on `md:` or `lg:`.

---

## Edge Cases

- **Tailwind purge**: Never interpolate class names — use full strings. Bad: `bg-${color}-500`. Good: `bg-accent-500`
- **Dark mode**: Site is dark-only — no light mode toggle needed. Do not add `dark:` variants
- **Custom tokens not applying**: Verify `tailwind.config.js` content array covers the file path where the class is used
- **Gradient + `bg-clip-text`**: Must pair with `text-transparent` or the gradient won't show
- **`animate-marquee` duplication**: The marquee effect requires two identical sets of logos side-by-side (the second set seamlessly continues the first)
