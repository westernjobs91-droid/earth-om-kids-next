'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { reviews } from '@/lib/reviews';
import styles from './SchoolCommunity.module.css';

// Lead with the named centre already featured in the approved design.
const orderedReviews = [...reviews].sort((a, b) =>
  Number(b.name === "Sunburst Children's Centre") - Number(a.name === "Sunburst Children's Centre")
);

export default function CommunityReviews() {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const review = orderedReviews[index];
  if (!review) return null;

  const long = review.body.length > 240;
  const excerpt = long ? review.body.slice(0, review.body.lastIndexOf(' ', 240)) + '…' : review.body;
  const go = (direction: number) => {
    setIndex((value) => (value + direction + orderedReviews.length) % orderedReviews.length);
    setExpanded(false);
  };

  return (
    <div className={`${styles.testimonial} ${styles.reviewCarousel}`} role="region" aria-roledescription="carousel" aria-label="Educator and parent Google reviews" tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault();
          go(event.key === 'ArrowLeft' ? -1 : 1);
        }
      }}>
      <div className={styles.quoteLabel}>WHAT EDUCATORS &amp; PARENTS ARE SAYING</div>
      <div className={styles.reviewLayout}>
        <button type="button" className={styles.reviewArrow} aria-label="Previous review" onClick={() => go(-1)}><ChevronLeft size={20} aria-hidden="true" /></button>
        <figure className={styles.reviewSlide} aria-live="polite" aria-atomic="true">
          <blockquote id="community-review-text" className="heading-serif">“{expanded ? review.body : excerpt}”</blockquote>
          <figcaption><strong>{review.name}</strong><span>{long && !expanded ? 'Excerpt from a Google review' : 'Google review'} · {index + 1} of {orderedReviews.length}</span></figcaption>
        </figure>
        <button type="button" className={styles.reviewArrow} aria-label="Next review" onClick={() => go(1)}><ChevronRight size={20} aria-hidden="true" /></button>
      </div>
      {long && <button type="button" className={styles.readReview} aria-expanded={expanded} aria-controls="community-review-text" onClick={() => setExpanded(!expanded)}>{expanded ? 'Show less' : 'Read full review'}</button>}
    </div>
  );
}
