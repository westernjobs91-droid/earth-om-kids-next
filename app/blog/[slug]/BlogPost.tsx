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
    content: `In today's fast-paced world, many children in Toronto classrooms are struggling with big emotions, frustration, anxiety, anger, and difficulty transitioning between activities. As a result, teachers and parents are increasingly looking for tools that go beyond traditional discipline.

This is where kids yoga and mindfulness have shown powerful results.

Why Emotional Regulation Matters in School

Children who can recognize and manage their emotions tend to focus better during lessons, have fewer outbursts and meltdowns, build stronger relationships with peers and teachers, and perform better academically.

Research shows that mindfulness practices including yoga can significantly improve emotional regulation in children as young as 4 years old.

How Kids Yoga Supports Emotional Regulation

Here is how our programs help children in real Toronto classrooms:

1. Breathing Techniques
Simple breathing exercises teach children how to calm their nervous system when they feel overwhelmed. Techniques like balloon breathing or smell the flower blow out the candle give kids practical tools they can use anytime.

2. Body Awareness
Through yoga poses and movement, children become more aware of physical sensations linked to emotions such as a tight chest when anxious or clenched fists when angry. This awareness is the first step toward self-regulation.

3. Mindful Movement
Slow, intentional movement helps discharge excess energy and tension in a healthy way, especially helpful for active or anxious children.

4. Calm-Down Routines
We teach short sequences children can do when they feel dysregulated, giving them autonomy instead of relying on adults to calm them down.

Real Results We See in Toronto Schools

Teachers consistently report fewer disruptions during transitions, children using breathing techniques on their own, improved ability to express feelings with words instead of actions, and a calmer overall classroom environment.

Final Thoughts

Kids yoga is not just about poses. It is about giving children lifelong tools for emotional wellbeing. In a city as busy and stimulating as Toronto, these skills are more valuable than ever.

If you are a teacher, school administrator, or parent interested in bringing these tools to your classroom or home, feel free to reach out.`
  },

  "breathing-exercises-for-kids": {
    title: "5 Simple Breathing Exercises You Can Practice with Your Child at Home",
    date: "May 2026",
    readTime: "5 min read",
    category: "Mindfulness",
    content: `Breathing exercises are one of the easiest and most effective ways to help children calm down, focus, and manage big emotions. The best part is you can practice them together at home in just a few minutes.

Here are 5 child-friendly breathing exercises we often teach in our Toronto programs:

1. Balloon Breathing
Sit comfortably together. Place hands on belly. Breathe in slowly through the nose, imagining you are filling a balloon in your belly. Breathe out slowly through the mouth, letting the balloon deflate. Repeat 5 times.

Great for anxiety, anger, and bedtime.

2. Smell the Flower, Blow Out the Candle
Pretend to smell a flower by inhaling through the nose. Pretend to blow out a candle by exhaling through the mouth. Do this slowly and gently.

Great for young children who need a simple, visual technique.

3. Bunny Breathing
Take 3 quick sniffs through the nose like a bunny. Then exhale slowly through the mouth. Repeat 4 to 5 rounds.

Great for high energy or restless children.

4. Dragon Breathing
Inhale deeply through the nose. Exhale forcefully through the mouth while making a roar sound. Add arm movements like a dragon spreading its wings.

Great for releasing frustration or anger in a fun way.

5. Five Finger Breathing
Hold one hand up. Use the pointer finger of the other hand to trace around each finger. Breathe in as you trace up one side of the finger. Breathe out as you trace down the other side. Go through all 5 fingers.

Great for focus and calming down anywhere, even at school.

How Often Should You Practice?

Even 3 to 5 minutes a day can make a noticeable difference. Try practicing during calm moments first, not just when your child is upset, so the techniques become familiar and easy to use when needed.`
  },

  "what-to-expect-in-kids-yoga-class": {
    title: "What to Expect in a Kids Yoga Class (Ages 3 to 6)",
    date: "May 2026",
    readTime: "6 min read",
    category: "For Parents",
    content: `If you are considering signing your child up for a kids yoga class in Toronto, you might be wondering what actually happens during a session.

Here is a breakdown of what a typical class looks like for preschool and early school-age children:

Class Structure

A well-designed kids yoga class usually follows this flow:

1. Arrival and Centering (3 to 5 minutes)
Children settle in with a short breathing exercise or mindful moment.

2. Warm-Up Movement (5 to 7 minutes)
Fun animal walks, stretches, and movement games to get the body ready.

3. Main Yoga Practice (10 to 15 minutes)
Story-based yoga where children move through poses as part of a fun narrative, for example going on a jungle adventure or visiting the ocean.

4. Breathing and Mindfulness Games (5 to 7 minutes)
Simple breathing techniques, calm-down activities, or short meditations.

5. Relaxation and Closing (3 to 5 minutes)
Guided relaxation, sometimes with a short story or visualization.

What Makes Kids Yoga Different from Adult Yoga?

Kids yoga involves lots of movement and play. Stories and imagination are central to every session. There is no pressure to be perfect in poses. The focus is on fun, confidence, and emotional skills rather than flexibility.

What Should Your Child Wear?

Comfortable clothes they can move in such as leggings, t-shirts, or joggers. Bare feet are ideal. No special yoga mat is usually required for younger children.

How Will My Child Benefit?

Even after just a few classes, many parents notice better ability to calm down when upset, improved focus and listening skills, more confidence and body awareness, and better sleep.`
  },

  "yoga-for-focus-and-attention": {
    title: "Can Yoga Improve Focus and Attention in School-Age Children?",
    date: "May 2026",
    readTime: "8 min read",
    category: "Child Development",
    content: `Many parents and teachers in Toronto ask us the same question: can yoga actually help my child focus better in school?

The short answer is yes and there is growing research to support it.

Why Focus is Challenging for Kids Today

Between screens, busy schedules, and high stimulation, many children struggle with sustained attention, sitting still for longer periods, transitioning between tasks, and managing distractions.

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

Studies have found that children who practice yoga and mindfulness regularly show improvements in attention span, executive function, classroom behavior, and academic performance.

Practical Tips for Parents

Practice short breathing exercises together at home. Encourage movement breaks during homework. Consider enrolling your child in a consistent kids yoga program in Toronto.`
  },

  "best-kids-yoga-classes-toronto": {
    title: "Best Kids Yoga Classes in Toronto 2026: A Parent's Complete Guide",
    date: "May 2026",
    readTime: "9 min read",
    category: "For Parents",
    content: `Looking for kids yoga classes in Toronto? You are not alone. More Toronto parents than ever are searching for ways to help their children manage stress, improve focus, and build emotional resilience. Kids yoga has become one of the most popular enrichment activities in the city, and for good reason.

This guide covers everything you need to know to find the right kids yoga program for your child in Toronto.

What to Look for in a Kids Yoga Class in Toronto

Not all kids yoga programs are created equal. Here are the key things to look for when choosing a program for your child:

1. Instructor Qualifications
The most important factor is who is teaching. Look for instructors with a background in child development, not just yoga. An instructor with early childhood education training understands how children learn, regulate emotions, and develop at different ages. This makes a significant difference in the quality and safety of the program.

2. Age-Appropriate Programming
A good kids yoga program is not a scaled-down adult yoga class. Look for programs that use storytelling, animal poses, songs, and games appropriate for your child's age. Toddler programs should be very different from programs for 8 year olds.

3. Small Group Sizes
Smaller groups mean more individual attention and a safer, more connected experience for each child. Look for programs with no more than 12 to 16 children per session.

4. Mobile and Convenient
The best Toronto kids yoga programs come to you. Look for providers who deliver programs at your school, daycare, or home rather than requiring you to travel across the city.

5. Proven Track Record
Ask for references from schools or parents. Look for providers who have been working with Toronto children for multiple years and have real testimonials from local schools and families.

Why Earth and OM Kids Stands Out in Toronto

Earth and OM Kids has been serving Toronto schools, daycares, and families since 2018. Our programs are led by Taran Kaur, a trained Early Childhood Educator with nearly 10 years of experience in Toronto childcare and Montessori communities.

We are trusted by over 25 Toronto schools and childcare centres including Beach Hill Montessori, Abacus Montessori, Lycée Français Toronto, and East Toronto Village Children's Centre.

We serve all of Toronto and the Greater Toronto Area including North York, Scarborough, Etobicoke, Downtown Toronto, Vaughan, Mississauga, and Markham.

What Ages Are Kids Yoga Classes Available for in Toronto?

Earth and OM Kids offers programs for children from 18 months to 12 years old. This makes us one of the few Toronto kids yoga providers who work with children as young as 18 months, giving toddlers an early foundation for mindfulness and body awareness.

What Types of Kids Yoga Programs Are Available in Toronto?

We offer in-school and daycare yoga programs, after-school weekly yoga classes, wellness weeks and PD day programs, yoga birthday parties, family yoga workshops, toddler yoga sessions, and mindfulness programs for children with diverse learning needs.

How to Book a Kids Yoga Class in Toronto

Getting started is simple. Visit our contact page, fill out the form, or call us at 647 856 8206. We respond within 1 to 2 business days with a custom proposal tailored to your school, daycare, or family.`
  },

  "how-to-choose-school-yoga-provider-toronto": {
    title: "How to Choose a School Yoga Provider in Toronto: 8 Questions to Ask",
    date: "May 2026",
    readTime: "7 min read",
    category: "For Schools",
    content: `If you are a school principal, program director, or childcare administrator in Toronto looking to bring a yoga or mindfulness program into your school, the number of options can feel overwhelming. How do you know which provider is the right fit for your community?

Here are 8 essential questions to ask before booking any kids yoga provider for your Toronto school or childcare centre.

1. What is the instructor's background in child development?
This is the most important question you can ask. A yoga certification alone does not qualify someone to work with young children in a school setting. Look for providers who have formal training in early childhood education, child psychology, or a related field. This background ensures sessions are developmentally appropriate and safe for your specific age group.

2. Have you worked in school environments before?
Working in a school is very different from teaching in a yoga studio. The best school yoga providers understand classroom dynamics, how to manage groups of children, how to adapt when things do not go as planned, and how to work respectfully within a school's culture and schedule.

3. What age groups do you work with?
Make sure the provider has specific experience with your school's age range. A provider who primarily works with teenagers may not be equipped to deliver an effective program for 3 and 4 year olds, and vice versa.

4. Can the program be customized to our school's goals?
Every school community is different. The best providers will take time to understand your specific goals, whether that is improving emotional regulation, supporting calm transitions, building focus, or celebrating a wellness week, and design a program accordingly.

5. Do you carry liability insurance?
Any professional provider working in a school setting should carry appropriate liability insurance. Do not hesitate to ask for proof before signing any agreement.

6. How do you handle children with diverse learning needs?
Your classroom likely includes children with a range of learning profiles, sensory needs, and abilities. Ask how the provider adapts their sessions to be inclusive and supportive for every child in the room.

7. Can you provide references from Toronto schools?
Ask for references from schools or childcare centres similar to yours. A reputable provider will be happy to connect you with past partners who can speak to their professionalism and the quality of their programs.

8. What does a typical session look like?
Ask for a detailed description of a session structure. A well-designed school yoga session should have a clear beginning, middle, and end, with age-appropriate activities throughout. Be cautious of providers who cannot clearly describe what happens in their sessions.

Why These Questions Matter

At Earth and OM Kids, we welcome every one of these questions. Taran Kaur is a trained Early Childhood Educator with nearly 10 years of experience working in Toronto schools, daycares, and Montessori communities. We carry full liability insurance, work with children from 18 months to 12 years old, and have established partnerships with over 25 Toronto schools and childcare centres.

If you are looking for a school yoga provider in Toronto and the GTA, we would love to connect. Reach out through our contact page or call us at 647 856 8206.`
  },

  "montessori-and-yoga-toronto": {
    title: "Montessori and Yoga: Why They Are a Perfect Match for Toronto Children",
    date: "May 2026",
    readTime: "6 min read",
    category: "For Schools",
    content: `If you work in or send your child to a Montessori school in Toronto, you are already familiar with the Montessori philosophy of respecting the child, following the child's lead, and supporting whole child development through intentional, prepared environments.

What you may not have considered is how beautifully children's yoga aligns with these same principles. In our experience working with Montessori schools across Toronto and the GTA, we have found that yoga and Montessori are not just compatible, they are a genuinely powerful combination.

Shared Values: Respect for the Child

Both Montessori and yoga share a deep respect for the individual child. In Montessori education, children are given freedom within structure, encouraged to move at their own pace, and trusted to make meaningful choices in their learning. Kids yoga follows the same philosophy. There is no pressure to perform a pose perfectly, no comparison between children, and no rigid expectations. Every child is met where they are.

Movement as Learning

Montessori classrooms embrace movement as a natural and necessary part of learning. Children are rarely expected to sit still for long periods. Kids yoga extends this principle by offering intentional, purposeful movement that builds body awareness, coordination, and concentration, all core Montessori developmental goals.

The Prepared Environment

Montessori education places enormous value on the prepared environment: a calm, orderly, beautiful space that supports focused work. A kids yoga session creates a similar temporary prepared environment through a predictable structure, gentle music, a clear beginning and end, and a calm and welcoming atmosphere.

Emotional Intelligence and Self-Regulation

One of the most important outcomes of both Montessori education and children's yoga is the development of emotional intelligence and self-regulation. Montessori classrooms build these skills through independence and choice. Yoga builds them through breathing, body awareness, and mindfulness. Together, the two approaches give children a remarkably strong foundation for managing their inner world.

Our Experience with Toronto Montessori Schools

Earth and OM Kids has had the privilege of working with several Montessori schools across Toronto and the GTA including Beach Hill Montessori and Abacus Montessori. In every case, we have found that Montessori students take to yoga naturally. The values they have absorbed in their daily school life make them unusually receptive to the mindfulness, self-awareness, and respectful movement that yoga offers.

If you are a Montessori school director or parent in Toronto and you are curious about bringing yoga into your school community, we would love to talk. Visit our schools page or contact us directly at 647 856 8206.`
  }
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-semibold">Blog post not found</h1>
        <Link href="/blog" className="mt-6 inline-block text-[#2D5A4A] hover:underline">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blog" className="text-sm text-[#2D5A4A] hover:underline mb-6 inline-block">
        Back to Blog
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

      {/* Author Bio */}
      <div className="mt-16 pt-8 border-t border-[#E8D5B7]">
        <div className="flex items-start gap-x-5">
          <img
            src="/taran-photo.jpg"
            alt="Taran Kaur, trained Early Childhood Educator and founder of Earth and OM Kids"
            className="w-14 h-14 rounded-2xl object-cover flex-shrink-0"
          />
          <div>
            <div className="font-semibold text-[#1F2E2A]">Taran Kaur</div>
            <div className="text-sm text-[#2D5A4A] mb-2">Trained Early Childhood Educator · Founder of Earth and OM Kids</div>
            <p className="text-sm text-[#1F2E2A]/70 leading-relaxed">
              Taran has nearly 10 years of experience working with children in Toronto schools, daycares, and Montessori communities. She founded Earth and OM Kids to bring professional kids yoga and mindfulness programs to children and families across Toronto and the GTA.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10 bg-[#F8F1E9] rounded-3xl p-8 text-center">
        <h3 className="text-xl font-semibold heading-serif mb-2">Bring this to your school or family</h3>
        <p className="text-sm text-[#1F2E2A]/70 mb-5">
          Earth and OM Kids delivers professional yoga and mindfulness programs across Toronto and the GTA. Schools, daycares, and families welcome.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-3 bg-[#2D5A4A] text-white font-semibold rounded-2xl hover:bg-[#1F2E2A] transition text-sm"
        >
          Get in Touch
        </Link>
      </div>

      {/* Back */}
      <div className="mt-10">
        <Link href="/blog" className="text-sm text-[#2D5A4A] hover:underline">
          Back to all posts
        </Link>
      </div>
    </div>
  );
}