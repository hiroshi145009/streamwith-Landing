
import React from 'react';

const HeroSection: React.FC = () => {
  const scrollToReservation = () => {
    const reservationSection = document.getElementById('reservation-section');
    if (reservationSection) {
      reservationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/streamwith/1920/1080"
          alt="Creative professionals collaborating"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1B] via-[#0F0F1B]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F1B] via-transparent to-transparent"></div>
      </div>
      <div className="relative z-10 text-center px-4">
        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4 tracking-tighter">
          당신의 콘텐츠에 날개를 달아줄 최고의 파트너,<br />
          <span className="text-primary">Streamwith</span>에서 찾으세요.
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          AI 매칭으로 단 5분 만에, 나와 딱 맞는 영상 편집자/매니저를 연결해 드립니다.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToReservation}
            className="w-full sm:w-auto bg-primary text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-primary-dark transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            앱 출시 예약하기 🚀
          </button>
        </div>
        <p className="text-sm text-primary mt-4 animate-pulse">
          앱 출시 시 특별 혜택을 받아보세요!
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
