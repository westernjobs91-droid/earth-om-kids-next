import LocationsContent from './LocationsContent';

export const metadata = {
  title: "Kids Yoga Locations Across Toronto & the GTA",
  description: "Find kids yoga and mindfulness programs near you — Toronto, North York, Scarborough, Etobicoke, and Downtown Toronto neighbourhoods.",
  alternates: { canonical: '/locations' },
  openGraph: {
    title: "Kids Yoga Locations Across Toronto & the GTA | Earth & OM Kids",
    description: "Find kids yoga and mindfulness programs near you across Toronto and the GTA.",
    url: "https://kids.earthandom.ca/locations",
  },
};

export default function LocationsPage() {
  return <LocationsContent />;
}
