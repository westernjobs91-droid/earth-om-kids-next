import BirthdayPartyContent from './BirthdayPartyContent';

export const metadata = {
  title: 'Kids Yoga Birthday Party Toronto | Earth & OM Kids',
  description: 'Make your child\'s birthday unforgettable with a kids yoga party in Toronto. Fun, active, and mindful birthday yoga experiences for ages 3 to 12. Serving Toronto and the GTA. Book today.',
  alternates: { canonical: '/yoga-birthday-party-toronto' },
  openGraph: {
    title: 'Kids Yoga Birthday Party Toronto | Earth & OM Kids',
    description: 'Fun, active, and mindful yoga birthday parties for children in Toronto and the GTA. Ages 3 to 12. Led by a trained Early Childhood Educator. Book today.',
    url: 'https://kids.earthandom.ca/yoga-birthday-party-toronto',
  },
};

const birthdayPartySchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Kids Yoga Birthday Party Toronto",
  "description": "Fun, active, and mindful yoga birthday party experiences for children ages 3 to 12 across Toronto and the GTA. Led by a trained Early Childhood Educator.",
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
    "audienceType": "Children ages 3 to 12"
  }
};

const birthdayFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long is a kids yoga birthday party in Toronto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our kids yoga birthday parties are typically 45 to 60 minutes long. We can customize the duration based on your child's age group and the number of guests."
      }
    },
    {
      "@type": "Question",
      "name": "What age groups are yoga birthday parties suitable for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our yoga birthday parties are designed for children ages 3 to 12. Each party is fully tailored to the age group of the birthday child and their guests."
      }
    },
    {
      "@type": "Question",
      "name": "Do you come to our home or venue for the birthday party?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We come to your home, backyard, community centre, condo amenity room, or any party venue across Toronto and the GTA. We bring everything needed for the session."
      }
    },
    {
      "@type": "Question",
      "name": "How many children can attend a yoga birthday party?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend 8 to 16 children for the best experience. We can accommodate larger groups with advance notice. Contact us to discuss your specific needs."
      }
    },
    {
      "@type": "Question",
      "name": "How far in advance should I book a kids yoga birthday party in Toronto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend booking at least 2 to 3 weeks in advance to secure your preferred date. Weekend dates in particular fill up quickly, especially during spring and fall."
      }
    }
  ]
};

export default function BirthdayPartyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(birthdayPartySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(birthdayFaqSchema) }}
      />
      <BirthdayPartyContent />
    </>
  );
}