import type { Metadata } from 'next';
import BlogContent from './BlogContent';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read the latest pest control tips, guides, and articles from Urban Texas Pest Control in San Antonio, TX.',
};

export default function BlogPage() {
  return <BlogContent />;
}
