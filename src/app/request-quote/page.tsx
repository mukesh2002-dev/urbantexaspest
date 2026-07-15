import type { Metadata } from 'next';
import QuoteContent from './QuoteContent';

export const metadata: Metadata = {
  title: 'Request Free Quote',
  description: 'Request a free pest control quote from Urban Texas Pest Control. Call (210) 900-2323 or fill out our online form.',
};

export default function QuotePage() {
  return <QuoteContent />;
}
