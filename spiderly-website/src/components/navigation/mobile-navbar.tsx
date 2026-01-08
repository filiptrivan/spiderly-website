'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button, buttonVariants } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn, NAV_LINKS } from '@/utils';
import { Menu, Star, X } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex lg:hidden items-center justify-end">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button size="icon" variant="ghost">
            <Menu className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-screen">
          <SheetClose
            asChild
            className="absolute top-3 right-5 bg-background z-20 flex items-center justify-center"
          >
            <Button size="icon" variant="ghost" className="text-neutral-600">
              <X className="w-5 h-5" />
            </Button>
          </SheetClose>
          <div className="flex flex-col items-start w-full py-2 mt-10">
            <ul className="flex flex-col items-start w-full">
              <Accordion type="single" collapsible className="!w-full">
                {NAV_LINKS.map((link) => (
                  <AccordionItem key={link.title} value={link.title} className="last:border-none">
                    {link.dropdown ? (
                      <>
                        <AccordionTrigger>{link.title}</AccordionTrigger>
                        <AccordionContent>
                          <ul onClick={handleClose} className={cn('w-full')}>
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
                        </AccordionContent>
                      </>
                    ) : link.href ? (
                      <Link
                        href={link.href}
                        onClick={handleClose}
                        className="flex items-center w-full py-4 font-medium text-muted-foreground hover:text-foreground"
                      >
                        <span>{link.title}</span>
                      </Link>
                    ) : null}
                  </AccordionItem>
                ))}
              </Accordion>
            </ul>
            <div className="flex items-center justify-evenly w-full space-x-2 mt-6">
              <Link
                href="https://github.com/filiptrivan/spiderly"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ className: 'w-full', variant: 'outline' })}
              >
                <Star className="size-4 mr-2" />
                Star on GitHub
                <span className="ml-2 px-2 py-0.5 bg-muted rounded-full text-xs font-semibold">
                  46
                </span>
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & { title: string }
>(({ className, title, href, children, ...props }, ref) => {
  return (
    <li>
      <Link
        href={href!}
        ref={ref}
        className={cn(
          'block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
          className,
        )}
        {...props}
      >
        <div className="flex items-center space-x-2 text-foreground">
          <h6 className="text-sm !leading-none">{title}</h6>
        </div>
      </Link>
    </li>
  );
});
ListItem.displayName = 'ListItem';

export default MobileNavbar;
