'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="nature-bg h-[100dvh] min-h-[620px] flex items-center relative">
        <motion.div 
          className="max-w-5xl mx-auto px-6 text-center text-white"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.25,
              },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: -15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
            className="inline-flex items-center gap-x-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full mb-6 text-sm font-medium tracking-wider"
          >
            <div className="w-2 h-2 bg-[#A7C4A0] rounded-full animate-pulse"></div>
            TORONTO &amp; GTA • EST. 2018
          </motion.div>
          
          {/* Headline */}
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1] } },
            }}
            className="text-6xl md:text-7xl font-semibold tracking-tighter leading-[1.05] mb-6 heading-serif"
          >
            Calm minds.<br />
            Joyful movement.<br />
            <span className="text-[#F8F1E9]">Confident kids.</span>
          </motion.h1>
          
          {/* Subtext */}
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
            }}
            className="max-w-2xl mx-auto text-xl md:text-2xl text-white/90 mb-10 tracking-tight"
          >
            Refined kids yoga &amp; mindfulness programs trusted by schools, 
            childcare centres, and families across Toronto.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="/schools" 
              className="group inline-flex items-center justify-center gap-x-3 px-8 py-4 bg-white text-[#2D5A4A] font-semibold rounded-3xl text-lg hover:bg-[#F8F1E9] transition-all active:scale-[0.985]"
            >
              For Schools &amp; Centres
              <i className="fa-solid fa-school group-hover:translate-x-0.5 transition"></i>
            </Link>
            <Link 
              href="/families" 
              className="group inline-flex items-center justify-center gap-x-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/40 text-white font-semibold rounded-3xl text-lg transition-all active:scale-[0.985]"
            >
              For Families
              <i className="fa-solid fa-home group-hover:translate-x-0.5 transition"></i>
            </Link>
          </motion.div>
          
          {/* Trust indicator */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
            className="mt-8 flex justify-center"
          >
            <div className="flex items-center gap-x-2 text-sm text-white/80">
              <div className="flex -space-x-1">
                <div className="w-6 h-6 bg-white/30 rounded-full ring-1 ring-white/50"></div>
                <div className="w-6 h-6 bg-white/30 rounded-full ring-1 ring-white/50"></div>
                <div className="w-6 h-6 bg-white/30 rounded-full ring-1 ring-white/50"></div>
              </div>
              <span>Trusted by 25+ Toronto schools &amp; centres</span>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
          <a href="#why-us" className="flex flex-col items-center text-white/70 hover:text-white text-xs tracking-widest">
            SCROLL TO EXPLORE
            <i className="fa-solid fa-chevron-down mt-1 animate-bounce"></i>
          </a>
        </div>
      </header>

      {/* Trust Bar / Partners */}
      <div className="bg-white py-6 border-b border-[#E8D5B7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 opacity-75">
            <div className="text-xs uppercase tracking-[1.5px] font-medium text-[#2D5A4A]/60 mr-3">Featured in</div>
            <div className="text-sm font-medium">Beach Hill Montessori</div>
            <div className="text-sm font-medium">Abacus Montessori</div>
            <div className="text-sm font-medium">Lycée Français Toronto</div>
            <div className="text-sm font-medium">Kids Connect Daycare</div>
            <div className="text-sm font-medium">East Toronto Village Children’s Centre</div>
            <div className="text-xs text-[#2D5A4A]/50">+ 20 more</div>
          </div>
        </div>
      </div>

      {/* Why Us Section - Enhanced */}
      <section id="why-us" className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-1 bg-[#A7C4A0]/20 text-[#2D5A4A] text-xs font-semibold tracking-[1.5px] rounded-full mb-4">
            WHY TORONTO SCHOOLS &amp; FAMILIES CHOOSE US
          </div>
          <h2 className="text-5xl tracking-tighter font-semibold heading-serif">A calm, playful &amp; heart-centered approach</h2>
          <p className="mt-4 max-w-md mx-auto text-lg text-[#1F2E2A]/70">
            Professional. Nurturing. Designed specifically for young children in real classroom and home environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <motion.div 
            className="yoga-card bg-white p-8 rounded-3xl soft-shadow border border-[#E8D5B7]/60"
            whileHover={{ y: -12, scale: 1.015, transition: { type: "spring", stiffness: 400, damping: 25 } }}
          >
            <div className="benefit-icon w-14 h-14 bg-[#2D5A4A]/10 rounded-2xl flex items-center justify-center mb-6">
              <i className="fa-solid fa-user-graduate text-3xl text-[#2D5A4A]"></i>
            </div>
            <h3 className="font-semibold text-2xl tracking-tight mb-3">Led by an Early Childhood Educator</h3>
            <p className="text-[#1F2E2A]/70 leading-relaxed">Deep expertise in child development, classroom dynamics, and age-appropriate practices that work with young children.</p>
          </motion.div>

          <motion.div 
            className="yoga-card bg-white p-8 rounded-3xl soft-shadow border border-[#E8D5B7]/60"
            whileHover={{ y: -12, scale: 1.015, transition: { type: "spring", stiffness: 400, damping: 25 } }}
          >
            <div className="benefit-icon w-14 h-14 bg-[#2D5A4A]/10 rounded-2xl flex items-center justify-center mb-6">
              <i className="fa-solid fa-school text-3xl text-[#2D5A4A]"></i>
            </div>
            <h3 className="font-semibold text-2xl tracking-tight mb-3">Proven Results in Real Toronto Classrooms</h3>
            <p className="text-[#1F2E2A]/70 leading-relaxed">Teachers report improved focus, fewer disruptions, better emotional regulation, and calmer learning environments.</p>
          </motion.div>

          <motion.div 
            className="yoga-card bg-white p-8 rounded-3xl soft-shadow border border-[#E8D5B7]/60"
            whileHover={{ y: -12, scale: 1.015, transition: { type: "spring", stiffness: 400, damping: 25 } }}
          >
            <div className="benefit-icon w-14 h-14 bg-[#2D5A4A]/10 rounded-2xl flex items-center justify-center mb-6">
              <i className="fa-solid fa-sliders-h text-3xl text-[#2D5A4A]"></i>
            </div>
            <h3 className="font-semibold text-2xl tracking-tight mb-3">Fully Customizable Programs</h3>
            <p className="text-[#1F2E2A]/70 leading-relaxed">Every program is tailored to your schedule, space, age groups, and specific goals whether focus, transitions, or emotional literacy.</p>
          </motion.div>

          <motion.div 
            className="yoga-card bg-white p-8 rounded-3xl soft-shadow border border-[#E8D5B7]/60"
            whileHover={{ y: -12, scale: 1.015, transition: { type: "spring", stiffness: 400, damping: 25 } }}
          >
            <div className="benefit-icon w-14 h-14 bg-[#2D5A4A]/10 rounded-2xl flex items-center justify-center mb-6">
              <i className="fa-solid fa-child text-3xl text-[#2D5A4A]"></i>
            </div>
            <h3 className="font-semibold text-2xl tracking-tight mb-3">Playful + Heart-Centered Approach</h3>
            <p className="text-[#1F2E2A]/70 leading-relaxed">Yoga that feels like play. We use stories, animal poses, breathing games, and imagination so children stay engaged.</p>
          </motion.div>

          <motion.div 
            className="yoga-card bg-white p-8 rounded-3xl soft-shadow border border-[#E8D5B7]/60"
            whileHover={{ y: -12, scale: 1.015, transition: { type: "spring", stiffness: 400, damping: 25 } }}
          >
            <div className="benefit-icon w-14 h-14 bg-[#2D5A4A]/10 rounded-2xl flex items-center justify-center mb-6">
              <i className="fa-solid fa-map-marker-alt text-3xl text-[#2D5A4A]"></i>
            </div>
            <h3 className="font-semibold text-2xl tracking-tight mb-3">Serving Toronto &amp; the GTA Since 2018</h3>
            <p className="text-[#1F2E2A]/70 leading-relaxed">We work across North York, Scarborough, Etobicoke, Downtown Toronto, and surrounding communities.</p>
          </motion.div>

          <motion.div 
            className="yoga-card bg-white p-8 rounded-3xl soft-shadow border border-[#E8D5B7]/60"
            whileHover={{ y: -12, scale: 1.015, transition: { type: "spring", stiffness: 400, damping: 25 } }}
          >
            <div className="benefit-icon w-14 h-14 bg-[#2D5A4A]/10 rounded-2xl flex items-center justify-center mb-6">
              <i className="fa-solid fa-handshake text-3xl text-[#2D5A4A]"></i>
            </div>
            <h3 className="font-semibold text-2xl tracking-tight mb-3">Trusted by 25+ Local Schools &amp; Centres</h3>
            <p className="text-[#1F2E2A]/70 leading-relaxed">From Montessori and daycare programs to elementary schools we’ve built strong, long-term partnerships across Toronto.</p>
          </motion.div>
        </div>
      </section>

      {/* Our Programs Teaser */}
      <section className="bg-white py-16 border-y border-[#E8D5B7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">WHAT WE OFFER</div>
              <h2 className="text-5xl tracking-tighter font-semibold heading-serif">Kids Yoga &amp; Mindfulness Programs</h2>
            </div>
            <Link href="/programs" className="mt-4 md:mt-0 inline-flex items-center text-[#2D5A4A] font-semibold group">
              Explore all programs 
              <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition"></i>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Program Cards - Kept as is */}
            <div className="group bg-[#F8F1E9] rounded-3xl p-8 flex flex-col h-full border border-[#E8D5B7]/50 hover:border-[#2D5A4A]/30 transition-all">
              <div className="flex items-center gap-x-4 mb-6">
                <div className="text-4xl">🏫</div>
                <div>
                  <div className="font-semibold text-xl">School Yoga Programs</div>
                  <div className="text-sm text-[#2D5A4A]/70">In-class • Wellness weeks • Custom packages</div>
                </div>
              </div>
              <p className="text-[#1F2E2A]/75 flex-1">Beautifully guided sessions that support focus, confidence, emotional regulation and joyful movement right in the classroom.</p>
              <Link href="/schools" className="mt-6 inline-flex items-center text-sm font-semibold text-[#2D5A4A] group-hover:gap-x-2 transition-all">
                Learn more for schools <i className="fa-solid fa-chevron-right ml-1.5 text-xs"></i>
              </Link>
            </div>

            <div className="group bg-[#F8F1E9] rounded-3xl p-8 flex flex-col h-full border border-[#E8D5B7]/50 hover:border-[#2D5A4A]/30 transition-all">
              <div className="flex items-center gap-x-4 mb-6">
                <div className="text-4xl">🌿</div>
                <div>
                  <div className="font-semibold text-xl">After-School Classes</div>
                  <div className="text-sm text-[#2D5A4A]/70">Weekly • Small groups • Breathing games</div>
                </div>
              </div>
              <p className="text-[#1F2E2A]/75 flex-1">Playful and calming classes where children unwind, move their bodies, and build mindfulness in a warm, supportive environment.</p>
              <Link href="/programs" className="mt-6 inline-flex items-center text-sm font-semibold text-[#2D5A4A] group-hover:gap-x-2 transition-all">
                See after-school options <i className="fa-solid fa-chevron-right ml-1.5 text-xs"></i>
              </Link>
            </div>

            <div className="group bg-[#F8F1E9] rounded-3xl p-8 flex flex-col h-full border border-[#E8D5B7]/50 hover:border-[#2D5A4A]/30 transition-all">
              <div className="flex items-center gap-x-4 mb-6">
                <div className="text-4xl">🎉</div>
                <div>
                  <div className="font-semibold text-xl">Workshops &amp; Events</div>
                  <div className="text-sm text-[#2D5A4A]/70">Camps • Family events • Community celebrations</div>
                </div>
              </div>
              <p className="text-[#1F2E2A]/75 flex-1">Special yoga and mindfulness experiences for camps, daycares, birthday parties, family events, and themed celebrations.</p>
              <Link href="/programs" className="mt-6 inline-flex items-center text-sm font-semibold text-[#2D5A4A] group-hover:gap-x-2 transition-all">
                View workshops &amp; events <i className="fa-solid fa-chevron-right ml-1.5 text-xs"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Kids Yoga */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-12 gap-x-12 items-center">
          <div className="md:col-span-7">
            <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-3">UNDERSTANDING KIDS YOGA</div>
            <h2 className="text-5xl tracking-tighter font-semibold heading-serif leading-none mb-6">Movement, mindfulness,<br />and fun made just for children</h2>
            
            <div className="prose prose-lg text-[#1F2E2A]/80 max-w-prose">
              <p>Kids yoga blends gentle movement, breathing, imagination, stories, and mindfulness into playful experiences that help children feel calm, strong, confident, and connected to themselves and others.</p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex gap-4">
                <div className="text-[#2D5A4A] mt-1"><i className="fa-solid fa-check-circle text-xl"></i></div>
                <div>
                  <div className="font-semibold">Ages 18 months &amp; up</div>
                  <div className="text-sm text-[#1F2E2A]/70">No experience needed. Songs, games, stories &amp; play.</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-[#2D5A4A] mt-1"><i className="fa-solid fa-check-circle text-xl"></i></div>
                <div>
                  <div className="font-semibold">Nature &amp; animal-inspired</div>
                  <div className="text-sm text-[#1F2E2A]/70">Poses, breathing &amp; mindfulness rooted in the natural world.</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-5 mt-10 md:mt-0">
            <div className="bg-white rounded-3xl p-8 border border-[#E8D5B7] soft-shadow">
              <h4 className="font-semibold mb-4 flex items-center gap-x-2"><span className="text-[#2D5A4A]">🌱</span> Why Earth &amp; OM Kids?</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3"><span className="text-[#A7C4A0] mt-1">•</span> Safe, nurturing &amp; inclusive environment</li>
                <li className="flex gap-3"><span className="text-[#A7C4A0] mt-1">•</span> Creative classes with movement, stories &amp; play</li>
                <li className="flex gap-3"><span className="text-[#A7C4A0] mt-1">•</span> Focus on confidence, self-awareness &amp; emotional balance</li>
                <li className="flex gap-3"><span className="text-[#A7C4A0] mt-1">•</span> Led by a qualified Early Childhood Educator</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#2D5A4A] text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-[#A7C4A0] text-xs tracking-[2px] font-semibold mb-2">THE TRANSFORMATIVE POWER OF YOGA FOR KIDS</div>
            <h2 className="text-5xl tracking-tighter font-semibold heading-serif">Benefits that last a lifetime</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            <div className="bg-white/10 backdrop-blur p-6 rounded-3xl">
              <div className="text-3xl mb-4">💪</div>
              <div className="font-semibold mb-1">Physical Health</div>
              <div className="text-sm text-white/80">Builds strength, flexibility, balance &amp; coordination</div>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-3xl">
              <div className="text-3xl mb-4">🧠</div>
              <div className="font-semibold mb-1">Mental Focus</div>
              <div className="text-sm text-white/80">Improves concentration, attention span &amp; classroom readiness</div>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-3xl">
              <div className="text-3xl mb-4">😊</div>
              <div className="font-semibold mb-1">Emotional Balance</div>
              <div className="text-sm text-white/80">Helps manage big feelings, stress &amp; builds resilience</div>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-3xl">
              <div className="text-3xl mb-4">⚡</div>
              <div className="font-semibold mb-1">Energy &amp; Calm</div>
              <div className="text-sm text-white/80">Teaches kids how to energize or relax when they need to</div>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-3xl">
              <div className="text-3xl mb-4">🎨</div>
              <div className="font-semibold mb-1">Creativity &amp; Imagination</div>
              <div className="text-sm text-white/80">Encourages storytelling, movement &amp; self-expression</div>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-3xl">
              <div className="text-3xl mb-4">⭐</div>
              <div className="font-semibold mb-1">Self-Esteem &amp; Confidence</div>
              <div className="text-sm text-white/80">Develops body awareness, pride &amp; inner strength</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">REAL RESULTS FROM REAL TORONTO COMMUNITIES</div>
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">What educators &amp; parents are saying</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <motion.div className="bg-white p-8 rounded-3xl border border-[#E8D5B7] cursor-pointer" whileHover={{ y: -8, scale: 1.01, transition: { type: "spring", stiffness: 350, damping: 22 } }}>
            <div className="flex gap-1 text-[#E07A5F] mb-4">
              <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
            </div>
            <p className="italic text-[#1F2E2A]/80">"The children are noticeably calmer and more focused after Taran’s sessions. She has a beautiful way of connecting with even our youngest toddlers."</p>
            <div className="mt-6 text-sm">
              <div className="font-semibold">Director</div>
              <div className="text-[#2D5A4A]/60">Toronto, ON</div>
            </div>
          </motion.div>

          {/* Testimonial 2 */}
          <motion.div className="bg-white p-8 rounded-3xl border border-[#E8D5B7] cursor-pointer" whileHover={{ y: -8, scale: 1.01, transition: { type: "spring", stiffness: 350, damping: 22 } }}>
            <div className="flex gap-1 text-[#E07A5F] mb-4">
              <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star-half-stroke"></i>
            </div>
            <p className="italic text-[#1F2E2A]/80">"Our after-school program has been transformed. The kids love the breathing games and animal poses. Parents constantly comment on how relaxed their children are at pickup."</p>
            <div className="mt-6 text-sm">
              <div className="font-semibold">Parent</div>
              <div className="text-[#2D5A4A]/60">North York, ON</div>
            </div>
          </motion.div>

          {/* Testimonial 3 */}
          <motion.div className="bg-white p-8 rounded-3xl border border-[#E8D5B7] cursor-pointer" whileHover={{ y: -8, scale: 1.01, transition: { type: "spring", stiffness: 350, damping: 22 } }}>
            <div className="flex gap-1 text-[#E07A5F] mb-4">
              <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
            </div>
            <p className="italic text-[#1F2E2A]/80">"Taran brought such warmth and professionalism to our wellness week. The custom program was perfectly tailored to our mixed-age group. Highly recommend for any school community."</p>
            <div className="mt-6 text-sm">
              <div className="font-semibold">Principal</div>
              <div className="text-[#2D5A4A]/60">Toronto, ON</div>
            </div>
          </motion.div>
        </div>
        
        <div className="text-center mt-8">
          <Link href="/contact" className="text-sm font-semibold text-[#2D5A4A] inline-flex items-center">Read more testimonials &amp; partner stories →</Link>
        </div>
      </section>

      {/* NEW: How It Works */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-[#E8D5B7]">
        <div className="text-center mb-12">
          <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">GETTING STARTED</div>
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">How It Works</h2>
          <p className="mt-3 text-lg text-[#1F2E2A]/70 max-w-md mx-auto">Simple, clear, and designed around your needs.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "1", title: "Tell Us About Your Needs", desc: "Whether you're a school, childcare centre, or parent, we’ll ask a few questions about your goals and group." },
            { step: "2", title: "Receive a Custom Proposal", desc: "We create a tailored plan with session length, frequency, themes, and pricing that fits your schedule." },
            { step: "3", title: "We Come to You", desc: "Our instructors travel to your classroom, centre, or chosen location across Toronto and the GTA." },
            { step: "4", title: "Watch the Transformation", desc: "Children experience calmer minds, better focus, and more joyful movement." }
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl border border-[#E8D5B7]">
              <div className="w-10 h-10 bg-[#2D5A4A] text-white rounded-2xl flex items-center justify-center font-semibold mb-5">{item.step}</div>
              <h3 className="font-semibold text-xl tracking-tight mb-3">{item.title}</h3>
              <p className="text-[#1F2E2A]/70 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NEW: Who We Serve */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">WHO WE WORK WITH</div>
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Who We Serve</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
          {[
            "Schools & Montessori Programs",
            "Childcare Centres & Daycares",
            "After-School Programs",
            "Families (Birthday Parties & Workshops)",
            "Special Needs & Inclusive Groups",
            "Community & Corporate Events"
          ].map((item, index) => (
            <div key={index} className="bg-[#F8F1E9] p-6 rounded-3xl border border-[#E8D5B7]/60 text-sm font-medium">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* NEW: FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-[#E8D5B7]">
        <div className="text-center mb-10">
          <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">FREQUENTLY ASKED QUESTIONS</div>
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Common Questions</h2>
        </div>

        <div className="space-y-4">
          {[
            { q: "What age groups do you work with?", a: "We work with children from 18 months to 12 years old." },
            { q: "Do you come to our location?", a: "Yes! We travel to schools, childcare centres, and homes across Toronto and the Greater Toronto Area." },
            { q: "How long are the sessions?", a: "Most school and daycare sessions are 30–45 minutes. After-school classes and workshops are usually 45–60 minutes." },
            { q: "Do you offer programs for special needs?", a: "Yes. We have experience working with diverse learners and can adapt sessions to be inclusive and supportive." },
            { q: "What areas of Toronto do you serve?", a: "We regularly work in North York, Scarborough, Etobicoke, Downtown Toronto, and surrounding GTA communities." },
            { q: "How do we book a program?", a: "Simply fill out the form on our Contact page. We’ll get back to you within 1–2 business days." }
          ].map((faq, index) => (
            <details key={index} className="group bg-white border border-[#E8D5B7] rounded-3xl p-6">
              <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                {faq.q}
                <span className="text-[#2D5A4A] group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <p className="mt-4 text-[#1F2E2A]/80">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#F8F1E9] border-t border-b border-[#E8D5B7] py-16">
        <motion.div 
          className="max-w-4xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl tracking-tighter font-semibold heading-serif mb-4">Ready to bring calm &amp; joy to your children?</h2>
          <p className="text-xl text-[#1F2E2A]/70 mb-8 max-w-md mx-auto">Whether you&apos;re a school, childcare centre, or parent we&apos;d love to partner with you.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-10 py-4 bg-[#2D5A4A] hover:bg-[#1F2E2A] transition text-white font-semibold rounded-3xl text-lg inline-flex items-center justify-center gap-x-2">
              Request a Program <i className="fa-solid fa-envelope"></i>
            </Link>
            <Link href="/programs" className="px-10 py-4 border border-[#2D5A4A] text-[#2D5A4A] hover:bg-white font-semibold rounded-3xl text-lg inline-flex items-center justify-center gap-x-2">
              View All Programs
            </Link>
          </div>
          <p className="text-xs text-[#2D5A4A]/50 mt-6">Serving Toronto, North York, Scarborough, Etobicoke &amp; the Greater Toronto Area</p>
        </motion.div>
      </section>
    </>
  );
}