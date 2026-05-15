import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact & Book a Program',
  description: 'Book a kids yoga program or workshop in Toronto. Contact Earth & OM Kids for schools, childcare centres, families, and events.',
alternates: { canonical: '/contact' },
};

export default function Contact() {
  return <ContactForm />;
}