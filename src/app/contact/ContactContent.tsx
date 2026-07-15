'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, ArrowRight, AlertTriangle } from 'lucide-react';
import { COMPANY, SERVICES } from '@/lib/constants';
import ScrollReveal from '@/components/ScrollReveal';

export default function ContactContent() {
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
    window.location.href = `mailto:${COMPANY.email}?subject=Pest Control Inquiry&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AService: ${formData.service}%0D%0AMessage: ${formData.message}`;
  };

  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-text via-text/95 to-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span>/</span>
              <span className="text-white">Contact</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white max-w-3xl">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent">Us</span>
            </h1>
            <p className="text-white/70 text-lg mt-4 max-w-2xl">Get in touch with our team for a free quote or to schedule service.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white" id="contact-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal direction="left">
              <div className="space-y-8">
                <div>
                  <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-4">
                    <span className="w-8 h-0.5 bg-primary" />
                    SEND US A MESSAGE
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text mb-4">
                    Get Your <span className="text-gradient">Free Quote</span>
                  </h2>
                  <p className="text-gray leading-relaxed">
                    Fill out the form below and a pest control specialist will get back to you within 24 hours.
                  </p>
                </div>
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
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={5}
                      className="w-full px-4 py-3.5 bg-white rounded-xl border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all text-sm text-text placeholder-gray/50 resize-none" placeholder="Tell us about your pest problem..." />
                  </div>
                  <button type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/20 group">
                    <Send className="w-4 h-4" />
                    Send Message
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" className="space-y-6">
              <div className="bg-secondary rounded-3xl p-8 lg:p-10 space-y-6">
                <h3 className="text-xl font-heading font-bold text-text mb-2">Contact Information</h3>
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

              <div className="rounded-3xl overflow-hidden h-72 shadow-premium">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.5813054193893!2d-98.7015873!3d29.4873889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c9a4a8f5b7c5b%3A0x9f5c8e8a8b7c5d4e!2s9450%20Brushy%20Point%2C%20San%20Antonio%2C%20TX%2078250!5e0!3m2!1sen!2sus!4v1"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  title="Urban Texas Pest Control Location"
                />
              </div>

              <div className="bg-accent/10 rounded-3xl p-6 border border-accent/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text mb-1">Emergency Service Available</h4>
                    <p className="text-gray text-sm leading-relaxed">
                      Dealing with a pest emergency? Call us immediately at{' '}
                      <a href={`tel:${COMPANY.phoneRaw}`} className="text-primary font-semibold hover:underline">{COMPANY.phone}</a>
                      {' '}and we&apos;ll prioritize your service request.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
