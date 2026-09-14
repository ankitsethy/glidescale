import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const DIST = resolve('dist');
const SSR_DIST = resolve('dist-ssr');

const escapeAttr = (value) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const { render, routes, SITE_URL, DEFAULT_OG_IMAGE } = await import(
  pathToFileURL(join(SSR_DIST, 'entry-server.js')).href
);

const template = readFileSync(join(DIST, 'index.html'), 'utf-8');

const replaceMetaContent = (html, selector, value) => {
  const pattern = new RegExp(`(<meta ${selector} content=")[^"]*(")`);
  if (!pattern.test(html)) {
    throw new Error(`Prerender could not find meta tag: ${selector}`);
  }
  return html.replace(pattern, `$1${escapeAttr(value)}$2`);
};

for (const route of routes) {
  const appHtml = render(route.path);
  const canonical = route.path === '/' ? SITE_URL : `${SITE_URL}${route.path}`;

  let html = template.replace(
    /<title>[\s\S]*?<\/title>/,
    `<title>${escapeAttr(route.title)}</title>`
  );

  html = replaceMetaContent(html, 'name="description"', route.description);
  html = replaceMetaContent(html, 'property="og:title"', route.title);
  html = replaceMetaContent(html, 'property="og:description"', route.description);
  html = replaceMetaContent(html, 'property="og:url"', canonical);
  html = replaceMetaContent(html, 'name="twitter:title"', route.title);
  html = replaceMetaContent(html, 'name="twitter:description"', route.description);

  const image = `${SITE_URL}${route.image ?? DEFAULT_OG_IMAGE}`;
  html = replaceMetaContent(html, 'property="og:image"', image);
  html = replaceMetaContent(html, 'name="twitter:image"', image);

  if (!html.includes('<div id="root"></div>')) {
    throw new Error('Prerender could not find the root mount point in index.html');
  }
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  const outFile = route.path === '/' ? join(DIST, 'index.html') : join(DIST, route.path, 'index.html');
  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, html);
  console.log(`prerendered ${route.path}`);
}

const canonicalOf = (path) => (path === '/' ? SITE_URL : `${SITE_URL}${path}`);

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routes.map((route) => `  <url><loc>${canonicalOf(route.path)}</loc></url>`),
  '</urlset>',
  '',
].join('\n');

writeFileSync(join(DIST, 'sitemap.xml'), sitemap);
console.log(`wrote sitemap.xml with ${routes.length} urls`);

writeFileSync(
  join(DIST, 'robots.txt'),
  ['User-agent: *', 'Allow: /', '', `Sitemap: ${SITE_URL}/sitemap.xml`, ''].join('\n')
);
console.log('wrote robots.txt');

rmSync(SSR_DIST, { recursive: true, force: true });
