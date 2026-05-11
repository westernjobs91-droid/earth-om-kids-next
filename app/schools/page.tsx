import { Metadata } from 'next';
import SchoolsContent from './SchoolsContent';

export const metadata: Metadata = {
  title: 'For Schools & Childcare | Earth & OM Kids',
  description: 'Professional in-school yoga and mindfulness programs for Toronto schools, childcare centres, and Montessori communities. Improve focus, emotional regulation, and classroom calm. Ages 18 months+.',
  openGraph: {
    title: 'In-School Yoga Programs Toronto | School Yoga for Kids | Earth & OM Kids',
    description: 'Professional in-school yoga and mindfulness programs for Toronto schools, childcare centres, and Montessori communities.',
  },
};

export default function Schools() {
  return <SchoolsContent />;
}