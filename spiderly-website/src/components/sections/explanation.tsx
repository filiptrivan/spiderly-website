'use client';

import { useRef, useState } from 'react';
import AnimationContainer from '../global/animation-container';
import SectionContainer from '../global/max-width-wrapper';
import { SectionHeading } from '../ui/section-heading';
import { TerminalWindow } from './explanation/TerminalWindow';
import { PreviewCard } from './explanation/PreviewCard';

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
          <TerminalWindow
            isTriggered={isTriggered}
            visibleSteps={visibleSteps}
            onRunCommand={triggerAnimation}
            steps={terminalSteps}
            className={`${explanationCard} w-full h-full lg:w-[450px] overflow-auto`}
          />
          <PreviewCard
            isComplete={isComplete}
            isTriggered={isTriggered}
            className={`${explanationCard} w-full h-full overflow-hidden`}
          />
        </div>
      </AnimationContainer>
    </SectionContainer>
  );
};
