'use client';

import { Button } from '@/components/ui/button';
import { Undo2 } from 'lucide-react';

interface UndoButtonProps {
  onClick: () => void;
}

export const UndoButton = ({ onClick }: UndoButtonProps) => {
  return (
    <Button onClick={onClick} variant="ghost" size="sm" className="gap-1.5 h-7 text-xs">
      <Undo2 className="w-3.5 h-3.5" />
      Undo
    </Button>
  );
};
