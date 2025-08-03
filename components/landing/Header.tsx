
import React from 'react';

const Header: React.FC = () => {
  const scrollToReservation = () => {
    const reservationSection = document.getElementById('reservation-section');
    if (reservationSection) {
      reservationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F1B]/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/images/logo_white.png" 
              alt="Streamwith Logo" 
              className="h-8 w-auto"
            />
            <h1 className="text-2xl font-bold text-white">
              Stream<span className="text-primary">with</span>
            </h1>
          </div>
          <button
            onClick={scrollToReservation}
            className="bg-primary hover:bg-primary/80 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
          >
            예약하기
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
