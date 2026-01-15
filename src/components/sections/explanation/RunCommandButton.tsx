'use client';

import { Button } from '@/components/ui/button';

interface RunCommandButtonProps {
  onClick: () => void;
  text?: string;
}

export const RunCommandButton = ({ onClick, text = 'Run Command' }: RunCommandButtonProps) => {
  return (
    <Button onClick={onClick} variant="primary" size="sm" className="w-full animate-pulse">
      {text}
    </Button>
  );
};
