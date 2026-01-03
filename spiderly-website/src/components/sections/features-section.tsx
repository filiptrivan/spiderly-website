import { AnimationContainer, MaxWidthWrapper } from '@/components';
import { BentoCard, BentoGrid, CARDS } from '@/components/ui/bento-grid';
import MagicBadge from '@/components/ui/magic-badge';

export const FeaturesSection = () => {
  return (
    <MaxWidthWrapper className="pt-10">
      <AnimationContainer delay={0.1}>
        <div className="flex flex-col w-full items-center lg:items-center justify-center py-8">
          <MagicBadge title="Features" />
          <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
            Manage Links Like a Pro
          </h2>
          <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
            Linkify is a powerful link management tool that helps you shorten, track, and organize
            all your links in one place.
          </p>
        </div>
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
