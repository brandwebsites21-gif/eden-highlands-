import React, { useRef, useState, useEffect } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  HTMLMotionProps
} from 'motion/react';

interface TiltCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tint?: 'cream' | 'pink' | 'sage' | 'tan' | 'sage2' | 'green' | 'none';
  maxTilt?: number; // Maximum tilt in degrees (default 4.5)
}

/**
 * TiltCard: Desktop-only subtle 3D card tilt that follows the cursor
 * with smooth spring physics and a soft tint-matched radial highlight.
 *
 * Automatically disabled on touch screens and under prefers-reduced-motion.
 */
export default function TiltCard({
  children,
  className = '',
  id,
  tint = 'cream',
  maxTilt = 4.5,
  ...rest
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isTouchOrSmall, setIsTouchOrSmall] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Normalized cursor coordinates (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Percentage coordinates for the radial gradient (0% to 100%)
  const [gradientPos, setGradientPos] = useState({ x: 50, y: 50 });

  // Spring physics configuration for gentle tactile feel (no harsh snapping)
  const springConfig = { damping: 20, stiffness: 150, mass: 0.6 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Tilt transforms
  const rotateX = useTransform(springY, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-maxTilt, maxTilt]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkDevice = () => {
        const isTouch = window.matchMedia('(pointer: coarse)').matches;
        const isSmall = window.innerWidth < 768;
        setIsTouchOrSmall(isTouch || isSmall);
      };
      checkDevice();
      window.addEventListener('resize', checkDevice, { passive: true });
      return () => window.removeEventListener('resize', checkDevice);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchOrSmall || shouldReduceMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    // Relative -0.5 to +0.5 from center
    const normalizedX = (clientX / rect.width) - 0.5;
    const normalizedY = (clientY / rect.height) - 0.5;

    x.set(normalizedX);
    y.set(normalizedY);

    setGradientPos({
      x: Math.round((clientX / rect.width) * 100),
      y: Math.round((clientY / rect.height) * 100)
    });
  };

  const handleMouseEnter = () => {
    if (!isTouchOrSmall && !shouldReduceMotion) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Smoothly return to center
    x.set(0);
    y.set(0);
  };

  // Tint-matched soft radial glow
  const getHighlightColor = () => {
    switch (tint) {
      case 'sage':
      case 'sage2':
        return 'rgba(219, 230, 211, 0.45)';
      case 'pink':
        return 'rgba(243, 227, 222, 0.5)';
      case 'tan':
        return 'rgba(222, 211, 193, 0.45)';
      case 'green':
        return 'rgba(95, 122, 99, 0.25)';
      case 'cream':
      default:
        return 'rgba(255, 255, 255, 0.4)';
    }
  };

  if (shouldReduceMotion || isTouchOrSmall) {
    return (
      <div id={id} className={`relative ${className}`} {...(rest as any)}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      id={id}
      className={`relative perspective-1000 ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        rotateX,
        rotateY
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {/* Card Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>

      {/* Subtle Tinted Radial Highlight Layer */}
      {tint !== 'none' && (
        <div
          className="absolute inset-0 pointer-events-none rounded-[inherit] transition-opacity duration-300 z-20"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(circle 240px at ${gradientPos.x}% ${gradientPos.y}%, ${getHighlightColor()}, transparent 80%)`
          }}
          aria-hidden="true"
        />
      )}
    </motion.div>
  );
}
