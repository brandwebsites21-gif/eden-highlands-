import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import {
  Bed,
  Users,
  Utensils,
  Wind,
  Wifi,
  Car,
  Check,
  Phone,
  ArrowRight
} from 'lucide-react';
import { ROOMS_DATA, HOTEL_PHONE, HOTEL_PHONE_RAW } from '../data/hotelData';
import PlaceholderImg from '../components/PlaceholderImg';
import { Reveal, StaggerItem, SectionDivider } from '../components/Motion';
import GenerativeBackdrop from '../components/GenerativeBackdrop';
import TiltCard from '../components/TiltCard';
import DrawInIcon from '../components/DrawInIcon';

interface LayoutContext {
  openBooking: (room?: string) => void;
}

export default function Rooms() {
  const { openBooking } = useOutletContext<LayoutContext>();

  return (
    <div className="py-10 relative" id="rooms-page">
      {/* Generative Highland Contour Line Backdrop */}
      <GenerativeBackdrop variant="hero" seed={33} className="opacity-45" />

      <div className="wrap relative z-10">
        {/* Page Hero */}
        <Reveal className="mb-14 max-w-3xl" id="rooms-page-hero">
          <span className="eyebrow">Rooms & Suites</span>
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-normal leading-tight mb-4">
            Sanctuaries of quiet comfort with private in-room kitchens.
          </h1>
          <p className="text-[var(--ink-soft)] text-base sm:text-lg leading-relaxed">
            Every room at Eden Highlands Hotel is designed as a fully self-contained haven. Whether pausing along the TANZAM Highway or resting during southern highlands exploration, enjoy quiet climate control, in-room cooking, and secure parking.
          </p>
        </Reveal>

        {/* Room Catalogue */}
        <div className="flex flex-col gap-12 mb-16" id="rooms-catalogue">
          {ROOMS_DATA.map((room, idx) => (
            <StaggerItem
              key={room.id}
              index={idx}
              stepDelay={0.08}
              id={room.id}
              className="w-full"
            >
              <TiltCard tint={room.bgVariant as any} maxTilt={2.5} className="w-full rounded-2xl">
                <div className="border border-[var(--rule)] bg-[var(--card-cream)] rounded-2xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Photo Tile */}
              <div className="lg:col-span-5 h-full">
                <PlaceholderImg
                  variant={room.bgVariant}
                  caption={room.imageCaption}
                  subtitle={room.highlight}
                  className="h-full min-h-[260px] sm:min-h-[300px] rounded-xl shadow-inner"
                />
              </div>

              {/* Room Details */}
              <div className="lg:col-span-7 flex flex-col justify-between h-full">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="eyebrow mb-0 text-[10.5px]">Eden Highlands Hotel</span>
                    {room.highlight && (
                      <span className="text-xs font-semibold uppercase tracking-wider text-[var(--terra)] bg-[var(--card-pink)] px-3 py-1 rounded-full">
                        {room.highlight}
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-serif mb-2">
                    {room.name}
                  </h2>

                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-xl sm:text-2xl font-sans text-[var(--green-dark)] font-semibold">
                      {room.price}
                    </span>
                    {room.priceNote && (
                      <span className="text-xs text-[var(--ink-soft)] font-sans">
                        {room.priceNote}
                      </span>
                    )}
                  </div>

                  <p className="text-[var(--ink-soft)] text-sm sm:text-[14.5px] leading-relaxed mb-6">
                    {room.description}
                  </p>

                  {/* Room Specs Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-white/60 border border-[var(--rule)]/60 text-xs text-[var(--ink-soft)]">
                    <div className="flex items-center gap-2">
                      <DrawInIcon icon={Bed} size={15} className="text-[var(--green-dark)] shrink-0" />
                      <span>{room.specs.bed}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DrawInIcon icon={Users} size={15} className="text-[var(--green-dark)] shrink-0" />
                      <span>{room.specs.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DrawInIcon icon={Utensils} size={15} className="text-[var(--green-dark)] shrink-0" />
                      <span>{room.specs.kitchen}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DrawInIcon icon={Wind} size={15} className="text-[var(--green-dark)] shrink-0" />
                      <span>{room.specs.climate}</span>
                    </div>
                  </div>

                  {/* Amenity Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.amenities.map((am, amIdx) => (
                      <span
                        key={amIdx}
                        className="inline-flex items-center gap-1 text-xs bg-[var(--card-tan)]/60 text-[var(--ink)] px-2.5 py-1 rounded-full"
                      >
                        <Check size={12} className="text-[var(--green-dark)]" />
                        {am}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Booking CTA Bar */}
                <div className="pt-4 border-t border-[var(--rule)]/60 flex flex-wrap items-center justify-between gap-4">
                  <button
                    id={`btn-book-${room.id}`}
                    onClick={() => openBooking(room.name)}
                    className="pill-btn cursor-pointer font-medium"
                    style={{
                      background: 'var(--green-dark)',
                      color: '#fdfcf9',
                      borderColor: 'var(--green-dark)'
                    }}
                  >
                    <span>Check availability</span>
                    <ArrowRight size={14} className="ml-1" />
                  </button>

                  <a
                    id={`btn-inquire-${room.id}`}
                    href={`tel:${HOTEL_PHONE_RAW}`}
                    className="text-xs text-[var(--ink-soft)] hover:text-[var(--ink)] flex items-center gap-1.5"
                  >
                    <Phone size={13} />
                    <span>Inquire direct: {HOTEL_PHONE}</span>
                  </a>
                </div>
              </div>
            </div>
            </TiltCard>
          </StaggerItem>
          ))}
        </div>

        {/* Supporting Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" id="rooms-supporting-cards">
          <StaggerItem index={0} className="info-card pink border border-[var(--rule)]/40 flex flex-col justify-between" id="card-rooms-families">
            <div>
              <span className="eyebrow">For families</span>
              <h3>Kid-friendly stays</h3>
              <p>
                Spacious layouts with self-contained cooking freedom make travelling with children easy, safe, and calm.
              </p>
            </div>
            <span className="text-xs font-semibold text-[var(--terra)] mt-4 block">
              Highland family suites available
            </span>
          </StaggerItem>

          <StaggerItem index={1} className="info-card sage border border-[var(--rule)]/40 flex flex-col justify-between" id="card-rooms-fitness">
            <div>
              <span className="eyebrow">Stay active</span>
              <h3>Fitness center</h3>
              <p>
                Maintain workout routines on the road with our publicly confirmed on-site fitness facilities.
              </p>
            </div>
            <span className="text-xs font-semibold text-[var(--green-dark)] mt-4 block">
              Complimentary for all guests
            </span>
          </StaggerItem>

          <StaggerItem index={2} className="other-card border border-[var(--rule)]/40 flex flex-col justify-between" id="card-rooms-groups">
            <div>
              <span className="eyebrow">Custom requests</span>
              <h3 className="font-serif text-xl">Special Group Stays</h3>
              <p>
                Coordinating a multi-vehicle highway convoy, family milestone, or extended business engagement? Contact us directly.
              </p>
            </div>
            <a
              id="btn-rooms-group-call"
              href={`tel:${HOTEL_PHONE_RAW}`}
              className="text-xs font-semibold text-[var(--green-dark)] hover:underline flex items-center gap-1 mt-4"
            >
              <Phone size={13} />
              <span>Call Front Desk: {HOTEL_PHONE}</span>
            </a>
          </StaggerItem>
        </div>

        {/* What is Included Section */}
        <Reveal className="p-8 bg-[var(--card-cream)] rounded-2xl border border-[var(--rule)] mb-12" id="rooms-standards-box">
          <span className="eyebrow">Standards in every room</span>
          <h3 className="text-2xl font-serif mb-6">Guaranteed with every stay</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <div>
              <div className="font-semibold mb-1 text-[var(--ink)] flex items-center gap-1.5">
                <Utensils size={15} className="text-[var(--terra)]" />
                Private Kitchenette
              </div>
              <p className="text-xs text-[var(--ink-soft)]">
                Cookware, stovetop, refrigerator, and coffee setup in all rooms.
              </p>
            </div>

            <div>
              <div className="font-semibold mb-1 text-[var(--ink)] flex items-center gap-1.5">
                <Wind size={15} className="text-[var(--terra)]" />
                Air Conditioning
              </div>
              <p className="text-xs text-[var(--ink-soft)]">
                Whisper-quiet multi-split climate control in every suite.
              </p>
            </div>

            <div>
              <div className="font-semibold mb-1 text-[var(--ink)] flex items-center gap-1.5">
                <Wifi size={15} className="text-[var(--terra)]" />
                Free Fiber Wi-Fi
              </div>
              <p className="text-xs text-[var(--ink-soft)]">
                Uninterrupted internet connection across rooms and common grounds.
              </p>
            </div>

            <div>
              <div className="font-semibold mb-1 text-[var(--ink)] flex items-center gap-1.5">
                <Car size={15} className="text-[var(--terra)]" />
                Guarded Parking
              </div>
              <p className="text-xs text-[var(--ink-soft)]">
                Gated, 24-hour monitored parking directly off the TANZAM Highway.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
