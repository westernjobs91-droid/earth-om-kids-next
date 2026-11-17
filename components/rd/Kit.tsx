import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import RainbowArc from '@/components/RainbowArc';
import s from './rd.module.css';

/* Shared building blocks for the redesign: one look across every page. */

export const display = s.display;

type Action = { href: string; label: string; tone?: 'sun' | 'outline' | 'forest' | 'ink' };

export function ButtonLink({ href, label, tone = 'sun' }: Action) {
  const tones = {
    sun: 'bg-[#F4D35E] text-[#1F2E2A] hover:bg-[#f7dd7f]',
    outline: 'border-2 border-[#FFFCF5]/70 text-[#FFFCF5] hover:bg-white/10',
    forest: 'bg-[#2D5A4A] text-[#FFFCF5] hover:bg-[#244a3d]',
    ink: 'bg-[#1F2E2A] text-[#FFFCF5] hover:bg-black',
  };
  const cls = `inline-flex justify-center items-center px-7 py-4 rounded-full font-semibold text-lg transition-colors ${tones[tone]}`;
  return href.startsWith('tel:') || href.startsWith('mailto:') ? (
    <a href={href} className={cls}>{label}</a>
  ) : (
    <Link href={href} className={cls}>{label}</Link>
  );
}

export function Hills({ fill = '#FFFCF5' }: { fill?: string }) {
  return (
    <svg className="absolute bottom-0 left-0 w-full h-[50px] md:h-[100px] pointer-events-none" viewBox="0 0 1440 110" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0,70 C220,20 420,20 640,58 C860,96 1080,96 1260,52 C1340,32 1400,30 1440,36 L1440,110 L0,110 Z" fill="#A7C4A0" opacity="0.5" />
      <path d="M0,88 C240,52 470,56 720,82 C960,106 1200,98 1440,70 L1440,110 L0,110 Z" fill={fill} />
    </svg>
  );
}

/** Forest-green page header with the rolling-hills edge. */
export function PageHero({
  title,
  lead,
  actions = [],
  aside,
  note,
}: {
  title: React.ReactNode;
  lead?: React.ReactNode;
  actions?: Action[];
  aside?: React.ReactNode;
  note?: React.ReactNode;
}) {
  return (
    <section className={s.hero}>
      <div className={`max-w-6xl mx-auto px-6 pt-14 pb-28 md:pt-20 md:pb-36 grid gap-12 items-center ${aside ? 'lg:grid-cols-[1.25fr_0.75fr]' : ''}`}>
        <div className="max-w-3xl">
          <h1 className={`${s.display} ${s.pageTitle}`}>{title}</h1>
          {lead && <p className="mt-6 text-xl leading-relaxed text-[#E4EEDF] max-w-2xl">{lead}</p>}
          {actions.length > 0 && (
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              {actions.map((a, i) => (
                <ButtonLink key={a.href + a.label} {...a} tone={a.tone ?? (i === 0 ? 'sun' : 'outline')} />
              ))}
            </div>
          )}
          {note && <p className="mt-7 text-[#E4EEDF]">{note}</p>}
        </div>
        {aside && <div className="flex justify-center">{aside}</div>}
      </div>
      <Hills />
    </section>
  );
}

/** Section wrapper with a heading and optional intro. */
export function Section({
  title,
  intro,
  children,
  tone = 'paper',
  id,
}: {
  title?: React.ReactNode;
  intro?: React.ReactNode;
  children: React.ReactNode;
  tone?: 'paper' | 'white' | 'sage' | 'sun';
  id?: string;
}) {
  const bg = { paper: '', white: 'bg-white', sage: 'bg-[#E4EEDF]', sun: 'bg-[#FBEFC2]' }[tone];
  return (
    <section id={id} className={`${bg} py-16 md:py-20`}>
      <div className="max-w-6xl mx-auto px-6">
        {title && <h2 className={`${s.display} text-3xl md:text-[2.75rem] leading-tight font-semibold max-w-3xl`}>{title}</h2>}
        {intro && <p className="mt-4 text-lg text-[#5b665f] max-w-2xl leading-relaxed">{intro}</p>}
        <div className={title || intro ? 'mt-10' : ''}>{children}</div>
      </div>
    </section>
  );
}

export function Tick() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 mt-0.5" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#2D5A4A" />
      <path d="M7 12.5 L10.5 16 L17 8.5" fill="none" stroke="#FFFCF5" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TickList({ items, className = '' }: { items: React.ReactNode[]; className?: string }) {
  return (
    <ul className={`space-y-3 text-lg ${className}`}>
      {items.map((t, i) => (
        <li key={i} className="flex gap-3">
          <Tick />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

/** Rounded colour panel, used for the "doors" and feature blocks. */
export function Panel({ tone = 'sage', children, className = '' }: { tone?: 'sage' | 'sun' | 'white' | 'forest'; children: React.ReactNode; className?: string }) {
  const bg = {
    sage: 'bg-[#E4EEDF]',
    sun: 'bg-[#FBEFC2]',
    white: 'bg-white border-2 border-[#E4EEDF]',
    forest: 'bg-[#2D5A4A] text-[#FFFCF5]',
  }[tone];
  return <div className={`rounded-[36px] p-8 md:p-10 ${bg} ${className}`}>{children}</div>;
}

export function Quote({ body, name, note = 'Google review', big = false }: { body: string; name: string; note?: string; big?: boolean }) {
  return (
    <figure className={big ? '' : 'border-l-4 border-[#F4D35E] pl-5'}>
      <blockquote className={big ? `${s.display} text-2xl md:text-[2rem] leading-snug font-medium` : 'text-[#3d4f49] leading-relaxed'}>
        &ldquo;{body}&rdquo;
      </blockquote>
      <figcaption className={big ? 'mt-6 text-lg' : 'mt-2 text-sm'}>
        <span className="font-semibold">{name}</span>
        {note && <span className="text-[#5b665f]">, {note}</span>}
      </figcaption>
    </figure>
  );
}

/** Closing call to action on forest green with the brand rainbow. */
export function ClosingCTA({
  title,
  body,
  primary = { href: '/contact', label: 'Request a program' },
  secondary = { href: 'tel:+16478568206', label: 'Call (647) 856-8206' },
}: {
  title: React.ReactNode;
  body?: React.ReactNode;
  primary?: Action;
  secondary?: Action | null;
}) {
  return (
    <section className="relative overflow-hidden bg-[#2D5A4A] text-[#FFFCF5]">
      <RainbowArc className="absolute -bottom-1 -left-8 w-44 md:w-72" />
      <div className="relative max-w-3xl mx-auto px-6 pt-20 pb-36 md:py-28 text-center">
        <h2 className={`${s.display} text-4xl md:text-6xl font-semibold leading-tight`}>{title}</h2>
        {body && <p className="mt-6 text-xl text-[#E4EEDF]">{body}</p>}
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <ButtonLink {...primary} tone="sun" />
          {secondary && <ButtonLink {...secondary} tone="outline" />}
        </div>
      </div>
    </section>
  );
}

/** Taran's photo in the rainbow-arch frame. */
export function ArchPhoto({ className = '' }: { className?: string }) {
  return (
    <div className={`${s.arch} bg-[#F4D35E] p-3 w-full max-w-sm ${className}`}>
      <Image src="/taran-photo.jpg" alt="Taran Kaur, founder of Earth & OM Kids" width={800} height={800} className={`${s.arch} w-full h-auto`} />
    </div>
  );
}

/** Big decorative rainbow for heroes without a photo. */
export function RainbowAside() {
  return <RainbowArc className="w-72 md:w-96" />;
}

/** FAQ list using native details/summary (keyboard accessible, no JS). */
export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y-2 divide-[#E4EEDF] border-y-2 border-[#E4EEDF] max-w-3xl">
      {items.map((f) => (
        <details key={f.q} className="group py-5">
          <summary className={`${s.display} flex justify-between gap-6 cursor-pointer list-none text-xl font-semibold`}>
            {f.q}
            <span className="text-[#2D5A4A] transition-transform group-open:rotate-45 text-2xl leading-none" aria-hidden="true">+</span>
          </summary>
          <p className="mt-3 text-lg text-[#3d4f49] leading-relaxed">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
