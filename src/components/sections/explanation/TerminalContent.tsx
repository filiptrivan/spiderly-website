import { TerminalStep } from './TerminalStep';
import { ReactNode } from 'react';

interface TerminalContentProps {
  steps: Array<{ type: string; text: string }>;
  visibleSteps: number[];
  children?: ReactNode;
}

export const TerminalContent = ({ steps, visibleSteps, children }: TerminalContentProps) => {
  return (
    <div className="p-6 font-mono text-sm">
      <div className="flex items-center gap-2">
        <span className="text-blue-400">$</span>
        <span className="text-white">spiderly init</span>
      </div>

      <div className="h-4" />

      {children}

      {steps.map((step, index) => (
        <TerminalStep
          key={index}
          step={step}
          isVisible={visibleSteps.includes(index)}
          isLastStep={index === steps.length - 1}
        />
      ))}
    </div>
  );
};
