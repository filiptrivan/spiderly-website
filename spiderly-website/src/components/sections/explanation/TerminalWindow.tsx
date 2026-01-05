import { TerminalIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TerminalStep } from './TerminalStep';

interface TerminalWindowProps {
  isTriggered: boolean;
  visibleSteps: number[];
  onRunCommand: () => void;
  steps: Array<{ type: string; text: string }>;
  className?: string;
}

export const TerminalWindow = ({
  isTriggered,
  visibleSteps,
  onRunCommand,
  steps,
  className = '',
}: TerminalWindowProps) => {
  return (
    <div className={className}>
      {/* Terminal Header */}
      <div className="flex px-4 h-10 border-b border-border bg-foreground/5">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <TerminalIcon className="w-4 h-4" />
          <span>Terminal</span>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-6 font-mono text-sm">
        <div className="flex items-center gap-2">
          <span className="text-blue-400">$</span>
          <span className="text-white">spiderly init</span>
        </div>

        <div className="h-4" />

        {!isTriggered && (
          <Button
            onClick={onRunCommand}
            variant="primary"
            size="sm"
            className="w-full animate-pulse"
          >
            Run Command
          </Button>
        )}

        {steps.map((step, index) => (
          <TerminalStep
            key={index}
            step={step}
            isVisible={visibleSteps.includes(index)}
            isLastStep={index === steps.length - 1}
          />
        ))}
      </div>
    </div>
  );
};
