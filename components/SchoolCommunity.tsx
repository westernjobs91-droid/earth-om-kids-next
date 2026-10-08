'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Pause, Play } from 'lucide-react';
import styles from './SchoolCommunity.module.css';

const featured = [
  'PLASP',
  'Le Petit Chaperon Rouge',
  'Smart Little Children Inc',
  'Brighpath Academy',
  'Lambton-Kingway Before & After School Program',
];

const current = [
  'Smart Start Montessori', 'Rec Room Childcare Centre',
  'Northwest Childhood Learning Centre', 'Isabella Walton Childcare Centre',
  'Abiona Centre, EarlyON', 'Sunburst Children Centre',
  'Heritage Childcare Services', 'St Jude Childcare Centre',
  'Junction Daycare Centre', 'Follow the Child Daycare Centre',
  'Lakeside Co-operative Play School', 'Palmerston Community Daycare',
  'Cardinal Leger Child Care Centre',
];

const previous = [
  'McNicoll Avenue Child Care Program', 'Kids Connect Daycare',
  'Beach Hill Montessori', 'Abacus Montessori', 'Lycée Français Toronto',
  'Sunny Faces Daycare', 'East Toronto Village Children’s Centre',
  'Phoenix Childcare Centre', 'Cliffwood Community Child Care',
  'Three R’s Early Learning Centre', 'Midland Childcare Centre',
];

function SchoolRow({ schools, past = false }: { schools: string[]; past?: boolean }) {
  return (
    <div className={`${styles.reel} ${past ? styles.pastReel : ''}`}>
      <div className={styles.track}>
        {[false, true].map((duplicate) => (
          <ul key={String(duplicate)} className={styles.schoolSet} aria-hidden={duplicate || undefined}>
            {schools.map((school) => <li key={school}>{school}</li>)}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default function SchoolCommunity() {
  const [paused, setPaused] = useState(false);

  return (
    <section id="school-community" aria-labelledby="school-community-title" className={`${styles.community} ${paused ? styles.paused : ''}`}>
      <div className={styles.heading}>
        <span className={styles.badge}>TORONTO &amp; THE GTA</span>
        <h2 id="school-community-title" className="heading-serif">Schools &amp; centres<br />we work with</h2>
        <p>Yoga and mindfulness in the heart of school and childcare communities.</p>
      </div>

      <div className={styles.orbit}>
        <ul className={styles.featured} aria-label="Featured current schools and centres">
          {featured.map((school) => <li key={school}>{school}</li>)}
        </ul>
        <div className={styles.centre}>
          <Image src="/yoga-icon.png" alt="Earth & OM Kids yoga logo" width={55} height={55} />
          <strong className="heading-serif">Earth &amp; OM</strong>
          <span>KIDS</span>
        </div>
      </div>

      <div className={styles.schoolLists}>
        <h3>Currently working with</h3>
        <SchoolRow schools={current} />
        <div className={styles.previous}>
          <h3>Previous programmes · past two years</h3>
          <SchoolRow schools={previous} past />
        </div>
        <div className={styles.controls}>
          <button type="button" aria-pressed={paused} onClick={() => setPaused(!paused)} className={styles.pauseButton}>
            {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
            {paused ? 'Resume scrolling' : 'Pause scrolling'}
          </button>
          <details className={styles.directory}>
            <summary>View full list</summary>
            <div className={styles.directoryContent}>
              <h3>Currently working with</h3>
              <ul>{[...featured, ...current].map((school) => <li key={school}>{school}</li>)}</ul>
              <h3>Previous programmes · past two years</h3>
              <ul>{previous.map((school) => <li key={school}>{school}</li>)}</ul>
            </div>
          </details>
        </div>
      </div>

      <figure className={styles.testimonial}>
        <div className={styles.quoteLabel}>FROM OUR SCHOOL COMMUNITY</div>
        <blockquote className="heading-serif">“Miss Taran has provided an age appropriate introduction to yoga for young children.”</blockquote>
        <figcaption><strong>Sunburst Children’s Centre</strong><span>Excerpt from a Google review</span></figcaption>
      </figure>
      <div className={styles.invitation}>
        <h3 className="heading-serif">Bring yoga &amp; mindfulness<br />to your school.</h3>
        <p>Let’s create a programme for your children, your space, and your school day.</p>
        <Link href="/contact">Request a School Program <ArrowRight size={18} aria-hidden="true" /></Link>
      </div>
    </section>
  );
}
