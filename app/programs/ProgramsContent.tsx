import React from 'react';
import Link from 'next/link';
import { PageHero, Section, Panel, TickList, Faq, ClosingCTA, display } from '@/components/rd/Kit';
import { programFaqs } from './faqs';

const linkCls = 'font-semibold text-[#2D5A4A] underline decoration-[#F4D35E] decoration-4 underline-offset-8 hover:decoration-[#2D5A4A]';

const stages = [
  { name: 'Toddlers', ages: '18 months to 3 years', body: 'Short, playful sessions with songs, simple movements and lots of repetition and joy.', tone: 'bg-[#E4EEDF]' },
  { name: 'Preschool', ages: '3 to 5 years', body: 'Story-based classes, animal poses, breathing games and beginning mindfulness.', tone: 'bg-[#FBEFC2]' },
  { name: 'Early school age', ages: '5 to 8 years', body: 'Longer sessions with more poses and a focus on emotional awareness and self-regulation.', tone: 'bg-[#F6E3D3]' },
  { name: 'Older children', ages: '8 to 12 years', body: 'Deeper breathwork, mindfulness and yoga ideas through fun, relevant themes.', tone: 'bg-[#E4EEDF]' },
];

export default function ProgramsContent() {
  return (
    <>
      <PageHero
        title={<>Kids yoga and mindfulness programs in Toronto</>}
        lead="Joyful, developmentally appropriate classes for children from 18 months to 12 years, in schools, after-school programs and family settings across Toronto and the GTA."
        actions={[
          { href: '/contact', label: 'Request a program' },
          { href: '#school-programs', label: 'Browse programs' },
        ]}
      />

      <Section id="school-programs" title="For schools and childcare centres">
        <Panel tone="sage" className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
          <div>
            <h3 className={`${display} text-3xl font-semibold`}>School yoga programs</h3>
            <p className="mt-4 text-lg text-[#3d4f49] leading-relaxed">
              Professional, classroom-ready yoga and mindfulness sessions designed for the realities of school and daycare life in Toronto.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {['Classroom sessions, 30 to 45 min', 'Wellness weeks', 'Custom school packages', 'Assemblies and special events'].map((t) => (
                <li key={t} className="px-4 py-2 rounded-full bg-[#FFFCF5] font-medium">{t}</li>
              ))}
            </ul>
            <Link href="/schools" className={`${linkCls} mt-8 inline-block`}>More about school partnerships</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-8">
            <div>
              <h4 className={`${display} text-xl font-semibold`}>What children experience</h4>
              <TickList className="mt-4 !text-base" items={['Animal and nature-themed poses', 'Breathing exercises and games', 'Calm-down techniques', 'Movement, stories and imagination']} />
            </div>
            <div>
              <h4 className={`${display} text-xl font-semibold`}>What your school gets</h4>
              <TickList className="mt-4 !text-base" items={['Better focus and attention', 'Better emotional regulation', 'A calmer classroom', 'Support for positive behaviour']} />
            </div>
          </div>
        </Panel>
      </Section>

      <Section tone="white" title="For families">
        <div className="grid md:grid-cols-2 gap-6">
          <Panel tone="sun" className="flex flex-col">
            <h3 className={`${display} text-3xl font-semibold`}>After-school yoga classes</h3>
            <p className="mt-4 text-lg text-[#4a4630] leading-relaxed">Weekly small-group classes where children unwind, move, practise mindfulness and build confidence.</p>
            <dl className="mt-6 space-y-3 text-lg">
              <div><dt className="font-semibold inline">Ages: </dt><dd className="inline">toddlers, preschool and school age</dd></div>
              <div><dt className="font-semibold inline">Length: </dt><dd className="inline">45 to 60 minutes, up to 12 children</dd></div>
              <div><dt className="font-semibold inline">Themes: </dt><dd className="inline">breathing games, animal adventures, emotions, gratitude, nature</dd></div>
            </dl>
            <p className="mt-6 text-[#4a4630]">Offered at select Toronto locations. Ask about availability or hosting a class at your centre.</p>
            <Link href="/after-school-yoga-toronto" className={`${linkCls} mt-auto pt-8 self-start`}>More about after-school yoga</Link>
          </Panel>
          <Panel tone="white" className="flex flex-col">
            <h3 className={`${display} text-3xl font-semibold`}>Workshops, camps and parties</h3>
            <p className="mt-4 text-lg text-[#3d4f49] leading-relaxed">One-time or short-series experiences for camps, community events, celebrations and themed days. Themes, length (30 to 90 minutes) and age groups are all customizable.</p>
            <ul className="mt-6 space-y-4">
              {[
                { href: '/yoga-birthday-party-toronto', label: 'Yoga birthday parties' },
                { href: '/march-break-summer-camp-yoga-toronto', label: 'March Break and summer camps' },
                { href: '/mindfulness-workshops-for-kids-toronto', label: 'Mindfulness workshops' },
                { href: '/toddler-yoga-toronto', label: 'Toddler yoga' },
                { href: '/mindfulness-for-kids-toronto', label: 'Mindfulness for kids' },
              ].map((l) => (
                <li key={l.href}><Link href={l.href} className={linkCls}>{l.label}</Link></li>
              ))}
            </ul>
          </Panel>
        </div>
      </Section>

      <Section title="Programs for every stage" intro="Every child can do yoga. We meet them where they are.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stages.map((st) => (
            <div key={st.name} className={`rounded-[32px] p-7 ${st.tone}`}>
              <h3 className={`${display} text-2xl font-semibold`}>{st.name}</h3>
              <p className="mt-1 font-semibold text-[#2D5A4A]">{st.ages}</p>
              <p className="mt-4 text-[#3d4f49] leading-relaxed">{st.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="white" title="Common questions about our programs">
        <Faq items={programFaqs} />
      </Section>

      <ClosingCTA
        title="Not sure which program fits?"
        body="Tell us about your children and setting and we will suggest the right fit, usually within 1 to 2 business days."
      />
    </>
  );
}
