'use client';

import * as React from 'react';

import { cn } from '@/utils';
import { Button, ButtonProps } from './button';

interface BeamButtonProps extends ButtonProps {
  duration?: number;
  colorFrom?: string;
  colorTo?: string;
}

const BeamButton = React.forwardRef<HTMLButtonElement, BeamButtonProps>(
  (
    {
      className,
      duration = 3,
      colorFrom = 'var(--fuchsia-500)',
      colorTo = 'transparent',
      children,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const beam = (
      <span
        className="pointer-events-none absolute -inset-full animate-[beam-spin_var(--beam-duration)_linear_infinite]"
        style={
          {
            '--beam-duration': `${duration}s`,
            background: `conic-gradient(from 90deg at 50% 50%, ${colorTo} 0%, ${colorFrom} 50%, ${colorTo} 100%)`,
          } as React.CSSProperties
        }
      />
    );

    return (
      <div className="relative inline-flex overflow-hidden rounded-lg p-0.5">
        {beam}
        <Button
          ref={ref}
          className={cn('relative z-10 bg-white text-black', className)}
          asChild={asChild}
          {...props}
        >
          {children}
        </Button>
      </div>
    );
  },
);
BeamButton.displayName = 'BeamButton';

export { BeamButton };
