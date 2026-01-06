import { ReactNode } from 'react';

interface FeatureOverlayProps {
  show: boolean;
  isLeaving: boolean;
  children: ReactNode;
}

export const FeatureOverlay = ({ show, isLeaving, children }: FeatureOverlayProps) => {
  return (
    <div
      className={`absolute inset-0 bg-background/95 backdrop-blur-sm transition-all duration-300 flex flex-col overflow-auto ${
        show && !isLeaving
          ? 'opacity-100 scale-100'
          : 'opacity-0 scale-95 pointer-events-none'
      }`}
    >
      {children}
    </div>
  );
};
