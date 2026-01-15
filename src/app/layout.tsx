import { Footer, Navbar, Providers } from '@/components';
import '@/styles/globals.css';
import { cn, generateMetadata, inter } from '@/utils';

export const metadata = generateMetadata();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
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
