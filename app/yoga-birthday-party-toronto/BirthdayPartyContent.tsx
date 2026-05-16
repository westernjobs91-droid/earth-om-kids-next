'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BirthdayPartyContent() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* Hero */}
      <div className="text-center mb-20">
        <div className="inline-block px-4 py-1 bg-[#A7C4A0]/20 text-[#2D5A4A] text-xs font-semibold tracking-[1.5px] rounded-full mb-4">
          KIDS YOGA BIRTHDAY PARTIES TORONTO
        </div>
        <h1 className="text-5xl md:text-6xl tracking-tighter font-semibold heading-serif mb-4">
          A Birthday Party They Will Never Forget
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-[#1F2E2A]/70">
          Fun, active, and magical yoga birthday parties for children across Toronto and the GTA. We come to you. Ages 3 to 12.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-x-3 px-10 py-4 bg-[#2D5A4A] hover:bg-[#1F2E2A] transition text-white font-semibold rounded-3xl text-lg"
          >
            Book a Birthday Party
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
          Kids Yoga Birthday Parties in Toronto and the GTA
        </h2>
        <div className="prose prose-lg max-w-none text-[#1F2E2A]/75 space-y-4">
          <p>
            Looking for a unique and unforgettable kids birthday party idea in Toronto? Earth and OM Kids brings the magic of yoga and mindfulness directly to your party venue. Our birthday yoga parties are fun, energetic, and filled with laughter giving children an experience they will talk about long after the cake is gone.
          </p>
          <p>
            Our kids yoga birthday parties are available across Toronto and the Greater Toronto Area including North York, Scarborough, Etobicoke, Downtown Toronto, Vaughan, Mississauga, Markham, and Richmond Hill. We come to your home, backyard, condo amenity room, community centre, or any party venue in the GTA. You handle the cake. We handle the fun.
          </p>
          <p>
            Every birthday party is led by Taran Kaur, a trained Early Childhood Educator with nearly 10 years of experience working with children across Toronto. Taran has a natural gift for capturing children's attention and turning movement into play. Parents consistently tell us their children were engaged, laughing, and asking when the next yoga party is.
          </p>
          <p>
            Our yoga birthday parties are designed for children ages 3 to 12. Each session is fully tailored to the birthday child's age group, interests, and theme. Whether your child loves animals, nature, superheroes, or magic, we weave yoga poses, breathing games, and mindfulness activities into a story that brings their theme to life.
          </p>
          <p>
            A typical kids yoga birthday party in Toronto is 45 to 60 minutes and includes a welcome circle, a themed yoga adventure story, breathing and mindfulness games, a group relaxation activity, and a birthday celebration moment. We recommend 8 to 16 children for the best experience, though we can accommodate larger groups with advance notice.
          </p>
        </div>
      </section>

      {/* What is Included */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">WHAT IS INCLUDED</div>
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Everything You Need for the Perfect Party</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "fa-wand-magic-sparkles",
              title: "Themed Yoga Adventure",
              desc: "A fully custom story-based yoga journey built around your child's favourite theme. Animals, nature, space, ocean, superheroes we make it magical."
            },
            {
              icon: "fa-wind",
              title: "Breathing and Mindfulness Games",
              desc: "Fun and interactive breathing games that children love. These give kids tools they can use long after the party is over."
            },
            {
              icon: "fa-star",
              title: "Birthday Child Spotlight",
              desc: "A special moment just for the birthday child. They get to lead a pose, make a wish, and feel truly celebrated in front of their friends."
            },
            {
              icon: "fa-peace",
              title: "Group Relaxation Activity",
              desc: "A calming guided relaxation to wind down after the active yoga adventure. Parents love this part too."
            },
            {
              icon: "fa-location-dot",
              title: "We Come to You",
              desc: "We travel to your home, backyard, condo, or party venue anywhere across Toronto and the GTA. No extra travel fees within the city."
            },
            {
              icon: "fa-sliders",
              title: "Fully Customizable",
              desc: "Every detail is tailored to your child's age, interests, and group size. Just tell us your vision and we will make it happen."
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

      {/* How It Works */}
      <section className="mb-20 bg-[#F8F1E9] rounded-3xl p-10 md:p-14">
        <div className="text-center mb-12">
          <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">HOW IT WORKS</div>
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Simple to Book. Magical to Experience.</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Get in Touch", desc: "Fill out our contact form or call us. Tell us your child's age, the party date, location, and any theme ideas." },
            { step: "02", title: "We Design Your Party", desc: "Taran creates a fully custom yoga adventure story and activity plan built around your child's theme and age group." },
            { step: "03", title: "We Come to You", desc: "On the day, we arrive at your venue ready to go. All you need is a clear floor space roughly the size of a living room." },
            { step: "04", title: "Pure Magic", desc: "Children move, breathe, laugh, and leave with new tools and memories. Parents relax and enjoy the show." }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-semibold text-[#2D5A4A]/20 heading-serif mb-3">{item.step}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-[#1F2E2A]/70 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="mb-20">
        <div className="bg-[#2D5A4A] text-white rounded-3xl p-10 md:p-14">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-4xl mb-6">🎉</div>
            <blockquote className="text-xl md:text-2xl leading-relaxed font-light italic mb-6">
              "We booked Taran for our daughter's 5th birthday and it was the best decision we made. The kids were completely engaged the whole time. Even the parents were laughing and joining in. Every single child left calm and happy."
            </blockquote>
            <div className="text-white/70 text-sm">Parent, North York Toronto</div>
          </div>
        </div>
      </section>

      {/* Party Details */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Party Details at a Glance</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {[
            { label: "Ages", value: "3 to 12 years old" },
            { label: "Duration", value: "45 to 60 minutes" },
            { label: "Group size", value: "8 to 16 children recommended" },
            { label: "Location", value: "Your home, backyard, condo, or venue" },
            { label: "Service area", value: "Toronto and GTA wide" },
            { label: "Booking lead time", value: "2 to 3 weeks in advance recommended" }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-3xl border border-[#E8D5B7] p-6 flex items-center gap-x-5">
              <div className="w-2 h-10 bg-[#2D5A4A] rounded-full flex-shrink-0" />
              <div>
                <div className="text-xs font-semibold text-[#2D5A4A] tracking-wider uppercase mb-1">{item.label}</div>
                <div className="font-semibold text-[#1F2E2A]">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {[
            {
              q: "How far in advance should I book a yoga birthday party in Toronto?",
              a: "We recommend booking at least 2 to 3 weeks in advance to secure your preferred date and time. Weekend dates fill up quickly, especially during spring and fall. The sooner you reach out the better."
            },
            {
              q: "What space do you need for the party?",
              a: "We need a clear floor space roughly the size of a living room. We bring all the materials needed. Yoga mats can be provided or children can use a soft floor or carpet. We make it work in most home and venue spaces."
            },
            {
              q: "Can parents join in the yoga party?",
              a: "Absolutely. Parents are welcome to join in the fun. Many parents end up participating alongside their children and love it. It is a beautiful shared experience."
            },
            {
              q: "Do you serve areas outside Toronto for birthday parties?",
              a: "Yes. We travel across the Greater Toronto Area including North York, Scarborough, Etobicoke, Vaughan, Mississauga, Markham, and Richmond Hill. Contact us with your location and we will confirm availability."
            },
            {
              q: "How much does a kids yoga birthday party in Toronto cost?",
              a: "Pricing varies based on the duration, group size, and location. Contact us for a custom quote. We offer flexible options to fit a range of budgets."
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
        <div className="text-4xl mb-4">🎂</div>
        <h2 className="text-3xl tracking-tighter font-semibold mb-4">
          Ready to Book Your Child's Yoga Birthday Party?
        </h2>
        <p className="text-white/80 mb-8 max-w-md mx-auto">
          Dates fill up fast. Get in touch today and we will create a birthday experience your child and their friends will never forget.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-x-3 px-10 py-4 bg-white text-[#2D5A4A] font-semibold rounded-3xl text-lg hover:bg-[#F8F1E9] transition"
          >
            Book a Birthday Party
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