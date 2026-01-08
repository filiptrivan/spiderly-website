import { cn } from '@/utils';
import React from 'react';

interface Props {
  className?: string;
  children: React.ReactNode;
  id?: string;
}

export const SectionContainer = ({ className, children, id }: Props) => {
  return (
    <section
      id={id}
      className={cn(
        'mx-auto md:max-w-screen-xl px-4 md:px-10 lg:px-20 py-16 md:py-20 lg:py-28',
        className,
      )}
    >
      {children}
    </section>
  );
};
