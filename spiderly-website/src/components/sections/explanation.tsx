import { TerminalIcon } from 'lucide-react';
import Image from 'next/image';
import AnimationContainer from '../global/animation-container';
import MaxWidthWrapper from '../global/max-width-wrapper';
import { SectionHeading } from '../ui/section-heading';

export const Explanation = () => {
  return (
    <MaxWidthWrapper>
      <AnimationContainer delay={0.2}>
        <SectionHeading
          title="Features"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus veritatis repellendus non excepturi."
        />
        <div className="rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16">
            {/* Terminal Window */}
            <div className="flex relative after:content-[''] after:absolute after:left-1/2 after:top-full after:w-0.5 after:h-10 after:border-l-2 after:border-dashed after:border-primary/40 md:after:left-full md:after:top-1/2 md:after:w-16 md:after:h-0.5 md:after:border-l-0 md:after:border-t-2">
              <div className="relative w-full md:w-64 rounded-lg border border-foreground/20 bg-black/80 backdrop-blur-sm shadow-2xl overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-foreground/10 bg-foreground/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex items-center gap-2 ml-4 text-sm text-muted-foreground">
                    <TerminalIcon className="w-4 h-4" />
                    <span>Terminal</span>
                  </div>
                </div>

                {/* Terminal Content */}
                <div className="p-6 font-mono text-sm">
                  <div className="flex items-center gap-2 text-green-400">
                    <span className="text-blue-400">$</span>
                    <span className="text-white">spiderly init</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Image */}
            <div className="w-full md:w-auto">
              <Image
                src="/assets/dashboard-dark.svg"
                alt="Dashboard"
                width={896}
                height={896}
                quality={100}
                className="rounded-md lg:rounded-xl bg-foreground/10 ring-1 ring-border w-full h-auto"
              />
            </div>
          </div>
          <div className="absolute -bottom-4 inset-x-0 w-full h-1/2 bg-gradient-to-t from-background z-40"></div>
          <div className="absolute bottom-0 md:-bottom-8 inset-x-0 w-full h-1/4 bg-gradient-to-t from-background z-50"></div>
        </div>
      </AnimationContainer>
    </MaxWidthWrapper>
  );
};
