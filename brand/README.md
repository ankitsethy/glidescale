# Brand assets

`_raw/` holds every logo export inherited from the old OneDrive folder, unsorted. Filenames
are meaningless design-tool exports (`a.jpg`, `c.svg`, `Frame 1-2.png`) — nobody can tell
which is canonical without eyeballing them.

**Open task:** pick one canonical file per background variant (dark bg, light bg, black,
navy, wordmark) and move/rename it up into `brand/` directly. Everything else in `_raw/`
gets deleted once that's done.

The app currently uses `public/logo-dark.svg` (46,534 bytes) — this does not byte-match any
file in `_raw/`, including the closest candidate `_raw/dark-bg-logo/dark bg logo svg.svg`
(46,754 bytes), so it may already be a hand-edited or differently-exported version. Don't
assume `public/logo-dark.svg` is redundant with anything in `_raw/`.
