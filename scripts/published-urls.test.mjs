// The negative control of published-urls.mjs: a bad list fails, so a green build is no placebo.
// `npm run build` runs this file first.

import assert from 'node:assert/strict';
import { test } from 'node:test';
import { judge } from './published-urls.mjs';

// A redirect, as .next/routes-manifest.json gives a literal source (Next 16.1, read 2026-11-14).
const redirect = (source, destination) => ({
  source,
  destination,
  statusCode: 308,
  regex: `^(?!/_next)${source}(?:/)?$`,
});
const pages = new Set(['/', '/docs', '/docs/validation']);

test('a listed URL with no page and no redirect is broken', () => {
  const { broken } = judge({ pages, redirects: [], listed: ['/docs', '/docs/enums'] });
  assert.deepEqual(broken, [['/docs/enums']]);
});

test('a redirect to a page that is gone is broken, with its chain', () => {
  const redirects = [redirect('/docs/entity-validation', '/docs/enums')];
  const { broken } = judge({ pages, redirects, listed: ['/docs/entity-validation'] });
  assert.deepEqual(broken, [['/docs/entity-validation', '/docs/enums']]);
});

test('a redirect loop is broken', () => {
  const redirects = [redirect('/docs/a', '/docs/b'), redirect('/docs/b', '/docs/a')];
  const { broken } = judge({ pages, redirects, listed: ['/docs/a'] });
  assert.deepEqual(broken, [['/docs/a', '/docs/b', '/docs/a']]);
});

test('a page renamed with its redirect passes, and a hash in the destination is kept out', () => {
  const redirects = [
    redirect('/docs/entity-validation', '/docs/validation'),
    redirect('/playground', '/#interactive-demo'),
  ];
  const listed = ['/docs', '/docs/entity-validation', '/docs/validation', '/playground'];
  assert.deepEqual(judge({ pages, redirects, listed }), { broken: [], missing: [] });
});

test('a docs page and a redirect source that the list does not hold are missing', () => {
  const redirects = [redirect('/playground', '/')];
  const { missing } = judge({ pages, redirects, listed: ['/docs'] });
  assert.deepEqual(missing, ['/docs/validation', '/playground']);
});

test('an empty list or a build with no docs page is refused, since nothing was judged', () => {
  assert.throws(() => judge({ pages, redirects: [], listed: [] }), /nothing was judged/);
  assert.throws(
    () => judge({ pages: new Set(['/']), redirects: [], listed: ['/docs'] }),
    /nothing was judged/,
  );
});
