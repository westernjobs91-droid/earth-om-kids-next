'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/programs', label: 'Programs' },
    { href: '/schools', label: 'For Schools' },
    { href: '/families', label: 'For Families' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-[#E8D5B7] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-x-3">
            <div className="w-11 h-11 bg-[#2D5A4A] rounded-2xl flex items-center justify-center overflow-hidden">
              <img
                src="/yoga-icon.png"
                alt="Earth & OM Kids — kids yoga and mindfulness programs Toronto"
                className="w-7 h-7 object-contain"
              />
            </div>
            <div>
              <div className="font-semibold text-xl lg:text-2xl tracking-tight text-[#2D5A4A]">Earth &amp; OM Kids</div>
              {/* Hide tagline on md screens — too wide with full nav */}
              <div className="hidden lg:block text-[10px] text-[#2D5A4A]/70 -mt-1 tracking-[2px]">Kids Yoga • Mindfulness • School Programs</div>
            </div>
          </Link>

          {/* Desktop Menu — gap reduced on md, normal on lg */}
          <div className="hidden md:flex items-center gap-x-4 lg:gap-x-7 text-sm font-medium">
            {navLinks.map((link) => {
              if (link.href === '/programs') {
                return (
                  <div key={link.href} className="relative group">
                    <Link
                      href={link.href}
                      className={`nav-link text-[#1F2E2A] transition-colors flex items-center gap-x-1 ${isActive(link.href) ? 'nav-active' : ''}`}
                    >
                      {link.label}
                      <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                    </Link>

                    {/* Programs Dropdown */}
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-[#E8D5B7] rounded-2xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <Link href="/programs" className="block px-5 py-2.5 text-sm text-[#1F2E2A] hover:bg-[#F8F1E9] rounded-xl mx-1 transition-colors">
                        Programs Overview
                      </Link>
                      <Link href="/programs#school-programs" className="block px-5 py-2.5 text-sm text-[#1F2E2A] hover:bg-[#F8F1E9] rounded-xl mx-1 transition-colors">
                        In-School Yoga
                      </Link>
                      <Link href="/programs#workshops-events" className="block px-5 py-2.5 text-sm text-[#1F2E2A] hover:bg-[#F8F1E9] rounded-xl mx-1 transition-colors">
                        Workshops &amp; Events
                      </Link>

                      <div className="border-t border-[#E8D5B7] my-1 mx-2"></div>

                      <Link href="/families" className="block px-5 py-2.5 text-sm text-[#1F2E2A] hover:bg-[#F8F1E9] rounded-xl mx-1 transition-colors">
                        Family Sessions
                      </Link>
                      <Link href="/toddler-yoga-toronto" className="block px-5 py-2.5 text-sm text-[#1F2E2A] hover:bg-[#F8F1E9] rounded-xl mx-1 transition-colors">
                        Toddler Yoga
                      </Link>
                      <Link href="/mindfulness-for-kids-toronto" className="block px-5 py-2.5 text-sm text-[#1F2E2A] hover:bg-[#F8F1E9] rounded-xl mx-1 transition-colors">
                        Mindfulness for Kids
                      </Link>

                      <div className="border-t border-[#E8D5B7] my-1 mx-2"></div>

                      <Link href="/yoga-birthday-party-toronto" className="block px-5 py-2.5 text-sm text-[#1F2E2A] hover:bg-[#F8F1E9] rounded-xl mx-1 transition-colors">
                        🎂 Birthday Parties
                      </Link>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link text-[#1F2E2A] transition-colors ${isActive(link.href) ? 'nav-active' : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA Button — hidden on md, shows on lg */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-[#F4D35E] hover:bg-[#E8C84A] text-[#2D5A4A] text-sm font-semibold rounded-2xl transition-all active:scale-[0.985] shadow-sm hover:shadow"
            >
              Book a Program
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Mobile Menu Button — shows below lg */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-[#2D5A4A]"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="lg:hidden bg-white border-t border-[#E8D5B7] px-6 py-4 overflow-hidden"
          >
            <div className="flex flex-col gap-y-3 text-sm font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-2 text-[#1F2E2A] ${isActive(link.href) ? 'nav-active' : ''}`}
                >
                  {link.label}
                </Link>
              ))}

              {/* New service pages in mobile menu */}
              <div className="border-t border-[#E8D5B7] pt-3 flex flex-col gap-y-3">
                <Link
                  href="/toddler-yoga-toronto"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2 text-[#1F2E2A]"
                >
                  Toddler Yoga
                </Link>
                <Link
                  href="/mindfulness-for-kids-toronto"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2 text-[#1F2E2A]"
                >
                  Mindfulness for Kids
                </Link>
                <Link
                  href="/yoga-birthday-party-toronto"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2 text-[#1F2E2A]"
                >
                  Birthday Parties
                </Link>
              </div>

              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 inline-flex justify-center items-center px-6 py-3 bg-[#F4D35E] hover:bg-[#E8C84A] text-[#2D5A4A] text-sm font-semibold rounded-2xl transition-all active:scale-[0.985]"
              >
                Book a Program
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;