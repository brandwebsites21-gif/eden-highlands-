import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { MapPin, Navigation, Compass, Sparkles, Phone } from 'lucide-react';
import { HOTEL_PHONE, HOTEL_PHONE_RAW, HOTEL_LOCATION } from '../data/hotelData';

interface InteractiveMapProps {
  className?: string;
  id?: string;
}

export default function InteractiveMap({ className = '', id }: InteractiveMapProps) {
  const shouldReduceMotion = useReducedMotion();
  const [activePin, setActivePin] = useState<'hotel' | 'mafiati' | 'airport' | 'uyole'>('hotel');
  const [isHovered, setIsHovered] = useState(false);

  const waypoints = [
    {
      id: 'hotel' as const,
      name: 'Eden Highlands Hotel',
      coords: 'x: 52%, y: 48%',
      x: 52,
      y: 48,
      desc: 'Sanctuary lodging with private kitchens & secure parking',
      tag: 'Our Property'
    },
    {
      id: 'mafiati' as const,
      name: 'Mafiati Junction',
      coords: 'x: 32%, y: 56%',
      x: 32,
      y: 56,
      desc: '~700 meters away (2 mins drive) · Highway services & fruit stalls',
      tag: '700m Away'
    },
    {
      id: 'uyole' as const,
      name: 'Uyole Highway Junction',
      coords: 'x: 78%, y: 38%',
      x: 78,
      y: 38,
      desc: 'Eastern gateway connecting to Iringa and Dar es Salaam',
      tag: '8 km East'
    },
    {
      id: 'airport' as const,
      name: 'Songwe Airport (HTGW)',
      coords: 'x: 18%, y: 22%',
      x: 18,
      y: 22,
      desc: '~35 km (35 mins) via northern bypass / TANZAM corridor',
      tag: '35 km Northwest'
    }
  ];

  const selectedWaypoint = waypoints.find(w => w.id === activePin) || waypoints[0];

  return (
    <div id={id} className={`bg-[var(--card-tan)] border border-[var(--rule)] rounded-2xl p-6 sm:p-8 overflow-hidden relative ${className}`}>
      {/* Map Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 relative z-10">
        <div>
          <span className="eyebrow text-[var(--ink)] mb-1 flex items-center gap-1.5">
            <Compass size={13} className="text-[var(--terra)]" />
            Interactive Highway Map
          </span>
          <h3 className="text-xl sm:text-2xl font-serif text-[var(--ink)]">
            TANZAM Corridor & Surrounds
          </h3>
        </div>
        <div className="text-xs text-[var(--ink-soft)] bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[var(--rule)]/60">
          Click markers to inspect highway waypoints
        </div>
      </div>

      {/* Visual Map Canvas Card */}
      <motion.div
        className="relative bg-[var(--cream)] rounded-xl border border-[var(--rule)]/80 overflow-hidden shadow-inner aspect-[16/10] sm:aspect-[16/8] min-h-[300px] cursor-crosshair"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{
          scale: !shouldReduceMotion && isHovered ? 1.015 : 1
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Procedural Topographic Elevation Vector Background */}
        <svg
          className="absolute inset-0 w-full h-full text-[var(--rule)] pointer-events-none opacity-40"
          viewBox="0 0 800 450"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Elevation contour ripples */}
          <path d="M 0,90 Q 200,40 400,110 T 800,80" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M 0,160 Q 250,110 500,190 T 800,140" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 0,260 Q 180,210 450,280 T 800,240" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M 0,340 Q 300,280 580,360 T 800,320" stroke="currentColor" strokeWidth="1.5" />
          
          {/* Mbeya Mountain Peak Silhouette Silhouette */}
          <path
            d="M 60,180 L 140,80 L 220,170 L 320,60 L 420,180"
            stroke="var(--green-dark)"
            strokeWidth="1.2"
            strokeOpacity="0.2"
            fill="none"
          />
          <text x="320" y="50" fill="var(--ink-soft)" fontSize="10" opacity="0.7" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontWeight="500">
            ▲ Mbeya Peak (2,835m)
          </text>
        </svg>

        {/* The TANZAM Highway Road Line (A104 / T1) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 800 450"
          fill="none"
          aria-hidden="true"
        >
          {/* Road casing */}
          <path
            d="M 20,400 C 180,380 260,260 420,220 C 580,180 660,160 780,140"
            stroke="#c8c0b0"
            strokeWidth="12"
            strokeLinecap="round"
          />
          {/* Road asphalt */}
          <path
            d="M 20,400 C 180,380 260,260 420,220 C 580,180 660,160 780,140"
            stroke="#e2ddd2"
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Road center dash */}
          <path
            d="M 20,400 C 180,380 260,260 420,220 C 580,180 660,160 780,140"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeDasharray="8 8"
            strokeLinecap="round"
          />
          <text x="250" y="325" fill="var(--ink-soft)" fontSize="10" fontWeight="600" letterSpacing="0.1em" opacity="0.75" transform="rotate(-30 250 325)">
            TANZAM HIGHWAY (A104 / T1)
          </text>
        </svg>

        {/* Interactive Waypoints */}
        {waypoints.map(point => {
          const isSelected = activePin === point.id;
          const isHotel = point.id === 'hotel';

          return (
            <button
              key={point.id}
              id={`map-pin-${point.id}`}
              onClick={() => setActivePin(point.id)}
              style={{ left: `${point.x}%`, top: `${point.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group focus:outline-none cursor-pointer"
            >
              {/* Hotel Pin with the single allowed idle bobbing animation */}
              {isHotel ? (
                <div className="relative flex flex-col items-center">
                  <motion.div
                    className="w-10 h-10 rounded-full bg-[var(--green-dark)] text-white flex items-center justify-center shadow-lg border-2 border-white relative z-10"
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : {
                            y: [0, -4, 0]
                          }
                    }
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  >
                    <Sparkles size={18} />
                  </motion.div>
                  {/* Subtle pulsing ground shadow */}
                  <motion.div
                    className="w-5 h-1.5 rounded-full bg-black/20 blur-[1px] mt-1"
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : {
                            scale: [1, 0.75, 1],
                            opacity: [0.3, 0.15, 0.3]
                          }
                    }
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />
                  <div className="absolute top-12 whitespace-nowrap bg-[var(--ink)] text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full shadow-md pointer-events-none">
                    Eden Highlands Hotel
                  </div>
                </div>
              ) : (
                /* Other Waypoint Pins */
                <div className="relative flex flex-col items-center">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shadow-sm border-2 transition-all ${
                      isSelected
                        ? 'bg-[var(--terra)] text-white border-white scale-110'
                        : 'bg-white text-[var(--ink-soft)] border-[var(--rule)] hover:border-[var(--ink)] hover:scale-105'
                    }`}
                  >
                    <MapPin size={14} />
                  </div>
                  <div
                    className={`absolute top-8 whitespace-nowrap text-[10px] font-medium px-2 py-0.5 rounded-md shadow-sm pointer-events-none transition-opacity ${
                      isSelected
                        ? 'bg-[var(--card-cream)] text-[var(--ink)] border border-[var(--rule)] opacity-100'
                        : 'bg-white/90 text-[var(--ink-soft)] opacity-80 group-hover:opacity-100'
                    }`}
                  >
                    {point.name}
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </motion.div>

      {/* Selected Waypoint Info Bar */}
      <div className="mt-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-[var(--rule)]/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--terra)] bg-[var(--card-pink)] px-2 py-0.5 rounded">
              {selectedWaypoint.tag}
            </span>
            <h4 className="font-serif text-base text-[var(--ink)]">{selectedWaypoint.name}</h4>
          </div>
          <p className="text-xs text-[var(--ink-soft)]">{selectedWaypoint.desc}</p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            id="btn-map-call-desk"
            href={`tel:${HOTEL_PHONE_RAW}`}
            className="pill-btn text-xs font-medium bg-[var(--green-dark)] text-white border-[var(--green-dark)] hover:bg-[var(--green-dark)]/90"
          >
            <Phone size={12} className="mr-1 inline" />
            <span>Call {HOTEL_PHONE}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
