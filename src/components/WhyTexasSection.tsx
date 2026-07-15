'use client';
import { Thermometer, Droplets, Bug, Home, AlertTriangle, Shield } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const factors = [
  {
    icon: Thermometer,
    title: 'Warm Climate',
    description: 'San Antonio\'s subtropical climate with average temperatures of 68°F creates ideal conditions for year-round pest breeding.',
  },
  {
    icon: Droplets,
    title: 'High Humidity',
    description: 'High humidity levels provide the moisture that pests like termites, cockroaches, and silverfish need to thrive.',
  },
  {
    icon: Bug,
    title: 'Pest Diversity',
    description: 'Texas is home to over 100 species of pests including fire ants, scorpions, black widows, and brown recluse spiders.',
  },
  {
    icon: Home,
    title: 'Urban Development',
    description: 'Growing construction in San Antonio disrupts natural habitats, driving pests into homes and businesses seeking shelter.',
  },
];

export default function WhyTexasSection() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-4">
              <span className="w-8 h-0.5 bg-primary" />
              WHY TEXAS HOMES NEED PEST CONTROL
            </span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text mb-6">
              San Antonio&apos;s Climate Creates the Perfect{' '}
              <span className="text-gradient">Pest Breeding Ground</span>
            </h2>
            <p className="text-gray leading-relaxed mb-6">
              The warm, humid climate of San Antonio creates the perfect breeding ground for pests. Our subtropical climate means pest activity doesn&apos;t stop in winter — it&apos;s a year-round challenge for homeowners and businesses alike.
            </p>
            <p className="text-gray leading-relaxed mb-8">
              At Urban Texas Pest Control, we understand the unique pest pressures that San Antonio properties face. From fire ants in summer to rodents seeking warmth in winter, our comprehensive approach addresses every season&apos;s challenges.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-xl">
                <AlertTriangle className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-text">Year-Round Risk</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-xl">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-text">Professional Protection</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="grid sm:grid-cols-2 gap-4">
              {factors.map((factor, index) => (
                <div
                  key={factor.title}
                  className="bg-secondary rounded-2xl p-6 card-hover shadow-premium"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <factor.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-text mb-2">{factor.title}</h3>
                  <p className="text-gray text-sm leading-relaxed">{factor.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
