import TorontoContent from './TorontoContent';

export const metadata = {
  title: "Kids Yoga Toronto | School & Family Programs",
  description: "Professional kids yoga and mindfulness programs for schools, childcare centres, and families across Toronto. Led by a trained Early Childhood Educator with nearly 10 years of experience. Ages 18 months to 12 years.",
  alternates: { canonical: '/toronto' },
  openGraph: {
    title: "Kids Yoga Toronto | Earth & OM Kids",
    description: "Professional kids yoga and mindfulness programs for Toronto schools, daycares, and families. Ages 18 months to 12 years.",
    url: "https://kids.earthandom.ca/toronto",
  },
};

export default function TorontoPage() {
  return <TorontoContent />;
}