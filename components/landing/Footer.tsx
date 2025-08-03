
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Streamwith. All rights reserved.</p>
        <p className="text-sm mt-2">AI 파트너 매칭의 새로운 기준</p>
      </div>
    </footer>
  );
};

export default Footer;
