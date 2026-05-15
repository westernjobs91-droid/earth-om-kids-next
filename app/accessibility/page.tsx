import Link from 'next/link';

export const metadata = {
  title: 'Accessibility | Earth & OM Kids',
  description: 'Accessibility statement for Earth & OM Kids — our commitment to an inclusive and accessible website for all users in Toronto and the GTA.',
  alternates: { canonical: '/accessibility' },
};

export default function Accessibility() {
  return (
    <>
      {/* Header */}
      <div className="bg-white border-b border-[#E8D5B7]">
        <div className="max-w-3xl mx-auto px-6 pt-16 pb-12 text-center">
          <div className="inline-block px-4 py-1 bg-[#A7C4A0]/20 text-[#2D5A4A] text-xs font-semibold tracking-[1.5px] rounded-full mb-4">
            ACCESSIBILITY
          </div>
          <h1 className="text-5xl tracking-tighter font-semibold heading-serif">Accessibility Statement</h1>
          <p className="mt-3 text-[#1F2E2A]/60 text-sm">Last updated: May 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="space-y-10">

          {/* Commitment */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-[#1F2E2A] mb-3">Our commitment</h2>
            <p className="text-[#1F2E2A]/75 leading-relaxed">
              Earth &amp; OM Kids is committed to ensuring our website is accessible to everyone — including people with disabilities. We believe inclusivity extends beyond our yoga programs and into every aspect of how we show up, including online. We strive to meet or exceed the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA.
            </p>
          </section>

          <div className="border-t border-[#E8D5B7]" />

          {/* What we do */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-[#1F2E2A] mb-3">What we do to support accessibility</h2>
            <p className="text-[#1F2E2A]/75 leading-relaxed mb-4">
              We have taken the following steps to make our website more accessible:
            </p>
            <ul className="space-y-3 text-[#1F2E2A]/75">
              {[
                'Descriptive alt text on all images so screen readers can convey visual content',
                'Sufficient colour contrast between text and backgrounds for readability',
                'Clear heading structure (H1, H2, H3) to support navigation by screen readers',
                'Keyboard-navigable menus and interactive elements',
                'Readable font sizes and clean, uncluttered layouts',
                'Aria labels on icon-only buttons (e.g. mobile menu toggle)',
                'Responsive design that works across all screen sizes and devices',
              ].map((item) => (
                <li key={item} className="flex items-start gap-x-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2D5A4A] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="border-t border-[#E8D5B7]" />

          {/* Known limitations */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-[#1F2E2A] mb-3">Known limitations</h2>
            <p className="text-[#1F2E2A]/75 leading-relaxed">
              While we work hard to make our site as accessible as possible, some areas may not yet meet all accessibility standards. We are actively working to identify and address these gaps. If you encounter any barriers, please let us know — your feedback directly shapes our improvements.
            </p>
          </section>

          <div className="border-t border-[#E8D5B7]" />

          {/* Programs */}
          <section>
            <div className="bg-[#A7C4A0]/10 border border-[#A7C4A0]/30 rounded-3xl p-7">
              <h2 className="text-2xl font-semibold tracking-tight text-[#1F2E2A] mb-3">Inclusive programs for all children</h2>
              <p className="text-[#1F2E2A]/75 leading-relaxed">
                Our accessibility commitment extends to our programs. As a Registered Early Childhood Educator, Taran has extensive experience adapting sessions for children with diverse learning needs, physical abilities, and developmental profiles. Every child is welcome. We design sessions that are flexible, inclusive, and respectful of each child's unique pace and personality.
              </p>
              <Link
                href="/programs"
                className="mt-5 inline-block text-sm font-semibold text-[#2D5A4A] hover:underline"
              >
                Learn about our inclusive programs →
              </Link>
            </div>
          </section>

          <div className="border-t border-[#E8D5B7]" />

          {/* Standards */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-[#1F2E2A] mb-3">Standards we follow</h2>
            <p className="text-[#1F2E2A]/75 leading-relaxed">
              We aim to conform to the{' '}
              <a
                href="https://www.w3.org/WAI/standards-guidelines/wcag/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2D5A4A] hover:underline"
              >
                Web Content Accessibility Guidelines (WCAG) 2.1
              </a>{' '}
              at Level AA, as recommended by the World Wide Web Consortium (W3C). We also aim to comply with the Accessibility for Ontarians with Disabilities Act (AODA) where applicable.
            </p>
          </section>

          <div className="border-t border-[#E8D5B7]" />

          {/* Feedback */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-[#1F2E2A] mb-3">Feedback & contact</h2>
            <p className="text-[#1F2E2A]/75 leading-relaxed mb-6">
              If you experience any difficulty accessing content on our website, or if you have suggestions on how we can improve accessibility, please reach out. We take all feedback seriously and aim to respond within 5 business days.
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