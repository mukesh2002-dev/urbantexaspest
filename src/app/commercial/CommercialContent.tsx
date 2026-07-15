'use client';
import { motion } from 'framer-motion';
import { Building2, UtensilsCrossed, ShoppingBag, Shield, Phone, ArrowRight, Check, ClipboardCheck, Users, Star, FileText } from 'lucide-react';
import { COMPANY } from '@/lib/constants';
import ScrollReveal from '@/components/ScrollReveal';

const industries = [
  { icon: UtensilsCrossed, title: 'Restaurants & Food Service', desc: 'Maintain health code compliance with specialised pest control for kitchens, dining areas, and storage.' },
  { icon: Building2, title: 'Office Buildings', desc: 'Create a professional, pest-free environment for employees and clients with discreet treatments.' },
  { icon: ShoppingBag, title: 'Retail Spaces', desc: 'Protect your inventory and reputation with scheduled pest control that minimises disruption.' },
  { icon: Users, title: 'Healthcare & Hospitality', desc: 'Maintain the highest hygiene standards with IPM-based pest management programs.' },
  { icon: ClipboardCheck, title: 'Warehouses & Distribution', desc: 'Protect stored goods from rodents and insects with comprehensive perimeter control.' },
  { icon: Building2, title: 'Multi-Family Housing', desc: 'Keep apartments and common areas pest-free through coordinated treatment schedules.' },
];

const features = [
  'Customised treatment plans for your business type',
  'Health department compliance guaranteed',
  'Flexible scheduling around your hours',
  'Discreet, uniformed technicians',
  'Digital reporting and documentation',
  'Employee and customer safety prioritised',
  'Integrated Pest Management (IPM) approach',
  'Emergency service available',
];

const benefits = [
  { icon: Shield, title: 'Compliance Focused', desc: 'We help you meet health department regulations and industry standards.' },
  { icon: FileText, title: 'Detailed Reporting', desc: 'Receive full documentation of every service visit for your records.' },
  { icon: Star, title: '338+ 5-Star Reviews', desc: 'Trusted by San Antonio businesses across every industry.' },
  { icon: Users, title: 'Staff Trained', desc: 'Our technicians are background-checked and trained for commercial environments.' },
];

export default function CommercialContent() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-text via-text/95 to-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span>/</span>
              <span className="text-white">Commercial Pest Control</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white max-w-3xl">
              Commercial <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent">Pest Control</span> in San Antonio
            </h1>
            <p className="text-white/70 text-lg mt-4 max-w-2xl">Protect your business, reputation, and bottom line with commercial pest control tailored to your industry.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text mb-6">
                Pest Control for <span className="text-gradient">Your Business</span>
              </h2>
              <p className="text-gray leading-relaxed mb-6">
                A pest problem can damage your business reputation overnight. At Urban Texas Pest Control, we provide discreet, professional commercial pest control services designed to protect your employees, customers, and bottom line.
              </p>
              <p className="text-gray leading-relaxed mb-8">
                We understand the unique challenges San Antonio businesses face. Our customised plans include flexible scheduling, detailed documentation, and treatments that prioritise health compliance and safety.
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
                <h3 className="text-xl font-semibold text-text mb-6">Request a Commercial Quote</h3>
                <p className="text-gray text-sm mb-6">Tell us about your business and we&apos;ll create a customised plan.</p>
                <form onSubmit={(e) => { e.preventDefault(); window.location.href = `mailto:${COMPANY.email}?subject=Commercial Pest Control Quote&body=Business: ${(e.target as any).business.value}%0D%0AName: ${(e.target as any).name.value}%0D%0APhone: ${(e.target as any).phone.value}`; }} className="space-y-4">
                  <input type="text" name="business" placeholder="Business Name" required className="w-full px-4 py-3.5 bg-white rounded-xl border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm" />
                  <input type="text" name="name" placeholder="Your Name" required className="w-full px-4 py-3.5 bg-white rounded-xl border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm" />
                  <input type="email" name="email" placeholder="Email Address" required className="w-full px-4 py-3.5 bg-white rounded-xl border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm" />
                  <input type="tel" name="phone" placeholder="Phone Number" required className="w-full px-4 py-3.5 bg-white rounded-xl border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm" />
                  <button type="submit" className="w-full px-6 py-4 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">Get Commercial Quote</button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text mb-6">Industries <span className="text-gradient">We Serve</span></h2>
            <p className="text-gray">Tailored pest control solutions for every type of San Antonio business.</p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 card-hover shadow-premium"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <ind.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text mb-2">{ind.title}</h3>
                <p className="text-gray text-sm leading-relaxed">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-secondary rounded-2xl p-6 text-center card-hover shadow-premium">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4"><b.icon className="w-6 h-6 text-primary" /></div>
                <h3 className="text-lg font-semibold text-text mb-2">{b.title}</h3>
                <p className="text-gray text-sm">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text mb-6">Ready to Protect Your Business?</h2>
            <p className="text-gray mb-8">Get a customised commercial quote today. No obligation, no pressure.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/request-quote" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 group">Request Commercial Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></a>
              <a href={`tel:${COMPANY.phoneRaw}`} className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-all"><Phone className="w-4 h-4" /> Call {COMPANY.phone}</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
