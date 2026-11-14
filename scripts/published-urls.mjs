// The last step of `npm run build`: each URL in published-urls.txt renders a page or redirects to
// one. Search engines and other sites link to these URLs. A URL that answers 404 loses its search
// rank and the readers that its links bring.
//
// The list only grows. This step adds each docs page that the build renders and each redirect
// source. On Vercel or in another CI, the write is lost, so a URL missing from the list fails the
// build there. A local build adds it, and the contributor commits the list.
//
// The pages and redirects come from the manifests of the build (.next/), so the step judges what
// Next serves. It needs no git history, which a shallow clone does not have.

import { readFileSync, writeFileSync } from 'node:fs';

const LIST = new URL('../published-urls.txt', import.meta.url);
const HEADER = `# Each URL that the site published under /docs, and each redirect source. The build fails when
# a URL here neither renders a page nor redirects to one (scripts/published-urls.mjs).
# The build adds new URLs. Never remove a line.
`;

const manifest = (name) =>
  JSON.parse(readFileSync(new URL(`../.next/${name}`, import.meta.url), 'utf8'));
const pages = new Set(Object.keys(manifest('prerender-manifest.json').routes));
// An internal redirect is Next's own, which removes a trailing slash.
const redirects = manifest('routes-manifest.json').redirects.filter((r) => !r.internal);

// The redirect chain from a URL that ends on no page, or null when the URL reaches a page.
function brokenChain(url, chain = []) {
  if (pages.has(url)) return null;
  chain = [...chain, url];
  const redirect = redirects.find((r) => new RegExp(r.regex).test(url));
  if (!redirect) return chain;
  // An outside URL, or a destination with parameters, which this step cannot follow.
  if (redirect.destination.includes(':')) return null;
  const next = redirect.destination.split(/[?#]/)[0];
  return chain.includes(next) ? [...chain, next] : brokenChain(next, chain);
}

const listed = readFileSync(LIST, 'utf8')
  .split(/\r?\n/)
  .filter((line) => line && !line.startsWith('#'));
const published = [
  ...[...pages].filter((url) => url === '/docs' || url.startsWith('/docs/')),
  // A literal source only: a source with parameters names many URLs.
  ...redirects.map((r) => r.source).filter((source) => /^[\w/.-]+$/.test(source)),
];
const missing = [...new Set(published)].filter((url) => !listed.includes(url)).sort();
const broken = listed.map((url) => brokenChain(url)).filter(Boolean);
const ci = Boolean(process.env.CI || process.env.VERCEL);

if (broken.length) {
  console.error(
    'published-urls.txt: these published URLs neither render a page nor redirect to one:',
  );
  for (const chain of broken) console.error(`  ${chain.join(' → ')}`);
  console.error(
    'Add a permanent redirect from each URL in next.config.mjs redirects(), to the page that now ' +
      'holds its content. For a page deleted outright, redirect to the nearest page on its ' +
      'subject. Never remove a line from published-urls.txt.',
  );
}
if (missing.length && ci) {
  console.error('published-urls.txt does not list these URLs, which this build publishes:');
  for (const url of missing) console.error(`  ${url}`);
  console.error('A local `npm run build` adds them. Commit published-urls.txt with your change.');
}
if (broken.length || (missing.length && ci)) process.exit(1);

if (missing.length) {
  const urls = [...listed, ...missing].sort();
  writeFileSync(LIST, `${HEADER}${urls.join('\n')}\n`);
  console.log(`published-urls.txt: added ${missing.join(', ')}. Commit the file with your change.`);
}
