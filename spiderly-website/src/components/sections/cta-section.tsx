import { AnimationContainer, MaxWidthWrapper } from '@/components';
import { Button } from '@/components/ui/button';
import { LampContainer } from '@/components/ui/lamp';
import { ArrowRightIcon } from 'lucide-react';

export const CTASection = () => {
  return (
    <MaxWidthWrapper className="mt-20 max-w-[100vw] overflow-x-hidden scrollbar-hide">
      <AnimationContainer delay={0.1}>
        <LampContainer>
          <div className="flex flex-col items-center justify-center relative w-full text-center">
            <h2 className="bg-gradient-to-b from-neutral-200 to-neutral-400 py-4 bg-clip-text text-center text-4xl md:text-7xl !leading-[1.15] font-medium font-heading tracking-tight text-transparent mt-8">
              Step into the future of link management
            </h2>
            <p className="text-muted-foreground mt-6 max-w-md mx-auto">
              Experience the cutting-edge solution that transforms how you handle your links.
              Elevate your online presence with our next-gen platform.
            </p>
            <div className="mt-6">
              <Button>
                Get started for free
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </LampContainer>
      </AnimationContainer>
    </MaxWidthWrapper>
  );
};
