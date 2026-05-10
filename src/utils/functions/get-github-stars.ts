import { GITHUB_STARS_FALLBACK } from '@/utils/constants/nav-links';

// Called from RootLayout — fine while every route is static/SSG (fetch runs at
// build/revalidation, not per request). If a route ever opts into dynamic
// rendering, refactor to a colocated Server Component wrapped in <Suspense>
// near the navbar badge so only that subtree waits on GitHub.
export async function getGitHubStars(): Promise<number> {
  try {
    const res = await fetch('https://api.github.com/repos/filiptrivan/spiderly', {
      headers: { Accept: 'application/vnd.github+json' },
      next: { revalidate: 60 * 60 * 24 },
      signal: AbortSignal.timeout(2000),
    });
    if (!res.ok) return GITHUB_STARS_FALLBACK;
    const data = (await res.json()) as { stargazers_count?: number };
    return typeof data.stargazers_count === 'number'
      ? data.stargazers_count
      : GITHUB_STARS_FALLBACK;
  } catch {
    return GITHUB_STARS_FALLBACK;
  }
}
