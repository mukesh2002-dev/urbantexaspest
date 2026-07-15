import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import SmoothScroller from '@/components/SmoothScroller';
import { COMPANY } from '@/lib/constants';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://urbantexaspest.com'),
  title: {
    default: `${COMPANY.name} | Pest Control San Antonio`,
    template: `%s | ${COMPANY.name}`,
  },
  description: `San Antonio's trusted pest control company with 25+ years of experience. Family-owned, eco-friendly residential & commercial pest control. ${COMPANY.phone}`,
  keywords: [
    'pest control San Antonio',
    'pest control San Antonio TX',
    'exterminator San Antonio',
    'termite control San Antonio',
    'rodent control San Antonio',
    'ant control San Antonio',
    'bed bug control San Antonio',
    'cockroach control San Antonio',
    'scorpion control San Antonio',
    'spider control San Antonio',
    'residential pest control San Antonio',
    'commercial pest control San Antonio',
    'Urban Texas Pest Control',
    'San Antonio exterminator',
    'pest control near me',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://urbantexaspest.com',
    siteName: COMPANY.name,
    title: `${COMPANY.name} | Pest Control San Antonio`,
    description: `San Antonio's trusted pest control company with 25+ years of experience. Family-owned, eco-friendly solutions.`,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY.name} | Pest Control San Antonio`,
    description: `San Antonio's trusted pest control company with 25+ years of experience.`,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-background text-text font-sans antialiased overflow-x-hidden">
        <LoadingScreen />
        <SmoothScroller />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['LocalBusiness', 'PestControl'],
              name: COMPANY.name,
              url: 'https://urbantexaspest.com',
              telephone: COMPANY.phone,
              email: COMPANY.email,
              address: {
                '@type': 'PostalAddress',
                streetAddress: '9450 Brushy Point',
                addressLocality: 'San Antonio',
                addressRegion: 'TX',
                postalCode: '78250',
                addressCountry: 'US',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5.0',
                reviewCount: '338',
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
