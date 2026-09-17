import TorontoContent from './TorontoContent';

export const metadata = {
  title: "Kids Yoga Classes Across All Toronto Neighbourhoods",
  description: "Professional kids yoga and mindfulness programs delivered directly to schools, childcare centres, and families in every Toronto neighbourhood.",
  alternates: { canonical: '/toronto' },
  openGraph: {
    title: "Kids Yoga Classes Across All Toronto Neighbourhoods | Earth & OM Kids",
    description: "Professional kids yoga and mindfulness programs delivered across every Toronto neighbourhood. Ages 18 months to 12 years.",
    url: "https://kids.earthandom.ca/toronto",
  },
};

export default function TorontoPage() {
  return <TorontoContent />;
}