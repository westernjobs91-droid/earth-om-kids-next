import { sharedOpenGraph } from '@/lib/seo';
import { Metadata } from 'next';
import SchoolsContent from './SchoolsContent';

export const metadata: Metadata = {
  title: 'For Schools & Childcare',
  description: 'Professional in-school yoga and mindfulness programs for Toronto schools, childcare centres, and Montessori communities. Ages 18 months+.',
  alternates: { canonical: '/schools' },
  openGraph: {
    ...sharedOpenGraph,
    title: 'In-School Yoga Programs Toronto | School Yoga for Kids | Earth & OM Kids',
    description: 'Professional in-school yoga and mindfulness programs for Toronto schools, childcare centres, and Montessori communities.',
  },
};

export default function Schools() {
  return <SchoolsContent />;
}