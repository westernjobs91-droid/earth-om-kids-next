import LandingPageContent from '@/components/LandingPageContent';
import { landingPages, buildServiceSchema, buildFaqSchema } from '@/lib/landingPages';

const page = landingPages['mindfulness-workshops-for-kids-toronto'];

export const metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: '/' + page.slug },
  openGraph: {
    title: page.ogTitle,
    description: page.metaDescription,
    url: 'https://kids.earthandom.ca/' + page.slug,
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildServiceSchema(page)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(page)) }} />
      <LandingPageContent page={page} />
    </>
  );
}
