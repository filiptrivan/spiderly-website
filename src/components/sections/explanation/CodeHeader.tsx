import { CodeIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface CodeHeaderProps {
  children?: ReactNode;
}

export const CodeHeader = ({ children }: CodeHeaderProps) => {
  return (
    <div className="flex items-center justify-between px-4 h-10 border-b border-border bg-foreground/5 text-muted-foreground">
      <div className="flex items-center gap-2 text-sm">
        <CodeIcon className="w-4 h-4" />
        <span>Product.cs</span>
      </div>
      {children}
    </div>
  );
};
