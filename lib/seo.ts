// Shared Open Graph defaults.
// Next.js replaces a parent's `openGraph` object entirely when a page defines its own,
// so every page spreads these in to keep the share image, site name and locale.
export const OG_IMAGE = {
  url: '/og-share.jpg',
  width: 1200,
  height: 630,
  alt: 'Earth & OM Kids: kids yoga and mindfulness programs for schools, childcare centres and families across Toronto and the GTA',
};

export const sharedOpenGraph = {
  siteName: 'Earth & OM Kids',
  locale: 'en_CA',
  type: 'website' as const,
  images: [OG_IMAGE],
};
