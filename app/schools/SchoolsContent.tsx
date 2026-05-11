'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function SchoolsContent() {
  return (
    <>
      {/* Hero for Schools */}
      <div className="bg-[#2D5A4A] text-white">
        <div className="max-w-5xl mx-auto px-6 pt-16 pb-14 text-center">
          <div className="inline px-4 py-1 bg-white/20 text-xs font-semibold tracking-[1.5px] rounded-full mb-4">FOR SCHOOLS, DAYCARES &amp; MONTESSORI</div>
          <h1 className="text-6xl tracking-tighter font-semibold heading-serif">Bring calm, focus &amp;<br />joy to your school community</h1>
          <p className="mt-5 max-w-lg mx-auto text-xl text-white/90">Professional kids yoga and mindfulness programs designed specifically for Toronto classrooms and childcare environments.</p>
          
          <div className="mt-8">
            <a href="#how-it-works" className="inline-flex items-center px-8 py-4 bg-white text-[#2D5A4A] font-semibold rounded-3xl text-lg hover:bg-[#F8F1E9]">See how it works <i className="fa-solid fa-arrow-down ml-3"></i></a>
          </div>
        </div>
      </div>

      {/* Why Schools Choose Us */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <div className="text-xs tracking-[2px] text-[#2D5A4A] font-semibold">WHY LEADING TORONTO SCHOOLS PARTNER WITH US</div>
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif mt-2">A trusted, calming &amp; professional experience</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white p-7 rounded-3xl border border-[#E8D5B7]">
            <i className="fa-solid fa-check-circle text-3xl text-[#2D5A4A] mb-4"></i>
            <div className="font-semibold text-xl">School-Ready Design</div>
            <p className="mt-2 text-sm text-[#1F2E2A]/75">Sessions are thoughtfully structured to fit into real school days — short, engaging, and easy to integrate.</p>
          </div>
          <div className="bg-white p-7 rounded-3xl border border-[#E8D5B7]">
            <i className="fa-solid fa-check-circle text-3xl text-[#2D5A4A] mb-4"></i>
            <div className="font-semibold text-xl">Measurable Impact</div>
            <p className="mt-2 text-sm text-[#1F2E2A]/75">Educators report improved focus, fewer disruptions, and children who are better able to self-regulate.</p>
          </div>
          <div className="bg-white p-7 rounded-3xl border border-[#E8D5B7]">
            <i className="fa-solid fa-check-circle text-3xl text-[#2D5A4A] mb-4"></i>
            <div className="font-semibold text-xl">ECE Expertise</div>
            <p className="mt-2 text-sm text-[#1F2E2A]/75">Led by a Registered Early Childhood Educator who understands child development and classroom dynamics.</p>
          </div>
          <div className="bg-white p-7 rounded-3xl border border-[#E8D5B7]">
            <i className="fa-solid fa-check-circle text-3xl text-[#2D5A4A] mb-4"></i>
            <div className="font-semibold text-xl">Fully Customizable</div>
            <p className="mt-2 text-sm text-[#1F2E2A]/75">Every program is adapted to your ages, schedule, space, and specific goals (focus, transitions, emotional literacy, etc.).</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-white border-y border-[#E8D5B7] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-center text-4xl tracking-tighter font-semibold heading-serif mb-10">How it works</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-[#2D5A4A] text-white rounded-full flex items-center justify-center text-xl font-semibold mb-4">1</div>
              <div className="font-semibold">Discovery Call</div>
              <p className="text-sm mt-2 text-[#1F2E2A]/70">We learn about your school, ages, goals, and schedule.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-[#2D5A4A] text-white rounded-full flex items-center justify-center text-xl font-semibold mb-4">2</div>
              <div className="font-semibold">Custom Proposal</div>
              <p className="text-sm mt-2 text-[#1F2E2A]/70">You receive a tailored program outline with clear outcomes and pricing.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-[#2D5A4A] text-white rounded-full flex items-center justify-center text-xl font-semibold mb-4">3</div>
              <div className="font-semibold">Seamless Delivery</div>
              <p className="text-sm mt-2 text-[#1F2E2A]/70">Taran arrives prepared. Sessions run smoothly with minimal disruption.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-[#2D5A4A] text-white rounded-full flex items-center justify-center text-xl font-semibold mb-4">4</div>
              <div className="font-semibold">Ongoing Support</div>
              <p className="text-sm mt-2 text-[#1F2E2A]/70">Resources for teachers, progress updates, and flexible rescheduling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By - Premium Partners Showcase */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <div className="text-xs tracking-[2px] font-semibold text-[#2D5A4A] mb-3">TRUSTED BY LEADING CHILDCARE CENTRES</div>
          <h2 className="text-5xl tracking-tighter font-semibold heading-serif mb-4">Valued by schools, daycares, and Montessori communities</h2>
          <p className="max-w-3xl mx-auto text-lg text-[#1F2E2A]/70">
            Earth & OM Kids has partnered with respected early learning environments across the GTA to bring calm, 
            movement, mindfulness, and joyful yoga experiences to children.
          </p>
        </div>

        {/* Featured Partners - Top row (6 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {[
            "McNicoll Avenue Child Care Program",
            "Kids Connect Daycare",
            "Le Petit Chaperon Rouge",
            "Beach Hill Montessori",
            "Abacus Montessori",
            "Lycée Français Toronto"
          ].map((school, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              className="bg-white rounded-3xl px-8 py-6 text-center border border-[#E8D5B7] shadow-sm hover:shadow-xl transition-all group cursor-default"
            >
              <span className="font-semibold text-[#1F2E2A] text-[15px] leading-tight tracking-tight group-hover:text-[#2D5A4A] transition-colors">
                {school}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Elegant Divider with Badge */}
        <div className="flex items-center justify-center gap-x-4 mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-[#E8D5B7] to-transparent flex-1 max-w-[100px]"></div>
          <div className="px-6 py-1.5 rounded-full border border-[#E8D5B7] bg-white text-xs font-semibold tracking-[1.5px] text-[#2D5A4A]">
            AND MORE PARTNERS
          </div>
          <div className="h-px bg-gradient-to-l from-transparent via-[#E8D5B7] to-transparent flex-1 max-w-[100px]"></div>
        </div>

        {/* Additional Partners - 8 cards in responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "Northwest Childhood Learning Centre",
            "Smart Little Children Daycare Centre",
            "Sunny Faces Daycare",
            "East Toronto Village Children's Centre",
            "Phoenix Childcare Centre",
            "Cliffwood Community Child Care",
            "Three R's Early Learning Centre",
            "Midland Childcare Centre"
          ].map((school, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                y: -6, 
                scale: 1.015,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              className="bg-white rounded-3xl px-6 py-5 text-center border border-[#E8D5B7] shadow-sm hover:shadow-lg transition-all group cursor-default"
            >
              <span className="font-medium text-[#1F2E2A] text-[14.5px] leading-tight tracking-tight group-hover:text-[#2D5A4A] transition-colors">
                {school}
              </span>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs mt-8 text-[#2D5A4A]/60 max-w-md mx-auto">
          References and detailed feedback from directors, educators, and families available upon request.
        </p>
      </section>

      {/* FAQ for Schools */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-semibold tracking-tight heading-serif text-center mb-8">Frequently asked questions from schools</h2>
        
        <div className="space-y-3">
          <details className="bg-white border border-[#E8D5B7] rounded-2xl p-6 group">
            <summary className="font-semibold cursor-pointer flex justify-between items-center">What ages do you work with?<span className="text-[#2D5A4A] group-open:rotate-180 transition">↓</span></summary>
            <p className="mt-3 text-sm text-[#1F2E2A]/80">We work with children from 18 months through elementary school (up to age 10–12). Sessions are always age-appropriate and adapted to developmental stages.</p>
          </details>
          
          <details className="bg-white border border-[#E8D5B7] rounded-2xl p-6 group">
            <summary className="font-semibold cursor-pointer flex justify-between items-center">How long are the sessions?<span className="text-[#2D5A4A] group-open:rotate-180 transition">↓</span></summary>
            <p className="mt-3 text-sm text-[#1F2E2A]/80">Typical classroom sessions are 30–45 minutes. We can adjust based on your schedule and the children’s ages and attention spans.</p>
          </details>
          
          <details className="bg-white border border-[#E8D5B7] rounded-2xl p-6 group">
            <summary className="font-semibold cursor-pointer flex justify-between items-center">Do teachers need to stay in the room?<span className="text-[#2D5A4A] group-open:rotate-180 transition">↓</span></summary>
            <p className="mt-3 text-sm text-[#1F2E2A]/80">Yes — we strongly encourage teachers to participate or observe. It models mindfulness for the children and helps reinforce the practices throughout the week.</p>
          </details>
          
          <details className="bg-white border border-[#E8D5B7] rounded-2xl p-6 group">
            <summary className="font-semibold cursor-pointer flex justify-between items-center">What space do we need?<span className="text-[#2D5A4A] group-open:rotate-180 transition">↓</span></summary>
            <p className="mt-3 text-sm text-[#1F2E2A]/80">A regular classroom or gym space works perfectly. Children can participate on mats, carpet, or even at their desks for seated mindfulness activities.</p>
          </details>
        </div>
      </section>

      {/* Strong CTA */}
      <div className="bg-[#2D5A4A] py-14 text-white">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h3 className="text-4xl tracking-tighter font-semibold">Ready to bring yoga &amp; mindfulness to your school?</h3>
          <p className="mt-4 text-white/80">Let’s schedule a discovery call and design a program that fits your community perfectly.</p>
          <Link href="/contact" className="mt-7 inline-block px-10 py-4 bg-white text-[#2D5A4A] font-semibold rounded-3xl text-lg">Request a School Program</Link>
          <div className="text-xs mt-4 text-white/60">Serving Toronto, North York, Scarborough, Etobicoke &amp; GTA</div>
        </div>
      </div>
    </>
  );
}