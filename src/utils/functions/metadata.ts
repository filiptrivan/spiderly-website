import { Metadata } from 'next';

const SITE_URL = 'https://www.spiderly.dev';

export const generateMetadata = ({
  title = `.NET (C#) Web App Boilerplate Code Generator`,
  description = `Spiderly is a free open-source .NET (C#) boilerplate code generator that turns EF Core model into fully customizable .NET (C#) + Angular web application.`,
  image = '/preview-1200x630.png',
  path = '/',
}: {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
} = {}): Metadata => ({
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${title} | Spiderly`,
    template: '%s | Spiderly',
  },
  description,
  icons: {
    icon: [
      { url: '/logo-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/logo-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    url: `${SITE_URL}${path}`,
    type: 'website',
    siteName: 'Spiderly',
    title,
    description,
    images: [{ url: image, alt: 'Spiderly Web Application Framework' }],
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    images: [image],
    creator: '@filiptrivan',
  },
  robots: {
    index: true,
    follow: true,
  },
});
