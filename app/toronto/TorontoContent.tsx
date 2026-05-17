'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function TorontoContent() {
  return (
    <>
      {/* HERO */}
      <div className="bg-[#2D5A4A] text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-x-2 bg-white/15 backdrop-blur px-4 py-1.5 rounded-full mb-6 text-sm font-medium tracking-wider">
              <div className="w-2 h-2 bg-[#A7C4A0] rounded-full animate-pulse"></div>
              TORONTO AND GTA • EST. 2018
            </div>
            <h1 className="text-5xl md:text-7xl tracking-tighter font-semibold heading-serif mb-6 leading-tight">
              Toronto's Most Trusted<br />Kids Yoga Programs
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-white/80 mb-10">
              Professional kids yoga and mindfulness for Toronto schools, childcare centres, daycares, and families. Led by a trained Early Childhood Educator. We come to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/schools"
                className="inline-flex items-center justify-center gap-x-3 px-10 py-4 bg-white text-[#2D5A4A] font-semibold rounded-3xl text-lg hover:bg-[#F8F1E9] transition"
              >
                For Schools and Daycares <i className="fa-solid fa-school"></i>
              </Link>
              <Link
                href="/families"
                className="inline-flex items-center justify-center gap-x-3 px-10 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-3xl text-lg transition"
              >
                For Families <i className="fa-solid fa-heart"></i>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* TRUST BAR */}
      <div className="bg-white border-b border-[#E8D5B7] py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 opacity-70">
            <div className="text-xs uppercase tracking-[1.5px] font-medium text-[#2D5A4A]/60">Trusted by</div>
            <div className="text-sm font-medium">Beach Hill Montessori</div>
            <div className="text-sm font-medium">Abacus Montessori</div>
            <div className="text-sm font-medium">Lycée Français Toronto</div>
            <div className="text-sm font-medium">East Toronto Village Children's Centre</div>
            <div className="text-sm font-medium">Kids Connect Daycare</div>
            <div className="text-xs text-[#2D5A4A]/50 font-medium">and 20+ more</div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "25+", label: "Toronto Schools and Centres" },
            { number: "10", label: "Years of ECE Experience" },
            { number: "18mo", label: "Youngest Age We Serve" },
            { number: "2018", label: "Serving Toronto Since" },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-3xl border border-[#E8D5B7] p-8 text-center">
              <div className="text-4xl font-semibold text-[#2D5A4A] heading-serif mb-2">{stat.number}</div>
              <div className="text-sm text-[#1F2E2A]/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-white border-y border-[#E8D5B7] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-3">WHO WE ARE</div>
              <h2 className="text-4xl tracking-tighter font-semibold heading-serif mb-6">Toronto's kids yoga program built on real child development expertise</h2>
              <div className="space-y-4 text-[#1F2E2A]/75 leading-relaxed">
                <p>Earth and OM Kids has been delivering professional kids yoga and mindfulness programs across Toronto since 2018. We are trusted by over 25 Toronto schools, Montessori programs, daycares, and families.</p>
                <p>Every program is led by Taran Kaur, a trained Early Childhood Educator with nearly 10 years of experience in Toronto's diverse childcare and school communities. This is not a yoga studio business. It is a child development practice that uses yoga as its primary tool.</p>
                <p>We serve all of Toronto from the waterfront to the northern suburbs, all inner city neighbourhoods, and the Greater Toronto Area. We come directly to your school, daycare, or home. No travel required.</p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/about" className="inline-flex items-center text-sm font-semibold text-[#2D5A4A] hover:underline">
                  Meet Taran <i className="fa-solid fa-arrow-right ml-2"></i>
                </Link>
                <Link href="/contact" className="inline-flex items-center text-sm font-semibold text-[#2D5A4A] hover:underline">
                  Get in touch <i className="fa-solid fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: "fa-graduation-cap", title: "Trained Early Childhood Educator", desc: "Nearly 10 years of real classroom and childcare experience across Toronto." },
                { icon: "fa-child", title: "Ages 18 Months to 12 Years", desc: "One of the only Toronto providers serving children from 18 months old." },
                { icon: "fa-location-dot", title: "We Come to You", desc: "Serving all Toronto neighbourhoods, schools, daycares, and homes." },
                { icon: "fa-sliders", title: "Fully Customized Programs", desc: "Every session tailored to your age group, goals, space, and schedule." },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-x-4 bg-[#F8F1E9] rounded-2xl p-5 border border-[#E8D5B7]">
                  <div className="w-10 h-10 bg-[#2D5A4A]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className={`fa-solid ${item.icon} text-[#2D5A4A]`}></i>
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-1">{item.title}</div>
                    <div className="text-sm text-[#1F2E2A]/60">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ALL PROGRAMS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">WHAT WE OFFER IN TORONTO</div>
          <h2 className="text-5xl tracking-tighter font-semibold heading-serif">Every program. Every age. Across all of Toronto.</h2>
          <p className="mt-4 text-[#1F2E2A]/60 max-w-xl mx-auto">From toddler yoga to school wellness weeks to birthday parties — we have a program for every Toronto child and community.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              emoji: "🏫",
              title: "In-School Yoga Programs",
              desc: "Classroom-ready yoga and mindfulness sessions for Toronto public schools, private schools, Montessori programs, and childcare centres. Sessions 30 to 45 minutes. Wellness weeks, ongoing series, and single sessions available.",
              link: "/schools",
              linkText: "School programs"
            },
            {
              emoji: "🌿",
              title: "After School Classes",
              desc: "Weekly kids yoga classes in small groups for toddlers, preschoolers, and school age children across Toronto. Fun, calming, and developmentally appropriate for every age from 18 months to 12 years.",
              link: "/families",
              linkText: "After school classes"
            },
            {
              emoji: "🍼",
              title: "Toddler Yoga Toronto",
              desc: "Playful, song-based yoga for children from 18 months old. Short sessions designed specifically for how very young children learn and move. One of the only Toronto providers starting at 18 months.",
              link: "/toddler-yoga-toronto",
              linkText: "Toddler yoga"
            },
            {
              emoji: "🧘",
              title: "Children's Mindfulness",
              desc: "Practical mindfulness programs for Toronto children. Breathing games, body awareness, guided relaxation, emotional check-ins, and sensory activities. Available for schools, daycares, and families.",
              link: "/mindfulness-for-kids-toronto",
              linkText: "Mindfulness programs"
            },
            {
              emoji: "🎂",
              title: "Yoga Birthday Parties",
              desc: "Magical yoga birthday party experiences for children across Toronto. We come to your home, condo, or party venue. Fully themed and customized for ages 3 to 12.",
              link: "/yoga-birthday-party-toronto",
              linkText: "Birthday parties"
            },
            {
              emoji: "👨‍👩‍👧",
              title: "Family Yoga Workshops",
              desc: "Family yoga experiences that bring Toronto parents and children together through mindful movement, breathing, and connection. Available at your home, school, or community space.",
              link: "/contact",
              linkText: "Book a workshop"
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="group bg-white p-8 rounded-3xl border border-[#E8D5B7] flex flex-col hover:border-[#2D5A4A]/40 transition-all"
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            >
              <div className="text-4xl mb-4">{item.emoji}</div>
              <h3 className="font-semibold text-xl mb-3 tracking-tight">{item.title}</h3>
              <p className="text-[#1F2E2A]/70 text-sm leading-relaxed flex-1">{item.desc}</p>
              <Link href={item.link} className="mt-6 text-sm font-semibold text-[#2D5A4A] inline-flex items-center">
                {item.linkText} <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MID CTA */}
      <section className="bg-[#F8F1E9] border-y border-[#E8D5B7] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#2D5A4A] text-white rounded-3xl p-10">
              <div className="text-[#A7C4A0] text-xs font-semibold tracking-[2px] mb-3">FOR TORONTO SCHOOLS AND DAYCARES</div>
              <h3 className="text-3xl font-semibold tracking-tight heading-serif mb-4">Bring professional yoga to your Toronto school</h3>
              <p className="text-white/75 mb-8 leading-relaxed">We work with TDSB schools, private schools, Montessori programs, and childcare centres across Toronto. Single sessions, wellness weeks, and ongoing programs available.</p>
              <Link href="/schools" className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#2D5A4A] font-semibold rounded-2xl hover:bg-[#F8F1E9] transition text-sm">
                Learn about school programs
              </Link>
            </div>
            <div className="bg-white rounded-3xl p-10 border border-[#E8D5B7]">
              <div className="text-[#2D5A4A] text-xs font-semibold tracking-[2px] mb-3">FOR TORONTO FAMILIES</div>
              <h3 className="text-3xl font-semibold tracking-tight heading-serif mb-4">Weekly classes and private sessions for your child</h3>
              <p className="text-[#1F2E2A]/70 mb-8 leading-relaxed">After school weekly classes, private home sessions, toddler yoga, birthday parties, and family workshops. Available across all Toronto neighbourhoods for children from 18 months to 12 years.</p>
              <Link href="/families" className="inline-flex items-center justify-center px-8 py-3 bg-[#2D5A4A] text-white font-semibold rounded-2xl hover:bg-[#1F2E2A] transition text-sm">
                Explore family programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">WHAT TORONTO SCHOOLS AND FAMILIES SAY</div>
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Real results from real Toronto communities</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { quote: "The children are noticeably calmer and more focused after Taran's sessions. She has a beautiful way of connecting with even our youngest toddlers.", name: "Director", location: "Toronto School" },
            { quote: "Our after-school program has been transformed. The kids love the breathing games and animal poses. Parents constantly comment on how relaxed their children are at pickup.", name: "Parent", location: "North York, Toronto" },
            { quote: "Taran brought such warmth and professionalism to our wellness week. The custom program was perfectly tailored to our mixed age group. Highly recommend for any school community.", name: "Principal", location: "Downtown Toronto" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-3xl border border-[#E8D5B7]"
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            >
              <div className="flex gap-1 text-[#E07A5F] mb-4">
                {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star text-sm"></i>)}
              </div>
              <p className="italic text-[#1F2E2A]/80 leading-relaxed mb-6">"{item.quote}"</p>
              <div className="text-sm">
                <div className="font-semibold">{item.name}</div>
                <div className="text-[#2D5A4A]/60">{item.location}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* NEIGHBOURHOODS */}
      <section className="bg-white border-y border-[#E8D5B7] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">WHERE WE WORK IN TORONTO</div>
            <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Every corner of Toronto</h2>
            <p className="mt-3 text-[#1F2E2A]/60 max-w-xl mx-auto">We deliver programs across all Toronto neighbourhoods. If you do not see yours, contact us.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-8">
            {[
              "The Annex", "Yorkville", "Rosedale", "Forest Hill", "Lawrence Park",
              "Leaside", "Don Mills", "Leslieville", "Riverdale", "The Beaches",
              "Danforth", "East York", "Midtown", "Corktown", "Distillery District",
              "Trinity Bellwoods", "Little Italy", "Kensington Market", "Harbourfront", "Liberty Village",
              "Swansea", "Bloor West Village", "High Park", "Junction", "Wychwood"
            ].map((area, index) => (
              <div key={index} className="bg-[#F8F1E9] rounded-2xl px-3 py-2.5 text-xs text-center font-medium text-[#2D5A4A] border border-[#E8D5B7]">
                {area}
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-[#1F2E2A]/60 mb-4">Also serving all of</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "North York", href: "/north-york" },
                { name: "Scarborough", href: "/scarborough" },
                { name: "Etobicoke", href: "/etobicoke" },
                { name: "Downtown Toronto", href: "/downtown-toronto" },
              ].map((area, index) => (
                <Link key={index} href={area.href} className="px-4 py-2 bg-white border border-[#2D5A4A]/30 text-[#2D5A4A] text-sm font-semibold rounded-full hover:bg-[#2D5A4A] hover:text-white transition">
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">WHY KIDS YOGA MATTERS IN TORONTO</div>
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Benefits Toronto teachers and parents see every day</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: "🧠", title: "Improved Focus and Attention", desc: "Children pay attention longer and transition between activities more smoothly. Toronto teachers consistently report fewer classroom disruptions after regular yoga sessions." },
            { icon: "😊", title: "Emotional Regulation", desc: "Kids gain practical, portable tools to manage big feelings breathing techniques, body awareness, and calm-down routines they can use independently at school and at home." },
            { icon: "💪", title: "Physical Development", desc: "Yoga builds strength, flexibility, coordination, and body awareness in a way that is fun rather than competitive. Especially valuable for children who do not connect with team sports." },
            { icon: "🤝", title: "Social Skills and Kindness", desc: "Shared movement and mindfulness activities build empathy, cooperation, and positive peer relationships. Children learn to work together and celebrate each other." },
            { icon: "🌙", title: "Better Sleep and Calm", desc: "Toronto parents tell us their children fall asleep more easily and are calmer at home after starting a regular yoga practice." },
            { icon: "⭐", title: "Confidence and Self-Esteem", desc: "Every child can do yoga. There is no competition and no wrong way. This builds genuine confidence and a positive relationship with movement from a very young age." },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-3xl border border-[#E8D5B7]"
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
              <p className="text-[#1F2E2A]/70 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#F8F1E9] border-y border-[#E8D5B7] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">HOW IT WORKS</div>
            <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Getting started is simple</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Get in Touch", desc: "Fill out our contact form or call (647) 856-8206. Tell us about your Toronto school, daycare, or family." },
              { step: "02", title: "Custom Proposal", desc: "We create a tailored program plan with session length, frequency, themes, and pricing designed for your needs." },
              { step: "03", title: "We Come to You", desc: "We travel to your Toronto location school, daycare, community centre, or home. No extra steps required." },
              { step: "04", title: "Watch the Change", desc: "Children experience calmer minds, better focus, joyful movement, and tools they carry long after the session ends." },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 border border-[#E8D5B7]">
                <div className="text-3xl font-semibold text-[#2D5A4A]/20 heading-serif mb-4">{item.step}</div>
                <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
                <p className="text-[#1F2E2A]/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">FREQUENTLY ASKED QUESTIONS</div>
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Questions from Toronto schools and families</h2>
        </div>

        <div className="space-y-4">
          {[
            { q: "What Toronto neighbourhoods do you serve?", a: "We serve all of Toronto including The Annex, Yorkville, Rosedale, Forest Hill, Lawrence Park, Leaside, Don Mills, Leslieville, Riverdale, The Beaches, Danforth, East York, Midtown, Corktown, Trinity Bellwoods, Little Italy, Kensington Market, Harbourfront, Liberty Village, High Park, Bloor West Village, and all surrounding areas. We also cover North York, Scarborough, Etobicoke, and the Greater Toronto Area." },
            { q: "What is the youngest age you work with in Toronto?", a: "We accept children from 18 months old. Our toddler yoga program is specifically designed for children 18 months to 3 years and is one of the only programs in Toronto led by someone with a formal early childhood education background. Sessions are short, playful, and song-based." },
            { q: "Do you work with TDSB and private schools in Toronto?", a: "Yes. We work with Toronto District School Board schools, private schools, Montessori programs, French language schools, and independent childcare centres throughout Toronto. We are happy to discuss becoming an approved external provider for your school or board." },
            { q: "What types of programs do you offer Toronto schools?", a: "We offer in-class yoga sessions, wellness weeks, PD day programs, lunchtime mindfulness, after school classes, and ongoing weekly visits. All programs are fully customized to your school's goals, age groups, schedule, and space." },
            { q: "How much do kids yoga programs cost in Toronto?", a: "Pricing depends on the program type, frequency, group size, and location within Toronto. We offer flexible packages for schools, daycares, and families. Contact us for a custom proposal with no obligation." },
            { q: "How do I book a kids yoga program in Toronto?", a: "Fill out our contact form or call us at (647) 856-8206. We respond within 1 to 2 business days with a custom proposal tailored to your Toronto school, daycare, or family." },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-3xl border border-[#E8D5B7] p-7">
              <h3 className="font-semibold text-lg mb-3 text-[#1F2E2A]">{item.q}</h3>
              <p className="text-[#1F2E2A]/70 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#2D5A4A] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-[#A7C4A0] text-xs tracking-[2px] font-semibold mb-4">READY TO GET STARTED</div>
          <h2 className="text-4xl md:text-5xl tracking-tighter font-semibold heading-serif mb-4">
            Bring kids yoga to your Toronto school or family today
          </h2>
          <p className="text-white/75 text-xl mb-10 max-w-2xl mx-auto">
            We respond within 1 to 2 business days. No obligation. Just a friendly conversation about how we can support the children in your care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-x-3 px-10 py-4 bg-white text-[#2D5A4A] font-semibold rounded-3xl text-lg hover:bg-[#F8F1E9] transition"
            >
              Request a Program
            </Link>
            <a
              href="tel:6478568206"
              className="inline-flex items-center justify-center gap-x-3 px-10 py-4 border border-white/40 text-white font-semibold rounded-3xl text-lg hover:bg-white/10 transition"
            >
              <i className="fa-solid fa-phone"></i> (647) 856-8206
            </a>
          </div>
          <p className="text-white/50 text-sm">Serving all of Toronto and the Greater Toronto Area since 2018</p>
        </div>
      </section>
    </>
  );
}