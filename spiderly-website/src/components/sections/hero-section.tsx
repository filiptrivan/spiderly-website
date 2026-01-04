import { AnimationContainer, Glow, MaxWidthWrapper } from '@/components';
import { Button } from '@/components/ui/button';
import { PlayIcon } from 'lucide-react';
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center w-full text-center">
          <AnimationContainer className="flex flex-col items-center justify-center w-full text-center">
            <h1 className="text-foreground text-center mb-6 text-5xl font-medium tracking-normal text-balance sm:text-6xl md:text-7xl lg:text-7xl !leading-[1.15] w-full font-heading">
              .NET (C#) Web App Boilerplate{' '}
              <span className="text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text inline-bloc">
                Code Generator
              </span>
            </h1>
            <p className="mb-12 text-lg tracking-tight text-muted-foreground md:text-xl text-balance">
              Spiderly is an open-source .NET (C#) code generator that transforms an EF Core model
              into a fully customizable .NET (C#) + Angular web application, automatically updating
              all boilerplate code as your model evolves.
            </p>
            <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
              <Button asChild>
                <Link href={'/docs/getting-started'}>Get Started</Link>
              </Button>
              <Button variant={'subtle'}>
                <PlayIcon className="w-4 h-4 mr-2" />
                Spiderly in 120 Seconds
              </Button>
            </div>
          </AnimationContainer>
        </div>
      </MaxWidthWrapper>
      <Glow />
    </div>
  );
};
