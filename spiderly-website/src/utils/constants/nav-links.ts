type NavLink = {
  title: string;
  href?: string;
  dropdown?: Array<{
    title: string;
    href: string;
  }>;
};

export const NAV_LINKS: NavLink[] = [
  {
    title: 'Features',
    dropdown: [
      {
        title: 'Spiderly App Initialization',
        href: '/features/app-initialization',
      },
      {
        title: 'Incremental CRUD Generation',
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
