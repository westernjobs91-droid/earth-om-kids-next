'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ScarboroughPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* Hero */}
      <div className="text-center mb-20">
        <div className="inline-block px-4 py-1 bg-[#A7C4A0]/20 text-[#2D5A4A] text-xs font-semibold tracking-[1.5px] rounded-full mb-4">
          SERVING SCARBOROUGH SINCE 2018
        </div>
        <h1 className="text-5xl md:text-6xl tracking-tighter font-semibold heading-serif mb-4">
          Kids Yoga in Scarborough
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-[#1F2E2A]/70">
          Professional kids yoga and mindfulness programs for schools, childcare centres, and families across Scarborough led by a trained Early Childhood Educator with nearly 10 years of experience.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-x-3 px-10 py-4 bg-[#2D5A4A] hover:bg-[#1F2E2A] transition text-white font-semibold rounded-3xl text-lg"
          >
            Book a Scarborough Program
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
          Kids Yoga & Mindfulness Programs Across Scarborough
        </h2>
        <div className="prose prose-lg max-w-none text-[#1F2E2A]/75 space-y-4">
          <p>
            Earth & OM Kids has been serving Scarborough schools, childcare centres, and families since 2018. We bring professional kids yoga and mindfulness programs directly to your location across Scarborough communities including Agincourt, Birchcliff, Cliffside, Wexford, Woburn, West Hill, Morningside, Malvern, and Rouge.
          </p>
          <p>
            Our programs are led by Taran Kaur, a trained Early Childhood Educator with nearly 10 years of hands-on experience in Toronto's diverse childcare and school communities. Taran's background in early childhood education means every session is thoughtfully designed around how children actually learn, move, and regulate not just yoga poses.
          </p>
          <p>
            Scarborough is one of Toronto's most diverse and vibrant communities, and our programs reflect that. We design inclusive, welcoming sessions that celebrate every child regardless of background, ability, or experience with yoga. All programs are fully adaptable for children with diverse learning needs.
          </p>
          <p>
            We have partnered with schools and childcare centres along Kingston Road, Lawrence Avenue East, Ellesmere Road, Sheppard Avenue East, and throughout the Scarborough Town Centre corridor. Whether your child attends a community daycare, a public school, or a private Montessori program in Scarborough, we can create a program that works for them.
          </p>
          <p>
            Our Scarborough programs include in-school yoga sessions, after-school weekly classes, wellness weeks, PD day programs, birthday parties, and family yoga workshops. Every program is delivered on-site at your Scarborough location no travel required for your school or family.
          </p>
        </div>
      </section>

      {/* Why Scarborough */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">WHY SCARBOROUGH FAMILIES & SCHOOLS CHOOSE US</div>
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Bringing calm and confidence to Scarborough</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "fa-graduation-cap",
              title: "Educator-Led Programs",
              desc: "Led by a trained Early Childhood Educator not just a yoga teacher. Every session is grounded in real child development knowledge and classroom experience."
            },
            {
              icon: "fa-school",
              title: "Scarborough School Partnerships",
              desc: "We have built trusted partnerships with schools and childcare centres across Scarborough, from Agincourt to West Hill. Many return year after year."
            },
            {
              icon: "fa-heart",
              title: "Inclusive & Culturally Welcoming",
              desc: "Scarborough's diversity is a strength. Our programs are inclusive, adaptable, and welcoming for all children regardless of background or ability."
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
          <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">PROGRAMS IN SCARBOROUGH</div>
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">What We Offer in Scarborough</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "School & Daycare Yoga Programs",
              desc: "In-class sessions, wellness weeks, and custom packages for Scarborough schools and childcare centres. 30–45 minute sessions, classroom-ready.",
              link: "/schools",
              linkText: "Learn more for schools"
            },
            {
              title: "After-School Yoga Classes",
              desc: "Weekly kids yoga classes for toddlers (18 months+), preschoolers, and school-age children across Scarborough. Small groups, big impact.",
              link: "/families",
              linkText: "See class options"
            },
            {
              title: "Workshops & Birthday Parties",
              desc: "Yoga birthday parties, family mindfulness workshops, and PD day programs available throughout Scarborough. Themed and fully customizable.",
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

      {/* Testimonial */}
      <section className="mb-20">
        <div className="bg-[#2D5A4A] text-white rounded-3xl p-10 md:p-14">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-4xl mb-6">🌿</div>
            <blockquote className="text-xl md:text-2xl leading-relaxed font-light italic mb-6">
              "The children are noticeably calmer and more focused after Taran's sessions. She has a beautiful way of connecting with even our youngest toddlers."
            </blockquote>
            <div className="text-white/70 text-sm">Director, Toronto</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Common Questions from Scarborough Families</h2>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {[
            {
              q: "Which areas of Scarborough do you serve?",
              a: "We serve all of Scarborough including Agincourt, Birchcliff, Cliffside, Wexford, Woburn, West Hill, Morningside, Malvern, Rouge, and communities along Kingston Road, Lawrence Avenue East, Ellesmere Road, and Sheppard Avenue East."
            },
            {
              q: "Do you offer inclusive programs for children with diverse needs?",
              a: "Absolutely. As a trained Early Childhood Educator, Taran has extensive experience adapting sessions for children with diverse learning needs, sensory sensitivities, and developmental profiles. Every child is welcome in our programs."
            },
            {
              q: "What age groups do you serve in Scarborough?",
              a: "We work with children from 18 months to 12 years old from toddler daycare sessions to after-school programs for older children across Scarborough."
            },
            {
              q: "How do I book a kids yoga program in Scarborough?",
              a: "Simply fill out our contact form or call (647) 856-8206. We'll respond within 1–2 business days with a custom proposal for your Scarborough school, daycare, or family."
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
          Ready to bring kids yoga to Scarborough?
        </h2>
        <p className="text-[#1F2E2A]/70 mb-8 max-w-md mx-auto">
          Whether you're a school, daycare, or parent in Scarborough we'd love to partner with you. We respond within 1–2 business days.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-x-3 px-10 py-4 bg-[#2D5A4A] hover:bg-[#1F2E2A] transition text-white font-semibold rounded-3xl text-lg"
          >
            Request a Scarborough Program
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