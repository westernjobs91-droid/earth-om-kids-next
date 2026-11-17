import type { Metadata } from 'next';
import RedesignHome from './RedesignHome';

// Design preview only. Not linked anywhere and kept out of search results.
export const metadata: Metadata = {
  title: 'Homepage redesign preview',
  robots: { index: false, follow: false },
};

export default function RedesignPreview() {
  return <RedesignHome />;
}
