import { Metadata } from 'next';
import ProgramsContent from './ProgramsContent';

export const metadata: Metadata = {
  title: 'Our Programs | Earth & OM Kids',
  description: 'Kids Yoga & Mindfulness Programs in Toronto: In-school yoga, after-school classes, workshops, family yoga, and custom mindfulness programs for children ages 18 months and up.',
  openGraph: {
    title: 'Kids Yoga & Mindfulness Programs Toronto | Earth & OM Kids',
    description: 'Joyful, developmentally appropriate experiences for children ages 18 months and up — in schools, after-school programs, and family settings.',
  },
};

export default function Programs() {
  return <ProgramsContent />;
}