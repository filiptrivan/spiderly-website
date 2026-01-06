import { AnimationContainer, MaxWidthWrapper } from '@/components';
import { SectionHeading } from '@/components/ui/section-heading';
import { TECH_STACK } from '@/utils/constants/misc';
import Image from 'next/image';
import { Card } from '../ui/card';

export const TechStackSection = () => {
  return (
    <MaxWidthWrapper>
      <AnimationContainer>
        <SectionHeading
          title="Generated App Tech Stack"
          description="The code generator is driven by attributes applied to EF Core entities and their properties. Implemented using C# Source Generators, it triggers generation on every keystroke for classes within the specified namespace, so it doesn't slow down your build by generating all files at once."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {TECH_STACK.map((tech, index) => (
            <Card key={index} className="flex flex-col items-center justify-center p-6 md:p-8">
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
                        width={60}
                        height={60}
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
                <h3 className="font-medium text-lg mb-1">
                  {tech.options.map((opt) => opt.name).join(' or ')}
                </h3>
                <div className="text-muted-foreground text-sm">{tech.category}</div>
              </div>
            </Card>
          ))}
        </div>
      </AnimationContainer>
    </MaxWidthWrapper>
  );
};
