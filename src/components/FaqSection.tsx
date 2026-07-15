'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '@/lib/constants';
import ScrollReveal from './ScrollReveal';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-white" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-4">
            <span className="w-8 h-0.5 bg-primary" />
            FAQ
          </span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </ScrollReveal>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-secondary rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-6 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="text-text font-semibold text-sm pr-4">{faq.question}</span>
                <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-primary" />
                  ) : (
                    <Plus className="w-4 h-4 text-primary" />
                  )}
                </div>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <p className="px-6 pb-6 text-gray text-sm leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
