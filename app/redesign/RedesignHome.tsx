import Image from 'next/image';
import Link from 'next/link';
import RainbowArc from '@/components/RainbowArc';
import { reviews } from '@/lib/reviews';
import s from '@/components/rd/rd.module.css';


// Current partners only (featured + "currently working with" in SchoolCommunity).
const partners = [
  'PLASP',
  'Le Petit Chaperon Rouge',
  'Brighpath Academy',
  'Smart Little Children',
  'Lambton-Kingsway Before & After School',
  'Smart Start Montessori',
  'Rec Room Childcare Centre',
  'Isabella Walton Childcare Centre',
  'Sunburst Children’s Centre',
  'Heritage Childcare Services',
  'Junction Daycare Centre',
  'Palmerston Community Daycare',
];

const classFlow = [
  {
    title: 'Breathe with the breath ball',
    body: 'Children watch the ball grow and shrink and match their breathing to it. It is how every class settles in.',
    icon: 'ball',
  },
  {
    title: 'Warm up and animal poses',
    body: 'Cats, cobras, trees and butterflies. Kids stretch, balance and laugh through poses named after animals they know.',
    icon: 'tree',
  },
  {
    title: 'Story or movement game',
    body: 'A short yoga story or game ties the poses together and builds focus, turn-taking and imagination.',
    icon: 'book',
  },
  {
    title: 'Rest and check in',
    body: 'Feathers, a quiet song or a short body scan help everyone rest before heading back to class.',
    icon: 'feather',
  },
] as const;

// Same benefits the current site lists for schools.
const outcomes = [
  'Better focus and attention',
  'Better emotional regulation',
  'A calmer classroom',
  'Support for positive behaviour',
];

const programs = [
  { name: 'School yoga programs', detail: 'In class, weekly or as a wellness week', href: '/schools' },
  { name: 'After-school classes', detail: 'Weekly small groups', href: '/after-school-yoga-toronto' },
  { name: 'Toddler yoga', detail: 'Ages 18 months to 3', href: '/toddler-yoga-toronto' },
  { name: 'March Break and summer camps', detail: 'Camp days, camp weeks or a yoga day at your camp', href: '/march-break-summer-camp-yoga-toronto' },
  { name: 'Mindfulness for kids', detail: 'Breathing and calm-down tools taught through play', href: '/mindfulness-for-kids-toronto' },
  { name: 'Mindfulness workshops', detail: 'For classrooms, PD days and family events', href: '/mindfulness-workshops-for-kids-toronto' },
  { name: 'Family yoga', detail: 'Parents and children together', href: '/families' },
  { name: 'Birthday parties', detail: 'Ages 3 to 12, at your home or venue', href: '/yoga-birthday-party-toronto' },
];

const sunburst = reviews.find((r) => r.name === "Sunburst Children's Centre")!;

function BreathBall({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <circle cx="100" cy="100" r="96" fill="#F4D35E" />
      <g fill="none" stroke="#D9B13C" strokeWidth="3">
        <ellipse cx="100" cy="100" rx="96" ry="96" />
        <ellipse cx="100" cy="100" rx="64" ry="96" />
        <ellipse cx="100" cy="100" rx="30" ry="96" />
        <ellipse cx="100" cy="100" rx="96" ry="64" />
        <ellipse cx="100" cy="100" rx="96" ry="30" />
        <line x1="4" y1="100" x2="196" y2="100" />
        <line x1="100" y1="4" x2="100" y2="196" />
      </g>
      <circle cx="68" cy="62" r="18" fill="#FFF6CF" opacity="0.7" />
    </svg>
  );
}

function FlowIcon({ kind }: { kind: (typeof classFlow)[number]['icon'] }) {
  const common = { fill: 'none', stroke: '#2D5A4A', strokeWidth: 4, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  return (
    <svg viewBox="0 0 64 64" className="w-12 h-12" aria-hidden="true">
      {kind === 'ball' && (
        <g>
          <circle cx="32" cy="32" r="22" fill="#F4D35E" />
          <ellipse cx="32" cy="32" rx="10" ry="22" {...common} strokeWidth={3} />
          <line x1="10" y1="32" x2="54" y2="32" {...common} strokeWidth={3} />
          <circle cx="32" cy="32" r="22" {...common} />
        </g>
      )}
      {kind === 'tree' && (
        <g>
          <circle cx="32" cy="24" r="16" fill="#A7C4A0" />
          <path d="M32 40 V56 M24 56 H40" {...common} />
          <circle cx="32" cy="24" r="16" {...common} />
        </g>
      )}
      {kind === 'book' && (
        <g>
          <path d="M8 16 Q20 12 32 18 Q44 12 56 16 V50 Q44 46 32 52 Q20 46 8 50 Z" fill="#FBEFC2" />
          <path d="M8 16 Q20 12 32 18 Q44 12 56 16 V50 Q44 46 32 52 Q20 46 8 50 Z M32 18 V52" {...common} />
        </g>
      )}
      {kind === 'feather' && (
        <g>
          <path d="M50 10 C28 14 14 30 16 52 C36 52 50 36 50 10 Z" fill="#E4EEDF" />
          <path d="M50 10 C28 14 14 30 16 52 C36 52 50 36 50 10 Z M12 56 L40 24" {...common} />
        </g>
      )}
    </svg>
  );
}

function Tick() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 mt-0.5" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#2D5A4A" />
      <path d="M7 12.5 L10.5 16 L17 8.5" fill="none" stroke="#FFFCF5" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function RedesignHome() {
  return (
    <main className={s.page}>
      {/* HERO: the breath ball is the one bold, moving element */}
      <section className={s.hero}>
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-36 md:pt-24 md:pb-44 grid lg:grid-cols-[1.35fr_0.65fr] gap-12 items-center">
          <div>
            <h1 className={`${s.display} ${s.heroTitle} lg:whitespace-nowrap`}>
              Calm minds.
              <br />
              Joyful movement.
              <br />
              Confident kids.
            </h1>
            <p className="mt-7 text-xl leading-relaxed text-[#E4EEDF] max-w-xl">
              Playful yoga and mindfulness for children from 18 months to 12 years. We come to your school, childcare centre or home across Toronto and the GTA.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link href="/schools" className="inline-flex justify-center items-center px-7 py-4 rounded-full bg-[#F4D35E] text-[#1F2E2A] font-semibold text-lg hover:bg-[#f7dd7f] transition-colors">
                Bring yoga to your school
              </Link>
              <Link href="/families" className="inline-flex justify-center items-center px-7 py-4 rounded-full border-2 border-[#FFFCF5]/70 text-[#FFFCF5] font-semibold text-lg hover:bg-white/10 transition-colors">
                Classes for families
              </Link>
            </div>
            <p className="mt-8 text-[#E4EEDF]">Trusted by 25+ Toronto schools and childcare centres since 2018</p>
          </div>

          <div className="flex flex-col items-center">
            <div className={s.ballStage}>
              <div className={s.ring} />
              <div className={s.ring} />
              <div className={s.ring} />
              <BreathBall className={s.ball} />
            </div>
            <div className={`${s.cue} ${s.display} w-56 mt-4`} aria-hidden="true">
              <span className={s.cueIn}>Breathe in</span>
              <span className={s.cueOut}>Breathe out</span>
            </div>
            <p className="mt-2 text-sm text-[#A7C4A0] text-center max-w-[16rem]">
              Breathe along with the ball. Every class starts this way.
            </p>
          </div>
        </div>

        <svg className="absolute bottom-0 left-0 w-full h-[60px] md:h-[110px]" viewBox="0 0 1440 110" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,70 C220,20 420,20 640,58 C860,96 1080,96 1260,52 C1340,32 1400,30 1440,36 L1440,110 L0,110 Z" fill="#A7C4A0" opacity="0.5" />
          <path d="M0,88 C240,52 470,56 720,82 C960,106 1200,98 1440,70 L1440,110 L0,110 Z" fill="#FFFCF5" />
        </svg>
      </section>

      {/* PARTNER WALL */}
      <section className="max-w-6xl mx-auto px-6 pt-10 pb-20">
        <h2 className={`${s.display} text-3xl md:text-4xl font-semibold max-w-2xl`}>
          Toronto schools and childcare centres already make us part of their week
        </h2>
        <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-5">
          {partners.map((p, i) => (
            <li key={p} className={`${s.partner} text-xl md:text-2xl ${i >= 6 ? 'hidden sm:list-item' : ''}`}>
              {p}
            </li>
          ))}
        </ul>
        <Link href="/schools" className="mt-10 inline-block font-semibold text-[#2D5A4A] underline decoration-[#F4D35E] decoration-4 underline-offset-8 hover:decoration-[#2D5A4A]">
          See every school and centre we work with
        </Link>
      </section>

      {/* TWO DOORS */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-6">
        <div className="rounded-[40px] bg-[#E4EEDF] p-8 md:p-12 flex flex-col">
          <h2 className={`${s.display} text-3xl md:text-4xl font-semibold`}>For schools and childcare centres</h2>
          <p className="mt-4 text-lg text-[#3d4f49]">
            We run 30 to 45 minute sessions in your classroom, planned around your schedule, age groups and goals.
          </p>
          <ul className="mt-7 space-y-3 text-lg">
            {['Weekly in-class yoga', 'Wellness weeks and PD days', 'Before and after school programs', 'Adapted for every learner'].map((t) => (
              <li key={t} className="flex gap-3"><Tick />{t}</li>
            ))}
          </ul>
          <div className="mt-auto pt-10">
            <Link href="/contact" className="inline-flex px-7 py-4 rounded-full bg-[#2D5A4A] text-[#FFFCF5] font-semibold text-lg hover:bg-[#244a3d] transition-colors">
              Request a school program
            </Link>
          </div>
        </div>

        <div className="rounded-[40px] bg-[#FBEFC2] p-8 md:p-12 flex flex-col relative overflow-hidden">
          <RainbowArc className="absolute -bottom-1 -right-6 w-40 md:w-48" />
          <h2 className={`${s.display} text-3xl md:text-4xl font-semibold relative`}>For families</h2>
          <p className="mt-4 text-lg text-[#4a4630] relative max-w-md">
            Small-group classes, camps and celebrations where kids move, breathe and make friends.
          </p>
          <ul className="mt-7 space-y-3 text-lg relative">
            {['After-school classes', 'Toddler yoga from 18 months', 'March Break and summer camps', 'Yoga birthday parties'].map((t) => (
              <li key={t} className="flex gap-3"><Tick />{t}</li>
            ))}
          </ul>
          <div className="mt-auto pt-10 relative">
            <Link href="/families" className="inline-flex px-7 py-4 rounded-full bg-[#1F2E2A] text-[#FFFCF5] font-semibold text-lg hover:bg-black transition-colors">
              Find a family class
            </Link>
          </div>
        </div>
      </section>

      {/* INSIDE A CLASS: a real sequence, so numbers are earned */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className={`${s.display} text-3xl md:text-5xl font-semibold`}>What happens in a class</h2>
          <p className="mt-4 text-lg text-[#5b665f] max-w-xl">A typical 30 to 45 minute session, from the first breath to the last stretch.</p>
          <ol className={`${s.flow} mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10`}>
            {classFlow.map((step, i) => (
              <li key={step.title} className="relative z-10">
                <div className="w-24 h-24 rounded-full bg-[#FFFCF5] border-[3px] border-[#A7C4A0] grid place-items-center">
                  <FlowIcon kind={step.icon} />
                </div>
                <p className={`${s.display} mt-6 text-[#2D5A4A] text-lg font-semibold`}>Step {i + 1}</p>
                <h3 className={`${s.display} mt-1 text-2xl font-semibold leading-tight`}>{step.title}</h3>
                <p className="mt-3 text-[#5b665f] leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PROOF */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.2fr_0.8fr] gap-14">
          <figure>
            <blockquote className={`${s.display} text-2xl md:text-[2.1rem] leading-snug font-medium text-[#1F2E2A]`}>
              &ldquo;{sunburst.body}&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-lg">
              <span className="font-semibold">{sunburst.name}</span>
              <span className="text-[#5b665f]">, Google review</span>
            </figcaption>
          </figure>
          <div>
            <h2 className={`${s.display} text-2xl font-semibold`}>What teachers notice</h2>
            <ul className="mt-6 space-y-4 text-lg">
              {outcomes.map((o) => (
                <li key={o} className="flex gap-3"><Tick />{o}</li>
              ))}
            </ul>
            <div className="mt-10 space-y-6">
              <figure className="border-l-4 border-[#F4D35E] pl-5">
                <blockquote className="text-[#3d4f49]">&ldquo;My kinders loved it. They loved being challenged and learning at the different poses.&rdquo;</blockquote>
                <figcaption className="mt-2 text-sm font-semibold">SLC Daycare</figcaption>
              </figure>
              <figure className="border-l-4 border-[#A7C4A0] pl-5">
                <blockquote className="text-[#3d4f49]">&ldquo;The instructors are amazing with the children. They are patient, friendly, and always make the sessions fun and engaging.&rdquo;</blockquote>
                <figcaption className="mt-2 text-sm font-semibold">Catherine Maheu, summer camp partner</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="rounded-[40px] bg-[#E4EEDF] p-8 md:p-14 grid md:grid-cols-[0.8fr_1.2fr] gap-10 items-center">
          <div className={`${s.arch} bg-[#F4D35E] p-3 max-w-sm w-full mx-auto`}>
            <Image src="/taran-photo.jpg" alt="Taran Kaur, founder of Earth & OM Kids" width={800} height={800} className={`${s.arch} w-full h-auto`} />
          </div>
          <div>
            <h2 className={`${s.display} text-3xl md:text-5xl font-semibold`}>Meet Miss Taran</h2>
            <p className="mt-6 text-lg leading-relaxed text-[#3d4f49] max-w-xl">
              Taran Kaur is a trained Early Childhood Educator with nearly 10 years in Toronto childcare and Montessori classrooms. She founded Earth & OM Kids in 2018 to bring the calm she saw yoga give children into everyday school life.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#3d4f49] max-w-xl">
              Every class is built the way young children learn best: through play, movement, stories and lots of repetition.
            </p>
            <Link href="/about" className="mt-8 inline-block font-semibold text-[#2D5A4A] underline decoration-[#F4D35E] decoration-4 underline-offset-8 hover:decoration-[#2D5A4A]">
              Read Taran&rsquo;s story
            </Link>
          </div>
        </div>
      </section>

      {/* PROGRAMS: a scannable list, not a grid of identical cards */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className={`${s.display} text-3xl md:text-5xl font-semibold`}>Programs</h2>
        <ul className="mt-10 grid md:grid-cols-2 gap-x-12 border-t-2 border-[#1F2E2A]">
          {programs.map((p) => (
            <li key={p.href} className="border-b-2 border-[#E4EEDF]">
              <Link href={p.href} className="group flex items-baseline justify-between gap-6 py-6">
                <span className={`${s.display} text-2xl font-semibold group-hover:text-[#2D5A4A]`}>{p.name}</span>
                <span className="text-right text-[#5b665f] text-sm md:text-base">{p.detail}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#2D5A4A] text-[#FFFCF5]">
        <RainbowArc className="absolute -bottom-1 -left-8 w-48 md:w-80" />
        <div className="relative max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
          <h2 className={`${s.display} text-4xl md:text-6xl font-semibold leading-tight`}>Let&rsquo;s bring calm to your classroom</h2>
          <p className="mt-6 text-xl text-[#E4EEDF]">
            Tell us about your school or group. We reply within 1 to 2 business days with a plan that fits your schedule.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-flex justify-center px-8 py-4 rounded-full bg-[#F4D35E] text-[#1F2E2A] font-semibold text-lg hover:bg-[#f7dd7f] transition-colors">
              Request a program
            </Link>
            <a href="tel:+16478568206" className="inline-flex justify-center px-8 py-4 rounded-full border-2 border-[#FFFCF5]/70 font-semibold text-lg hover:bg-white/10 transition-colors">
              Call (647) 856-8206
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
