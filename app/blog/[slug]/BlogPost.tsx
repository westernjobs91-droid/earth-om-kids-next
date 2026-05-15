'use client';

import React from 'react';
import Link from 'next/link';

interface BlogPost {
  title: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
}

const blogPosts: Record<string, BlogPost> = {
  "benefits-of-kids-yoga-for-emotional-regulation": {
    title: "How Kids Yoga Helps with Emotional Regulation in Toronto Classrooms",
    date: "May 2026",
    readTime: "7 min read",
    category: "Emotional Regulation",
    content: `In today’s fast-paced world, many children in Toronto classrooms are struggling with big emotions, frustration, anxiety, anger, and difficulty transitioning between activities. As a result, teachers and parents are increasingly looking for tools that go beyond traditional discipline.

This is where kids yoga and mindfulness have shown powerful results.

Why Emotional Regulation Matters in School

Children who can recognize and manage their emotions tend to: Focus better during lessons, Have fewer outbursts and meltdowns , Build stronger relationships with peers and teachers , Perform better academically

Research shows that mindfulness practices (including yoga) can significantly improve emotional regulation in children as young as 4 years old.

How Kids Yoga Supports Emotional Regulation

Here’s how our programs help children in real Toronto classrooms:

1. Breathing Techniques  
Simple breathing exercises teach children how to calm their nervous system when they feel overwhelmed. Techniques like “balloon breathing” or “smell the flower, blow out the candle” give kids practical tools they can use anytime.

2. Body Awareness  
Through yoga poses and movement, children become more aware of physical sensations linked to emotions (tight chest when anxious, clenched fists when angry). This awareness is the first step toward self-regulation.

3. Mindful Movement  
Slow, intentional movement helps discharge excess energy and tension in a healthy way, especially helpful for active or anxious children.

4. Calm-Down Routines  
We teach short sequences children can do when they feel dysregulated giving them autonomy instead of relying on adults to calm them down.

Real Results We See in Toronto Schools

Teachers consistently report: Fewer disruptions during transitions , Children using breathing techniques on their own , Improved ability to express feelings with words instead of actions , A calmer overall classroom environment

Final Thoughts

Kids yoga is not just about poses it’s about giving children lifelong tools for emotional wellbeing. In a city as busy and stimulating as Toronto, these skills are more valuable than ever.

If you’re a teacher, school administrator, or parent interested in bringing these tools to your classroom or home, feel free to reach out.`
  },

  "breathing-exercises-for-kids": {
    title: "5 Simple Breathing Exercises You Can Practice with Your Child at Home",
    date: "May 2026",
    readTime: "5 min read",
    category: "Mindfulness",
    content: `Breathing exercises are one of the easiest and most effective ways to help children calm down, focus, and manage big emotions. The best part? You can practice them together at home in just a few minutes.

Here are 5 child-friendly breathing exercises we often teach in our Toronto programs:

1. Balloon Breathing
Sit comfortably together. Place hands on belly. Breathe in slowly through the nose, imagining you’re filling a balloon in your belly. Breathe out slowly through the mouth, letting the balloon deflate. Repeat 5 times.

Great for: Anxiety, anger, and bedtime.

2. Smell the Flower, Blow Out the Candle
Pretend to smell a flower (inhale through nose). Pretend to blow out a candle (exhale through mouth). Do this slowly and gently.

Great for: Young children who need a simple, visual technique.

3. Bunny Breathing
Take 3 quick sniffs through the nose (like a bunny). Then exhale slowly through the mouth. Repeat 4–5 rounds.

Great for: High energy or restless children.

4. Dragon Breathing
Inhale deeply through the nose. Exhale forcefully through the mouth while making a “roar” sound. Add arm movements like a dragon spreading its wings.

Great for: Releasing frustration or anger in a fun way.

5. 5-Finger Breathing
Hold one hand up. Use the pointer finger of the other hand to trace around each finger. Breathe in as you trace up one side of the finger. Breathe out as you trace down the other side. Go through all 5 fingers.

Great for: Focus and calming down anywhere (even at school).

How Often Should You Practice?

Even 3–5 minutes a day can make a noticeable difference. Try practicing during calm moments first (not just when your child is upset), so the techniques become familiar and easy to use when needed.`
  },

  "what-to-expect-in-kids-yoga-class": {
    title: "What to Expect in a Kids Yoga Class (Ages 3–6)",
    date: "May 2026",
    readTime: "6 min read",
    category: "For Parents",
    content: `If you’re considering signing your child up for a kids yoga class in Toronto, you might be wondering what actually happens during a session?

Here’s a breakdown of what a typical class looks like for preschool and early school-age children:

Class Structure

A well-designed kids yoga class usually follows this flow:

1. Arrival & Centering (3–5 mins)  
Children settle in with a short breathing exercise or mindful moment.

2. Warm-Up Movement (5–7 mins)  
Fun animal walks, stretches, and movement games to get the body ready.

3. Main Yoga Practice (10–15 mins)  
Story-based yoga where children move through poses as part of a fun narrative (e.g., going on a jungle adventure or visiting the ocean).

4. Breathing & Mindfulness Games (5–7 mins)  
Simple breathing techniques, calm-down activities, or short meditations.

5. Relaxation & Closing (3–5 mins)  
Guided relaxation, sometimes with a short story or visualization.

What Makes Kids Yoga Different from Adult Yoga?

Lots of movement and play, Stories and imagination are central, No pressure to be “perfect” in poses, Focus on fun, confidence, and emotional skills rather than flexibility

What Should Your Child Wear?

Comfortable clothes they can move in (leggings, t-shirts, or joggers). Bare feet are ideal. No special yoga mat is usually required for younger children.

How Will My Child Benefit?

Even after just a few classes, many parents notice:
- Better ability to calm down when upset
- Improved focus and listening skills
- More confidence and body awareness
- Better sleep`
  },

  "yoga-for-focus-and-attention": {
    title: "Can Yoga Improve Focus and Attention in School-Age Children?",
    date: "May 2026",
    readTime: "8 min read",
    category: "Child Development",
    content: `Many parents and teachers in Toronto ask us the same question: “Can yoga actually help my child focus better in school?”

The short answer is yes and there’s growing research to support it.

Why Focus is Challenging for Kids Today

Between screens, busy schedules, and high stimulation, many children struggle with:
Sustained attention, Sitting still for longer periods, Transitioning between tasks, Managing distractions

How Yoga Helps Improve Focus

Yoga supports attention in several ways:

1. Strengthens the Prefrontal Cortex  
Mindfulness and movement practices have been shown to support brain areas responsible for focus and self-control.

2. Reduces Stress and Anxiety  
When children are calmer, they have more mental bandwidth for learning and paying attention.

3. Improves Body-Brain Connection  
Yoga helps children become more aware of their physical state, which supports better self-regulation.

4. Teaches Present-Moment Awareness  
Through breath and movement, children practice staying in the present instead of getting lost in thoughts or distractions.

What the Research Says

Studies have found that children who practice yoga and mindfulness regularly show improvements in:
Attention span, Executive function, Classroom behavior, Academic performance

Practical Tips for Parents

Practice short breathing exercises together at home, Encourage movement breaks during homework, Consider enrolling your child in a consistent kids yoga program`
  }
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-semibold">Blog post not found</h1>
        <Link href="/blog" className="mt-6 inline-block text-[#2D5A4A] hover:underline">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blog" className="text-sm text-[#2D5A4A] hover:underline mb-6 inline-block">
        ← Back to Blog
      </Link>

      <div className="flex items-center gap-x-3 mb-4">
        <span className="text-xs px-3 py-1 bg-[#F8F1E9] rounded-full text-[#2D5A4A]">{post.category}</span>
        <span className="text-xs text-[#1F2E2A]/50">{post.date} • {post.readTime}</span>
      </div>

      <h1 className="text-4xl tracking-tighter font-semibold heading-serif mb-8">{post.title}</h1>

      <div className="prose prose-lg max-w-none text-[#1F2E2A]/90">
        {post.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-5 leading-relaxed">{paragraph}</p>
        ))}
      </div>
    </div>
  );
}