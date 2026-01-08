import { TerminalHeader } from './TerminalHeader';
import { TerminalContent } from './TerminalContent';
import { UndoButton } from './UndoButton';
import { RunCommandButton } from './RunCommandButton';

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
      <TerminalHeader>
        {isTriggered && onUndo && <UndoButton onClick={onUndo} />}
      </TerminalHeader>

      <TerminalContent steps={steps} visibleSteps={visibleSteps}>
        {!isTriggered && <RunCommandButton onClick={onRunCommand} />}
      </TerminalContent>
    </div>
  );
};
