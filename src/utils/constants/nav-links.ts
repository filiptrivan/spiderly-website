type NavLink = {
  title: string;
  href?: string;
  dropdown?: Array<{
    title: string;
    href: string;
    tagline?: string;
  }>;
};

export const NAV_LINKS: NavLink[] = [
  {
    title: 'FAQ',
    href: '/faq',
  },
  {
    title: 'Docs',
    href: '/docs',
  },
];

export const GITHUB_REPO_URL = 'https://github.com/filiptrivan/spiderly';

export const GITHUB_STARS_FALLBACK = 50;
export const NUGET_DOWNLOADS_FALLBACK = 12000;
export const NPM_DOWNLOADS_FALLBACK = 300;
