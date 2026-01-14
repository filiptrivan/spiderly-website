'use client';

import { ReactNode } from 'react';
import { FeatureOverlay } from './FeatureOverlay';
import { useHoverOverlay } from './useHoverOverlay';

interface HoverableImageProps {
  src: string;
  alt: string;
  className?: string;
  overlayContent: ReactNode;
}

export const HoverableImage = ({
  src,
  alt,
  className = '',
  overlayContent,
}: HoverableImageProps) => {
  const { showOverlay, isLeaving, handleMouseEnter, handleMouseLeave } = useHoverOverlay();

  return (
    <div
      className={`${className} relative group w-full h-full overflow-hidden`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={src} alt={alt} className="w-full h-full" />
      <FeatureOverlay show={showOverlay} isLeaving={isLeaving}>
        {overlayContent}
      </FeatureOverlay>
    </div>
  );
};
