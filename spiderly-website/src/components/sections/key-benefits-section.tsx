import { AnimationContainer, MaxWidthWrapper } from '@/components';
import { SectionHeading } from '@/components/ui/section-heading';
import {
  CheckCircle2,
  FileCode,
  ShieldCheck,
  Target,
  TrendingUp,
  Zap,
  type LucideIcon,
} from 'lucide-react';

const BENEFITS: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: 'Faster Development',
    description:
      'Skip repetitive coding tasks and generate ready-to-use code instantly, so you can focus on building core features instead of boilerplate.',
    icon: Zap,
  },
  {
    title: 'App Scalability',
    description:
      'To add admin features for a new entity, all you need is a single C# class, everything else is generated for you.',
    icon: TrendingUp,
  },
  {
    title: 'Human Error Reduction',
    description:
      'By generating proven and pre-tested code automatically, the chances of manual errors are greatly reduced.',
    icon: ShieldCheck,
  },
  {
    title: 'Consistency',
    description:
      'Automatically applies the same patterns, conventions, industry standards and best practices to ensure a uniform codebase every time.',
    icon: CheckCircle2,
  },
  {
    title: 'Maintainability',
    description:
      'Generated code is correct and separated, making code reviews easier and keeping your project structure clean.',
    icon: FileCode,
  },
  {
    title: 'Business Logic Focus',
    description:
      'With Spiderly handling the scaffolding, you can forget about boilerplate code and focus on the core business logic that truly matters.',
    icon: Target,
  },
];

export const KeyBenefitsSection = () => {
  return (
    <MaxWidthWrapper>
      <AnimationContainer delay={0.1}>
        <SectionHeading
          title="Key Benefits"
          description="Discover how Spiderly accelerates development and improves code quality."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-border gap-[1px]">
          {BENEFITS.map((benefit, index) => {
            return (
              <div
                key={index}
                className={`h-full flex flex-col px-2 md:px-4 py-4 md:py-6 bg-background`}
              >
                <div className="mb-4">
                  <benefit.icon className="w-6 h-6 md:w-8 md:h-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl md:text-2xl font-medium font-heading text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-base md:text-lg text-muted-foreground">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </AnimationContainer>
    </MaxWidthWrapper>
  );
};
