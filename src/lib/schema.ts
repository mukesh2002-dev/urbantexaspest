import { COMPANY } from './constants';

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'PestControl'],
    name: COMPANY.name,
    image: 'https://urbantexaspest.com/og-image.jpg',
    '@id': 'https://urbantexaspest.com',
    url: 'https://urbantexaspest.com',
    telephone: COMPANY.phone,
    email: COMPANY.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '9450 Brushy Point',
      addressLocality: 'San Antonio',
      addressRegion: 'TX',
      postalCode: '78250',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 29.4874,
      longitude: -98.7016,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    sameAs: [
      COMPANY.social.facebook,
      COMPANY.social.instagram,
      COMPANY.social.yelp,
    ],
    description: 'San Antonio\'s trusted pest control company with 25+ years of experience. Family-owned, eco-friendly residential and commercial pest control services.',
    areaServed: [
      { '@type': 'City', name: 'San Antonio' },
      { '@type': 'City', name: 'Kirby' },
      { '@type': 'City', name: 'Leon Valley' },
      { '@type': 'City', name: 'Converse' },
      { '@type': 'City', name: 'Live Oak' },
      { '@type': 'City', name: 'Universal City' },
      { '@type': 'City', name: 'Schertz' },
      { '@type': 'City', name: 'Timberwood Park' },
      { '@type': 'City', name: 'China Grove' },
      { '@type': 'City', name: 'Bulverde' },
      { '@type': 'City', name: 'Selma' },
      { '@type': 'City', name: 'Helotes' },
      { '@type': 'City', name: 'Fair Oaks Ranch' },
      { '@type': 'City', name: 'Cibolo' },
      { '@type': 'City', name: 'Lakehills' },
      { '@type': 'City', name: 'Von Ormy' },
    ],
    foundingDate: '1999',
    founder: {
      '@type': 'Person',
      name: 'CJ Petersen',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '338',
      bestRating: '5',
      worstRating: '1',
    },
  };
}

export function serviceSchema(serviceName: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${serviceName} - San Antonio`,
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY.name,
      url: 'https://urbantexaspest.com',
    },
    areaServed: {
      '@type': 'City',
      name: 'San Antonio',
    },
    description,
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://urbantexaspest.com${item.url}`,
    })),
  };
}
