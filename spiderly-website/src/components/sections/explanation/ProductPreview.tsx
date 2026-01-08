import Image from 'next/image';
import { FeatureGrid } from './FeatureGrid';
import { FeatureOverlay } from './FeatureOverlay';
import { useHoverOverlay } from './useHoverOverlay';

interface ProductPreviewProps {
  hasProperties: boolean;
  className?: string;
}

const crudFeatures = [
  {
    title: 'UI pages',
    description: 'Table view with sorting, filtering, pagination, and admin create/edit forms',
  },
  {
    title: 'Controllers',
    description: '.NET API controllers with matching Angular API client methods',
  },
  {
    title: 'DTOs and TypeScript classes',
    description: 'C# partial DTOs with matching Angular TypeScript classes',
  },
  {
    title: 'Backend + Frontend validations',
    description: 'FluentValidation rules with synced Angular reactive form validators',
  },
  {
    title: 'Service methods',
    description: 'Service-layer logic for database access',
  },
];

export const ProductPreview = ({ hasProperties, className = '' }: ProductPreviewProps) => {
  const { showOverlay, isLeaving, handleMouseEnter, handleMouseLeave } = useHoverOverlay();

  return (
    <div
      className={`${className} relative group`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="grid place-items-center w-full h-full">
        <div className="w-full max-w-full transition-all duration-700 ease-in-out">
          <Image
            src={
              hasProperties
                ? '/assets/product-page-with-properties.svg'
                : '/assets/product-page.svg'
            }
            alt={hasProperties ? 'Product Page with Properties' : 'Product Page Preview'}
            width={1000}
            height={1000}
            className={`w-full h-auto ${hasProperties ? 'animate-in fade-in zoom-in-95 duration-700' : ''}`}
          />
        </div>
      </div>
      <FeatureOverlay show={showOverlay} isLeaving={isLeaving}>
        <FeatureGrid title="Generated Code For Class Summary" features={crudFeatures} />
      </FeatureOverlay>
    </div>
  );
};
