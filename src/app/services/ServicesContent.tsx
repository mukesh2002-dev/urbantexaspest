'use client';
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, X, Bug, Shield, Hammer, Rat, Bed, Dot, Music, Fish, ArrowRight, Phone } from 'lucide-react';
import { SERVICES, COMPANY } from '@/lib/constants';
import ScrollReveal from '@/components/ScrollReveal';
import type { Service } from '@/lib/types';

const iconMap: Record<string, typeof Bug> = {
  FaBug: Bug, FaHammer: Hammer, FaRat: Rat, FaAnt: Bug, FaBeetle: Bug, FaBed: Bed,
  FaBee: Bug, FaSpider: Shield, FaDotCircle: Dot, FaMusic: Music, FaFish: Fish,
};

function getIcon(iconName: string) {
  return iconMap[iconName] || Shield;
}

const categories = [
  { id: 'all', label: 'All Services' },
  { id: 'general', label: 'General' },
  { id: 'wood-destroying', label: 'Wood Destroying' },
  { id: 'dangerous', label: 'Dangerous Pests' },
  { id: 'nuisance', label: 'Nuisance Pests' },
];

const categoryMap: Record<string, string[]> = {
  general: ['pest-control'],
  'wood-destroying': ['termite-control'],
  dangerous: ['black-widow', 'brown-recluse', 'scorpion-control', 'bee-control', 'bed-bug-control'],
  nuisance: ['rodent-control', 'ant-control', 'cockroach-control', 'spider-control', 'tick-control', 'silverfish', 'cricket', 'earwig'],
};

export default function ServicesContent() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = useMemo(() => {
    let list = SERVICES;
    if (activeCategory !== 'all') {
      const slugs = categoryMap[activeCategory] || [];
      list = list.filter((s) => slugs.includes(s.slug));
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((s) => s.title.toLowerCase().includes(q) || s.shortDescription.toLowerCase().includes(q));
    }
    return list;
  }, [search, activeCategory]);

  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-text via-text/95 to-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span>/</span>
              <span className="text-white">Services</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white max-w-3xl">
              Pest Control <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent">Services</span> in San Antonio
            </h1>
            <p className="text-white/70 text-lg mt-4 max-w-2xl">Comprehensive pest control solutions for every pest problem. Explore our full range of services below.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-12">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => { setActiveCategory(cat.id); setSearch(''); }}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    activeCategory === cat.id
                      ? 'bg-primary text-white shadow-lg shadow-primary/20'
                      : 'bg-secondary text-text hover:bg-primary/10'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <div className="relative w-full lg:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray" />
              <input
                type="text"
                value={search}
                onChange={(e) => { setSearch(e.target.value); setActiveCategory('all'); }}
                placeholder="Search services..."
                className="w-full pl-11 pr-10 py-3 bg-secondary rounded-xl border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm"
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray hover:text-text">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <Bug className="w-16 h-16 text-gray/30 mx-auto mb-4" />
              <p className="text-gray text-lg">No services match your search.</p>
              <button onClick={() => { setSearch(''); setActiveCategory('all'); }} className="mt-4 text-primary hover:underline text-sm">Clear filters</button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((service, i) => {
                const Icon = getIcon(service.icon);
                return (
                  <motion.a
                    key={service.id}
                    href={`/services/${service.slug}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i % 12) * 0.05 }}
                    className="group bg-white rounded-2xl p-6 border border-border/30 card-hover shadow-premium hover:shadow-premium-lg"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-text mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-gray text-sm leading-relaxed mb-4">{service.shortDescription}</p>
                    <div className="flex items-center gap-1 text-primary text-sm font-medium">
                      Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.a>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text mb-6">Not Sure What You Need?</h2>
            <p className="text-gray mb-8">Call us for a free consultation. We&apos;ll help you identify the problem and recommend the right solution.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/request-quote" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 group">Schedule Free Inspection <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></a>
              <a href={`tel:${COMPANY.phoneRaw}`} className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-all"><Phone className="w-4 h-4" /> Call {COMPANY.phone}</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
