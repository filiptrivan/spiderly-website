import { Metadata } from 'next';

export const generateMetadata = ({
  title = `.NET (C#) Web App Boilerplate Code Generator | Spiderly`,
  description = `Spiderly is a free open-source .NET (C#) boilerplate code generator that turns EF Core model into fully customizable .NET (C#) + Angular web application.`,
  image = '/thumbnail.png',
  icons = [
    {
      rel: 'apple-touch-icon',
      sizes: '32x32',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
  ],
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string | null;
  icons?: Metadata['icons'];
  noIndex?: boolean;
} = {}): Metadata => ({
  title,
  description,
  icons,
  openGraph: {
    title,
    description,
    ...(image && { images: [{ url: image }] }),
  },
  twitter: {
    title,
    description,
    ...(image && { card: 'summary_large_image', images: [image] }),
    creator: '@shreyassihasane',
  },
  ...(noIndex && { robots: { index: false, follow: false } }),
});
