import React from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  Check,
  ArrowRight,
  Phone
} from 'lucide-react';
import { EXPERIENCES_DATA, HOTEL_PHONE, HOTEL_PHONE_RAW } from '../data/hotelData';
import SectionHead from '../components/SectionHead';
import PlaceholderImg from '../components/PlaceholderImg';
import { Reveal, StaggerItem, SectionDivider } from '../components/Motion';

interface LayoutContext {
  openBooking: (room?: string) => void;
}

export default function Experiences() {
  const { openBooking } = useOutletContext<LayoutContext>();

  const handleWhatsAppExperienceInquiry = (experienceTitle: string) => {
    const msg = `Hello Eden Highlands Hotel, I am interested in inquiring about: "${experienceTitle}". Could you please share more details and availability?`;
    const url = `https://wa.me/${HOTEL_PHONE_RAW}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="py-10" id="experiences-page">
      <div className="wrap">
        {/* Header */}
        <Reveal className="mb-14 max-w-3xl" id="experiences-header">
          <span className="eyebrow">Experiences & Events</span>
          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-normal leading-tight mb-4">
            Spaces to connect, rituals to restore.
          </h1>
          <p className="text-[var(--ink-soft)] text-base sm:text-lg leading-relaxed">
            From flexible meeting and event venues along the TANZAM Highway to evening aromatherapy rituals and curated Mbeya excursions, discover how we make every moment memorable.
          </p>
        </Reveal>

        {/* 1. Signature Turndown & Aromatherapy Hero Spotlight */}
        <div className="bg-[var(--card-cream)] border border-[var(--rule)] rounded-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 shadow-sm" id="experiences-signature-spotlight">
          <Reveal className="lg:col-span-6 flex flex-col justify-between" id="turndown-copy-block">
            <div>
              <span className="eyebrow text-[var(--terra)]">Signature Highland Ritual</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif mb-4 leading-tight">
                Evening Turndown & Aromatherapy
              </h2>
              <p className="text-sm sm:text-base text-[var(--ink-soft)] leading-relaxed mb-6">
                After long hours of highway driving through the southern highlands, our signature evening experience gently resets your senses. Fresh Mbeya botanical tisanes, essential oil diffusers, and soothing lighting prepare you for deep, restorative sleep.
              </p>

              <div className="space-y-2.5 mb-8 text-xs sm:text-sm text-[var(--ink)]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--green-dark)]" />
                  <span>Locally sourced chamomile and wild highland mint tisanes</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--green-dark)]" />
                  <span>Custom botanical room mist and essential oil preparations</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--green-dark)]" />
                  <span>Available on request with any room or suite reservation</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                id="btn-turndown-whatsapp"
                onClick={() => handleWhatsAppExperienceInquiry('Evening Turndown & Aromatherapy Ritual')}
                className="btn btn-primary text-xs"
              >
                <span>Inquire on WhatsApp</span>
                <ArrowRight size={14} />
              </button>
              <button
                id="btn-turndown-book"
                onClick={() => openBooking('Standard Double Room')}
                className="btn btn-outline text-xs"
              >
                <span>Book Stay with Ritual</span>
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6" id="turndown-photo-block">
            <PlaceholderImg
              variant="tan"
              caption="Signature Evening Turndown Experience"
              subtitle="Eden Highlands Hotel, Mbeya, Tanzania"
              className="aspect-[4/3.2] rounded-xl shadow-inner"
            />
          </Reveal>
        </div>

        {/* 2. Events & Meeting Spaces Section */}
        <div id="events" className="mb-16">
          <Reveal>
            <SectionHead
              eyebrow="Events & Meetings"
              title="Gatherings tailored to your occasion"
              note="Direct bespoke consultation"
            />
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[var(--card-pink)] border border-[var(--rule)]/60 rounded-2xl p-6 sm:p-10" id="events-venue-box">
            <Reveal className="lg:col-span-6 order-2 lg:order-1" id="events-venue-photo">
              <PlaceholderImg
                variant="tan"
                caption="Event and meeting space, Eden Highlands Hotel"
                subtitle="Highland hall for meetings, retreats, and private gatherings"
                className="aspect-[4/3] rounded-xl shadow-inner"
              />
            </Reveal>

            <Reveal delay={0.08} className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-between" id="events-venue-copy">
              <div>
                <span className="eyebrow text-[var(--ink-soft)]">Group Hosting</span>
                <h3 className="text-2xl sm:text-3xl font-serif mb-4">
                  Spaces to Gather, Meet, and Connect
                </h3>
                <p className="text-sm text-[var(--ink-soft)] leading-relaxed mb-4">
                  Eden Highlands supports corporate workshops, regional NGO seminars, private board retreats, and family milestone events. Our location along the TANZAM Highway ensures seamless arrival for attendees travelling from across the region.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 p-4 bg-white/70 rounded-xl border border-[var(--rule)]/60 text-xs text-[var(--ink-soft)]">
                  <div>
                    <div className="font-semibold text-[var(--ink)] mb-1">Flexible Layouts</div>
                    <span>Boardroom, classroom, or banquet configurations.</span>
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--ink)] mb-1">High-Speed Wi-Fi</div>
                    <span>Stable connection for video conferences and presentations.</span>
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--ink)] mb-1">Catering Coordination</div>
                    <span>Fresh local meals, coffee breaks, and highland fruit.</span>
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--ink)] mb-1">Secure Parking</div>
                    <span>Ample on-site parking for all attendee vehicles.</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  id="btn-events-dates"
                  onClick={() => handleWhatsAppExperienceInquiry('Event & Meeting Space Inquiry')}
                  className="pill-btn font-medium bg-[var(--green-dark)] text-white border-[var(--green-dark)]"
                >
                  <span>Ask About Venue Dates</span>
                  <ArrowRight size={13} className="ml-1.5 inline" />
                </button>
              </div>
            </Reveal>
          </div>
        </div>

        {/* 3. Additional Curated Experiences Grid */}
        <div className="mb-16" id="experiences-curated-grid">
          <Reveal>
            <SectionHead
              eyebrow="Highland Discoveries"
              title="Excursions & Local Connections"
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EXPERIENCES_DATA.slice(2).map((exp, idx) => (
              <StaggerItem
                key={exp.id}
                index={idx}
                stepDelay={0.08}
                className="bg-[var(--card-cream)] border border-[var(--rule)] rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
                id={`curated-exp-${exp.id}`}
              >
                <div>
                  <PlaceholderImg
                    variant={exp.bgVariant}
                    caption={exp.imageCaption}
                    className="aspect-[16/9] rounded-xl mb-6 shadow-inner"
                  />
                  <span className="eyebrow">{exp.eyebrow}</span>
                  <h3 className="text-xl sm:text-2xl font-serif mb-3">{exp.title}</h3>
                  <p className="text-xs sm:text-sm text-[var(--ink-soft)] leading-relaxed mb-4">
                    {exp.desc}
                  </p>
                  <ul className="space-y-1.5 text-xs text-[var(--ink)] mb-6">
                    {exp.details.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2">
                        <Check size={13} className="text-[var(--green-dark)] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  id={`btn-exp-ask-${exp.id}`}
                  onClick={() => handleWhatsAppExperienceInquiry(exp.title)}
                  className="text-xs font-semibold text-[var(--green-dark)] hover:underline flex items-center gap-1 w-fit"
                >
                  <span>Ask Concierge about {exp.eyebrow}</span>
                  <ArrowRight size={13} />
                </button>
              </StaggerItem>
            ))}
          </div>
        </div>

        {/* Section Divider */}
        <div className="mb-12">
          <SectionDivider id="experiences-closing-divider" />
        </div>

        {/* Closing WhatsApp Contact Bar */}
        <Reveal className="p-8 bg-[var(--card-sage)] border border-[var(--rule)] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6" id="experiences-closing-contact">
          <div>
            <span className="eyebrow">Custom itineraries</span>
            <h3 className="text-2xl font-serif mb-2">Have a specific group or event need?</h3>
            <p className="text-xs sm:text-sm text-[var(--ink-soft)] max-w-lg">
              Our front desk and concierge team are available 24/7 on WhatsApp to discuss your plans.
            </p>
          </div>
          <a
            id="btn-experiences-call-desk"
            href={`tel:${HOTEL_PHONE_RAW}`}
            className="btn btn-primary shrink-0 text-xs"
          >
            <Phone size={13} />
            <span>Call / WhatsApp {HOTEL_PHONE}</span>
          </a>
        </Reveal>
      </div>
    </div>
  );
}
