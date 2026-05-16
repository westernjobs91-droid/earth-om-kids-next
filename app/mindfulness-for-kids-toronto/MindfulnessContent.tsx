'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function MindfulnessContent() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* Hero */}
      <div className="text-center mb-20">
        <div className="inline-block px-4 py-1 bg-[#A7C4A0]/20 text-[#2D5A4A] text-xs font-semibold tracking-[1.5px] rounded-full mb-4">
          MINDFULNESS FOR KIDS TORONTO
        </div>
        <h1 className="text-5xl md:text-6xl tracking-tighter font-semibold heading-serif mb-4">
          Mindfulness for Kids in Toronto
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-[#1F2E2A]/70">
          Professional children's mindfulness programs for Toronto schools, daycares, and families. Practical tools that help children manage stress, improve focus, and build lifelong emotional resilience. Ages 18 months to 12 years.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-x-3 px-10 py-4 bg-[#2D5A4A] hover:bg-[#1F2E2A] transition text-white font-semibold rounded-3xl text-lg"
          >
            Book a Mindfulness Program
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
          Children's Mindfulness Programs Across Toronto and the GTA
        </h2>
        <div className="prose prose-lg max-w-none text-[#1F2E2A]/75 space-y-4">
          <p>
            Children in Toronto today are navigating more stress, stimulation, and emotional complexity than ever before. Screens, busy schedules, academic pressure, and the pace of city life all affect how children feel, focus, and regulate themselves. Mindfulness gives children practical, age-appropriate tools to slow down, breathe, and reconnect with themselves.
          </p>
          <p>
            Earth and OM Kids delivers professional mindfulness programs for children across Toronto and the Greater Toronto Area including North York, Scarborough, Etobicoke, Downtown Toronto, Vaughan, Mississauga, and Markham. Our programs are led by Taran Kaur, a trained Early Childhood Educator with nearly 10 years of experience in Toronto childcare and school communities.
          </p>
          <p>
            Mindfulness for children looks very different from adult mindfulness. It is not about sitting in silence or clearing the mind. For young children, mindfulness happens through movement, breathing games, sensory activities, guided stories, and simple emotional check-ins. Our programs are always playful, engaging, and developmentally appropriate for the age group being served.
          </p>
          <p>
            We offer children's mindfulness programs for Toronto schools, daycares, Montessori programs, and families. Programs range from single wellness sessions and PD day workshops to ongoing weekly visits and multi-week mindfulness series. Every program is fully customized to the goals, age group, and environment of your Toronto school or family.
          </p>
          <p>
            Research consistently shows that children who practice mindfulness regularly demonstrate improved attention, better emotional regulation, reduced anxiety, and stronger social skills. These are not abstract benefits they are changes that Toronto teachers, directors, and parents notice in real classrooms and real homes within weeks of starting a program.
          </p>
        </div>
      </section>

      {/* What Mindfulness Looks Like */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">WHAT WE TEACH</div>
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">What Children's Mindfulness Actually Looks Like</h2>
          <p className="mt-3 text-[#1F2E2A]/60 max-w-xl mx-auto">Not sitting in silence. Real, playful, and age-appropriate tools children actually use.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "fa-wind",
              title: "Breathing Techniques",
              desc: "Fun, memorable breathing exercises like balloon breathing, bunny breathing, and 5 finger breathing that children can use independently when they feel overwhelmed."
            },
            {
              icon: "fa-person-walking",
              title: "Mindful Movement",
              desc: "Slow intentional movement through yoga poses and body scans that help children connect physical sensations with emotional states."
            },
            {
              icon: "fa-ear-listen",
              title: "Sensory Awareness",
              desc: "Simple activities that engage all five senses to anchor children in the present moment. Particularly effective for anxious or easily distracted children."
            },
            {
              icon: "fa-heart",
              title: "Emotional Check-ins",
              desc: "Age-appropriate tools for naming and identifying feelings. Children learn a feelings vocabulary that supports communication and self-regulation."
            },
            {
              icon: "fa-cloud",
              title: "Guided Relaxation",
              desc: "Short guided visualizations and relaxation stories that calm the nervous system and give children a sense of safety and peace."
            },
            {
              icon: "fa-sun",
              title: "Gratitude and Positivity",
              desc: "Simple gratitude practices that shift children's attention toward what is good in their lives, building optimism and resilience over time."
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

      {/* Who It Is For */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Who Our Mindfulness Programs Are For</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Toronto Schools and Daycares",
              desc: "We deliver children's mindfulness programs to TDSB schools, private schools, Montessori programs, and childcare centres across Toronto. Programs are designed to support classroom wellness goals and integrate with your existing schedule.",
              link: "/schools",
              linkText: "School programs"
            },
            {
              title: "Families at Home",
              desc: "Private mindfulness sessions for families in Toronto and the GTA. Learn practical techniques together that you can use at home, during homework, at bedtime, and whenever your child needs to reset.",
              link: "/families",
              linkText: "Family programs"
            },
            {
              title: "Special Needs and Diverse Learners",
              desc: "As a trained Early Childhood Educator, Taran has extensive experience adapting mindfulness programs for children with anxiety, sensory processing differences, ADHD, and diverse learning profiles. Every child is welcome.",
              link: "/contact",
              linkText: "Get in touch"
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

      {/* Benefits */}
      <section className="mb-20 bg-[#F8F1E9] rounded-3xl p-10 md:p-14">
        <div className="text-center mb-10">
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Benefits of Mindfulness for Children</h2>
          <p className="mt-3 text-[#1F2E2A]/60 max-w-xl mx-auto">What Toronto teachers, directors, and parents notice after just a few sessions.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "🧠", title: "Better Focus", desc: "Children pay attention longer and transition between activities more smoothly. Teachers notice fewer disruptions." },
            { icon: "😊", title: "Reduced Anxiety", desc: "Breathing techniques give children immediate tools to calm their nervous system when worry or stress arises." },
            { icon: "💤", title: "Improved Sleep", desc: "Families consistently report that children fall asleep more easily and wake less frequently after starting mindfulness programs." },
            { icon: "🤝", title: "Stronger Relationships", desc: "Mindful children are more empathetic, patient, and able to manage conflict with peers and siblings." }
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
            <div className="text-4xl mb-6">🍃</div>
            <blockquote className="text-xl md:text-2xl leading-relaxed font-light italic mb-6">
              "In my years working in early childhood settings, I saw so many children carrying stress they did not have words for. Mindfulness gave them a language through their bodies and breath to feel safe, strong, and calm."
            </blockquote>
            <div className="text-white/70 text-sm">Taran Kaur, Founder of Earth and OM Kids</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Questions About Kids Mindfulness in Toronto</h2>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {[
            {
              q: "What is mindfulness for kids?",
              a: "Mindfulness for kids is the practice of helping children pay attention to the present moment through breathing, movement, and body awareness activities. For children it looks like breathing games, yoga poses, guided relaxation, and sensory activities not sitting in silence. It builds emotional regulation, focus, and resilience."
            },
            {
              q: "What age can children start mindfulness?",
              a: "Children can begin age-appropriate mindfulness activities from as young as 18 months old. Earth and OM Kids offers mindfulness programs for children from 18 months to 12 years across Toronto and the GTA, with each program fully tailored to the developmental stage of the child."
            },
            {
              q: "How is mindfulness different from kids yoga?",
              a: "Kids yoga uses physical poses and movement as the primary vehicle, while mindfulness focuses more broadly on present moment awareness through breathing, sensory activities, guided relaxation, and emotional check-ins. Our programs blend both approaches so children get the benefits of movement and mindfulness together."
            },
            {
              q: "Can mindfulness help a child with anxiety?",
              a: "Yes. Research consistently shows that mindfulness practices reduce anxiety in children by activating the calming part of the nervous system. Simple breathing techniques and body awareness exercises give children practical tools to manage worry and stress in real time. We have extensive experience adapting programs for children with anxiety."
            },
            {
              q: "Do you offer mindfulness programs for Toronto schools and daycares?",
              a: "Yes. We deliver children's mindfulness programs to schools, daycares, and childcare centres across Toronto and the GTA. Programs include single sessions, wellness weeks, and ongoing weekly visits. All programs are designed to fit your school schedule and curriculum goals."
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
        <div className="text-4xl mb-4">🍃</div>
        <h2 className="text-3xl tracking-tighter font-semibold mb-4">
          Ready to Bring Mindfulness to Your Child or School?
        </h2>
        <p className="text-white/80 mb-8 max-w-md mx-auto">
          Get in touch today to book a children's mindfulness program for your Toronto school, daycare, or family. We respond within 1 to 2 business days.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-x-3 px-10 py-4 bg-white text-[#2D5A4A] font-semibold rounded-3xl text-lg hover:bg-[#F8F1E9] transition"
          >
            Book a Mindfulness Program
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