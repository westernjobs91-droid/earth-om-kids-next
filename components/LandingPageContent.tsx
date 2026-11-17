import ProgramTemplate, { fromLanding } from '@/components/rd/ProgramTemplate';
import type { LandingPage } from '@/lib/landingPages';

export default function LandingPageContent({ page }: { page: LandingPage }) {
  return <ProgramTemplate page={fromLanding(page)} />;
}
