# Brand assets

Canonical files live here in `brand/` directly. Use these. Everything in `_raw/` is the
unsorted original export dump kept only as an archive — filenames there are meaningless
(`b.png`, `c.svg`, `Frame 1-2.png`) and nothing should reference them.

## Canonical set

| File | What it is | Use on |
|---|---|---|
| `glidescale-lockup-dark.svg` | Mark + wordmark, horizontal | Dark backgrounds |
| `glidescale-lockup-dark.jpg` | Same, raster 4214x1064 | Dark, where SVG is not accepted |
| `glidescale-lockup-light.svg` | Mark + wordmark, horizontal | Light backgrounds |
| `glidescale-mark-blue.png` | Wing mark only, brand blue | Dark backgrounds |
| `glidescale-mark-navy.svg` | Wing mark only, navy | Light backgrounds |
| `glidescale-mark-black.svg` | Wing mark only, solid black | Mono / print on light |
| `glidescale-mark-white.svg` | Wing mark only, solid white | Mono / print on dark |
| `glidescale-wordmark-dark.png` | Wordmark only, no mark | Dark backgrounds |
| `glidescale-wordmark-light.png` | Wordmark only, no mark | Light backgrounds |
| `glidescale-icon-square.png` | Square app tile, 512x512 | Favicons, app icons, avatars |

## Notes

The site uses `public/logo-dark.svg`, which is a separate hand-tuned export and does **not**
byte-match `glidescale-lockup-dark.svg` (46,534 vs 46,754 bytes). Don't assume they are
interchangeable.

Favicons and the square icon are generated, not hand-cut. Regenerate with `npm run favicons`
after any change to the mark. Browser-tab icons are transparent; `apple-touch-icon.png` and
`icon-512.png` are on a solid tile because iOS composites transparent home-screen icons onto
black.

`glidescale-mark-white.svg` was generated from the black variant, since no white export
existed in the original upload.
