import { cn } from '@/utils';

interface GlowProps {
  className?: string;
  top?: string;
  left?: string;
  height?: string;
  width?: string;
  blur?: string;
}

const Glow = ({
  className,
  top = '500px',
  left = '50%',
  height = '100px',
  width = '80%',
  blur = '6rem',
}: GlowProps) => {
  return (
    <div
      className={cn('absolute rounded-full gradient pointer-events-none -z-10', className)}
      style={{
        top,
        left,
        height,
        width,
        transform: left === '50%' ? 'translateX(-50%)' : undefined,
        filter: `blur(${blur})`,
      }}
      aria-hidden="true"
    />
  );
};

export default Glow;
