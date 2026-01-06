export const FAQ = [
  {
    id: 'item-1',
    question: 'How to install Spiderly?',
    answer: 'You can find the installation instructions here.',
    link: '/docs/getting-started',
  },
  {
    id: 'item-2',
    question: 'What are the prerequisites for using Spiderly?',
    answer: 'The prerequisites are listed in the first step of the getting-started guide.',
    link: '/docs/getting-started',
  },
  {
    id: 'item-3',
    question: 'What parts of the app does Spiderly Source Generators generate?',
    answer: '',
    sections: [
      {
        title: 'Frontend (UI)',
        items: [
          'TypeScript classes with strongly typed constructors',
          'Table view pages — records with sorting, filtering, and pagination',
          'Admin pages — forms for creating and editing records',
          'Angular reactive form validators',
          'API client',
        ],
      },
      {
        title: 'Backend (API)',
        items: [
          'Partial DTO classes',
          'Controllers',
          'FluentValidation rules',
          'CRUD service methods — database interaction',
          'Object mapping configuration',
        ],
      },
    ],
  },
  {
    id: 'item-4',
    question: 'Is Spiderly open-source?',
    answer:
      "Yes, Spiderly is open-source and released under the MIT License. You're free to use it in personal, commercial, or open-source projects.",
    link: 'https://github.com/filiptrivan/spiderly',
    externalLink: true,
  },
  {
    id: 'item-5',
    question: 'How does Spiderly compare to the ABP Framework?',
    answer:
      "In most scenarios, Spiderly is the better choice—especially if you're building a typical business or admin-style app with .NET and Angular. It's much simpler to set up, requires less boilerplate, under the MIT license. You get full CRUD, API, Angular UI, validation, mapping, and even DTOs generated automatically from your EF Core model.",
    table: {
      headers: ['Feature', 'Spiderly', 'ABP Framework'],
      rows: [
        {
          feature: 'End-to-end code generation',
          spiderly: 'Yes — from EF Core to UI + API client + validation',
          competitor: 'No — you build modules manually',
        },
        {
          feature: 'Auto-sync on changes',
          spiderly: 'Real-time generation on code change',
          competitor: 'Manual updates required',
        },
        {
          feature: 'Tech stack',
          spiderly: '.NET + Angular (with EF Core, PrimeNG, FluentValidation, Serilog...)',
          competitor: 'Modular with flexibility (Blazor, Angular, MVC…)',
        },
        {
          feature: 'OS support',
          spiderly: 'Windows only',
          competitor: 'Cross-platform (Windows, Linux, macOS)',
        },
      ],
    },
  },
  {
    id: 'item-6',
    question: 'How does Spiderly compare to JHipster?',
    answer:
      'For .NET developers building admin-style or business applications, Spiderly is often a more focused and streamlined solution than JHipster. While JHipster is powerful and flexible, it comes with more complexity and is better suited for Java ecosystems. Spiderly is easier to set up, requires less configuration, and gives you full-stack code generation directly from your EF Core model—all under the MIT license.',
    table: {
      headers: ['Feature', 'Spiderly', 'JHipster'],
      rows: [
        {
          feature: 'End-to-end code generation',
          spiderly: 'Yes — from EF Core to UI + API + validation + DTOs',
          competitor: 'Yes — from database to Spring Boot API + Angular/React UI',
        },
        {
          feature: 'Auto-sync on changes',
          spiderly: 'Real-time generation on model changes',
          competitor: 'Requires manual regeneration or CLI commands',
        },
        {
          feature: 'Tech stack',
          spiderly: '.NET + Angular (EF Core, PrimeNG, FluentValidation, Serilog...)',
          competitor: 'Java + Spring Boot + Angular/React/Vue',
        },
        {
          feature: 'Setup complexity',
          spiderly: 'Minimal — works out of the box for CRUD apps',
          competitor: 'Higher — requires multiple tools and configuration steps',
        },
        {
          feature: 'License',
          spiderly: 'MIT — simple and permissive',
          competitor: 'Apache 2.0 — open source but more enterprise-focused',
        },
        {
          feature: 'OS support',
          spiderly: 'Windows only',
          competitor: 'Cross-platform (Windows, Linux, macOS)',
        },
      ],
    },
  },
  {
    id: 'item-7',
    question: 'Does Spiderly work on Linux operating systems?',
    answer:
      'No, Spiderly is currently not compatible with Linux. We are focusing on Windows support for now, but Linux support may be added in the future.',
  },
  {
    id: 'item-8',
    question: 'Does Spiderly work on macOS?',
    answer:
      'No, Spiderly is currently not compatible with macOS. We are focusing on Windows support for now, but macOS support may be added in the future.',
  },
];
