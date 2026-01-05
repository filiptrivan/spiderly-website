interface TerminalStepProps {
  step: { type: string; text: string };
  isVisible: boolean;
  isLastStep: boolean;
}

export const TerminalStep = ({ step, isVisible, isLastStep }: TerminalStepProps) => {
  return (
    <div
      className={`transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
    >
      {step.type === 'loading' && <div className="text-muted-foreground">{step.text}</div>}
      {step.type === 'success' && (
        <>
          <div className="text-green-500">{step.text}</div>
          {!isLastStep && <div className="h-4" />}
        </>
      )}
    </div>
  );
};
