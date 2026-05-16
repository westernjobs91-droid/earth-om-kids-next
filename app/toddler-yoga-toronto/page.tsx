import ToddlerYogaContent from './ToddlerYogaContent';

export const metadata = {
  title: 'Toddler Yoga Toronto | Classes for Ages 18 Months to 3 Years | Earth & OM Kids',
  description: 'Toddler yoga classes in Toronto for children from 18 months to 3 years old. Playful, song-based sessions that build confidence, calm, and body awareness. Serving Toronto and the GTA.',
  alternates: { canonical: '/toddler-yoga-toronto' },
  openGraph: {
    title: 'Toddler Yoga Toronto | Ages 18 Months to 3 Years | Earth & OM Kids',
    description: 'Playful toddler yoga classes in Toronto for children from 18 months. Fun, song-based sessions led by a trained Early Childhood Educator. Serving Toronto and the GTA.',
    url: 'https://kids.earthandom.ca/toddler-yoga-toronto',
  },
};

const toddlerYogaSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Toddler Yoga Toronto",
  "description": "Playful, song-based toddler yoga classes for children ages 18 months to 3 years across Toronto and the GTA. Led by a trained Early Childhood Educator.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Earth & OM Kids",
    "url": "https://kids.earthandom.ca",
    "telephone": "+16478568206"
  },
  "areaServed": [
    { "@type": "City", "name": "Toronto" },
    { "@type": "City", "name": "North York" },
    { "@type": "City", "name": "Scarborough" },
    { "@type": "City", "name": "Etobicoke" },
    { "@type": "City", "name": "Vaughan" },
    { "@type": "City", "name": "Mississauga" },
    { "@type": "City", "name": "Markham" }
  ],
  "audience": {
    "@type": "Audience",
    "audienceType": "Toddlers ages 18 months to 3 years and their caregivers"
  }
};

const toddlerFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can an 18 month old do yoga in Toronto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Earth and OM Kids accepts children from 18 months old. Our toddler yoga sessions are short, playful, and song-based — designed specifically for how very young children move, learn, and engage. There are no expectations for sitting still or following complex instructions."
      }
    },
    {
      "@type": "Question",
      "name": "What happens in a toddler yoga class in Toronto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A toddler yoga class at Earth and OM Kids is 20 to 30 minutes of playful movement, animal poses, songs, breathing games, and a short relaxation. Sessions are designed for children 18 months to 3 years old and are led by a trained Early Childhood Educator who understands toddler development deeply."
      }
    },
    {
      "@type": "Question",
      "name": "Do parents stay during toddler yoga classes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For very young toddlers, yes. Parents or caregivers are welcome and often encouraged to participate alongside their child. This is part of what makes toddler yoga so special — it becomes a bonding experience for the whole family."
      }
    },
    {
      "@type": "Question",
      "name": "What are the benefits of yoga for toddlers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Toddler yoga supports gross motor development, body awareness, language development through songs and naming poses, early emotional regulation, and confidence. It also gives toddlers a positive association with movement and mindfulness from a very young age."
      }
    }
  ]
};

export default function ToddlerYogaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toddlerYogaSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toddlerFaqSchema) }}
      />
      <ToddlerYogaContent />
    </>
  );
}