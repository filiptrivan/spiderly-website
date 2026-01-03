import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const MagicButton = ({ children, className = '' }: Props) => {
  return (
    <div
      className={`relative inline-flex h-9 overflow-hidden rounded-lg p-[1.5px] focus:outline-none ${className}`}
    >
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#6d28d9_0%,#d8b4fe_50%,#6d28d9_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-background px-6 py-3 text-sm font-medium text-foreground backdrop-blur-3xl transition-all hover:bg-accent hover:text-accent-foreground">
        {children}
      </span>
    </div>
  );
};

export default MagicButton;
