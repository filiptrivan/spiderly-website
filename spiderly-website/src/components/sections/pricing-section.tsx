import { AnimationContainer, MaxWidthWrapper, PricingCards } from '@/components';
import MagicBadge from '@/components/ui/magic-badge';
import { CreditCardIcon } from 'lucide-react';

export const PricingSection = () => {
  return (
    <MaxWidthWrapper className="py-10">
      <AnimationContainer delay={0.1}>
        <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
          <MagicBadge title="Simple Pricing" />
          <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
            Choose a plan that works for you
          </h2>
          <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
            Get started with Linkify today and enjoy more features with our pro plans.
          </p>
        </div>
      </AnimationContainer>
      <AnimationContainer delay={0.2}>
        <PricingCards />
      </AnimationContainer>
      <AnimationContainer delay={0.3}>
        <div className="flex flex-wrap items-start md:items-center justify-center lg:justify-evenly gap-6 mt-12 max-w-5xl mx-auto w-full">
          <div className="flex items-center gap-2">
            <CreditCardIcon className="w-5 h-5 text-foreground" />
            <span className="text-muted-foreground">No credit card required</span>
          </div>
        </div>
      </AnimationContainer>
    </MaxWidthWrapper>
  );
};
