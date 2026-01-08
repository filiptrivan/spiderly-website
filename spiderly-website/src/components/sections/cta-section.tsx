import { AnimationContainer, MaxWidthWrapper } from '@/components';
import { Button } from '@/components/ui/button';

export const CTASection = () => {
  return (
    <MaxWidthWrapper>
      <AnimationContainer>
        <div className="flex flex-col items-center justify-center relative w-full text-center">
          <h2 className="bg-gradient-to-b from-neutral-200 to-neutral-400 py-4 bg-clip-text text-center text-4xl md:text-7xl !leading-[1.15] font-medium font-heading tracking-tight text-transparent">
            Try Spiderly Now.
          </h2>
          <div className="mt-6">
            <Button>Get Started</Button>
          </div>
        </div>
      </AnimationContainer>
    </MaxWidthWrapper>
  );
};
