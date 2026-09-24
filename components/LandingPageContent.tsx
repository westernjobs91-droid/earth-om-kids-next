'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, Wind, Star, Feather, MapPin, SlidersHorizontal, Users, Heart, Sun, Brain } from 'lucide-react';
import type { LandingPage, IconKey } from '@/lib/landingPages';
import { reviews } from '@/lib/reviews';
import ReviewsCarousel from '@/components/ReviewsCarousel';

const icons: Record<IconKey, React.ComponentType<{ className?: string }>> = {
  sparkles: Sparkles,
  wind: Wind,
  star: Star,
  feather: Feather,
  map: MapPin,
  sliders: SlidersHorizontal,
  users: Users,
  heart: Heart,
  sun: Sun,
  brain: Brain,
};

export default function LandingPageContent({ page }: { page: LandingPage }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* Hero */}
      <div className="text-center mb-20">
        <div className="inline-block px-4 py-1 bg-[#A7C4A0]/20 text-[#2D5A4A] text-xs font-semibold tracking-[1.5px] rounded-full mb-4">
          {page.badge}
        </div>
        <h1 className="text-5xl md:text-6xl tracking-tighter font-semibold heading-serif mb-4">{page.h1}</h1>
        <p className="max-w-2xl mx-auto text-xl text-[#1F2E2A]/70">{page.intro}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-x-3 px-10 py-4 bg-[#2D5A4A] hover:bg-[#1F2E2A] transition text-white font-semibold rounded-3xl text-lg"
          >
            {page.ctaLabel}
          </Link>
          <Link
            href="/programs"
            className="inline-flex items-center justify-center gap-x-3 px-10 py-4 border border-[#2D5A4A] text-[#2D5A4A] hover:bg-white font-semibold rounded-3xl text-lg"
          >
            View All Programs
          </Link>
        </div>
      </div>

      {/* SEO Content Block */}
      <section className="mb-20 bg-white rounded-3xl border border-[#E8D5B7] p-10 md:p-14">
        <h2 className="text-3xl tracking-tighter font-semibold heading-serif mb-6">{page.seoHeading}</h2>
        <div className="max-w-none text-lg leading-relaxed text-[#1F2E2A]/75 space-y-4">
          {page.seoParagraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>

      {/* Highlights */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">{page.highlightsEyebrow}</div>
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">{page.highlightsHeading}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {page.highlights.map((item) => {
            const Icon = icons[item.icon];
            return (
              <motion.div
                key={item.title}
                className="bg-white p-8 rounded-3xl border border-[#E8D5B7] shadow-sm"
                whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              >
                <div className="w-12 h-12 bg-[#F1EDE6] rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6 text-[#2D5A4A]" />
                </div>
                <h3 className="font-semibold text-xl tracking-tight mb-3">{item.title}</h3>
                <p className="text-[#1F2E2A]/70">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Details */}
      <section className="mb-20 bg-[#F8F1E9] rounded-3xl p-10 md:p-14">
        <div className="text-center mb-10">
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Details at a Glance</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {page.details.map((item) => (
            <div key={item.label} className="bg-white rounded-3xl border border-[#E8D5B7] p-6 flex items-center gap-x-5">
              <div className="w-2 h-10 bg-[#2D5A4A] rounded-full flex-shrink-0" />
              <div>
                <div className="text-xs font-semibold text-[#2D5A4A] tracking-wider uppercase mb-1">{item.label}</div>
                <div className="font-semibold text-[#1F2E2A]">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Real Google reviews */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">FROM GOOGLE REVIEWS</div>
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">What Families &amp; Educators Say</h2>
        </div>
        <ReviewsCarousel reviews={reviews} />
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4 max-w-3xl mx-auto">
          {page.faqs.map((item) => (
            <div key={item.q} className="bg-white rounded-3xl border border-[#E8D5B7] p-7">
              <h3 className="font-semibold text-lg mb-2 text-[#1F2E2A]">{item.q}</h3>
              <p className="text-[#1F2E2A]/70 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related programs */}
      <section className="mb-20 text-center">
        <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-4">EXPLORE MORE</div>
        <div className="flex flex-wrap justify-center gap-3">
          {page.related.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-5 py-2.5 bg-white border border-[#E8D5B7] rounded-full text-sm font-semibold text-[#2D5A4A] hover:bg-[#2D5A4A] hover:text-white transition"
            >
              {link.label} &rarr;
            </Link>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <div className="text-center bg-[#2D5A4A] text-white rounded-3xl p-12">
        <h2 className="text-3xl tracking-tighter font-semibold mb-4">{page.ctaHeading}</h2>
        <p className="text-white/80 mb-8 max-w-md mx-auto">{page.ctaText}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-x-3 px-10 py-4 bg-white text-[#2D5A4A] font-semibold rounded-3xl text-lg hover:bg-[#F8F1E9] transition"
          >
            {page.ctaLabel}
          </Link>
          <a
            href="tel:6478568206"
            className="inline-flex items-center justify-center gap-x-3 px-10 py-4 border border-white text-white font-semibold rounded-3xl text-lg hover:bg-white/10 transition"
          >
            Call (647) 856-8206
          </a>
        </div>
      </div>

    </div>
  );
}
