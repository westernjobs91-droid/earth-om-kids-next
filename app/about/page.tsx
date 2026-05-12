import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Taran Kaur | Earth & OM Kids',
  description: 'Meet Taran Kaur, Registered Early Childhood Educator and founder of Earth & OM Kids. Nearly 10 years experience bringing calm, playful yoga and mindfulness to children in Toronto schools and families.',
  openGraph: {
    title: 'About Taran Kaur | Earth & OM Kids Yoga Toronto',
    description: 'Registered Early Childhood Educator with nearly 10 years experience. Heart-centered, nature-inspired kids yoga and mindfulness in Toronto.',
  },
};

export default function About() {
  return (
    <>
      {/* Hero / About Header */}
      <div className="bg-white border-b border-[#E8D5B7]">
        <div className="max-w-5xl mx-auto px-6 pt-16 pb-12 text-center">
          <div className="inline px-4 py-1 bg-[#A7C4A0]/20 text-[#2D5A4A] text-xs font-semibold tracking-[1.5px] rounded-full mb-4">
            MEET THE FOUNDER
          </div>
          <h1 className="text-6xl tracking-tighter font-semibold heading-serif">Taran Kaur</h1>
          <p className="mt-3 text-2xl text-[#2D5A4A]/80">
            Registered Early Childhood Educator • Kids Yoga &amp; Mindfulness Teacher
          </p>
        </div>
      </div>

      {/* Photo + Bio Section (Kept as requested) */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-12 gap-x-12 items-start">
          {/* Photo + Credentials */}
          <div className="md:col-span-5">
            <div className="sticky top-24">
              <div className="aspect-[4/3] bg-[#E8D5B7] rounded-3xl overflow-hidden shadow-xl mb-6 relative">
                <img 
  src="/taran-photo.jpg" 
  alt="Taran Kaur - Founder of Earth &amp; OM Kids" 
  className="w-full h-full object-cover" 
/>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <div className="text-white text-sm">Toronto, Ontario</div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-[#E8D5B7]">
                <div className="flex items-center gap-x-3 mb-4">
                  <div className="text-[#2D5A4A]">
                    <i className="fa-solid fa-graduation-cap text-2xl"></i>
                  </div>
                  <div>
                    <div className="font-semibold">Credentials</div>
                    <div className="text-sm text-[#1F2E2A]/70">
                      Registered Early Childhood Educator (RECE)<br />
                      Nearly 10 years in early childhood education
                    </div>
                  </div>
                </div>
                <div className="text-xs text-[#2D5A4A]/70">
                  Additional training in children's yoga, mindfulness facilitation, and trauma-informed practices.
                </div>
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="md:col-span-7 mt-10 md:mt-0">
 <div className="prose prose-lg max-w-none text-[#1F2E2A]">
  <p>
    Earth &amp; OM Kids was founded with a clear belief: every child deserves to feel grounded, joyful, and connected to their body, breath, and inner world.
  </p>

  <p>
    With nearly a decade of experience as a Registered Early Childhood Educator in Toronto’s diverse childcare and Montessori communities, Taran has seen how children thrive when given the right tools for emotional regulation and self-awareness.
  </p>

  <p>
    Her approach is both professional and deeply nurturing. Every session is thoughtfully designed to meet children where they are, whether they are energetic toddlers or curious school-age kids. She blends playful movement, breathing games, stories, and calm moments in a way that feels natural and fun.
  </p>
</div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border-l-4 border-[#2D5A4A] pl-5">
                <div className="font-semibold text-lg">Philosophy</div>
                <p className="text-sm mt-1 text-[#1F2E2A]/75">
                  Nature-inspired. Heart-centered. Always respectful of each child’s unique pace and personality.
                </p>
              </div>
              <div className="border-l-4 border-[#2D5A4A] pl-5">
                <div className="font-semibold text-lg">Mission</div>
                <p className="text-sm mt-1 text-[#1F2E2A]/75">
                  To bring calm, confidence, and joy into the lives of Toronto children through the beautiful practice of yoga and mindfulness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why This Work Matters - Upgraded */}
      <section className="bg-white py-16 border-y border-[#E8D5B7]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-center text-4xl tracking-tighter font-semibold heading-serif mb-10">
            Why this work matters
          </h2>
          
          <div className="space-y-8 text-lg text-[#1F2E2A]/80 max-w-prose mx-auto">
            <p>
              “In my years working in early childhood settings, I saw so many children carrying stress they didn’t have words for. Yoga gave them a language through their bodies and breath to feel safe, strong, and calm.”
            </p>
            
            <p>
              “I created Earth &amp; OM Kids to bring that same gift into more classrooms and homes across Toronto. It’s not about perfect poses. It’s about helping children build lifelong tools for well-being in a way that feels playful, inclusive, and deeply respectful.”
            </p>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart - Premium Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="text-[#2D5A4A] text-xs tracking-[2px] font-semibold mb-2">WHAT SETS US APART</div>
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">More than just yoga classes</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-3xl border border-[#E8D5B7]">
            <h3 className="font-semibold text-xl mb-3">Developmentally Grounded</h3>
            <p className="text-[#1F2E2A]/70">Every session is designed with deep knowledge of child development, not just yoga poses.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#E8D5B7]">
            <h3 className="font-semibold text-xl mb-3">Heart-Centered Approach</h3>
            <p className="text-[#1F2E2A]/70">We meet each child with warmth, patience, and respect for their individual pace and personality.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#E8D5B7]">
            <h3 className="font-semibold text-xl mb-3">Educator-Led Expertise</h3>
            <p className="text-[#1F2E2A]/70">Led by a Registered Early Childhood Educator with nearly 10 years of real classroom experience.</p>
          </div>
        </div>
      </section>

      {/* Supporting the Community */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-[#E8D5B7]">
        <div className="text-center mb-10">
          <h2 className="text-4xl tracking-tighter font-semibold heading-serif">Supporting the whole community</h2>
          <p className="mt-3 text-[#1F2E2A]/70">We also support the adults who care for children</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-9 rounded-3xl border border-[#E8D5B7]">
            <h3 className="font-semibold text-2xl mb-4">Educator &amp; Staff Wellness</h3>
            <p className="text-[#1F2E2A]/75 mb-6">
              Custom workshops for teachers and ECEs focused on stress relief, breathwork, and self-regulation tools they can use personally and in the classroom.
            </p>
            <Link href="/contact" className="text-sm font-semibold text-[#2D5A4A]">
              Inquire about staff wellness →
            </Link>
          </div>

          <div className="bg-white p-9 rounded-3xl border border-[#E8D5B7]">
            <h3 className="font-semibold text-2xl mb-4">Parent &amp; Family Offerings</h3>
            <p className="text-[#1F2E2A]/75 mb-6">
              Workshops and family yoga experiences that help parents understand and practice mindfulness alongside their children.
            </p>
            <Link href="/contact" className="text-sm font-semibold text-[#2D5A4A]">
              Explore family programs →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <div className="bg-[#2D5A4A] text-white py-16">
        <div className="max-w-lg mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold tracking-tight">Let’s work together</h3>
          <p className="mt-3 text-white/80">
            Whether you’re a school, childcare centre, or parent — I’d love to bring calm and confidence to the children in your care.
          </p>
          <Link 
            href="/contact" 
            className="mt-8 inline-flex items-center justify-center gap-x-3 px-10 py-4 bg-white text-[#2D5A4A] font-semibold rounded-3xl text-lg hover:bg-[#F8F1E9] transition"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </>
  );
}