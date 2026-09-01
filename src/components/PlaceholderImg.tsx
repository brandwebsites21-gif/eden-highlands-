import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { EASE_OUT_SETTLE } from './Motion';

interface PlaceholderImgProps {
  caption?: string;
  variant?: 'cream' | 'pink' | 'sage' | 'sage2' | 'tan';
  className?: string;
  aspect?: 'landscape' | 'portrait' | 'square' | 'wide' | 'auto';
  subtitle?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  id?: string;
  disableAnimation?: boolean;
}

export default function PlaceholderImg({
  caption,
  variant = 'tan',
  className = '',
  aspect = 'auto',
  subtitle,
  onClick,
  children,
  id,
  disableAnimation = false
}: PlaceholderImgProps) {
  const shouldReduceMotion = useReducedMotion();

  const getBgClass = () => {
    switch (variant) {
      case 'sage':
        return 'bg-[var(--card-sage)]';
      case 'sage2':
        return 'bg-[var(--card-sage2)]';
      case 'pink':
        return 'bg-[var(--card-pink)]';
      case 'cream':
        return 'bg-[var(--card-cream)]';
      case 'tan':
      default:
        return 'bg-[var(--card-tan)]';
    }
  };

  const getAspectClass = () => {
    switch (aspect) {
      case 'landscape':
        return 'aspect-[4/3]';
      case 'wide':
        return 'aspect-[16/9]';
      case 'portrait':
        return 'aspect-[3/4]';
      case 'square':
        return 'aspect-square';
      default:
        return '';
    }
  };

  if (shouldReduceMotion || disableAnimation) {
    return (
      <div
        id={id}
        onClick={onClick}
        className={`placeholder-img overflow-hidden ${getBgClass()} ${getAspectClass()} ${className} ${onClick ? 'cursor-pointer hover:brightness-[0.98] transition-all' : ''}`}
      >
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--ink)_0.5px,_transparent_0.5px)] bg-[size:16px_16px]" />
        {children}
        {caption && (
          <div className="relative z-10 w-full flex flex-col gap-1">
            <span className="cap">{caption}</span>
            {subtitle && (
              <span className="text-[11px] text-[var(--ink-soft)] px-2 py-0.5 bg-white/60 backdrop-blur-sm rounded w-fit mt-1">
                {subtitle}
              </span>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <motion.div
      id={id}
      onClick={onClick}
      className={`placeholder-img overflow-hidden ${getBgClass()} ${getAspectClass()} ${className} ${onClick ? 'cursor-pointer hover:brightness-[0.98] transition-all' : ''}`}
      initial={{ opacity: 0.9, scale: 1.03 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: EASE_OUT_SETTLE }}
    >
      {/* Decorative subtle texture lines */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--ink)_0.5px,_transparent_0.5px)] bg-[size:16px_16px]" />
      
      {/* Editorial Content Overlay */}
      {children}

      {caption && (
        <div className="relative z-10 w-full flex flex-col gap-1">
          <span className="cap">
            {caption}
          </span>
          {subtitle && (
            <span className="text-[11px] text-[var(--ink-soft)] px-2 py-0.5 bg-white/60 backdrop-blur-sm rounded w-fit mt-1">
              {subtitle}
            </span>
          )}
        </div>
      )}
    </motion.div>
  );
}
