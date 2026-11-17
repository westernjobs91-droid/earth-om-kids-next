import { sharedOpenGraph } from '@/lib/seo';
import React from 'react';
// Preview branch: the redesigned homepage replaces HomeContent.
import RedesignHome from './redesign/RedesignHome';
import { homeFaqs } from './homeFaqs';
import { reviews } from '@/lib/reviews';

// ─── METADATA ────────────────────────────────────────────────────────────────
export const metadata = {
  title: "Kids Yoga Toronto | School & Family Programs | Earth & OM Kids",
  description: "Professional kids yoga and mindfulness programs in Toronto & GTA. Trusted by 25+ schools and childcare centres. Ages 18 months+.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    ...sharedOpenGraph,
    title: "Kids Yoga Toronto | School & Family Programs | Earth & OM Kids",
    description: "Professional kids yoga and mindfulness programs in Toronto & GTA. Trusted by 25+ schools and childcare centres.",
  },
};

// ─── SCHEMA: FAQPage ─────────────────────────────────────────────────────────
// Enables "People also ask" featured snippets in Google search results
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": homeFaqs.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
};

// ─── SCHEMA: AggregateRating ──────────────────────────────────────────────────
// Driven by lib/reviews.ts — real Google reviews only, never fabricated.
const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Earth & OM Kids",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": String(reviews.length),
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": reviews.map((r) => ({
    "@type": "Review",
    "author": { "@type": r.type, "name": r.name },
    "reviewBody": r.body,
    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    "itemReviewed": { "@type": "LocalBusiness", "name": "Earth & OM Kids" }
  }))
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* FAQPage schema — unlocks "People also ask" snippets in Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* AggregateRating schema — unlocks gold stars in Google search results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />

      <RedesignHome />
    </>
  );
}