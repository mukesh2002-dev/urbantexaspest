import type { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Urban Texas Pest Control for a free quote. Call (210) 900-2323 or visit us in San Antonio, TX.',
};

export default function ContactPage() {
  return <ContactContent />;
}
