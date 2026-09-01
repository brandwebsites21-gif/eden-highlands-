import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useReducedMotion } from 'motion/react';
import { Calendar, Phone, MessageCircle } from 'lucide-react';
import { HOTEL_PHONE, HOTEL_PHONE_RAW } from '../data/hotelData';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
}

export default function MobileBottomBar({ onOpenBooking }: MobileBottomBarProps) {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  // Trigger subtle haptic tick if supported
  const triggerHaptic = () => {
    try {
      if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
        navigator.vibrate(10);
      }
    } catch {
      // Ignore vibration errors
    }
  };

  useEffect(() => {
    // On secondary pages, show immediately. On Home page, reveal smoothly after scrolling past hero (~140px).
    if (location.pathname !== '/') {
      setIsVisible(true);
      return;
    }

    const unsubscribe = scrollY.on('change', (latest) => {
      setIsVisible(latest > 130);
    });

    return () => unsubscribe();
  }, [location.pathname, scrollY]);

  const handleBookingClick = () => {
    triggerHaptic();
    onOpenBooking();
  };

  const handleWhatsAppClick = () => {
    triggerHaptic();
    const msg = encodeURIComponent(
      'Hello Eden Highlands Hotel, I would like to check room availability and rates.'
    );
    window.open(`https://wa.me/${HOTEL_PHONE_RAW}?text=${msg}`, '_blank');
  };

  const handleCallClick = () => {
    triggerHaptic();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="mobile-sticky-action-bar"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 0, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 280 }}
          className="md:hidden fixed bottom-0 inset-x-0 z-40 px-4 pt-2.5 pb-[max(env(safe-area-inset-bottom),12px)] bg-[rgba(246,244,238,0.92)] backdrop-blur-lg border-t border-[var(--rule)]/80 shadow-[0_-8px_24px_-4px_rgba(41,37,32,0.08)] pointer-events-auto"
        >
          <div className="flex items-center gap-2 max-w-md mx-auto">
            {/* Quick Call Button */}
            <a
              id="mobile-bar-btn-call"
              href={`tel:${HOTEL_PHONE_RAW}`}
              onClick={handleCallClick}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-[var(--card-cream)] text-[var(--ink)] border border-[var(--rule)] hover:border-[var(--green-dark)] active:scale-95 transition-all"
              aria-label={`Call front desk at ${HOTEL_PHONE}`}
              title="Call Front Desk"
            >
              <Phone size={18} className="text-[var(--green-dark)]" />
            </a>

            {/* Quick WhatsApp Concierge Button */}
            <button
              type="button"
              id="mobile-bar-btn-whatsapp"
              onClick={handleWhatsAppClick}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-[var(--card-cream)] text-[var(--ink)] border border-[var(--rule)] hover:border-[var(--green-dark)] active:scale-95 transition-all cursor-pointer"
              aria-label="WhatsApp Concierge"
              title="WhatsApp Concierge"
            >
              <MessageCircle size={18} className="text-[var(--terra)]" />
            </button>

            {/* Primary Action Button */}
            <button
              type="button"
              id="mobile-bar-btn-book"
              onClick={handleBookingClick}
              className="flex-1 min-h-[44px] px-4 py-2.5 rounded-full bg-[var(--green-dark)] text-[#fdfcf9] font-sans font-medium text-[13.5px] tracking-wide flex items-center justify-center gap-2 shadow-sm hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer select-none"
            >
              <Calendar size={15} strokeWidth={2} />
              <span>Call or WhatsApp to Book</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
