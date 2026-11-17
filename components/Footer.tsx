import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Lucide doesn't ship brand/logo icons (trademarked marks are intentionally
// excluded from generic icon sets), so these follow the same outline style by hand.
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1F2E2A] text-[#F8F1E9]/80 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-12 gap-y-12 pb-12 border-b border-white/10">

          {/* Brand + Description */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-block mb-6" aria-label="Earth & OM Kids home">
              <Image
                src="/logo-sage.svg"
                alt="Earth & OM Kids, kids yoga and mindfulness programs Toronto"
                width={121}
                height={90}
                unoptimized
                className="h-[90px] w-auto"
              />
            </Link>
            <p className="max-w-sm text-sm leading-relaxed">
              Professional kids yoga and mindfulness programs helping children in Toronto feel calmer, more focused, and confident since 2018.
            </p>

            {/* Social Icons — fixed to actual profiles */}
            <div className="mt-6 flex gap-x-5">
              <a
                href="https://www.instagram.com/earthandomkids"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Earth & OM Kids on Instagram"
                className="hover:text-white transition"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/tarankauryoga"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Earth & OM Kids on LinkedIn"
                className="hover:text-white transition"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/earthandomkids"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Earth & OM Kids on Facebook"
                className="hover:text-white transition"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="md:col-span-2 text-sm">
            <div className="font-semibold text-white mb-5 tracking-wider text-xs">EXPLORE</div>
            <div className="space-y-[10px]">
              <Link href="/about" className="block hover:text-white">About Us</Link>
              <Link href="/schools" className="block hover:text-white">For Schools</Link>
              <Link href="/families" className="block hover:text-white">For Families</Link>
              <Link href="/blog" className="block hover:text-white">Blog</Link>
              <Link href="/contact" className="block hover:text-white">Contact</Link>
            </div>
          </div>

          {/* Programs — new column */}
          <div className="md:col-span-2 text-sm">
            <div className="font-semibold text-white mb-5 tracking-wider text-xs">PROGRAMS</div>
            <div className="space-y-[10px]">
              <Link href="/programs" className="block hover:text-white">All Programs</Link>
              <Link href="/schools" className="block hover:text-white">For Schools</Link>          
              <Link href="/toddler-yoga-toronto" className="block hover:text-white">Toddler Yoga</Link>
              <Link href="/mindfulness-for-kids-toronto" className="block hover:text-white">Mindfulness</Link>
              <Link href="/after-school-yoga-toronto" className="block hover:text-white">After-School Yoga</Link>
              <Link href="/march-break-summer-camp-yoga-toronto" className="block hover:text-white">Summer &amp; March Break Camps</Link>
              <Link href="/mindfulness-workshops-for-kids-toronto" className="block hover:text-white">Mindfulness Workshops</Link>
              <Link href="/yoga-birthday-party-toronto" className="block hover:text-white">Birthday Parties</Link>
            </div>
          </div>

          {/* Locations */}
          <div className="md:col-span-2 text-sm">
            <div className="font-semibold text-white mb-5 tracking-wider text-xs">WHERE WE SERVE</div>
            <div className="space-y-[10px]">
              <Link href="/toronto" className="block hover:text-white">Toronto</Link>
              <Link href="/north-york" className="block hover:text-white">North York</Link>
              <Link href="/scarborough" className="block hover:text-white">Scarborough</Link>
              <Link href="/etobicoke" className="block hover:text-white">Etobicoke</Link>
              <Link href="/downtown-toronto" className="block hover:text-white">Downtown Toronto</Link>
              <Link href="/locations" className="block hover:text-white">All Locations</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-2 text-sm">
            <div className="font-semibold text-white mb-5 tracking-wider text-xs">GET IN TOUCH</div>
            <div className="space-y-2">
              <a href="mailto:earthandomkids@gmail.com" className="block hover:text-white">
                earthandomkids@gmail.com
              </a>
              <a href="tel:6478568206" className="block hover:text-white">
                (647) 856-8206
              </a>
              <div className="pt-1">Toronto, Ontario</div>
            </div>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center text-sm font-semibold text-white hover:underline"
              >
                Request a Program <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-y-3 text-xs text-[#F8F1E9]/50">
          <div>© {new Date().getFullYear()} Earth &amp; OM Kids. All rights reserved.</div>
          <div className="flex gap-x-6">
            <Link href="/privacy-policy" className="hover:text-white/80">Privacy Policy</Link>
            <Link href="/accessibility" className="hover:text-white/80">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;