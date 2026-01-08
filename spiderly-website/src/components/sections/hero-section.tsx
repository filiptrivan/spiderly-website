import { AnimationContainer, Glow, SectionContainer } from '@/components';
import { ReactNode } from 'react';

interface HeroSectionProps {
  title: ReactNode;
  description: string;
  buttons?: ReactNode;
}

export const HeroSection = ({ title, description, buttons }: HeroSectionProps) => {
  return (
    <div className="relative overflow-hidden border-b border-border">
      <AnimationContainer>
        <SectionContainer>
          <div className="flex flex-col items-center justify-center w-full text-center">
            <h1 className="text-foreground mb-6 text-5xl font-medium tracking-normal text-balance sm:text-6xl md:text-7xl lg:text-7xl !leading-[1.15] w-full font-heading">
              {title}
            </h1>
            <p className="mb-6 text-lg tracking-tight text-muted-foreground md:text-xl text-balance max-w-4xl">
              {description}
            </p>
            {buttons && (
              <div className="mt-6 flex items-center gap-2 md:gap-3 lg:gap-4">{buttons}</div>
            )}
          </div>
        </SectionContainer>
        <Glow />
      </AnimationContainer>
    </div>
  );
};
