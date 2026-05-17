'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LocationsPage() {
  const locations = [
    {
      name: "Toronto",
      slug: "toronto",
      description: "Professional kids yoga and mindfulness programs for schools, childcare centres, daycares, and families across all of Toronto. Trusted by 25+ local schools since 2018.",
      featured: true,
    },
    {
      name: "North York",
      slug: "north-york",
      description: "Kids yoga programs for schools, daycares, and families across North York including Willowdale, Newtonbrook, Bayview Village, Don Mills, and York Mills.",
      featured: false,
    },
    {
      name: "Scarborough",
      slug: "scarborough",
      description: "Professional kids yoga and mindfulness in schools and homes across Scarborough including Agincourt, Birchcliff, Cliffside, Wexford, and Malvern.",
      featured: false,
    },
    {
      name: "Etobicoke",
      slug: "etobicoke",
      description: "In-school and after-school kids yoga programs serving Etobicoke and West Toronto including Mimico, Islington, Long Branch, Rexdale, and Humber Valley.",
      featured: false,
    },
    {
      name: "Downtown Toronto",
      slug: "downtown-toronto",
      description: "Kids yoga and mindfulness programs for downtown schools, daycares, and families including The Annex, Leslieville, Riverdale, Harbourfront, and Trinity Bellwoods.",
      featured: false,
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
          Kids Yoga Across Toronto and the GTA
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-[#1F2E2A]/70">
          We bring professional kids yoga and mindfulness programs to schools, childcare centres, and families across Toronto and the Greater Toronto Area. We come to you.
        </p>
      </div>

      {/* Toronto featured card — full width */}
      <motion.div
        className="mb-6"
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Link
          href="/toronto"
          className="block bg-[#2D5A4A] text-white rounded-3xl p-10 hover:bg-[#1F2E2A] transition-all"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="text-[#A7C4A0] text-xs font-semibold tracking-[2px] mb-2">PRIMARY SERVICE AREA</div>
              <h2 className="text-4xl font-semibold tracking-tight mb-3">Toronto</h2>
              <p className="text-white/75 max-w-xl">
                Professional kids yoga and mindfulness programs for schools, childcare centres, daycares, and families across all of Toronto. Trusted by 25+ local schools since 2018.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="inline-flex items-center text-sm font-semibold text-white/90">
                Explore Toronto Programs <i className="fa-solid fa-arrow-right ml-2"></i>
              </span>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Other location cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {locations.filter(l => !l.featured).map((location, index) => (
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
                Explore {location.name} Programs <i className="fa-solid fa-arrow-right ml-2"></i>
              </span>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Coming soon GTA areas */}
      <div className="mt-10 bg-[#F8F1E9] rounded-3xl p-8 border border-[#E8D5B7]">
        <div className="text-center mb-6">
          <div className="text-[#2D5A4A] text-xs font-semibold tracking-[2px] mb-2">ALSO SERVING THE GTA</div>
          <h3 className="text-2xl font-semibold tracking-tight heading-serif">Greater Toronto Area</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {["Vaughan", "Mississauga", "Markham", "Richmond Hill", "Brampton", "Oakville", "Ajax", "Pickering"].map((city, index) => (
            <div key={index} className="bg-white rounded-2xl px-4 py-3 text-sm text-center font-medium text-[#2D5A4A] border border-[#E8D5B7]">
              {city}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <p className="text-[#1F2E2A]/70 mb-4">
          Do not see your neighbourhood? We may still be able to help.
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