import { Card } from '@/components/ui/card';
import { cn } from '@/utils';
import { Check } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  title: string;
  className?: string;
}

export const FeatureGrid = ({ features, title, className = '' }: FeatureGridProps) => {
  return (
    <div className={cn('flex-1 flex flex-col p-3 md:p-5', className)}>
      <h3 className="text-xl font-medium md:text-2xl ml-1 mb-5 mt-1">{title}</h3>
      <div className={cn('grid gap-2 grid-cols-1 md:grid-cols-2')}>
        {features.map((feature, index) => (
          <Card key={index} className="relative">
            <Check className="absolute right-3 top-2" />
            <h4 className="md:text-lg mb-1">{feature.title}</h4>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};
