import { ArrowRight, Bell, Database, Hourglass, Loader2, Lock, Shield } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { Feature } from './Feature';

interface PreviewCardProps {
  isComplete: boolean;
  isTriggered: boolean;
  className?: string;
}

const starterFeatures = [
  {
    title: 'Database Initialization',
    description: 'Complete database setup and configuration',
    icon: Database,
  },
  {
    title: 'Authentication',
    description: 'Including third party (e.g., Google sign-in)',
    icon: Shield,
  },
  {
    title: 'Authorization',
    description: 'Roles and permissions management',
    icon: Lock,
  },
  {
    title: 'Notifications',
    description: 'Built-in notification system',
    icon: Bell,
  },
];

export const PreviewCard = ({ isComplete, isTriggered, className = '' }: PreviewCardProps) => {
  const [showFeatures, setShowFeatures] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsLeaving(false);
    setShowFeatures(true);
  };

  const handleMouseLeave = () => {
    setIsLeaving(true);
    timeoutRef.current = setTimeout(() => {
      setShowFeatures(false);
      setIsLeaving(false);
      timeoutRef.current = null;
    }, 300);
  };

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
        {(showFeatures || isLeaving) && (
          <div
            className={`absolute inset-0 bg-background/95 backdrop-blur-sm transition-all duration-300 flex flex-col overflow-auto ${
              showFeatures && !isLeaving ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="flex-1 flex flex-col justify-center">
              <div className="grid grid-cols-2">
                {starterFeatures.map((feature, index) => (
                  <Feature
                    key={index}
                    title={feature.title}
                    description={feature.description}
                    icon={feature.icon}
                    index={index}
                  />
                ))}
              </div>
              <Link
                href="/features/create-spiderly-app"
                className="mt-1 lg:mt-2 mb-1 lg:mb-2 mx-auto flex items-center gap-2 text-xs lg:text-sm text-primary hover:text-primary/80 transition-colors group/link"
              >
                Learn more about Spiderly app initialization
                <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        )}
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
        <div className="relative">
          <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl" />
          <Hourglass className="w-16 h-16 relative text-primary" />
        </div>
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
