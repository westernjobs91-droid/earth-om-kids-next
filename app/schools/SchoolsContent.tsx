'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function SchoolsContent() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1 bg-[#A7C4A0]/20 text-[#2D5A4A] text-xs font-semibold tracking-[1.5px] rounded-full mb-4">
          FOR SCHOOLS &amp; CHILDCARE CENTRES
        </div>
        <h1 className="text-5xl md:text-6xl tracking-tighter font-semibold heading-serif mb-4">
          In-School Yoga &amp; Mindfulness<br />Programs in Toronto
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-[#1F2E2A]/70">
          Professional, classroom-ready kids yoga and mindfulness programs trusted by 25+ schools and childcare centres across Toronto and the GTA.
        </p>
        <div className="mt-8">
          <Link href="/contact" className="inline-flex items-center justify-center gap-x-3 px-10 py-4 bg-[#2D5A4A] hover:bg-[#1F2E2A] transition text-white font-semibold rounded-3xl text-lg">
            Request a School Program <i className="fa-solid fa-envelope ml-2"></i>
          </Link>
        </div>
      </div>

      {/* Why Schools Choose Us */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">WHY SCHOOLS CHOOSE EARTH &amp; OM KIDS</div>
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Designed for real classrooms</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: "fa-user-graduate", title: "Led by a Registered ECE", desc: "Deep understanding of child development, classroom dynamics, and how to support diverse learners." },
            { icon: "fa-clock", title: "Classroom-Ready Sessions", desc: "30–45 minute sessions that fit seamlessly into your daily schedule with minimal disruption." },
            { icon: "fa-chart-line", title: "Measurable Classroom Impact", desc: "Improved focus, emotional regulation, fewer disruptions, and calmer transitions reported by teachers." },
            { icon: "fa-sliders-h", title: "Fully Customizable", desc: "We tailor every program to your school’s goals, age groups, space, and schedule." },
            { icon: "fa-users", title: "Inclusive and Supportive", desc: "Experience working with mixed-age groups and children with diverse learning needs." },
            { icon: "fa-handshake", title: "Long-Term Partnerships", desc: "Many schools return year after year because of the consistent quality and results." }
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl border border-[#E8D5B7]">
              <div className="w-14 h-14 bg-[#2D5A4A]/10 rounded-2xl flex items-center justify-center mb-6">
                <i className={`fa-solid ${item.icon} text-3xl text-[#2D5A4A]`}></i>
              </div>
              <h3 className="font-semibold text-xl tracking-tight mb-3">{item.title}</h3>
              <p className="text-[#1F2E2A]/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What a Typical Program Looks Like */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">WHAT TO EXPECT</div>
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">What a Typical School Program Looks Like</h2>
        </div>

        <div className="bg-white border border-[#E8D5B7] rounded-3xl p-10">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <h3 className="font-semibold text-xl mb-4">Session Structure (30–45 mins)</h3>
              <ul className="space-y-3 text-[#1F2E2A]/80">
                <li>• Gentle arrival &amp; centering</li>
                <li>• Warm-up movement &amp; animal poses</li>
                <li>• Breathing games &amp; mindfulness activities</li>
                <li>• Story-based yoga or themed exploration</li>
                <li>• Calm-down &amp; reflection time</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-4">Popular Program Themes</h3>
              <div className="flex flex-wrap gap-2">
                {["Focus and Attention", "Emotional Regulation", "Calm Transitions", "Gratitude and Kindness", "Body Awareness", "Energy and Calm", "Mindful Listening", "Friendship and Cooperation"].map((theme, i) => (
                  <span key={i} className="px-4 py-1.5 bg-[#F8F1E9] text-sm rounded-full border border-[#E8D5B7]">{theme}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our School Partners */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">TRUSTED BY TORONTO SCHOOLS</div>
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Our School &amp; Childcare Partners</h2>
          <p className="mt-3 text-[#1F2E2A]/70 max-w-md mx-auto">We’re proud to partner with these amazing Toronto and GTA schools and centres.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm">
          {[
            "Beach Hill Montessori", "Abacus Montessori", "Lycée Français Toronto",
            "Kids Connect Daycare (North York)", "East Toronto Village Children’s Centre",
            "McNicoll Avenue Child Care", "Le Petit Chaperon Rouge", "Northwest Childhood Learning Centre",
            "Smart Little Children Daycare", "Sunny Faces Daycare", "Phoenix Childcare Centre",
            "Cliffwood Community Child Care", "Three R’s Early Learning Centre", "Midland Childcare Centre"
          ].map((school, index) => (
            <div key={index} className="bg-white p-4 rounded-2xl border border-[#E8D5B7] text-center">
              {school}
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-[#2D5A4A]/60 mt-6">+ Many more across Toronto &amp; the GTA</p>
      </section>

      {/* Testimonials from Schools */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">WHAT EDUCATORS SAY</div>
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Real feedback from Toronto schools</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-3xl border border-[#E8D5B7]">
            <p className="italic text-[#1F2E2A]/80">"The children are noticeably calmer and more focused after Taran’s sessions. She has a beautiful way of connecting with even our youngest toddlers."</p>
            <div className="mt-6 text-sm font-semibold">— Director, Toronto</div>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-[#E8D5B7]">
            <p className="italic text-[#1F2E2A]/80">"Taran brought such warmth and professionalism to our wellness week. The custom program was perfectly tailored to our mixed-age group."</p>
            <div className="mt-6 text-sm font-semibold">— Prinicipal, Toronto</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center bg-[#F8F1E9] rounded-3xl p-12">
        <h2 className="text-3xl tracking-tighter font-semibold heading-serif mb-4">Ready to bring calm and focus to your school?</h2>
        <p className="text-[#1F2E2A]/70 mb-8 max-w-md mx-auto">We’d love to create a custom program for your classroom or centre.</p>
        <Link href="/contact" className="inline-flex items-center justify-center gap-x-3 px-10 py-4 bg-[#2D5A4A] hover:bg-[#1F2E2A] transition text-white font-semibold rounded-3xl text-lg">
          Request a School Program
        </Link>
      </div>
    </div>
  );
}