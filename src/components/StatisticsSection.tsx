'use client';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Award, Star, Users, Target } from 'lucide-react';
import { STATISTICS } from '@/lib/constants';

const icons = [Award, Star, Users, Target];

export default function StatisticsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-primary to-primary-dark">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {STATISTICS.map((stat, index) => {
            const Icon = icons[index] || Award;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`text-center lg:py-4 ${index < STATISTICS.length - 1 ? 'lg:border-r border-white/20' : ''}`}
              >
                <Icon className="w-8 h-8 text-white/60 mx-auto mb-4" />
                <div className="text-4xl lg:text-5xl font-heading font-bold text-white mb-1">
                  {inView ? (
                    <>
                      <CountUp start={0} end={stat.value} duration={2.5} />
                      {stat.suffix}
                    </>
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
