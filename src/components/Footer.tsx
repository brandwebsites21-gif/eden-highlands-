import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Instagram, MapPin, Phone } from 'lucide-react';
import { HOTEL_PHONE, HOTEL_PHONE_RAW, HOTEL_INSTAGRAM, HOTEL_INSTAGRAM_HANDLE, HOTEL_LOCATION } from '../data/hotelData';
import { Reveal, SectionDivider } from './Motion';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer id="contact" className="mt-auto bg-[var(--cream)] border-t border-[var(--rule)]/60">
      <div className="wrap">
        <div className="footer-top">
          <Reveal className="footer-grid" id="footer-main-grid">
            {/* Col 1 - Brand */}
            <div>
              <Link to="/" id="footer-brand" className="brand block hover:opacity-90">
                Eden Highlands Hotel
              </Link>
              <p className="about">
                A quietly beautiful place to arrive, linger, and return to on the TANZAM Highway in Mbeya.
              </p>
              <div className="mt-4 text-xs text-[var(--ink-soft)] space-y-1">
                <div>• 4.3★ Verified Google Rating</div>
                <div>• Self-contained kitchen in all rooms</div>
                <div>• ~700m from Mafiati junction</div>
              </div>
            </div>

            {/* Col 2 - Quick Links */}
            <div className="links">
              <h5>Quick links</h5>
              <Link to="/rooms">Rooms & Suites</Link>
              <Link to="/amenities">Amenities</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/about">About Us</Link>
              <Link to="/experiences">Experiences & Events</Link>
              <Link to="/journal">Highland Journal</Link>
              <Link to="/contact">Location & Contact</Link>
            </div>

            {/* Col 3 - Contact details */}
            <div className="contact">
              <h5>Contact & Location</h5>
              <p className="flex items-start gap-1.5">
                <MapPin size={15} className="text-[var(--terra)] shrink-0 mt-0.5" />
                <span>{HOTEL_LOCATION}</span>
              </p>
              <p className="flex items-center gap-1.5 font-medium text-[var(--ink)]">
                <Phone size={14} className="text-[var(--green-dark)] shrink-0" />
                <a href={`tel:${HOTEL_PHONE_RAW}`} className="hover:underline">{HOTEL_PHONE}</a>
              </p>
              <p>
                <a
                  href={HOTEL_INSTAGRAM}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline flex items-center gap-1.5 text-[var(--terra)]"
                >
                  <Instagram size={14} className="shrink-0" />
                  {HOTEL_INSTAGRAM_HANDLE}
                </a>
              </p>
              <p className="text-xs text-[var(--ink-soft)] mt-2">
                24-Hour front desk assistance for road travellers.
              </p>
            </div>

            {/* Col 4 - Newsletter */}
            <div className="newsletter">
              <h5>A little note from us</h5>
              <p>Seasonal offers and local discoveries, sent softly.</p>
              <form onSubmit={handleSubscribe}>
                <input
                  id="footer-newsletter-email"
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button id="btn-footer-subscribe" type="submit" aria-label="Subscribe to newsletter">
                  {subscribed ? <Check size={15} className="text-[var(--green)]" /> : <ArrowRight size={15} />}
                </button>
              </form>
              {subscribed && (
                <p className="text-xs text-[var(--green-dark)] mt-2 font-medium">
                  Thank you. We will keep you quietly updated.
                </p>
              )}
            </div>
          </Reveal>

          <div className="copyright">
            © 2026 Eden Highlands Hotel. Public profile snapshot. Updated 16 August 2026.
          </div>
        </div>

        {/* Instagram Banner */}
        <Reveal delay={0.05} className="insta-bar border border-[var(--rule)]/60 my-6" id="footer-instagram-bar">
          <div className="lines">
            Follow {HOTEL_INSTAGRAM_HANDLE}
            <span className="muted">See recent property moments, travel stories, and updates on Instagram.</span>
          </div>
          <a
            id="btn-footer-instagram"
            className="pill-btn hover:opacity-90"
            style={{
              background: 'var(--green-dark)',
              color: '#fdfcf9',
              borderColor: 'var(--green-dark)'
            }}
            href={HOTEL_INSTAGRAM}
            target="_blank"
            rel="noreferrer"
          >
            <Instagram size={14} style={{ marginRight: 6 }} />
            <span>Follow on Instagram (1,900+ followers)</span>
          </a>
        </Reveal>

        {/* Footer Bottom Line */}
        <div className="footer-bottom">
          <span>Home · Rooms · Amenities · Gallery · About · Experiences · Journal · Contact</span>
          <div className="flex items-center gap-2">
            <span>Direct Reservations: {HOTEL_PHONE}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
