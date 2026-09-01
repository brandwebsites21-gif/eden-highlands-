import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface DrawInIconProps {
  icon: LucideIcon;
  size?: number;
  className?: string;
  strokeWidth?: number;
  id?: string;
}

/**
 * DrawInIcon: Renders an icon with a subtle stroke draw-in trace effect
 * (~400ms) once on initial viewport entrance, then stays static.
 *
 * Sparing, tasteful entrance detail. Does not repeat on hover.
 */
export default function DrawInIcon({
  icon: Icon,
  size = 20,
  className = '',
  strokeWidth = 1.75,
  id
}: DrawInIconProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div ref={ref} id={id} className={`inline-flex items-center justify-center ${className}`}>
        <Icon size={size} strokeWidth={strokeWidth} />
      </div>
    );
  }

  return (
    <div
      ref={ref}
      id={id}
      className={`inline-flex items-center justify-center draw-icon-wrap ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-center"
      >
        <Icon size={size} strokeWidth={strokeWidth} className="draw-icon-svg" />
      </motion.div>
    </div>
  );
}
