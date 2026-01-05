import { Code2, LucideIcon, Zap } from 'lucide-react';

type NavLink = {
  title: string;
  href?: string;
  dropdown?: Array<{
    title: string;
    href: string;
    icon: LucideIcon;
    tagline?: string;
  }>;
};

export const NAV_LINKS: NavLink[] = [
  {
    title: 'Features',
    dropdown: [
      {
        title: 'App Initialization',
        href: '/features/app-initialization',
        icon: Zap,
      },
      {
        title: 'Incremental CRUD Generation',
        href: '/features/crud-generation',
        icon: Code2,
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
