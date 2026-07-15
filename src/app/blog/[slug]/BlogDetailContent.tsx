'use client';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, ArrowRight, Share2, Phone } from 'lucide-react';
import { BLOG_POSTS, COMPANY } from '@/lib/constants';
import type { BlogPost } from '@/lib/types';
import ScrollReveal from '@/components/ScrollReveal';

interface Props {
  post: BlogPost;
}

export default function BlogDetailContent({ post }: Props) {
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const handleShare = () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator.share({ title: post.title, url: window.location.href });
    }
  };

  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-text via-text/95 to-primary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-2 text-white/60 text-sm mb-4 flex-wrap">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span>/</span>
              <a href="/blog" className="hover:text-white transition-colors">Blog</a>
              <span>/</span>
              <span className="text-white truncate max-w-[200px] sm:max-w-none">{post.title}</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-lg text-xs font-semibold text-white/90 mb-4">
              {post.category}
            </div>
            <h1 className="text-3xl lg:text-4xl font-heading font-bold text-white max-w-3xl leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 mt-6 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-64 lg:h-80 rounded-3xl overflow-hidden mb-10 shadow-premium-lg">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <ScrollReveal>
            <article className="prose prose-gray max-w-none">
              {post.content ? (
                <p className="text-gray leading-relaxed text-lg">{post.content}</p>
              ) : (
                <p className="text-gray leading-relaxed text-lg">{post.excerpt}</p>
              )}
              <div className="mt-8 p-6 bg-secondary rounded-2xl">
                <p className="text-gray leading-relaxed">
                  For professional pest control services in San Antonio, trust the experts at Urban Texas Pest Control. 
                  Contact us today for a free inspection and quote.
                </p>
              </div>
            </article>
          </ScrollReveal>

          <div className="flex flex-wrap items-center justify-between gap-4 mt-10 pt-8 border-t border-border/50">
            <a href="/blog"
              className="inline-flex items-center gap-2 text-gray hover:text-primary transition-colors text-sm font-semibold">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </a>
            <button onClick={handleShare}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary rounded-xl text-sm font-semibold text-text hover:bg-primary hover:text-white transition-all">
              <Share2 className="w-4 h-4" />
              Share This Post
            </button>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="py-16 lg:py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text mb-4">
                Related <span className="text-gradient">Articles</span>
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((related, index) => (
                <motion.a
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-premium card-hover border border-border/30"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-semibold text-primary">
                      {related.category}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-gray text-xs mb-2">
                      <Calendar className="w-3 h-3" />
                      {new Date(related.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </div>
                    <h3 className="text-base font-semibold text-text mb-2 group-hover:text-primary transition-colors line-clamp-2">{related.title}</h3>
                    <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text mb-6">
              Ready to Solve Your <span className="text-gradient">Pest Problem</span>?
            </h2>
            <p className="text-gray leading-relaxed mb-8 max-w-2xl mx-auto">
              Contact Urban Texas Pest Control today for a free inspection and quote. Our team is ready to help.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="/request-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/20 group">
                Get Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href={`tel:${COMPANY.phoneRaw}`}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-xl text-sm font-semibold hover:bg-primary hover:text-white transition-all group">
                <Phone className="w-4 h-4" />
                Call {COMPANY.phone}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
