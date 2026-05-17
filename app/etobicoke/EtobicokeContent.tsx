'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function EtobicokePage() {
  return (
    <>
      {/* HERO */}
      <div className="bg-[#2D5A4A] text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-x-2 bg-white/15 backdrop-blur px-4 py-1.5 rounded-full mb-6 text-sm font-medium tracking-wider">
              <div className="w-2 h-2 bg-[#A7C4A0] rounded-full animate-pulse"></div>
              ETOBICOKE • SERVING SINCE 2018
            </div>
            <h1 className="text-5xl md:text-7xl tracking-tighter font-semibold heading-serif mb-6 leading-tight">
              Kids Yoga in<br />Etobicoke
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-white/80 mb-10">
              Professional kids yoga and mindfulness for Etobicoke schools, childcare centres, daycares, and families. Led by a trained Early Childhood Educator. We come to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/schools" className="inline-flex items-center justify-center gap-x-3 px-10 py-4 bg-white text-[#2D5A4A] font-semibold rounded-3xl text-lg hover:bg-[#F8F1E9] transition">
                For Schools and Daycares <i className="fa-solid fa-school"></i>
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-x-3 px-10 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-3xl text-lg transition">
                Book a Program <i className="fa-solid fa-calendar"></i>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* TRUST BAR */}
      <div className="bg-white border-b border-[#E8D5B7] py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 opacity-70">
            <div className="text-xs uppercase tracking-[1.5px] font-medium text-[#2D5A4A]/60">Trusted by Toronto schools including</div>
            <div className="text-sm font-medium">Beach Hill Montessori</div>
            <div className="text-sm font-medium">Abacus Montessori</div>
            <div className="text-sm font-medium">Lycée Français Toronto</div>
            <div className="text-sm font-medium">East Toronto Village Children's Centre</div>
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
            { number: "2018", label: "Serving Etobicoke Since" },
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
              <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-3">KIDS YOGA AND MINDFULNESS IN ETOBICOKE</div>
              <h2 className="text-4xl tracking-tighter font-semibold heading-serif mb-6">Etobicoke's kids yoga program built on real child development expertise</h2>
              <div className="space-y-4 text-[#1F2E2A]/75 leading-relaxed">
                <p>Earth and OM Kids has been bringing professional kids yoga and mindfulness programs to Etobicoke schools, childcare centres, and families since 2018. We serve communities across Etobicoke including Bloordale, Islington, Mimico, New Toronto, Long Branch, Humber Valley, Richview, Rexdale, Thistletown, and Etobicoke City Centre.</p>
                <p>Every program is led by Taran Kaur, a trained Early Childhood Educator with nearly 10 years of hands-on experience in Toronto childcare and school communities. Every session is designed with real child development knowledge at its core.</p>
                <p>We come directly to your Etobicoke school, daycare, community centre, or home. Sessions are flexible, fully customizable, and designed to fit seamlessly into your existing schedule along Bloor Street West, Kipling Avenue, Islington Avenue, Royal York Road, Dixon Road, and throughout the Humber River corridor.</p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/about" className="inline-flex items-center text-sm font-semibold text-[#2D5A4A] hover:underline">Meet Taran <i className="fa-solid fa-arrow-right ml-2"></i></Link>
                <Link href="/contact" className="inline-flex items-center text-sm font-semibold text-[#2D5A4A] hover:underline">Get in touch <i className="fa-solid fa-arrow-right ml-2"></i></Link>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: "fa-graduation-cap", title: "Trained Early Childhood Educator", desc: "Nearly 10 years of real classroom and childcare experience across Toronto and Etobicoke." },
                { icon: "fa-school", title: "Etobicoke School Partnerships", desc: "Trusted partnerships with schools and childcare centres across Etobicoke and West Toronto. Many return season after season." },
                { icon: "fa-location-dot", title: "We Come to You", desc: "Serving all Etobicoke neighbourhoods, schools, daycares, and homes across West Toronto." },
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

      {/* PROGRAMS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">WHAT WE OFFER IN ETOBICOKE</div>
          <h2 className="text-5xl tracking-tighter font-semibold heading-serif">Every program. Every age. Across Etobicoke.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { emoji: "🏫", title: "School and Daycare Yoga Programs", desc: "Classroom-ready yoga and mindfulness for Etobicoke schools, Montessori programs, and childcare centres. 30 to 45 minutes. Wellness weeks, ongoing series, and single sessions.", link: "/schools", linkText: "School programs" },
            { emoji: "🌿", title: "After School Classes", desc: "Weekly kids yoga classes in small groups for toddlers, preschoolers, and school age children across Etobicoke. Ages 18 months to 12 years.", link: "/families", linkText: "After school classes" },
            { emoji: "🍼", title: "Toddler Yoga Etobicoke", desc: "Playful, song-based yoga for children from 18 months old. Short sessions designed for how very young children learn and move.", link: "/toddler-yoga-toronto", linkText: "Toddler yoga" },
            { emoji: "🧘", title: "Children's Mindfulness", desc: "Practical mindfulness for Etobicoke children. Breathing games, body awareness, guided relaxation, and emotional regulation activities.", link: "/mindfulness-for-kids-toronto", linkText: "Mindfulness programs" },
            { emoji: "🎂", title: "Yoga Birthday Parties", desc: "Magical yoga birthday parties for children across Etobicoke. We come to your home, condo, or party venue. Fully themed for ages 3 to 12.", link: "/yoga-birthday-party-toronto", linkText: "Birthday parties" },
            { emoji: "👨‍👩‍👧", title: "Family Yoga Workshops", desc: "Family yoga experiences that bring Etobicoke parents and children together through mindful movement, breathing, and connection.", link: "/contact", linkText: "Book a workshop" },
          ].map((item, index) => (
            <motion.div key={index} className="group bg-white p-8 rounded-3xl border border-[#E8D5B7] flex flex-col hover:border-[#2D5A4A]/40 transition-all" whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}>
              <div className="text-4xl mb-4">{item.emoji}</div>
              <h3 className="font-semibold text-xl mb-3 tracking-tight">{item.title}</h3>
              <p className="text-[#1F2E2A]/70 text-sm leading-relaxed flex-1">{item.desc}</p>
              <Link href={item.link} className="mt-6 text-sm font-semibold text-[#2D5A4A] inline-flex items-center">{item.linkText} <i className="fa-solid fa-arrow-right ml-2 text-xs"></i></Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MID CTA */}
      <section className="bg-[#F8F1E9] border-y border-[#E8D5B7] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#2D5A4A] text-white rounded-3xl p-10">
              <div className="text-[#A7C4A0] text-xs font-semibold tracking-[2px] mb-3">FOR ETOBICOKE SCHOOLS AND DAYCARES</div>
              <h3 className="text-3xl font-semibold tracking-tight heading-serif mb-4">Bring professional yoga to your Etobicoke school</h3>
              <p className="text-white/75 mb-8 leading-relaxed">We work with TDSB schools, private schools, Montessori programs, and childcare centres across Etobicoke. Single sessions, wellness weeks, and ongoing programs available.</p>
              <Link href="/schools" className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#2D5A4A] font-semibold rounded-2xl hover:bg-[#F8F1E9] transition text-sm">Learn about school programs</Link>
            </div>
            <div className="bg-white rounded-3xl p-10 border border-[#E8D5B7]">
              <div className="text-[#2D5A4A] text-xs font-semibold tracking-[2px] mb-3">FOR ETOBICOKE FAMILIES</div>
              <h3 className="text-3xl font-semibold tracking-tight heading-serif mb-4">Weekly classes and private sessions for your child</h3>
              <p className="text-[#1F2E2A]/70 mb-8 leading-relaxed">After school weekly classes, private home sessions, toddler yoga, birthday parties, and family workshops. Available across all Etobicoke neighbourhoods for children from 18 months to 12 years.</p>
              <Link href="/families" className="inline-flex items-center justify-center px-8 py-3 bg-[#2D5A4A] text-white font-semibold rounded-2xl hover:bg-[#1F2E2A] transition text-sm">Explore family programs</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-[#2D5A4A] text-white rounded-3xl p-10 md:p-14">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex gap-1 text-[#F4D35E] justify-center mb-6">{[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}</div>
            <blockquote className="text-xl md:text-2xl leading-relaxed font-light italic mb-6">"Taran brought such warmth and professionalism to our wellness week. The custom program was perfectly tailored to our mixed age group. Highly recommend for any school community."</blockquote>
            <div className="text-white/70 text-sm">Principal, Toronto</div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="text-center mb-12">
          <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">WHY KIDS YOGA MATTERS IN ETOBICOKE</div>
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Benefits Etobicoke teachers and parents see every day</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "🧠", title: "Improved Focus", desc: "Children pay attention longer and transition between activities more smoothly. Etobicoke teachers report fewer classroom disruptions." },
            { icon: "😊", title: "Emotional Balance", desc: "Kids gain practical tools to manage big feelings and reduce meltdowns at school and at home." },
            { icon: "🤝", title: "Social Skills", desc: "Build confidence, kindness, and cooperation through shared movement and mindfulness activities." },
            { icon: "🌙", title: "Better Sleep and Calm", desc: "Etobicoke families tell us their children are noticeably calmer at home and sleep better after classes." }
          ].map((item, index) => (
            <motion.div key={index} className="bg-white p-8 rounded-3xl border border-[#E8D5B7]" whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}>
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
              <p className="text-[#1F2E2A]/70 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* NEIGHBOURHOODS */}
      <section className="bg-white border-y border-[#E8D5B7] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">WHERE WE WORK IN ETOBICOKE</div>
            <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Every corner of Etobicoke</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {["Bloordale", "Islington", "Mimico", "New Toronto", "Long Branch", "Humber Valley", "Richview", "Rexdale", "Thistletown", "Etobicoke City Centre", "Kipling", "Royal York", "Dixon Road", "Humber Bay", "Stonegate", "Markland Wood"].map((area, index) => (
              <div key={index} className="bg-[#F8F1E9] rounded-2xl px-3 py-2.5 text-xs text-center font-medium text-[#2D5A4A] border border-[#E8D5B7]">{area}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">FREQUENTLY ASKED QUESTIONS</div>
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Questions from Etobicoke schools and families</h2>
        </div>
        <div className="space-y-4">
          {[
            { q: "Which areas of Etobicoke do you serve?", a: "We serve all of Etobicoke including Bloordale, Islington, Mimico, New Toronto, Long Branch, Humber Valley, Richview, Rexdale, Thistletown, and Etobicoke City Centre. We work with schools and families along Bloor Street West, Kipling Avenue, Islington Avenue, Royal York Road, and Dixon Road." },
            { q: "Do you work with both public and private schools in Etobicoke?", a: "Yes. We work with TDSB schools, private schools, Montessori programs, and independent childcare centres throughout Etobicoke. Our programs are designed to fit a wide range of school environments and schedules." },
            { q: "What is the youngest age you work with in Etobicoke?", a: "We accept children from 18 months old. Our toddler yoga program is specifically designed for children 18 months to 3 years and is one of the only programs in Etobicoke led by someone with a formal early childhood education background." },
            { q: "How do I book a kids yoga program in Etobicoke?", a: "Fill out our contact form or call us at (647) 856-8206. We will respond within 1 to 2 business days with a custom proposal tailored to your Etobicoke school, daycare, or family." },
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
          <h2 className="text-4xl md:text-5xl tracking-tighter font-semibold heading-serif mb-4">Bring kids yoga to your Etobicoke school or family today</h2>
          <p className="text-white/75 text-xl mb-10 max-w-2xl mx-auto">We respond within 1 to 2 business days. No obligation. Just a friendly conversation about how we can support the children in your care.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact" className="inline-flex items-center justify-center gap-x-3 px-10 py-4 bg-white text-[#2D5A4A] font-semibold rounded-3xl text-lg hover:bg-[#F8F1E9] transition">Request a Program</Link>
            <a href="tel:6478568206" className="inline-flex items-center justify-center gap-x-3 px-10 py-4 border border-white/40 text-white font-semibold rounded-3xl text-lg hover:bg-white/10 transition"><i className="fa-solid fa-phone"></i> (647) 856-8206</a>
          </div>
          <p className="text-white/50 text-sm">Serving Etobicoke and all of Toronto since 2018</p>
        </div>
      </section>
    </>
  );
}