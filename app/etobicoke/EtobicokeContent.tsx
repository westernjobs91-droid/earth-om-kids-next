'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function EtobicokePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* Hero */}
      <div className="text-center mb-20">
        <div className="inline-block px-4 py-1 bg-[#A7C4A0]/20 text-[#2D5A4A] text-xs font-semibold tracking-[1.5px] rounded-full mb-4">
          SERVING ETOBICOKE SINCE 2018
        </div>
        <h1 className="text-5xl md:text-6xl tracking-tighter font-semibold heading-serif mb-4">
          Kids Yoga in Etobicoke
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-[#1F2E2A]/70">
          Professional kids yoga and mindfulness programs for schools, childcare centres, and families across Etobicoke and West Toronto. Led by a trained Early Childhood Educator with nearly 10 years of experience.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-x-3 px-10 py-4 bg-[#2D5A4A] hover:bg-[#1F2E2A] transition text-white font-semibold rounded-3xl text-lg"
          >
            Book an Etobicoke Program
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
          Kids Yoga and Mindfulness Programs Across Etobicoke
        </h2>
        <div className="prose prose-lg max-w-none text-[#1F2E2A]/75 space-y-4">
          <p>
            Earth and OM Kids has been bringing professional kids yoga and mindfulness programs to Etobicoke schools, childcare centres, and families since 2018. We serve communities across Etobicoke including Bloordale, Islington, Mimico, New Toronto, Long Branch, Humber Valley, Richview, Rexdale, Thistletown, and Etobicoke City Centre.
          </p>
          <p>
            Our programs are led by Taran Kaur, a trained Early Childhood Educator with nearly 10 years of hands-on experience in Toronto childcare and school communities. Every session is designed with real child development knowledge at its core. Taran understands how children think, move, and learn at every age from 18 months to 12 years old.
          </p>
          <p>
            Etobicoke families appreciate that we bring programs directly to their neighbourhood. There is no need to travel across the city. We come to your Etobicoke school, daycare, community centre, or home and deliver a fully tailored experience that fits your schedule and space.
          </p>
          <p>
            We have worked with schools and childcare centres along Bloor Street West, Kipling Avenue, Islington Avenue, Royal York Road, Dixon Road, and throughout the Humber River corridor. From established community daycares to growing Montessori programs in Etobicoke, we design programs that meet each community's unique needs and goals.
          </p>
          <p>
            Our Etobicoke programs include in-school yoga sessions, after-school weekly classes, wellness weeks, PD day programs, birthday parties, and family yoga workshops. Every program is tailored to the age group, learning environment, and specific goals of your Etobicoke school or family. Whether the focus is emotional regulation, calm transitions, improved focus, or simply joyful movement, we build a program around what matters most to you.
          </p>
        </div>
      </section>

      {/* Why Etobicoke */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">WHY ETOBICOKE FAMILIES AND SCHOOLS CHOOSE US</div>
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Bringing calm to West Toronto</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "fa-graduation-cap",
              title: "Educator Led Programs",
              desc: "Led by a trained Early Childhood Educator with nearly 10 years of experience in Toronto classrooms. Every session is grounded in real child development knowledge."
            },
            {
              icon: "fa-school",
              title: "Etobicoke School Partnerships",
              desc: "We have built trusted partnerships with schools and childcare centres across Etobicoke and West Toronto. Many of our school partners return season after season."
            },
            {
              icon: "fa-clock",
              title: "We Come to You",
              desc: "No travel required. We come directly to your Etobicoke location whether it is a school, a daycare, a community centre, or your home."
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
          <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">PROGRAMS IN ETOBICOKE</div>
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">What We Offer in Etobicoke</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "School and Daycare Yoga Programs",
              desc: "In-class sessions, wellness weeks, and custom packages for Etobicoke schools and childcare centres. Sessions are 30 to 45 minutes and fully classroom ready.",
              link: "/schools",
              linkText: "Learn more for schools"
            },
            {
              title: "After-School Yoga Classes",
              desc: "Weekly kids yoga classes for toddlers from 18 months, preschoolers, and school-age children across Etobicoke. Small groups with big results.",
              link: "/families",
              linkText: "See class options"
            },
            {
              title: "Workshops and Birthday Parties",
              desc: "Yoga birthday parties, family mindfulness workshops, and PD day programs available throughout Etobicoke. Fully themed and customizable for any age group.",
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
            <div className="text-white/70 text-sm">Principal, Toronto</div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Benefits of Kids Yoga in Etobicoke</h2>
          <p className="mt-3 text-[#1F2E2A]/60 max-w-xl mx-auto">What Etobicoke teachers, directors, and parents notice after just a few sessions.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "🧠", title: "Improved Focus", desc: "Children develop better attention and concentration. Teachers report fewer disruptions and smoother transitions." },
            { icon: "😊", title: "Emotional Balance", desc: "Kids gain practical tools to manage big feelings and reduce meltdowns in the classroom and at home." },
            { icon: "🤝", title: "Social Skills", desc: "Build confidence, kindness, and cooperation through movement and shared mindfulness activities." },
            { icon: "🌙", title: "Better Sleep and Calm", desc: "Etobicoke families tell us their children are noticeably calmer at home and sleep better after classes." }
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
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Common Questions from Etobicoke Families</h2>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {[
            {
              q: "Which areas of Etobicoke do you serve?",
              a: "We serve all of Etobicoke including Bloordale, Islington, Mimico, New Toronto, Long Branch, Humber Valley, Richview, Rexdale, Thistletown, and Etobicoke City Centre. We work with schools and families along Bloor Street West, Kipling Avenue, Islington Avenue, Royal York Road, and Dixon Road."
            },
            {
              q: "Do you work with both public and private schools in Etobicoke?",
              a: "Yes. We work with TDSB schools, private schools, Montessori programs, and independent childcare centres throughout Etobicoke. Our programs are designed to fit a wide range of school environments and schedules."
            },
            {
              q: "What age groups do you serve in Etobicoke?",
              a: "We work with children from 18 months to 12 years old. This includes toddler yoga for daycare centres, preschool sessions, and after-school classes for older children across Etobicoke."
            },
            {
              q: "How do I book a kids yoga program in Etobicoke?",
              a: "Fill out our contact form or call us at (647) 856-8206. We will respond within 1 to 2 business days with a custom proposal tailored to your Etobicoke school, daycare, or family."
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
          Ready to bring kids yoga to Etobicoke?
        </h2>
        <p className="text-[#1F2E2A]/70 mb-8 max-w-md mx-auto">
          Whether you are a school, daycare, or parent in Etobicoke, we would love to partner with you. We respond within 1 to 2 business days.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-x-3 px-10 py-4 bg-[#2D5A4A] hover:bg-[#1F2E2A] transition text-white font-semibold rounded-3xl text-lg"
          >
            Request an Etobicoke Program
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