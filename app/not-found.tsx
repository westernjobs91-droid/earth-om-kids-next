import Link from 'next/link';
import { Hills, ButtonLink, display } from '@/components/rd/Kit';
import rd from '@/components/rd/rd.module.css';

export default function NotFound() {
  return (
    <section className={rd.hero}>
      <div className="max-w-3xl mx-auto px-6 pt-20 pb-40 text-center">
        <p className={`${display} text-[7rem] md:text-[10rem] leading-none font-semibold text-[#F4D35E]`}>404</p>
        <h1 className={`${display} mt-4 text-4xl md:text-5xl font-semibold`}>This pose doesn&rsquo;t exist</h1>
        <p className="mt-5 text-xl text-[#E4EEDF]">
          The page you were looking for has wandered off. Take a slow breath in, a slow breath out, and try one of these.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
          <ButtonLink href="/" label="Go to the homepage" />
          <ButtonLink href="/programs" label="See our programs" tone="outline" />
        </div>
        <p className="mt-8 text-[#E4EEDF]">
          Need a hand? <Link href="/contact" className="underline decoration-[#F4D35E] decoration-2 underline-offset-4">Contact us</Link>
        </p>
      </div>
      <Hills />
    </section>
  );
}
