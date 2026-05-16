'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ToddlerYogaContent() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* Hero */}
      <div className="text-center mb-20">
        <div className="inline-block px-4 py-1 bg-[#A7C4A0]/20 text-[#2D5A4A] text-xs font-semibold tracking-[1.5px] rounded-full mb-4">
          TODDLER YOGA TORONTO · AGES 18 MONTHS TO 3 YEARS
        </div>
        <h1 className="text-5xl md:text-6xl tracking-tighter font-semibold heading-serif mb-4">
          Toddler Yoga in Toronto
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-[#1F2E2A]/70">
          Playful, song-based yoga classes for children from 18 months old. Fun movement, animal poses, and breathing games designed for how toddlers actually learn. Serving Toronto and the GTA.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-x-3 px-10 py-4 bg-[#2D5A4A] hover:bg-[#1F2E2A] transition text-white font-semibold rounded-3xl text-lg"
          >
            Book a Toddler Yoga Program
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
          Toddler Yoga Classes in Toronto Starting at 18 Months
        </h2>
        <div className="prose prose-lg max-w-none text-[#1F2E2A]/75 space-y-4">
          <p>
            Earth and OM Kids offers Toronto's most thoughtfully designed toddler yoga program for children from 18 months old. While most yoga programs start at age 3 or older, we believe the foundation for lifelong mindfulness and body awareness starts much earlier and we have the early childhood education background to do it right.
          </p>
          <p>
            Our toddler yoga sessions are nothing like adult yoga classes. They are short (20 to 30 minutes), joyful, and built entirely around how toddlers actually learn through songs, repetition, animal sounds, imaginative play, and movement that feels like fun rather than exercise. There are no expectations for sitting still, following long instructions, or holding poses perfectly. Toddlers wiggle. We celebrate that.
          </p>
          <p>
            Every toddler yoga session is led by Taran Kaur, a trained Early Childhood Educator with nearly 10 years of experience working with very young children across Toronto daycares, Montessori schools, and childcare centres. Taran understands toddler development deeply cognitively, emotionally, and physically and designs every session around the real developmental needs of this age group.
          </p>
          <p>
            We deliver toddler yoga programs across Toronto and the GTA including North York, Scarborough, Etobicoke, Downtown Toronto, Vaughan, Mississauga, and Markham. We come directly to your daycare, Montessori school, childcare centre, or home. Many Toronto daycares and childcare centres bring us in for regular weekly toddler yoga sessions as part of their enrichment programming.
          </p>
          <p>
            Parents are warmly welcomed to join their toddlers during sessions. For very young children, having a familiar caregiver nearby transforms yoga into a shared bonding experience. Many families tell us that toddler yoga becomes one of their favourite weekly rituals together.
          </p>
        </div>
      </section>

      {/* Why 18 Months */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">WHY START AT 18 MONTHS</div>
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Why We Welcome Toddlers from 18 Months</h2>
          <p className="mt-3 text-[#1F2E2A]/60 max-w-xl mx-auto">Most programs make you wait until age 3. We know that the earlier children experience mindful movement, the deeper the benefits go.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "fa-brain",
              title: "Brain Development",
              desc: "The first three years of life are the most critical period for brain development. Introducing movement, breathing, and body awareness at this stage builds lasting neural pathways."
            },
            {
              icon: "fa-graduation-cap",
              title: "ECE Expertise",
              desc: "As a trained Early Childhood Educator, Taran has the professional knowledge to work safely and effectively with very young children in ways a standard yoga teacher cannot."
            },
            {
              icon: "fa-heart",
              title: "Early Emotional Tools",
              desc: "Toddlers who learn simple breathing and body awareness techniques early have a head start on emotional regulation before the big feelings of preschool arrive."
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

      {/* What Happens in a Session */}
      <section className="mb-20 bg-[#F8F1E9] rounded-3xl p-10 md:p-14">
        <div className="text-center mb-12">
          <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">WHAT TO EXPECT</div>
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">What Happens in a Toddler Yoga Session</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Welcome Circle", desc: "A familiar song and greeting to help toddlers settle in and feel safe. Repetition is key for this age group." },
            { step: "02", title: "Animal Adventure", desc: "Story-based movement where toddlers become different animals through poses, sounds, and imaginative play." },
            { step: "03", title: "Breathing Games", desc: "Simple and fun breathing techniques like balloon breathing and bunny breaths that toddlers genuinely love." },
            { step: "04", title: "Cosy Relaxation", desc: "A short guided rest with gentle music. Many toddlers surprise their parents by actually staying still for this part." }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-semibold text-[#2D5A4A]/20 heading-serif mb-3">{item.step}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-[#1F2E2A]/70 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Benefits of Toddler Yoga in Toronto</h2>
          <p className="mt-3 text-[#1F2E2A]/60 max-w-xl mx-auto">What Toronto parents and daycare directors notice after just a few sessions.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "🏃", title: "Gross Motor Skills", desc: "Balancing, stretching, jumping, and crawling through yoga poses builds strength and coordination." },
            { icon: "🗣️", title: "Language Development", desc: "Naming animals, body parts, and describing movements supports early vocabulary and communication." },
            { icon: "😌", title: "Early Calm", desc: "Simple breathing tools give toddlers their very first strategies for managing big feelings." },
            { icon: "🌟", title: "Confidence", desc: "Mastering a new pose and being celebrated for it builds self-esteem from the very earliest age." }
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
            <div className="text-4xl mb-6">🌱</div>
            <blockquote className="text-xl md:text-2xl leading-relaxed font-light italic mb-6">
              "I was not sure if my 20 month old was ready for yoga. She absolutely loved it. She now does her little breathing exercises at home when she gets upset. I cannot believe how quickly she picked it up."
            </blockquote>
            <div className="text-white/70 text-sm">Parent, North York Toronto</div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Who Our Toddler Yoga Programs Are For</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Toronto Daycares and Childcare Centres",
              desc: "We offer regular weekly toddler yoga sessions for daycares and childcare centres across Toronto. Sessions are designed to fit seamlessly into your daily schedule and enhance your existing programming.",
              link: "/schools",
              linkText: "School and daycare programs"
            },
            {
              title: "Montessori Schools",
              desc: "Toddler yoga aligns beautifully with Montessori principles of independence, movement, and whole child development. We have experience working within Montessori environments across the GTA.",
              link: "/schools",
              linkText: "Montessori programs"
            },
            {
              title: "Families at Home",
              desc: "Book a private toddler yoga session for your child and a small group of friends. Great for playdates, parent and tot groups, and family wellness at home across Toronto and the GTA.",
              link: "/contact",
              linkText: "Book a home session"
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

      {/* FAQ */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Questions About Toddler Yoga in Toronto</h2>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {[
            {
              q: "Can an 18 month old really do yoga?",
              a: "Yes. Our sessions are designed specifically for children from 18 months old. There are no expectations for stillness or perfect poses. Sessions are play-based, song-led, and built entirely around what toddlers can actually do at this developmental stage. As a trained Early Childhood Educator, Taran has the expertise to make it work beautifully."
            },
            {
              q: "Do parents need to stay during toddler yoga?",
              a: "For children under 2 years old, we recommend parents or caregivers stay and participate. For children closer to 3, it depends on the child's comfort level. Many families find that joining in together makes the experience even more special."
            },
            {
              q: "How long are toddler yoga sessions?",
              a: "Toddler yoga sessions are 20 to 30 minutes. This is the appropriate attention span for children in this age range. We pack a lot of joy, movement, and learning into a short and perfectly paced session."
            },
            {
              q: "Where do you offer toddler yoga programs in Toronto?",
              a: "We offer toddler yoga across Toronto and the GTA including North York, Scarborough, Etobicoke, Downtown Toronto, Vaughan, Mississauga, and Markham. We come to your daycare, school, or home."
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
      <div className="text-center bg-[#2D5A4A] text-white rounded-3xl p-12">
        <div className="text-4xl mb-4">🌱</div>
        <h2 className="text-3xl tracking-tighter font-semibold mb-4">
          Ready to Start Your Toddler's Yoga Journey?
        </h2>
        <p className="text-white/80 mb-8 max-w-md mx-auto">
          Get in touch today to book a toddler yoga session for your daycare, school, or family across Toronto and the GTA.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-x-3 px-10 py-4 bg-white text-[#2D5A4A] font-semibold rounded-3xl text-lg hover:bg-[#F8F1E9] transition"
          >
            Book a Toddler Yoga Program
          </Link>
          <a
            href="tel:6478568206"
            className="inline-flex items-center justify-center gap-x-3 px-10 py-4 border border-white text-white font-semibold rounded-3xl text-lg hover:bg-white/10 transition"
          >
            Call (647) 856-8206
          </a>
        </div>
      </div>

    </div>
  );
}