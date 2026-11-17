import { Figtree } from 'next/font/google';

// Warm, highly legible body face for the redesign. Headings keep Fredoka (loaded in the root layout).
export const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-figtree',
  display: 'swap',
});
