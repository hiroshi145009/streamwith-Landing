
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const FinalCTASection: React.FC = () => {
    const sectionRef = useScrollAnimation<HTMLDivElement>();
  return (
    <section ref={sectionRef} id="cta" className="animated-section py-20 lg:py-32 bg-[#0F0F1B]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
          지금 바로 당신의 성공적인 파트너십을 시작하세요.
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <a
            href="#cta-creator"
            className="w-full sm:w-auto bg-primary text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-primary-dark transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            최고의 파트너 찾기
          </a>
          <a
            href="#cta-partner"
            className="w-full sm:w-auto bg-secondary text-white font-bold py-4 px-10 rounded-full text-lg border-2 border-primary hover:bg-primary/20 transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            내 프로필 등록하기
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
