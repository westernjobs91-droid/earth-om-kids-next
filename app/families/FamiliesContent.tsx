import React from 'react';
import Link from 'next/link';
import { reviews } from '@/lib/reviews';
import { PageHero, Section, Panel, TickList, Quote, ClosingCTA, display } from '@/components/rd/Kit';
import RainbowArc from '@/components/RainbowArc';

const ages = [
  { name: 'Toddlers', ages: '18 months to 3 years', body: 'Short, playful sessions with songs, simple movements, repetition and lots of joy.', tone: 'bg-[#E4EEDF]' },
  { name: 'Preschool', ages: '3 to 5 years', body: 'Story-based classes with animal poses, breathing games and beginning mindfulness.', tone: 'bg-[#FBEFC2]' },
  { name: 'School age', ages: '5 to 10 years', body: 'Longer sessions with more poses, emotional awareness and self-regulation tools.', tone: 'bg-[#F6E3D3]' },
];

const gains = ['Better focus and attention', 'Tools for big feelings', 'More confidence', 'Calmer transitions', 'Stronger body awareness', 'Kindness and cooperation', 'Better sleep habits', 'Ways to handle stress'];

export default function FamiliesContent() {
  const ajwinder = reviews.find((r) => r.name === 'Ajwinder Kaur')!;
  const kanwal = reviews.find((r) => r.name === 'Kanwalpreet Kaur')!;

  return (
    <>
      <PageHero
        title={<>Kids yoga and mindfulness for Toronto families</>}
        lead="Playful after-school classes, birthday parties and workshops that help children feel calm, confident and connected."
        actions={[
          { href: '/contact', label: 'Book for your child' },
          { href: '/programs', label: 'See all programs' },
        ]}
        aside={<RainbowArc className="w-64 md:w-80" />}
      />

      <Section title="Why families choose us">
        <div className="grid md:grid-cols-3 gap-x-10 gap-y-8">
          {[
            { t: 'Playful and age-appropriate', b: 'Classes for toddlers, preschoolers and school-age children, built on stories, games and imagination.' },
            { t: 'Builds calm and confidence', b: 'Simple tools to manage big feelings, focus better and feel good in their own bodies.' },
            { t: 'Easy for busy families', b: 'After-school classes and weekend workshops that fit your week.' },
          ].map((x) => (
            <div key={x.t}>
              <h3 className={`${display} text-xl font-semibold`}>{x.t}</h3>
              <p className="mt-2 text-[#5b665f] text-lg leading-relaxed">{x.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="white" title="Weekly after-school classes" intro="Small groups, grouped by age so every child is at the right level.">
        <div className="grid md:grid-cols-3 gap-5">
          {ages.map((a) => (
            <div key={a.name} className={`rounded-[32px] p-8 ${a.tone}`}>
              <h3 className={`${display} text-2xl font-semibold`}>{a.name}</h3>
              <p className="mt-1 font-semibold text-[#2D5A4A]">{a.ages}</p>
              <p className="mt-4 text-[#3d4f49] leading-relaxed">{a.body}</p>
            </div>
          ))}
        </div>
        <Link href="/after-school-yoga-toronto" className="mt-9 inline-block font-semibold text-[#2D5A4A] underline decoration-[#F4D35E] decoration-4 underline-offset-8">
          More about after-school yoga
        </Link>
      </Section>

      <Section title="Birthday parties and workshops">
        <div className="grid md:grid-cols-2 gap-6">
          <Panel tone="sun" className="flex flex-col">
            <h3 className={`${display} text-3xl font-semibold`}>Yoga birthday parties</h3>
            <p className="mt-3 text-lg text-[#4a4630]">A fun, active and mindful party your child and their friends will remember. Ages 3 to 12, at your home or venue.</p>
            <div className="mt-auto pt-8">
              <Link href="/yoga-birthday-party-toronto" className="inline-flex px-7 py-4 rounded-full bg-[#1F2E2A] text-[#FFFCF5] font-semibold text-lg hover:bg-black transition-colors">Plan a party</Link>
            </div>
          </Panel>
          <Panel tone="sage" className="flex flex-col">
            <h3 className={`${display} text-3xl font-semibold`}>Family yoga workshops</h3>
            <p className="mt-3 text-lg text-[#3d4f49]">Weekend workshops where parents and children practise together. Great for bonding and learning mindfulness as a family.</p>
            <div className="mt-auto pt-8">
              <Link href="/contact" className="inline-flex px-7 py-4 rounded-full bg-[#2D5A4A] text-[#FFFCF5] font-semibold text-lg hover:bg-[#244a3d] transition-colors">Ask about workshops</Link>
            </div>
          </Panel>
        </div>
      </Section>

      <Section tone="white" title="What your child will gain">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          <TickList items={gains} className="sm:columns-2 sm:block [&>li]:mb-3 [&>li]:break-inside-avoid" />
          <div className="space-y-7">
            <Quote body={ajwinder.body} name={ajwinder.name} />
            <Quote body={kanwal.body} name={kanwal.name} />
          </div>
        </div>
      </Section>

      <ClosingCTA
        title="Ready to help your child feel calmer and more confident?"
        body="We would love to welcome your child to a class or plan a special celebration."
        primary={{ href: '/contact', label: 'Book a class or party' }}
      />
    </>
  );
}
