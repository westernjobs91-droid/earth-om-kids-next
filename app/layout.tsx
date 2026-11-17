import { OG_IMAGE } from '@/lib/seo';
import type { Metadata } from 'next';
import { Inter, Fredoka } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

// Rounded display face for headings, chosen to match the bubbly Earth & OM logo.
const fredoka = Fredoka({
  subsets: ['latin'],
  variable: '--font-fredoka',
  weight: ['500', '600'],
  display: 'swap',
});

// ─── SCHEMA: LocalBusiness (appears on every page) ───────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Earth & OM Kids",
  "description": "Professional kids yoga and mindfulness programs for schools, childcare centres, and families across Toronto and the GTA. Led by a trained Early Childhood Educator since 2018.",
  "url": "https://kids.earthandom.ca",
  "telephone": "+16478568206",
  "email": "earthandomkids@gmail.com",
  "foundingDate": "2018",
  "logo": "https://kids.earthandom.ca/logo.png",
  "image": "https://kids.earthandom.ca/og-share.jpg",
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

// ─── SCHEMA: WebSite (helps Google show "Earth & OM Kids" instead of domain) ──
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Earth & OM Kids",
  "url": "https://kids.earthandom.ca",
  "description": "Professional kids yoga and mindfulness programs for Toronto schools and families."
};

// ─── SCHEMA: Organization (Google's site-name guidance calls this out
// specifically, in addition to WebSite — see
// https://developers.google.com/search/docs/appearance/site-names) ──────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Earth & OM Kids",
  "url": "https://kids.earthandom.ca",
  "logo": "https://kids.earthandom.ca/logo.png",
  "sameAs": [
    "https://www.instagram.com/earthandomkids",
    "https://www.facebook.com/earthandomkids"
  ]
};

// ─── METADATA ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL('https://kids.earthandom.ca'),

  title: {
    default: "Kids Yoga Toronto | School & Family Programs | Earth & OM Kids",
    template: "%s | Earth & OM Kids",
  },
  description: "Professional kids yoga and mindfulness programs in Toronto & GTA. Trusted by 25+ schools and childcare centres. Led by a trained Early Childhood Educator. Ages 18 months+.",

  alternates: {
    canonical: '/',
  },

  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",

  openGraph: {
    title: "Kids Yoga Toronto | School & Family Programs | Earth & OM Kids",
    description: "Professional kids yoga and mindfulness programs in Toronto & GTA. Trusted by 25+ schools since 2018. Led by a trained Early Childhood Educator.",
    url: "https://kids.earthandom.ca",
    siteName: "Earth & OM Kids",
    locale: "en_CA",
    type: "website",
    images: [OG_IMAGE],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kids Yoga Toronto | Earth & OM Kids",
    description: "Professional kids yoga and mindfulness programs in Toronto & GTA. Ages 18 months+.",
    images: [OG_IMAGE.url],
  },

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
    <html lang="en" className={`${inter.variable} ${fredoka.variable}`}>
      <head>
        {/* LocalBusiness schema — runs on every page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* WebSite schema — tells Google the site name is "Earth & OM Kids" */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* Organization schema — additional signal for Google's site name feature */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="bg-[#F8F1E9] text-[#1F2E2A]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}