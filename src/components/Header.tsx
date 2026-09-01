import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { Calendar, User, Phone, Menu, X, ArrowRight, MapPin } from 'lucide-react';
import { HOTEL_PHONE, HOTEL_PHONE_RAW, HOTEL_LOCATION } from '../data/hotelData';

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  const { scrollY } = useScroll();

  // Smooth interpolated values from 0px to 45px scroll
  const headerBg = useTransform(
    scrollY,
    [0, 45],
    ['rgba(247, 244, 238, 0.85)', 'rgba(247, 244, 238, 0.97)']
  );

  const headerBorder = useTransform(
    scrollY,
    [0, 45],
    ['rgba(224, 217, 206, 0.45)', 'rgba(224, 217, 206, 1)']
  );

  const headerShadow = useTransform(
    scrollY,
    [0, 45],
    ['0 0 0 rgba(0, 0, 0, 0)', '0 4px 20px -2px rgba(41, 37, 32, 0.05)']
  );

  const headerPadding = useTransform(
    scrollY,
    [0, 45],
    ['16px', '12px']
  );

  // Close mobile drawer upon route navigation and manage body scroll lock
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navLinks = [
    { to: '/rooms', label: 'Rooms & Suites' },
    { to: '/amenities', label: 'Amenities' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/about', label: 'About Us' },
    { to: '/experiences', label: 'Experiences' },
    { to: '/journal', label: 'Journal' },
    { to: '/contact', label: 'Location & Contact' },
  ];

  const handleConciergeClick = () => {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try { navigator.vibrate(10); } catch { /* ignore */ }
    }
    const msg = encodeURIComponent(
      "Hello Eden Highlands Hotel, I would like to inquire with your concierge team."
    );
    window.open(`https://wa.me/${HOTEL_PHONE_RAW}?text=${msg}`, '_blank');
  };

  return (
    <>
      <motion.header
        id="site-header"
        style={
          shouldReduceMotion
            ? {
                backgroundColor: 'var(--cream)',
                borderBottomColor: 'var(--rule)',
                borderBottomWidth: '1px',
                borderBottomStyle: 'solid',
                paddingTop: '14px',
                paddingBottom: '14px'
              }
            : {
                backgroundColor: headerBg,
                borderBottomColor: headerBorder,
                borderBottomWidth: '1px',
                borderBottomStyle: 'solid',
                boxShadow: headerShadow,
                paddingTop: headerPadding,
                paddingBottom: headerPadding
              }
        }
        className="sticky top-0 z-40 backdrop-blur-md transition-colors"
      >
        <div className="wrap flex items-center justify-between gap-4 sm:gap-6">
          {/* Brand / Logo */}
          <Link
            to="/"
            id="header-brand-logo"
            className="font-serif italic text-xl sm:text-2xl lg:text-[25px] text-[var(--ink)] tracking-tight hover:opacity-85 transition-opacity shrink-0 select-none py-1"
          >
            Eden Highlands Hotel
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            id="header-desktop-nav"
            className="hidden xl:flex items-center gap-7 2xl:gap-8 text-[13.5px] text-[var(--ink-soft)]"
            aria-label="Main Navigation"
          >
            {navLinks.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  id={`nav-link-${item.to.replace('/', '')}`}
                  className={`transition-colors whitespace-nowrap py-1 ${
                    isActive
                      ? 'text-[var(--ink)] font-medium underline underline-offset-8 decoration-[var(--terra)] decoration-2'
                      : 'text-[var(--ink-soft)] hover:text-[var(--ink)]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right-side Utilities & Actions */}
          <div id="header-actions" className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Calendar Check Rates / Booking Trigger */}
            <button
              type="button"
              id="btn-nav-check-rates"
              onClick={onOpenBooking}
              className="w-11 h-11 flex items-center justify-center text-[var(--ink)] rounded-full hover:bg-[var(--card-cream)] active:scale-95 transition-all cursor-pointer"
              title="Check Rates & Availability"
              aria-label="Check Rates & Availability"
            >
              <Calendar size={19} strokeWidth={1.75} />
            </button>

            {/* Concierge Guest Support */}
            <button
              type="button"
              id="btn-nav-concierge"
              onClick={handleConciergeClick}
              className="w-11 h-11 flex items-center justify-center text-[var(--ink)] rounded-full hover:bg-[var(--card-cream)] active:scale-95 transition-all cursor-pointer"
              title="Concierge & WhatsApp Inquiries"
              aria-label="Concierge & WhatsApp Inquiries"
            >
              <User size={19} strokeWidth={1.75} />
            </button>

            {/* Desktop Call / WhatsApp Pill Button */}
            <a
              id="btn-nav-call"
              href={`tel:${HOTEL_PHONE_RAW}`}
              className="hidden md:inline-flex items-center gap-2 border border-[var(--rule)] bg-white/80 hover:bg-white text-[var(--ink-soft)] hover:text-[var(--green-dark)] hover:border-[var(--green-dark)]/40 rounded-full px-4 py-2 text-[12.5px] font-medium transition-all shadow-2xs"
              title={`Call front desk at ${HOTEL_PHONE}`}
            >
              <Phone size={13} className="text-[var(--green-dark)] shrink-0" />
              <span className="whitespace-nowrap">Call / WhatsApp {HOTEL_PHONE}</span>
            </a>

            {/* Mobile Navigation Toggle Button - 44x44px touch target */}
            <button
              type="button"
              id="btn-mobile-menu-toggle"
              onClick={() => setMobileOpen(true)}
              className="xl:hidden w-11 h-11 flex items-center justify-center text-[var(--ink)] rounded-full hover:bg-[var(--card-cream)] active:scale-95 transition-all cursor-pointer"
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full-Screen Spring-Based Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="xl:hidden fixed inset-0 z-50 flex">
            {/* Backdrop */}
            <motion.div
              id="mobile-drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Drawer Sheet */}
            <motion.div
              id="mobile-navigation-drawer"
              initial={shouldReduceMotion ? { opacity: 0 } : { x: '100%' }}
              animate={shouldReduceMotion ? { opacity: 1 } : { x: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="relative ml-auto w-full max-w-[340px] sm:max-w-md h-full bg-[var(--cream)] shadow-2xl flex flex-col justify-between overflow-y-auto px-6 py-6 border-l border-[var(--rule)]"
            >
              {/* Drawer Top / Header */}
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-[var(--rule)]">
                  <div>
                    <span className="eyebrow mb-0 text-[10px]">Eden Highlands</span>
                    <h3 className="font-serif italic text-xl text-[var(--ink)]">Menu</h3>
                  </div>
                  <button
                    type="button"
                    id="btn-close-mobile-menu"
                    onClick={() => setMobileOpen(false)}
                    className="w-11 h-11 flex items-center justify-center text-[var(--ink)] rounded-full hover:bg-[var(--card-cream)] active:scale-95 transition-all cursor-pointer"
                    aria-label="Close navigation menu"
                  >
                    <X size={22} />
                  </button>
                </div>

                {/* Nav Links with Generous 20px+ Touch Targets */}
                <nav className="flex flex-col py-4" aria-label="Mobile Navigation">
                  {navLinks.map((item) => {
                    const isActive = location.pathname === item.to;
                    return (
                      <Link
                        key={item.to}
                        to={item.to}
                        id={`mobile-nav-link-${item.to.replace('/', '')}`}
                        onClick={() => setMobileOpen(false)}
                        className={`min-h-[50px] py-3.5 border-b border-[var(--rule)]/60 flex items-center justify-between text-[17px] font-sans transition-all active:scale-[0.98] ${
                          isActive
                            ? 'text-[var(--ink)] font-semibold'
                            : 'text-[var(--ink-soft)] hover:text-[var(--ink)]'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ArrowRight
                          size={16}
                          className={isActive ? 'text-[var(--terra)]' : 'text-[var(--ink-soft)]/50'}
                        />
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer Bottom Actions & Direct Contacts */}
              <div className="pt-6 border-t border-[var(--rule)] space-y-4">
                <div className="text-xs text-[var(--ink-soft)] flex items-center gap-1.5">
                  <MapPin size={13} className="text-[var(--terra)] shrink-0" />
                  <span>TANZAM Highway, ~700m from Mafiati, Mbeya</span>
                </div>

                <div className="flex flex-col gap-2.5">
                  <button
                    type="button"
                    id="mobile-drawer-btn-check-rates"
                    onClick={() => {
                      setMobileOpen(false);
                      onOpenBooking();
                    }}
                    className="btn btn-primary justify-center text-[13.5px] w-full min-h-[46px] shadow-sm active:scale-[0.98] transition-transform"
                  >
                    <Calendar size={16} />
                    <span>Check Rates & Availability</span>
                  </button>

                  <a
                    id="mobile-drawer-btn-call-desk"
                    href={`tel:${HOTEL_PHONE_RAW}`}
                    className="btn btn-outline justify-center text-[13.5px] w-full min-h-[46px] bg-white active:scale-[0.98] transition-transform"
                  >
                    <Phone size={15} className="text-[var(--green-dark)]" />
                    <span>Call Desk: {HOTEL_PHONE}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
