import type { Metadata } from 'next';
import ServicesContent from './ServicesContent';

export const metadata: Metadata = {
  title: 'Pest Control Services San Antonio',
  description: 'Explore all pest control services from Urban Texas Pest Control in San Antonio. Residential, commercial, termite, rodent, ant, bed bug, and more.',
};

export default function ServicesPage() {
  return <ServicesContent />;
}
