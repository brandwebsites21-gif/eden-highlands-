import React, { useState } from 'react';
import { X, ArrowRight, Phone, Calendar, Users, Sparkles } from 'lucide-react';
import { HOTEL_PHONE, HOTEL_PHONE_RAW, ROOMS_DATA } from '../data/hotelData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoom?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  initialRoom = 'Standard Double Room'
}: BookingModalProps) {
  const [roomType, setRoomType] = useState(initialRoom);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2 Guests');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Eden Highlands Hotel, I would like to inquire about booking a stay.\n` +
      `Room Selection: ${roomType}\n` +
      `Dates: ${checkIn || 'Dates flexible'} to ${checkOut || 'Dates flexible'}\n` +
      `Party Size: ${guests}\n` +
      `${notes ? `Special Notes: ${notes}\n` : ''}` +
      `Please confirm current availability and nightly rates.`;

    const url = `https://wa.me/${HOTEL_PHONE_RAW}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center text-[var(--ink-soft)] hover:text-[var(--ink)] rounded-full hover:bg-[var(--card-cream)] active:scale-95 transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="mb-5 pr-8">
          <span className="eyebrow mb-1">Reservation & Inquiry</span>
          <h3 className="text-xl sm:text-2xl font-serif text-[var(--ink)]">
            Eden Highlands Hotel
          </h3>
          <p className="text-xs text-[var(--ink-soft)] mt-1">
            TANZAM Highway, Mbeya · Call/WhatsApp: {HOTEL_PHONE}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 sm:gap-4">
          <div>
            <label className="block text-xs font-semibold text-[var(--ink-soft)] uppercase tracking-wider mb-1.5">
              Room or Suite Selection
            </label>
            <select
              className="w-full min-h-[44px] bg-white border border-[var(--rule)] rounded-xl px-3.5 py-2.5 text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--green-dark)]"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
            >
              {ROOMS_DATA.map((r) => (
                <option key={r.id} value={r.name}>
                  {r.name} {r.price !== 'Contact for current rates' ? `(${r.price}/night)` : ''}
                </option>
              ))}
              <option value="Event / Meeting Space Inquiry">Event / Meeting Space Inquiry</option>
              <option value="General Concierge Inquiry">General Concierge / Extended Stay</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[var(--ink-soft)] uppercase tracking-wider mb-1.5">
                Check-in Date
              </label>
              <input
                type="date"
                className="w-full min-h-[44px] bg-white border border-[var(--rule)] rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--green-dark)]"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[var(--ink-soft)] uppercase tracking-wider mb-1.5">
                Check-out Date
              </label>
              <input
                type="date"
                className="w-full min-h-[44px] bg-white border border-[var(--rule)] rounded-xl px-3.5 py-2 text-xs sm:text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--green-dark)]"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[var(--ink-soft)] uppercase tracking-wider mb-1.5">
              Number of Guests
            </label>
            <select
              className="w-full min-h-[44px] bg-white border border-[var(--rule)] rounded-xl px-3.5 py-2.5 text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--green-dark)]"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            >
              <option value="1 Guest">1 Guest</option>
              <option value="2 Guests">2 Guests (Standard)</option>
              <option value="3 Guests">3 Guests (Family)</option>
              <option value="4+ Guests / Highway Convoy">4+ Guests / Highway Group</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[var(--ink-soft)] uppercase tracking-wider mb-1.5">
              Notes or Special Requests (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Late highway arrival, secure parking for trailer, kid cot..."
              className="w-full min-h-[52px] bg-white border border-[var(--rule)] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--green-dark)] resize-none"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              type="submit"
              className="btn btn-primary justify-center text-sm font-medium w-full min-h-[46px] shadow-sm"
            >
              <span>Send WhatsApp Inquiry</span>
              <ArrowRight size={15} />
            </button>
            <a
              href={`tel:${HOTEL_PHONE_RAW}`}
              className="btn btn-outline justify-center text-xs sm:text-sm w-full min-h-[44px] bg-white"
            >
              <Phone size={14} className="text-[var(--green-dark)]" />
              <span>Or Call Front Desk: {HOTEL_PHONE}</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
