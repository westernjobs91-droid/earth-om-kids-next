import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kids.earthandom.ca';
  const today = new Date('2026-05-15');

  return [
    // ─── Core pages ───────────────────────────────────────────────────────────
    { url: baseUrl,                       lastModified: today, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${baseUrl}/about`,            lastModified: today, changeFrequency: 'yearly',  priority: 0.8 },
    { url: `${baseUrl}/programs`,         lastModified: today, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/schools`,          lastModified: today, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/families`,         lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`,          lastModified: today, changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${baseUrl}/yoga-birthday-party-toronto`, lastModified: today, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/toddler-yoga-toronto`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/mindfulness-for-kids-toronto`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },

    // ─── Legal pages ──────────────────────────────────────────────────────────────
{ url: `${baseUrl}/privacy-policy`, lastModified: today, changeFrequency: 'yearly', priority: 0.3 },
{ url: `${baseUrl}/accessibility`,  lastModified: today, changeFrequency: 'yearly', priority: 0.3 },

    // ─── Location pages ───────────────────────────────────────────────────────
    { url: `${baseUrl}/locations`,        lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/north-york`,       lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/scarborough`,      lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/etobicoke`,        lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/downtown-toronto`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    // Phase 2 — add these once pages are built:
    // { url: `${baseUrl}/vaughan`,       lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    // { url: `${baseUrl}/mississauga`,   lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    // { url: `${baseUrl}/markham`,       lastModified: today, changeFrequency: 'monthly', priority: 0.8 },

    // ─── Blog ─────────────────────────────────────────────────────────────────
    { url: `${baseUrl}/blog`,             lastModified: today, changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${baseUrl}/blog/benefits-of-kids-yoga-for-emotional-regulation`, lastModified: '2026-05-01', changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/blog/breathing-exercises-for-kids`,                   lastModified: '2026-05-01', changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/blog/what-to-expect-in-kids-yoga-class`,              lastModified: '2026-05-01', changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/blog/yoga-for-focus-and-attention`,                   lastModified: '2026-05-01', changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/blog/best-kids-yoga-classes-toronto`,             lastModified: new Date('2026-05-15'), changeFrequency: 'yearly', priority: 0.6 },
{ url: `${baseUrl}/blog/how-to-choose-school-yoga-provider-toronto`, lastModified: new Date('2026-05-15'), changeFrequency: 'yearly', priority: 0.6 },
{ url: `${baseUrl}/blog/montessori-and-yoga-toronto`,                lastModified: new Date('2026-05-15'), changeFrequency: 'yearly', priority: 0.6 },
    // Add new blog posts here as you publish them

    // ─── Phase 2 service pages — uncomment when built ─────────────────────────
    // { url: `${baseUrl}/yoga-birthday-party-toronto`, lastModified: today, changeFrequency: 'monthly', priority: 0.9 },
    // { url: `${baseUrl}/toddler-yoga-toronto`,        lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    // { url: `${baseUrl}/mindfulness-for-kids-toronto`,lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
  ]
}