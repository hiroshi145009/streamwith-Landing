
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProblemCard: React.FC<{ title: string; problems: string[] }> = ({ title, problems }) => (
  <div className="bg-secondary p-8 rounded-2xl border border-gray-700 h-full">
    <h3 className="text-2xl font-bold text-white mb-6 text-center">{title}</h3>
    <ul className="space-y-4">
      {problems.map((problem, index) => (
        <li key={index} className="flex items-start">
          <span className="text-primary font-bold text-2xl mr-3 mt-[-4px]">✓</span>
          <span className="text-gray-300">{problem}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ProblemSection: React.FC = () => {
  const sectionRef = useScrollAnimation<HTMLDivElement>();
  return (
    <section ref={sectionRef} className="animated-section py-20 lg:py-32 bg-[#121221]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            혹시 이런 <span className="text-primary">어려움</span>, 없으셨나요?
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <ProblemCard
            title="👤 크리에이터"
            problems={[
              "수많은 지원자 중 옥석을 가리기 힘들어요.",
              "채널과 '결'이 맞는 편집자를 찾고 싶어요.",
              "포트폴리오만으로 실력 판단이 어려워요.",
            ]}
          />
          <ProblemCard
            title="🧑‍💻 파트너"
            problems={[
              "내 실력을 제대로 보여줄 곳이 마땅치 않아요.",
              "불안정한 수입, 안정적인 프로젝트를 원해요.",
              "어떤 크리에이터와 일해야 할지 막막해요.",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
