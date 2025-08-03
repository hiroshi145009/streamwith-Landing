
import React from 'react';

export const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M9.315 7.584C12.195 3.883 19.695 4.032 22.5 8.25c-1.465 1.843-3.415 3.34-5.758 4.423C14.133 13.843 12 16.547 12 19.5c-2.585 0-4.93-1.602-6.533-3.958C2.559 10.999 4.634 5.25 9.315 7.584zM12 21a8.999 8.999 0 00-8.924-8.026c.245-.022.489-.05.733-.083a23.999 23.999 0 0115.382-7.53c.252.19.497.389.736.598A8.999 8.999 0 0012 21z"
      clipRule="evenodd"
    />
  </svg>
);

export const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z"
      clipRule="evenodd"
    />
  </svg>
);
