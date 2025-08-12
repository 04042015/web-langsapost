export interface Article {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  publishDate: string;
  views: number;
  featured: boolean;
  popular: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'editor';
  password?: string;
}

export interface NewsTickerItem {
  id: string;
  text: string;
  link?: string;
}

export interface Infographic {
  id: string;
  title: string;
  image: string;
  description: string;
  category: string;
  publishDate: string;
}

export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  description: string;
  category: string;
  publishDate: string;
  views: number;
}

export interface Comment {
  id: string;
  articleId: string;
  name: string;
  email: string;
  content: string;
  publishDate: string;
  replies?: Comment[];
}

export interface Advertisement {
  id: string;
  title: string;
  image: string;
  link: string;
  position: 'header' | 'sidebar' | 'article';
}