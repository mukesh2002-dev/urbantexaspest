'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from 'lucide-react';
import { COMPANY } from '@/lib/constants';
import { SERVICES } from '@/lib/constants';
import ScrollReveal from './ScrollReveal';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${COMPANY.email}?subject=Pest Control Quote Request&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AService: ${formData.service}%0D%0AMessage: ${formData.message}`;
  };

  return (
    <section className="py-20 lg:py-28 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-4">
            <span className="w-8 h-0.5 bg-primary" />
            CONTACT US
          </span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text mb-6">
            Get Your <span className="text-gradient">Free Quote</span> Today
          </h2>
          <p className="text-gray leading-relaxed">
            Ready to protect your home or business? Contact us for a free, no-obligation quote.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          <ScrollReveal direction="left">
            <form onSubmit={handleSubmit} className="bg-secondary rounded-3xl p-8 lg:p-10 space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-text mb-2">Full Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required
                    className="w-full px-4 py-3.5 bg-white rounded-xl border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm text-text placeholder-gray/50" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-text mb-2">Email Address *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full px-4 py-3.5 bg-white rounded-xl border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm text-text placeholder-gray/50" placeholder="john@example.com" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-text mb-2">Phone Number *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                    className="w-full px-4 py-3.5 bg-white rounded-xl border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm text-text placeholder-gray/50" placeholder="(210) 555-0123" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-text mb-2">Service Needed</label>
                  <select name="service" value={formData.service} onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-white rounded-xl border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm text-text">
                    <option value="">Select a service</option>
                    {SERVICES.map(s => <option key={s.slug} value={s.title}>{s.title}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-text mb-2">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={4}
                  className="w-full px-4 py-3.5 bg-white rounded-xl border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm text-text placeholder-gray/50 resize-none" placeholder="Tell us about your pest problem..." />
              </div>
              <button type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/20 group">
                <Send className="w-4 h-4" />
                Send Message
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </ScrollReveal>

          <ScrollReveal direction="right" className="space-y-6">
            <div className="bg-secondary rounded-3xl p-8 lg:p-10 space-y-6">
              <a href={`tel:${COMPANY.phoneRaw}`} className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors shrink-0">
                  <Phone className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-gray font-medium uppercase tracking-wide">Phone</p>
                  <p className="text-text font-semibold group-hover:text-primary transition-colors">{COMPANY.phone}</p>
                </div>
              </a>
              <div className="h-px bg-border/50" />
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors shrink-0">
                  <Mail className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-gray font-medium uppercase tracking-wide">Email</p>
                  <p className="text-text font-semibold group-hover:text-primary transition-colors">{COMPANY.email}</p>
                </div>
              </a>
              <div className="h-px bg-border/50" />
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray font-medium uppercase tracking-wide">Address</p>
                  <p className="text-text font-semibold">{COMPANY.address}</p>
                </div>
              </div>
              <div className="h-px bg-border/50" />
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray font-medium uppercase tracking-wide">Business Hours</p>
                  <p className="text-text font-semibold">Mon–Fri: {COMPANY.hours.weekdays}</p>
                  <p className="text-text font-semibold">Sat–Sun: Closed</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden h-64 shadow-premium">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.5813054193893!2d-98.7015873!3d29.4873889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c9a4a8f5b7c5b%3A0x9f5c8e8a8b7c5d4e!2s9450%20Brushy%20Point%2C%20San%20Antonio%2C%20TX%2078250!5e0!3m2!1sen!2sus!4v1"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="Urban Texas Pest Control Location"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
