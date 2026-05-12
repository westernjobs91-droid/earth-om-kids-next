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

export const metadata = {
  metadataBase: new URL('https://earth-om-kids-next.vercel.app'), // Change this later to your custom domain
  title: {
    default: "Earth & OM Kids | Kids Yoga & Mindfulness in Toronto",
    template: "%s | Earth & OM Kids",
  },
  description: "Professional kids yoga and mindfulness programs in Toronto & the GTA. Trusted by 25+ schools and childcare centres since 2018. Calm minds. Joyful movement. Confident kids.",
  icons: {
    icon: "/yoga-icon.png",
  },
  openGraph: {
    title: "Earth & OM Kids | Kids Yoga & Mindfulness in Toronto",
    description: "Professional kids yoga and mindfulness programs in Toronto & the GTA. Trusted by 25+ schools and childcare centres since 2018.",
    images: [
      {
        url: "/og-image.jpg", // You can replace this with a better OG image later
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
  card: "summary_large_image",
  title: "Earth & OM Kids | Kids Yoga Toronto",
  description: "Professional kids yoga and mindfulness programs in Toronto & GTA.",
  images: ["/og-image.jpg"],
},
};
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Earth & OM Kids",
      "description": "Kids yoga and mindfulness programs in Toronto and the GTA.",
      "url": "https://earth-om-kids-next.vercel.app",
      "telephone": "+1-647-856-8206", // Add your phone number
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Toronto",
        "addressRegion": "ON",
        "addressCountry": "CA"
      },
      "areaServed": ["Toronto", "North York", "Scarborough", "Etobicoke", "GTA"],
      "serviceType": "Kids Yoga and Mindfulness Programs"
    })
  }}
/>

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-[#F8F1E9] text-[#1F2E2A]">
        {/* Font Awesome CDN for icons - can be replaced with lucide-react in future */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
