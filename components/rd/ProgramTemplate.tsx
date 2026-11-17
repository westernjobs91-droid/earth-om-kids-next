import React from 'react';
import Link from 'next/link';
import type { ProgramPage, ProgramSection } from '@/lib/programPages';
import type { LandingPage } from '@/lib/landingPages';
import { PageHero, Section, Panel, Quote, Faq, ClosingCTA, display } from './Kit';

const TINTS = ['bg-[#E4EEDF]', 'bg-[#FBEFC2]', 'bg-[#F6E3D3]'];
const STEP = ['bg-[#2D5A4A] text-white', 'bg-[#A7C4A0] text-[#1F2E2A]', 'bg-[#F4D35E] text-[#1F2E2A]', 'bg-[#E07A5F] text-white'];
const linkCls = 'font-semibold text-[#2D5A4A] underline decoration-[#F4D35E] decoration-4 underline-offset-8 hover:decoration-[#2D5A4A]';

function Block({ s, i }: { s: ProgramSection; i: number }) {
  const tone = i % 2 === 0 ? 'paper' : 'white';
  switch (s.type) {
    case 'seo': {
      const [first, ...rest] = s.paragraphs;
      return (
        <Section tone={tone}>
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">
            <h2 className={`${display} text-3xl md:text-[2.4rem] leading-tight font-semibold`}>{s.heading}</h2>
            <div className="space-y-4 text-lg leading-relaxed text-[#3d4f49] max-w-2xl">
              <p className="text-xl text-[#1F2E2A]">{first}</p>
              {rest.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}
            </div>
          </div>
        </Section>
      );
    }
    case 'cards':
      return (
        <Section tone={tone} title={s.heading} intro={s.intro || undefined}>
          <div className={`grid gap-5 sm:grid-cols-2 ${s.items.length % 3 === 0 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'}`}>
            {s.items.map((c, k) => {
              const body = (
                <>
                  {c.emoji && <span className="w-14 h-14 rounded-full bg-white grid place-items-center text-3xl mb-5" aria-hidden="true">{c.emoji}</span>}
                  <h3 className={`${display} text-xl md:text-2xl font-semibold leading-snug`}>{c.title}</h3>
                  <p className="mt-3 text-[#3d4f49] leading-relaxed">{c.desc}</p>
                  {c.href && <span className="mt-auto pt-6 font-semibold text-[#2D5A4A] underline decoration-[#2D5A4A]/30 decoration-2 underline-offset-4">{c.label}</span>}
                </>
              );
              const cls = `rounded-[32px] p-7 flex flex-col ${TINTS[k % TINTS.length]}`;
              return c.href ? (
                <Link key={c.title} href={c.href} className={`${cls} hover:ring-2 hover:ring-[#2D5A4A]/30 transition`}>{body}</Link>
              ) : (
                <div key={c.title} className={cls}>{body}</div>
              );
            })}
          </div>
        </Section>
      );
    case 'steps':
      return (
        <Section tone={tone} title={s.heading} intro={s.intro || undefined}>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {s.items.map((st, k) => (
              <li key={st.title}>
                <span className={`${display} w-12 h-12 rounded-full grid place-items-center text-xl font-semibold ${STEP[k % 4]}`}>{k + 1}</span>
                <h3 className={`${display} mt-4 text-xl font-semibold`}>{st.title}</h3>
                <p className="mt-2 text-[#5b665f] leading-relaxed">{st.desc}</p>
              </li>
            ))}
          </ol>
        </Section>
      );
    case 'details':
      return (
        <Section tone={tone} title={s.heading} intro={s.intro || undefined}>
          <Panel tone="sun">
            <dl className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-7">
              {s.items.map((d) => (
                <div key={d.label}>
                  <dt className="text-[#4a4630] font-medium">{d.label}</dt>
                  <dd className={`${display} mt-1 text-xl md:text-2xl font-semibold leading-snug`}>{d.value}</dd>
                </div>
              ))}
            </dl>
          </Panel>
        </Section>
      );
    case 'quote':
      return (
        <Section tone="sage">
          <div className="max-w-4xl">
            <Quote big body={s.body} name={s.name} note={s.google === false ? '' : 'Google review'} />
          </div>
        </Section>
      );
    case 'faq':
      return (
        <Section tone={tone} title={s.heading}>
          <Faq items={s.items} />
        </Section>
      );
    case 'related':
      return (
        <Section tone={tone} title={s.heading}>
          <ul className="flex flex-wrap gap-x-8 gap-y-4">
            {s.items.map((r) => (
              <li key={r.href}><Link href={r.href} className={linkCls}>{r.label}</Link></li>
            ))}
          </ul>
        </Section>
      );
    case 'cta':
      return <ClosingCTA title={s.heading} body={s.body} primary={{ href: '/contact', label: s.label }} />;
  }
}

export default function ProgramTemplate({ page }: { page: ProgramPage }) {
  const actions = page.hero.actions.map((a) => (a.href === '/programs' ? { ...a, label: 'See all programs' } : a));
  return (
    <>
      <PageHero title={page.hero.title} lead={page.hero.lead} actions={actions} />
      {page.sections.map((s, i) => <Block key={i} s={s} i={i} />)}
    </>
  );
}

/** The three activity pages kept in lib/landingPages.ts use their own shape; map it onto the same sections. */
const LANDING_QUOTES: Record<string, { body: string; name: string }> = {
  'after-school-yoga-toronto': { body: 'We had a wonderful experience with Earth & Om kids! The sessions were fun, engaging and calming for the children.', name: 'Kanwalpreet Kaur' },
  'march-break-summer-camp-yoga-toronto': { body: 'The instructors are amazing with the children. They are patient, friendly, and always make the sessions fun and engaging. The kids really enjoy their yoga classes and are always excited when it\'s time for their session.', name: 'Catherine Maheu' },
  'mindfulness-workshops-for-kids-toronto': { body: 'The way the yoga sessions are taught are wonderful-engaging, gentle and fun, while still helping children develop mindfulness, confidence and relaxation.', name: 'Ajwinder Kaur' },
};

export function fromLanding(p: LandingPage): ProgramPage {
  const q = LANDING_QUOTES[p.slug];
  return {
    slug: p.slug,
    hero: { title: p.h1, lead: p.intro, actions: [{ href: '/contact', label: p.ctaLabel }, { href: '/programs', label: 'See all programs' }] },
    sections: [
      { type: 'seo', heading: p.seoHeading, paragraphs: p.seoParagraphs },
      { type: 'cards', heading: p.highlightsHeading, items: p.highlights.map((h) => ({ title: h.title, desc: h.desc })) },
      { type: 'details', heading: 'Details at a glance', items: p.details },
      ...(q ? [{ type: 'quote' as const, ...q }] : []),
      { type: 'faq', heading: 'Frequently asked questions', items: p.faqs },
      { type: 'related', heading: 'Related programs', items: p.related },
      { type: 'cta', heading: p.ctaHeading, body: p.ctaText, label: p.ctaLabel },
    ],
  };
}
