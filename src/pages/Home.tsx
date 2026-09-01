import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Sprout,
  CircleDot,
  Heart,
  Flame,
  Utensils,
  Car,
  Wind,
  Wifi,
  Phone
} from 'lucide-react';
import {
  HOTEL_PHONE,
  HOTEL_PHONE_RAW,
  STATS_DATA,
  ROOMS_DATA,
  VALUES_DATA
} from '../data/hotelData';
import SectionHead from '../components/SectionHead';
import PlaceholderImg from '../components/PlaceholderImg';
import {
  Reveal,
  StaggerItem,
  CountUp,
  HeroParallax,
  SectionDivider,
  EASE_OUT_SETTLE
} from '../components/Motion';
import GenerativeBackdrop from '../components/GenerativeBackdrop';
import TiltCard from '../components/TiltCard';
import DrawInIcon from '../components/DrawInIcon';

interface LayoutContext {
  openBooking: (room?: string) => void;
}

const valueIconMap = {
  'sprout': Sprout,
  'circle-dot': CircleDot,
  'heart': Heart,
  'flame': Flame
};

export default function Home() {
  const { openBooking } = useOutletContext<LayoutContext>();
  const standardRoom = ROOMS_DATA.find(r => r.id === 'standard-double') || ROOMS_DATA[0];

  return (
    <div id="home-page" className="relative overflow-hidden">
      {/* 1. Hero Section with Procedural Highland Contour Line Backdrop */}
      <section className="hero relative" id="hero-section">
        <GenerativeBackdrop variant="hero" seed={42} className="opacity-50" />
        <div className="wrap relative z-10">
          {/* Initial page-load fade-in */}
          <motion.div
            id="hero-copy-block"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE_OUT_SETTLE }}
          >
            <span className="eyebrow">Highland Hospitality · TANZAM Highway</span>
            <h1 className="text-3xl sm:text-4xl lg:text-[47px] font-medium leading-[1.14]">
              A comfortable, self-contained stay on the TANZAM Highway, Mbeya.
            </h1>
            <p className="sub">
              Free Wi-Fi, parking, air conditioning, and a fully equipped kitchen in every room — about 700m from Mafiati junction.
            </p>
            <div className="ctas">
              <a
                id="hero-btn-call"
                className="btn btn-primary"
                href={`tel:${HOTEL_PHONE_RAW}`}
                title="Call Front Desk to Book"
              >
                <span>Call or WhatsApp to Book</span>
                <ArrowRight size={15} />
              </a>
              <Link id="hero-btn-rooms" className="btn btn-outline" to="/rooms">
                <span>View Rooms</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </motion.div>

          {/* Hero Image with Restrained Parallax */}
          <HeroParallax id="hero-image-parallax" className="imgwrap shadow-sm rounded-2xl">
            <PlaceholderImg
              variant="tan"
              caption="Bedroom, Eden Highlands Hotel"
              subtitle="TANZAM Highway, Mbeya, Tanzania"
              className="h-full min-h-[320px]"
              disableAnimation
            />
          </HeroParallax>
        </div>
      </section>

      {/* 2. Verified Stats with Cursor Tilt */}
      <section className="stats" style={{ paddingTop: 0 }} id="stats-section">
        <div className="wrap">
          {STATS_DATA.map((item, idx) => (
            <StaggerItem
              key={idx}
              index={idx}
              stepDelay={0.06}
              className="h-full"
              id={`stat-card-wrap-${idx}`}
            >
              <TiltCard
                tint={idx % 2 === 1 ? 'pink' : 'cream'}
                maxTilt={4}
                className="h-full rounded-[14px]"
              >
                <div className="stat-card h-full" id={`stat-card-${idx}`}>
                  {item.num && (
                    <div className="num">
                      <CountUp value={item.num} />
                    </div>
                  )}
                  {item.label && <div className="label">{item.label}</div>}
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </div>
      </section>

      {/* 3. Featured Amenities */}
      <section id="amenities" className="border-t border-[var(--rule)]/40 relative">
        <div className="wrap">
          <Reveal>
            <SectionHead
              eyebrow="Featured stays"
              title="Amenities for an easier stay"
              ctaText="View all amenities →"
              ctaHref="/amenities"
            />
          </Reveal>

          <div className="amenities-grid">
            {/* Card 1: Standard Double Preview */}
            <StaggerItem index={0} className="am-card group" id="amenity-preview-card">
              <TiltCard tint="tan" maxTilt={4} className="rounded-2xl">
                <div className="thumb placeholder-img bg-[#ded3c1]" style={{ minHeight: 0 }}>
                  <span className="cap">Standard Double Room</span>
                </div>
                <h3 className="group-hover:text-[var(--terra)] transition-colors mt-3">Standard Double Room</h3>
                <div className="price font-medium text-[var(--ink)]">$180 / night</div>
              </TiltCard>
            </StaggerItem>

            {/* Card 2: Kitchen text card */}
            <StaggerItem index={1} className="h-full" id="amenity-kitchen-card">
              <TiltCard tint="pink" maxTilt={4} className="h-full rounded-2xl">
                <div className="am-textcard h-full">
                  <div>
                    <h3 className="flex items-center gap-2">
                      <DrawInIcon icon={Utensils} size={18} className="text-[var(--terra)]" />
                      Kitchen in all rooms
                    </h3>
                    <p>Self-contained convenience, right where you stay.</p>
                  </div>
                  <div>
                    <div className="tag">More confirmed amenities</div>
                    <p className="font-medium text-[var(--ink-soft)]">
                      Kid-friendly accommodation · Fitness center
                    </p>
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>

            {/* Card 3: Free Parking */}
            <StaggerItem index={2} className="am-card" id="amenity-parking-card">
              <TiltCard tint="sage" maxTilt={4} className="rounded-2xl">
                <div className="thumb placeholder-img bg-[#dbe6d3]" style={{ minHeight: 0 }}>
                  <span className="cap">Free parking</span>
                </div>
                <h3 className="mt-3">Free parking</h3>
                <div className="desc">Easy arrival for road travellers.</div>
              </TiltCard>
            </StaggerItem>

            {/* Card 4: Air conditioning */}
            <StaggerItem index={3} className="am-card" id="amenity-ac-card">
              <TiltCard tint="sage2" maxTilt={4} className="rounded-2xl">
                <div className="thumb placeholder-img sage" style={{ minHeight: 0 }}>
                  <span className="cap">Air conditioning</span>
                </div>
                <h3 className="mt-3">Air conditioning</h3>
                <div className="desc">Comfort in every room.</div>
              </TiltCard>
            </StaggerItem>
          </div>
        </div>
      </section>

      {/* 4. Guest Feedback */}
      <section className="border-t border-[var(--rule)]/40" id="feedback-section">
        <div className="wrap">
          <Reveal>
            <SectionHead
              eyebrow="Guest feedback"
              title="A trusted stay, rated by guests"
              note="Public Google listing data, captured 16 Aug 2026"
            />
          </Reveal>

          <div className="feedback-grid">
            <StaggerItem index={0} className="h-full" id="feedback-rating-wrap">
              <TiltCard tint="green" maxTilt={4.5} className="h-full rounded-2xl">
                <div className="fb-card green shadow-sm h-full" id="feedback-rating-card">
                  <div className="lbl">Google rating</div>
                  <div>
                    <div className="big">
                      <CountUp value="4.3★" />
                    </div>
                    <div className="small">Publicly displayed rating</div>
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>

            <StaggerItem index={1} className="h-full" id="feedback-reviews-wrap">
              <TiltCard tint="cream" maxTilt={4.5} className="h-full rounded-2xl">
                <div className="fb-card neutral border border-[var(--rule)] h-full" id="feedback-reviews-card">
                  <div className="lbl">Travel-site reviews</div>
                  <div>
                    <div className="big">
                      <CountUp value="16" />
                    </div>
                    <div className="small">Verified public review count</div>
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>

            <StaggerItem index={2} className="h-full" id="feedback-confirm-wrap">
              <TiltCard tint="pink" maxTilt={4.5} className="h-full rounded-2xl">
                <div className="fb-card pink border border-[var(--rule)]/50 h-full" id="feedback-confirm-card">
                  <div className="lbl">Need to confirm a stay?</div>
                  <div>
                    <h4>Call or WhatsApp Eden Highlands directly for current availability and rates.</h4>
                  </div>
                  <button
                    id="btn-feedback-whatsapp"
                    onClick={() => openBooking('Standard Double Room')}
                    className="pill-btn hover:bg-white hover:border-[var(--green-dark)] transition-all text-[var(--green-dark)] font-medium"
                  >
                    <span>WhatsApp {HOTEL_PHONE}</span>
                  </button>
                </div>
              </TiltCard>
            </StaggerItem>
          </div>
        </div>
      </section>

      {/* 5. Events & Meetings Teaser */}
      <section id="events" className="border-t border-[var(--rule)]/40 relative">
        <GenerativeBackdrop variant="section" seed={88} className="opacity-35" />
        <div className="wrap split relative z-10">
          <Reveal className="copy" id="events-copy-block">
            <span className="eyebrow">Events & meetings</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif">Spaces to gather, meet, and connect</h2>
            <p>
              Eden Highlands can support event and meeting enquiries. Contact us directly to discuss your date, group size, current space options, and availability.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <Link className="btn btn-outline" to="/experiences" id="btn-events-explore">
                <span>Explore Venues & Experiences</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
          
          <Reveal delay={0.1} id="events-image-block">
            <TiltCard tint="tan" maxTilt={3.5} className="rounded-2xl">
              <PlaceholderImg
                variant="tan"
                caption="Event and meeting space, Eden Highlands Hotel"
                subtitle="Garden retreat hall & meeting rooms"
                className="shadow-sm min-h-[300px]"
              />
            </TiltCard>
          </Reveal>
        </div>
      </section>

      {/* 6. Rooms Available Section */}
      <section id="rooms" className="border-t border-[var(--rule)]/40">
        <div className="wrap">
          <Reveal>
            <SectionHead
              eyebrow="Currently listed"
              title="Rooms available"
              note="Contact us directly for current options and rates"
              ctaText="View full catalogue →"
              ctaHref="/rooms"
            />
          </Reveal>

          <div className="rooms-grid">
            {/* Standard Double Room Card */}
            <StaggerItem index={0} className="h-full" id="room-card-preview-wrap">
              <TiltCard tint="cream" maxTilt={3.5} className="h-full rounded-2xl">
                <div className="room-card border border-[var(--rule)]/70 hover:border-[var(--rule)] transition-all h-full" id="room-card-preview">
                  <div className="thumb placeholder-img bg-[#dbe6d3]" style={{ minHeight: 0, padding: 0 }}>
                    <div className="w-full h-full flex items-center justify-center p-3 text-center">
                      <span className="text-[11px] font-medium text-[var(--ink)] bg-white/70 backdrop-blur-sm px-2 py-1 rounded">
                        Double Bed View
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="hotel-tag">Eden Highlands Hotel</div>
                    <h3 className="text-lg font-serif">Standard Double Room</h3>
                    <div className="amen">
                      Kitchen included · Air-conditioned · Free Wi-Fi
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        id="btn-room-preview-book"
                        className="pill-btn cursor-pointer"
                        style={{
                          background: 'var(--green-dark)',
                          color: '#fdfcf9',
                          borderColor: 'var(--green-dark)'
                        }}
                        onClick={() => openBooking(standardRoom.name)}
                      >
                        Check availability
                      </button>
                      <Link to="/rooms" className="text-xs text-[var(--ink-soft)] hover:underline">
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>

            {/* Other option card */}
            <StaggerItem index={1} className="h-full" id="room-custom-inquiry-wrap">
              <TiltCard tint="pink" maxTilt={3.5} className="h-full rounded-2xl">
                <div className="other-card border border-[var(--rule)]/50 h-full" id="room-custom-inquiry">
                  <div>
                    <h3>Looking for another option?</h3>
                    <p>
                      The public listing currently confirms the Standard Double Room. Contact Eden Highlands directly for current room options, availability, and rates.
                    </p>
                  </div>
                  <div className="contact-line flex items-center gap-2">
                    <Phone size={14} />
                    <span>Call / WhatsApp {HOTEL_PHONE}</span>
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>
          </div>

          {/* Two col cards for Families & Fitness */}
          <div className="two-col-cards">
            <StaggerItem index={0} className="h-full" id="card-families-wrap">
              <TiltCard tint="pink" maxTilt={3.5} className="h-full rounded-2xl">
                <div className="info-card pink border border-[var(--rule)]/40 h-full" id="card-families-info">
                  <span className="eyebrow">For families</span>
                  <h3>A good environment for kids</h3>
                  <p>
                    Eden Highlands is publicly listed as kid-friendly accommodation, with a comfortable self-contained setup for family stays.
                  </p>
                </div>
              </TiltCard>
            </StaggerItem>
            
            <StaggerItem index={1} className="h-full" id="card-fitness-wrap">
              <TiltCard tint="sage" maxTilt={3.5} className="h-full rounded-2xl">
                <div className="info-card sage border border-[var(--rule)]/40 h-full" id="card-fitness-info">
                  <span className="eyebrow">Stay active</span>
                  <h3>Fitness center</h3>
                  <p>
                    A fitness center is publicly listed among Eden Highlands' amenities. Contact us directly for current facility details.
                  </p>
                </div>
              </TiltCard>
            </StaggerItem>
          </div>

          {/* Photo placeholders */}
          <div className="photo-placeholders">
            <Reveal delay={0.05}>
              <TiltCard tint="tan" maxTilt={3} className="rounded-2xl">
                <PlaceholderImg
                  variant="tan"
                  caption="Family stay photo"
                  subtitle="Eden Highlands property image"
                  className="shadow-sm min-h-[220px]"
                />
              </TiltCard>
            </Reveal>
            <Reveal delay={0.1}>
              <TiltCard tint="sage2" maxTilt={3} className="rounded-2xl">
                <PlaceholderImg
                  variant="sage2"
                  caption="Fitness center photo"
                  subtitle="Eden Highlands property image"
                  className="shadow-sm min-h-[220px]"
                />
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. Our Story Teaser */}
      <section id="story" className="border-t border-[var(--rule)]/40 relative">
        <div className="wrap">
          <Reveal>
            <SectionHead
              eyebrow="Our story"
              title="Comfort and convenience in Mbeya"
              ctaText="Read full story →"
              ctaHref="/about"
            />
          </Reveal>

          <div className="story-top">
            <Reveal>
              <TiltCard tint="tan" maxTilt={3} className="rounded-2xl">
                <PlaceholderImg
                  variant="tan"
                  caption="Eden Highlands Heritage & Grounds"
                  subtitle="Mbeya, Southern Highlands, Tanzania"
                  className="shadow-sm aspect-[4/3.2]"
                />
              </TiltCard>
            </Reveal>
            <Reveal className="copy" delay={0.1}>
              <h3>
                It started with a single restored countryside home and a belief that travel should feel like a warm exhale.
              </h3>
              <p>
                Eden Highlands Hotel offers a practical, self-contained stay for families, road travellers, and business guests — with free Wi-Fi, parking, air conditioning, kitchens in all rooms, kid-friendly accommodation, and a fitness center.
              </p>
            </Reveal>
          </div>

          {/* 4 Story Values with DrawInIcon */}
          <div className="story-values">
            {VALUES_DATA.map(({ title, desc, iconName }, idx) => {
              const Icon = valueIconMap[iconName] || Sprout;
              return (
                <StaggerItem
                  key={idx}
                  index={idx}
                  className="h-full"
                  id={`value-card-wrap-${idx}`}
                >
                  <TiltCard tint="pink" maxTilt={4} className="h-full rounded-xl">
                    <div className="value-card border border-[var(--rule)]/40 h-full" id={`value-card-${idx}`}>
                      <div className="icon">
                        <DrawInIcon icon={Icon} size={19} className="text-[var(--terra)]" />
                      </div>
                      <h4>{title}</h4>
                      <p>{desc}</p>
                    </div>
                  </TiltCard>
                </StaggerItem>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="wrap">
        <SectionDivider id="divider-before-signature" />
      </div>

      {/* 8. Signature Experience Teaser with Generative Backdrop */}
      <section className="signature relative" id="signature-experience-section">
        <GenerativeBackdrop variant="footer" seed={99} className="opacity-35" />
        <div className="wrap relative z-10">
          <Reveal id="signature-copy-block">
            <span className="eyebrow">Signature experience</span>
            <h2>Contact us for current availability</h2>
            <p>
              Join our signature evening ritual — a private in-room aromatherapy and turndown experience, crafted to help you fully relax after a day of exploring.
            </p>
            <Link className="btn btn-outline" to="/experiences" id="btn-signature-learn">
              <span>Learn more</span>
              <ArrowRight size={15} />
            </Link>
          </Reveal>
          
          <Reveal delay={0.1} id="signature-image-block">
            <TiltCard tint="tan" maxTilt={3.5} className="rounded-2xl">
              <PlaceholderImg
                variant="tan"
                caption="Signature Evening Turndown Experience"
                subtitle="Eden Highlands property image"
                className="shadow-sm aspect-[4/3.1]"
              />
            </TiltCard>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

