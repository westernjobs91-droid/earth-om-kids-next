import React from 'react';
import Link from 'next/link';
import { PageHero, Section, ClosingCTA, display } from '@/components/rd/Kit';

export default function LocationsContent() {
  const locations = [
    {
      name: "Toronto",
      slug: "toronto",
      description: "Professional kids yoga and mindfulness programs for schools, childcare centres, daycares, and families across all of Toronto. Trusted by 25+ local schools since 2018.",
      featured: true,
    },
    {
      name: "North York",
      slug: "north-york",
      description: "Kids yoga programs for schools, daycares, and families across North York including Willowdale, Newtonbrook, Bayview Village, Don Mills, and York Mills.",
      featured: false,
    },
    {
      name: "Scarborough",
      slug: "scarborough",
      description: "Professional kids yoga and mindfulness in schools and homes across Scarborough including Agincourt, Birchcliff, Cliffside, Wexford, and Malvern.",
      featured: false,
    },
    {
      name: "Etobicoke",
      slug: "etobicoke",
      description: "In-school and after-school kids yoga programs serving Etobicoke and West Toronto including Mimico, Islington, Long Branch, Rexdale, and Humber Valley.",
      featured: false,
    },
    {
      name: "Downtown Toronto",
      slug: "downtown-toronto",
      description: "Kids yoga and mindfulness programs for downtown schools, daycares, and families including The Annex, Leslieville, Riverdale, Harbourfront, and Trinity Bellwoods.",
      featured: false,
    },
  ];

  const [toronto, ...rest] = locations;
  const tints = ['bg-[#E4EEDF]', 'bg-[#FBEFC2]', 'bg-[#F6E3D3]', 'bg-[#E4EEDF]'];

  return (
    <>
      <PageHero
        title={<>Kids yoga across Toronto and the GTA</>}
        lead="We bring kids yoga and mindfulness programs to schools, childcare centres and families across Toronto and the Greater Toronto Area. We come to you."
        actions={[{ href: '/contact', label: 'Request a program' }]}
      />

      <Section>
        <Link href={`/${toronto.slug}`} className="group block rounded-[36px] bg-[#2D5A4A] text-[#FFFCF5] p-8 md:p-12 hover:bg-[#244a3d] transition-colors">
          <div className="grid md:grid-cols-[1fr_auto] gap-6 items-end">
            <div>
              <h2 className={`${display} text-4xl md:text-5xl font-semibold`}>{toronto.name}</h2>
              <p className="mt-4 text-lg text-[#E4EEDF] max-w-2xl">{toronto.description}</p>
            </div>
            <span className="inline-flex px-7 py-4 rounded-full bg-[#F4D35E] text-[#1F2E2A] font-semibold text-lg">Explore Toronto programs</span>
          </div>
        </Link>
        <div className="mt-5 grid md:grid-cols-2 gap-5">
          {rest.map((loc, i) => (
            <Link key={loc.slug} href={`/${loc.slug}`} className={`group flex flex-col rounded-[32px] p-8 ${tints[i % tints.length]} hover:ring-2 hover:ring-[#2D5A4A]/30 transition`}>
              <h2 className={`${display} text-3xl font-semibold`}>{loc.name}</h2>
              <p className="mt-3 text-[#3d4f49] leading-relaxed">{loc.description}</p>
              <span className="mt-auto pt-6 font-semibold text-[#2D5A4A] underline decoration-[#2D5A4A]/30 decoration-2 underline-offset-4 group-hover:decoration-[#2D5A4A]">Explore {loc.name} programs</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="white" title="Across the Greater Toronto Area" intro="We also travel to schools, centres and families in these cities.">
        <ul className="flex flex-wrap gap-2.5">
          {['Vaughan', 'Mississauga', 'Markham', 'Richmond Hill', 'Brampton', 'Oakville', 'Ajax', 'Pickering'].map((city) => (
            <li key={city} className={`${display} px-5 py-2.5 rounded-full bg-[#E4EEDF] text-lg font-medium`}>{city}</li>
          ))}
        </ul>
      </Section>

      <ClosingCTA
        title="Don't see your neighbourhood?"
        body="We may still be able to help. Tell us where you are and what you need."
        primary={{ href: '/contact', label: 'Ask about your area' }}
      />
    </>
  );
}
