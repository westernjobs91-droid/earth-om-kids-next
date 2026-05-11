'use client';

import React from 'react';
import Link from 'next/link';

export default function BlogPage() {
  const blogPosts = [
    {
      slug: "benefits-of-kids-yoga-for-emotional-regulation",
      title: "How Kids Yoga Helps with Emotional Regulation in Toronto Classrooms",
      excerpt: "Discover how simple yoga and mindfulness practices can help children manage big emotions, reduce anxiety, and improve focus in school.",
      date: "May 2026",
      readTime: "7 min read",
      category: "Emotional Regulation"
    },
    {
      slug: "breathing-exercises-for-kids",
      title: "5 Simple Breathing Exercises You Can Practice with Your Child at Home",
      excerpt: "Easy, fun breathing techniques that help children calm down, improve concentration, and sleep better.",
      date: "May 2026",
      readTime: "5 min read",
      category: "Mindfulness"
    },
    {
      slug: "what-to-expect-in-kids-yoga-class",
      title: "What to Expect in a Kids Yoga Class (Ages 3–6)",
      excerpt: "A complete guide for parents on what happens during a typical kids yoga class and how it benefits your child.",
      date: "May 2026",
      readTime: "6 min read",
      category: "For Parents"
    },
    {
      slug: "yoga-for-focus-and-attention",
      title: "Can Yoga Improve Focus and Attention in School-Age Children?",
      excerpt: "Research-backed benefits of yoga for improving concentration, reducing restlessness, and supporting learning.",
      date: "May 2026",
      readTime: "8 min read",
      category: "Child Development"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">RESOURCES &amp; INSIGHTS</div>
        <h1 className="text-5xl tracking-tighter font-semibold heading-serif">Kids Yoga Blog</h1>
        <p className="mt-3 text-xl text-[#1F2E2A]/70 max-w-md mx-auto">
          Helpful articles on kids yoga, mindfulness, and supporting children’s emotional wellbeing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <Link 
            key={index} 
            href={`/blog/${post.slug}`}
            className="group block bg-white border border-[#E8D5B7] rounded-3xl p-8 hover:border-[#2D5A4A]/40 transition-all"
          >
            <div className="flex items-center gap-x-3 mb-4">
              <span className="text-xs px-3 py-1 bg-[#F8F1E9] rounded-full text-[#2D5A4A]">{post.category}</span>
              <span className="text-xs text-[#1F2E2A]/50">{post.date} • {post.readTime}</span>
            </div>
            
            <h2 className="text-2xl font-semibold tracking-tight group-hover:text-[#2D5A4A] transition-colors">
              {post.title}
            </h2>
            <p className="mt-3 text-[#1F2E2A]/70 line-clamp-3">{post.excerpt}</p>
            
            <div className="mt-6 text-sm font-semibold text-[#2D5A4A] group-hover:underline">
              Read article →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}