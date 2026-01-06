import { ArrowRight, CheckCircle, FileCode, Server, Settings } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { Feature } from './Feature';

interface ProductPreviewProps {
  hasProperties: boolean;
  className?: string;
}

const crudFeatures = [
  {
    title: 'Controllers',
    description: 'Both for Frontend + Backend',
    icon: Settings,
  },
  {
    title: 'DTOs and TypeScript classes',
    description: 'C# partial classes + Angular TypeScript',
    icon: FileCode,
  },
  {
    title: 'Backend + Frontend validations',
    description: 'FluentValidation + reactive form validators',
    icon: CheckCircle,
  },
  {
    title: 'Service methods',
    description: 'Database interaction',
    icon: Server,
  },
];

export const ProductPreview = ({ hasProperties, className = '' }: ProductPreviewProps) => {
  const [showFeatures, setShowFeatures] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsLeaving(false);
    setShowFeatures(true);
  };

  const handleMouseLeave = () => {
    setIsLeaving(true);
    timeoutRef.current = setTimeout(() => {
      setShowFeatures(false);
      setIsLeaving(false);
      timeoutRef.current = null;
    }, 300);
  };

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
      <div
        className={`absolute inset-0 bg-background/95 backdrop-blur-sm transition-all duration-300 flex flex-col overflow-auto ${
          showFeatures && !isLeaving
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-2">
            {crudFeatures.map((feature, index) => (
              <Feature
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
          <Link
            href="/features/crud-generation"
            className="mt-1 lg:mt-2 mb-1 lg:mb-2 mx-auto flex items-center gap-2 text-xs lg:text-sm text-primary hover:text-primary/80 transition-colors group/link"
          >
            Learn more about CRUD incremental generation
            <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};
