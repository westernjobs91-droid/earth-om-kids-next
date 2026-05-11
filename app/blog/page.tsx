import { Metadata } from 'next';
import Link from 'next/link';
import BlogNewsletter from '@/components/BlogNewsletter';

export const metadata: Metadata = {
  title: 'Blog & Resources | Earth & OM Kids',
  description: 'Helpful articles on kids yoga, mindfulness for children, emotional regulation, and bringing calm to Toronto classrooms and families.',
};

export default function Blog() {
  return (
    <>
      <div className="max-w-5xl mx-auto px-6 pt-14 pb-10">
        <div className="text-center">
          <div className="inline px-4 py-1 bg-[#A7C4A0]/20 text-[#2D5A4A] text-xs font-semibold tracking-[1.5px] rounded-full mb-3">YOGA &amp; MINDFULNESS RESOURCES</div>
          <h1 className="text-6xl tracking-tighter font-semibold heading-serif">Insights for raising calm, confident kids</h1>
          <p className="mt-4 max-w-md mx-auto text-lg text-[#1F2E2A]/70">Practical tips, research-backed insights, and stories from our work with Toronto children and schools.</p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Post 1 */}
          <a href="#" className="group block bg-white rounded-3xl overflow-hidden border border-[#E8D5B7] hover:border-[#2D5A4A]/40 transition">
            <div className="h-48 bg-[#E8D5B7] relative">
              <img src="https://picsum.photos/id/1016/600/400" alt="Child doing yoga pose in classroom" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 text-xs font-semibold rounded-full">FOR EDUCATORS</div>
            </div>
            <div className="p-7">
              <div className="text-xs text-[#2D5A4A] font-semibold tracking-wider">JANUARY 2026 • 8 MIN READ</div>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight group-hover:text-[#2D5A4A] transition">5 Simple Ways to Bring Mindfulness into a Busy Classroom</h3>
              <p className="mt-3 text-sm text-[#1F2E2A]/75 line-clamp-3">Quick, low-prep techniques that help children regulate emotions and improve focus — without adding more to your plate.</p>
              <div className="mt-5 flex items-center text-sm font-semibold text-[#2D5A4A]">Read article <i className="fa-solid fa-arrow-right ml-2 text-xs group-hover:translate-x-1 transition"></i></div>
            </div>
          </a>

          {/* Post 2 */}
          <a href="#" className="group block bg-white rounded-3xl overflow-hidden border border-[#E8D5B7] hover:border-[#2D5A4A]/40 transition">
            <div className="h-48 bg-[#E8D5B7] relative">
              <img src="https://picsum.photos/id/1005/600/400" alt="Toddler doing yoga with parent" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 text-xs font-semibold rounded-full">FOR PARENTS</div>
            </div>
            <div className="p-7">
              <div className="text-xs text-[#2D5A4A] font-semibold tracking-wider">DECEMBER 2025 • 6 MIN READ</div>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight group-hover:text-[#2D5A4A] transition">How to Introduce Yoga to Toddlers (Without the Meltdowns)</h3>
              <p className="mt-3 text-sm text-[#1F2E2A]/75 line-clamp-3">Practical, playful strategies that work with 18-month to 3-year-olds — even on the wiggly days.</p>
              <div className="mt-5 flex items-center text-sm font-semibold text-[#2D5A4A]">Read article <i className="fa-solid fa-arrow-right ml-2 text-xs group-hover:translate-x-1 transition"></i></div>
            </div>
          </a>

          {/* Post 3 */}
          <a href="#" className="group block bg-white rounded-3xl overflow-hidden border border-[#E8D5B7] hover:border-[#2D5A4A]/40 transition">
            <div className="h-48 bg-[#E8D5B7] relative">
              <img src="https://picsum.photos/id/201/600/400" alt="Children practicing breathing exercises" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 text-xs font-semibold rounded-full">RESEARCH &amp; INSIGHTS</div>
            </div>
            <div className="p-7">
              <div className="text-xs text-[#2D5A4A] font-semibold tracking-wider">NOVEMBER 2025 • 10 MIN READ</div>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight group-hover:text-[#2D5A4A] transition">The Science of Kids Yoga: How It Supports Brain Development &amp; Emotional Health</h3>
              <p className="mt-3 text-sm text-[#1F2E2A]/75 line-clamp-3">A clear look at what research tells us about movement, breath, and mindfulness in early childhood.</p>
              <div className="mt-5 flex items-center text-sm font-semibold text-[#2D5A4A]">Read article <i className="fa-solid fa-arrow-right ml-2 text-xs group-hover:translate-x-1 transition"></i></div>
            </div>
          </a>

        </div>
        
        <div className="text-center mt-10">
          <p className="text-sm text-[#2D5A4A]/70">More articles coming soon on topics like emotional regulation, yoga for anxiety in children, and creating mindful classroom transitions.</p>
          <Link href="/contact" className="mt-4 inline-block text-sm font-semibold text-[#2D5A4A]">Have a topic suggestion? Let us know →</Link>
        </div>
      </section>

      {/* Newsletter signup */}
      <BlogNewsletter />
    </>
  );
}