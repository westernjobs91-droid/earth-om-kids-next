import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1F2E2A] text-[#F8F1E9]/80 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-12 gap-y-12 pb-12 border-b border-white/10">
          
          {/* Brand + Description */}
          <div className="md:col-span-5">
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

            {/* Social Icons */}
            <div className="mt-6 flex gap-x-5 text-xl">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><i className="fa-brands fa-linkedin"></i></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><i className="fa-brands fa-facebook"></i></a>
            </div>
          </div>

          {/* Explore */}
          <div className="md:col-span-2 text-sm">
            <div className="font-semibold text-white mb-5 tracking-wider text-xs">EXPLORE</div>
            <div className="space-y-[10px]">
              <Link href="/about" className="block hover:text-white">About Us</Link>
              <Link href="/programs" className="block hover:text-white">Our Programs</Link>
              <Link href="/schools" className="block hover:text-white">For Schools</Link>
              <Link href="/families" className="block hover:text-white">For Families</Link>
              <Link href="/blog" className="block hover:text-white">Resources</Link>
            </div>
          </div>

          {/* Locations */}
          <div className="md:col-span-2 text-sm">
            <div className="font-semibold text-white mb-5 tracking-wider text-xs">WHERE WE SERVE</div>
            <div className="space-y-[10px]">
              <Link href="/north-york" className="block hover:text-white">North York</Link>
              <Link href="/scarborough" className="block hover:text-white">Scarborough</Link>
              <Link href="/etobicoke" className="block hover:text-white">Etobicoke</Link>
              <Link href="/downtown-toronto" className="block hover:text-white">Downtown Toronto</Link>
              <Link href="/locations" className="block hover:text-white">All Locations</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 text-sm">
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