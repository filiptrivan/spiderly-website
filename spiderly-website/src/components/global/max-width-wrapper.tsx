import { cn } from '@/utils';
import React from 'react';

interface Props {
  className?: string;
  children: React.ReactNode;
}

const SectionContainer = ({ className, children }: Props) => {
  return (
    <section
      className={cn(
        'mx-auto md:max-w-screen-xl px-4 md:px-12 lg:px-20 py-16 md:py-20 lg:py-28',
        className,
      )}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
