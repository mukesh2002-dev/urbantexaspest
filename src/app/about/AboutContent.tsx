'use client';
import { motion } from 'framer-motion';
import { Shield, Eye, Leaf, Award, Phone, ArrowRight } from 'lucide-react';
import { COMPANY } from '@/lib/constants';
import ScrollReveal from '@/components/ScrollReveal';

export default function AboutContent() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-text via-text/95 to-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span>/</span>
              <span className="text-white">About</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white max-w-3xl">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent">Urban Texas Pest Control</span>
            </h1>
            <p className="text-white/70 text-lg mt-4 max-w-2xl">San Antonio&apos;s trusted family-owned pest control company with 25+ years of experience.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="bg-secondary rounded-3xl p-8 lg:p-12">
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text mb-6">
                  Our <span className="text-gradient">Story</span>
                </h2>
                <p className="text-gray leading-relaxed mb-4">
                  Urban Texas Pest Control was founded with a simple mission: to change the pest control industry from bad sales gimmicks and poor customer service. We are a family-owned San Antonio pest control company with over 25 years of expertise in commercial and residential pest control.
                </p>
                <p className="text-gray leading-relaxed mb-4">
                  We are committed to keeping your home and business pest-free with safe, effective, and tailored solutions. Serving San Antonio, Texas, and the surrounding areas, our experienced pest control team provides comprehensive residential and commercial pest control services.
                </p>
                <p className="text-gray leading-relaxed">
                  We place a high value on your house and family. With the value of our service and outstanding customer service, we are the right pest control company for you.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="space-y-6">
                <div className="bg-secondary rounded-2xl p-8">
                  <Shield className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-text mb-3">Our Mission</h3>
                  <p className="text-gray leading-relaxed">To provide safe, reliable, and eco-friendly pest control solutions in San Antonio that protect homes, businesses, and families with exceptional service.</p>
                </div>
                <div className="bg-secondary rounded-2xl p-8">
                  <Eye className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-xl font-semibold text-text mb-3">Our Vision</h3>
                  <p className="text-gray leading-relaxed">To be San Antonio&apos;s trusted leader in pest control, delivering innovative, quality solutions for healthier, pest-free environments.</p>
                </div>
                <div className="bg-secondary rounded-2xl p-8">
                  <Award className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-text mb-3">Our Commitment</h3>
                  <p className="text-gray leading-relaxed">We are committed to providing transparent, affordable, and customer-centric pest control solutions with a 100% satisfaction guarantee.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text mb-6">Why Families Trust <span className="text-gradient">Urban Texas</span></h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Leaf, title: 'Eco-Friendly', desc: 'Safe for your family, pets, and the environment.' },
              { icon: Shield, title: 'Licensed & Insured', desc: 'Fully licensed and insured for your peace of mind.' },
              { icon: Award, title: '25+ Years', desc: 'Over two decades of pest control expertise.' },
              { icon: Phone, title: '24/7 Support', desc: 'Always available when you need us most.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center card-hover shadow-premium"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text mb-2">{item.title}</h3>
                <p className="text-gray text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text mb-6">Ready to Get Started?</h2>
            <p className="text-gray leading-relaxed mb-8">Contact us today for a free, no-obligation quote and join thousands of satisfied San Antonio customers.</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="/request-quote" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 group">
                Request Free Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href={`tel:${COMPANY.phoneRaw}`} className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-xl text-sm font-semibold hover:bg-primary hover:text-white transition-all group">
                <Phone className="w-4 h-4" /> Call {COMPANY.phone}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
