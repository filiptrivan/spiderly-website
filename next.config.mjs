import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
    ],
  },
  async rewrites() {
    // Serve per-page Markdown at /docs/<slug>.mdx (and /docs.mdx for the index) from the llms.mdx route
    // handler. Powers the docs "Copy Markdown" / "View as Markdown" page actions.
    return [
      {
        source: '/docs.mdx',
        destination: '/llms.mdx',
      },
      {
        source: '/docs/:path*.mdx',
        destination: '/llms.mdx/:path*',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/docs/entity-authorization',
        destination: '/docs/authorization',
        permanent: true,
      },
      {
        source: '/docs/entity-validation',
        destination: '/docs/validation',
        permanent: true,
      },
      {
        source: '/docs/translate-spiderly-app',
        destination: '/docs/translation',
        permanent: true,
      },
      {
        source: '/docs/attributes',
        destination: '/docs/attribute-reference',
        permanent: true,
      },
      {
        source: '/docs/attributes/general',
        destination: '/docs/attribute-reference',
        permanent: true,
      },
      {
        source: '/docs/attributes/code-generation',
        destination: '/docs/attribute-reference',
        permanent: true,
      },
      {
        source: '/docs/attributes/relationships',
        destination: '/docs/relationships',
        permanent: true,
      },
      {
        source: '/docs/attributes/ui',
        destination: '/docs/ui-customization',
        permanent: true,
      },
      {
        source: '/docs/set-up-telegram-notifications',
        destination: '/docs/exceptions',
        permanent: true,
      },
      {
        source: '/playground',
        destination: '/#interactive-demo',
        permanent: true,
      },
    ];
  },
};

export default withMDX(nextConfig);
