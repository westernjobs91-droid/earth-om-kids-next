'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NorthYorkPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      
      {/* Hero Section */}
      <div className="text-center mb-20">
        <div className="inline-block px-4 py-1 bg-[#A7C4A0]/20 text-[#2D5A4A] text-xs font-semibold tracking-[1.5px] rounded-full mb-4">
          SERVING NORTH YORK SINCE 2018
        </div>
        <h1 className="text-5xl md:text-6xl tracking-tighter font-semibold heading-serif mb-4">
          Kids Yoga in North York
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-[#1F2E2A]/70">
          Professional, nurturing kids yoga and mindfulness programs for schools, childcare centres, and families across North York, Toronto.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center gap-x-3 px-10 py-4 bg-[#2D5A4A] hover:bg-[#1F2E2A] transition text-white font-semibold rounded-3xl text-lg"
          >
            Book a North York Program
          </Link>
          <Link 
            href="/programs" 
            className="inline-flex items-center justify-center gap-x-3 px-10 py-4 border border-[#2D5A4A] text-[#2D5A4A] hover:bg-white font-semibold rounded-3xl text-lg"
          >
            View All Programs
          </Link>
        </div>
      </div>

      {/* Why North York Chooses Us */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">WHY NORTH YORK FAMILIES &amp; SCHOOLS TRUST US</div>
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">A calm, playful approach in your neighbourhood</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: "fa-map-marker-alt", title: "Local to North York", desc: "We regularly work with schools, daycares, and families across North York and surrounding areas." },
            { icon: "fa-school", title: "Trusted by Local Schools", desc: "Many North York schools and childcare centres have partnered with us for ongoing or seasonal programs." },
            { icon: "fa-clock", title: "Flexible and Convenient", desc: "We come to your location in North York — schools, daycares, community centres, or homes." }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-3xl border border-[#E8D5B7] shadow-sm"
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            >
              <div className="w-12 h-12 bg-[#F1EDE6] rounded-2xl flex items-center justify-center mb-6">
                <i className={`fa-solid ${item.icon} text-2xl text-[#2D5A4A]`}></i>
              </div>
              <h3 className="font-semibold text-xl tracking-tight mb-3">{item.title}</h3>
              <p className="text-[#1F2E2A]/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Programs in North York */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">PROGRAMS AVAILABLE IN NORTH YORK</div>
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">What We Offer in North York</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { 
              title: "School Yoga Programs", 
              desc: "In-class sessions, wellness weeks, and custom packages designed for North York schools and childcare centres.",
              link: "/schools",
              linkText: "Learn more for schools"
            },
            { 
              title: "After-School Classes", 
              desc: "Weekly playful yoga classes for toddlers, preschoolers, and school-age children in North York.",
              link: "/families",
              linkText: "See class options"
            },
            { 
              title: "Workshops &amp; Birthday Parties", 
              desc: "One-time yoga experiences, birthday parties, and family mindfulness workshops across North York.",
              link: "/contact",
              linkText: "Book an experience"
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-3xl border border-[#E8D5B7] flex flex-col"
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            >
              <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
              <p className="text-[#1F2E2A]/70 flex-1">{item.desc}</p>
              <Link href={item.link} className="mt-6 text-sm font-semibold text-[#2D5A4A] inline-flex items-center">
                {item.linkText} <i className="fa-solid fa-arrow-right ml-2"></i>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Benefits of Kids Yoga in North York</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "🧠", title: "Improved Focus", desc: "Children develop better attention and concentration skills." },
            { icon: "😊", title: "Emotional Balance", desc: "Learn simple tools to manage big feelings and stress." },
            { icon: "🤝", title: "Social Skills", desc: "Build confidence, kindness, and cooperation with peers." },
            { icon: "🌙", title: "Better Sleep &amp; Calm", desc: "Many families notice calmer evenings and improved sleep." }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-3xl border border-[#E8D5B7]"
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
              <p className="text-[#1F2E2A]/70 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <div className="text-center bg-[#F8F1E9] rounded-3xl p-12">
        <h2 className="text-3xl tracking-tighter font-semibold heading-serif mb-4">
          Ready to bring calm and confidence to North York children?
        </h2>
        <p className="text-[#1F2E2A]/70 mb-8 max-w-md mx-auto">
          Whether you're a school, daycare, or parent in North York — we’d love to partner with you.
        </p>
        <Link 
          href="/contact" 
          className="inline-flex items-center justify-center gap-x-3 px-10 py-4 bg-[#2D5A4A] hover:bg-[#1F2E2A] transition text-white font-semibold rounded-3xl text-lg"
        >
          Request a North York Program
        </Link>
      </div>
    </div>
  );
}