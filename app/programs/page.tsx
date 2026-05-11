import React from 'react';
import ProgramsContent from './ProgramsContent';

export const metadata = {
  title: "Kids Yoga Programs Toronto | Schools, After-School & Workshops",
  description: "Explore our kids yoga and mindfulness programs in Toronto. School yoga sessions, after-school classes, birthday parties, and custom workshops for ages 18 months to 12 years. Serving Toronto & GTA since 2018.",
  openGraph: {
    title: "Kids Yoga Programs Toronto | Schools, After-School & Workshops",
    description: "Professional kids yoga and mindfulness programs in Toronto. In-school sessions, after-school classes, birthday parties, and custom workshops for children ages 18 months+.",
    images: [
      {
        url: "/yoga-icon.png", // You can replace this with a better OG image later
      },
    ],
  },
};

export default function ProgramsPage() {
  return <ProgramsContent />;
}