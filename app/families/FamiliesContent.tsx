'use client';

import React from 'react';
import Link from 'next/link';

export default function FamiliesContent() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      
      {/* Hero */}
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1 bg-[#A7C4A0]/20 text-[#2D5A4A] text-xs font-semibold tracking-[1.5px] rounded-full mb-4">
          FOR FAMILIES
        </div>
        <h1 className="text-5xl md:text-6xl tracking-tighter font-semibold heading-serif mb-4">
          Kids Yoga &amp; Mindfulness<br />for Toronto Families
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-[#1F2E2A]/70">
          Playful after-school classes, birthday parties, and workshops designed to help children feel calm, confident, and connected.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="inline-flex items-center justify-center gap-x-3 px-10 py-4 bg-[#2D5A4A] hover:bg-[#1F2E2A] transition text-white font-semibold rounded-3xl text-lg">
            Book for Your Child
          </Link>
          <Link href="/programs" className="inline-flex items-center justify-center gap-x-3 px-10 py-4 border border-[#2D5A4A] text-[#2D5A4A] hover:bg-white font-semibold rounded-3xl text-lg">
            View All Options
          </Link>
        </div>
      </div>

      {/* Why Families Love Us */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">WHY FAMILIES CHOOSE US</div>
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">A fun and calming experience for kids</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-3xl border border-[#E8D5B7] shadow-sm">
            <div className="w-12 h-12 bg-[#F1EDE6] rounded-2xl flex items-center justify-center mb-6">
              <i className="fa-solid fa-child text-2xl text-[#2D5A4A]"></i>
            </div>
            <h3 className="font-semibold text-xl tracking-tight mb-3">Playful &amp; Age-Appropriate</h3>
            <p className="text-[#1F2E2A]/70">Classes designed specifically for toddlers, preschoolers, and school-age children using stories, games, and imagination.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#E8D5B7] shadow-sm">
            <div className="w-12 h-12 bg-[#F1EDE6] rounded-2xl flex items-center justify-center mb-6">
              <i className="fa-solid fa-brain text-2xl text-[#2D5A4A]"></i>
            </div>
            <h3 className="font-semibold text-xl tracking-tight mb-3">Builds Calm &amp; Confidence</h3>
            <p className="text-[#1F2E2A]/70">Children learn simple tools to manage big feelings, improve focus, and feel more confident in themselves.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#E8D5B7] shadow-sm">
            <div className="w-12 h-12 bg-[#F1EDE6] rounded-2xl flex items-center justify-center mb-6">
              <i className="fa-solid fa-home text-2xl text-[#2D5A4A]"></i>
            </div>
            <h3 className="font-semibold text-xl tracking-tight mb-3">Convenient for Busy Families</h3>
            <p className="text-[#1F2E2A]/70">After-school classes and weekend workshops that fit easily into your family’s schedule.</p>
          </div>
        </div>
      </section>

      {/* After-School Classes */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">WEEKLY CLASSES</div>
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">After-School Yoga Classes</h2>
        </div>

        <div className="bg-white border border-[#E8D5B7] rounded-3xl p-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-xl mb-4">Toddlers (18 months – 3 years)</h3>
              <p className="text-[#1F2E2A]/70">Short, playful sessions with songs, simple movements, repetition, and lots of joy.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-4">Preschool (3 – 5 years)</h3>
              <p className="text-[#1F2E2A]/70">Story-based classes with animal poses, breathing games, and beginning mindfulness.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-4">School Age (5 – 10 years)</h3>
              <p className="text-[#1F2E2A]/70">Longer sessions with more poses, emotional awareness, and self-regulation tools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Birthday Parties & Workshops */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">SPECIAL EXPERIENCES</div>
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Birthday Parties &amp; Workshops</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-3xl border border-[#E8D5B7]">
            <h3 className="font-semibold text-xl mb-4">🎉 Yoga Birthday Parties</h3>
            <p className="text-[#1F2E2A]/70 mb-4">A fun, active, and mindful birthday experience your child and their friends will remember.</p>
            <Link href="/contact" className="text-sm font-semibold text-[#2D5A4A]">Book a Birthday Party →</Link>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#E8D5B7]">
            <h3 className="font-semibold text-xl mb-4">🌿 Family Yoga Workshops</h3>
            <p className="text-[#1F2E2A]/70 mb-4">Weekend workshops where parents and children practice together. Great for bonding and learning mindfulness as a family.</p>
            <Link href="/contact" className="text-sm font-semibold text-[#2D5A4A]">Inquire about Workshops →</Link>
          </div>
        </div>
      </section>

      {/* What Kids Learn */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">WHAT YOUR CHILD WILL GAIN</div>
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Skills That Last a Lifetime</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Better focus & attention", "Emotional regulation tools", "Improved confidence", "Calmer transitions", "Stronger body awareness", "Kindness & cooperation", "Better sleep habits", "Stress management skills"].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-3xl border border-[#E8D5B7] text-center">
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <div className="text-center bg-[#F8F1E9] rounded-3xl p-12">
        <h2 className="text-3xl tracking-tighter font-semibold heading-serif mb-4">
          Ready to help your child feel calmer and more confident?
        </h2>
        <p className="text-[#1F2E2A]/70 mb-8 max-w-md mx-auto">
          We’d love to welcome your child into our classes or create a special experience for their birthday.
        </p>
        <Link href="/contact" className="inline-flex items-center justify-center gap-x-3 px-10 py-4 bg-[#2D5A4A] hover:bg-[#1F2E2A] transition text-white font-semibold rounded-3xl text-lg">
          Book a Class or Party
        </Link>
      </div>
    </div>
  );
}