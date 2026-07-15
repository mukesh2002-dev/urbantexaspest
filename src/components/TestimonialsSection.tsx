'use client';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { TESTIMONIALS } from '@/lib/constants';
import 'swiper/css';
import 'swiper/css/pagination';
import ScrollReveal from './ScrollReveal';

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-4">
            <span className="w-8 h-0.5 bg-primary" />
            TESTIMONIALS
          </span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text mb-6">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
            <Star className="w-4 h-4 fill-accent" />
            Rated 5.0 out of 5 from 338+ Google Reviews
          </div>
        </ScrollReveal>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="pb-14"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-secondary rounded-2xl p-8 h-full"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-text/80 text-sm leading-relaxed mb-6">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{testimonial.initial}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-text">{testimonial.name}</p>
                      <p className="text-xs text-gray">{testimonial.time}</p>
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-primary/10" />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
