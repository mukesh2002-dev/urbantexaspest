'use client';
import { motion } from 'framer-motion';
import { Home, Shield, Dog, Leaf, Clock, Sparkles } from 'lucide-react';

const badges = [
  { icon: Home, label: 'Family Owned' },
  { icon: Shield, label: 'Licensed & Insured' },
  { icon: Dog, label: 'Pet Friendly' },
  { icon: Leaf, label: 'Eco Friendly' },
  { icon: Clock, label: 'Same Day Service' },
];

export default function TrustBar() {
  return (
    <section className="py-10 bg-secondary border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-3 group"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-premium group-hover:scale-105 transition-all duration-300">
                <badge.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <span className="text-sm font-semibold text-text">{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
