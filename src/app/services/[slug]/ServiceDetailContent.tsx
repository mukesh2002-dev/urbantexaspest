'use client';
import { motion } from 'framer-motion';
import { Check, Phone, ArrowRight, Shield, Clock, Star, Award } from 'lucide-react';
import { Service } from '@/lib/types';
import { COMPANY, SERVICES } from '@/lib/constants';
import ScrollReveal from '@/components/ScrollReveal';

const iconColors: Record<string, string> = {
  pest: 'from-emerald-500 to-green-600',
  termite: 'from-amber-500 to-yellow-600',
  rodent: 'from-gray-500 to-slate-600',
  ant: 'from-rose-500 to-red-600',
  cockroach: 'from-orange-500 to-amber-600',
  bed: 'from-purple-500 to-violet-600',
  bee: 'from-yellow-500 to-amber-600',
  scorpion: 'from-cyan-500 to-teal-600',
  spider: 'from-indigo-500 to-purple-600',
  tick: 'from-red-500 to-rose-600',
  silverfish: 'from-blue-500 to-cyan-600',
  black: 'from-zinc-700 to-gray-900',
  brown: 'from-stone-600 to-zinc-700',
  cricket: 'from-lime-500 to-green-600',
  earwig: 'from-amber-600 to-orange-700',
};

export default function ServiceDetailContent({ service }: { service: Service }) {
  const idx = SERVICES.indexOf(service);
  const nextService = SERVICES[(idx + 1) % SERVICES.length];
  const prevService = SERVICES[(idx - 1 + SERVICES.length) % SERVICES.length];

  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-text via-text/95 to-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-2 text-white/60 text-sm mb-4 flex-wrap">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span>/</span>
              <a href="/services" className="hover:text-white transition-colors">Services</a>
              <span>/</span>
              <span className="text-white">{service.title}</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white max-w-3xl">
              {service.title} in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent">San Antonio</span>
            </h1>
            <p className="text-white/70 text-lg mt-4 max-w-2xl">{service.shortDescription}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal direction="left">
              <div className="relative h-64 lg:h-72 rounded-3xl overflow-hidden mb-8 shadow-premium-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-secondary rounded-3xl p-8 lg:p-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${iconColors[service.slug.split('-')[0]] || 'from-primary to-primary-light'} rounded-2xl flex items-center justify-center mb-6`}>
                  <span className="text-2xl text-white font-bold">{service.title.charAt(0)}</span>
                </div>
                <h2 className="text-2xl font-heading font-bold text-text mb-4">Professional {service.title} in San Antonio</h2>
                <p className="text-gray leading-relaxed mb-6">{service.description}</p>
                <h3 className="text-lg font-semibold text-text mb-4">Key Features</h3>
                <div className="space-y-3">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-text text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" className="space-y-6">
              <div className="bg-secondary rounded-3xl p-8">
                <h3 className="text-xl font-semibold text-text mb-6">Why Choose Us for {service.title}</h3>
                <div className="space-y-5">
                  {[
                    { icon: Award, text: '25+ years of experience in San Antonio pest control' },
                    { icon: Shield, text: 'Licensed, insured, and eco-friendly treatments' },
                    { icon: Star, text: '338+ 5-star Google reviews from satisfied customers' },
                    { icon: Clock, text: 'Flexible scheduling and same-day service available' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <p className="text-text text-sm pt-1.5">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 text-white">
                <h3 className="text-xl font-semibold mb-2">Get Your Free Quote</h3>
                <p className="text-white/80 text-sm mb-6">Contact us today for a free, no-obligation quote.</p>
                <div className="space-y-3">
                  <a href="/request-quote" className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-white text-primary rounded-xl text-sm font-semibold hover:bg-white/90 transition-all group">
                    Request Free Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href={`tel:${COMPANY.phoneRaw}`} className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-white/10 border border-white/20 rounded-xl text-sm font-semibold hover:bg-white/20 transition-all">
                    <Phone className="w-4 h-4" /> {COMPANY.phone}
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-bold text-text mb-4">Other <span className="text-gradient">Services</span></h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[prevService, ...SERVICES.filter(s => s.slug !== service.slug && s.slug !== prevService.slug).slice(0, 3)].map((s) => (
              <a key={s.slug} href={`/services/${s.slug}`} className="bg-white rounded-2xl p-6 card-hover shadow-premium text-center group">
                <h3 className="text-base font-semibold text-text group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-gray text-xs mt-2 line-clamp-2">{s.shortDescription}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-text mb-6">Ready to Get Started?</h2>
            <p className="text-gray mb-8">Contact us today and let us help you with your {service.title.toLowerCase()} needs.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/request-quote" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 group">
                Request Free Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href={`tel:${COMPANY.phoneRaw}`} className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-all">
                <Phone className="w-4 h-4" /> Call {COMPANY.phone}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
