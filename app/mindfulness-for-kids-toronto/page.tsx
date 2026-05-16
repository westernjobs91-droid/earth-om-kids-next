import MindfulnessContent from './MindfulnessContent';

export const metadata = {
  title: 'Mindfulness for Kids Toronto | Children\'s Mindfulness Programs | Earth & OM Kids',
  description: 'Professional mindfulness programs for children across Toronto and the GTA. Help your child manage stress, improve focus, and build emotional resilience. Ages 18 months to 12 years.',
  alternates: { canonical: '/mindfulness-for-kids-toronto' },
  openGraph: {
    title: 'Mindfulness for Kids Toronto | Earth & OM Kids',
    description: 'Professional children\'s mindfulness programs for Toronto schools, daycares, and families. Ages 18 months to 12 years. Led by a trained Early Childhood Educator.',
    url: 'https://kids.earthandom.ca/mindfulness-for-kids-toronto',
  },
};

const mindfulnessSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Mindfulness for Kids Toronto",
  "description": "Professional mindfulness programs for children ages 18 months to 12 years across Toronto and the GTA. Delivered to schools, daycares, and families by a trained Early Childhood Educator.",
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
    "audienceType": "Children ages 18 months to 12 years, schools, daycares, and families in Toronto"
  }
};

const mindfulnessFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is mindfulness for kids?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mindfulness for kids is the practice of helping children pay attention to the present moment through breathing, movement, and body awareness activities. For children, mindfulness looks like breathing games, yoga poses, guided relaxation, and sensory activities — not sitting in silence. It builds emotional regulation, focus, and resilience."
      }
    },
    {
      "@type": "Question",
      "name": "What age can children start mindfulness in Toronto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Children can begin age-appropriate mindfulness activities from as young as 18 months old. Earth and OM Kids offers mindfulness programs for children from 18 months to 12 years across Toronto and the GTA, with each program fully tailored to the developmental stage of the child."
      }
    },
    {
      "@type": "Question",
      "name": "Does mindfulness help children with anxiety?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Research consistently shows that mindfulness practices reduce anxiety symptoms in children by activating the calming part of the nervous system. Simple breathing techniques and body awareness exercises give children practical tools to manage worry and stress in real time."
      }
    },
    {
      "@type": "Question",
      "name": "How is kids mindfulness different from kids yoga?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kids yoga uses physical poses and movement as the primary vehicle, while mindfulness focuses more broadly on present moment awareness through breathing, sensory activities, guided relaxation, and emotional check-ins. At Earth and OM Kids, our programs blend both approaches so children get the benefits of movement and mindfulness together."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer mindfulness programs for Toronto schools?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We deliver children's mindfulness programs to schools, daycares, and childcare centres across Toronto and the GTA. Programs include single sessions, wellness weeks, and ongoing weekly visits. All programs are designed to fit your school's schedule and curriculum goals."
      }
    }
  ]
};

export default function MindfulnessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mindfulnessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mindfulnessFaqSchema) }}
      />
      <MindfulnessContent />
    </>
  );
}