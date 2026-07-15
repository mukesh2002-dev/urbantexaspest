'use client';
import { motion } from 'framer-motion';
import { Home, Shield, Leaf, Award, Phone, Star, ArrowRight, Check } from 'lucide-react';
import { COMPANY } from '@/lib/constants';
import ScrollReveal from '@/components/ScrollReveal';

const features = [
  'Complete home pest control solutions',
  'Eco-friendly, family-safe treatments',
  'Targeted approach for Texas pests',
  'Year-round protection plans',
  'Satisfaction guaranteed',
  'Licensed and insured professionals',
  'Free initial inspection',
  'Flexible scheduling',
];

const benefits = [
  { icon: Shield, title: 'Safe & Effective', desc: 'Treatments that protect your family and pets while eliminating pests.' },
  { icon: Award, title: '25+ Years Experience', desc: 'Trusted expertise in San Antonio residential pest control.' },
  { icon: Star, title: '338+ 5-Star Reviews', desc: 'Join thousands of satisfied San Antonio homeowners.' },
  { icon: Leaf, title: 'Eco-Friendly', desc: 'Environmentally responsible solutions you can feel good about.' },
];

export default function ResidentialContent() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-text via-text/95 to-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span>/</span>
              <span className="text-white">Residential Pest Control</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white max-w-3xl">
              Residential <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent">Pest Control</span> in San Antonio
            </h1>
            <p className="text-white/70 text-lg mt-4 max-w-2xl">Protect your home and family with San Antonio&apos;s most trusted residential pest control services.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text mb-6">
                Complete Home <span className="text-gradient">Pest Protection</span>
              </h2>
              <p className="text-gray leading-relaxed mb-6">
                Your home is your sanctuary. At Urban Texas Pest Control, we provide comprehensive residential pest control solutions designed to keep your San Antonio home pest-free year-round. Our family-owned company treats every home as if it were our own.
              </p>
              <p className="text-gray leading-relaxed mb-8">
                From ants and cockroaches to termites and rodents, our experienced technicians use eco-friendly methods to eliminate current infestations and prevent future problems.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-text">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="bg-secondary rounded-3xl p-8 lg:p-10">
                <h3 className="text-xl font-semibold text-text mb-6">Get Your Free Quote</h3>
                <p className="text-gray text-sm mb-6">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
                <form onSubmit={(e) => { e.preventDefault(); window.location.href = `mailto:${COMPANY.email}?subject=Residential Pest Control Quote&body=Name: ${(e.target as any).name.value}%0D%0APhone: ${(e.target as any).phone.value}`; }} className="space-y-4">
                  <input type="text" name="name" placeholder="Your Name" required className="w-full px-4 py-3.5 bg-white rounded-xl border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm" />
                  <input type="email" name="email" placeholder="Email Address" required className="w-full px-4 py-3.5 bg-white rounded-xl border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm" />
                  <input type="tel" name="phone" placeholder="Phone Number" required className="w-full px-4 py-3.5 bg-white rounded-xl border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm" />
                  <button type="submit" className="w-full px-6 py-4 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">Get Free Quote</button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-6 text-center card-hover shadow-premium">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4"><b.icon className="w-6 h-6 text-primary" /></div>
                <h3 className="text-lg font-semibold text-text mb-2">{b.title}</h3>
                <p className="text-gray text-sm">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text mb-6">Ready to Protect Your Home?</h2>
            <p className="text-gray mb-8">Get a free quote today and experience the Urban Texas difference.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/request-quote" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 group">Request Free Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></a>
              <a href={`tel:${COMPANY.phoneRaw}`} className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-all"><Phone className="w-4 h-4" /> Call {COMPANY.phone}</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
