
import React from 'react';

const HeroSection: React.FC = () => {
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
          <a
            href="#cta"
            className="w-full sm:w-auto bg-primary text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-primary-dark transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            최고의 파트너 찾기
          </a>
          <a
            href="#cta"
            className="w-full sm:w-auto bg-secondary text-white font-bold py-3 px-8 rounded-full text-lg border-2 border-primary hover:bg-primary/20 transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            내 프로필 등록하기
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
