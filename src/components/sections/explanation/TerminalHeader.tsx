import { TerminalIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface TerminalHeaderProps {
  children?: ReactNode;
}

export const TerminalHeader = ({ children }: TerminalHeaderProps) => {
  return (
    <div className="flex items-center justify-between px-4 h-10 border-b border-border bg-foreground/5 text-muted-foreground">
      <div className="flex items-center gap-2 text-sm">
        <TerminalIcon className="w-4 h-4" />
        <span>Terminal</span>
      </div>
      {children}
    </div>
  );
};
