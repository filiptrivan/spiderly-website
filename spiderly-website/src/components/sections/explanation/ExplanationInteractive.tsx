'use client';

import { useRef, useState } from 'react';
import { CodeWindow } from './CodeWindow';
import { productProperties, terminalSteps } from './constants';
import { Step01PreviewCard } from './Step01PreviewCard';
import { Step02PreviewCard } from './Step02PreviewCard';
import { Step02TextContent } from './Step02TextContent';
import { TerminalWindow } from './TerminalWindow';

const explanationCard = 'rounded-md lg:rounded-xl ring-1 ring-border shadow-lg';

export const ExplanationInteractive = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [isTriggered, setIsTriggered] = useState(false);
  const [step2Triggered, setStep2Triggered] = useState(false);
  const [hasProperties, setHasProperties] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  const triggerStep1 = () => {
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
    <>
      <div ref={sectionRef} className="flex flex-col lg:flex-row lg:h-[444px] gap-4 lg:gap-6">
        <TerminalWindow
          isTriggered={isTriggered}
          visibleSteps={visibleSteps}
          onRunCommand={triggerStep1}
          onUndo={handleUndoStep1}
          steps={terminalSteps}
          className={`${explanationCard} w-full h-full lg:w-[460px] overflow-auto`}
        />
        <Step01PreviewCard
          isComplete={isComplete}
          isTriggered={isTriggered}
          className={`${explanationCard} w-full h-full overflow-hidden`}
        />
      </div>

      {/* Step 02 - Only show after Step 01 is complete */}
      {isComplete && (
        <div className="mt-12 lg:mt-14 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Step02TextContent />
          <div className="flex flex-col lg:flex-row lg:h-[444px] gap-4 lg:gap-6">
            <CodeWindow
              isTriggered={step2Triggered}
              onAddProperties={triggerStep2}
              onUndo={handleUndoStep2}
              properties={step2Triggered ? productProperties : [productProperties[0]]}
              className={`${explanationCard} w-full h-full lg:w-[460px] overflow-auto`}
            />
            <Step02PreviewCard
              hasProperties={hasProperties}
              className={`${explanationCard} w-full h-full overflow-hidden`}
            />
          </div>
        </div>
      )}
    </>
  );
};
