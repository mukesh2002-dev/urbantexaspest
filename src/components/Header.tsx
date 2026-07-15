'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Bug } from 'lucide-react';
import { NAV_LINKS, COMPANY } from '@/lib/constants';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/80 backdrop-blur-xl shadow-premium' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Bug className="w-5 h-5 text-white" strokeWidth={2} />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-text block leading-tight">Urban Texas</span>
              <span className="text-xs text-gray font-medium tracking-wide">Pest Control</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-text/80 hover:text-text transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              <Phone className="w-4 h-4" />
              {COMPANY.phone}
            </a>
            <a
              href="/request-quote"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
            >
              Request Free Quote
            </a>
          </div>

          <button
            onClick={toggleMenu}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center text-text"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-border/50 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-1">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-text/80 hover:text-text hover:bg-secondary rounded-xl transition-all text-sm font-medium"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-4 space-y-3">
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-xl text-sm font-semibold hover:bg-primary hover:text-white transition-all"
                >
                  <Phone className="w-4 h-4" />
                  {COMPANY.phone}
                </a>
                <a
                  href="/request-quote"
                  className="flex items-center justify-center px-6 py-3 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary-dark transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Request Free Quote
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
