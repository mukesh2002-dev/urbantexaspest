'use client';
import { motion } from 'framer-motion';
import { Bug, Hammer, Shield, Wrench, AlertTriangle, Bed, BellMinus, Search, CircleDot, Fish, Music, Scan } from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import ScrollReveal from './ScrollReveal';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaBug: Bug, FaHammer: Hammer, FaRat: Shield, FaAnt: Wrench, FaBeetle: AlertTriangle,
  FaBed: Bed, FaBee: BellMinus, FaSpider: Search, FaDotCircle: CircleDot,
  FaFish: Fish, FaMusic: Music, FaSearch: Scan,
};

export default function ServicesSection() {
  const displayServices = SERVICES.slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-4">
            <span className="w-8 h-0.5 bg-primary" />
            OUR SERVICES
          </span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text mb-6">
            San Antonio <span className="text-gradient">Pest Control Services</span>
          </h2>
          <p className="text-gray leading-relaxed">
            The warm, humid climate of San Antonio creates the perfect breeding ground for pests. We use advanced techniques to combat local pests while preventing future infestations.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayServices.map((service, index) => {
            const Icon = iconMap[service.icon] || Bug;
            return (
              <motion.a
                key={service.slug}
                href={`/services/${service.slug}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group bg-white rounded-2xl overflow-hidden card-hover shadow-premium border border-border/50"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-gray text-sm leading-relaxed mb-5">{service.shortDescription}</p>
                  <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
                    Learn More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/20 group"
          >
            View All Services
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
