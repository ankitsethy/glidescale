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
const MARK_WIDTH_RATIO = 0.96;

const markWidth = CANVAS * MARK_WIDTH_RATIO;
const scale = markWidth / SRC_W;
const markHeight = SRC_H * scale;
const offsetX = (CANVAS - markWidth) / 2;
const offsetY = (CANVAS - markHeight) / 2;

// Transparent for browser tabs: at 32px a filled tile only pads the mark down.
// Solid for apple-touch-icon and the PWA icon, because iOS composites a
// transparent home-screen icon onto black and it reads as broken.
const buildSvg = (filled) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${CANVAS} ${CANVAS}" width="${CANVAS}" height="${CANVAS}">
  ${filled ? `<rect width="${CANVAS}" height="${CANVAS}" fill="${TILE_COLOR}"/>` : ''}
  <g transform="translate(${offsetX.toFixed(2)} ${offsetY.toFixed(2)}) scale(${scale.toFixed(5)}) translate(${-SRC_X} ${-SRC_Y})">
    <path fill="${MARK_COLOR}" stroke="${MARK_COLOR}" stroke-linejoin="round" stroke-width="45" d="${MARK_PATH}"/>
  </g>
</svg>
`;

writeFileSync(resolve('public/favicon.svg'), buildSvg(false));
console.log('wrote public/favicon.svg (square, transparent)');

// Google recommends favicons be a multiple of 48px.
const outputs = [
  ['public/favicon-16x16.png', 16, false],
  ['public/favicon-32x32.png', 32, false],
  ['public/favicon-48x48.png', 48, false],
  ['public/favicon-96x96.png', 96, false],
  ['public/apple-touch-icon.png', 180, true],
  ['public/icon-512.png', 512, true],
];

for (const [file, size, filled] of outputs) {
  await sharp(Buffer.from(buildSvg(filled)), { density: 600 })
    .resize(size, size)
    .png()
    .toFile(resolve(file));
  console.log(`wrote ${file} ${size}x${size}${filled ? ' (tile)' : ''}`);
}

// Google's favicon guidelines say it checks /favicon.ico at the site root as
// a fallback signal even when <link rel="icon"> tags are present. That file
// never existed here, which is a plausible reason the logo wasn't showing up
// next to search results despite every other tag being correct.
// ICO can embed PNG data directly per-entry since Windows Vista, so no extra
// image-encoding dependency is needed -- just the container format.
const buildIco = async (sizes) => {
  const images = await Promise.all(
    sizes.map((size) =>
      sharp(Buffer.from(buildSvg(false)), { density: 600 }).resize(size, size).png().toBuffer()
    )
  );

  const headerSize = 6 + 16 * images.length;
  let offset = headerSize;
  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(images.length, 4);

  images.forEach((png, i) => {
    const entry = 6 + i * 16;
    const size = sizes[i];
    header.writeUInt8(size >= 256 ? 0 : size, entry); // width, 0 = 256
    header.writeUInt8(size >= 256 ? 0 : size, entry + 1); // height
    header.writeUInt8(0, entry + 2); // color palette
    header.writeUInt8(0, entry + 3); // reserved
    header.writeUInt16LE(1, entry + 4); // color planes
    header.writeUInt16LE(32, entry + 6); // bits per pixel
    header.writeUInt32LE(png.length, entry + 8); // image data size
    header.writeUInt32LE(offset, entry + 12); // image data offset
    offset += png.length;
  });

  return Buffer.concat([header, ...images]);
};

const ico = await buildIco([16, 32, 48]);
writeFileSync(resolve('public/favicon.ico'), ico);
console.log(`wrote public/favicon.ico (${ico.length} bytes, 16/32/48px)`);
