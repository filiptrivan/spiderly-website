import { Metadata } from 'next';

export const generateMetadata = ({
  title = `.NET (C#) Web App Boilerplate Code Generator | Spiderly`,
  description = `Spiderly is a free open-source .NET (C#) boilerplate code generator that turns EF Core model into fully customizable .NET (C#) + Angular web application.`,
  image = '/thumbnail.jpg',
  icons = [
    {
      rel: 'icon',
      sizes: '32x32',
      url: '/favicon.ico',
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
    creator: '@filiptrivan',
  },
  ...(noIndex && { robots: { index: false, follow: false } }),
});
