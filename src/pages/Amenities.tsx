import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import {
  Utensils,
  Wind,
  Car,
  Wifi,
  Dumbbell,
  Users,
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { AMENITIES_DATA, HOTEL_PHONE_RAW } from '../data/hotelData';
import { Reveal, StaggerItem, SectionDivider } from '../components/Motion';

interface LayoutContext {
  openBooking: (room?: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Utensils,
  Wind,
  Car,
  Wifi,
  Dumbbell,
  Users,
  Clock,
  Sparkles
};

export default function Amenities() {
  const { openBooking } = useOutletContext<LayoutContext>();

  return (
    <div className="py-10" id="amenities-page">
      <div className="wrap">
        {/* Header */}
        <Reveal className="mb-14 max-w-3xl" id="amenities-header">
          <span className="eyebrow">Hotel Amenities & Comforts</span>
          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-normal leading-tight mb-4">
            Designed for genuine independence and effortless rest.
          </h1>
          <p className="text-[var(--ink-soft)] text-base sm:text-lg leading-relaxed">
            From private in-room kitchens to gated highway parking and an on-site fitness room, every detail at Eden Highlands Hotel ensures seamless comfort for families, business travellers, and road wanderers.
          </p>
        </Reveal>

        {/* 1. Full Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" id="amenities-full-grid">
          {AMENITIES_DATA.map((item, idx) => {
            const Icon = iconMap[item.iconName] || Sparkles;

            if (item.cardType === 'textcard') {
              return (
                <StaggerItem
                  key={item.id}
                  index={idx}
                  stepDelay={0.06}
                  className="am-textcard"
                  id={`amenity-card-${item.id}`}
                >
                  <div>
                    <h3 className="flex items-center gap-2">
                      <Icon size={18} className="text-[var(--terra)]" />
                      {item.title}
                    </h3>
                    <p>{item.desc}</p>
                  </div>
                  <div>
                    <div className="tag">Confirmed standard</div>
                    <p className="text-xs text-[var(--ink-soft)] font-medium">
                      Equipped in every room & suite
                    </p>
                  </div>
                </StaggerItem>
              );
            }

            return (
              <StaggerItem
                key={item.id}
                index={idx}
                stepDelay={0.06}
                className="am-card"
                id={`amenity-card-${item.id}`}
              >
                <div
                  className={`thumb placeholder-img ${item.bgVariant === 'sage' ? 'sage' : item.bgVariant === 'pink' ? 'bg-[var(--card-pink)]' : item.bgVariant === 'cream' ? 'bg-[var(--card-cream)]' : 'bg-[var(--card-tan)]'}`}
                  style={{ minHeight: 0 }}
                >
                  <span className="cap">{item.caption || item.title}</span>
                </div>
                <h3 className="flex items-center gap-2">
                  <Icon size={16} className="text-[var(--green-dark)]" />
                  {item.title}
                </h3>
                <div className="desc">{item.desc}</div>
              </StaggerItem>
            );
          })}
        </div>

        {/* Deep Dive Feature Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" id="amenities-deep-dives">
          {/* Feature 1: The Self-Contained Kitchen */}
          <Reveal className="bg-[var(--card-cream)] border border-[var(--rule)] rounded-2xl p-8 flex flex-col justify-between" id="feature-kitchen">
            <div>
              <span className="eyebrow">In-Room Independence</span>
              <h3 className="text-2xl font-serif mb-3">Your Private Kitchenette</h3>
              <p className="text-sm text-[var(--ink-soft)] leading-relaxed mb-4">
                Cook on your own schedule without relying on rigid hotel dining hours. Whether heating baby food, preparing a quiet dinner after hours of driving, or brewing local Mbeya Arabica coffee at sunrise, your private kitchenette is fully supplied.
              </p>
              <ul className="text-xs text-[var(--ink)] space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--green-dark)]" />
                  Electric induction range & cookware sets
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--green-dark)]" />
                  Refrigerator for cold drinks and highway provisions
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--green-dark)]" />
                  Electric kettle, glassware, and tableware
                </li>
              </ul>
            </div>
            <Link to="/rooms" className="text-xs font-semibold text-[var(--green-dark)] hover:underline flex items-center gap-1">
              <span>View Self-Contained Rooms</span>
              <ArrowRight size={13} />
            </Link>
          </Reveal>

          {/* Feature 2: Highway Access & Security */}
          <Reveal delay={0.08} className="bg-[var(--card-sage)] border border-[var(--rule)] rounded-2xl p-8 flex flex-col justify-between" id="feature-highway">
            <div>
              <span className="eyebrow">Road Traveller Focus</span>
              <h3 className="text-2xl font-serif mb-3">TANZAM Highway Ease & Parking</h3>
              <p className="text-sm text-[var(--ink-soft)] leading-relaxed mb-4">
                Located approximately 700 meters from the Mafiati junction, Eden Highlands provides frictionless arrival directly from the highway without navigating complex inner-city congestion.
              </p>
              <ul className="text-xs text-[var(--ink)] space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--green-dark)]" />
                  Gated, guarded parking for cars, safari rigs, and trailers
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--green-dark)]" />
                  24-Hour arrival support for late-night highway check-ins
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--green-dark)]" />
                  Quick refueling and grocery access at Mafiati
                </li>
              </ul>
            </div>
            <a href={`tel:${HOTEL_PHONE_RAW}`} className="text-xs font-semibold text-[var(--green-dark)] hover:underline flex items-center gap-1">
              <span>Call Front Desk for Night Arrival</span>
              <ArrowRight size={13} />
            </a>
          </Reveal>
        </div>

        {/* Section Divider */}
        <div className="mb-12">
          <SectionDivider id="amenities-cta-divider" />
        </div>

        {/* CTA Banner */}
        <Reveal className="bg-[var(--card-pink)] border border-[var(--rule)]/60 rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6" id="amenities-cta-banner">
          <div>
            <span className="eyebrow">Experience the difference</span>
            <h3 className="text-2xl font-serif mb-2">Ready to plan your Mbeya stay?</h3>
            <p className="text-xs sm:text-sm text-[var(--ink-soft)] max-w-lg">
              Contact our team directly on WhatsApp or telephone to check availability and confirm your reservation.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              id="btn-amenities-check-avail"
              onClick={() => openBooking('Standard Double Room')}
              className="btn btn-primary text-xs"
            >
              <span>Check Availability</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
