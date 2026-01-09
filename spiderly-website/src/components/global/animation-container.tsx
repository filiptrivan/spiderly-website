'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimationContainerProps {
  children: React.ReactNode;
  delay?: number;
  reverse?: boolean;
  className?: string;
}

const AnimationContainer = ({
  children,
  className = '',
  reverse,
  delay = 0,
}: AnimationContainerProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-200 ease-in-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : `translateY(${reverse ? '-20px' : '20px'})`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimationContainer;
