'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function DowntownTorontoPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* Hero Section */}
      <div className="text-center mb-20">
        <div className="inline-block px-4 py-1 bg-[#A7C4A0]/20 text-[#2D5A4A] text-xs font-semibold tracking-[1.5px] rounded-full mb-4">
          SERVING DOWNTOWN TORONTO SINCE 2018
        </div>
        <h1 className="text-5xl md:text-6xl tracking-tighter font-semibold heading-serif mb-4">
          Kids Yoga in Downtown Toronto
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-[#1F2E2A]/70">
          Professional kids yoga and mindfulness programs for schools, childcare centres, and families across Downtown Toronto. Led by a trained Early Childhood Educator with nearly 10 years of experience.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-x-3 px-10 py-4 bg-[#2D5A4A] hover:bg-[#1F2E2A] transition text-white font-semibold rounded-3xl text-lg"
          >
            Book a Downtown Toronto Program
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
          Kids Yoga and Mindfulness Programs Across Downtown Toronto
        </h2>
        <div className="prose prose-lg max-w-none text-[#1F2E2A]/75 space-y-4">
          <p>
            Earth and OM Kids has been delivering professional kids yoga and mindfulness programs to Downtown Toronto schools, childcare centres, and families since 2018. We serve communities across the downtown core including The Annex, Kensington Market, Trinity Bellwoods, Little Italy, Harbourfront, Corktown, Leslieville, Riverdale, Rosedale, Midtown, Forest Hill, and the St. Lawrence Market neighbourhood.
          </p>
          <p>
            Our programs are led by Taran Kaur, a trained Early Childhood Educator with nearly 10 years of experience working in Toronto schools and childcare communities. Downtown Toronto children face a uniquely stimulating and fast paced environment. Taran designs every session to give children in the city practical tools for calm, focus, and self awareness that they can use in the classroom and at home.
          </p>
          <p>
            Downtown Toronto families appreciate the convenience of on site programs. We come directly to your school, childcare centre, condo building community room, or home. There is no need to travel across the city. We work around the tight scheduling realities of downtown life and build programs that fit seamlessly into your existing routine.
          </p>
          <p>
            We have partnered with schools and childcare centres throughout the downtown core along Spadina Avenue, Bloor Street West, College Street, Queen Street West, King Street, and the Yonge Street corridor from Bloor to the waterfront. We also work with Montessori programs, French language schools, and community daycares across Downtown Toronto.
          </p>
          <p>
            One of Earth and OM Kids is proud partners is Lycée Français Toronto, one of Downtown Toronto's premier French language schools. This partnership reflects our ability to adapt programs for diverse school communities with specific cultural and educational approaches. Our Downtown Toronto programs include in-school yoga sessions, wellness weeks, after school classes, birthday parties, PD day programs, and family yoga workshops — all fully customized to your community's needs.
          </p>
        </div>
      </section>

      {/* Why Downtown Toronto */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">WHY DOWNTOWN TORONTO CHOOSES US</div>
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Calm minds in the heart of the city</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "fa-graduation-cap",
              title: "Educator Led Programs",
              desc: "Led by a trained Early Childhood Educator with nearly 10 years of experience. Every session is grounded in real child development knowledge, not just yoga poses."
            },
            {
              icon: "fa-clock",
              title: "Flexible Downtown Scheduling",
              desc: "We understand the realities of busy downtown life. Programs are designed to fit your school or family schedule with minimal disruption."
            },
            {
              icon: "fa-users",
              title: "Trusted Downtown Partnerships",
              desc: "Trusted by Downtown Toronto schools, Montessori programs, and childcare centres including Lycée Français Toronto and East Toronto Village Children's Centre."
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
          <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">PROGRAMS IN DOWNTOWN TORONTO</div>
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">What We Offer Downtown</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "School and Childcare Programs",
              desc: "In-class yoga and mindfulness sessions designed for Downtown Toronto schools and childcare centres. Sessions are 30 to 45 minutes and fully classroom ready.",
              link: "/schools",
              linkText: "Learn more for schools"
            },
            {
              title: "After School Classes",
              desc: "Weekly kids yoga classes for toddlers from 18 months, preschoolers, and school age children across Downtown Toronto. Small groups, big results.",
              link: "/families",
              linkText: "See class options"
            },
            {
              title: "Workshops and Birthday Parties",
              desc: "Yoga birthday parties, family mindfulness workshops, and PD day programs available across Downtown Toronto. Fully themed and customizable for any age group.",
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
              "Taran brought such warmth and professionalism to our wellness week. The custom program was perfectly tailored to our mixed age group. Highly recommend for any school community."
            </blockquote>
            <div className="text-white/70 text-sm">Principal, Downtown Toronto</div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Benefits of Kids Yoga in Downtown Toronto</h2>
          <p className="mt-3 text-[#1F2E2A]/60 max-w-xl mx-auto">What Downtown Toronto teachers, directors, and parents notice after just a few sessions.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "🧠", title: "Better Focus", desc: "Helps children stay calm and focused in a busy urban environment. Teachers report fewer disruptions and smoother transitions." },
            { icon: "😊", title: "Emotional Regulation", desc: "Gives kids practical tools to manage stress from city life, school, and big feelings." },
            { icon: "🤝", title: "Social Connection", desc: "Builds confidence, kindness, and positive peer relationships through shared movement and mindfulness." },
            { icon: "🌿", title: "Mindful Living", desc: "Introduces healthy lifelong habits early. Downtown children learn to slow down, breathe, and connect with themselves." }
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

      {/* FAQ */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Common Questions from Downtown Toronto Families</h2>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {[
            {
              q: "Which areas of Downtown Toronto do you serve?",
              a: "We serve all of Downtown Toronto including The Annex, Kensington Market, Trinity Bellwoods, Little Italy, Harbourfront, Corktown, Leslieville, Riverdale, Rosedale, Midtown, Forest Hill, and the St. Lawrence Market neighbourhood. We work along Spadina Avenue, Bloor Street West, College Street, Queen Street West, King Street, and the Yonge Street corridor."
            },
            {
              q: "Can you come to our condo building or community space?",
              a: "Yes. Many Downtown Toronto families host our family yoga workshops and birthday parties in condo amenity rooms, community centres, and private spaces. We bring everything needed for the session. Just let us know your space and we will make it work."
            },
            {
              q: "Do you work with French language schools in Downtown Toronto?",
              a: "Yes. We are proud to work with Lycée Français Toronto and can deliver programs in both English and French language school environments. Our programs are adaptable to a wide range of school cultures and community needs."
            },
            {
              q: "How do I book a kids yoga program in Downtown Toronto?",
              a: "Fill out our contact form or call us at (647) 856-8206. We will respond within 1 to 2 business days with a custom proposal tailored to your Downtown Toronto school, daycare, or family."
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
          Ready to bring kids yoga to Downtown Toronto?
        </h2>
        <p className="text-[#1F2E2A]/70 mb-8 max-w-md mx-auto">
          Whether you are a school, daycare, or family in Downtown Toronto, we would love to partner with you. We respond within 1 to 2 business days.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-x-3 px-10 py-4 bg-[#2D5A4A] hover:bg-[#1F2E2A] transition text-white font-semibold rounded-3xl text-lg"
          >
            Request a Downtown Toronto Program
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