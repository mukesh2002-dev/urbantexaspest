'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, ArrowRight, Star, Shield, CheckCircle, ThumbsUp, Phone } from 'lucide-react';
import { COMPANY, SERVICES, TRUST_BADGES } from '@/lib/constants';
import ScrollReveal from '@/components/ScrollReveal';

const HEAR_ABOUT_OPTIONS = [
  'Google Search',
  'Social Media',
  'Friend or Family',
  'Yelp',
  'Nextdoor',
  'Other',
];

export default function QuoteContent() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    hearAbout: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${COMPANY.email}?subject=Free Quote Request&body=First Name: ${formData.firstName}%0D%0ALast Name: ${formData.lastName}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AAddress: ${formData.address}%0D%0AService: ${formData.service}%0D%0AHow Did You Hear: ${formData.hearAbout}%0D%0AMessage: ${formData.message}`;
  };

  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-text via-text/95 to-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span>/</span>
              <span className="text-white">Request Free Quote</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white max-w-3xl">
              Request Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent">Free Quote</span>
            </h1>
            <p className="text-white/70 text-lg mt-4 max-w-2xl">Fill out the form below and a pest control specialist will contact you within 24 hours.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <ScrollReveal direction="left" className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-premium-lg">
                <div className="mb-8">
                  <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-4">
                    <span className="w-8 h-0.5 bg-primary" />
                    GET YOUR FREE QUOTE
                  </span>
                  <h2 className="text-3xl font-heading font-bold text-text">
                    Tell Us About <span className="text-gradient">Your Pest Problem</span>
                  </h2>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-text mb-2">First Name *</label>
                      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required
                        className="w-full px-4 py-3.5 bg-secondary rounded-xl border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm text-text placeholder-gray/50" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-text mb-2">Last Name *</label>
                      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required
                        className="w-full px-4 py-3.5 bg-secondary rounded-xl border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm text-text placeholder-gray/50" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-text mb-2">Email Address *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required
                        className="w-full px-4 py-3.5 bg-secondary rounded-xl border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm text-text placeholder-gray/50" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-text mb-2">Phone Number *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                        className="w-full px-4 py-3.5 bg-secondary rounded-xl border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm text-text placeholder-gray/50" placeholder="(210) 555-0123" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text mb-2">Service Address *</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} required
                      className="w-full px-4 py-3.5 bg-secondary rounded-xl border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm text-text placeholder-gray/50" placeholder="123 Main St, San Antonio, TX 78250" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-text mb-2">Service Needed *</label>
                      <select name="service" value={formData.service} onChange={handleChange} required
                        className="w-full px-4 py-3.5 bg-secondary rounded-xl border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm text-text">
                        <option value="">Select a service</option>
                        {SERVICES.map(s => <option key={s.slug} value={s.title}>{s.title}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-text mb-2">How Did You Hear About Us?</label>
                      <select name="hearAbout" value={formData.hearAbout} onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-secondary rounded-xl border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm text-text">
                        <option value="">Select an option</option>
                        {HEAR_ABOUT_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text mb-2">Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={5}
                      className="w-full px-4 py-3.5 bg-secondary rounded-xl border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm text-text placeholder-gray/50 resize-none" placeholder="Describe your pest issue in detail..." />
                  </div>
                  <button type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/20 group text-base">
                    <Send className="w-5 h-5" />
                    Request Free Quote
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" className="lg:col-span-2">
              <div className="space-y-6">
                <div className="bg-white rounded-3xl p-8 shadow-premium-lg">
                  <h3 className="text-lg font-heading font-bold text-text mb-6">Why Choose Us?</h3>
                  <div className="space-y-4">
                    {TRUST_BADGES.map((badge, i) => (
                      <motion.div
                        key={badge.label}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                          <CheckCircle className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-sm font-medium text-text">{badge.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-premium-lg">
                  <h3 className="text-lg font-heading font-bold text-text mb-6">Trusted by San Antonio</h3>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-3xl font-bold text-text mb-1">4.9 <span className="text-lg text-gray font-normal">Average Rating</span></p>
                  <p className="text-gray text-sm mb-4">Based on {COMPANY.reviews}+ Google Reviews</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-xs font-semibold">Family Owned</span>
                    <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-xs font-semibold">Licensed & Insured</span>
                    <span className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg text-xs font-semibold">Eco-Friendly</span>
                  </div>
                </div>

                <div className="bg-primary rounded-3xl p-8 shadow-premium-lg text-center">
                  <Phone className="w-8 h-8 text-white mx-auto mb-4" />
                  <h3 className="text-lg font-heading font-bold text-white mb-2">Need Immediate Help?</h3>
                  <p className="text-white/80 text-sm mb-4">Call us now for a free quote over the phone</p>
                  <a href={`tel:${COMPANY.phoneRaw}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-xl text-sm font-semibold hover:bg-primary-light hover:text-white transition-all">
                    <Phone className="w-4 h-4" />
                    {COMPANY.phone}
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
