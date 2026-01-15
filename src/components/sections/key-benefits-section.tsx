import { AnimationContainer, SectionContainer } from '@/components';
import { Card } from '../ui/card';
import { SectionHeadingWithoutDescription } from '../ui/section-heading-without-description';

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
    <SectionContainer>
      <AnimationContainer>
        <SectionHeadingWithoutDescription title="Key Benefits" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {BENEFITS.map((benefit, index) => {
            return (
              <Card key={index} className="flex flex-col">
                <h3 className="text-lg md:text-xl mb-2">{benefit.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground">{benefit.description}</p>
              </Card>
            );
          })}
        </div>
      </AnimationContainer>
    </SectionContainer>
  );
};
