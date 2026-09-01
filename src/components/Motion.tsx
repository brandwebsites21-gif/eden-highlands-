import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useReducedMotion,
  useInView,
  useScroll,
  useTransform,
  HTMLMotionProps
} from 'motion/react';

// Custom easing matching: soft ease-out, no bounce, no overshoot
export const EASE_OUT_SETTLE = [0.22, 1, 0.36, 1] as const;

interface RevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  amount?: number;
  className?: string;
  id?: string;
}

/**
 * Reveal component: Subtle fade + rise once on scroll into view.
 * Settle travel: default 16px desktop (halved on mobile).
 */
export function Reveal({
  children,
  delay = 0,
  duration = 0.55,
  yOffset = 16,
  amount = 0.18,
  className = '',
  id,
  ...rest
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 640);
      const handleResize = () => setIsMobile(window.innerWidth < 640);
      window.addEventListener('resize', handleResize, { passive: true });
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  if (shouldReduceMotion) {
    return (
      <div id={id} className={className}>
        {children}
      </div>
    );
  }

  const travel = isMobile ? Math.min(yOffset * 0.5, 8) : yOffset;

  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, y: travel }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration,
        delay,
        ease: EASE_OUT_SETTLE
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  index: number;
  className?: string;
  stepDelay?: number;
  maxStagger?: number;
  yOffset?: number;
  id?: string;
}

/**
 * StaggerItem component: gentle stagger offset capped at ~400ms total.
 */
export function StaggerItem({
  children,
  index,
  className = '',
  stepDelay = 0.07,
  maxStagger = 0.38,
  yOffset = 16,
  id,
  ...rest
}: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 640);
      const handleResize = () => setIsMobile(window.innerWidth < 640);
      window.addEventListener('resize', handleResize, { passive: true });
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  if (shouldReduceMotion) {
    return (
      <div id={id} className={className}>
        {children}
      </div>
    );
  }

  const travel = isMobile ? Math.min(yOffset * 0.5, 8) : yOffset;
  const calculatedDelay = Math.min(index * stepDelay, maxStagger);

  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, y: travel }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.52,
        delay: calculatedDelay,
        ease: EASE_OUT_SETTLE
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

interface CountUpProps {
  value: string | number;
  duration?: number;
  className?: string;
  id?: string;
}

/**
 * CountUp: parses numeric values (e.g. "4.3★", "1,900+", "16", "~700m")
 * and smoothly animates the numeric portion once on scroll.
 */
export function CountUp({
  value,
  duration = 550,
  className = '',
  id
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const shouldReduceMotion = useReducedMotion();
  const rawString = String(value);

  // Match prefix, numeric portion (including decimals/commas), and suffix
  // e.g. "~700m" -> prefix: "~", number: "700", suffix: "m"
  // "4.3★" -> prefix: "", number: "4.3", suffix: "★"
  // "1,900+" -> prefix: "", number: "1900", suffix: "+"
  const match = rawString.match(/^([^0-9.]*)([0-9.,]+)(.*)$/);

  const prefix = match ? match[1] : '';
  const numberStr = match ? match[2].replace(/,/g, '') : '';
  const suffix = match ? match[3] : '';
  const targetNumber = parseFloat(numberStr);
  const isDecimal = numberStr.includes('.');
  const hasComma = match ? match[2].includes(',') : false;

  const [displayNumber, setDisplayNumber] = useState(
    shouldReduceMotion || isNaN(targetNumber) ? targetNumber : 0
  );

  useEffect(() => {
    if (shouldReduceMotion || isNaN(targetNumber) || !isInView) {
      if (isInView && !isNaN(targetNumber)) {
        setDisplayNumber(targetNumber);
      }
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Ease out quartic/cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = easeOut * targetNumber;

      setDisplayNumber(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateCount);
      } else {
        setDisplayNumber(targetNumber);
      }
    };

    animationFrameId = requestAnimationFrame(animateCount);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, targetNumber, duration, shouldReduceMotion]);

  if (isNaN(targetNumber)) {
    return <span id={id} className={className}>{rawString}</span>;
  }

  const formatNumber = (num: number) => {
    let formatted: string;
    if (isDecimal) {
      formatted = num.toFixed(1);
    } else {
      formatted = Math.round(num).toString();
      if (hasComma) {
        formatted = formatted.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
    }
    return formatted;
  };

  return (
    <span ref={ref} id={id} className={className}>
      {prefix}
      {formatNumber(displayNumber)}
      {suffix}
    </span>
  );
}

interface SectionDividerProps {
  className?: string;
  id?: string;
}

/**
 * SectionDivider: A subtle hairline --rule divider that gently draws left-to-right on scroll.
 */
export function SectionDivider({ className = '', id }: SectionDividerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div id={id} className={`w-full h-px bg-[var(--rule)] ${className}`} />;
  }

  return (
    <motion.div
      id={id}
      className={`w-full h-px bg-[var(--rule)] origin-left ${className}`}
      initial={{ scaleX: 0, opacity: 0.6 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: EASE_OUT_SETTLE }}
    />
  );
}

interface HeroParallaxProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

/**
 * HeroParallax: Restrained parallax (85-90% scroll speed differential, ~10-15% max displacement).
 * Automatically disabled on mobile/touch screens to prevent jank.
 */
export function HeroParallax({ children, className = '', id }: HeroParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isTouchOrMobile, setIsTouchOrMobile] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkDevice = () => {
        const isTouch = window.matchMedia('(pointer: coarse)').matches;
        const isSmall = window.innerWidth < 768;
        setIsTouchOrMobile(isTouch || isSmall);
      };
      checkDevice();
      window.addEventListener('resize', checkDevice, { passive: true });
      return () => window.removeEventListener('resize', checkDevice);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  // 0 to 28px translateY max displacement over full scroll
  const y = useTransform(scrollYProgress, [0, 1], [0, 26]);

  if (shouldReduceMotion || isTouchOrMobile) {
    return (
      <div ref={ref} id={id} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} id={id} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}
