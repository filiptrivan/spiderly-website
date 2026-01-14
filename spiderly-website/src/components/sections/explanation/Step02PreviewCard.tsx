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
    ? '/assets/Spiderly_App_Details_Page_With_More_Fields.svg'
    : '/assets/Spiderly_App_Simple_Details_Page.svg';
  const imageAlt = hasProperties
    ? 'Class UI Admin Page With More Fields'
    : 'Class UI Simple Admin Page';

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
