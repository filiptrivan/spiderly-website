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
    title: 'Features',
    dropdown: [
      {
        title: 'App Creation',
        href: '/features/app-creation',
      },
      {
        title: 'CRUD Generation',
        href: '/features/crud-generation',
      },
    ],
  },
  {
    title: 'FAQ',
    href: '/faq',
  },
  {
    title: 'Docs',
    href: '/docs',
  },
];
