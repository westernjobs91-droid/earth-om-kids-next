import { sharedOpenGraph } from '@/lib/seo';
import { Metadata } from 'next';
import Link from 'next/link';
import { PageHero, Section, Panel, ClosingCTA, ArchPhoto, display } from '@/components/rd/Kit';

// ─── METADATA ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'About Taran Kaur',
  description: 'Meet Taran Kaur, Early Childhood Educator and founder of Earth & OM Kids, bringing calm, playful yoga and mindfulness to Toronto schools and families.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    ...sharedOpenGraph,
    title: 'About Taran Kaur | Earth & OM Kids Yoga Toronto',
    description: 'Early Childhood Educator with nearly 10 years experience. Heart-centered, nature-inspired kids yoga and mindfulness in Toronto.',
  },
};

// ─── SCHEMA: Person ───────────────────────────────────────────────────────────
// Tells Google exactly who Taran is and her credentials.
// Supports E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
// — a key signal Google uses to rank health/education content.
// NOTE: Update the LinkedIn URL to Taran's actual profile slug.
const taranPersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Taran Kaur",
  "jobTitle": "Early Childhood Educator & Kids Yoga Teacher",
  "description": "Early Childhood Educator (ECE) with nearly 10 years of experience in Toronto's childcare and Montessori communities. Founder of Earth & OM Kids, specializing in children's yoga, mindfulness, and trauma-informed practices for ages 18 months to 12 years.",
  "url": "https://kids.earthandom.ca/about",
  "image": "https://kids.earthandom.ca/taran-photo.jpg",
  "worksFor": {
    "@type": "LocalBusiness",
    "name": "Earth & OM Kids",
    "url": "https://kids.earthandom.ca"
  },
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional Certification",
      "name": "Early Childhood Educator (ECE)",
      "recognizedBy": {
        "@type": "Organization",
        "name": "College of Early Childhood Educators of Ontario"
      }
    }
  ],
  "knowsAbout": [
    "Kids Yoga",
    "Children's Mindfulness",
    "Early Childhood Education",
    "Emotional Regulation for Children",
    "Trauma-Informed Practices",
    "Child Development"
  ],
  "sameAs": [
    "https://www.instagram.com/earthandomkids",
    "https://www.linkedin.com/in/tarankauryoga"  // ← update to Taran's real LinkedIn slug
  ]
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function About() {
  return (
    <>
      {/* Person schema — E-E-A-T signal for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(taranPersonSchema) }}
      />

      <PageHero
        title="Meet Taran Kaur"
        lead="Trained Early Childhood Educator, kids yoga and mindfulness teacher, and founder of Earth & OM Kids."
        aside={<ArchPhoto className="max-w-[300px]" />}
      />

      <Section>
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-14">
          <div className="space-y-5 text-xl leading-relaxed text-[#3d4f49] max-w-2xl">
            <p>
              Earth &amp; OM Kids was founded on a clear belief: every child deserves to feel grounded, joyful and connected to their body, breath and inner world.
            </p>
            <p>
              With nearly a decade as an Early Childhood Educator in Toronto&rsquo;s childcare and Montessori communities, Taran has seen how children thrive when they have the right tools for emotional regulation and self-awareness.
            </p>
            <p>
              Her approach is professional and deeply nurturing. Every session meets children where they are, from energetic toddlers to curious school-age kids, blending playful movement, breathing games, stories and calm moments.
            </p>
          </div>
          <div className="space-y-5">
            <Panel tone="sage">
              <h2 className={`${display} text-xl font-semibold`}>Credentials</h2>
              <p className="mt-2 text-lg">Trained Early Childhood Educator with nearly 10 years in early childhood education.</p>
              <p className="mt-3 text-[#5b665f]">Additional training in children&rsquo;s yoga, mindfulness facilitation and trauma-informed practice.</p>
            </Panel>
            <Panel tone="sun">
              <h2 className={`${display} text-xl font-semibold`}>Philosophy</h2>
              <p className="mt-2 text-lg">Nature-inspired. Heart-centred. Always respectful of each child&rsquo;s pace and personality.</p>
              <h2 className={`${display} text-xl font-semibold mt-6`}>Mission</h2>
              <p className="mt-2 text-lg">To bring calm, confidence and joy to Toronto children through yoga and mindfulness.</p>
            </Panel>
          </div>
        </div>
      </Section>

      <section className="bg-[#2D5A4A] text-[#FFFCF5] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className={`${display} text-3xl md:text-4xl font-semibold`}>Why this work matters</h2>
          <blockquote className={`${display} mt-8 space-y-6 text-2xl md:text-[1.75rem] leading-snug font-medium`}>
            <p>&ldquo;In my years working in early childhood settings, I saw so many children carrying stress they didn&rsquo;t have words for. Yoga gave them a language through their bodies and breath to feel safe, strong and calm.&rdquo;</p>
            <p>&ldquo;It&rsquo;s not about perfect poses. It&rsquo;s about helping children build lifelong tools for well-being in a way that feels playful, inclusive and deeply respectful.&rdquo;</p>
          </blockquote>
          <p className="mt-8 text-[#E4EEDF] text-lg">Taran Kaur, founder</p>
        </div>
      </section>

      <Section title="More than yoga classes">
        <div className="grid md:grid-cols-3 gap-x-10 gap-y-8">
          {[
            { t: 'Developmentally grounded', b: 'Every session is designed with deep knowledge of child development, not just yoga poses.' },
            { t: 'Heart-centred', b: 'We meet each child with warmth, patience and respect for their own pace and personality.' },
            { t: 'Educator-led', b: 'Led by an Early Childhood Educator with nearly 10 years of real classroom experience.' },
          ].map((x) => (
            <div key={x.t}>
              <h3 className={`${display} text-xl font-semibold`}>{x.t}</h3>
              <p className="mt-2 text-lg text-[#5b665f] leading-relaxed">{x.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="white" title="Supporting the adults who care for children">
        <div className="grid md:grid-cols-2 gap-6">
          <Panel tone="sage" className="flex flex-col">
            <h3 className={`${display} text-2xl font-semibold`}>Educator and staff wellness</h3>
            <p className="mt-3 text-lg text-[#3d4f49]">Custom workshops for teachers and ECEs on stress relief, breathwork and self-regulation tools for themselves and their classrooms.</p>
            <Link href="/contact" className="mt-auto pt-7 font-semibold text-[#2D5A4A] underline decoration-[#F4D35E] decoration-4 underline-offset-8 self-start">Ask about staff wellness</Link>
          </Panel>
          <Panel tone="sun" className="flex flex-col">
            <h3 className={`${display} text-2xl font-semibold`}>Parent and family offerings</h3>
            <p className="mt-3 text-lg text-[#4a4630]">Workshops and family yoga that help parents understand and practise mindfulness alongside their children.</p>
            <Link href="/families" className="mt-auto pt-7 font-semibold text-[#1F2E2A] underline decoration-[#2D5A4A] decoration-4 underline-offset-8 self-start">Explore family programs</Link>
          </Panel>
        </div>
      </Section>

      <ClosingCTA
        title={<>Let&rsquo;s work together</>}
        body="Whether you are a school, childcare centre or parent, I would love to bring calm and confidence to the children in your care."
        primary={{ href: '/contact', label: 'Get in touch' }}
      />
    </>
  );
}
