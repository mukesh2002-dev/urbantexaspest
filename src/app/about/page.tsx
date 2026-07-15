import type { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Urban Texas Pest Control - San Antonio\'s trusted family-owned pest control company with 25+ years of experience.',
};

export default function AboutPage() {
  return <AboutContent />;
}
