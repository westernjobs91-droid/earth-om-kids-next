'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function TorontoContent() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* Hero */}
      <div className="text-center mb-20">
        <div className="inline-block px-4 py-1 bg-[#A7C4A0]/20 text-[#2D5A4A] text-xs font-semibold tracking-[1.5px] rounded-full mb-4">
          KIDS YOGA TORONTO SINCE 2018
        </div>
        <h1 className="text-5xl md:text-6xl tracking-tighter font-semibold heading-serif mb-4">
          Kids Yoga in Toronto
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-[#1F2E2A]/70">
          Professional kids yoga and mindfulness programs for schools, childcare centres, daycares, and families across Toronto. Led by a trained Early Childhood Educator with nearly 10 years of experience.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-x-3 px-10 py-4 bg-[#2D5A4A] hover:bg-[#1F2E2A] transition text-white font-semibold rounded-3xl text-lg"
          >
            Book a Toronto Program
          </Link>
          <Link
            href="/programs"
            className="inline-flex items-center justify-center gap-x-3 px-10 py-4 border border-[#2D5A4A] text-[#2D5A4A] hover:bg-white font-semibold rounded-3xl text-lg"
          >
            View All Programs
          </Link>
        </div>
      </div>

      {/* SEO Content Block */}
      <section className="mb-20 bg-white rounded-3xl border border-[#E8D5B7] p-10 md:p-14">
        <h2 className="text-3xl tracking-tighter font-semibold heading-serif mb-6">
          Professional Kids Yoga and Mindfulness Programs Across Toronto
        </h2>
        <div className="prose prose-lg max-w-none text-[#1F2E2A]/75 space-y-4">
          <p>
            Earth and OM Kids is Toronto's trusted provider of professional kids yoga and mindfulness programs for schools, childcare centres, daycares, and families. We have been serving Toronto communities since 2018 and are trusted by over 25 Toronto schools and childcare centres including Beach Hill Montessori, Abacus Montessori, Lycée Français Toronto, and East Toronto Village Children's Centre.
          </p>
          <p>
            Our programs are led by Taran Kaur, a trained Early Childhood Educator with nearly 10 years of hands-on experience working in Toronto's diverse childcare and school communities. Every session is thoughtfully designed around how children actually learn, move, and develop, not just yoga poses. Taran's background in early childhood education means every program is safe, age-appropriate, and genuinely effective.
          </p>
          <p>
            We serve all of Toronto including North York, Scarborough, Etobicoke, Downtown Toronto, East York, York, and the city's many diverse neighbourhoods. We have delivered programs to schools and families along Yonge Street, Bloor Street, Danforth Avenue, Queen Street East, St. Clair Avenue, Eglinton Avenue, Lawrence Avenue, Sheppard Avenue, and throughout the inner suburbs and city core.
          </p>
          <p>
            Toronto families choose Earth and OM Kids because we come directly to their school, daycare, or home. There is no travel required and no studio membership needed. We bring everything needed for a professional, engaging session and design every program around the specific needs, age group, and goals of your Toronto school or family.
          </p>
          <p>
            Our Toronto programs include in-school yoga sessions, wellness weeks, after school classes, toddler yoga for children from 18 months old, children's mindfulness programs, yoga birthday parties, family yoga workshops, and PD day programs. Every program is fully customizable and delivered on-site at your Toronto location.
          </p>
        </div>
      </section>

      {/* Why Toronto Schools Choose Us */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">WHY TORONTO SCHOOLS AND FAMILIES CHOOSE US</div>
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">The most trusted kids yoga provider in Toronto</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "fa-graduation-cap",
              title: "Educator Led Programs",
              desc: "Led by a trained Early Childhood Educator with nearly 10 years of experience in Toronto classrooms and childcare communities. Every session is grounded in real child development knowledge."
            },
            {
              icon: "fa-school",
              title: "Trusted by 25+ Toronto Schools",
              desc: "We have built long-term partnerships with over 25 Toronto schools and childcare centres across the city. Many of our Toronto partners return season after season."
            },
            {
              icon: "fa-location-dot",
              title: "We Come to You",
              desc: "No travel required. We come directly to your Toronto school, daycare, community centre, or home anywhere across the city."
            }
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

      {/* Programs */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">PROGRAMS AVAILABLE ACROSS TORONTO</div>
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">What We Offer in Toronto</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "School and Daycare Yoga Programs",
              desc: "In-class sessions, wellness weeks, and custom programs for Toronto schools, Montessori programs, and childcare centres. Sessions are 30 to 45 minutes and fully classroom ready.",
              link: "/schools",
              linkText: "Learn more for schools"
            },
            {
              title: "After School Yoga Classes",
              desc: "Weekly kids yoga classes for toddlers from 18 months, preschoolers, and school age children across Toronto. Small groups with big results.",
              link: "/families",
              linkText: "See class options"
            },
            {
              title: "Toddler Yoga Toronto",
              desc: "Playful, song-based yoga sessions for children from 18 months old. One of the only Toronto providers specializing in this age group with an early childhood education background.",
              link: "/toddler-yoga-toronto",
              linkText: "Toddler yoga programs"
            },
            {
              title: "Children's Mindfulness",
              desc: "Practical mindfulness tools for Toronto children including breathing games, body awareness, guided relaxation, and emotional regulation activities.",
              link: "/mindfulness-for-kids-toronto",
              linkText: "Mindfulness programs"
            },
            {
              title: "Yoga Birthday Parties",
              desc: "Fun and magical yoga birthday party experiences for children across Toronto. We come to your home, condo, or venue. Ages 3 to 12.",
              link: "/yoga-birthday-party-toronto",
              linkText: "Birthday party info"
            },
            {
              title: "Family Yoga Workshops",
              desc: "Family yoga experiences that bring parents and children together through mindful movement, breathing, and connection. Available across Toronto.",
              link: "/contact",
              linkText: "Book a workshop"
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

      {/* School Partners */}
      <section className="mb-20 bg-[#F8F1E9] rounded-3xl p-10 md:p-14">
        <div className="text-center mb-10">
          <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">TORONTO SCHOOL PARTNERS</div>
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Trusted by Toronto schools and childcare centres</h2>
          <p className="mt-3 text-[#1F2E2A]/60 max-w-xl mx-auto">We have partnered with over 25 Toronto schools and childcare centres. Here are some of our long-term partners.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Beach Hill Montessori",
            "Abacus Montessori",
            "Lycée Français Toronto",
            "East Toronto Village Children's Centre",
            "Kids Connect Daycare",
            "And 20+ more Toronto schools",
          ].map((name, index) => (
            <div key={index} className="bg-white rounded-2xl p-5 text-center text-sm font-medium text-[#1F2E2A] border border-[#E8D5B7]">
              {name}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="mb-20">
        <div className="bg-[#2D5A4A] text-white rounded-3xl p-10 md:p-14">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-4xl mb-6">🌿</div>
            <blockquote className="text-xl md:text-2xl leading-relaxed font-light italic mb-6">
              "The children are noticeably calmer and more focused after Taran's sessions. She has a beautiful way of connecting with even our youngest toddlers."
            </blockquote>
            <div className="text-white/70 text-sm">Director, Toronto School</div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Benefits of Kids Yoga in Toronto</h2>
          <p className="mt-3 text-[#1F2E2A]/60 max-w-xl mx-auto">What Toronto teachers, directors, and parents notice after just a few sessions.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "🧠", title: "Improved Focus", desc: "Children pay attention longer and transition between activities more smoothly. Toronto teachers report fewer classroom disruptions." },
            { icon: "😊", title: "Emotional Balance", desc: "Kids gain practical tools to manage big feelings and reduce meltdowns at school and at home." },
            { icon: "🤝", title: "Social Skills", desc: "Build confidence, kindness, and cooperation through shared movement and mindfulness activities." },
            { icon: "🌙", title: "Better Sleep and Calm", desc: "Toronto parents consistently tell us their children are calmer at home and fall asleep more easily after classes." }
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

      {/* Neighbourhoods */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Toronto Neighbourhoods We Serve</h2>
          <p className="mt-3 text-[#1F2E2A]/60 max-w-xl mx-auto">We deliver programs across all of Toronto. Here are some of the neighbourhoods and areas we regularly serve.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            "The Annex", "Yorkville", "Rosedale", "Forest Hill",
            "Leslieville", "Riverdale", "Beaches", "Danforth",
            "Midtown", "Leaside", "Lawrence Park", "Don Mills",
            "Corktown", "Trinity Bellwoods", "Little Italy", "Kensington Market",
            "Harbourfront", "Liberty Village", "Swansea", "Bloor West Village"
          ].map((area, index) => (
            <div key={index} className="bg-[#F8F1E9] rounded-2xl px-4 py-3 text-sm text-center font-medium text-[#2D5A4A] border border-[#E8D5B7]">
              {area}
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#1F2E2A]/60 mt-6">
          Also serving <Link href="/north-york" className="text-[#2D5A4A] hover:underline">North York</Link>, <Link href="/scarborough" className="text-[#2D5A4A] hover:underline">Scarborough</Link>, <Link href="/etobicoke" className="text-[#2D5A4A] hover:underline">Etobicoke</Link>, and <Link href="/downtown-toronto" className="text-[#2D5A4A] hover:underline">Downtown Toronto</Link>
        </p>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Common Questions from Toronto Families</h2>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {[
            {
              q: "What areas of Toronto do you serve?",
              a: "We serve all of Toronto including North York, Scarborough, Etobicoke, Downtown Toronto, East York, York, Midtown, The Beaches, Leslieville, Riverdale, The Annex, Forest Hill, Rosedale, Leaside, Lawrence Park, Don Mills, and all surrounding neighbourhoods. We also serve the Greater Toronto Area including Vaughan, Mississauga, Markham, and Richmond Hill."
            },
            {
              q: "Do you work with TDSB schools in Toronto?",
              a: "Yes. We work with both Toronto District School Board schools and private schools, Montessori programs, and independent childcare centres throughout Toronto. Contact us to discuss becoming an approved provider for your school or board."
            },
            {
              q: "What is the youngest age you work with in Toronto?",
              a: "We accept children from 18 months old. Our toddler yoga program is specifically designed for children 18 months to 3 years and is one of the only programs in Toronto led by someone with a formal early childhood education background."
            },
            {
              q: "How do I book a kids yoga program in Toronto?",
              a: "Fill out our contact form or call us at (647) 856-8206. We respond within 1 to 2 business days with a custom proposal tailored to your Toronto school, daycare, or family."
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-3xl border border-[#E8D5B7] p-7">
              <h3 className="font-semibold text-lg mb-2 text-[#1F2E2A]">{item.q}</h3>
              <p className="text-[#1F2E2A]/70 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <div className="text-center bg-[#F8F1E9] rounded-3xl p-12">
        <h2 className="text-3xl tracking-tighter font-semibold heading-serif mb-4">
          Ready to bring kids yoga to your Toronto school or family?
        </h2>
        <p className="text-[#1F2E2A]/70 mb-8 max-w-md mx-auto">
          Whether you are a school, daycare, or parent anywhere in Toronto, we would love to partner with you. We respond within 1 to 2 business days.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-x-3 px-10 py-4 bg-[#2D5A4A] hover:bg-[#1F2E2A] transition text-white font-semibold rounded-3xl text-lg"
          >
            Request a Toronto Program
          </Link>
          <Link
            href="/schools"
            className="inline-flex items-center justify-center gap-x-3 px-10 py-4 border border-[#2D5A4A] text-[#2D5A4A] hover:bg-white font-semibold rounded-3xl text-lg"
          >
            School Programs
          </Link>
        </div>
      </div>
    </div>
  );
}