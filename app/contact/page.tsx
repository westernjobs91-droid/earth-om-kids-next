import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { PageHero } from '@/components/rd/Kit';

export const metadata: Metadata = {
  title: 'Contact & Book a Program',
  description: 'Book a kids yoga program or workshop in Toronto. Contact Earth & OM Kids for schools, childcare centres, families, and events.',
alternates: { canonical: '/contact' },
};

export default function Contact() {
  return (
    <>
      <PageHero
        title="Let's plan something calm and joyful"
        lead="Tell us about your school, centre or family. Taran reviews every request personally and replies within 1 to 2 business days."
        note={<>Prefer to talk? Call <a href="tel:+16478568206" className="underline decoration-[#F4D35E] decoration-2 underline-offset-4">(647) 856-8206</a> or email <a href="mailto:earthandomkids@gmail.com" className="underline decoration-[#F4D35E] decoration-2 underline-offset-4">earthandomkids@gmail.com</a>.</>}
      />
      <ContactForm />
    </>
  );
}