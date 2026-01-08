import { AnimationContainer, SectionContainer } from '@/components';
import { TECH_STACK } from '@/utils/constants/misc';
import { Card } from '../ui/card';
import { SectionHeadingWithoutDescription } from '../ui/section-heading-without-description';

export const TechStackSection = () => {
  return (
    <SectionContainer>
      <AnimationContainer>
        <SectionHeadingWithoutDescription title="Spiderly Tech Stack" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {TECH_STACK.map((tech, index) => (
            <Card key={index} className="flex flex-col items-center justify-center p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                {tech.options.map((option, optIndex) => (
                  <>
                    <div key={optIndex} className="flex justify-center w-12 h-12 lg:w-14 lg:h-14">
                      <img src={option.logo} alt={option.name} title={`${option.name} Logo`} />
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
    </SectionContainer>
  );
};
