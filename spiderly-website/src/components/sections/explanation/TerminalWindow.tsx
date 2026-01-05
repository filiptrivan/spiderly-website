import { Button } from '@/components/ui/button';
import { TerminalIcon, Undo2 } from 'lucide-react';
import { TerminalStep } from './TerminalStep';

interface TerminalWindowProps {
  isTriggered: boolean;
  visibleSteps: number[];
  onRunCommand: () => void;
  onUndo?: () => void;
  steps: Array<{ type: string; text: string }>;
  className?: string;
}

export const TerminalWindow = ({
  isTriggered,
  visibleSteps,
  onRunCommand,
  onUndo,
  steps,
  className = '',
}: TerminalWindowProps) => {
  return (
    <div className={className}>
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 h-10 border-b border-border bg-foreground/5">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <TerminalIcon className="w-4 h-4" />
          <span>Terminal</span>
        </div>
        {isTriggered && onUndo && (
          <Button onClick={onUndo} variant="ghost" size="sm" className="gap-1.5 h-7 text-xs">
            <Undo2 className="w-3.5 h-3.5" />
            Undo
          </Button>
        )}
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
