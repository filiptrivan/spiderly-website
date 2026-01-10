import { HeroSection } from '@/components/sections/hero-section';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Spiderly',
  description: "The page you're looking for doesn't exist or has been moved.",
  robots: {
    index: false,
    follow: false,
  },
};

const NotFound = () => {
  return (
    <HeroSection
      title={
        <>
          <span className="text-transparent bg-linear-to-r from-violet-500 to-fuchsia-500 bg-clip-text">
            404
          </span>{' '}
          Page Not Found
        </>
      }
      description="The page you're looking for doesn't exist or has been moved. Let's get you back on track to generating your web apps with Spiderly."
      buttons={
        <>
          <Button asChild>
            <Link href={'/'}>Go to Homepage</Link>
          </Button>
        </>
      }
    />
  );
};

export default NotFound;
