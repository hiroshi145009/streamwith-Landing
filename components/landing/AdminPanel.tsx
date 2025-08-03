import React, { useState, useEffect } from 'react';
import { getReservations, clearAllReservations, ReservationData } from '../../lib/supabase';

interface Reservation {
  id: number;
  email: string;
  phone: string;
  created_at: string;
}

const AdminPanel: React.FC = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPasswordInput, setShowPasswordInput] = useState(false);

  // 관리자 비밀번호 (실제 운영에서는 환경변수나 서버에서 관리해야 함)
  const ADMIN_PASSWORD = 'dave1219!';

  useEffect(() => {
    // 키보드 단축키로 관리자 패널 토글 (Ctrl + Alt + A)
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.altKey && e.key === 'a') {
        if (isAuthenticated) {
          setIsVisible(!isVisible);
          if (!isVisible) {
            loadReservations();
          }
        } else {
          setShowPasswordInput(true);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isVisible, isAuthenticated]);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setIsVisible(true);
      setShowPasswordInput(false);
      setPassword('');
      loadReservations();
    } else {
      alert('잘못된 비밀번호입니다.');
      setPassword('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsVisible(false);
  };

  const loadReservations = async () => {
    try {
      const data = await getReservations();
      setReservations(data || []);
    } catch (error) {
      console.error('예약 데이터 로드 오류:', error);
      alert('데이터를 불러오는 중 오류가 발생했습니다.');
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
        new Date(r.created_at).toLocaleString('ko-KR')
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `streamwith-reservations-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  const clearAllData = async () => {
    if (window.confirm('모든 예약 데이터를 삭제하시겠습니까?')) {
      try {
        await clearAllReservations();
        setReservations([]);
        alert('모든 데이터가 삭제되었습니다.');
      } catch (error) {
        console.error('데이터 삭제 오류:', error);
        alert('데이터 삭제 중 오류가 발생했습니다.');
      }
    }
  };

  // 비밀번호 입력 화면
  if (showPasswordInput) {
    return (
      <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">관리자 인증</h2>
          <form onSubmit={handlePasswordSubmit}>
            <div className="mb-4">
              <label htmlFor="admin-password" className="block text-gray-700 text-sm font-medium mb-2">
                관리자 비밀번호를 입력하세요
              </label>
              <input
                type="password"
                id="admin-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="비밀번호 입력"
                autoFocus
              />
            </div>
            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                확인
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowPasswordInput(false);
                  setPassword('');
                }}
                className="flex-1 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                취소
              </button>
            </div>
          </form>
          <p className="text-xs text-gray-500 mt-4">
            * 관리자만 접근할 수 있습니다
          </p>
        </div>
      </div>
    );
  }

  if (!isVisible || !isAuthenticated) {
    return null; // 완전히 숨김
  }

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-hidden">
        <div className="p-6 border-b bg-gray-50">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">예약 관리 패널</h2>
              <p className="text-gray-600 mt-1">총 {reservations.length}개의 예약</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">
                ✓ 인증됨
              </span>
              <button
                onClick={handleLogout}
                className="text-sm bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
              >
                로그아웃
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
          </div>
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
                      <td className="p-3">{new Date(reservation.created_at).toLocaleString('ko-KR')}</td>
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
