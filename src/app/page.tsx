import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import AboutSection from '@/components/AboutSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ServicesSection from '@/components/ServicesSection';
import ServiceProcess from '@/components/ServiceProcess';
import WhyTexasSection from '@/components/WhyTexasSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import StatisticsSection from '@/components/StatisticsSection';
import BlogSection from '@/components/BlogSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <WhyChooseUs />
      <ServicesSection />
      <ServiceProcess />
      <WhyTexasSection />
      <StatisticsSection />
      <TestimonialsSection />
      <BlogSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
