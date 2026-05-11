'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ProgramsContent() {
  return (
    <>
      {/* Header */}
      <div className="max-w-5xl mx-auto px-6 pt-14 pb-10 text-center">
        <div className="inline px-4 py-1 bg-[#A7C4A0]/20 text-[#2D5A4A] text-xs font-semibold tracking-[1.5px] rounded-full mb-3">PROGRAMS FOR EVERY SETTING</div>
        <h1 className="text-6xl tracking-tighter font-semibold heading-serif">Kids Yoga &amp; Mindfulness<br />Programs in Toronto</h1>
        <p className="mt-4 max-w-lg mx-auto text-xl text-[#1F2E2A]/70">
          Joyful, developmentally appropriate experiences for children ages 18 months and up — in schools, after-school programs, and family settings across Toronto and the GTA.
        </p>
      </div>

      {/* Program 1: School Yoga */}
      <motion.section 
        id="school-programs" 
        className="max-w-6xl mx-auto px-6 pb-16 scroll-mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div 
          className="program-card bg-white rounded-3xl p-10 border border-[#E8D5B7] flex flex-col lg:flex-row gap-10"
          whileHover={{ 
            y: -10, 
            scale: 1.005,
            transition: { type: "spring", stiffness: 300, damping: 20 }
          }}
        >
          <div className="lg:w-5/12">
            <div className="flex items-center gap-x-4 mb-6">
              <div className="text-5xl">🏫</div>
              <div>
                <div className="uppercase text-xs tracking-[2px] text-[#2D5A4A] font-semibold">FOR SCHOOLS &amp; CHILDCARE</div>
                <h2 className="text-4xl tracking-tight font-semibold heading-serif">School Yoga Programs</h2>
              </div>
            </div>
            <p className="text-lg text-[#1F2E2A]/80">
              Professional, classroom-ready yoga and mindfulness sessions designed specifically for the realities of school and daycare environments in Toronto.
            </p>
            
            <div className="mt-8">
              <div className="text-sm font-semibold mb-3 text-[#2D5A4A]">POPULAR FORMATS</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-1.5 bg-[#F8F1E9] text-sm rounded-2xl">Classroom Sessions (30–45 min)</span>
                <span className="px-4 py-1.5 bg-[#F8F1E9] text-sm rounded-2xl">Wellness Weeks</span>
                <span className="px-4 py-1.5 bg-[#F8F1E9] text-sm rounded-2xl">Custom School Packages</span>
                <span className="px-4 py-1.5 bg-[#F8F1E9] text-sm rounded-2xl">Assemblies &amp; Special Events</span>
              </div>
            </div>
          </div>
          <div className="lg:w-7/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="bg-[#F8F1E9] p-5 rounded-2xl">
                <div className="font-semibold mb-1">What children experience</div>
                <ul className="space-y-1 text-[#1F2E2A]/80">
                  <li>• Gentle yoga poses (animal &amp; nature themed)</li>
                  <li>• Fun breathing exercises &amp; games</li>
                  <li>• Mindfulness &amp; calm-down techniques</li>
                  <li>• Movement, stories &amp; imagination</li>
                </ul>
              </div>
              <div className="bg-[#F8F1E9] p-5 rounded-2xl">
                <div className="font-semibold mb-1">Benefits for your school</div>
                <ul className="space-y-1 text-[#1F2E2A]/80">
                  <li>• Improved focus and attention</li>
                  <li>• Better emotional regulation</li>
                  <li>• Calmer classroom environment</li>
                  <li>• Support for positive behaviour</li>
                </ul>
              </div>
            </div>
            <Link href="/schools" className="mt-6 inline-flex items-center text-sm font-semibold text-[#2D5A4A]">Learn more about school partnerships →</Link>
          </div>
        </motion.div>
      </motion.section>

      {/* Program 2: After-School */}
      <motion.section 
        className="max-w-6xl mx-auto px-6 pb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div 
          className="program-card bg-white rounded-3xl p-10 border border-[#E8D5B7] flex flex-col lg:flex-row gap-10"
          whileHover={{ 
            y: -10, 
            scale: 1.005,
            transition: { type: "spring", stiffness: 300, damping: 20 }
          }}
        >
          <div className="lg:w-5/12">
            <div className="flex items-center gap-x-4 mb-6">
              <div className="text-5xl">🌿</div>
              <div>
                <div className="uppercase text-xs tracking-[2px] text-[#2D5A4A] font-semibold">WEEKLY CLASSES</div>
                <h2 className="text-4xl tracking-tight font-semibold heading-serif">After-School Yoga Classes</h2>
              </div>
            </div>
            <p className="text-lg text-[#1F2E2A]/80">
              Playful, calming weekly classes where children unwind, move their bodies, practice mindfulness, and build confidence in a small-group setting.
            </p>
          </div>
          <div className="lg:w-7/12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 bg-[#F8F1E9] rounded-2xl">
                <div className="font-semibold">Ages &amp; Groups</div>
                <div className="text-sm mt-1">Toddlers (18mo–3), Preschool (3–5), School Age (5–10)</div>
              </div>
              <div className="p-5 bg-[#F8F1E9] rounded-2xl">
                <div className="font-semibold">Class Length</div>
                <div className="text-sm mt-1">45–60 minutes • Small groups (max 12)</div>
              </div>
              <div className="p-5 bg-[#F8F1E9] rounded-2xl">
                <div className="font-semibold">Themes</div>
                <div className="text-sm mt-1">Breathing games, animal adventures, emotions, gratitude, nature</div>
              </div>
            </div>
            <p className="text-xs mt-4 text-[#2D5A4A]/70">Currently offered at select locations in Toronto. Inquire for availability or to host a class at your centre.</p>
          </div>
        </motion.div>
      </motion.section>

      {/* Program 3: Workshops & Events */}
      <motion.section 
        id="workshops-events"
        className="max-w-6xl mx-auto px-6 pb-16 scroll-mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div 
          className="program-card bg-white rounded-3xl p-10 border border-[#E8D5B7]"
          whileHover={{ 
            y: -10, 
            scale: 1.005,
            transition: { type: "spring", stiffness: 300, damping: 20 }
          }}
        >
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-5/12">
              <div className="flex items-center gap-x-4 mb-6">
                <div className="text-5xl">🎉</div>
                <div>
                  <div className="uppercase text-xs tracking-[2px] text-[#2D5A4A] font-semibold">SPECIAL EXPERIENCES</div>
                  <h2 className="text-4xl tracking-tight font-semibold heading-serif">Workshops, Events &amp; Parties</h2>
                </div>
              </div>
              <p className="text-lg text-[#1F2E2A]/80">
                One-time or short-series experiences perfect for camps, community events, family celebrations, and themed days across Toronto.
              </p>
            </div>
            <div className="lg:w-7/12">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-semibold mb-2">Popular options:</div>
                  <ul className="space-y-[3px] text-[#1F2E2A]/80">
                    <li>• Yoga &amp; Mindfulness Birthday Parties</li>
                    <li>• Camp Yoga Days / Weeks</li>
                    <li>• Family Yoga Workshops</li>
                    <li>• School Wellness Weeks</li>
                    <li>• Community &amp; Corporate Family Events</li>
                    <li>• Special Needs / Inclusive Sessions</li>
                  </ul>
                </div>
                <div className="bg-[#F8F1E9] p-6 rounded-2xl">
                  <div className="text-xs uppercase tracking-wider font-semibold text-[#2D5A4A] mb-2">FULLY CUSTOMIZABLE</div>
                  <p className="text-sm">Themes, length (30–90 min), age groups, and focus areas can be tailored to your event. Great for PD days, holiday celebrations, or team-building.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Age Groups */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold tracking-tight heading-serif">Programs designed for every stage</h2>
          <p className="text-[#1F2E2A]/70 mt-2">Every child can do yoga. We meet them where they are.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { stage: "TODDLERS", age: "18 months – 3 years", desc: "Short, playful sessions with songs, simple movements, and lots of repetition and joy." },
            { stage: "PRESCHOOL", age: "3 – 5 years", desc: "Story-based classes, animal poses, breathing games, and beginning mindfulness." },
            { stage: "EARLY SCHOOL AGE", age: "5 – 8 years", desc: "Longer sessions, more poses, focus on emotional awareness and self-regulation tools." },
            { stage: "OLDER CHILDREN", age: "8 – 12 years", desc: "Deeper exploration of breathwork, mindfulness, and yoga philosophy through fun, relevant themes." }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-2xl border border-[#E8D5B7]"
              whileHover={{ 
                y: -6, 
                scale: 1.01,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
            >
              <div className="text-[#2D5A4A] text-sm font-semibold">{item.stage}</div>
              <div className="font-semibold text-xl mt-1">{item.age}</div>
              <div className="text-xs mt-3 text-[#1F2E2A]/70">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* NEW: FAQ Section for SEO */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="text-center mb-10">
          <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">FREQUENTLY ASKED QUESTIONS</div>
          <h2 className="text-3xl font-semibold tracking-tight heading-serif">Common Questions About Our Programs</h2>
        </div>

        <div className="space-y-4">
          {[
            { q: "What age groups do your programs support?", a: "We work with children from 18 months to 12 years old across all our programs." },
            { q: "Do you come to schools and daycares?", a: "Yes. All our school and childcare programs are delivered on-site at your location across Toronto and the GTA." },
            { q: "How long are the sessions?", a: "School sessions are typically 30–45 minutes. After-school classes are 45–60 minutes. Workshops and parties can be customized from 30–90 minutes." },
            { q: "Can programs be customized?", a: "Absolutely. We tailor themes, length, and focus areas based on your goals, age group, and setting." },
            { q: "Do you offer programs for special needs?", a: "Yes. We have experience adapting sessions to be inclusive and supportive for children with diverse learning needs." }
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

      {/* CTA */}
      <motion.div 
        className="bg-white border-t border-b border-[#E8D5B7] py-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold tracking-tight">Not sure which program is right?</h3>
          <p className="mt-3 text-[#1F2E2A]/70">We’ll help you design the perfect experience for your school, centre, or family.</p>
          <Link href="/contact" className="mt-6 inline-flex px-8 py-3.5 bg-[#2D5A4A] text-white font-semibold rounded-2xl">Let’s talk about your needs</Link>
        </div>
      </motion.div>
    </>
  );
}