import { AnimationContainer, MaxWidthWrapper } from '@/components';
import { SectionHeading } from '@/components/ui/section-heading';
import { TrendingUp } from 'lucide-react';
import { Card } from '../ui/card';

const BENEFITS: { title: string; description: string }[] = [
  {
    title: 'Faster Development',
    description:
      'Skip repetitive coding tasks and generate ready-to-use code instantly, so you can focus on building core features instead of boilerplate.',
  },
  {
    title: 'App Scalability',
    description:
      'To add admin features for a new entity, all you need is a single C# class, everything else is generated for you.',
  },
  {
    title: 'Human Error Reduction',
    description:
      'By generating proven and pre-tested code automatically, the chances of manual errors are greatly reduced.',
  },
  {
    title: 'Consistency',
    description:
      'Automatically applies the same patterns, conventions, industry standards and best practices to ensure a uniform codebase every time.',
  },
  {
    title: 'Maintainability',
    description:
      'Generated code is correct and separated, making code reviews easier and keeping your project structure clean.',
  },
  {
    title: 'Business Logic Focus',
    description:
      'With Spiderly handling the scaffolding, you can forget about boilerplate code and focus on the core business logic that truly matters.',
  },
];

export const KeyBenefitsSection = () => {
  return (
    <MaxWidthWrapper>
      <AnimationContainer delay={0.1} className="relative">
        <SectionHeading
          title="Key Benefits"
          description="Discover how Spiderly accelerates development and improves code quality."
        />
        <TrendingUp className="absolute -top-28 -left-4 md:-left-8 w-32 h-32 md:w-48 md:h-48 text-muted-foreground/10 -z-10 pointer-events-none" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {BENEFITS.map((benefit, index) => {
            return (
              <Card key={index} className="flex flex-col">
                <h3 className="text-xl md:text-2xl font-medium font-heading text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-base md:text-lg text-muted-foreground">{benefit.description}</p>
              </Card>
            );
          })}
        </div>
      </AnimationContainer>
    </MaxWidthWrapper>
  );
};
