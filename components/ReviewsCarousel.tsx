'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import type { Review } from '@/lib/reviews';

export default function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const [current, setCurrent] = useState(0);
  const reduceMotion = useReducedMotion();
  const total = reviews.length;

  const go = (index: number) => setCurrent(((index % total) + total) % total);
  const prev = () => go(current - 1);
  const next = () => go(current + 1);

  return (
    <div
      className="max-w-3xl mx-auto"
      role="region"
      aria-roledescription="carousel"
      aria-label="Google reviews"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') prev();
        if (e.key === 'ArrowRight') next();
      }}
    >
      <div className="flex items-center gap-3 md:gap-6">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous review"
          className="hidden md:flex shrink-0 h-12 w-12 items-center justify-center rounded-full border border-[#E8D5B7] bg-white text-[#2D5A4A] hover:bg-[#2D5A4A] hover:text-white transition"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* All slides share one grid cell, so the box is always as tall as the
            longest review and nothing jumps when the slide changes. */}
        <motion.div
          className="grid flex-1 min-w-0 touch-pan-y"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={(_, info) => {
            if (info.offset.x < -60) next();
            else if (info.offset.x > 60) prev();
          }}
        >
          {reviews.map((review, i) => {
            const active = i === current;
            return (
              <motion.figure
                key={review.name}
                aria-hidden={!active}
                aria-label={`Review ${i + 1} of ${total}`}
                className={`col-start-1 row-start-1 bg-white rounded-3xl border border-[#E8D5B7] px-6 py-8 md:px-14 md:py-14 text-center flex flex-col items-center justify-center select-none ${active ? '' : 'pointer-events-none'}`}
                initial={false}
                animate={{
                  opacity: active ? 1 : 0,
                  x: reduceMotion || active ? 0 : i < current ? -40 : 40,
                }}
                transition={{ duration: reduceMotion ? 0 : 0.35, ease: 'easeOut' }}
                style={{ visibility: active ? 'visible' : 'hidden', transitionProperty: 'visibility', transitionDuration: '0s', transitionDelay: active ? '0s' : '0.35s' }}
              >
                <div className="flex gap-1 text-[#E07A5F] mb-6">
                  {[...Array(5)].map((_, s) => <Star key={s} className="h-5 w-5" fill="currentColor" strokeWidth={0} />)}
                </div>
                <blockquote className="text-base md:text-xl leading-relaxed text-[#1F2E2A]/85 italic">
                  &ldquo;{review.body}&rdquo;
                </blockquote>
                <figcaption className="mt-8 text-sm">
                  <div className="font-semibold text-base">{review.name}</div>
                  <div className="text-[#2D5A4A]/60">Google Review</div>
                </figcaption>
              </motion.figure>
            );
          })}
        </motion.div>

        <button
          type="button"
          onClick={next}
          aria-label="Next review"
          className="hidden md:flex shrink-0 h-12 w-12 items-center justify-center rounded-full border border-[#E8D5B7] bg-white text-[#2D5A4A] hover:bg-[#2D5A4A] hover:text-white transition"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous review"
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-[#E8D5B7] bg-white text-[#2D5A4A]"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2" role="tablist" aria-label="Choose a review">
          {reviews.map((review, i) => (
            <button
              key={review.name}
              type="button"
              role="tab"
              aria-selected={i === current}
              aria-label={`Show review ${i + 1} of ${total}`}
              onClick={() => go(i)}
              className={`h-2.5 rounded-full transition-all ${i === current ? 'w-7 bg-[#2D5A4A]' : 'w-2.5 bg-[#E8D5B7] hover:bg-[#2D5A4A]/40'}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next review"
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-[#E8D5B7] bg-white text-[#2D5A4A]"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
