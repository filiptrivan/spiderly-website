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
    <div className={cn('flex flex-col transform-gpu py-10 relative group/feature')}>
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-80 from-violet-950/25 to-transparent pointer-events-none" />
      <div className="group-hover/feature:-translate-y-1 transform-gpu transition-all duration-300 flex flex-col w-full">
        <div className="mb-4 relative z-10 px-10">
          <Icon
            strokeWidth={1.3}
            className="w-10 h-10 origin-left transform-gpu text-neutral-500 transition-all duration-300 ease-in-out group-hover/feature:scale-75 group-hover/feature:text-foreground"
          />
        </div>
        <div className="text-lg font-medium font-heading mb-2 relative z-10 px-10">
          <div className="absolute left-0 -inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-violet-600 transition-all duration-500 origin-center" />
          <span className="group-hover/feature:-translate-y- group-hover/feature:text- transition duration-500 inline-block heading">
            {title}
          </span>
        </div>
        <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10">{description}</p>
      </div>
    </div>
  );
};

export default Feature;
