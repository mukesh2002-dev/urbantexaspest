import type { Metadata } from 'next';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for ${COMPANY.name}. Learn how we collect, use, and protect your personal information.`,
};

export default function PrivacyPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-text via-text/95 to-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <span className="text-white">Privacy Policy</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white">Privacy Policy</h1>
        </div>
      </section>
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none">
            <p className="text-gray mb-6">Last updated: January 1, 2025</p>

            <h2 className="text-2xl font-heading font-bold text-text mt-10 mb-4">Introduction</h2>
            <p className="text-gray leading-relaxed mb-4">{COMPANY.name} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>

            <h2 className="text-2xl font-heading font-bold text-text mt-10 mb-4">Information We Collect</h2>
            <p className="text-gray leading-relaxed mb-4">We may collect personal information that you voluntarily provide to us when you:</p>
            <ul className="list-disc pl-6 text-gray space-y-2 mb-4">
              <li>Fill out a contact or quote request form</li>
              <li>Subscribe to our newsletter</li>
              <li>Request service or support</li>
              <li>Communicate with us via phone, email, or social media</li>
            </ul>
            <p className="text-gray leading-relaxed mb-4">This information may include your name, email address, phone number, service address, and any other details you choose to provide.</p>

            <h2 className="text-2xl font-heading font-bold text-text mt-10 mb-4">How We Use Your Information</h2>
            <p className="text-gray leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-gray space-y-2 mb-4">
              <li>Provide, maintain, and improve our pest control services</li>
              <li>Respond to your inquiries and service requests</li>
              <li>Send you quotes, invoices, and service reminders</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-text mt-10 mb-4">Information Sharing</h2>
            <p className="text-gray leading-relaxed mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep your information confidential.</p>

            <h2 className="text-2xl font-heading font-bold text-text mt-10 mb-4">Data Security</h2>
            <p className="text-gray leading-relaxed mb-4">We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

            <h2 className="text-2xl font-heading font-bold text-text mt-10 mb-4">Cookies</h2>
            <p className="text-gray leading-relaxed mb-4">Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie preferences through your browser settings.</p>

            <h2 className="text-2xl font-heading font-bold text-text mt-10 mb-4">Your Rights</h2>
            <p className="text-gray leading-relaxed mb-4">Depending on your location, you may have rights regarding your personal information, including:</p>
            <ul className="list-disc pl-6 text-gray space-y-2 mb-4">
              <li>The right to access your personal data</li>
              <li>The right to correct inaccurate data</li>
              <li>The right to delete your data</li>
              <li>The right to restrict or object to processing</li>
              <li>The right to data portability</li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-text mt-10 mb-4">Contact Us</h2>
            <p className="text-gray leading-relaxed mb-4">If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us:</p>
            <div className="bg-secondary rounded-2xl p-6 space-y-2">
              <p className="text-text"><strong>{COMPANY.name}</strong></p>
              <p className="text-gray">{COMPANY.address}</p>
              <p className="text-gray">Phone: {COMPANY.phone}</p>
              <p className="text-gray">Email: {COMPANY.email}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
