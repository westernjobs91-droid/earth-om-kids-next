import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1F2E2A] text-[#F8F1E9]/80 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-y-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-x-3 mb-4">
            <div className="w-11 h-11 bg-[#2D5A4A] rounded-2xl flex items-center justify-center overflow-hidden">
              <img 
                src="/yoga-icon.png" 
                alt="Earth & OM Kids Yoga Logo" 
                className="w-7 h-7 object-contain" 
              />
            </div>
            <div>
              <div className="font-semibold text-2xl tracking-tight text-white">Earth &amp; OM Kids</div>
              <div className="text-[10px] text-[#A7C4A0] -mt-1 tracking-[2px]">Kids Yoga • Mindfulness • School Programs</div>
            </div>
          </div>
          <p className="max-w-xs text-sm">Refined kids yoga &amp; mindfulness programs for schools, centres, and families in Toronto.</p>
          
          <div className="mt-6 flex gap-x-4 text-xl">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><i className="fa-brands fa-facebook"></i></a>
          </div>
        </div>
        
        <div className="md:col-span-3 text-sm">
          <div className="font-semibold text-white mb-4 tracking-wider text-xs">EXPLORE</div>
          <div className="space-y-[9px]">
            <Link href="/about" className="block hover:text-white">About Taran Kaur</Link>
            <Link href="/programs" className="block hover:text-white">Our Programs</Link>
            <Link href="/schools" className="block hover:text-white">For Schools</Link>
            <Link href="/families" className="block hover:text-white">For Families</Link>
            <Link href="/blog" className="block hover:text-white">Yoga Resources</Link>
          </div>
        </div>
        
        <div className="md:col-span-4 text-sm">
          <div className="font-semibold text-white mb-4 tracking-wider text-xs">GET IN TOUCH</div>
          <div className="space-y-1.5">
            <a href="mailto:hello@earthandom.ca" className="block hover:text-white">hello@earthandom.ca</a>
            <a href="tel:4165550192" className="block hover:text-white">(416) 555-0192</a>
            <div className="pt-2">Toronto, Ontario, Canada</div>
            <div className="text-xs pt-4">Serving Toronto &amp; the GTA</div>
          </div>
          
          <div className="mt-8 text-xs">
            <Link href="/contact" className="underline hover:no-underline">Request a custom program →</Link>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-xs flex flex-col md:flex-row justify-between items-center gap-y-2 text-[#F8F1E9]/50">
        <div>© 2026 Earth &amp; OM Kids. All rights reserved.</div>
        <div className="flex gap-x-5">
          <a href="#" className="hover:text-white/80">Privacy</a>
          <a href="#" className="hover:text-white/80">Accessibility</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;