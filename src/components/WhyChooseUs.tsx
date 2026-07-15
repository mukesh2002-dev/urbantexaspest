'use client';
import { motion } from 'framer-motion';
import { Home, Leaf, DollarSign, Award, CheckCircle, Star, Globe } from 'lucide-react';
import { WHY_CHOOSE_US } from '@/lib/constants';
import ScrollReveal from './ScrollReveal';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaHome: Home, FaLeaf: Leaf, FaDollarSign: DollarSign, FaAward: Award,
  FaCheckCircle: CheckCircle, FaStar: Star, FaGlobeAmericas: Globe,
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-4">
            <span className="w-8 h-0.5 bg-primary" />
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text mb-6">
            Why Choose <span className="text-gradient">Urban Texas Pest Control</span>?
          </h2>
          <p className="text-gray leading-relaxed">
            We are a family-owned business committed to transforming the San Antonio pest control industry with transparent, affordable, and customer-centric solutions.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[item.icon] || Leaf;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group bg-white rounded-2xl p-8 card-hover shadow-premium"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-text mb-3">{item.title}</h3>
                <p className="text-gray text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
