'use client';

import { crudFeatures } from './constants';
import { FeatureGrid } from './FeatureGrid';
import { HoverableImage } from './HoverableImage';

interface Step02PreviewCardProps {
  hasProperties: boolean;
  className?: string;
}

export const Step02PreviewCard = ({ hasProperties, className = '' }: Step02PreviewCardProps) => {
  const imageSrc = hasProperties
    ? '/assets/product-page-with-properties.svg'
    : '/assets/product-page.svg';
  const imageAlt = hasProperties
    ? 'Class UI Admin Page with Properties'
    : 'Class UI Admin Page';

  return (
    <HoverableImage
      src={imageSrc}
      alt={imageAlt}
      className={className}
      overlayContent={
        <FeatureGrid title="Generated Code For Class Summary" features={crudFeatures} />
      }
    />
  );
};
