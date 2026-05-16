import { Metadata } from 'next';
import BlogPost from './BlogPost';

// ─── Post metadata map ────────────────────────────────────────────────────────
// Keeps title/description/canonical in sync with the post content in BlogPost.tsx
const postMeta: Record<string, { title: string; description: string }> = {
  'benefits-of-kids-yoga-for-emotional-regulation': {
    title: 'How Kids Yoga Helps with Emotional Regulation in Toronto Classrooms | Earth & OM Kids',
    description: 'Discover how simple yoga and mindfulness practices help children manage big emotions, reduce anxiety, and improve focus in Toronto schools. Backed by real classroom results.',
  },
  'breathing-exercises-for-kids': {
    title: '5 Simple Breathing Exercises to Practice with Your Child at Home | Earth & OM Kids',
    description: 'Easy, fun breathing techniques that help children calm down, improve concentration, and sleep better. Taught in our Toronto kids yoga programs.',
  },
  'what-to-expect-in-kids-yoga-class': {
    title: 'What to Expect in a Kids Yoga Class (Ages 3–6) | Earth & OM Kids',
    description: 'A complete guide for Toronto parents on what happens during a typical kids yoga class and how it benefits your child aged 3 to 6 years.',
  },
  'yoga-for-focus-and-attention': {
    title: 'Can Yoga Improve Focus and Attention in School-Age Children? | Earth & OM Kids',
    description: 'Research-backed benefits of yoga for improving concentration, reducing restlessness, and supporting learning in school-age children across Toronto.',
  },
  'best-kids-yoga-classes-toronto': {
  title: 'Best Kids Yoga Classes in Toronto 2026: A Parent\'s Complete Guide | Earth & OM Kids',
  description: 'The complete Toronto parent guide to finding the best kids yoga classes. What to look for, questions to ask, and why Earth and OM Kids is trusted by 25+ schools.',
},
'how-to-choose-school-yoga-provider-toronto': {
  title: 'How to Choose a School Yoga Provider in Toronto: 8 Questions to Ask | Earth & OM Kids',
  description: '8 essential questions every Toronto school principal and childcare director should ask before booking a kids yoga provider. Written by a trained Early Childhood Educator.',
},
'montessori-and-yoga-toronto': {
  title: 'Montessori and Yoga: Why They Are a Perfect Match for Toronto Children | Earth & OM Kids',
  description: 'Discover why Montessori schools across Toronto are embracing kids yoga. Shared values, movement as learning, and real results from Toronto Montessori communities.',
},
};

// ─── Dynamic metadata per post ────────────────────────────────────────────────
export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const meta = postMeta[params.slug];

  // Fallback if slug not found
  if (!meta) {
    return {
      title: 'Blog | Earth & OM Kids',
      description: 'Kids yoga and mindfulness insights from Earth & OM Kids Toronto.',
    };
  }

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://kids.earthandom.ca/blog/${params.slug}`,
      type: 'article',
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <BlogPost params={params} />;
}