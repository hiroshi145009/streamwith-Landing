import React, { useState } from 'react';
import { saveReservation } from '../../lib/supabase';

interface ReservationData {
  email: string;
}

const ReservationSection: React.FC = () => {
  const [formData, setFormData] = useState<ReservationData>({
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [showPrivacyDetails, setShowPrivacyDetails] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!privacyConsent) {
      setSubmitMessage('개인정보 수집 이용 동의를 체크해주세요.');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Supabase에 데이터 저장
      await saveReservation({
        email: formData.email
      });
      
      setSubmitMessage('예약이 완료되었습니다! 앱 출시 시 특별 혜택을 받으실 수 있습니다.');
      setFormData({ email: '' });
      setPrivacyConsent(false);
      
      // 3초 후 메시지 삭제
      setTimeout(() => {
        setSubmitMessage('');
      }, 3000);
      
    } catch (error) {
      console.error('예약 저장 오류:', error);
      setSubmitMessage('예약 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="reservation-section" className="py-20 bg-gradient-to-b from-secondary to-[#0F0F1B]">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            앱 출시 알림 <span className="text-primary">예약하기</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            앱 출시 시 특별 혜택과 얼리 액세스를 받아보세요!
          </p>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="mb-6">
              <div className="flex items-center justify-center space-x-4 text-primary mb-4">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <span className="text-white">프리미엄 기능 무료 체험</span>
              </div>
              <div className="flex items-center justify-center space-x-4 text-primary mb-4">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <span className="text-white">우선 파트너 매칭 서비스</span>
              </div>
              <div className="flex items-center justify-center space-x-4 text-primary">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <span className="text-white">출시 기념 특별 할인</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                  이메일 주소 *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              
              {/* 개인정보 수집 이용 동의 */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy-consent"
                    checked={privacyConsent}
                    onChange={(e) => setPrivacyConsent(e.target.checked)}
                    className="mt-1 w-5 h-5 text-primary bg-white/10 border-white/20 rounded focus:ring-primary focus:ring-2"
                    required
                  />
                  <div className="flex-1">
                    <label htmlFor="privacy-consent" className="text-white text-sm cursor-pointer">
                      개인정보 수집 이용에 동의합니다. *
                    </label>
                    <button
                      type="button"
                      onClick={() => setShowPrivacyDetails(!showPrivacyDetails)}
                      className="ml-2 text-primary text-sm underline hover:text-primary/80"
                    >
                      자세히보기
                    </button>
                  </div>
                </div>
                
                {showPrivacyDetails && (
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-sm text-gray-300">
                    <h4 className="text-white font-medium mb-2">개인정보 수집 이용 안내</h4>
                    <div className="space-y-2">
                      <div>
                        <span className="font-medium text-white">수집 항목:</span> 이메일
                      </div>
                      <div>
                        <span className="font-medium text-white">수집 목적:</span> 출시 알림 및 사전 예약자 확인
                      </div>
                      <div>
                        <span className="font-medium text-white">보유 기간:</span> 수집 목적 달성 후 즉시 폐기
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !privacyConsent}
                className="w-full bg-primary hover:bg-primary/80 disabled:bg-primary/50 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
              >
                {isSubmitting ? '제출 중...' : '예약 제출하기'}
              </button>
            </form>

            {submitMessage && (
              <div className={`mt-4 p-4 rounded-lg ${
                submitMessage.includes('완료') 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                  : 'bg-red-500/20 text-red-400 border border-red-500/30'
              }`}>
                {submitMessage}
              </div>
            )}

            <p className="text-gray-400 text-sm mt-6">
              * 입력하신 이메일은 앱 출시 알림 목적으로만 사용되며, 목적 달성 후 즉시 폐기됩니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
