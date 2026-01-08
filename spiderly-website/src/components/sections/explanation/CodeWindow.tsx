import { CodeHeader } from './CodeHeader';
import { CodeContent } from './CodeContent';
import { UndoButton } from './UndoButton';
import { RunCommandButton } from './RunCommandButton';

interface CodeWindowProps {
  isTriggered: boolean;
  onAddProperties: () => void;
  onUndo?: () => void;
  properties: Array<{
    name: string;
    type: string;
    attributes?: Array<{ name: string; value?: string }>;
  }>;
  className?: string;
}

export const CodeWindow = ({
  isTriggered,
  onAddProperties,
  onUndo,
  properties,
  className = '',
}: CodeWindowProps) => {
  return (
    <div className={className}>
      <CodeHeader>
        {isTriggered && onUndo && <UndoButton onClick={onUndo} />}
      </CodeHeader>

      <CodeContent properties={properties} isTriggered={isTriggered}>
        <RunCommandButton onClick={onAddProperties} text="Add More Properties" />
      </CodeContent>
    </div>
  );
};
