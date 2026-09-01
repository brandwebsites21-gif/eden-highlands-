import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Instagram,
  Car,
  Check,
  Send,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import {
  HOTEL_PHONE,
  HOTEL_PHONE_RAW,
  HOTEL_INSTAGRAM,
  HOTEL_INSTAGRAM_HANDLE,
  HOTEL_LOCATION,
  FAQS_DATA
} from '../data/hotelData';
import SectionHead from '../components/SectionHead';
import { Reveal, StaggerItem, SectionDivider } from '../components/Motion';
import GenerativeBackdrop from '../components/GenerativeBackdrop';
import TiltCard from '../components/TiltCard';
import DrawInIcon from '../components/DrawInIcon';
import InteractiveMap from '../components/InteractiveMap';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Room Booking Inquiry',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && (formState.email || formState.phone)) {
      const directMsg = `Hello Eden Highlands Hotel,\n` +
        `Name: ${formState.name}\n` +
        `Email: ${formState.email}\n` +
        `Phone: ${formState.phone || 'N/A'}\n` +
        `Topic: ${formState.subject}\n` +
        `Message: ${formState.message}`;

      setIsSubmitted(true);
      const url = `https://wa.me/${HOTEL_PHONE_RAW}?text=${encodeURIComponent(directMsg)}`;
      window.open(url, '_blank');
    }
  };

  return (
    <div className="py-10 relative" id="contact-page">
      {/* Generative Highland Contour Line Backdrop behind header */}
      <GenerativeBackdrop variant="hero" seed={55} className="opacity-40" />

      <div className="wrap relative z-10">
        {/* Header */}
        <Reveal className="mb-14 max-w-3xl" id="contact-header">
          <span className="eyebrow">Location & Contacts</span>
          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-normal leading-tight mb-4">
            Easy arrival on the TANZAM Highway.
          </h1>
          <p className="text-[var(--ink-soft)] text-base sm:text-lg leading-relaxed">
            Located approximately 700 meters from Mafiati junction in Mbeya, Tanzania. We welcome enquiries for rooms, extended stays, events, and road travel coordination.
          </p>
        </Reveal>

        {/* 1. Main Grid: Contact Details & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16" id="contact-main-grid">
          {/* Left Column: Direct Details */}
          <Reveal className="lg:col-span-5 flex flex-col gap-6" id="contact-details-col">
            <TiltCard tint="cream" maxTilt={3.5} className="rounded-2xl">
              <div className="bg-[var(--card-cream)] border border-[var(--rule)] rounded-2xl p-6 sm:p-8">
                <span className="eyebrow">Front Desk & Concierge</span>
                <h3 className="text-2xl font-serif mb-6">Direct Channels</h3>

                <div className="space-y-6 text-sm">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-soft)] mb-1 flex items-center gap-1.5">
                      <DrawInIcon icon={Phone} size={13} className="text-[var(--green-dark)]" />
                      Phone & WhatsApp
                    </div>
                    <a
                      id="link-contact-phone"
                      href={`tel:${HOTEL_PHONE_RAW}`}
                      className="text-lg font-sans font-semibold text-[var(--ink)] hover:text-[var(--terra)] transition-colors block"
                    >
                      {HOTEL_PHONE}
                    </a>
                    <span className="text-xs text-[var(--ink-soft)] block mt-0.5">
                      Available 24 hours for reservations & arrival assistance
                    </span>
                  </div>

                  <div className="pt-4 border-t border-[var(--rule)]/60">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-soft)] mb-1 flex items-center gap-1.5">
                      <DrawInIcon icon={MapPin} size={13} className="text-[var(--terra)]" />
                      Physical Location
                    </div>
                    <p className="text-[var(--ink)] font-medium mb-1">
                      {HOTEL_LOCATION}
                    </p>
                    <span className="text-xs text-[var(--ink-soft)]">
                      Direct access off highway with gated, guarded parking
                    </span>
                  </div>

                  <div className="pt-4 border-t border-[var(--rule)]/60">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[var(--ink-soft)] mb-1 flex items-center gap-1.5">
                      <DrawInIcon icon={Instagram} size={13} className="text-[var(--terra)]" />
                      Instagram Community
                    </div>
                    <a
                      id="link-contact-instagram"
                      href={HOTEL_INSTAGRAM}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[var(--terra)] font-medium hover:underline block"
                    >
                      {HOTEL_INSTAGRAM_HANDLE}
                    </a>
                    <span className="text-xs text-[var(--ink-soft)]">
                      1,900+ followers for photography & news
                    </span>
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Travel Time Card */}
            <TiltCard tint="sage" maxTilt={3.5} className="rounded-2xl">
              <div className="bg-[var(--card-sage)] border border-[var(--rule)] rounded-2xl p-6 text-xs text-[var(--ink)] space-y-3">
                <div className="font-semibold text-sm mb-2 flex items-center gap-1.5">
                  <DrawInIcon icon={Car} size={16} className="text-[var(--green-dark)]" />
                  <span>Highway Travel Distances</span>
                </div>
              <div className="flex justify-between pb-2 border-b border-[var(--rule)]/50">
                <span>Mafiati Junction (Fuel & Markets)</span>
                <strong>~700 meters (2 mins)</strong>
              </div>
              <div className="flex justify-between pb-2 border-b border-[var(--rule)]/50">
                <span>Songwe International Airport (HTGW)</span>
                <strong>~35 km (35 mins)</strong>
              </div>
              <div className="flex justify-between">
                <span>Tunduma / Zambia Border</span>
                <strong>~105 km</strong>
              </div>
            </div>
            </TiltCard>
          </Reveal>

          {/* Right Column: Interactive Enquiry Form */}
          <Reveal delay={0.08} className="lg:col-span-7 bg-[var(--card-cream)] border border-[var(--rule)] rounded-2xl p-6 sm:p-10 flex flex-col justify-between" id="contact-form-col">
            <div>
              <span className="eyebrow">Written Enquiry</span>
              <h3 className="text-2xl sm:text-3xl font-serif mb-2">
                Send our reception a message
              </h3>
              <p className="text-xs sm:text-sm text-[var(--ink-soft)] mb-6">
                Fill in your details below. We reply swiftly via WhatsApp or phone.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-xl bg-[var(--card-pink)] border border-[var(--rule)]/60 text-center my-6">
                  <div className="w-12 h-12 rounded-full bg-[var(--green-dark)] text-white flex items-center justify-center mx-auto mb-3">
                    <Check size={24} />
                  </div>
                  <h4 className="text-xl font-serif mb-1">Inquiry Sent Successfully</h4>
                  <p className="text-xs text-[var(--ink-soft)] mb-4">
                    We have redirected your message to our WhatsApp front desk channel. We will confirm your request shortly.
                  </p>
                  <button
                    id="btn-send-another"
                    onClick={() => setIsSubmitted(false)}
                    className="pill-btn text-xs font-medium bg-white"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[var(--ink-soft)] uppercase tracking-wider mb-1">
                        Your Full Name *
                      </label>
                      <input
                        id="input-name"
                        type="text"
                        required
                        placeholder="e.g. David Mwamba"
                        className="w-full min-h-[44px] bg-white border border-[var(--rule)] rounded-xl px-3.5 py-2.5 text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--green-dark)]"
                        value={formState.name}
                        onChange={e => setFormState({ ...formState, name: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[var(--ink-soft)] uppercase tracking-wider mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="input-phone"
                        type="tel"
                        required
                        placeholder="e.g. +255 700 000 000"
                        className="w-full min-h-[44px] bg-white border border-[var(--rule)] rounded-xl px-3.5 py-2.5 text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--green-dark)]"
                        value={formState.phone}
                        onChange={e => setFormState({ ...formState, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[var(--ink-soft)] uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        id="input-email"
                        type="email"
                        placeholder="e.g. david@example.com"
                        className="w-full min-h-[44px] bg-white border border-[var(--rule)] rounded-xl px-3.5 py-2.5 text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--green-dark)]"
                        value={formState.email}
                        onChange={e => setFormState({ ...formState, email: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[var(--ink-soft)] uppercase tracking-wider mb-1">
                        Subject of Inquiry
                      </label>
                      <select
                        id="select-subject"
                        className="w-full min-h-[44px] bg-white border border-[var(--rule)] rounded-xl px-3.5 py-2.5 text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--green-dark)]"
                        value={formState.subject}
                        onChange={e => setFormState({ ...formState, subject: e.target.value })}
                      >
                        <option value="Room Booking Inquiry">Room Booking Inquiry</option>
                        <option value="Event / Meeting Venue">Event / Meeting Venue</option>
                        <option value="Extended Highway Stay">Extended Highway Stay</option>
                        <option value="Other Concierge Question">Other Concierge Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--ink-soft)] uppercase tracking-wider mb-1">
                      Message or Travel Details
                    </label>
                    <textarea
                      id="textarea-message"
                      rows={4}
                      placeholder="Please let us know your planned dates, number of guests, or special requirements..."
                      className="w-full bg-white border border-[var(--rule)] rounded-xl px-3.5 py-2.5 text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--green-dark)] resize-none"
                      value={formState.message}
                      onChange={e => setFormState({ ...formState, message: e.target.value })}
                    />
                  </div>

                  <button
                    id="btn-submit-contact-form"
                    type="submit"
                    className="btn btn-primary justify-center text-sm font-medium w-full min-h-[46px] mt-2 shadow-sm"
                  >
                    <span>Send Message via WhatsApp Concierge</span>
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        {/* 2. Visual Map & Directions Component with Interactive Vector Map */}
        <Reveal className="mb-16" id="contact-directions-card">
          <InteractiveMap id="contact-interactive-map" />
        </Reveal>

        {/* Driving Directions Note */}
        <Reveal className="bg-[var(--card-cream)] border border-[var(--rule)] rounded-2xl p-6 sm:p-8 mb-16 shadow-sm" id="contact-driving-notes">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <span className="eyebrow text-[var(--terra)]">From Dar es Salaam / Iringa</span>
              <h4 className="font-serif text-lg text-[var(--ink)] mb-2">Eastern Approach via Uyole</h4>
              <p className="text-xs sm:text-sm text-[var(--ink-soft)] leading-relaxed">
                Follow the TANZAM Highway (A104) past Uyole into Mbeya. Continue past the junction toward Mafiati. Approximately 700 meters before Mafiati junction, turn right into the marked Eden Highlands Hotel gateway.
              </p>
            </div>
            <div>
              <span className="eyebrow text-[var(--green-dark)]">From Zambia / Tunduma / Malawi</span>
              <h4 className="font-serif text-lg text-[var(--ink)] mb-2">Southern Approach via Mafiati</h4>
              <p className="text-xs sm:text-sm text-[var(--ink-soft)] leading-relaxed">
                Proceed north along the TANZAM Highway. Pass through Mafiati junction toward Uyole; our secure entrance is on your left roughly 700 meters past the junction.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Section Divider */}
        <div className="mb-12">
          <SectionDivider id="contact-faq-divider" />
        </div>

        {/* 3. Frequently Asked Questions */}
        <div className="mb-12" id="contact-faq-section">
          <Reveal>
            <SectionHead
              eyebrow="Helpful Information"
              title="Frequently Asked Questions"
            />
          </Reveal>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <StaggerItem
                  key={idx}
                  index={idx}
                  stepDelay={0.05}
                  className="bg-[var(--card-cream)] border border-[var(--rule)] rounded-xl overflow-hidden"
                  id={`faq-item-${idx}`}
                >
                  <button
                    id={`btn-faq-toggle-${idx}`}
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg text-[var(--ink)] hover:text-[var(--terra)] transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={18} className="text-[var(--terra)] shrink-0" /> : <ChevronDown size={18} className="text-[var(--ink-soft)] shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[var(--ink-soft)] leading-relaxed border-t border-[var(--rule)]/50 pt-3">
                      {faq.a}
                    </div>
                  )}
                </StaggerItem>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
