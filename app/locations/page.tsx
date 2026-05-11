'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LocationsPage() {
  const locations = [
    {
      name: "North York",
      slug: "north-york",
      description: "Kids yoga programs for schools, daycares, and families across North York.",
    },
    {
      name: "Scarborough",
      slug: "scarborough",
      description: "Professional kids yoga and mindfulness in schools and homes across Scarborough.",
    },
    {
      name: "Etobicoke",
      slug: "etobicoke",
      description: "In-school and after-school kids yoga programs serving Etobicoke and West Toronto.",
    },
    {
      name: "Downtown Toronto",
      slug: "downtown-toronto",
      description: "Kids yoga and mindfulness programs for downtown schools, daycares, and families.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      
      {/* Hero */}
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1 bg-[#A7C4A0]/20 text-[#2D5A4A] text-xs font-semibold tracking-[1.5px] rounded-full mb-4">
          WHERE WE SERVE
        </div>
        <h1 className="text-5xl md:text-6xl tracking-tighter font-semibold heading-serif mb-4">
          Kids Yoga Across Toronto
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-[#1F2E2A]/70">
          We proudly offer kids yoga and mindfulness programs in schools, childcare centres, and homes across these Toronto neighbourhoods.
        </p>
      </div>

      {/* Location Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {locations.map((location, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Link 
              href={`/${location.slug}`}
              className="block bg-white border border-[#E8D5B7] rounded-3xl p-8 h-full hover:border-[#2D5A4A]/40 transition-all"
            >
              <h2 className="text-3xl font-semibold tracking-tight mb-3">{location.name}</h2>
              <p className="text-[#1F2E2A]/70 mb-6">{location.description}</p>
              <span className="inline-flex items-center text-sm font-semibold text-[#2D5A4A]">
                Explore {location.name} Programs →
              </span>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <p className="text-[#1F2E2A]/70 mb-4">
          Don’t see your neighbourhood? We may still be able to help.
        </p>
        <Link 
          href="/contact" 
          className="inline-flex items-center justify-center gap-x-3 px-8 py-4 bg-[#2D5A4A] hover:bg-[#1F2E2A] transition text-white font-semibold rounded-3xl text-lg"
        >
          Contact Us About Your Area
        </Link>
      </div>
    </div>
  );
}