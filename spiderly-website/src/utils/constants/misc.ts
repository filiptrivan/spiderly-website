export const DEFAULT_AVATAR_URL =
  'https://api.dicebear.com/8.x/initials/svg?backgroundType=gradientLinear&backgroundRotation=0,360&seed=';

export const REVIEWS = [
  {
    name: 'Luka Markovic',
    username: 'Co Founder and CTO at Atrigen',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    review:
      'This tool is a lifesaver! Managing and tracking my links has never been easier. A must-have for anyone dealing with numerous links.',
  },
  {
    name: 'Milan Došlić',
    username: 'Software Engineer at Tenderly',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    review:
      'Great app with a lot of potential. It has already saved me a lot of time. Looking forward to future updates and improvements.',
  },
  {
    name: 'Damien Sendner',
    username: 'CTO at Cayus',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    review:
      "I've been using this app daily for months. The insights and analytics it provides are invaluable. Highly recommend it!",
  },
  {
    name: 'Alexey Fedorov',
    username: 'Software Engineer at STRABAG',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    review: 'This app is fantastic! It offers everything I need to manage my links efficiently.',
  },
  {
    name: 'Kirill Rychkov',
    username: 'Software Engineer',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    review:
      "Absolutely love this app! It's intuitive and feature-rich. Has significantly improved how I manage and track links.",
  },
  {
    name: 'Denis Melekhin',
    username: 'ML Engineer at Revolut',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    review:
      'Great app with a lot of potential. It has already saved me a lot of time. Looking forward to future updates and improvements.',
  },
] as const;

export const TECH_STACK = [
  {
    name: '.NET (C#)',
    category: 'Backend',
    logo: '/tech-stack/dotnet-logo.svg',
  },
  {
    name: 'Angular',
    category: 'Frontend',
    logo: '/tech-stack/angular-logo.svg',
  },
  {
    category: 'Database',
    isChoice: true,
    options: [
      {
        name: 'SQL Server',
        logo: '/tech-stack/microsoft-sql-server-logo.svg',
      },
      {
        name: 'PostgreSQL',
        logo: '/tech-stack/postgresql-logo.svg',
      },
    ],
  },
  {
    name: 'Entity Framework Core',
    category: 'ORM',
    logo: '/tech-stack/entity-framework-core-logo.svg',
  },
  {
    name: 'PrimeNG',
    category: 'UI Components Library',
    logo: '/tech-stack/primeng-logo.svg',
  },
  {
    name: 'Serilog',
    category: 'Logging',
    logo: '/tech-stack/serilog-logo.svg',
  },
  {
    name: 'FluentValidation',
    category: 'Backend Validation',
    logo: '/tech-stack/fluent-validation-logo.svg',
  },
  {
    name: 'Mapster',
    category: 'Object Mapping',
    logo: '/tech-stack/mapster-logo.svg',
  },
  {
    name: 'Transloco',
    category: 'Frontend Translations',
    logo: '/tech-stack/transloco-logo.svg',
  },
] as const;
