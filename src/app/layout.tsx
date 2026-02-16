import { Footer, Navbar, Providers } from '@/components';
import '@/styles/globals.css';
import { cn, generateMetadata, inter } from '@/utils';
import Script from 'next/script';

export const metadata = generateMetadata();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-7M2FP23BBN"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7M2FP23BBN');
          gtag('config', 'AW-17957580536');
        `}
      </Script>
      <body
        className={cn(
          'min-h-screen bg-background text-foreground antialiased font-default! overflow-x-hidden',
          inter.variable,
        )}
      >
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
