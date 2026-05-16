'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NorthYorkPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* Hero Section */}
      <div className="text-center mb-20">
        <div className="inline-block px-4 py-1 bg-[#A7C4A0]/20 text-[#2D5A4A] text-xs font-semibold tracking-[1.5px] rounded-full mb-4">
          SERVING NORTH YORK SINCE 2018
        </div>
        <h1 className="text-5xl md:text-6xl tracking-tighter font-semibold heading-serif mb-4">
          Kids Yoga in North York
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-[#1F2E2A]/70">
          Professional kids yoga and mindfulness programs for schools, childcare centres, and families across North York led by an Early Childhood Educator with nearly 10 years of experience.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-x-3 px-10 py-4 bg-[#2D5A4A] hover:bg-[#1F2E2A] transition text-white font-semibold rounded-3xl text-lg"
          >
            Book a North York Program
          </Link>
          <Link
            href="/programs"
            className="inline-flex items-center justify-center gap-x-3 px-10 py-4 border border-[#2D5A4A] text-[#2D5A4A] hover:bg-white font-semibold rounded-3xl text-lg"
          >
            View All Programs
          </Link>
        </div>
      </div>

      {/* About North York — SEO content block */}
      <section className="mb-20 bg-white rounded-3xl border border-[#E8D5B7] p-10 md:p-14">
        <h2 className="text-3xl tracking-tighter font-semibold heading-serif mb-6">
          Kids Yoga & Mindfulness Programs Across North York
        </h2>
        <div className="prose prose-lg max-w-none text-[#1F2E2A]/75 space-y-4">
          <p>
            Earth & OM Kids has been bringing professional kids yoga and mindfulness programs to North York schools, childcare centres, and families since 2018. We serve communities across North York including Willowdale, Newtonbrook, Bathurst Manor, Lawrence Park North, Don Mills, York Mills, Bayview Village, and Thornhill border communities.
          </p>
          <p>
            Our programs are led by Taran Kaur, an Early Childhood Educator (ECE) with nearly 10 years of experience working in Toronto's diverse childcare and Montessori school environments. As an ECE, Taran brings a deep understanding of child development, classroom dynamics, and age-appropriate practices that go far beyond a standard yoga instructor certification.
          </p>
          <p>
            North York families choose Earth & OM Kids because our programs are designed for real classrooms and real children not idealized studio settings. We come directly to your North York school, daycare, community centre, or home. Sessions are flexible, fully customizable, and designed to fit seamlessly into your existing schedule.
          </p>
          <p>
            We have partnered with schools and childcare centres along Yonge Street, Sheppard Avenue, Wilson Avenue, and throughout the Finch and Jane corridor. Whether your child attends a Montessori program, a TDSB school, or a private daycare in North York, we can design a program that meets their needs.
          </p>
          <p>
            Our North York programs range from single wellness sessions and birthday parties to multi-week after-school yoga series and full school wellness weeks. Every program is tailored to the age group, space, and goals of your specific school or family with themes covering emotional regulation, calm transitions, focus and attention, body awareness, and joyful movement.
          </p>
        </div>
      </section>

      {/* Why North York Chooses Us */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">WHY NORTH YORK FAMILIES & SCHOOLS TRUST US</div>
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">A calm, playful approach in your neighbourhood</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "fa-graduation-cap",
              title: "Led by a ECE",
              desc: "Taran is an Early Childhood Educator not just a yoga teacher. This means every session is grounded in real child development expertise and classroom experience."
            },
            {
              icon: "fa-school",
              title: "Trusted by North York Schools",
              desc: "We have built long-term partnerships with schools and childcare centres across North York, from Willowdale to Don Mills. Many partners return season after season."
            },
            {
              icon: "fa-clock",
              title: "We Come to You",
              desc: "No travel required for your family or school. We come directly to your North York location classroom, daycare, community centre, or home."
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

      {/* Programs in North York */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">PROGRAMS AVAILABLE IN NORTH YORK</div>
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">What We Offer in North York</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "School & Daycare Yoga Programs",
              desc: "In-class sessions, wellness weeks, and custom packages designed for North York schools and childcare centres. Sessions are 30–45 minutes and fully classroom-ready.",
              link: "/schools",
              linkText: "Learn more for schools"
            },
            {
              title: "After-School Yoga Classes",
              desc: "Weekly playful yoga classes for toddlers (18 months+), preschoolers, and school-age children across North York. Small groups, big results.",
              link: "/families",
              linkText: "See class options"
            },
            {
              title: "Workshops & Birthday Parties",
              desc: "Yoga birthday parties, family mindfulness workshops, and PD day programs available across North York. Fully themed and customizable.",
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

      {/* Benefits Section */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Benefits of Kids Yoga in North York</h2>
          <p className="mt-3 text-[#1F2E2A]/60 max-w-xl mx-auto">What teachers, directors, and North York parents tell us they notice after just a few sessions.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "🧠", title: "Improved Focus", desc: "Children develop better attention and concentration teachers report fewer disruptions in class." },
            { icon: "😊", title: "Emotional Balance", desc: "Kids gain simple tools to manage big feelings, reducing meltdowns and improving transitions." },
            { icon: "🤝", title: "Social Skills", desc: "Build confidence, kindness, and cooperation. Children learn to work together through movement." },
            { icon: "🌙", title: "Better Sleep & Calm", desc: "North York parents consistently tell us their children are calmer at home and sleep better after classes." }
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

      {/* Testimonial */}
      <section className="mb-20">
        <div className="bg-[#2D5A4A] text-white rounded-3xl p-10 md:p-14">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-4xl mb-6">🌿</div>
            <blockquote className="text-xl md:text-2xl leading-relaxed font-light italic mb-6">
              "Our after-school program has been transformed. The kids love the breathing games and animal poses. Parents constantly comment on how relaxed their children are at pickup."
            </blockquote>
            <div className="text-white/70 text-sm">Parent, North York</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Common Questions from North York Families</h2>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {[
            {
              q: "Which areas of North York do you serve?",
              a: "We serve all of North York including Willowdale, Newtonbrook, Bathurst Manor, Lawrence Park North, Don Mills, York Mills, Bayview Village, Lansing, and communities along Yonge, Sheppard, Wilson, Finch, and Jane corridors."
            },
            {
              q: "Do you work with TDSB schools in North York?",
              a: "Yes. We work with both TDSB and private schools across North York. We can design programs that align with your school's wellness goals and curriculum. Contact us to discuss becoming an approved external provider for your school board."
            },
            {
              q: "What age groups do you serve in North York?",
              a: "We work with children from 18 months to 12 years old. This includes toddler programs for daycare centres, preschool sessions, and after-school classes for school-age children across North York."
            },
            {
              q: "How much do programs cost in North York?",
              a: "Pricing depends on the program type, frequency, and group size. We offer flexible packages for schools, daycares, and families. Contact us for a custom proposal tailored to your North York school or family's needs."
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
          Ready to bring calm and confidence to North York children?
        </h2>
        <p className="text-[#1F2E2A]/70 mb-8 max-w-md mx-auto">
          Whether you're a school, daycare, or parent in North York we'd love to partner with you. We respond within 1–2 business days.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-x-3 px-10 py-4 bg-[#2D5A4A] hover:bg-[#1F2E2A] transition text-white font-semibold rounded-3xl text-lg"
          >
            Request a North York Program
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