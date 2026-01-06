import { Card } from '@/components/ui/card';
import { cn } from '@/utils';
import { ArrowRight, Check, LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface BaseFeature {
  title: string;
  description: string;
}

interface FeatureWithIcon extends BaseFeature {
  icon: LucideIcon;
}

interface FeatureWithCheck extends BaseFeature {
  showCheck?: boolean;
}

type Feature = FeatureWithIcon | FeatureWithCheck;

interface FeatureGridProps {
  features: Feature[];
  title: string;
  learnMoreText: string;
  learnMoreHref: string;
  className?: string;
}

const hasIcon = (feature: Feature): feature is FeatureWithIcon => {
  return 'icon' in feature;
};

export const FeatureGrid = ({
  features,
  title,
  learnMoreText,
  learnMoreHref,
  className = '',
}: FeatureGridProps) => {
  return (
    <div className={cn('flex-1 flex flex-col p-3 md:p-5', className)}>
      <h3 className="text-xl font-medium md:text-2xl ml-1 mb-5 mt-1">{title}</h3>
      <div className={cn('grid gap-2 mb-6 grid-cols-1 md:grid-cols-2')}>
        {features.map((feature, index) => (
          <Card key={index} className="relative">
            <Check className="absolute right-3 top-2" />
            <h4 className="md:text-lg mb-1">{feature.title}</h4>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </Card>
        ))}
      </div>
      <Link
        href={learnMoreHref}
        className="ml-1 flex items-center gap-2 text-xs lg:text-sm text-primary hover:text-primary/80 transition-colors group/link"
      >
        {learnMoreText}
        <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 group-hover/link:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};
