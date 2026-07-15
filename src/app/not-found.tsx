'use client';
import { motion } from 'framer-motion';
import { Bug, Home, ArrowRight, Search } from 'lucide-react';
import { COMPANY } from '@/lib/constants';
import ScrollReveal from '@/components/ScrollReveal';

export default function NotFoundPage() {
  return (
    <>
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-text via-text/95 to-primary/20 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl mx-auto text-center">
            <ScrollReveal>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative"
              >
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                  <span className="text-[18rem] font-heading font-bold text-white/[0.03] leading-none">404</span>
                </div>
                <div className="relative">
                  <motion.div
                    animate={{ rotate: [0, -5, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8"
                  >
                    <Bug className="w-12 h-12 text-primary" />
                  </motion.div>
                  <h1 className="text-8xl lg:text-9xl font-heading font-bold text-white leading-none mb-4">404</h1>
                  <p className="text-2xl font-heading font-bold text-white mb-4">Page Not Found</p>
                  <p className="text-white/60 text-lg max-w-md mx-auto mb-10">
                    Looks like this page has scurried off like a cockroach in the light. The page you&apos;re looking for doesn&apos;t exist or has been moved.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a
                      href="/"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 group"
                    >
                      <Home className="w-4 h-4" /> Back to Home <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href="/services"
                      className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all group"
                    >
                      <Search className="w-4 h-4" /> View Our Services
                    </a>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
