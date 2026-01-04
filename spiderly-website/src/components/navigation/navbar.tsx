'use client';

import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn, NAV_LINKS } from '@/utils';
import { LucideIcon, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import AnimationContainer from '../global/animation-container';
import MobileNavbar from './mobile-navbar';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 8) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 inset-x-0 h-14 w-full border-b border-transparent z-[99999] select-none transition-all duration-300 ease-in-out',
        scroll && 'border-background/80 bg-background/40 backdrop-blur-md',
      )}
    >
      <AnimationContainer reverse delay={0.1} className="size-full">
        <div className="flex items-center justify-between h-full w-full max-w-full md:max-w-screen-xl mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center space-x-12">
            <Link href="/#home" className="flex items-center gap-2">
              <Image src={'/icons/spiderly-logo.svg'} width={26} height={26} alt="Spiderly Logo" />
              <span className="text-lg font-bol font-heading !leading-none">SPIDERLY</span>
            </Link>

            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                {NAV_LINKS.map((link) => (
                  <NavigationMenuItem key={link.title}>
                    <Link href={link.href} legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        {link.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-x-4">
              <Button asChild size="sm" variant="outline">
                <Link
                  href="https://github.com/filiptrivan/spiderly"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Star className="size-4 mr-2" />
                  Star on GitHub
                  <span className="ml-2 px-2 py-0.5 bg-muted rounded-full text-xs font-semibold">
                    46
                  </span>
                </Link>
              </Button>
            </div>
          </div>

          <MobileNavbar />
        </div>
      </AnimationContainer>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & { title: string; icon: LucideIcon }
>(({ className, title, href, icon: Icon, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href!}
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-100 ease-out hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="flex items-center space-x-2 text-neutral-300">
            <Icon className="h-4 w-4" />
            <h6 className="text-sm font-medium !leading-none">{title}</h6>
          </div>
          <p
            title={children! as string}
            className="line-clamp-1 text-sm leading-snug text-muted-foreground"
          >
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

export default Navbar;
