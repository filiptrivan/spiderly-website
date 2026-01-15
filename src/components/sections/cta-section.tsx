import { AnimationContainer, SectionContainer } from '@/components';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const CTASection = () => {
  return (
    <SectionContainer>
      <AnimationContainer>
        <div className="flex flex-col items-center justify-center relative w-full">
          <h2 className="bg-linear-to-b from-neutral-200 to-neutral-400 py-4 bg-clip-text text-center text-4xl md:text-7xl leading-[1.15]! font-medium tracking-tight text-transparent">
            Try Spiderly Now.
          </h2>
          <div className="mt-4 md:mt-6">
            <Button asChild>
              <Link href={'/docs/getting-started'}>Get Started</Link>
            </Button>
          </div>
        </div>
      </AnimationContainer>
    </SectionContainer>
  );
};
