import { Review } from '../types';

export const mockReviews: Review[] = [
  {
    id: 'landing-1',
    reviewer: {
      id: 1,
      name: '개발왕 김모씨',
      role: '크리에이터',
      avatarUrl: 'https://picsum.photos/id/1005/100/100',
    },
    rating: 5,
    text: "Streamwith AI 덕분에 제 채널과 딱 맞는 편집자님을 만났어요. 지원서 검토 시간을 90%나 줄였습니다!",
    timestamp: "1주 전",
  },
  {
    id: 'landing-2',
    reviewer: {
      id: 2,
      name: '디자인의 신',
      role: '파트너 (영상 편집자)',
      avatarUrl: 'https://picsum.photos/id/1011/100/100',
    },
    rating: 5,
    text: "제 포트폴리오의 가치를 알아봐 주는 크리에이터를 만나 안정적으로 일할 수 있게 되었어요. 최고의 플랫폼입니다.",
    timestamp: "2주 전",
  },
  {
    id: 'landing-3',
    reviewer: {
      id: 3,
      name: '게임리뷰 장인',
      role: '크리에이터',
      avatarUrl: 'https://picsum.photos/id/1025/100/100',
    },
    rating: 5,
    text: "채널 매니저를 구하는 게 정말 막막했는데, Streamwith의 검증된 프로필 덕분에 믿고 맡길 수 있었습니다.",
    timestamp: "3주 전",
  },
  {
    id: 'landing-4',
    reviewer: {
      id: 4,
      name: '썸네일 금손',
      role: '파트너 (디자이너)',
      avatarUrl: 'https://picsum.photos/id/1027/100/100',
    },
    rating: 4,
    text: "앱 내에서 바로 채팅하고 계약까지 할 수 있어서 정말 편리해요. 커뮤니케이션 과정이 투명해서 좋습니다.",
    timestamp: "1개월 전",
  },
];
