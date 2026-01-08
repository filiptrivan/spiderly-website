'use client';
import { useEffect, useRef, useState } from 'react';

export const TextHoverEffect = ({
  text,
  duration,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: '50%', cy: '50%' });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <>
      <style>{`
        @keyframes drawStroke {
          from {
            stroke-dashoffset: 1000;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        .stroke-draw {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: drawStroke 4s ease-in-out forwards;
        }
      `}</style>
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 360 100"
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
        className="select-none"
      >
        <defs>
          <linearGradient id="textGradient" gradientUnits="userSpaceOnUse" cx="50%" cy="50%" r="25%">
            {hovered && (
              <>
                <stop offset="0%" stopColor={'var(--indigo-500)'} />
                <stop offset="25%" stopColor={'var(--violet-500)'} />
                <stop offset="50%" stopColor={'var(--purple-500)'} />
                <stop offset="75%" stopColor={'var(--fuchsia-500)'} />
                <stop offset="100%" stopColor={'var(--rose-500)'} />
              </>
            )}
          </linearGradient>

          <radialGradient
            id="revealMask"
            gradientUnits="userSpaceOnUse"
            r="20%"
            cx={maskPosition.cx}
            cy={maskPosition.cy}
            style={{
              transition: `cx ${duration ?? 0}s ease-out, cy ${duration ?? 0}s ease-out`,
            }}
          >
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </radialGradient>
          <mask id="textMask">
            <rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)" />
          </mask>
        </defs>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          strokeWidth="0.3"
          className="font-[helvetica] font-bold stroke-neutral-800 fill-transparent text-7xl transition-opacity duration-300"
          style={{ opacity: hovered ? 0.7 : 0 }}
        >
          {text}
        </text>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          strokeWidth="0.3"
          className="font-[helvetica] font-bold fill-transparent text-7xl stroke-neutral-800 stroke-draw"
        >
          {text}
        </text>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          stroke="url(#textGradient)"
          strokeWidth="0.3"
          mask="url(#textMask)"
          className="font-[helvetica] font-bold fill-transparent text-7xl"
        >
          {text}
        </text>
      </svg>
    </>
  );
};
