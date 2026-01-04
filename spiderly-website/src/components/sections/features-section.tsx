import { AnimationContainer, MaxWidthWrapper } from '@/components';
import { BentoCard, BentoGrid, CARDS } from '@/components/ui/bento-grid';
import { SectionHeading } from '../ui/section-heading';

export const FeaturesSection = () => {
  return (
    <MaxWidthWrapper>
      <AnimationContainer delay={0.1}>
        <SectionHeading
          title="Features"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus veritatis repellendus non excepturi."
        />
      </AnimationContainer>
      <AnimationContainer delay={0.2}>
        <BentoGrid className="py-8">
          {CARDS.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </AnimationContainer>
    </MaxWidthWrapper>
  );
};
