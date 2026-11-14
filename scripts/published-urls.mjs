// The last step of `npm run build`: each URL in published-urls.txt renders a page or redirects to
// one (spiderly's `CODING_STANDARDS.md` → "A docs page keeps its URL").
//
// The list only grows. This step adds each docs page that the build renders and each redirect
// source. Vercel and other CI discard that write, so there a URL missing from the list fails the
// build. A local build adds the URL, and the contributor commits the list.
//
// The pages and redirects come from the manifests of the build (.next/), so the step judges what
// Next serves. It needs no git history, which a shallow clone does not have.

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const LIST_FILE = new URL('../published-urls.txt', import.meta.url);

const isDocsUrl = (url) => url === '/docs' || url.startsWith('/docs/');

// Judges the listed URLs against a build. `pages` holds each URL that the build renders, and
// `redirects` holds the redirects of .next/routes-manifest.json. Returns each broken redirect
// chain, and each URL that the build publishes and the list does not hold.
export function judge({ pages, redirects, listed }) {
  if (!listed.length || ![...pages].some(isDocsUrl)) {
    throw new Error(
      'published-urls: the list or the build holds no docs URL, so nothing was judged.',
    );
  }
  // Next adds an internal redirect, which removes a trailing slash (.next/routes-manifest.json,
  // Next 16.1, read 2026-11-14).
  const ownRedirects = redirects.filter((r) => !r.internal);

  // The redirect chain from a URL that ends on no page, or null when the URL reaches a page.
  function brokenChain(url, chain = []) {
    if (pages.has(url)) return null;
    chain = [...chain, url];
    const redirect = ownRedirects.find((r) => new RegExp(r.regex).test(url));
    if (!redirect) return chain;
    // This step cannot follow an outside URL or a destination with parameters, so the URL passes.
    if (redirect.destination.includes(':')) return null;
    const next = redirect.destination.split(/[?#]/)[0];
    return chain.includes(next) ? [...chain, next] : brokenChain(next, chain);
  }

  const published = [
    ...[...pages].filter(isDocsUrl),
    // A literal source only: a source with parameters names many URLs.
    ...ownRedirects.map((r) => r.source).filter((source) => /^[\w/.-]+$/.test(source)),
  ];
  return {
    broken: listed.map((url) => brokenChain(url)).filter(Boolean),
    missing: [...new Set(published)].filter((url) => !listed.includes(url)).sort(),
  };
}

function main() {
  const readManifest = (name) =>
    JSON.parse(readFileSync(new URL(`../.next/${name}`, import.meta.url), 'utf8'));
  const lines = readFileSync(LIST_FILE, 'utf8').split(/\r?\n/);
  const comments = lines.filter((line) => line.startsWith('#'));
  const listed = lines.filter((line) => line && !line.startsWith('#'));
  const { broken, missing } = judge({
    pages: new Set(Object.keys(readManifest('prerender-manifest.json').routes)),
    redirects: readManifest('routes-manifest.json').redirects,
    listed,
  });
  const missingInCi = missing.length > 0 && Boolean(process.env.CI || process.env.VERCEL);

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
  if (missingInCi) {
    console.error('published-urls.txt does not list these URLs, which this build publishes:');
    for (const url of missing) console.error(`  ${url}`);
    console.error('A local `npm run build` adds them. Commit published-urls.txt with your change.');
  }
  if (broken.length || missingInCi) process.exit(1);

  if (missing.length) {
    const urls = [...listed, ...missing].sort();
    writeFileSync(LIST_FILE, `${[...comments, ...urls].join('\n')}\n`);
    console.log(
      `published-urls.txt: added ${missing.join(', ')}. Commit the file with your change.`,
    );
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) main();
