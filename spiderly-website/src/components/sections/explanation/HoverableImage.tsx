'use client';

import Image from 'next/image';
import { ReactNode } from 'react';
import { FeatureOverlay } from './FeatureOverlay';
import { useHoverOverlay } from './useHoverOverlay';

interface HoverableImageProps {
  src: string;
  alt: string;
  className?: string;
  overlayContent: ReactNode;
}

export const HoverableImage = ({ src, alt, className = '', overlayContent }: HoverableImageProps) => {
  const { showOverlay, isLeaving, handleMouseEnter, handleMouseLeave } = useHoverOverlay();

  return (
    <div
      className={`${className} relative group`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={src}
        alt={alt}
        width={1000}
        height={1000}
        className="w-full h-full"
      />
      <FeatureOverlay show={showOverlay} isLeaving={isLeaving}>
        {overlayContent}
      </FeatureOverlay>
    </div>
  );
};
