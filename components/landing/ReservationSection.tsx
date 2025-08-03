import React, { useState } from 'react';

interface ReservationData {
  email: string;
  phone: string;
}

const ReservationSection: React.FC = () => {
  const [formData, setFormData] = useState<ReservationData>({
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // 로컬 스토리지에 데이터 저장 (실제 서비스에서는 서버로 전송)
      const existingData = localStorage.getItem('streamwith-reservations');
      const reservations = existingData ? JSON.parse(existingData) : [];
      
      const newReservation = {
        ...formData,
        timestamp: new Date().toISOString(),
        id: Date.now().toString()
      };
      
      reservations.push(newReservation);
      localStorage.setItem('streamwith-reservations', JSON.stringify(reservations));
      
      setSubmitMessage('예약이 완료되었습니다! 앱 출시 시 특별 혜택을 받으실 수 있습니다.');
      setFormData({ email: '', phone: '' });
      
      // 3초 후 메시지 삭제
      setTimeout(() => {
        setSubmitMessage('');
      }, 3000);
      
    } catch (error) {
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
              
              <div>
                <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
                  전화번호 *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="010-1234-5678"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
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
              * 입력하신 정보는 앱 출시 알림 목적으로만 사용되며, 개인정보보호정책에 따라 안전하게 관리됩니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
