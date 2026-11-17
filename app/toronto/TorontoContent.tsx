import LocationTemplate from '@/components/rd/LocationTemplate';
import { locationPages } from '@/lib/locations';

export default function TorontoContent() {
  return <LocationTemplate page={locationPages['toronto']} />;
}
