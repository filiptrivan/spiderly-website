'use client';

import { SectionHeadingWithoutDescription } from '@/components/ui/section-heading-without-description';
import { useRef, useState } from 'react';
import AnimationContainer from '../../global/animation-container';
import SectionContainer from '../../global/max-width-wrapper';
import { CodeWindow } from './CodeWindow';
import { PreviewCard } from './PreviewCard';
import { ProductPreview } from './ProductPreview';
import { TerminalWindow } from './TerminalWindow';

const terminalSteps = [
  { type: 'success', text: 'Files generated successfully.' },
  { type: 'success', text: 'Created and updated the database successfully.' },
  { type: 'success', text: 'Packages installed successfully.' },
  { type: 'success', text: 'Spiderly app created successfully!' },
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
      <AnimationContainer>
        <SectionHeadingWithoutDescription title="How Does Spiderly Work?" />

        {/* Step 01 */}
        <h3 className="mb-2 lg:mb-4 md:text-3xl text-xl font-medium">
          01. Create Spiderly Application
        </h3>
        <p className="mb-6 lg:mb-8 text-muted-foreground">
          With its CLI tool, Spiderly helps you create a starter template application that is
          suitable for further use of the Spiderly library.
        </p>
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
          <div className="mt-12 lg:mt-14 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h3 className="mb-2 lg:mb-4 md:text-3xl text-xl font-medium">02. Define Your Class</h3>
            <p className="mb-6 lg:mb-8 text-muted-foreground">
              Simply define your class with properties and attributes. Spiderly generates everything
              needed for CRUD operations, from frontend to backend. Spiderly generator is
              implemented using C# Source Generators, it triggers generation on every file save for
              classes within the specified namespace, so it doesn`t slow down your build by
              generating all files at once.
            </p>
            <div className="flex flex-col lg:flex-row lg:h-[444px] gap-4 lg:gap-6">
              <CodeWindow
                isTriggered={step2Triggered}
                onAddProperties={triggerStep2}
                onUndo={handleUndoStep2}
                properties={step2Triggered ? productProperties : [productProperties[0]]}
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
