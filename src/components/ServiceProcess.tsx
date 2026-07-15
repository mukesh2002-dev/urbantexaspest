'use client';
import { motion } from 'framer-motion';
import { Search, Shield, ClipboardCheck, Eye } from 'lucide-react';
import { SERVICE_PROCESS } from '@/lib/constants';
import ScrollReveal from './ScrollReveal';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaSearch: Search, FaSprayCan: Eye, FaShieldAlt: Shield, FaClipboardCheck: ClipboardCheck,
};

export default function ServiceProcess() {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-4">
            <span className="w-8 h-0.5 bg-primary" />
            OUR PROCESS
          </span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text mb-6">
            How We <span className="text-gradient">Protect Your Home</span>
          </h2>
          <p className="text-gray leading-relaxed">
            Our proven 4-step process ensures thorough pest control from inspection to ongoing protection.
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-24 left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-0.5 bg-border">
            <motion.div
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-full bg-primary"
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICE_PROCESS.map((step, index) => {
              const Icon = iconMap[step.icon] || Search;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative text-center"
                >
                  <div className="relative inline-flex mb-6">
                    <div className="w-20 h-20 bg-white rounded-2xl shadow-premium flex items-center justify-center relative z-10 mx-auto">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-xl flex items-center justify-center text-white text-sm font-bold z-20">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-text mb-3">{step.title}</h3>
                  <p className="text-gray text-sm leading-relaxed max-w-xs mx-auto">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
