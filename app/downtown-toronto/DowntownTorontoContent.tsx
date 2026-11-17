import LocationTemplate from '@/components/rd/LocationTemplate';
import { locationPages } from '@/lib/locations';

export default function DowntownTorontoPage() {
  return <LocationTemplate page={locationPages['downtown-toronto']} />;
}
