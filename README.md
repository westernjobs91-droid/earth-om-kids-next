# Earth & OM Kids - Next.js Version

Modern Next.js version of the Earth & OM Kids yoga website.

## Getting Started (on your local machine)

1. **Download and extract** this folder (or the zip if provided).

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/` - Next.js App Router pages and layout
  - `page.tsx` - Home page (fully ported)
  - `about/page.tsx`, `programs/page.tsx`, etc. - Other pages (placeholders + examples)
  - `layout.tsx` - Root layout with Navbar, Footer, fonts, metadata
  - `globals.css` - Tailwind + custom styles from original
- `components/` - Reusable Navbar (with mobile menu) and Footer

## Key Improvements over static HTML version

- **Next.js App Router** with file-based routing and React Server Components
- **TypeScript** for type safety
- **Proper SEO** using Next.js Metadata API (per-page titles, descriptions, open graph)
- **Optimized fonts** with `next/font/google` (no external @import)
- **Client-side navigation** with `<Link>` (faster, no full page reloads)
- **Responsive Navbar** as React component with active link highlighting (`usePathname`)
- **Lucide icons** for menu + some UI (Font Awesome still included via CDN for other icons)
- **Ready for Vercel deployment** - just `git push` to a connected repo
- Easy to add interactivity, forms (server actions), animations (framer-motion), etc.

## How to Port Remaining Content

The home page is fully converted as an example. For other pages:

1. Create `app/[page]/page.tsx` (e.g. `app/about/page.tsx`)
2. Copy the main content sections from your original `about.html` (the part between nav and footer)
3. Paste into the component, adapting:
   - `class=` → `className=`
   - `<a href="...html">` → `<Link href="...">` (for internal)
   - `<a href="http...">` stay as `<a>`
   - Inline styles or `<style>` tags → move unique ones to globals.css or module.css
   - For forms: make controlled components with `useState` or use `react-hook-form` + server actions
4. Add `export const metadata = { title: '...', description: '...' }` at top of page for SEO

Example for a page:
```tsx
export const metadata = {
  title: 'About | Earth & OM Kids',
  description: '...',
};

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* paste adapted content here */}
    </div>
  );
}
```

## Next Steps / Ideas

- Replace picsum.photos placeholder images with real photos of classes/kids (use `next/image` for optimization)
- Enhance contact form with real submission (e.g. Resend, Formspree, or Next.js server actions + email)
- Add framer-motion for smooth animations on cards/hero
- Add a blog with MDX or content layer for easy posts
- Connect to a CMS like Sanity or Contentful for programs/schedules
- Deploy to Vercel: `npm run build` works perfectly, zero config needed

## Original Static Version

The original multi-page HTML version is available in the sibling folder `earth-om-kids-yoga-toronto/`.

This Next.js version is the recommended path forward for maintainability, performance, and SEO.

Built with ❤️ for Earth & OM Kids.
