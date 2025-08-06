
import React from 'react';
import { InstagramIcon, TwitterIcon, YoutubeIcon } from '../../constants/icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          {/* 로고 및 설명 */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/images/logo_white.png" 
                alt="Streamwith Logo" 
                className="h-8 w-auto"
              />
              <span className="text-white text-xl font-bold">Streamwith</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              AI 파트너 매칭의 새로운 기준. 더 나은 스트리밍 경험을 위한 최고의 파트너를 찾아보세요.
            </p>
          </div>

          {/* Contact 섹션 */}
          <div className="flex-1">
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-white/10"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a 
                href="https://www.twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-white/10"
                aria-label="Twitter"
              >
                <TwitterIcon className="h-6 w-6" />
              </a>
              <a 
                href="https://www.youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-white/10"
                aria-label="YouTube"
              >
                <YoutubeIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* 하단 구분선 및 저작권 */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Streamwith. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
