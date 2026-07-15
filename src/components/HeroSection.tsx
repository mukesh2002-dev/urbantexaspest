'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Star, Shield, Award, BadgeCheck } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0f1f3d] to-[#1a3a2a]">
      {/* Premium gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      {/* Animated background shapes */}
      <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-10 w-64 h-64 border border-white/[0.03] rounded-full"
        />
        <motion.div
          animate={{ y: [0, 40, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-40 right-20 w-96 h-96 border border-white/[0.03] rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 right-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ x: [0, 50, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-accent/10 rounded-full blur-2xl"
        />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium mb-8 border border-white/10"
          >
            <Shield className="w-4 h-4 text-primary-light" />
            San Antonio&apos;s Trusted Pest Control Experts
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-6"
          >
            Protect Your Home From Texas Pests With{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent">Trusted Local Experts</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg sm:text-xl text-white/70 max-w-2xl mb-8 leading-relaxed"
          >
            Family-owned San Antonio pest control with 25+ years of experience. Safe, eco-friendly, and guaranteed results for your home or business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <a
              href="/request-quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 group"
            >
              Request Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+12109002323"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-xl text-sm font-semibold hover:bg-white/20 transition-all duration-300 group"
            >
              <Phone className="w-4 h-4" />
              Call Now (210) 900-2323
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap items-center gap-6"
          >
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <Star className="w-4 h-4 text-accent fill-accent" />
              <Star className="w-4 h-4 text-accent fill-accent" />
              <Star className="w-4 h-4 text-accent fill-accent" />
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="ml-1 font-semibold text-white">5.0</span>
              <span className="text-white/50">(338+ Reviews)</span>
            </div>
            <div className="h-4 w-px bg-white/20" />
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <Award className="w-4 h-4 text-primary-light" />
              <span>25+ Years</span>
            </div>
            <div className="h-4 w-px bg-white/20" />
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <BadgeCheck className="w-4 h-4 text-primary-light" />
              <span>Licensed</span>
            </div>
            <div className="h-4 w-px bg-white/20" />
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <Shield className="w-4 h-4 text-primary-light" />
              <span>Insured</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
