import type { Metadata } from 'next';
import CommercialContent from './CommercialContent';

export const metadata: Metadata = {
  title: 'Commercial Pest Control San Antonio',
  description: 'Protect your San Antonio business with commercial pest control. Eco-friendly, compliant with health regulations, customized for your industry.',
};

export default function CommercialPage() {
  return <CommercialContent />;
}
