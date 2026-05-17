import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1F2E2A] text-[#F8F1E9]/80 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-12 gap-y-12 pb-12 border-b border-white/10">

          {/* Brand + Description */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-x-3 mb-5">
              <div className="w-11 h-11 bg-[#2D5A4A] rounded-2xl flex items-center justify-center overflow-hidden">
                <img
                  src="/yoga-icon.png"
                  alt="Earth & OM Kids — kids yoga and mindfulness programs Toronto"
                  className="w-7 h-7 object-contain"
                />
              </div>
              <div>
                <div className="font-semibold text-2xl tracking-tight text-white">Earth &amp; OM Kids</div>
                <div className="text-[10px] text-[#A7C4A0] -mt-1 tracking-[2px]">Kids Yoga • Mindfulness • School Programs</div>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed">
              Professional kids yoga and mindfulness programs helping children in Toronto feel calmer, more focused, and confident since 2018.
            </p>

            {/* Social Icons — fixed to actual profiles */}
            <div className="mt-6 flex gap-x-5 text-xl">
              <a
                href="https://www.instagram.com/earthandomkids"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Earth & OM Kids on Instagram"
                className="hover:text-white transition"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/tarankauryoga"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Earth & OM Kids on LinkedIn"
                className="hover:text-white transition"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://www.facebook.com/earthandomkids"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Earth & OM Kids on Facebook"
                className="hover:text-white transition"
              >
                <i className="fa-brands fa-facebook"></i>
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