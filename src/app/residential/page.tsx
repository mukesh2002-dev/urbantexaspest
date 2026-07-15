import type { Metadata } from 'next';
import ResidentialContent from './ResidentialContent';

export const metadata: Metadata = {
  title: 'Residential Pest Control San Antonio',
  description: 'Protect your San Antonio home with eco-friendly residential pest control. Family-owned, 25+ years experience, guaranteed results.',
};

export default function ResidentialPage() {
  return <ResidentialContent />;
}
