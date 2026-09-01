import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Compass } from 'lucide-react';
import { HOTEL_PHONE, HOTEL_PHONE_RAW } from '../data/hotelData';

export default function NotFound() {
  return (
    <div className="py-20 text-center">
      <div className="wrap max-w-lg mx-auto">
        <span className="eyebrow">404 · Page Not Found</span>
        <h1 className="text-4xl font-serif mb-4">
          A gentle detour in the highlands.
        </h1>
        <p className="text-sm text-[var(--ink-soft)] leading-relaxed mb-8">
          The path you are looking for does not exist or has moved. Return to our sanctuary home or contact our front desk directly.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link to="/" className="btn btn-primary text-xs">
            <Home size={14} />
            <span>Return to Home</span>
          </Link>
          <Link to="/rooms" className="btn btn-outline text-xs">
            <Compass size={14} />
            <span>Explore Rooms</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
