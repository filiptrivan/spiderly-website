import { cn } from '@/utils';
import React from 'react';

interface Props {
  className?: string;
  children: React.ReactNode;
}

const MaxWidthWrapper = ({ className, children }: Props) => {
  return (
    <section
      className={cn(
        'mx-auto w-full max-w-full md:max-w-screen-xl px-4 md:px-12 lg:px-20 mb-36 md:mb-40 lg:mb-56',
        className,
      )}
    >
      {children}
    </section>
  );
};

export default MaxWidthWrapper;
