import { useRef, useState } from 'react';

export const useHoverOverlay = (delay: number = 300) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsLeaving(false);
    setShowOverlay(true);
  };

  const handleMouseLeave = () => {
    setIsLeaving(true);
    timeoutRef.current = setTimeout(() => {
      setShowOverlay(false);
      setIsLeaving(false);
      timeoutRef.current = null;
    }, delay);
  };

  return {
    showOverlay,
    isLeaving,
    handleMouseEnter,
    handleMouseLeave,
  };
};
