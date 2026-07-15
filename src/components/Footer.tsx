'use client';
import { Bug, Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { COMPANY, NAV_LINKS, SERVICES, SERVICE_AREAS } from '@/lib/constants';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-text text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
              <a href="/" className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <Bug className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <div>
                  <span className="text-lg font-bold text-white block leading-tight">Urban Texas</span>
                  <span className="text-xs text-gray-400 font-medium tracking-wide">Pest Control</span>
                </div>
              </a>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Protecting San Antonio homes and businesses with 25+ years of trusted pest control expertise. Family-owned, eco-friendly, and guaranteed.
              </p>
              <div className="flex items-center gap-3">
                <a href={COMPANY.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-primary transition-all duration-300" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href={COMPANY.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-primary transition-all duration-300" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href={COMPANY.social.yelp} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-primary transition-all duration-300" aria-label="Yelp">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.16 12.594a1.5 1.5 0 01-.223.275 10.057 10.057 0 01-5.224 3.168c.522.622 1.553 2.067 1.696 3.424.075.71-.213 1.284-.74 1.547-.635.316-1.614-.092-2.489-1.306-.525-.728-1.548-2.302-1.548-2.302s-.132-.007-.334-.01c-1.12-.016-2.52.01-3.817.23-1.093.186-1.87.56-2.28 1.112-.372.5-.374 1.02-.117 1.332.484.589 2.036 1.239 3.378 1.584.758.195 1.116.406 1.116.406s.118.057.118.168c0 .163-.18.245-.18.245s-1.047.365-1.847.484c-.83.124-1.758.048-2.477-.116a2.228 2.228 0 01-1.264-.918c-.36-.528-.549-1.306-.49-2.19.106-1.592.82-3.357 1.666-4.834l.017-.032c.137.08.47.194.47.194l4.75-2.455a.036.036 0 01.01-.032c.017-.082.025-.183.016-.3a2.74 2.74 0 00-.234-.794 6.68 6.68 0 00-.688-1.136c-.364-.537-.757-1.022-.943-1.277-.225-.31-.527-.968-.545-1.394-.016-.365.147-.602.44-.72.487-.194 1.404.04 2.715.88.871.558 1.597 1.386 1.597 1.386s-.116-.13-.26-.356c-.477-.75-1.022-1.644-1.28-2.334-.241-.647-.34-1.376-.174-1.875.143-.43.441-.66.8-.666.618-.01 1.29.672 1.76 1.474.383.654.738 1.487.738 1.487s.057.056.057.152c0 .13-.115.218-.115.218s-.72.424-1.18.856c-.35.327-.574.631-.574.631s.03.063.074.14c.356.176 2.124 1.03 3.302 1.601 1.02.494 2.276 1.287 3.063 2.436.162.237.283.475.357.71.126.398.082.76-.14 1.016z"/></svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1 group">
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {SERVICES.slice(0, 8).map((service) => (
                  <li key={service.slug}>
                    <a href={`/services/${service.slug}`} className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1 group">
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li>
                  <a href={`tel:${COMPANY.phoneRaw}`} className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors text-sm group">
                    <Phone className="w-4 h-4 mt-0.5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                    <span>{COMPANY.phone}</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${COMPANY.email}`} className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors text-sm group">
                    <Mail className="w-4 h-4 mt-0.5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                    <span>{COMPANY.email}</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-gray-400 text-sm">
                    <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <span>{COMPANY.address}</span>
                  </div>
                </li>
                <li className="pt-2">
                  <div className="flex items-start gap-3 text-gray-400 text-sm">
                    <Clock className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <div>
                      <p className="text-white font-medium mb-1">Business Hours</p>
                      <p>Mon–Fri: {COMPANY.hours.weekdays}</p>
                      <p>Sat–Sun: Closed</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="/privacy-policy" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
            <button onClick={scrollToTop} className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7"/></svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
