import { Loader2 } from 'lucide-react';
import { FeatureGrid } from './FeatureGrid';
import { HoverableImage } from './HoverableImage';
import { starterFeatures } from './constants';

interface Step01PreviewCardProps {
  isComplete: boolean;
  isTriggered: boolean;
  className?: string;
}

export const Step01PreviewCard = ({
  isComplete,
  isTriggered,
  className = '',
}: Step01PreviewCardProps) => {
  if (isComplete && isTriggered) {
    return (
      <HoverableImage
        src="/assets/Spiderly_App_Initial_Dashboard.svg"
        alt="Spiderly Dashboard"
        className={className}
        overlayContent={<FeatureGrid title="Created App Summary" features={starterFeatures} />}
      />
    );
  }

  if (!isComplete && isTriggered) {
    return (
      <div className={`${className} w-full h-full`}>
        <div className="w-full h-full flex flex-col items-center justify-center gap-6 text-muted-foreground p-8 animate-in fade-in zoom-in-95 duration-500">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl" />
            <Loader2 className="w-16 h-16 relative text-primary animate-spin" />
          </div>
          <div className="text-center space-y-2">
            <h4 className="text-lg font-semibold text-foreground">Creating Your Application</h4>
            <p className="text-sm max-w-xs">
              Setting up your Spiderly project with all the necessary files and dependencies...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${className} w-full h-full`}>
      <div className="w-full h-full flex flex-col items-center justify-center gap-6 text-muted-foreground p-8">
        <div className="text-center space-y-2">
          <h4 className="text-lg font-semibold text-foreground">
            Waiting For You to Run the Command
          </h4>
          <p className="text-sm max-w-xs">
            Run the{' '}
            <code className="px-1.5 py-0.5 rounded bg-muted text-foreground font-mono text-xs">
              spiderly init
            </code>{' '}
            command to generate the Spiderly application.
          </p>
        </div>
      </div>
    </div>
  );
};
