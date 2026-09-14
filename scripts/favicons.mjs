import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import sharp from 'sharp';

// The source mark is 695x194 (roughly 3.6:1). Dropped straight into a square
// favicon slot it fits to width and renders as a 4px-tall sliver, which is why
// it looked broken in tabs and search results. Here it gets composed into a
// square tile at a deliberate size instead.
const MARK_PATH =
  'M75 174 400 32l325 142v5l-40 2-151-16-94-27-40 19-40-19-94 27-151 16-40-2z';
const MARK_COLOR = '#05f';
const TILE_COLOR = '#07070C';

const SRC_X = 52.5;
const SRC_Y = 9.5;
const SRC_W = 695;
const SRC_H = 194;

const CANVAS = 512;
const MARK_WIDTH_RATIO = 0.84;

const markWidth = CANVAS * MARK_WIDTH_RATIO;
const scale = markWidth / SRC_W;
const markHeight = SRC_H * scale;
const offsetX = (CANVAS - markWidth) / 2;
const offsetY = (CANVAS - markHeight) / 2;

const squareSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${CANVAS} ${CANVAS}" width="${CANVAS}" height="${CANVAS}">
  <rect width="${CANVAS}" height="${CANVAS}" fill="${TILE_COLOR}"/>
  <g transform="translate(${offsetX.toFixed(2)} ${offsetY.toFixed(2)}) scale(${scale.toFixed(5)}) translate(${-SRC_X} ${-SRC_Y})">
    <path fill="${MARK_COLOR}" stroke="${MARK_COLOR}" stroke-linejoin="round" stroke-width="45" d="${MARK_PATH}"/>
  </g>
</svg>
`;

writeFileSync(resolve('public/favicon.svg'), squareSvg);
console.log('wrote public/favicon.svg (square)');

// Google recommends favicons be a multiple of 48px.
const outputs = [
  ['public/favicon-16x16.png', 16],
  ['public/favicon-32x32.png', 32],
  ['public/favicon-48x48.png', 48],
  ['public/favicon-96x96.png', 96],
  ['public/apple-touch-icon.png', 180],
  ['public/icon-512.png', 512],
];

for (const [file, size] of outputs) {
  await sharp(Buffer.from(squareSvg), { density: 600 })
    .resize(size, size)
    .png()
    .toFile(resolve(file));
  console.log(`wrote ${file} ${size}x${size}`);
}
