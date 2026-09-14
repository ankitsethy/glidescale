import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import sharp from 'sharp';

const WIDTH = 1200;
const HEIGHT = 630;
const BASE = '#07070C';
const ACCENT = '#7C5CFF';
const INK = '#F5F5FA';
const INK_DIM = '#A0A0B4';

const LOGO_WIDTH = 460;
const LOGO_ASPECT = 1064 / 4214;
const LOGO_HEIGHT = Math.round(LOGO_WIDTH * LOGO_ASPECT);

const background = `
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}">
  <defs>
    <radialGradient id="glow" cx="50%" cy="18%" r="62%">
      <stop offset="0%" stop-color="${ACCENT}" stop-opacity="0.34" />
      <stop offset="55%" stop-color="${ACCENT}" stop-opacity="0.08" />
      <stop offset="100%" stop-color="${ACCENT}" stop-opacity="0" />
    </radialGradient>
    <pattern id="dots" width="26" height="26" patternUnits="userSpaceOnUse">
      <circle cx="1.5" cy="1.5" r="1.5" fill="#FFFFFF" fill-opacity="0.05" />
    </pattern>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="${BASE}" />
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#dots)" />
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glow)" />
  <rect x="0" y="${HEIGHT - 5}" width="${WIDTH}" height="5" fill="${ACCENT}" />
</svg>`;

const text = `
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}">
  <style>
    .headline {
      font-family: 'Segoe UI Semibold', 'Segoe UI', Inter, Arial, sans-serif;
      font-size: 56px;
      font-weight: 600;
      fill: ${INK};
      letter-spacing: -1.6px;
    }
    .sub {
      font-family: 'Segoe UI', Inter, Arial, sans-serif;
      font-size: 26px;
      font-weight: 400;
      fill: ${INK_DIM};
      letter-spacing: 0.2px;
    }
  </style>
  <text x="${WIDTH / 2}" y="372" text-anchor="middle" class="headline">AI systems that remove</text>
  <text x="${WIDTH / 2}" y="440" text-anchor="middle" class="headline">bottlenecks and unlock scale.</text>
  <text x="${WIDTH / 2}" y="516" text-anchor="middle" class="sub">glidescales.com</text>
</svg>`;

const logo = await sharp(resolve('public/logo-dark.svg'), { density: 300 })
  .resize(LOGO_WIDTH, LOGO_HEIGHT)
  .png()
  .toBuffer();

const out = resolve('public/og-image.png');

await sharp(Buffer.from(background))
  .composite([
    { input: logo, top: 152, left: Math.round((WIDTH - LOGO_WIDTH) / 2) },
    { input: Buffer.from(text), top: 0, left: 0 },
  ])
  .png()
  .toFile(out);

const { width, height, size } = await sharp(out).metadata();
console.log(`wrote public/og-image.png ${width}x${height} ${Math.round(size / 1024)}kB`);
