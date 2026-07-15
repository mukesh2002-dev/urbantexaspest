'use client';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/constants';
import ScrollReveal from './ScrollReveal';

export default function BlogSection() {
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-4">
            <span className="w-8 h-0.5 bg-primary" />
            OUR BLOG
          </span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text mb-6">
            Latest From <span className="text-gradient">Our Blog</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.a
              key={post.slug}
              href={`/blog/${post.slug}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-premium card-hover"
            >
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-semibold text-primary">
                  {post.category}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-16 h-16 text-primary/20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray text-xs mb-3">
                  <Calendar className="w-3 h-3" />
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
                <h3 className="text-lg font-semibold text-text mb-2 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                <p className="text-gray text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                  Read More <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/20 group"
          >
            View All Articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
