'use client';

import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn, NAV_LINKS } from '@/utils';
import { Star } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import AnimationContainer from '../global/animation-container';
import MobileNavbar from './mobile-navbar';

const Navbar = () => {
  return (
    <header
      className={cn(
        'sticky top-0 inset-x-0 h-14 w-full border-b z-49 select-none transition-all duration-300 ease-in-out border-border bg-background/40 backdrop-blur-md',
      )}
    >
      <AnimationContainer className="size-full">
        <div className="flex items-center justify-between h-full w-full max-w-full md:max-w-7xl mx-auto px-4 md:px-12 lg:px-20">
          <div className="flex items-center space-x-12">
            <Link href="/" className="flex items-center gap-2" title="Spiderly Logo">
              <img src={'/icons/spiderly-logo.svg'} width={26} height={26} alt="Spiderly Logo" />
              <span className="text-lg">SPIDERLY</span>
            </Link>

            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                {NAV_LINKS.map((link) => (
                  <NavigationMenuItem key={link.title}>
                    {link.dropdown ? (
                      <>
                        <NavigationMenuTrigger>{link.title}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul
                            className={cn(
                              'grid gap-1 p-3 md:w-[200px] lg:w-[300px] rounded-xl lg:grid-cols-2',
                            )}
                          >
                            {link.dropdown.map((menuItem) => (
                              <ListItem
                                key={menuItem.title}
                                title={menuItem.title}
                                href={menuItem.href}
                              >
                                {menuItem.tagline}
                              </ListItem>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : link.href ? (
                      <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href={link.href}>{link.title}</Link>
                      </NavigationMenuLink>
                    ) : null}
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
                    50
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
  React.ComponentPropsWithoutRef<'a'> & { title: string }
>(({ className, title, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href!}
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-lg p-2 leading-none no-underline outline-none transition-all duration-100 ease-out hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="flex items-center space-x-2 text-neutral-300">
            <h6 className="text-sm font-medium leading-none!">{title}</h6>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

export default Navbar;
