import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BookingModal from './BookingModal';
import MobileBottomBar from './MobileBottomBar';

export default function Layout() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedRoomForBooking, setSelectedRoomForBooking] = useState('Standard Double Room');

  const openBooking = (roomName?: string) => {
    if (roomName) {
      setSelectedRoomForBooking(roomName);
    }
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#4c6350] selection:text-[#fdfcf9] overflow-x-hidden">
      <Header onOpenBooking={() => openBooking()} />
      
      <main className="flex-1 pb-16 md:pb-0">
        <Outlet context={{ openBooking }} />
      </main>

      <Footer />

      <MobileBottomBar onOpenBooking={() => openBooking()} />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={closeBooking}
        initialRoom={selectedRoomForBooking}
      />
    </div>
  );
}
