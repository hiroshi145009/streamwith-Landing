import React from 'react';
import { mockReviews } from '../../constants/mockData';
import { Review } from '../../types';
import { StarIcon } from '../../constants/icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
  <div className="bg-secondary p-6 rounded-2xl flex flex-col h-full border border-gray-700 transform transition-transform duration-300 hover:-translate-y-2">
    <div className="flex-grow">
        <div className="flex items-center mb-4">
        <img src={review.reviewer.avatarUrl} alt={review.reviewer.name} className="w-12 h-12 rounded-full mr-4" />
        <div>
            <h4 className="font-bold text-white">{review.reviewer.name}</h4>
            <p className="text-sm text-gray-400">{review.reviewer.role}</p>
        </div>
        </div>
        <p className="text-gray-300">"{review.text}"</p>
    </div>
    <div className="flex mt-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon
          key={i}
          className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-600'}`}
        />
      ))}
    </div>
  </div>
);

const ReviewsSection: React.FC = () => {
  const sectionRef = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={sectionRef} className="animated-section py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            실제 사용자들의 <span className="text-primary">성공 사례</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;