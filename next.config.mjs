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
  async redirects() {
    return [
      {
        source: '/docs/ui-customization',
        destination: '/docs/frontend-customization',
        permanent: true,
      },
    ];
  },
};

export default withMDX(nextConfig);
