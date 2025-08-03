import React, { useState, useEffect } from 'react';

interface Reservation {
  id: string;
  email: string;
  phone: string;
  timestamp: string;
}

const AdminPanel: React.FC = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 키보드 단축키로 관리자 패널 토글 (Ctrl + Alt + A)
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.altKey && e.key === 'a') {
        setIsVisible(!isVisible);
        loadReservations();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isVisible]);

  const loadReservations = () => {
    const data = localStorage.getItem('streamwith-reservations');
    if (data) {
      const parsed = JSON.parse(data);
      setReservations(parsed.sort((a: Reservation, b: Reservation) => 
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      ));
    }
  };

  const exportToCSV = () => {
    const headers = ['ID', '이메일', '전화번호', '등록일시'];
    const csvContent = [
      headers.join(','),
      ...reservations.map(r => [
        r.id,
        r.email,
        r.phone,
        new Date(r.timestamp).toLocaleString('ko-KR')
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `streamwith-reservations-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  const clearAllData = () => {
    if (window.confirm('모든 예약 데이터를 삭제하시겠습니까?')) {
      localStorage.removeItem('streamwith-reservations');
      setReservations([]);
    }
  };

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 right-4 text-xs text-gray-500 bg-black/20 px-2 py-1 rounded">
        Ctrl + Alt + A 로 관리자 패널 열기
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-hidden">
        <div className="p-6 border-b bg-gray-50">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">예약 관리 패널</h2>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>
          <p className="text-gray-600 mt-2">총 {reservations.length}개의 예약</p>
        </div>
        
        <div className="p-6">
          <div className="flex gap-4 mb-6">
            <button
              onClick={loadReservations}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              새로고침
            </button>
            <button
              onClick={exportToCSV}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              disabled={reservations.length === 0}
            >
              CSV 내보내기
            </button>
            <button
              onClick={clearAllData}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              disabled={reservations.length === 0}
            >
              모든 데이터 삭제
            </button>
          </div>

          <div className="overflow-auto max-h-[400px]">
            {reservations.length === 0 ? (
              <p className="text-gray-500 text-center py-8">아직 예약이 없습니다.</p>
            ) : (
              <table className="w-full text-sm">
                <thead className="bg-gray-100 sticky top-0">
                  <tr>
                    <th className="p-3 text-left">ID</th>
                    <th className="p-3 text-left">이메일</th>
                    <th className="p-3 text-left">전화번호</th>
                    <th className="p-3 text-left">등록일시</th>
                  </tr>
                </thead>
                <tbody>
                  {reservations.map((reservation, index) => (
                    <tr key={reservation.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="p-3 font-mono text-xs">{reservation.id}</td>
                      <td className="p-3">{reservation.email}</td>
                      <td className="p-3">{reservation.phone}</td>
                      <td className="p-3">{new Date(reservation.timestamp).toLocaleString('ko-KR')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
