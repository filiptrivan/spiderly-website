'use client';

import { Hourglass, Loader2, TerminalIcon } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';
import AnimationContainer from '../global/animation-container';
import SectionContainer from '../global/max-width-wrapper';
import { Button } from '../ui/button';
import { SectionHeading } from '../ui/section-heading';

const terminalSteps = [
  { type: 'loading', text: 'Generating files for the app...' },
  { type: 'success', text: '[OK] Files generated successfully.' },
  { type: 'loading', text: 'Creating and updating the database...' },
  { type: 'success', text: '[OK] Created and updated the database successfully.' },
  { type: 'loading', text: 'Installing packages...' },
  { type: 'success', text: '[OK] Packages installed successfully.' },
  { type: 'success', text: '[OK] Spiderly app created successfully!' },
];

export const Explanation = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [isTriggered, setIsTriggered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const explanationCard = 'rounded-md lg:rounded-xl ring-1 ring-border shadow-lg';

  const triggerAnimation = () => {
    if (isTriggered) return;

    setIsTriggered(true);
    // Start the animation sequence
    terminalSteps.forEach((_, index) => {
      setTimeout(() => {
        setVisibleSteps((prev) => [...prev, index]);

        // Mark as complete when last step is shown
        if (index === terminalSteps.length - 1) {
          setTimeout(() => setIsComplete(true), 300);
        }
      }, index * 1000); // delay between each step
    });
  };

  return (
    <SectionContainer>
      <AnimationContainer delay={0.2}>
        <SectionHeading
          title="How Does Spiderly Work?"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus veritatis repellendus non excepturi."
        />
        <h3 className="text-muted-foreground font-bold text-xl md:text-3xl mb-5">01.</h3>
        <div ref={sectionRef} className="flex flex-col lg:flex-row lg:h-[442px] gap-8">
          {/* Terminal Window */}
          <div className={`${explanationCard} w-full h-full lg:w-[450px] overflow-auto`}>
            {/* Terminal Header */}
            <div className="flex px-4 h-10 border-b border-border bg-foreground/5">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TerminalIcon className="w-4 h-4" />
                <span>Terminal</span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm">
              <div className="flex items-center gap-2">
                <span className="text-blue-400">$</span>
                <span className="text-white">spiderly init</span>
              </div>

              <div className="h-4" />

              {!isTriggered && (
                <Button
                  onClick={triggerAnimation}
                  variant="primary"
                  size="sm"
                  className="w-full animate-pulse"
                >
                  Run Command
                </Button>
              )}
              {terminalSteps.map((step, index) => {
                const isVisible = visibleSteps.includes(index);

                return (
                  <div
                    key={index}
                    className={`transition-all duration-300 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}
                  >
                    {step.type === 'loading' && (
                      <div className="text-muted-foreground">{step.text}</div>
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
          <div className={`${explanationCard} w-full h-full overflow-hidden`}>
            {isComplete && isTriggered && (
              <Image
                src="/assets/dashboard-dark.svg"
                alt="Spiderly Dashboard"
                width={1000}
                height={1000}
                className={`w-full h-full animate-in fade-in zoom-in-95 duration-700`}
              />
            )}
            {!isComplete && isTriggered && (
              <div className="w-full h-full flex flex-col items-center justify-center gap-6 text-muted-foreground p-8 animate-in fade-in zoom-in-95 duration-500">
                <div className="relative">
                  <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl animate-pulse" />
                  <Loader2 className="w-16 h-16 relative text-primary animate-spin" />
                </div>
                <div className="text-center space-y-2">
                  <h4 className="text-lg font-semibold text-foreground">
                    Creating Your Application
                  </h4>
                  <p className="text-sm max-w-xs">
                    Setting up your Spiderly project with all the necessary files and
                    dependencies...
                  </p>
                </div>
              </div>
            )}
            {!isComplete && !isTriggered && (
              <div className="w-full h-full flex flex-col items-center justify-center gap-6 text-muted-foreground p-8">
                <div className="relative">
                  <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl" />
                  <Hourglass className="w-16 h-16 relative text-primary" />
                </div>
                <div className="text-center space-y-2">
                  <h4 className="text-lg font-semibold text-foreground">
                    Waiting For You to Run the Command
                  </h4>
                  <p className="text-sm max-w-xs">
                    Run the{' '}
                    <code className="px-1.5 py-0.5 rounded bg-muted text-foreground font-mono text-xs">
                      spiderly init
                    </code>{' '}
                    command to generate the Spiderly application.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </AnimationContainer>
    </SectionContainer>
  );
};
