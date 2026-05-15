import React from 'react';
import FamiliesContent from './FamiliesContent';

export const metadata = {
  title: "Kids Yoga Classes Toronto | For Families & After-School",
  description: "Fun and calming kids yoga classes in Toronto for families. After-school programs, weekend workshops, and birthday parties. Ages 18 months to 12 years.",
  alternates: { canonical: '/families' },
  openGraph: {
    title: "Kids Yoga Classes Toronto | For Families & After-School",
    description: "Playful kids yoga and mindfulness classes for Toronto families. After-school programs, birthday parties, and special workshops.",
  },
};

export default function FamiliesPage() {
  return <FamiliesContent />;
}