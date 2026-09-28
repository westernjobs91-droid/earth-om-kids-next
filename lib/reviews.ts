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
    name: 'Lynn Lewis',
    type: 'Person',
    body: 'Taran comes to lead monthly yoga sessions with the preschoolers in our childcare program. She is great with the children and they are always happy to see her arrive. They love making animal poses with her and have fun with the warm up exercises and breath balls and feathers to focus on breathing. The parents love to see photos of their child making the yoga poses.',
  },
  {
    name: "Sunburst Children's Centre",
    type: 'Organization',
    body: 'Our toddler and preschool children have enjoyed Earth & OM kids yoga program since July 2026. Miss Taran has provided an age appropriate introduction to yoga for young children. The children look forward to participate in the relaxing and mindful practices to enable self regulation and well being.',
  },
  {
    name: 'Catherine Maheu',
    type: 'Person',
    body: "We've been working with Earth & OM Kids for the past two years during our summer camp, and we've had such a great experience! The instructors are amazing with the children. They are patient, friendly, and always make the sessions fun and engaging. The kids really enjoy their yoga classes and are always excited when it's time for their session. We also really appreciate how professional, reliable, and easy to work with the team is. They've become a wonderful part of our summer camp programming, and we're very happy to have them come back each year. We highly recommend them and look forward to continuing to work together!",
  },
  {
    name: 'Sharmeen Rangwala',
    type: 'Person',
    body: "I've been attending the outdoor yoga classes held every Saturday at Humber Bay for about 2 months now. It's been the most relaxing start to my weekend! Taran focuses on breathing, and encourages you to go at your own pace. Highly recommend for a grounded, well-taught yoga practice!",
  },
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
