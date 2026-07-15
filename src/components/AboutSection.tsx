'use client';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Shield, Eye, Leaf } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function AboutSection() {
  const [counterRef, counterInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="py-20 lg:py-28 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative bg-gradient-to-br from-primary/5 to-secondary rounded-3xl p-8 lg:p-12">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-full translate-y-1/3 -translate-x-1/3" />
                <Leaf className="w-12 h-12 text-primary/20 absolute top-8 right-8" />
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text mb-6">
                  San Antonio&apos;s Trusted{' '}
                  <span className="text-gradient">Pest Control Experts</span>
                </h2>
                <p className="text-gray text-base leading-relaxed mb-4">
                  We are a family-owned San Antonio pest control company with over 25 years of expertise in commercial and residential pest control. At Urban Texas Pest Control, we are committed to keeping your home and business pest-free with safe, effective, and tailored solutions.
                </p>
                <p className="text-gray text-base leading-relaxed">
                  We place a high value on your house and family. With the value of our service and outstanding customer service, we are the right pest control company for you.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-6">
                <div className="relative h-28 rounded-2xl overflow-hidden">
                  <img src="/images/about/technician.jpg" alt="Our technician" className="w-full h-full object-cover" />
                </div>
                <div className="relative h-28 rounded-2xl overflow-hidden">
                  <img src="/images/about/team.jpg" alt="Our team" className="w-full h-full object-cover" />
                </div>
                <div className="relative h-28 rounded-2xl overflow-hidden">
                  <img src="/images/about/office.jpg" alt="Our office" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-secondary rounded-2xl p-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-text mb-1">Our Mission</h3>
                  <p className="text-gray text-sm leading-relaxed">
                    To provide safe, reliable, and eco-friendly pest control solutions that protect homes, businesses, and families.
                  </p>
                </div>
                <div className="bg-secondary rounded-2xl p-6">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center mb-3">
                    <Eye className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-text mb-1">Our Vision</h3>
                  <p className="text-gray text-sm leading-relaxed">
                    To be San Antonio&apos;s trusted leader in pest control, delivering innovative, quality solutions for healthier, pest-free environments.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="lg:pl-8">
              <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-4">
                <span className="w-8 h-0.5 bg-primary" />
                ABOUT US
              </span>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text mb-6">
                Protecting San Antonio Families for Over{' '}
                <span className="text-gradient">25 Years</span>
              </h2>
              <p className="text-gray leading-relaxed mb-8">
                Urban Texas Pest Control was founded to change the pest control industry from bad sales gimmicks and poor customer service. We offer long warranties and guarantees for our work so you can trust we will get the job done right the first time.
              </p>

              <div ref={counterRef} className="flex items-center gap-6 mb-8">
                <div className="text-center">
                  <span className="text-5xl lg:text-6xl font-heading font-bold text-primary block">
                    {counterInView ? <CountUp start={0} end={25} duration={2} /> : 0}+
                  </span>
                  <span className="text-sm text-gray font-medium">Years Experience</span>
                </div>
                <div className="w-px h-16 bg-border" />
                <div className="text-center">
                  <span className="text-5xl lg:text-6xl font-heading font-bold text-primary block">
                    {counterInView ? <CountUp start={0} end={5000} duration={2} /> : 0}+
                  </span>
                  <span className="text-sm text-gray font-medium">Happy Customers</span>
                </div>
                <div className="w-px h-16 bg-border" />
                <div className="text-center">
                  <span className="text-5xl lg:text-6xl font-heading font-bold text-primary block">
                    {counterInView ? <CountUp start={0} end={338} duration={2} /> : 0}+
                  </span>
                  <span className="text-sm text-gray font-medium">5-Star Reviews</span>
                </div>
              </div>

              <a
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/20 group"
              >
                Learn Our Story
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
