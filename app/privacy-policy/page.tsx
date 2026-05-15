import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Earth & OM Kids',
  description: 'Privacy policy for Earth & OM Kids — kids yoga and mindfulness programs in Toronto and the GTA.',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicy() {
  return (
    <>
      {/* Header */}
      <div className="bg-white border-b border-[#E8D5B7]">
        <div className="max-w-3xl mx-auto px-6 pt-16 pb-12 text-center">
          <div className="inline-block px-4 py-1 bg-[#A7C4A0]/20 text-[#2D5A4A] text-xs font-semibold tracking-[1.5px] rounded-full mb-4">
            LEGAL
          </div>
          <h1 className="text-5xl tracking-tighter font-semibold heading-serif">Privacy Policy</h1>
          <p className="mt-3 text-[#1F2E2A]/60 text-sm">Last updated: May 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="space-y-10">

          {/* Who we are */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-[#1F2E2A] mb-3">Who we are</h2>
            <p className="text-[#1F2E2A]/75 leading-relaxed">
              Earth &amp; OM Kids is a professional kids yoga and mindfulness program provider serving schools, childcare centres, and families across Toronto and the Greater Toronto Area. Our website is{' '}
              <a href="https://kids.earthandom.ca" className="text-[#2D5A4A] hover:underline">kids.earthandom.ca</a>.
              You can reach us at{' '}
              <a href="mailto:earthandomkids@gmail.com" className="text-[#2D5A4A] hover:underline">earthandomkids@gmail.com</a>{' '}
              or{' '}
              <a href="tel:6478568206" className="text-[#2D5A4A] hover:underline">(647) 856-8206</a>.
            </p>
          </section>

          <div className="border-t border-[#E8D5B7]" />

          {/* What we collect */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-[#1F2E2A] mb-3">What information we collect</h2>
            <p className="text-[#1F2E2A]/75 leading-relaxed mb-4">
              We only collect information you choose to share with us. When you fill out our contact or booking form, we collect:
            </p>
            <ul className="space-y-2 text-[#1F2E2A]/75">
              {[
                'Your name',
                'Email address',
                'Phone number',
                'Details of your inquiry (e.g. school name, program interest, age group)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-x-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2D5A4A] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[#1F2E2A]/75 leading-relaxed">
              We do <strong>not</strong> collect payment information through our website.
            </p>
          </section>

          <div className="border-t border-[#E8D5B7]" />

          {/* How we use it */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-[#1F2E2A] mb-3">How we use your information</h2>
            <p className="text-[#1F2E2A]/75 leading-relaxed">
              The information you provide is used solely to respond to your inquiry, send you a program proposal, or follow up on a booking request. We do not sell, rent, trade, or share your personal information with any third parties.
            </p>
          </section>

          <div className="border-t border-[#E8D5B7]" />

          {/* CASL */}
          <section>
            <div className="bg-[#A7C4A0]/10 border border-[#A7C4A0]/30 rounded-3xl p-7">
              <h2 className="text-2xl font-semibold tracking-tight text-[#1F2E2A] mb-3">Email communications & CASL</h2>
              <p className="text-[#1F2E2A]/75 leading-relaxed">
                In accordance with Canada's Anti-Spam Legislation (CASL), we will only send you marketing or newsletter emails if you have <strong>expressly consented</strong> to receive them. You may withdraw consent at any time by emailing us at{' '}
                <a href="mailto:earthandomkids@gmail.com" className="text-[#2D5A4A] hover:underline">earthandomkids@gmail.com</a>{' '}
                or by clicking "unsubscribe" in any email we send you. We will honour all opt-out requests promptly.
              </p>
            </div>
          </section>

          <div className="border-t border-[#E8D5B7]" />

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-[#1F2E2A] mb-3">Cookies & analytics</h2>
            <p className="text-[#1F2E2A]/75 leading-relaxed">
              Our website may use basic analytics tools (such as Google Analytics) to help us understand how visitors find and use our site — for example, which pages are most visited or how people arrive at our site. This data is aggregated and anonymous. No personally identifiable information is collected through cookies.
            </p>
          </section>

          <div className="border-t border-[#E8D5B7]" />

          {/* Your rights */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-[#1F2E2A] mb-3">Your rights</h2>
            <p className="text-[#1F2E2A]/75 leading-relaxed">
              You have the right to access, correct, or request deletion of any personal information we hold about you. To make a request, simply contact us at{' '}
              <a href="mailto:earthandomkids@gmail.com" className="text-[#2D5A4A] hover:underline">earthandomkids@gmail.com</a>.
              We will respond within 10 business days.
            </p>
          </section>

          <div className="border-t border-[#E8D5B7]" />

          {/* Third parties */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-[#1F2E2A] mb-3">Third-party services</h2>
            <p className="text-[#1F2E2A]/75 leading-relaxed">
              Our website is hosted on Vercel and may use Google Analytics for traffic insights. These services have their own privacy policies. We do not control and are not responsible for the privacy practices of third-party services.
            </p>
          </section>

          <div className="border-t border-[#E8D5B7]" />

          {/* Changes */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-[#1F2E2A] mb-3">Changes to this policy</h2>
            <p className="text-[#1F2E2A]/75 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. We encourage you to review this page periodically.
            </p>
          </section>

          <div className="border-t border-[#E8D5B7]" />

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-[#1F2E2A] mb-3">Questions?</h2>
            <p className="text-[#1F2E2A]/75 leading-relaxed mb-6">
              If you have any questions about this Privacy Policy or how we handle your information, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:earthandomkids@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#2D5A4A] text-white text-sm font-semibold rounded-2xl hover:bg-[#1F2E2A] transition"
              >
                Email us
              </a>
              <a
                href="tel:6478568206"
                className="inline-flex items-center justify-center px-6 py-3 border border-[#E8D5B7] text-[#2D5A4A] text-sm font-semibold rounded-2xl hover:bg-[#F8F1E9] transition"
              >
                (647) 856-8206
              </a>
            </div>
          </section>

        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-[#E8D5B7]">
          <Link href="/" className="text-sm text-[#2D5A4A] hover:underline">
            ← Back to home
          </Link>
        </div>
      </div>
    </>
  );
}