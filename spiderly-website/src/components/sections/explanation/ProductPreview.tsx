import Image from 'next/image';

interface ProductPreviewProps {
  hasProperties: boolean;
  className?: string;
}

export const ProductPreview = ({ hasProperties, className = '' }: ProductPreviewProps) => {
  return (
    <div className={`${className} grid place-items-center`}>
      <div className="w-full max-w-full transition-all duration-700 ease-in-out">
        <Image
          src={
            hasProperties ? '/assets/product-page-with-properties.svg' : '/assets/product-page.svg'
          }
          alt={hasProperties ? 'Product Page with Properties' : 'Product Page Preview'}
          width={1000}
          height={1000}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};
