import React from 'react';
import Link from 'next/link';
import type { LocationPage } from '@/lib/locations';
import { PageHero, Section, Panel, Quote, Faq, ClosingCTA, display } from './Kit';

const TINTS = ['bg-[#E4EEDF]', 'bg-[#FBEFC2]', 'bg-[#F6E3D3]'];
const linkCls = 'font-semibold text-[#2D5A4A] underline decoration-[#F4D35E] decoration-4 underline-offset-8 hover:decoration-[#2D5A4A]';

export default function LocationTemplate({ page }: { page: LocationPage }) {
  return (
    <>
      <PageHero
        title={page.h1}
        lead={page.lead}
        actions={[
          { href: '/contact', label: 'Request a program' },
          { href: '/schools', label: 'For schools and daycares' },
        ]}
        note={`Serving ${page.name} since 2018. Ages 18 months to 12 years.`}
      />

      <Section>
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-start">
          <div>
            <h2 className={`${display} text-3xl md:text-[2.6rem] leading-tight font-semibold`}>{page.aboutHeading}</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#3d4f49] max-w-2xl">
              {page.aboutParagraphs.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
            </div>
            <div className="mt-8 flex gap-8">
              <Link href="/about" className={linkCls}>Meet Taran</Link>
              <Link href="/contact" className={linkCls}>Get in touch</Link>
            </div>
          </div>
          <Panel tone="sage">
            <ul className="space-y-6">
              {page.features.map((f) => (
                <li key={f.title}>
                  <h3 className={`${display} text-xl font-semibold`}>{f.title}</h3>
                  <p className="mt-1 text-[#3d4f49]">{f.desc}</p>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </Section>

      <Section tone="white" title={page.programsHeading} intro={page.programsIntro || undefined}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {page.programs.map((p, i) => (
            <Link key={p.title} href={p.link} className={`group rounded-[32px] p-7 flex flex-col ${TINTS[i % TINTS.length]} hover:ring-2 hover:ring-[#2D5A4A]/30 transition`}>
              <span className="w-14 h-14 rounded-full bg-white grid place-items-center text-3xl" aria-hidden="true">{p.emoji}</span>
              <h3 className={`${display} mt-5 text-2xl font-semibold leading-snug`}>{p.title}</h3>
              <p className="mt-3 text-[#3d4f49] leading-relaxed">{p.desc}</p>
              <span className="mt-auto pt-6 font-semibold text-[#2D5A4A] underline decoration-[#2D5A4A]/30 decoration-2 underline-offset-4 group-hover:decoration-[#2D5A4A]">{p.linkText}</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          {page.split.map((s, i) => (
            <Panel key={s.title} tone={i === 0 ? 'forest' : 'sun'} className="flex flex-col">
              <h3 className={`${display} text-3xl font-semibold leading-tight`}>{s.title}</h3>
              <p className={`mt-4 text-lg leading-relaxed ${i === 0 ? 'text-[#E4EEDF]' : 'text-[#4a4630]'}`}>{s.body}</p>
              <div className="mt-auto pt-8">
                <Link href={s.href} className={`inline-flex px-7 py-4 rounded-full font-semibold text-lg transition-colors ${i === 0 ? 'bg-[#F4D35E] text-[#1F2E2A] hover:bg-[#f7dd7f]' : 'bg-[#1F2E2A] text-[#FFFCF5] hover:bg-black'}`}>
                  {s.label}
                </Link>
              </div>
            </Panel>
          ))}
        </div>
      </Section>

      <Section tone="sage" title={page.quotesHeading}>
        {page.quotes.length === 1 ? (
          <div className="max-w-4xl"><Quote big body={page.quotes[0].body} name={page.quotes[0].name} /></div>
        ) : (
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12">
            <Quote big body={page.quotes[0].body} name={page.quotes[0].name} />
            <div className="space-y-7">
              {page.quotes.slice(1).map((q) => <Quote key={q.name} body={q.body} name={q.name} />)}
            </div>
          </div>
        )}
      </Section>

      {page.benefits && page.benefits.length > 0 && (
        <Section title={page.benefitsHeading}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
            {page.benefits.map((b, i) => (
              <div key={b.title}>
                <span className={`block w-10 h-10 rounded-full ${['bg-[#2D5A4A]', 'bg-[#A7C4A0]', 'bg-[#F4D35E]', 'bg-[#E07A5F]'][i % 4]}`} aria-hidden="true" />
                <h3 className={`${display} mt-4 text-xl font-semibold`}>{b.title}</h3>
                <p className="mt-2 text-[#5b665f] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {page.steps && page.steps.length > 0 && (
        <Section tone="white" title={page.stepsHeading}>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {page.steps.map((s, i) => (
              <li key={s.title}>
                <span className={`${display} w-12 h-12 rounded-full grid place-items-center text-xl font-semibold ${['bg-[#2D5A4A] text-white', 'bg-[#A7C4A0] text-[#1F2E2A]', 'bg-[#F4D35E] text-[#1F2E2A]', 'bg-[#E07A5F] text-white'][i % 4]}`}>{i + 1}</span>
                <h3 className={`${display} mt-4 text-xl font-semibold`}>{s.title}</h3>
                <p className="mt-2 text-[#5b665f] leading-relaxed">{s.desc}</p>
              </li>
            ))}
          </ol>
        </Section>
      )}

      <Section tone="white" title={page.areasHeading} intro={page.areasIntro || `We deliver programs across ${page.name}. If you do not see your neighbourhood, get in touch.`}>
        <ul className="flex flex-wrap gap-2.5">
          {page.areas.map((a) => (
            <li key={a} className="px-4 py-2 rounded-full bg-[#E4EEDF] font-medium text-[#1F2E2A]">{a}</li>
          ))}
        </ul>
        <Link href="/locations" className={`${linkCls} mt-9 inline-block`}>See every area we serve</Link>
      </Section>

      <Section title={page.faqHeading}>
        <Faq items={page.faqs} />
      </Section>

      <ClosingCTA title={page.ctaHeading} body={page.ctaBody} />
    </>
  );
}
