import LocationTemplate from '@/components/rd/LocationTemplate';
import { locationPages } from '@/lib/locations';

export default function ScarboroughPage() {
  return <LocationTemplate page={locationPages['scarborough']} />;
}
