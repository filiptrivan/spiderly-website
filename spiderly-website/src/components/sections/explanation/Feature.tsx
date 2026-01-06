import { cn } from '@/utils';
import { LucideIcon } from 'lucide-react';

export const Feature = ({
  title,
  description,
  icon: Icon,
  index,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}) => {
  return (
    <div className={cn('flex flex-col py-10')}>
      <div className={`h-full w-full`} />
      <div className="flex flex-col w-full">
        <div className="mb-4 z-10 px-10">
          <Icon strokeWidth={1.3} className="w-6 h-6 md:w-8 md:h-8 text-muted-foreground" />
        </div>
        <div className="text-lg font-medium font-heading mb-2 relative z-10 px-10">
          <div className="absolute left-0 -inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-700" />
          <span>{title}</span>
        </div>
        <p className="text-sm text-neutral-300 max-w-s z-10 px-10">{description}</p>
      </div>
    </div>
  );
};

export default Feature;
