import React, { useMemo } from 'react';
import { useReducedMotion } from 'motion/react';

interface GenerativeBackdropProps {
  variant?: 'hero' | 'section' | 'footer' | 'subtle';
  className?: string;
  id?: string;
  linesCount?: number;
  seed?: number;
}

/**
 * GenerativeBackdrop: Procedurally generated topographic contour lines
 * evoking the southern highland ridges and elevation curves of Mbeya, Tanzania.
 *
 * Lightweight SVG paths computed once on mount. Strictly decorative texture (5-8% opacity)
 * with zero impact on text legibility and zero per-frame recalculation cost.
 */
export default function GenerativeBackdrop({
  variant = 'hero',
  className = '',
  id,
  linesCount = 6,
  seed = 42
}: GenerativeBackdropProps) {
  const shouldReduceMotion = useReducedMotion();

  // Pseudo-random deterministic generator for consistent yet organic curves
  const curveData = useMemo(() => {
    const generated: string[] = [];
    const count = variant === 'footer' ? 4 : variant === 'section' ? 5 : linesCount;
    const width = 1200;
    const height = variant === 'hero' ? 420 : variant === 'footer' ? 220 : 280;

    // Simple pseudo-random sequence based on seed
    let s = seed;
    const rand = () => {
      s = (s * 9301 + 49297) % 233280;
      return s / 233280;
    };

    for (let i = 0; i < count; i++) {
      const baseY = (height / (count + 1)) * (i + 1);
      const amp1 = 20 + rand() * 25;
      const amp2 = 12 + rand() * 18;
      const freq1 = 0.0035 + rand() * 0.002;
      const freq2 = 0.007 + rand() * 0.003;
      const phase1 = rand() * Math.PI * 2;
      const phase2 = rand() * Math.PI * 2;

      let d = `M 0 ${baseY + Math.sin(phase1) * amp1}`;

      const steps = 24;
      const stepX = width / steps;

      for (let step = 1; step <= steps; step++) {
        const x = step * stepX;
        const y =
          baseY +
          Math.sin(x * freq1 + phase1) * amp1 +
          Math.cos(x * freq2 + phase2) * amp2;

        const prevX = (step - 1) * stepX;
        const prevY =
          baseY +
          Math.sin(prevX * freq1 + phase1) * amp1 +
          Math.cos(prevX * freq2 + phase2) * amp2;

        const cp1x = prevX + stepX * 0.5;
        const cp1y = prevY;
        const cp2x = prevX + stepX * 0.5;
        const cp2y = y;

        d += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${x.toFixed(1)} ${y.toFixed(1)}`;
      }

      generated.push(d);
    }

    return { paths: generated, width, height };
  }, [variant, linesCount, seed]);

  return (
    <div
      id={id}
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
      style={{ opacity: shouldReduceMotion ? 0.04 : 0.07 }}
    >
      <svg
        viewBox={`0 0 ${curveData.width} ${curveData.height}`}
        preserveAspectRatio="none"
        className="w-full h-full text-[var(--green-dark)]"
        fill="none"
      >
        <defs>
          <linearGradient id={`contour-fade-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
            <stop offset="25%" stopColor="currentColor" stopOpacity="0.8" />
            <stop offset="75%" stopColor="currentColor" stopOpacity="0.9" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        {curveData.paths.map((d, index) => (
          <path
            key={index}
            d={d}
            stroke={`url(#contour-fade-${variant})`}
            strokeWidth={1.25}
            strokeDasharray={index % 2 === 1 ? '4 4' : undefined}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
      </svg>
    </div>
  );
}
