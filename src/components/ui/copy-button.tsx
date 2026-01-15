'use client';

import { cn } from '@/utils';
import { Copy, LucideIcon } from 'lucide-react';

interface Props {
  text: string;
  className?: string;
  icon?: LucideIcon;
}

const CopyButton = ({ text, className, icon }: Props) => {
  const Comp = icon || Copy;

  return (
    <button
      className={cn(
        'flex items-center justify-center group bg-foreground/10 p-2 transition-all duration-100 hover:scale-105 hover:bg-foreground/20 rounded-md active:scale-95',
        className,
      )}
    >
      <span className="sr-only">Copy</span>
      {/* {isCopied ? (
        <Check className="text-neutral-700 group-hover:text-accent" />
      ) : ( */}
      <Comp className="text-neutral-700 group-hover:text-foreground" />
      {/* )} */}
    </button>
  );
};

export default CopyButton;
