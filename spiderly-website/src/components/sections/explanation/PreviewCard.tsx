import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import { FeatureGrid } from './FeatureGrid';
import { FeatureOverlay } from './FeatureOverlay';
import { useHoverOverlay } from './useHoverOverlay';

interface PreviewCardProps {
  isComplete: boolean;
  isTriggered: boolean;
  className?: string;
}

const starterFeatures = [
  {
    title: 'Database Initialized',
    description: 'Complete database setup and configuration',
  },
  {
    title: 'Built In Authentication',
    description: 'Including third party (e.g., Google sign-in)',
  },
  {
    title: 'Built In Authorization',
    description: 'Roles and permissions management',
  },
  {
    title: 'Built In Notifications',
    description: 'Notify users inside your Spiderly app',
  },
];

export const PreviewCard = ({ isComplete, isTriggered, className = '' }: PreviewCardProps) => {
  const { showOverlay, isLeaving, handleMouseEnter, handleMouseLeave } = useHoverOverlay();

  if (isComplete && isTriggered) {
    return (
      <div
        className={`${className} relative group`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src="/assets/dashboard-dark.svg"
          alt="Spiderly Dashboard"
          width={1000}
          height={1000}
          className="w-full h-full animate-in fade-in zoom-in-95 duration-700"
        />
        <FeatureOverlay show={showOverlay} isLeaving={isLeaving}>
          <FeatureGrid
            title="Created App Summary"
            features={starterFeatures}
            learnMoreText="Learn more about Spiderly app creation"
            learnMoreHref="/features/create-spiderly-app"
          />
        </FeatureOverlay>
      </div>
    );
  }

  if (!isComplete && isTriggered) {
    return (
      <div className={className}>
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
    <div className={className}>
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
