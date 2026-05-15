import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['700'],
  display: 'swap',
});

// ─── SCHEMA: LocalBusiness (appears on every page) ───────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Earth & OM Kids",
  "description": "Professional kids yoga and mindfulness programs for schools, childcare centres, and families across Toronto and the GTA. Led by a Registered Early Childhood Educator (RECE) since 2018.",
  "url": "https://kids.earthandom.ca",
  "telephone": "+16478568206",
  "email": "earthandomkids@gmail.com",
  "foundingDate": "2018",
  "logo": "https://kids.earthandom.ca/yoga-icon.png",
  "image": "https://kids.earthandom.ca/og-image.jpg",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Toronto",
    "addressRegion": "ON",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.7615,
    "longitude": -79.4111
  },
  "areaServed": [
    { "@type": "City", "name": "Toronto" },
    { "@type": "City", "name": "North York" },
    { "@type": "City", "name": "Scarborough" },
    { "@type": "City", "name": "Etobicoke" },
    { "@type": "City", "name": "Vaughan" },
    { "@type": "City", "name": "Mississauga" },
    { "@type": "City", "name": "Markham" },
    { "@type": "City", "name": "Richmond Hill" },
    { "@type": "City", "name": "Brampton" }
  ],
  "serviceType": [
    "Kids Yoga Classes",
    "Children's Mindfulness Programs",
    "School Yoga Programs",
    "After-School Yoga",
    "Kids Yoga Birthday Parties",
    "Family Yoga Workshops",
    "Toddler Yoga"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Kids Yoga & Mindfulness Programs",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "In-School Yoga Programs",
          "description": "Classroom-ready yoga and mindfulness sessions for Toronto schools and childcare centres. 30–45 minute sessions."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "After-School Yoga Classes",
          "description": "Weekly kids yoga classes for toddlers, preschoolers, and school-age children across Toronto and the GTA."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Kids Yoga Birthday Parties",
          "description": "Fun, active, and mindful birthday yoga experiences for children across Toronto."
        }
      }
    ]
  },
  "sameAs": [
    "https://www.instagram.com/earthandomkids",
    "https://www.facebook.com/earthandomkids"
  ]
};

// ─── METADATA (Next.js handles <title>, <meta>, <og> tags automatically) ─────
export const metadata: Metadata = {
  // UPDATE THIS once custom domain is live:
  metadataBase: new URL('https://kids.earthandom.ca'),

  title: {
    default: "Kids Yoga Toronto | School & Family Programs | Earth & OM Kids",
    template: "%s | Earth & OM Kids",
  },
  description: "Professional kids yoga and mindfulness programs in Toronto & GTA. Trusted by 25+ schools and childcare centres. Led by a Registered Early Childhood Educator. Ages 18 months+.",

  // Canonical URL — tells Google which domain to index (not vercel.app)
  alternates: {
    canonical: '/',
  },

  icons: {
    icon: "/yoga-icon.png",
  },

  openGraph: {
    title: "Kids Yoga Toronto | School & Family Programs | Earth & OM Kids",
    description: "Professional kids yoga and mindfulness programs in Toronto & GTA. Trusted by 25+ schools since 2018. Led by a Registered Early Childhood Educator.",
    url: "https://kids.earthandom.ca",
    siteName: "Earth & OM Kids",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Earth & OM Kids — professional kids yoga and mindfulness programs for Toronto schools and families",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kids Yoga Toronto | Earth & OM Kids",
    description: "Professional kids yoga and mindfulness programs in Toronto & GTA. Ages 18 months+.",
    images: ["/og-image.jpg"],
  },

  // Helps Google understand this is a Canadian local business
  other: {
    "geo.region": "CA-ON",
    "geo.placename": "Toronto",
  },
};

// ─── ROOT LAYOUT ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* LocalBusiness schema — runs on every single page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="bg-[#F8F1E9] text-[#1F2E2A]">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}