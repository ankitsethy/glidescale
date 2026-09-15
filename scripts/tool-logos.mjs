import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import * as simpleIcons from 'simple-icons';

// Vendored, not hotlinked. A marquee that breaks because a vendor moved a file
// on their marketing site is not acceptable on a page we send to prospects.
// Re-run with: npm run tool-logos
//
// `kind` drives how the marquee renders each one:
//   wordmark -> the SVG already contains the product name, render it alone
//   icon     -> a bare mark, render it with a text label beside it
const LOGOS = [
  { slug: 'claude', kind: 'icon', url: 'https://svgl.app/library/claude-ai-icon.svg' },
  { slug: 'claude-code', kind: 'icon', url: 'https://svgl.app/library/anthropic_white.svg' },
  { slug: 'openai', kind: 'icon', url: 'https://svgl.app/library/openai_dark.svg' },
  { slug: 'linkedin', kind: 'icon', url: 'https://svgl.app/library/linkedin.svg' },
  { slug: 'apify', kind: 'wordmark', url: 'https://apify.com/img/apify-logo/wordmark-white.svg' },
  {
    slug: 'instantly',
    kind: 'wordmark',
    url: 'https://cdn.prod.website-files.com/63860c8c65e7bef4a1eeebeb/63fcf43ca8cfc794df15c0f6_Instantly%20Logo.svg',
  },
  {
    slug: 'retell',
    kind: 'wordmark',
    url: 'https://cdn.prod.website-files.com/64ada0f2685b2d18caa5e699/6a6100c9991b0523680dff6a_logo.svg',
  },
  { slug: 'vercel', kind: 'icon', url: 'https://svgl.app/library/vercel_dark.svg' },
  { slug: 'google-cloud', kind: 'icon', url: 'https://svgl.app/library/google-cloud.svg' },
];

const OUT_DIR = resolve('public/tools');
mkdirSync(OUT_DIR, { recursive: true });

for (const { slug, url, kind, simpleIcon } of LOGOS) {
  let svg;

  if (simpleIcon) {
    const icon = simpleIcons[simpleIcon];
    if (!icon) throw new Error(`${slug}: ${simpleIcon} not found in simple-icons`);
    svg = icon.svg;
  } else {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`${slug}: ${res.status} ${res.statusText} from ${url}`);
    }
    svg = await res.text();
  }

  if (!svg.includes('<svg')) {
    throw new Error(`${slug}: response was not an SVG`);
  }

  writeFileSync(resolve(OUT_DIR, `${slug}.svg`), svg);
  const viewBox = svg.match(/viewBox="([^"]*)"/)?.[1] ?? 'none';
  console.log(`wrote public/tools/${slug}.svg  ${kind.padEnd(8)} viewBox=${viewBox}`);
}
