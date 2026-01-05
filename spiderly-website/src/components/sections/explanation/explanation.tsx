'use client';

import { useRef, useState } from 'react';
import AnimationContainer from '../../global/animation-container';
import SectionContainer from '../../global/max-width-wrapper';
import { SectionHeading } from '../../ui/section-heading';
import { CodeWindow } from './CodeWindow';
import { PreviewCard } from './PreviewCard';
import { ProductPreview } from './ProductPreview';
import { TerminalWindow } from './TerminalWindow';

const terminalSteps = [
  { type: 'loading', text: 'Generating files for the app...' },
  { type: 'success', text: '[OK] Files generated successfully.' },
  { type: 'loading', text: 'Creating and updating the database...' },
  { type: 'success', text: '[OK] Created and updated the database successfully.' },
  { type: 'loading', text: 'Installing packages...' },
  { type: 'success', text: '[OK] Packages installed successfully.' },
  { type: 'success', text: '[OK] Spiderly app created successfully!' },
];

const productProperties = [
  { name: 'Name', type: 'string' },
  { name: 'Active', type: 'bool' },
  { name: 'Text', type: 'string', attributes: [{ name: 'UIControlType', value: 'TextArea' }] },
  { name: 'Html', type: 'string', attributes: [{ name: 'UIControlType', value: 'Editor' }] },
  { name: 'Image', type: 'string', attributes: [{ name: 'BlobName' }] },
];

export const Explanation = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [isTriggered, setIsTriggered] = useState(false);
  const [step2Triggered, setStep2Triggered] = useState(false);
  const [hasProperties, setHasProperties] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const explanationCard = 'rounded-md lg:rounded-xl ring-1 ring-border shadow-lg';

  const triggerAnimation = () => {
    if (isTriggered) return;

    setIsTriggered(true);
    // Start the animation sequence
    terminalSteps.forEach((_, index) => {
      const timeout = setTimeout(() => {
        setVisibleSteps((prev) => [...prev, index]);

        // Mark as complete when last step is shown
        if (index === terminalSteps.length - 1) {
          const completeTimeout = setTimeout(() => setIsComplete(true), 300);
          timeoutsRef.current.push(completeTimeout);
        }
      }, index * 1000); // delay between each step
      timeoutsRef.current.push(timeout);
    });
  };

  const triggerStep2 = () => {
    if (step2Triggered) return;

    setStep2Triggered(true);
    // Add properties with a slight delay for smooth animation
    setTimeout(() => {
      setHasProperties(true);
    }, 600);
  };

  const handleUndoStep1 = () => {
    // Clear all pending timeouts
    timeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
    timeoutsRef.current = [];

    // Reset state
    setIsTriggered(false);
    setVisibleSteps([]);
    setIsComplete(false);
  };

  const handleUndoStep2 = () => {
    setStep2Triggered(false);
    setHasProperties(false);
  };

  return (
    <SectionContainer>
      <AnimationContainer delay={0.2}>
        <SectionHeading
          title="How Does Spiderly Work?"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus veritatis repellendus non excepturi."
        />

        {/* Step 01 */}
        <h3 className="text-muted-foreground font-bold text-xl md:text-3xl mb-4 lg:mb-5">
          01. {/* Scaffold a new Spiderly application */}
        </h3>
        <div ref={sectionRef} className="flex flex-col lg:flex-row lg:h-[444px] gap-4 lg:gap-6">
          <TerminalWindow
            isTriggered={isTriggered}
            visibleSteps={visibleSteps}
            onRunCommand={triggerAnimation}
            onUndo={handleUndoStep1}
            steps={terminalSteps}
            className={`${explanationCard} w-full h-full lg:w-[460px] overflow-auto`}
          />
          <PreviewCard
            isComplete={isComplete}
            isTriggered={isTriggered}
            className={`${explanationCard} w-full h-full overflow-hidden`}
          />
        </div>

        {/* Step 02 - Only show after Step 01 is complete */}
        {isComplete && (
          <div className="mt-8 lg:mt-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h3 className="text-muted-foreground font-bold text-xl md:text-3xl mb-4 lg:mb-5">
              02.{' '}
              {/* Incremental Generation of Everything for CRUD Operations On Class Creation/Edit */}
            </h3>
            <div className="flex flex-col lg:flex-row lg:h-[444px] gap-4 lg:gap-6">
              <CodeWindow
                isTriggered={step2Triggered}
                onAddProperties={triggerStep2}
                onUndo={handleUndoStep2}
                properties={step2Triggered ? productProperties : []}
                className={`${explanationCard} w-full h-full lg:w-[460px] overflow-auto`}
              />
              <ProductPreview
                hasProperties={hasProperties}
                className={`${explanationCard} w-full h-full overflow-hidden`}
              />
            </div>
          </div>
        )}
      </AnimationContainer>
    </SectionContainer>
  );
};
