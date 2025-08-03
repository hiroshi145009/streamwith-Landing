export interface Review {
  id: string;
  reviewer: {
    id: number;
    name: string;
    role: string;
    avatarUrl: string;
  };
  rating: number;
  text: string;
  timestamp: string;
}

export interface UserSalary {
    type: 'monthly' | 'per_piece' | 'per_minute' | 'negotiable';
    range?: string;
}

export interface ImagePortfolioItem {
    id: string;
    thumbnailUrl: string;
    title: string;
}

export interface User {
    id: number;
    name: string;
    handle?: string;
    avatarUrl: string;
    role: 'creator' | 'partner';
    jobStatus: 'active' | 'inactive';
    introduction?: string;
    stats?: {
        portfolio?: number;
        rating?: number;
        reviews?: number;
    };
    platforms?: string[];
    languages?: {
        primary: string;
        secondary?: string;
    };
    desiredTasks?: string[];
    preferredTools?: string[];
    requiredExperience?: string;
    contractDuration?: string;
    salary?: UserSalary;
    imagePortfolio?: ImagePortfolioItem[];
    videoPortfolio?: string[];
    channelLink?: string;
    subscriberCount?: string;
    lastActive?: string;
    profileRegistration?: any;
    contract?: any;
    isFeatured?: boolean;
}

export interface JobPostingSalary {
    type: 'monthly' | 'per_piece' | 'per_minute' | 'negotiable';
    amount?: number;
}

export interface JobPosting {
    id: string;
    creator: User;
    title: string;
    platforms?: string[];
    languages?: {
        primary: string;
        secondary?: string;
    };
    desiredTasks?: string[];
    preferredTools?: string[];
    requiredExperience?: string;
    contractDuration?: string;
    salary?: JobPostingSalary;
    boost?: 'standard' | 'premium';
    description: string;
    views?: number;
    timestamp?: string;
    createdAt?: string;
}

export interface Message {
    id: string;
    text: string;
    sender: 'me' | 'other';
    timestamp: string;
    user: User;
    type: 'text' | 'contract_request';
    requestStatus?: 'pending';
}

export interface ChatConversation {
    id: number;
    user: User;
    lastMessage: string;
    timestamp: string;
    unreadCount: number;
}

export interface CreditTransaction {
    id: string;
    type: 'withdrawal' | 'deposit';
    date: string;
    description: string;
    amount: number;
}
