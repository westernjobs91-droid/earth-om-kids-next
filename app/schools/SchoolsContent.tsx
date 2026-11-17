import React from 'react';
import Link from 'next/link';
import { reviews } from '@/lib/reviews';
import { PageHero, Section, Panel, TickList, Quote, ClosingCTA, display } from '@/components/rd/Kit';

const reasons = [
  { title: 'Led by a trained Early Childhood Educator', body: 'Deep understanding of child development, classroom dynamics and how to support diverse learners.' },
  { title: 'Fits your timetable', body: '30 to 45 minute sessions that slot into the school day with very little disruption.' },
  { title: 'Results teachers notice', body: 'Better focus and emotional regulation, fewer disruptions and calmer transitions.' },
  { title: 'Built around your school', body: 'We tailor every program to your goals, age groups, space and schedule.' },
  { title: 'Inclusive by design', body: 'Experienced with mixed-age groups and children with diverse learning needs.' },
  { title: 'Partners who come back', body: 'Many schools return year after year for the consistent quality.' },
];

const sessionFlow = [
  'Gentle arrival and centering',
  'Warm-up movement and animal poses',
  'Breathing games and mindfulness activities',
  'Story-based yoga or a themed exploration',
  'Calm-down and reflection time',
];

const themes = ['Focus and attention', 'Emotional regulation', 'Calm transitions', 'Gratitude and kindness', 'Body awareness', 'Energy and calm', 'Mindful listening', 'Friendship and cooperation'];

const partners = [
  'PLASP', 'Le Petit Chaperon Rouge', 'Brighpath Academy', 'Smart Little Children', 'Lambton-Kingsway Before & After School',
  'Smart Start Montessori', 'Rec Room Childcare Centre', 'Northwest Childhood Learning Centre', 'Isabella Walton Childcare Centre',
  'Abiona Centre, EarlyON', 'Sunburst Children’s Centre', 'Heritage Childcare Services', 'St Jude Childcare Centre',
  'Junction Daycare Centre', 'Follow the Child Daycare Centre', 'Lakeside Co-operative Play School', 'Palmerston Community Daycare',
  'Cardinal Leger Child Care Centre',
];

const pastPartners = [
  'McNicoll Avenue Child Care Program', 'Kids Connect Daycare', 'Beach Hill Montessori', 'Abacus Montessori', 'Lycée Français Toronto',
  'Sunny Faces Daycare', 'East Toronto Village Children’s Centre', 'Phoenix Childcare Centre', 'Cliffwood Community Child Care',
  'Three R’s Early Learning Centre', 'Midland Childcare Centre',
];

const byName = (n: string) => reviews.find((r) => r.name === n)!;

export default function SchoolsContent() {
  const sunburst = byName("Sunburst Children's Centre");
  const lynn = byName('Lynn Lewis');
  const slc = byName('SLC Daycare');

  return (
    <>
      <PageHero
        title={<>Yoga and mindfulness for Toronto schools and childcare centres</>}
        lead="Classroom-ready sessions that help children focus, settle and handle big feelings. Trusted by 25+ schools and centres across Toronto and the GTA."
        actions={[
          { href: '/contact', label: 'Request a school program' },
          { href: 'tel:+16478568206', label: 'Call (647) 856-8206' },
        ]}
        note="We come to you. 30 to 45 minutes, in your classroom."
      />

      <Section title="Designed for real classrooms">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-9">
          {reasons.map((r) => (
            <div key={r.title}>
              <h3 className={`${display} text-xl font-semibold leading-snug`}>{r.title}</h3>
              <p className="mt-2 text-[#5b665f] leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="white" title="What a school program looks like">
        <div className="grid md:grid-cols-2 gap-6">
          <Panel tone="sage">
            <h3 className={`${display} text-2xl font-semibold`}>Each 30 to 45 minute session</h3>
            <ol className="mt-6 space-y-4">
              {sessionFlow.map((step, i) => (
                <li key={step} className="flex gap-4 items-start text-lg">
                  <span className={`${display} w-9 h-9 shrink-0 rounded-full bg-[#2D5A4A] text-[#FFFCF5] grid place-items-center font-semibold`}>{i + 1}</span>
                  <span className="pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </Panel>
          <Panel tone="sun">
            <h3 className={`${display} text-2xl font-semibold`}>Popular themes</h3>
            <p className="mt-3 text-[#4a4630]">Pick one for a term, or rotate through them.</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {themes.map((t) => (
                <li key={t} className="px-4 py-2 rounded-full bg-[#FFFCF5] font-medium">{t}</li>
              ))}
            </ul>
            <h3 className={`${display} text-2xl font-semibold mt-10`}>Formats</h3>
            <TickList className="mt-4" items={['Weekly classroom sessions', 'Wellness weeks', 'Assemblies and special events', 'Custom school packages']} />
          </Panel>
        </div>
      </Section>

      <Section title="Schools and centres we work with" intro="Current partners across Toronto and the GTA.">
        <ul className="flex flex-wrap gap-x-9 gap-y-4">
          {partners.map((p) => (
            <li key={p} className={`${display} text-xl md:text-2xl font-medium text-[#2D5A4A]`}>{p}</li>
          ))}
        </ul>
        <h3 className={`${display} mt-12 text-xl font-semibold`}>Past programs</h3>
        <p className="mt-3 text-[#5b665f] leading-relaxed max-w-4xl">{pastPartners.join(', ')}.</p>
      </Section>

      <Section tone="sage">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12">
          <Quote big body={sunburst.body} name={sunburst.name} />
          <div className="space-y-7">
            <Quote body={lynn.body} name={lynn.name} />
            <Quote body={slc.body} name={slc.name} />
          </div>
        </div>
      </Section>

      <Section title="Questions schools ask">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl">
          {[
            { q: 'Where do sessions happen?', a: 'In your classroom, gym or any open space. We bring everything we need.' },
            { q: 'How long is a session?', a: 'Usually 30 to 45 minutes, matched to the age group and your timetable.' },
            { q: 'Can you adapt for different learners?', a: 'Yes. We regularly adapt sessions for mixed ages and children with diverse needs.' },
            { q: 'How do we start?', a: 'Send a request and we reply within 1 to 2 business days with a plan and pricing.' },
          ].map((f) => (
            <div key={f.q}>
              <h3 className={`${display} text-xl font-semibold`}>{f.q}</h3>
              <p className="mt-2 text-[#5b665f] text-lg leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
        <Link href="/programs" className="mt-10 inline-block font-semibold text-[#2D5A4A] underline decoration-[#F4D35E] decoration-4 underline-offset-8">
          See all programs
        </Link>
      </Section>

      <ClosingCTA
        title="Ready to bring calm and focus to your school?"
        body="Tell us about your classrooms and goals. We reply within 1 to 2 business days with a custom plan."
        primary={{ href: '/contact', label: 'Request a school program' }}
      />
    </>
  );
}
