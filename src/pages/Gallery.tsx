import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2, Instagram, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_DATA, HOTEL_INSTAGRAM, HOTEL_INSTAGRAM_HANDLE } from '../data/hotelData';
import { GalleryItem } from '../types';
import PlaceholderImg from '../components/PlaceholderImg';
import { Reveal, StaggerItem, CountUp } from '../components/Motion';
import GenerativeBackdrop from '../components/GenerativeBackdrop';
import TiltCard from '../components/TiltCard';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'rooms' | 'spaces' | 'grounds' | 'lifestyle'>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems = activeFilter === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === activeFilter);

  const currentIndex = lightboxItem
    ? filteredItems.findIndex(i => i.id === lightboxItem.id)
    : -1;

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setLightboxItem(filteredItems[currentIndex - 1]);
    } else {
      setLightboxItem(filteredItems[filteredItems.length - 1]);
    }
  }, [currentIndex, filteredItems]);

  const handleNext = useCallback(() => {
    if (currentIndex < filteredItems.length - 1) {
      setLightboxItem(filteredItems[currentIndex + 1]);
    } else {
      setLightboxItem(filteredItems[0]);
    }
  }, [currentIndex, filteredItems]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxItem) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setLightboxItem(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxItem, handlePrev, handleNext]);

  const filterTabs = [
    { id: 'all', label: 'All Photographs' },
    { id: 'rooms', label: 'Rooms & Suites' },
    { id: 'spaces', label: 'Spaces & Facilities' },
    { id: 'grounds', label: 'Grounds & Arrival' },
    { id: 'lifestyle', label: 'Rituals & Lifestyle' }
  ];

  return (
    <div className="py-8 sm:py-10 relative" id="gallery-page">
      {/* Generative Highland Contour Line Backdrop behind header */}
      <GenerativeBackdrop variant="hero" seed={77} className="opacity-40" />

      <div className="wrap relative z-10">
        {/* Header */}
        <Reveal className="mb-8 sm:mb-10 max-w-3xl" id="gallery-header">
          <span className="eyebrow">Visual Archive</span>
          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-normal leading-tight mb-4">
            A quiet visual journey through Eden Highlands.
          </h1>
          <p className="text-[var(--ink-soft)] text-base sm:text-lg leading-relaxed max-w-[42ch]">
            Moments of light, crafted woodwork, self-contained living, and highland calm across our property on the TANZAM Highway in Mbeya.
          </p>
        </Reveal>

        {/* Filter Pills with horizontal scroll on small screens */}
        <Reveal delay={0.08} className="flex overflow-x-auto no-scrollbar items-center gap-2 mb-8 sm:mb-10 pb-4 border-b border-[var(--rule)]/60 -mx-4 px-4 sm:mx-0 sm:px-0" id="gallery-filters">
          {filterTabs.map(tab => (
            <button
              key={tab.id}
              id={`gallery-filter-${tab.id}`}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`pill-btn text-xs font-medium cursor-pointer transition-all whitespace-nowrap shrink-0 min-h-[44px] ${activeFilter === tab.id ? 'bg-[var(--green-dark)] text-white border-[var(--green-dark)] hover:bg-[var(--green-dark)]' : 'hover:bg-white'}`}
            >
              {tab.label}
            </button>
          ))}
        </Reveal>

        {/* Masonry / Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 mb-16" id="gallery-grid">
          {filteredItems.map((item, idx) => {
            let colSpan = 'lg:col-span-6';
            if (item.aspect === 'wide') colSpan = 'lg:col-span-12';
            else if (item.aspect === 'portrait') colSpan = 'lg:col-span-4';
            else if (item.aspect === 'square') colSpan = 'lg:col-span-4';
            else if (item.aspect === 'landscape') colSpan = 'lg:col-span-8';

            return (
              <StaggerItem
                key={item.id}
                index={idx % 4}
                stepDelay={0.07}
                className={`${colSpan}`}
                id={`gallery-item-${item.id}`}
              >
                <TiltCard
                  tint={item.bgVariant as any}
                  maxTilt={3.5}
                  className="w-full h-full rounded-2xl"
                >
                  <motion.div
                    layoutId={`gallery-card-${item.id}`}
                    onClick={() => setLightboxItem(item)}
                    className="group relative rounded-2xl overflow-hidden cursor-pointer h-full transition-all duration-300 active:scale-[0.98] hover:-translate-y-1 hover:shadow-lg border border-[var(--rule)]/60"
                  >
                    <PlaceholderImg
                      variant={item.bgVariant}
                      caption={item.caption}
                      subtitle={item.subtitle}
                      aspect={item.aspect}
                      className="min-h-[260px] sm:min-h-[320px] transition-transform duration-500 group-hover:scale-[1.015]"
                    >
                      {/* Interactive Hover / Tap Indicator */}
                      <div className="absolute top-3.5 right-3.5 z-20 p-2 rounded-full bg-black/50 text-white backdrop-blur-md shadow-sm sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300">
                        <Maximize2 size={14} />
                      </div>

                      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-black/70 via-black/35 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus:opacity-100 transition-all duration-300 flex flex-col justify-end z-10 pointer-events-none">
                        <div className="text-white text-xs sm:text-sm font-serif mb-1 line-clamp-1">
                          {item.title}
                        </div>
                        <div className="text-white/80 text-[11px] font-sans flex items-center justify-between">
                          <span className="line-clamp-1">{item.caption}</span>
                          <span className="flex items-center gap-1 text-[10px] text-white/90 uppercase tracking-wider shrink-0 ml-2">
                            <Eye size={11} /> View
                          </span>
                        </div>
                      </div>
                    </PlaceholderImg>
                  </motion.div>
                </TiltCard>
              </StaggerItem>
            );
          })}
        </div>

        {/* Instagram Follow Bar */}
        <Reveal className="p-6 sm:p-8 bg-[var(--card-cream)] rounded-2xl border border-[var(--rule)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden" id="gallery-instagram-banner">
          <GenerativeBackdrop variant="footer" seed={101} className="opacity-30" />
          <div className="relative z-10">
            <span className="eyebrow">Community & Stories</span>
            <h3 className="text-xl sm:text-2xl font-serif mb-2">More moments on Instagram</h3>
            <p className="text-xs text-[var(--ink-soft)] max-w-md leading-relaxed">
              Over <CountUp value="1,900+" /> guests and travellers follow our journey on Instagram. Discover recent photography, garden updates, and highway travel tips.
            </p>
          </div>
          <a
            id="btn-gallery-instagram"
            href={HOTEL_INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            className="pill-btn font-medium relative z-10 w-full sm:w-auto justify-center min-h-[44px]"
            style={{
              background: 'var(--green-dark)',
              color: '#fdfcf9',
              borderColor: 'var(--green-dark)'
            }}
          >
            <Instagram size={15} className="mr-2" />
            <span>Follow {HOTEL_INSTAGRAM_HANDLE}</span>
          </a>
        </Reveal>
      </div>

      {/* Lightbox Modal with Gestures and Full Controls */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            id="gallery-lightbox"
            className="fixed inset-0 z-50 bg-[rgba(41,37,32,0.88)] backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxItem(null)}
          >
            <motion.div
              layoutId={`gallery-card-${lightboxItem.id}`}
              className="relative max-w-4xl w-full bg-[var(--cream)] rounded-2xl p-5 sm:p-8 border border-[var(--rule)] shadow-2xl overflow-hidden max-h-[95vh] flex flex-col justify-between"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={e => e.stopPropagation()}
            >
              {/* Header bar inside modal */}
              <div className="flex items-center justify-between mb-3">
                <div className="pr-8">
                  <div className="flex items-center gap-2">
                    <span className="eyebrow mb-0 text-[10px]">Archive</span>
                    <span className="text-[11px] font-sans px-2 py-0.5 rounded-full bg-[var(--rule)]/60 text-[var(--ink-soft)]">
                      {currentIndex + 1} / {filteredItems.length}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif text-[var(--ink)] mt-1">
                    {lightboxItem.title}
                  </h3>
                </div>

                <button
                  id="btn-close-lightbox"
                  onClick={() => setLightboxItem(null)}
                  className="w-11 h-11 flex items-center justify-center text-[var(--ink)] hover:bg-black/10 active:scale-95 rounded-full transition-all shrink-0 cursor-pointer"
                  aria-label="Close Lightbox"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Swipeable Photo Container */}
              <motion.div
                className="relative overflow-hidden rounded-xl my-2 touch-pan-y"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_e, { offset, velocity }) => {
                  const swipeThreshold = 50;
                  if (offset.x < -swipeThreshold || velocity.x < -400) {
                    handleNext();
                  } else if (offset.x > swipeThreshold || velocity.x > 400) {
                    handlePrev();
                  }
                }}
              >
                <PlaceholderImg
                  variant={lightboxItem.bgVariant}
                  caption={lightboxItem.caption}
                  subtitle={lightboxItem.subtitle}
                  className="min-h-[280px] sm:min-h-[420px] rounded-xl"
                  disableAnimation
                />

                {/* Left/Right overlay nav buttons */}
                <button
                  type="button"
                  id="btn-lightbox-prev"
                  onClick={handlePrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-black/45 hover:bg-black/70 active:scale-95 text-white backdrop-blur-sm transition-all cursor-pointer"
                  aria-label="Previous photograph"
                >
                  <ChevronLeft size={22} />
                </button>

                <button
                  type="button"
                  id="btn-lightbox-next"
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-black/45 hover:bg-black/70 active:scale-95 text-white backdrop-blur-sm transition-all cursor-pointer"
                  aria-label="Next photograph"
                >
                  <ChevronRight size={22} />
                </button>
              </motion.div>

              {/* Lightbox Footer Details */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-3 text-xs text-[var(--ink-soft)]">
                <span className="line-clamp-1">{lightboxItem.subtitle || 'Eden Highlands Hotel, TANZAM Highway, Mbeya'}</span>
                <span className="font-semibold uppercase tracking-wider text-[var(--terra)] text-[11px]">
                  TANZAM Highway · Mbeya
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

