// app/north-york/page.tsx
import NorthYorkContent from './NorthYorkContent';

export const metadata = {
  title: "Kids Yoga North York | School & Family Programs | Earth & OM Kids",
  description: "Professional kids yoga and mindfulness programs for schools, childcare centres, and families across North York. Trusted by local schools since 2018.",
  alternates: { canonical: '/north-york' },
  openGraph: {
    title: "Kids Yoga North York | Earth & OM Kids",
    description: "Professional kids yoga and mindfulness programs for North York schools and families.",
  },
};

export default function NorthYorkPage() {
  return <NorthYorkContent />;
}