import LocationTemplate from '@/components/rd/LocationTemplate';
import { locationPages } from '@/lib/locations';

export default function NorthYorkPage() {
  return <LocationTemplate page={locationPages['north-york']} />;
}
