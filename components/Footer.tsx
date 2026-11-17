import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import rd from '@/components/rd/rd.module.css';

// Lucide doesn't ship brand/logo icons (trademarked marks are intentionally
// excluded from generic icon sets), so these follow the same outline style by hand.
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const columns = [
  {
    title: 'Explore',
    links: [
      ['/about', 'About Taran'], ['/schools', 'For schools'], ['/families', 'For families'], ['/blog', 'Blog'], ['/contact', 'Contact'],
    ],
  },
  {
    title: 'Programs',
    links: [
      ['/programs', 'All programs'], ['/toddler-yoga-toronto', 'Toddler yoga'], ['/after-school-yoga-toronto', 'After-school yoga'],
      ['/mindfulness-for-kids-toronto', 'Mindfulness for kids'], ['/mindfulness-workshops-for-kids-toronto', 'Mindfulness workshops'],
      ['/march-break-summer-camp-yoga-toronto', 'March Break and summer camps'], ['/yoga-birthday-party-toronto', 'Birthday parties'],
    ],
  },
  {
    title: 'Where we teach',
    links: [
      ['/toronto', 'Toronto'], ['/north-york', 'North York'], ['/scarborough', 'Scarborough'], ['/etobicoke', 'Etobicoke'],
      ['/downtown-toronto', 'Downtown Toronto'], ['/locations', 'All locations'],
    ],
  },
];

const socials = [
  { href: 'https://www.instagram.com/earthandomkids', label: 'Earth & OM Kids on Instagram', Icon: InstagramIcon },
  { href: 'https://www.facebook.com/earthandomkids', label: 'Earth & OM Kids on Facebook', Icon: FacebookIcon },
  { href: 'https://www.linkedin.com/in/tarankauryoga', label: 'Taran Kaur on LinkedIn', Icon: LinkedinIcon },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1F2E2A] text-[#E4EEDF]">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 pb-12 border-b border-white/10">
          <div>
            <Link href="/" className="inline-block" aria-label="Earth & OM Kids home">
              <Image src="/logo-sage.svg" alt="Earth & OM Kids, kids yoga and mindfulness programs Toronto" width={121} height={90} unoptimized className="h-[84px] w-auto" />
            </Link>
            <p className={`${rd.display} mt-8 text-3xl md:text-4xl font-semibold leading-tight text-[#FFFCF5] max-w-lg`}>
              Calm minds. Joyful movement. Confident kids.
            </p>
            <p className="mt-4 text-[#A7C4A0] max-w-md">Kids yoga and mindfulness for Toronto schools, childcare centres and families since 2018.</p>
          </div>
          <div className="lg:pt-4">
            <h2 className={`${rd.display} text-lg font-semibold text-[#A7C4A0]`}>Get in touch</h2>
            <a href="tel:+16478568206" className={`${rd.display} mt-3 block text-2xl font-semibold text-[#FFFCF5] hover:text-[#F4D35E]`}>(647) 856-8206</a>
            <a href="mailto:earthandomkids@gmail.com" className="mt-1 block text-lg text-[#FFFCF5] hover:text-[#F4D35E] break-all">earthandomkids@gmail.com</a>
            <p className="mt-1 text-[#A7C4A0]">Toronto, Ontario</p>
            <Link href="/contact" className="mt-6 inline-flex px-6 py-3 rounded-full bg-[#F4D35E] text-[#1F2E2A] font-semibold hover:bg-[#f7dd7f] transition-colors">
              Request a program
            </Link>
            <div className="mt-6 flex gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-11 h-11 rounded-full border border-white/20 grid place-items-center text-[#E4EEDF] hover:bg-white/10 hover:text-[#F4D35E] transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <nav aria-label="Footer" className="grid sm:grid-cols-3 gap-10 py-12">
          {columns.map((col) => (
            <div key={col.title}>
              <h2 className={`${rd.display} text-lg font-semibold text-[#A7C4A0]`}>{col.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {col.links.map(([href, label]) => (
                  <li key={href}><Link href={href} className="hover:text-[#F4D35E] transition-colors">{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 justify-between text-sm text-[#A7C4A0]">
          <p>&copy; {new Date().getFullYear()} Earth &amp; OM Kids. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-[#F4D35E]">Privacy policy</Link>
            <Link href="/accessibility" className="hover:text-[#F4D35E]">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
