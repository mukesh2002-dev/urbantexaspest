export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
  benefits: string[];
  isGeneral?: boolean;
}

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
  time: string;
  initial: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  author: string;
  content?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}
