
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface StepProps {
  number: string;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ number, title, description }) => (
  <div className="relative">
    <div className="flex items-center mb-4">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-2xl font-bold mr-4">
        {number}
      </div>
      <h3 className="text-2xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-gray-300 pl-16">{description}</p>
  </div>
);

const HowItWorksSection: React.FC = () => {
    const sectionRef = useScrollAnimation<HTMLDivElement>();
  return (
    <section ref={sectionRef} className="animated-section py-20 lg:py-32 bg-[#121221]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Streamwith, <span className="text-primary">이렇게 간단해요</span>
          </h2>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-1 gap-12">
          <Step 
            number="1" 
            title="프로필 등록" 
            description="나의 정보와 원하는 조건을 입력하세요." 
          />
          <Step 
            number="2" 
            title="AI 매칭 & 탐색" 
            description="AI가 추천해주거나, 직접 찾아보세요." 
          />
          <Step 
            number="3" 
            title="채팅 및 계약" 
            description="마음에 들면 바로 대화하고 계약까지 완료!" 
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
