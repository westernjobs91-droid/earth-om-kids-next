import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'For Families | Earth & OM Kids',
  description: 'Gentle, fun & imaginative kids yoga and family mindfulness classes in Toronto. Ages 18 months and up. Help your child build calm, confidence, and healthy habits.',
  openGraph: {
    title: 'Family Yoga & Kids Yoga Classes Toronto | Earth & OM Kids',
    description: 'Gentle, fun & imaginative kids yoga and family mindfulness classes in Toronto. Ages 18 months and up.',
  },
};

export default function Families() {
  return (
    <>
      <div className="max-w-5xl mx-auto px-6 pt-14 pb-10 text-center">
        <div className="inline px-4 py-1 bg-[#A7C4A0]/20 text-[#2D5A4A] text-xs font-semibold tracking-[1.5px] rounded-full mb-3">FOR PARENTS &amp; FAMILIES</div>
        <h1 className="text-6xl tracking-tighter font-semibold heading-serif">Gentle, fun &amp; imaginative<br />yoga for your child</h1>
        <p className="mt-4 max-w-md mx-auto text-xl text-[#1F2E2A]/70">Help your child develop calm, confidence, focus, and emotional balance through playful yoga and mindfulness — starting from 18 months.</p>
      </div>

      {/* What Families Can Expect */}
      <section className="max-w-6xl mx-auto px-6 pb-14">
        <div className="bg-white rounded-3xl p-10 border border-[#E8D5B7]">
          <div className="grid md:grid-cols-2 gap-x-10">
            <div>
              <h2 className="text-3xl tracking-tight font-semibold heading-serif">What makes our family classes special</h2>
              <div className="mt-6 space-y-5 text-[#1F2E2A]/80">
                <div className="flex gap-4">
                  <span className="mt-1 text-[#2D5A4A]"><i className="fa-solid fa-heart text-xl"></i></span>
                  <div><span className="font-semibold">Playful &amp; Imaginative</span><br />Stories, animal poses, games, and songs keep even the youngest children engaged.</div>
                </div>
                <div className="flex gap-4">
                  <span className="mt-1 text-[#2D5A4A]"><i className="fa-solid fa-heart text-xl"></i></span>
                  <div><span className="font-semibold">Calm &amp; Regulating</span><br />Breathing exercises and mindful moments help children (and parents) feel centered.</div>
                </div>
                <div className="flex gap-4">
                  <span className="mt-1 text-[#2D5A4A]"><i className="fa-solid fa-heart text-xl"></i></span>
                  <div><span className="font-semibold">Inclusive &amp; Supportive</span><br />No experience needed. Every child is celebrated exactly as they are.</div>
                </div>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <div className="bg-[#F8F1E9] p-7 rounded-2xl">
                <div className="uppercase text-xs tracking-widest font-semibold text-[#2D5A4A] mb-3">TYPICAL CLASS FLOW</div>
                <ol className="space-y-3 text-sm">
                  <li><span className="font-semibold">1. Welcome &amp; Centering</span> — Songs and gentle breathing to arrive together.</li>
                  <li><span className="font-semibold">2. Movement &amp; Play</span> — Animal poses, yoga stories, and creative movement.</li>
                  <li><span className="font-semibold">3. Mindfulness Moments</span> — Simple breathing games and calm-down techniques.</li>
                  <li><span className="font-semibold">4. Closing &amp; Gratitude</span> — Reflection, relaxation, and positive affirmations.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for Kids & Families */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="text-center text-3xl font-semibold tracking-tight heading-serif mb-8">Why families love Earth &amp; OM Kids</h2>
        
        <div className="grid md:grid-cols-3 gap-5">
          <div className="bg-white p-7 rounded-3xl border border-[#E8D5B7]">
            <div className="text-3xl mb-4">🧘‍♀️</div>
            <div className="font-semibold">For Your Child</div>
            <ul className="mt-3 text-sm space-y-1 text-[#1F2E2A]/80">
              <li>• Better emotional regulation</li>
              <li>• Improved focus and sleep</li>
              <li>• Greater self-confidence</li>
              <li>• Tools to manage big feelings</li>
              <li>• Healthy relationship with movement</li>
            </ul>
          </div>
          <div className="bg-white p-7 rounded-3xl border border-[#E8D5B7]">
            <div className="text-3xl mb-4">👨‍👩‍👧</div>
            <div className="font-semibold">For Parents &amp; Caregivers</div>
            <ul className="mt-3 text-sm space-y-1 text-[#1F2E2A]/80">
              <li>• Quality bonding time</li>
              <li>• Learn simple mindfulness tools to use at home</li>
              <li>• Peaceful family routines</li>
              <li>• Community with like-minded families</li>
            </ul>
          </div>
          <div className="bg-white p-7 rounded-3xl border border-[#E8D5B7]">
            <div className="text-3xl mb-4">🌱</div>
            <div className="font-semibold">Long-term Impact</div>
            <p className="mt-3 text-sm text-[#1F2E2A]/80">Children who practice yoga and mindfulness from a young age develop lifelong skills for stress management, self-awareness, and emotional intelligence that benefit them in school and beyond.</p>
          </div>
        </div>
      </section>

      {/* Current Offerings */}
      <section className="bg-white border-y border-[#E8D5B7] py-14">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-center text-3xl font-semibold tracking-tight heading-serif mb-8">Current family offerings</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 border border-[#E8D5B7] rounded-3xl">
              <div className="font-semibold text-xl">Weekly After-School &amp; Weekend Classes</div>
              <p className="text-sm mt-2 text-[#1F2E2A]/70">Small-group classes at select Toronto locations. Perfect for ongoing practice and community.</p>
              <div className="mt-5 text-xs uppercase tracking-wider text-[#2D5A4A] font-semibold">Ages 18mo – 10 years • 45–60 min</div>
              <Link href="/contact" className="text-sm mt-4 inline-block font-semibold text-[#2D5A4A]">Check current schedule &amp; locations →</Link>
            </div>
            
            <div className="p-8 border border-[#E8D5B7] rounded-3xl">
              <div className="font-semibold text-xl">Family Yoga Workshops &amp; Events</div>
              <p className="text-sm mt-2 text-[#1F2E2A]/70">Special themed sessions where parents and children practice together. Great for birthdays, holidays, or just family fun.</p>
              <div className="mt-5 text-xs uppercase tracking-wider text-[#2D5A4A] font-semibold">All ages welcome • Flexible scheduling</div>
              <Link href="/contact" className="text-sm mt-4 inline-block font-semibold text-[#2D5A4A]">Inquire about upcoming workshops →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="max-w-3xl mx-auto px-6 py-14 text-center">
        <div className="text-[#E07A5F] flex justify-center gap-x-1 mb-4">
          <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
        </div>
        <blockquote className="italic text-xl">"My 4-year-old asks every week if it’s yoga day. Taran has such a gentle, magical way with the children. We’ve noticed a real difference in how he handles frustration at home."</blockquote>
        <div className="mt-5 text-sm font-semibold">— Parent of a 4-year-old, Beach Hill area</div>
      </section>

      {/* CTA */}
      <div className="bg-[#2D5A4A] text-white py-14">
        <div className="max-w-md mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold tracking-tight">Ready to start your family’s yoga journey?</h3>
          <p className="mt-3 text-white/80">Whether you want weekly classes or a special workshop, we’d love to welcome you.</p>
          <Link href="/contact" className="mt-6 inline-block px-9 py-4 bg-white text-[#2D5A4A] font-semibold rounded-3xl">Contact us to join or inquire</Link>
        </div>
      </div>
    </>
  );
}
