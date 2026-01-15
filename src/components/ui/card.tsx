import { cn } from '@/utils';
import { ReactNode } from 'react';

interface CardProps {
  className?: string;
  children: ReactNode;
}

export const Card = ({ className, children }: CardProps) => {
  return (
    <div
      className={cn(
        'rounded-lg lg:rounded-xl border border-border shadow-sm p-4 lg:p-5',
        className,
      )}
    >
      {children}
    </div>
  );
};
