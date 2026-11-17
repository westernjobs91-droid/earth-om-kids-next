'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { School, Calendar, ArrowRight, GraduationCap, Baby, MapPin, SlidersHorizontal, Star, Phone } from 'lucide-react';

import { Hills } from '@/components/rd/Kit';
export default function NorthYorkPage() {
  return (
    <>
      {/* HERO */}
      <div className="relative overflow-hidden bg-[#2D5A4A] text-white pt-20 pb-32 md:pb-40">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl tracking-tighter font-semibold heading-serif mb-6 leading-tight">
              Kids Yoga in<br />North York
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-white/80 mb-10">
              Professional kids yoga and mindfulness for North York schools, childcare centres, daycares, and families. Led by a trained Early Childhood Educator. We come to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/schools"
                className="inline-flex items-center justify-center gap-x-3 px-10 py-4 bg-[#F4D35E] text-[#1F2E2A] font-semibold rounded-full text-lg hover:bg-[#f7dd7f] transition"
              >
                For Schools and Daycares <School className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-x-3 px-10 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-full text-lg transition"
              >
                Book a Program <Calendar className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
        <Hills />
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
            { number: "2018", label: "Serving North York Since" },
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
              <h2 className="text-4xl tracking-tighter font-semibold heading-serif mb-6">North York's kids yoga program built on real child development expertise</h2>
              <div className="space-y-4 text-[#1F2E2A]/75 leading-relaxed">
                <p>Earth and OM Kids has been bringing professional kids yoga and mindfulness programs to North York schools, childcare centres, and families since 2018. We serve communities across North York including Willowdale, Newtonbrook, Bathurst Manor, Lawrence Park North, Don Mills, York Mills, Bayview Village, and Thornhill border communities.</p>
                <p>Every program is led by Taran Kaur, a trained Early Childhood Educator with nearly 10 years of hands-on experience in Toronto's diverse childcare and Montessori school environments. Every session is designed for real North York classrooms and real children.</p>
                <p>We come directly to your North York school, daycare, community centre, or home. Sessions are flexible, fully customizable, and designed to fit seamlessly into your existing schedule.</p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/about" className="inline-flex items-center text-sm font-semibold text-[#2D5A4A] hover:underline">
                  Meet Taran <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
                <Link href="/contact" className="inline-flex items-center text-sm font-semibold text-[#2D5A4A] hover:underline">
                  Get in touch <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: GraduationCap, title: "Trained Early Childhood Educator", desc: "Nearly 10 years of real classroom and childcare experience across Toronto and North York." },
                { icon: Baby, title: "Ages 18 Months to 12 Years", desc: "One of the only North York providers serving children from 18 months old." },
                { icon: MapPin, title: "We Come to You", desc: "Serving all North York neighbourhoods, schools, daycares, and homes." },
                { icon: SlidersHorizontal, title: "Fully Customized Programs", desc: "Every session tailored to your age group, goals, space, and schedule." },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-x-4 bg-[#F8F1E9] rounded-2xl p-5 border border-[#E8D5B7]">
                  <div className="w-10 h-10 bg-[#2D5A4A]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-[#2D5A4A]" />
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
          <h2 className="text-5xl tracking-tighter font-semibold heading-serif">Every program. Every age. Across North York.</h2>
          <p className="mt-4 text-[#1F2E2A]/60 max-w-xl mx-auto">From toddler yoga to school wellness weeks to birthday parties across North York.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { emoji: "🏫", title: "School and Daycare Yoga Programs", desc: "Classroom-ready yoga and mindfulness sessions for North York schools, Montessori programs, and childcare centres. Sessions 30 to 45 minutes. Wellness weeks, ongoing series, and single sessions available.", link: "/schools", linkText: "School programs" },
            { emoji: "🌿", title: "After School Classes", desc: "Weekly kids yoga classes in small groups for toddlers, preschoolers, and school age children across North York. Fun, calming, and developmentally appropriate for every age from 18 months to 12 years.", link: "/families", linkText: "After school classes" },
            { emoji: "🍼", title: "Toddler Yoga North York", desc: "Playful, song-based yoga for children from 18 months old. Short sessions designed specifically for how very young children learn and move.", link: "/toddler-yoga-toronto", linkText: "Toddler yoga" },
            { emoji: "🧘", title: "Children's Mindfulness", desc: "Practical mindfulness programs for North York children. Breathing games, body awareness, guided relaxation, and emotional regulation activities.", link: "/mindfulness-for-kids-toronto", linkText: "Mindfulness programs" },
            { emoji: "🎂", title: "Yoga Birthday Parties", desc: "Magical yoga birthday party experiences for children across North York. We come to your home, condo, or party venue. Fully themed for ages 3 to 12.", link: "/yoga-birthday-party-toronto", linkText: "Birthday parties" },
            { emoji: "👨‍👩‍👧", title: "Family Yoga Workshops", desc: "Family yoga experiences that bring North York parents and children together through mindful movement, breathing, and connection.", link: "/contact", linkText: "Book a workshop" },
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
                {item.linkText} <ArrowRight className="h-3 w-3 ml-2" />
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
              <h3 className="text-3xl font-semibold tracking-tight heading-serif mb-4">Bring professional yoga to your North York school</h3>
              <p className="text-white/75 mb-8 leading-relaxed">We work with public schools, private schools, Montessori programs, and childcare centres across North York. Single sessions, wellness weeks, and ongoing programs available.</p>
              <Link href="/schools" className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#2D5A4A] font-semibold rounded-2xl hover:bg-[#F8F1E9] transition text-sm">
                Learn about school programs
              </Link>
            </div>
            <div className="bg-white rounded-3xl p-10 border border-[#E8D5B7]">
              <h3 className="text-3xl font-semibold tracking-tight heading-serif mb-4">Weekly classes and private sessions for your child</h3>
              <p className="text-[#1F2E2A]/70 mb-8 leading-relaxed">After school weekly classes, private home sessions, toddler yoga, birthday parties, and family workshops. Available across all North York neighbourhoods for children from 18 months to 12 years.</p>
              <Link href="/families" className="inline-flex items-center justify-center px-8 py-3 bg-[#2D5A4A] text-white font-semibold rounded-2xl hover:bg-[#1F2E2A] transition text-sm">
                Explore family programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-[#2D5A4A] text-white rounded-3xl p-10 md:p-14">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex gap-1 text-[#F4D35E] justify-center mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4" fill="currentColor" strokeWidth={0} />)}
            </div>
            <blockquote className="text-xl md:text-2xl leading-relaxed font-light italic mb-6">
              "I have only been here twice and I can tell you that the atmosphere is cozy, welcoming and the staff there are very professional. I'd highly recommend them for whoever is asking."
            </blockquote>
            <div className="text-white/70 text-sm">Tioclassic Beauty saloon &middot; Google Review</div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Benefits North York teachers and parents see every day</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "🧠", title: "Improved Focus", desc: "Children pay attention longer and transition between activities more smoothly. North York teachers report fewer classroom disruptions." },
            { icon: "😊", title: "Emotional Balance", desc: "Kids gain practical tools to manage big feelings and reduce meltdowns at school and at home." },
            { icon: "🤝", title: "Social Skills", desc: "Build confidence, kindness, and cooperation through shared movement and mindfulness activities." },
            { icon: "🌙", title: "Better Sleep and Calm", desc: "North York parents consistently tell us their children are calmer at home and sleep better after classes." }
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

      {/* NEIGHBOURHOODS */}
      <section className="bg-white border-y border-[#E8D5B7] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Every corner of North York</h2>
            <p className="mt-3 text-[#1F2E2A]/60 max-w-xl mx-auto">We deliver programs across all North York communities. If you do not see yours, contact us.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              "Willowdale", "Newtonbrook", "Bathurst Manor", "Lawrence Park North",
              "Don Mills", "York Mills", "Bayview Village", "Lansing",
              "Yonge and Sheppard", "Yonge and Eglinton", "Wilson Heights", "Finch West",
              "Jane and Finch", "Black Creek", "Clanton Park", "Englemount"
            ].map((area, index) => (
              <div key={index} className="bg-[#F8F1E9] rounded-2xl px-3 py-2.5 text-xs text-center font-medium text-[#2D5A4A] border border-[#E8D5B7]">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Questions from North York schools and families</h2>
        </div>

        <div className="space-y-4">
          {[
            { q: "Which areas of North York do you serve?", a: "We serve all of North York including Willowdale, Newtonbrook, Bathurst Manor, Lawrence Park North, Don Mills, York Mills, Bayview Village, Lansing, and communities along Yonge, Sheppard, Wilson, Finch, and Jane corridors." },
            { q: "What is the youngest age you work with in North York?", a: "We accept children from 18 months old. Our toddler yoga program is specifically designed for children 18 months to 3 years and is one of the only programs in North York led by someone with a formal early childhood education background." },
            { q: "Do you work with public schools in North York?", a: "Yes. We work with both public and private schools across North York. We can design programs that align with your school's wellness goals and curriculum. Contact us to discuss becoming an approved external provider for your school board." },
            { q: "How much do programs cost in North York?", a: "Pricing depends on the program type, frequency, and group size. We offer flexible packages for schools, daycares, and families. Contact us for a custom proposal tailored to your North York school or family." },
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
          <h2 className="text-4xl md:text-5xl tracking-tighter font-semibold heading-serif mb-4">
            Bring kids yoga to your North York school or family today
          </h2>
          <p className="text-white/75 text-xl mb-10 max-w-2xl mx-auto">
            We respond within 1 to 2 business days. No obligation. Just a friendly conversation about how we can support the children in your care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact" className="inline-flex items-center justify-center gap-x-3 px-10 py-4 bg-[#F4D35E] text-[#1F2E2A] font-semibold rounded-full text-lg hover:bg-[#f7dd7f] transition">
              Request a Program
            </Link>
            <a href="tel:6478568206" className="inline-flex items-center justify-center gap-x-3 px-10 py-4 border border-white/40 text-white font-semibold rounded-full text-lg hover:bg-white/10 transition">
              <Phone className="h-4 w-4" /> (647) 856-8206
            </a>
          </div>
          <p className="text-white/50 text-sm">Serving North York and all of Toronto since 2018</p>
        </div>
      </section>
    </>
  );
}