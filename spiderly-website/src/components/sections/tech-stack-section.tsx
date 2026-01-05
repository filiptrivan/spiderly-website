import { AnimationContainer, MaxWidthWrapper } from '@/components';
import MagicCard from '@/components/ui/magic-card';
import { TECH_STACK } from '@/utils/constants/misc';
import Image from 'next/image';

export const TechStackSection = () => {
  return (
    <MaxWidthWrapper className="py-10">
      <AnimationContainer delay={0.1}>
        <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
          <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
            Generated App Tech Stack
          </h2>
          <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
            The code generator is driven by attributes applied to EF Core entities and their
            properties. Implemented using C# Source Generators, it triggers generation on every
            keystroke for classes within the specified namespace, so it doesn&apos;t slow down your
            build by generating all files at once.
          </p>
        </div>
      </AnimationContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 py-10">
        {TECH_STACK.map((tech, index) => (
          <MagicCard key={index}>
            <div className="flex flex-col items-center justify-center h-[160px] p-6">
              <div className="flex items-center gap-3 mb-4">
                {tech.options.map((option, optIndex) => (
                  <>
                    <div
                      key={optIndex}
                      className="flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16"
                    >
                      <Image
                        src={option.logo}
                        alt={option.name}
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </div>
                    {optIndex < tech.options.length - 1 && (
                      <span className="text-muted-foreground font-medium text-sm">or</span>
                    )}
                  </>
                ))}
              </div>
              <div className="text-center">
                <div className="font-medium text-lg mb-1">
                  {tech.options.map((opt) => opt.name).join(' or ')}
                </div>
                <div className="text-muted-foreground text-sm">{tech.category}</div>
              </div>
            </div>
          </MagicCard>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};
