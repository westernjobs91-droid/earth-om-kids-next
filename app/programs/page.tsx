import { sharedOpenGraph } from '@/lib/seo';
import React from 'react';
import ProgramsContent from './ProgramsContent';
import { programFaqs } from './faqs';

// ─── METADATA ────────────────────────────────────────────────────────────────
export const metadata = {
  title: "Kids Yoga Programs Toronto | Schools, After-School & Workshops",
  description: "Explore our kids yoga and mindfulness programs in Toronto: school sessions, after-school classes, birthday parties, and custom workshops.",
  alternates: {
    canonical: '/programs',
  },
  openGraph: {
    ...sharedOpenGraph,
    title: "Kids Yoga Programs Toronto | Schools, After-School & Workshops",
    description: "Professional kids yoga and mindfulness programs in Toronto: in-school sessions, after-school classes, birthday parties, and custom workshops.",
  },
};

// ─── SCHEMA: FAQPage ──────────────────────────────────────────────────────────
// Programs-specific questions — different from homepage FAQ so Google sees
// unique FAQ content on each page (more "People also ask" opportunities)
const programsFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": programFaqs.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function ProgramsPage() {
  return (
    <>
      {/* FAQPage schema — unlocks "People also ask" snippets for program-specific searches */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(programsFaqSchema) }}
      />

      <ProgramsContent />
    </>
  );
}