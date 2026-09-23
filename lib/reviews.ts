// Real Google reviews only — never fabricate reviews or ratings.
// Add new entries at the top as genuine Google reviews come in. Both the
// homepage testimonials and the AggregateRating schema are driven from here.
export type Review = {
  name: string;
  type: 'Person' | 'Organization';
  body: string;
};

export const reviews: Review[] = [
  {
    name: 'Saihim Park',
    type: 'Person',
    body: "This summer, I joined Taran’s Saturday 9 AM yoga class at Humber Bay Shores Park. I loved not only how she instructed the class, but also how much she cared about everyone in the group and made sure we were doing each posture properly. I’m a personal trainer and not a big fan of yoga, but I really enjoyed Taran’s class. It wasn’t just a yoga class, but also a great community here in Humber Bay. Looking forward to joining more sessions!",
  },
  {
    name: 'Ajwinder Kaur',
    type: 'Person',
    body: 'Earth and OM yoga has a beautiful, welcoming and positive atmosphere. The staff are incredibly friendly, caring and approachable. Everyone is welcoming, patient and professional which makes the whole experience very special. The way the yoga sessions are taught are wonderful-engaging, gentle and fun, while still helping children develop mindfulness, confidence and relaxation. A beautiful place with wonderful people. Highly recommended Earth and OM kids yoga.',
  },
  {
    name: 'Tioclassic Beauty saloon',
    type: 'Organization',
    body: "I have only been here twice and I can tell you that the atmosphere is cozy, welcoming and the staff there are very professional. I'd highly recommend their for whoever is asking",
  },
  {
    name: 'Ogede Bashir',
    type: 'Person',
    body: 'Earth & OM Kids is a wonderful place for children. The environment is warm, welcoming, and thoughtfully designed, and the staff are kind, patient, and professional. You can clearly see the care and passion they put into creating positive experiences for every child. I highly recommend Earth & OM Kids to families looking for a safe, engaging, and supportive space for their children.',
  },
  {
    name: 'Kanwalpreet Kaur',
    type: 'Person',
    body: 'We had a wonderful experience with Earth & Om kids! The sessions were fun, engaging and calming for the children.',
  },
  {
    name: 'SLC Daycare',
    type: 'Organization',
    body: 'Had the chance to have the yoga program at the daycare this year. My kinders loved it. They loved being challenged and learning at the different poses. Thanks for all the awesome classes!',
  },
];
