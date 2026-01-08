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
