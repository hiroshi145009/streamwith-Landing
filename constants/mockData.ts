import { Review } from '../types';

export const mockReviews: Review[] = [
  {
    id: 'landing-1',
    reviewer: {
      id: 1,
      name: '김민준',
      role: '크리에이터',
      avatarUrl: 'https://picsum.photos/id/1005/100/100',
    },
    rating: 5,
    text: "편집자 찾는 게 이렇게 쉬울 줄 몰랐어요. 전에는 커뮤니티에서 글 올리고 몇 주씩 기다려야 했는데, 여기서는 하루 만에 딱 맞는 분을 찾았습니다. 편집 스타일도 제가 원하던 그대로예요!",
    timestamp: "1주 전",
  },
  {
    id: 'landing-2',
    reviewer: {
      id: 2,
      name: '박소영',
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
      name: '이준호',
      role: '크리에이터',
      avatarUrl: 'https://picsum.photos/id/1025/100/100',
    },
    rating: 5,
    text: "매니저님이 정말 꼼꼼하게 관리해주세요. 촬영 일정부터 협찬 관리까지 다 맡겨두니까 저는 콘텐츠 제작에만 집중할 수 있어서 좋아요. 수익도 30% 정도 늘었네요.",
    timestamp: "3주 전",
  },
  {
    id: 'landing-4',
    reviewer: {
      id: 4,
      name: '최지우',
      role: '파트너 (디자이너)',
      avatarUrl: 'https://picsum.photos/id/1027/100/100',
    },
    rating: 4,
    text: "앱 내에서 바로 채팅하고 계약까지 할 수 있어서 정말 편리해요. 커뮤니케이션 과정이 투명해서 좋습니다.",
    timestamp: "1개월 전",
  },
];
