'use client';

import { TerminalIcon } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import AnimationContainer from '../global/animation-container';
import SectionContainer from '../global/max-width-wrapper';
import { SectionHeading } from '../ui/section-heading';

const terminalSteps = [
  { id: 1, type: 'command', text: 'spiderly init' },
  { id: 2, type: 'loading', text: 'Generating files for the app...' },
  { id: 3, type: 'success', text: '[OK] Files generated successfully.' },
  { id: 4, type: 'loading', text: 'Creating and updating the database...' },
  { id: 5, type: 'success', text: '[OK] Created and updated the database successfully.' },
  { id: 6, type: 'loading', text: 'Installing packages...' },
  { id: 7, type: 'success', text: '[OK] Packages installed successfully.' },
  { id: 8, type: 'success', text: '[OK] Spiderly app created successfully!' },
];

export const Explanation = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            // Start the animation sequence
            terminalSteps.forEach((step, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => [...prev, step.id]);

                // Mark as complete when last step is shown
                if (index === terminalSteps.length - 1) {
                  setTimeout(() => setIsComplete(true), 300);
                }
              }, index * 600); // 600ms delay between each step
            });
          }
        });
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <SectionContainer>
      <AnimationContainer delay={0.2}>
        <SectionHeading
          title="How Does Spiderly Works?"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus veritatis repellendus non excepturi."
        />
        <div
          ref={sectionRef}
          className="rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl"
        >
          <div className="flex flex-col md:flex-row gap-10 md:gap-16">
            {/* Terminal Window */}
            <div className="flex relative after:content-[''] after:absolute after:left-1/2 after:top-full after:w-0.5 after:h-10 after:border-l-2 after:border-dashed after:border-primary/40 md:after:left-full md:after:top-1/2 md:after:w-16 md:after:h-0.5 md:after:border-l-0 md:after:border-t-2">
              <div className="relative w-full md:w-[370px] rounded-lg border border-foreground/20 bg-black/80 backdrop-blur-sm shadow-2xl overflow-hidden">
                {/* Terminal Header */}
                <div className="flex px-4 h-10 border-b border-foreground/10 bg-foreground/5">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <TerminalIcon className="w-4 h-4" />
                    <span>Terminal</span>
                  </div>
                </div>

                {/* Terminal Content */}
                <div className="p-6 font-mono text-sm min-h-[280px]">
                  {terminalSteps.map((step, index) => {
                    const isVisible = visibleSteps.includes(step.id);

                    return (
                      <div
                        key={step.id}
                        className={`transition-all duration-300 ${
                          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                        }`}
                      >
                        {step.type === 'command' && (
                          <>
                            <div className="flex items-center gap-2">
                              <span className="text-blue-400">$</span>
                              <span className="text-white">{step.text}</span>
                            </div>
                            <div className="h-4" />
                          </>
                        )}
                        {step.type === 'loading' && (
                          <div className="text-neutral-400">{step.text}</div>
                        )}
                        {step.type === 'success' && (
                          <>
                            <div className="text-green-500">{step.text}</div>
                            {index < terminalSteps.length - 1 && <div className="h-4" />}
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Dashboard Image Container */}
            <div className="w-full md:w-auto">
              {/* Image Content */}
              {isComplete && (
                <Image
                  src="/assets/dashboard-dark.svg"
                  alt="Dashboard"
                  width={1000}
                  height={1000}
                  className="rounded-md lg:rounded-xl bg-foreground/10 ring-1 ring-border w-full h-auto"
                />
              )}
              {!isComplete && (
                <div className="rounded-md lg:rounded-xl ring-1 ring-border w-full h-full">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                    <p className="text-sm text-muted-foreground">Creating app...</p>
                    <div className="flex items-center w-full my-auto rounded-full h-2 overflow-hidden">
                      <div
                        className="from- to- bg-white h-full transition-all duration-500 ease-out"
                        style={{
                          width: `${(visibleSteps.length / terminalSteps.length) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </AnimationContainer>
    </SectionContainer>
  );
};
