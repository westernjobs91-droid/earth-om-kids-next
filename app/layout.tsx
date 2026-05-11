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

export const metadata: Metadata = {
  title: {
    default: 'Earth & OM Kids | Kids Yoga & Mindfulness Programs in Toronto',
    template: '%s | Earth & OM Kids',
  },
  description: 'Refined kids yoga and mindfulness programs for schools, childcare centres, Montessori communities, and families in Toronto and the GTA. Led by Early Childhood Educator Taran Kaur. Calm minds, joyful movement, confident children.',
  icons: {
    icon: '/favicon.ico',
  },
};

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
