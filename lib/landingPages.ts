// Content for the activity landing pages (after-school, camps, workshops).
// Only use facts that are already true for the business — no invented prices,
// dates or ages. Pricing/availability questions point people to the contact form.

export type IconKey = 'sparkles' | 'wind' | 'star' | 'feather' | 'map' | 'sliders' | 'users' | 'heart' | 'sun' | 'brain';

export type LandingPage = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  badge: string;
  h1: string;
  intro: string;
  ctaLabel: string;
  seoHeading: string;
  seoParagraphs: string[];
  highlightsEyebrow: string;
  highlightsHeading: string;
  highlights: { icon: IconKey; title: string; desc: string }[];
  details: { label: string; value: string }[];
  faqs: { q: string; a: string }[];
  related: { href: string; label: string }[];
  ctaHeading: string;
  ctaText: string;
  serviceName: string;
  serviceDescription: string;
};

const AREAS = ['Toronto', 'North York', 'Scarborough', 'Etobicoke', 'Vaughan', 'Mississauga', 'Markham'];

export const landingPages: Record<string, LandingPage> = {
  'after-school-yoga-toronto': {
    slug: 'after-school-yoga-toronto',
    metaTitle: 'After-School Kids Yoga Classes Toronto',
    metaDescription:
      'Weekly after-school kids yoga classes in Toronto. Small groups of up to 12, led by a trained Early Childhood Educator. Toddlers to school age. Inquire today.',
    ogTitle: 'After-School Kids Yoga Classes Toronto | Earth & OM Kids',
    badge: 'AFTER-SCHOOL KIDS YOGA TORONTO',
    h1: 'After-School Yoga Classes Kids Look Forward To',
    intro:
      'Playful, calming weekly kids yoga classes in Toronto where children unwind after school, move their bodies, and build confidence in a small group.',
    ctaLabel: 'Inquire About Classes',
    seoHeading: 'After-School Kids Yoga in Toronto and the GTA',
    seoParagraphs: [
      'After a full day of school or daycare, children need a healthy way to release energy and reset. Earth and OM Kids runs weekly after-school yoga classes in Toronto that combine movement, breathing games, and mindfulness in a fun, low-pressure setting.',
      'Classes are kept small, with a maximum of 12 children, so every child gets attention and feels comfortable. We offer age-appropriate groups for toddlers, preschoolers, and school-age children, and every class is led by Taran Kaur, a trained Early Childhood Educator with nearly 10 years of experience working with children across Toronto.',
      'Our after-school classes are currently offered at select locations in Toronto. If you run a school, childcare centre, community space, or building and would like to host a weekly class, get in touch and we will work out a schedule that suits your group.',
    ],
    highlightsEyebrow: 'WHAT CHILDREN DO',
    highlightsHeading: 'A Class Built Around Play',
    highlights: [
      { icon: 'wind', title: 'Breathing Games', desc: 'Simple, fun breathing practices children can use at home and at school when big feelings show up.' },
      { icon: 'sparkles', title: 'Animal Adventures', desc: 'Story-based yoga where children become animals, explore nature, and move through poses without realizing it.' },
      { icon: 'heart', title: 'Emotions & Gratitude', desc: 'Age-appropriate ways to name feelings, practice kindness, and notice what they are thankful for.' },
      { icon: 'users', title: 'Small Groups', desc: 'A maximum of 12 children per class, so every child is seen, supported, and included.' },
      { icon: 'feather', title: 'Calm Finish', desc: 'Every class winds down with guided relaxation so children head home feeling settled.' },
      { icon: 'sliders', title: 'Age-Matched Classes', desc: 'Toddler, preschool, and school-age groups, each with pacing and activities that fit their stage.' },
    ],
    details: [
      { label: 'Ages', value: 'Toddlers (18 mo to 3), Preschool (3 to 5), School age (5 to 10)' },
      { label: 'Class length', value: '45 to 60 minutes' },
      { label: 'Group size', value: 'Small groups, maximum 12 children' },
      { label: 'Schedule', value: 'Weekly classes' },
      { label: 'Location', value: 'Select locations in Toronto, or at your centre' },
      { label: 'Led by', value: 'Taran Kaur, trained Early Childhood Educator' },
    ],
    faqs: [
      {
        q: 'What ages are your after-school yoga classes for?',
        a: 'We offer classes for toddlers (18 months to 3 years), preschoolers (3 to 5 years), and school-age children (5 to 10 years). Each age group has its own pacing and activities.',
      },
      {
        q: 'How long are the classes and how many children are in each?',
        a: 'Classes run 45 to 60 minutes and we keep groups small, with a maximum of 12 children, so every child gets attention.',
      },
      {
        q: 'Where are after-school yoga classes held?',
        a: 'Classes are currently offered at select locations in Toronto. Contact us to ask about current availability near you.',
      },
      {
        q: 'Can you run an after-school yoga class at our school, daycare, or centre?',
        a: 'Yes. We can host a weekly class at your school, childcare centre, community space, or building. Tell us about your group and we will suggest a schedule and format.',
      },
      {
        q: 'How much do after-school yoga classes cost?',
        a: 'Pricing depends on the location, class length, and group size. Contact us for details and we will get back to you with options.',
      },
    ],
    related: [
      { href: '/schools', label: 'In-school yoga programs' },
      { href: '/toddler-yoga-toronto', label: 'Toddler yoga' },
      { href: '/mindfulness-workshops-for-kids-toronto', label: 'Mindfulness workshops' },
      { href: '/march-break-summer-camp-yoga-toronto', label: 'March Break & summer camps' },
    ],
    ctaHeading: 'Ready to Start Weekly Yoga?',
    ctaText: 'Get in touch to ask about current classes near you, or to bring an after-school yoga class to your centre.',
    serviceName: 'After-School Kids Yoga Classes Toronto',
    serviceDescription:
      'Weekly after-school kids yoga classes in small groups of up to 12 for toddlers, preschoolers, and school-age children in Toronto. Led by a trained Early Childhood Educator.',
  },

  'march-break-summer-camp-yoga-toronto': {
    slug: 'march-break-summer-camp-yoga-toronto',
    metaTitle: 'March Break & Summer Kids Yoga Camps Toronto',
    metaDescription:
      'Kids yoga and mindfulness camps for March Break and summer in Toronto. Fun, active camp days and weeks led by a trained Early Childhood Educator. Enquire today.',
    ogTitle: 'March Break & Summer Kids Yoga Camps Toronto | Earth & OM Kids',
    badge: 'MARCH BREAK & SUMMER YOGA CAMPS TORONTO',
    h1: 'Yoga Camps for March Break & Summer',
    intro:
      'Active, playful camp days and weeks that mix yoga, mindfulness, and movement games so children stay busy, happy, and calm all break long.',
    ctaLabel: 'Ask About Camp Dates',
    seoHeading: 'Kids Yoga Camps in Toronto for March Break and Summer',
    seoParagraphs: [
      'School breaks are a great chance for children to try something new. Earth and OM Kids offers kids yoga and mindfulness camps in Toronto for March Break and summer, with camp days and camp weeks that are active, imaginative, and easy on the nervous system.',
      'Camp sessions weave together yoga poses, breathing games, movement play, and story-based adventures. Themes like animals, nature, and the ocean keep children curious, while calm moments built into the day help them recharge between the fun.',
      'Already run a camp, daycare, or community program? We also bring yoga days and yoga weeks to existing camps across Toronto and the GTA, with sessions tailored to your age groups and schedule. Contact us for current March Break and summer dates, locations, and availability.',
    ],
    highlightsEyebrow: 'WHAT CAMP LOOKS LIKE',
    highlightsHeading: 'Movement, Imagination, and Calm',
    highlights: [
      { icon: 'sun', title: 'Themed Camp Days', desc: 'Story-based days built around themes children love, like animals, nature, and the ocean.' },
      { icon: 'sparkles', title: 'Yoga Adventures', desc: 'Playful yoga poses and partner and group games that get children moving and laughing.' },
      { icon: 'wind', title: 'Breathing & Mindfulness', desc: 'Simple tools for focus and calm that children can keep using long after camp ends.' },
      { icon: 'feather', title: 'Rest & Recharge', desc: 'Guided relaxation and quiet moments balance out the active parts of the day.' },
      { icon: 'map', title: 'We Can Come to You', desc: 'Bring a yoga day or week to your existing camp, daycare, or community program.' },
      { icon: 'sliders', title: 'Fully Customizable', desc: 'Session length, themes, and age groups are tailored to your camp. Sessions can run 30 to 90 minutes.' },
    ],
    details: [
      { label: 'When', value: 'March Break and summer' },
      { label: 'Format', value: 'Camp days or camp weeks' },
      { label: 'Session length', value: 'Customizable, 30 to 90 minutes' },
      { label: 'For', value: 'Families, camps, daycares, and community programs' },
      { label: 'Service area', value: 'Toronto and GTA wide' },
      { label: 'Led by', value: 'Taran Kaur, trained Early Childhood Educator' },
    ],
    faqs: [
      {
        q: 'Do you offer March Break and summer yoga camps in Toronto?',
        a: 'Yes. We offer kids yoga and mindfulness camp days and weeks for March Break and summer. Contact us for current dates, locations, and availability.',
      },
      {
        q: 'Can you bring yoga to our existing camp or daycare?',
        a: 'Yes. We can run yoga days or yoga weeks at your camp, daycare, or community program anywhere across Toronto and the GTA, tailored to your age groups and schedule.',
      },
      {
        q: 'What do children do at a yoga camp?',
        a: 'Children take part in themed, story-based yoga adventures, breathing and mindfulness games, movement play, and guided relaxation. Everything is playful and developmentally appropriate.',
      },
      {
        q: 'How long are camp yoga sessions?',
        a: 'Session length is customizable, from 30 to 90 minutes, depending on your camp schedule and the ages of the children.',
      },
      {
        q: 'How much do yoga camps cost?',
        a: 'Pricing depends on the length of the camp, the number of children, and the location. Contact us for details and we will get back to you with options.',
      },
    ],
    related: [
      { href: '/after-school-yoga-toronto', label: 'After-school yoga classes' },
      { href: '/mindfulness-workshops-for-kids-toronto', label: 'Mindfulness workshops' },
      { href: '/yoga-birthday-party-toronto', label: 'Yoga birthday parties' },
      { href: '/programs', label: 'All programs' },
    ],
    ctaHeading: 'Plan Your Break with Yoga',
    ctaText: 'Get in touch for March Break and summer camp dates, or to bring a yoga day to your camp.',
    serviceName: 'March Break & Summer Kids Yoga Camps Toronto',
    serviceDescription:
      'Kids yoga and mindfulness camp days and weeks for March Break and summer in Toronto and the GTA, led by a trained Early Childhood Educator. Available as camps or as yoga days at existing camps.',
  },

  'mindfulness-workshops-for-kids-toronto': {
    slug: 'mindfulness-workshops-for-kids-toronto',
    metaTitle: 'Kids Mindfulness Workshops Toronto',
    metaDescription:
      'Fun, hands-on mindfulness workshops for kids in Toronto. Breathing, focus, and emotional regulation for schools, camps, families, and educators. Book a workshop.',
    ogTitle: 'Kids Mindfulness Workshops Toronto | Earth & OM Kids',
    badge: 'KIDS MINDFULNESS WORKSHOPS TORONTO',
    h1: 'Mindfulness Workshops for Kids, Families & Educators',
    intro:
      'One-time or short-series workshops that give children practical, playful tools for focus, calm, and big feelings. We come to your school, centre, or event.',
    ctaLabel: 'Book a Workshop',
    seoHeading: 'Children\'s Mindfulness Workshops in Toronto and the GTA',
    seoParagraphs: [
      'Mindfulness workshops are a flexible way to introduce children to calm and focus without committing to a weekly program. Earth and OM Kids delivers hands-on mindfulness workshops across Toronto and the GTA for schools, daycares, camps, community events, and families.',
      'Each workshop is playful and age-appropriate, using movement, breathing games, sensory activities, guided stories, and simple emotional check-ins. Popular themes include emotional regulation, calm transitions, focus and attention, gratitude, and body awareness.',
      'We also offer workshops for the adults who support children. Teachers and ECEs can join sessions on stress relief, breathwork, and self-regulation tools to use personally and in the classroom, and parents can take part in family workshops to practice mindfulness alongside their children.',
    ],
    highlightsEyebrow: 'WHO WORKSHOPS ARE FOR',
    highlightsHeading: 'A Workshop for Every Group',
    highlights: [
      { icon: 'users', title: 'Children & Classrooms', desc: 'Interactive sessions for classes, daycares, and camps with breathing, movement, and calm-down tools.' },
      { icon: 'brain', title: 'Educators & ECEs', desc: 'PD day workshops on stress relief, breathwork, and self-regulation for teachers and childcare staff.' },
      { icon: 'heart', title: 'Families', desc: 'Parents and children practice mindfulness together and leave with activities to repeat at home.' },
      { icon: 'sun', title: 'Events & Celebrations', desc: 'Themed mindfulness and yoga experiences for community events, wellness days, and holiday celebrations.' },
      { icon: 'wind', title: 'Single Session or Series', desc: 'Start with one workshop, or build a short series that grows skills week by week.' },
      { icon: 'sliders', title: 'Fully Customizable', desc: 'Themes, length (30 to 90 minutes), age groups, and focus areas are tailored to your group.' },
    ],
    details: [
      { label: 'Ages', value: 'Children 18 months and up, plus educators and parents' },
      { label: 'Length', value: 'Customizable, 30 to 90 minutes' },
      { label: 'Format', value: 'Single workshop or short series' },
      { label: 'Location', value: 'Your school, centre, venue, or event' },
      { label: 'Service area', value: 'Toronto and GTA wide' },
      { label: 'Led by', value: 'Taran Kaur, trained Early Childhood Educator' },
    ],
    faqs: [
      {
        q: 'What is a kids mindfulness workshop?',
        a: 'A workshop is a hands-on session, either one-time or a short series, where children learn simple mindfulness tools like breathing, body awareness, and calming strategies through play, movement, and stories.',
      },
      {
        q: 'Who are your mindfulness workshops for?',
        a: 'We run workshops for children in schools, daycares, and camps, for teachers and ECEs (for example on PD days), and for families who want to practice together.',
      },
      {
        q: 'How long is a workshop?',
        a: 'Workshops are customizable from 30 to 90 minutes, depending on the age group and your schedule. Most are 45 to 60 minutes.',
      },
      {
        q: 'Can workshops be customized to a theme?',
        a: 'Yes. Popular focus areas include emotional regulation, calm transitions, focus and attention, gratitude, and body awareness. Tell us your goals and we will tailor the session.',
      },
      {
        q: 'How much do mindfulness workshops cost?',
        a: 'Pricing depends on the length, group size, and location. Contact us and we will send you a custom quote.',
      },
    ],
    related: [
      { href: '/mindfulness-for-kids-toronto', label: 'Mindfulness programs for kids' },
      { href: '/schools', label: 'For schools & childcare' },
      { href: '/families', label: 'Family sessions' },
      { href: '/march-break-summer-camp-yoga-toronto', label: 'March Break & summer camps' },
    ],
    ctaHeading: 'Bring a Mindfulness Workshop to Your Group',
    ctaText: 'Tell us about your group and goals and we will design a workshop that fits.',
    serviceName: 'Kids Mindfulness Workshops Toronto',
    serviceDescription:
      'Hands-on mindfulness workshops for children, families, and educators across Toronto and the GTA. Single sessions or short series, tailored to your group and led by a trained Early Childhood Educator.',
  },
};

export function buildServiceSchema(p: LandingPage) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: p.serviceName,
    description: p.serviceDescription,
    url: `https://kids.earthandom.ca/${p.slug}`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Earth & OM Kids',
      url: 'https://kids.earthandom.ca',
      telephone: '+16478568206',
    },
    areaServed: AREAS.map((name) => ({ '@type': 'City', name })),
  };
}

export function buildFaqSchema(p: LandingPage) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: p.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
