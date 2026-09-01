import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sprout,
  CircleDot,
  Heart,
  Flame,
  MapPin,
  ShieldCheck,
  Phone
} from 'lucide-react';
import { VALUES_DATA, HOTEL_PHONE, HOTEL_PHONE_RAW } from '../data/hotelData';
import SectionHead from '../components/SectionHead';
import PlaceholderImg from '../components/PlaceholderImg';
import { Reveal, StaggerItem, CountUp, SectionDivider } from '../components/Motion';

const valueIconMap = {
  'sprout': Sprout,
  'circle-dot': CircleDot,
  'heart': Heart,
  'flame': Flame
};

export default function About() {
  return (
    <div className="py-10" id="about-page">
      <div className="wrap">
        {/* Header */}
        <Reveal className="mb-14 max-w-3xl" id="about-header">
          <span className="eyebrow">Our Story & Philosophy</span>
          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-normal leading-tight mb-4">
            A quiet sanctuary on the southern highlands route.
          </h1>
          <p className="text-[var(--ink-soft)] text-base sm:text-lg leading-relaxed">
            Eden Highlands Hotel was born from a simple belief: long journeys across Tanzania should feel grounded, independent, and restorative.
          </p>
        </Reveal>

        {/* Hero Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20" id="about-narrative-split">
          <Reveal className="lg:col-span-6" id="about-photo-wrap">
            <PlaceholderImg
              variant="tan"
              caption="Highlands Courtyard & Heritage, Eden Highlands Hotel"
              subtitle="TANZAM Highway, ~700m from Mafiati junction"
              className="aspect-[4/3.2] rounded-2xl shadow-sm"
            />
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6 flex flex-col gap-5 text-sm sm:text-base text-[var(--ink-soft)] leading-relaxed" id="about-text-wrap">
            <h2 className="text-2xl sm:text-3xl font-serif text-[var(--ink)] leading-snug">
              It started with a single restored countryside home and a conviction that hospitality should feel like a warm exhale.
            </h2>
            <p>
              Situated approximately 700 meters from Mafiati junction on the TANZAM Highway, our hotel sits in the natural amphitheater of the Mbeya mountain range. At 1,700 meters altitude, the air here is crisp, clear, and fragrant with cedar and mountain tea.
            </p>
            <p>
              Rather than generic corporate rooms, we created self-contained suites where every guest has private cooking facilities, quiet climate control, and generous gated parking. It gives road travellers, business visitors, and families total autonomy over their daily rhythms.
            </p>
          </Reveal>
        </div>

        {/* Core Values Section */}
        <div className="mb-20" id="about-values-section">
          <Reveal>
            <SectionHead
              eyebrow="What guides us"
              title="The principles of our highland home"
            />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES_DATA.map(({ title, desc, iconName }, idx) => {
              const Icon = valueIconMap[iconName] || Sprout;
              return (
                <StaggerItem
                  key={idx}
                  index={idx}
                  className="bg-[var(--card-pink)] border border-[var(--rule)]/50 rounded-2xl p-6 flex flex-col justify-between min-h-[190px]"
                  id={`about-value-card-${idx}`}
                >
                  <div>
                    <div className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center text-[var(--terra)] mb-4">
                      <Icon size={20} strokeWidth={1.6} />
                    </div>
                    <h3 className="font-serif text-lg text-[var(--ink)] mb-2">
                      {title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[var(--ink-soft)] leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </div>
        </div>

        {/* Location & Setting Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20" id="about-setting-section">
          <Reveal className="lg:col-span-7 bg-[var(--card-cream)] border border-[var(--rule)] rounded-2xl p-8 sm:p-10 flex flex-col justify-between" id="about-highway-context">
            <div>
              <span className="eyebrow">Highland Setting</span>
              <h3 className="text-2xl sm:text-3xl font-serif mb-4">Mbeya & the TANZAM Highway</h3>
              <p className="text-sm text-[var(--ink-soft)] leading-relaxed mb-4">
                The TANZAM Highway is one of Africa’s great transcontinental arteries, connecting Dar es Salaam to Zambia, Malawi, and the Congo basin. Passing through Mbeya, travellers experience dramatic escarpments, rolling green tea estates, and active highland trading markets.
              </p>
              <p className="text-sm text-[var(--ink-soft)] leading-relaxed mb-6">
                Eden Highlands was strategically situated to provide effortless access from this route without having to navigate inner-city traffic when arriving late or departing early.
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs text-[var(--ink-soft)] font-medium">
              <MapPin size={15} className="text-[var(--terra)]" />
              <span>~700m from Mafiati Junction · TANZAM Highway</span>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-5 bg-[var(--card-sage)] border border-[var(--rule)] rounded-2xl p-8 sm:p-10 flex flex-col justify-between" id="about-verified-standards">
            <div>
              <span className="eyebrow">Our verified standards</span>
              <h3 className="text-2xl font-serif mb-4">What Makes Stays Restful</h3>
              <ul className="text-xs sm:text-sm text-[var(--ink)] space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <ShieldCheck size={16} className="text-[var(--green-dark)] shrink-0 mt-0.5" />
                  <span><strong><CountUp value="4.3★" /> Google Rating</strong> from verified global travellers</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck size={16} className="text-[var(--green-dark)] shrink-0 mt-0.5" />
                  <span><strong>Kitchens in every room</strong> for independent meal timing</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck size={16} className="text-[var(--green-dark)] shrink-0 mt-0.5" />
                  <span><strong>Gated highway parking</strong> protected 24/7</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck size={16} className="text-[var(--green-dark)] shrink-0 mt-0.5" />
                  <span><strong>High-speed Wi-Fi & Fitness</strong> facilities on-site</span>
                </li>
              </ul>
            </div>
            <Link to="/rooms" className="pill-btn font-medium bg-[var(--green-dark)] text-white border-[var(--green-dark)] w-fit" id="btn-about-view-rooms">
              <span>View Available Rooms</span>
            </Link>
          </Reveal>
        </div>

        {/* Section Divider */}
        <div className="mb-12">
          <SectionDivider id="about-closing-divider" />
        </div>

        {/* Warm Closing Callout */}
        <Reveal className="p-8 sm:p-12 rounded-2xl bg-[var(--card-tan)] border border-[var(--rule)] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left" id="about-closing-banner">
          <div>
            <span className="eyebrow">Welcome to Mbeya</span>
            <h3 className="text-2xl sm:text-3xl font-serif mb-2">Let us welcome you on your journey</h3>
            <p className="text-xs sm:text-sm text-[var(--ink-soft)] max-w-lg">
              Reach out directly to check dates, room arrangements, or ask about our highway location.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              id="btn-about-call"
              href={`tel:${HOTEL_PHONE_RAW}`}
              className="btn btn-primary"
            >
              <Phone size={14} />
              <span>Call / WhatsApp {HOTEL_PHONE}</span>
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
