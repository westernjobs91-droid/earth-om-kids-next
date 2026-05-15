import React from 'react';
import ProgramsContent from './ProgramsContent';

// ─── METADATA ────────────────────────────────────────────────────────────────
export const metadata = {
  title: "Kids Yoga Programs Toronto | Schools, After-School & Workshops",
  description: "Explore our kids yoga and mindfulness programs in Toronto. School yoga sessions, after-school classes, birthday parties, and custom workshops for ages 18 months to 12 years. Serving Toronto & GTA since 2018.",
  alternates: {
    canonical: '/programs',
  },
  openGraph: {
    title: "Kids Yoga Programs Toronto | Schools, After-School & Workshops",
    description: "Professional kids yoga and mindfulness programs in Toronto. In-school sessions, after-school classes, birthday parties, and custom workshops for children ages 18 months+.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Earth & OM Kids — kids yoga programs for Toronto schools, families and after-school programs",
      },
    ],
  },
};

// ─── SCHEMA: FAQPage ──────────────────────────────────────────────────────────
// Programs-specific questions — different from homepage FAQ so Google sees
// unique FAQ content on each page (more "People also ask" opportunities)
const programsFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What age groups do your kids yoga programs support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer programs for children from 18 months to 12 years old. Toddler sessions (18 months–3 years) are short and song-based. Preschool classes (3–5) are story-led with animal poses. School-age programs (5–12) go deeper into breathwork, mindfulness, and emotional regulation."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer in-school yoga programs for Toronto schools and daycares?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our school yoga programs are delivered on-site at your Toronto or GTA school, childcare centre, or Montessori. Sessions are 30–45 minutes, classroom-ready, and fully customizable to your schedule, age group, and goals. We are trusted by 25+ schools and childcare centres across Toronto."
      }
    },
    {
      "@type": "Question",
      "name": "What is included in a kids yoga birthday party in Toronto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our yoga birthday parties are a fun, active, and mindful experience for children and their friends. We come to your location, lead the children through themed yoga poses, breathing games, and a relaxation activity. Parties are 45–60 minutes and can be customized by age group and theme. Available across Toronto and the GTA."
      }
    },
    {
      "@type": "Question",
      "name": "Can programs be customized for our school or childcare centre?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Every program is tailored to your specific goals, age groups, schedule, and space. Popular themes include emotional regulation, calm transitions, focus and attention, gratitude, and body awareness. We work with everything from single wellness sessions to multi-week programs."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer after-school kids yoga classes in Toronto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We offer weekly after-school yoga classes in small groups (max 12 children) for toddlers, preschoolers, and school-age children. Classes are 45–60 minutes and held at select locations across Toronto. Contact us to inquire about current availability or to host a class at your centre."
      }
    },
    {
      "@type": "Question",
      "name": "What is a kids yoga wellness week?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A wellness week is a multi-day yoga and mindfulness program we deliver at your school or childcare centre. Each day focuses on a different theme — such as calm, focus, kindness, or body awareness — building on the previous session. Wellness weeks are popular with Toronto Montessori schools and daycares looking for a meaningful enrichment experience."
      }
    }
  ]
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