import React, { useState, useEffect } from 'react';
import { SparklesIcon } from '../../constants/icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// --- Helper Components & Functions ---

const DemoContainer: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <div className={`bg-secondary/50 rounded-2xl border border-gray-700 shadow-lg backdrop-blur-sm w-full flex flex-col overflow-hidden transform transition-transform duration-300 ${className}`}>
        {children}
    </div>
);

// --- Interactive Demo Components ---

const AISequenceDemo: React.FC = () => {
    const [step, setStep] = useState(0);

    const imageSteps = [
        '/images/ai-matching-popup.png',
        '/images/ai-matching-loading.png',
        '/images/ai-matching-history.png'
    ];
    
    const altTexts = [
        'AI 매칭 시작 팝업 화면',
        'AI 매칭 중 로딩 화면',
        'AI 매칭 결과 이력 화면'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setStep(s => (s + 1) % imageSteps.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [imageSteps.length]);
    
    return (
        <DemoContainer className="hover:scale-105 items-center justify-center bg-secondary">
            <img 
                src={imageSteps[step]} 
                alt={altTexts[step]}
                className="w-full h-auto object-contain rounded-xl" 
            />
        </DemoContainer>
    );
};


const SolutionFeature: React.FC<{ icon: React.ReactNode; title: string; description: string; children: React.ReactNode; reverse?: boolean }> = ({ icon, title, description, children, reverse = false }) => {
  return (
    <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${reverse ? 'md:grid-flow-col-dense' : ''}`}>
      <div className={reverse ? 'md:col-start-2' : ''}>
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary mb-4">
          {icon}
        </div>
        <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-300 text-lg">{description}</p>
      </div>
      <div className="flex justify-center">
        {children}
      </div>
    </div>
  );
};

const SolutionSection: React.FC = () => {
    const sectionRef = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={sectionRef} className="animated-section py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Streamwith의 <span className="text-primary">특별한 기능</span>을 체험해보세요.
          </h2>
        </div>
        <div className="space-y-24">
            <SolutionFeature
                icon={<SparklesIcon className="w-6 h-6" />}
                title="AI 추천 매칭"
                description="프로필만 등록하면 AI가 최적의 파트너/크리에이터를 추천해드려요. 직접 경험해보세요!"
            >
                <div className="w-full max-w-xs"><AISequenceDemo /></div>
            </SolutionFeature>
            <SolutionFeature
                icon={<div className="font-bold text-xl">✓</div>}
                title="검증된 프로필과 구인공고"
                description="세분화된 프로필과 상세한 구인공고로 시간 낭비를 줄여보세요."
                reverse={true}
            >
                 <div className="flex gap-2 sm:gap-4 w-full justify-center max-w-md sm:max-w-lg">
                    <div className="w-1/2 transform transition-transform duration-300 hover:scale-105">
                        <img 
                            src="/images/partner-profile-detail.png" 
                            alt="파트너 프로필 상세 화면 예시" 
                            className="rounded-2xl border border-gray-700 shadow-lg w-full h-full object-cover" 
                        />
                    </div>
                    <div className="w-1/2 transform transition-transform duration-300 hover:scale-105">
                        <img 
                            src="/images/job-posting-detail.png" 
                            alt="구인 공고 상세 화면 예시" 
                            className="rounded-2xl border border-gray-700 shadow-lg w-full h-full object-cover" 
                        />
                    </div>
                </div>
            </SolutionFeature>
            <SolutionFeature
                icon={<div className="font-bold text-xl">🤝</div>}
                title="간편한 소통과 계약"
                description="앱 내 채팅과 간편 계약 시스템으로 모든 과정을 한 곳에서 해결하세요."
            >
                 <div className="flex gap-2 sm:gap-4 w-full justify-center max-w-md sm:max-w-lg">
                    <div className="w-1/2 transform transition-transform duration-300 hover:scale-105">
                        <img 
                            src="/images/personal-chat.png" 
                            alt="채팅방 화면 예시" 
                            className="rounded-2xl border border-gray-700 shadow-lg w-full h-full object-cover" 
                        />
                    </div>
                    <div className="w-1/2 transform transition-transform duration-300 hover:scale-105">
                        <img 
                            src="/images/partner-chat.png" 
                            alt="파트너 채팅방 화면 예시" 
                            className="rounded-2xl border border-gray-700 shadow-lg w-full h-full object-cover" 
                        />
                    </div>
                </div>
            </SolutionFeature>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;