// Copy for the five location pages, moved here word for word from the old page components
// so one template (components/rd/LocationTemplate) renders them all.
export type LocationPage = {
  slug: string;
  name: string;
  h1: string;
  lead: string;
  aboutHeading: string;
  aboutParagraphs: string[];
  features: { title: string; desc: string }[];
  programsHeading: string;
  programsIntro: string;
  programs: { emoji: string; title: string; desc: string; link: string; linkText: string }[];
  split: { title: string; body: string; href: string; label: string }[];
  quotesHeading?: string;
  quotes: { body: string; name: string }[];
  benefitsHeading?: string;
  benefits?: { title: string; desc: string }[];
  stepsHeading?: string;
  steps?: { step: string; title: string; desc: string }[];
  areasHeading: string;
  areasIntro: string;
  areas: string[];
  faqHeading: string;
  faqs: { q: string; a: string }[];
  ctaHeading: string;
  ctaBody: string;
};

export const locationPages: Record<string, LocationPage> = {
  "toronto": {
    "slug": "toronto",
    "h1": "Toronto's Most Trusted Kids Yoga Programs",
    "lead": "Professional kids yoga and mindfulness for Toronto schools, childcare centres, daycares, and families. Led by a trained Early Childhood Educator. We come to you.",
    "aboutHeading": "Toronto's kids yoga program built on real child development expertise",
    "aboutParagraphs": [
      "Earth and OM Kids has been delivering professional kids yoga and mindfulness programs across Toronto since 2018. We are trusted by over 25 Toronto schools, Montessori programs, daycares, and families.",
      "Every program is led by Taran Kaur, a trained Early Childhood Educator with nearly 10 years of experience in Toronto's diverse childcare and school communities. This is not a yoga studio business. It is a child development practice that uses yoga as its primary tool.",
      "We serve all of Toronto from the waterfront to the northern suburbs, all inner city neighbourhoods, and the Greater Toronto Area. We come directly to your school, daycare, or home. No travel required."
    ],
    "features": [
      {
        "title": "Trained Early Childhood Educator",
        "desc": "Nearly 10 years of real classroom and childcare experience across Toronto."
      },
      {
        "title": "Ages 18 Months to 12 Years",
        "desc": "One of the only Toronto providers serving children from 18 months old."
      },
      {
        "title": "We Come to You",
        "desc": "Serving all Toronto neighbourhoods, schools, daycares, and homes."
      },
      {
        "title": "Fully Customized Programs",
        "desc": "Every session tailored to your age group, goals, space, and schedule."
      }
    ],
    "programsHeading": "Every program. Every age. Across all of Toronto.",
    "programsIntro": "From toddler yoga to school wellness weeks to birthday parties, we have a program for every Toronto child and community.",
    "programs": [
      {
        "emoji": "🏫",
        "title": "In-School Yoga Programs",
        "desc": "Classroom-ready yoga and mindfulness sessions for Toronto public schools, private schools, Montessori programs, and childcare centres. Sessions 30 to 45 minutes. Wellness weeks, ongoing series, and single sessions available.",
        "link": "/schools",
        "linkText": "School programs"
      },
      {
        "emoji": "🌿",
        "title": "After School Classes",
        "desc": "Weekly kids yoga classes in small groups for toddlers, preschoolers, and school age children across Toronto. Fun, calming, and developmentally appropriate for every age from 18 months to 12 years.",
        "link": "/families",
        "linkText": "After school classes"
      },
      {
        "emoji": "🍼",
        "title": "Toddler Yoga Toronto",
        "desc": "Playful, song-based yoga for children from 18 months old. Short sessions designed specifically for how very young children learn and move. One of the only Toronto providers starting at 18 months.",
        "link": "/toddler-yoga-toronto",
        "linkText": "Toddler yoga"
      },
      {
        "emoji": "🧘",
        "title": "Children's Mindfulness",
        "desc": "Practical mindfulness programs for Toronto children. Breathing games, body awareness, guided relaxation, emotional check-ins, and sensory activities. Available for schools, daycares, and families.",
        "link": "/mindfulness-for-kids-toronto",
        "linkText": "Mindfulness programs"
      },
      {
        "emoji": "🎂",
        "title": "Yoga Birthday Parties",
        "desc": "Magical yoga birthday party experiences for children across Toronto. We come to your home, condo, or party venue. Fully themed and customized for ages 3 to 12.",
        "link": "/yoga-birthday-party-toronto",
        "linkText": "Birthday parties"
      },
      {
        "emoji": "👨‍👩‍👧",
        "title": "Family Yoga Workshops",
        "desc": "Family yoga experiences that bring Toronto parents and children together through mindful movement, breathing, and connection. Available at your home, school, or community space.",
        "link": "/contact",
        "linkText": "Book a workshop"
      }
    ],
    "split": [
      {
        "title": "Bring professional yoga to your Toronto school",
        "body": "We work with public schools, private schools, Montessori programs, and childcare centres across Toronto. Single sessions, wellness weeks, and ongoing programs available.",
        "href": "/schools",
        "label": "Learn about school programs"
      },
      {
        "title": "Weekly classes and private sessions for your child",
        "body": "After school weekly classes, private home sessions, toddler yoga, birthday parties, and family workshops. Available across all Toronto neighbourhoods for children from 18 months to 12 years.",
        "href": "/families",
        "label": "Explore family programs"
      }
    ],
    "quotesHeading": "Real results from real Toronto communities",
    "quotes": [
      {
        "body": "Earth and OM yoga has a beautiful, welcoming and positive atmosphere. The staff are incredibly friendly, caring and approachable. The way the yoga sessions are taught are wonderful, engaging, gentle and fun, while still helping children develop mindfulness, confidence and relaxation.",
        "name": "Ajwinder Kaur"
      },
      {
        "body": "Earth & OM Kids is a wonderful place for children. The environment is warm, welcoming, and thoughtfully designed, and the staff are kind, patient, and professional. I highly recommend Earth & OM Kids to families looking for a safe, engaging, and supportive space for their children.",
        "name": "Ogede Bashir"
      },
      {
        "body": "We had a wonderful experience with Earth & Om kids! The sessions were fun, engaging and calming for the children.",
        "name": "Kanwalpreet Kaur"
      }
    ],
    "benefitsHeading": "Benefits Toronto teachers and parents see every day",
    "benefits": [
      {
        "title": "Improved Focus and Attention",
        "desc": "Children pay attention longer and transition between activities more smoothly. Toronto teachers consistently report fewer classroom disruptions after regular yoga sessions."
      },
      {
        "title": "Emotional Regulation",
        "desc": "Kids gain practical, portable tools to manage big feelings breathing techniques, body awareness, and calm-down routines they can use independently at school and at home."
      },
      {
        "title": "Physical Development",
        "desc": "Yoga builds strength, flexibility, coordination, and body awareness in a way that is fun rather than competitive. Especially valuable for children who do not connect with team sports."
      },
      {
        "title": "Social Skills and Kindness",
        "desc": "Shared movement and mindfulness activities build empathy, cooperation, and positive peer relationships. Children learn to work together and celebrate each other."
      },
      {
        "title": "Better Sleep and Calm",
        "desc": "Toronto parents tell us their children fall asleep more easily and are calmer at home after starting a regular yoga practice."
      },
      {
        "title": "Confidence and Self-Esteem",
        "desc": "Every child can do yoga. There is no competition and no wrong way. This builds genuine confidence and a positive relationship with movement from a very young age."
      }
    ],
    "stepsHeading": "Getting started is simple",
    "steps": [
      {
        "step": "01",
        "title": "Get in Touch",
        "desc": "Fill out our contact form or call (647) 856-8206. Tell us about your Toronto school, daycare, or family."
      },
      {
        "step": "02",
        "title": "Custom Proposal",
        "desc": "We create a tailored program plan with session length, frequency, themes, and pricing designed for your needs."
      },
      {
        "step": "03",
        "title": "We Come to You",
        "desc": "We travel to your Toronto location school, daycare, community centre, or home. No extra steps required."
      },
      {
        "step": "04",
        "title": "Watch the Change",
        "desc": "Children experience calmer minds, better focus, joyful movement, and tools they carry long after the session ends."
      }
    ],
    "areasHeading": "Every corner of Toronto",
    "areasIntro": "We deliver programs across all Toronto neighbourhoods. If you do not see yours, contact us.",
    "areas": [
      "The Annex",
      "Yorkville",
      "Rosedale",
      "Forest Hill",
      "Lawrence Park",
      "Leaside",
      "Don Mills",
      "Leslieville",
      "Riverdale",
      "The Beaches",
      "Danforth",
      "East York",
      "Midtown",
      "Corktown",
      "Distillery District",
      "Trinity Bellwoods",
      "Little Italy",
      "Kensington Market",
      "Harbourfront",
      "Liberty Village",
      "Swansea",
      "Bloor West Village",
      "High Park",
      "Junction",
      "Wychwood"
    ],
    "faqHeading": "Questions from Toronto schools and families",
    "faqs": [
      {
        "q": "What Toronto neighbourhoods do you serve?",
        "a": "We serve all of Toronto including The Annex, Yorkville, Rosedale, Forest Hill, Lawrence Park, Leaside, Don Mills, Leslieville, Riverdale, The Beaches, Danforth, East York, Midtown, Corktown, Trinity Bellwoods, Little Italy, Kensington Market, Harbourfront, Liberty Village, High Park, Bloor West Village, and all surrounding areas. We also cover North York, Scarborough, Etobicoke, and the Greater Toronto Area."
      },
      {
        "q": "What is the youngest age you work with in Toronto?",
        "a": "We accept children from 18 months old. Our toddler yoga program is specifically designed for children 18 months to 3 years and is one of the only programs in Toronto led by someone with a formal early childhood education background. Sessions are short, playful, and song-based."
      },
      {
        "q": "Do you work with public and private schools in Toronto?",
        "a": "Yes. We work with public schools, private schools, Montessori programs, French language schools, and independent childcare centres throughout Toronto. We are happy to discuss becoming an approved external provider for your school or board."
      },
      {
        "q": "What types of programs do you offer Toronto schools?",
        "a": "We offer in-class yoga sessions, wellness weeks, PD day programs, lunchtime mindfulness, after school classes, and ongoing weekly visits. All programs are fully customized to your school's goals, age groups, schedule, and space."
      },
      {
        "q": "How much do kids yoga programs cost in Toronto?",
        "a": "Pricing depends on the program type, frequency, group size, and location within Toronto. We offer flexible packages for schools, daycares, and families. Contact us for a custom proposal with no obligation."
      },
      {
        "q": "How do I book a kids yoga program in Toronto?",
        "a": "Fill out our contact form or call us at (647) 856-8206. We respond within 1 to 2 business days with a custom proposal tailored to your Toronto school, daycare, or family."
      }
    ],
    "ctaHeading": "Bring kids yoga to your Toronto school or family today",
    "ctaBody": "We respond within 1 to 2 business days. No obligation. Just a friendly conversation about how we can support the children in your care.",
    "name": "Toronto"
  },
  "north-york": {
    "slug": "north-york",
    "h1": "Kids Yoga in North York",
    "lead": "Professional kids yoga and mindfulness for North York schools, childcare centres, daycares, and families. Led by a trained Early Childhood Educator. We come to you.",
    "aboutHeading": "North York's kids yoga program built on real child development expertise",
    "aboutParagraphs": [
      "Earth and OM Kids has been bringing professional kids yoga and mindfulness programs to North York schools, childcare centres, and families since 2018. We serve communities across North York including Willowdale, Newtonbrook, Bathurst Manor, Lawrence Park North, Don Mills, York Mills, Bayview Village, and Thornhill border communities.",
      "Every program is led by Taran Kaur, a trained Early Childhood Educator with nearly 10 years of hands-on experience in Toronto's diverse childcare and Montessori school environments. Every session is designed for real North York classrooms and real children.",
      "We come directly to your North York school, daycare, community centre, or home. Sessions are flexible, fully customizable, and designed to fit seamlessly into your existing schedule."
    ],
    "features": [
      {
        "title": "Trained Early Childhood Educator",
        "desc": "Nearly 10 years of real classroom and childcare experience across Toronto and North York."
      },
      {
        "title": "Ages 18 Months to 12 Years",
        "desc": "One of the only North York providers serving children from 18 months old."
      },
      {
        "title": "We Come to You",
        "desc": "Serving all North York neighbourhoods, schools, daycares, and homes."
      },
      {
        "title": "Fully Customized Programs",
        "desc": "Every session tailored to your age group, goals, space, and schedule."
      }
    ],
    "programsHeading": "Every program. Every age. Across North York.",
    "programsIntro": "From toddler yoga to school wellness weeks to birthday parties across North York.",
    "programs": [
      {
        "emoji": "🏫",
        "title": "School and Daycare Yoga Programs",
        "desc": "Classroom-ready yoga and mindfulness sessions for North York schools, Montessori programs, and childcare centres. Sessions 30 to 45 minutes. Wellness weeks, ongoing series, and single sessions available.",
        "link": "/schools",
        "linkText": "School programs"
      },
      {
        "emoji": "🌿",
        "title": "After School Classes",
        "desc": "Weekly kids yoga classes in small groups for toddlers, preschoolers, and school age children across North York. Fun, calming, and developmentally appropriate for every age from 18 months to 12 years.",
        "link": "/families",
        "linkText": "After school classes"
      },
      {
        "emoji": "🍼",
        "title": "Toddler Yoga North York",
        "desc": "Playful, song-based yoga for children from 18 months old. Short sessions designed specifically for how very young children learn and move.",
        "link": "/toddler-yoga-toronto",
        "linkText": "Toddler yoga"
      },
      {
        "emoji": "🧘",
        "title": "Children's Mindfulness",
        "desc": "Practical mindfulness programs for North York children. Breathing games, body awareness, guided relaxation, and emotional regulation activities.",
        "link": "/mindfulness-for-kids-toronto",
        "linkText": "Mindfulness programs"
      },
      {
        "emoji": "🎂",
        "title": "Yoga Birthday Parties",
        "desc": "Magical yoga birthday party experiences for children across North York. We come to your home, condo, or party venue. Fully themed for ages 3 to 12.",
        "link": "/yoga-birthday-party-toronto",
        "linkText": "Birthday parties"
      },
      {
        "emoji": "👨‍👩‍👧",
        "title": "Family Yoga Workshops",
        "desc": "Family yoga experiences that bring North York parents and children together through mindful movement, breathing, and connection.",
        "link": "/contact",
        "linkText": "Book a workshop"
      }
    ],
    "split": [
      {
        "title": "Bring professional yoga to your North York school",
        "body": "We work with public schools, private schools, Montessori programs, and childcare centres across North York. Single sessions, wellness weeks, and ongoing programs available.",
        "href": "/schools",
        "label": "Learn about school programs"
      },
      {
        "title": "Weekly classes and private sessions for your child",
        "body": "After school weekly classes, private home sessions, toddler yoga, birthday parties, and family workshops. Available across all North York neighbourhoods for children from 18 months to 12 years.",
        "href": "/families",
        "label": "Explore family programs"
      }
    ],
    "quotes": [
      {
        "body": "Taran comes to lead monthly yoga sessions with the preschoolers in our childcare program. She is great with the children and they are always happy to see her arrive.",
        "name": "Lynn Lewis"
      }
    ],
    "benefitsHeading": "Benefits North York teachers and parents see every day",
    "benefits": [
      {
        "title": "Improved Focus",
        "desc": "Children pay attention longer and transition between activities more smoothly. North York teachers report fewer classroom disruptions."
      },
      {
        "title": "Emotional Balance",
        "desc": "Kids gain practical tools to manage big feelings and reduce meltdowns at school and at home."
      },
      {
        "title": "Social Skills",
        "desc": "Build confidence, kindness, and cooperation through shared movement and mindfulness activities."
      },
      {
        "title": "Better Sleep and Calm",
        "desc": "North York parents consistently tell us their children are calmer at home and sleep better after classes."
      }
    ],
    "areasHeading": "Every corner of North York",
    "areasIntro": "We deliver programs across all North York communities. If you do not see yours, contact us.",
    "areas": [
      "Willowdale",
      "Newtonbrook",
      "Bathurst Manor",
      "Lawrence Park North",
      "Don Mills",
      "York Mills",
      "Bayview Village",
      "Lansing",
      "Yonge and Sheppard",
      "Yonge and Eglinton",
      "Wilson Heights",
      "Finch West",
      "Jane and Finch",
      "Black Creek",
      "Clanton Park",
      "Englemount"
    ],
    "faqHeading": "Questions from North York schools and families",
    "faqs": [
      {
        "q": "Which areas of North York do you serve?",
        "a": "We serve all of North York including Willowdale, Newtonbrook, Bathurst Manor, Lawrence Park North, Don Mills, York Mills, Bayview Village, Lansing, and communities along Yonge, Sheppard, Wilson, Finch, and Jane corridors."
      },
      {
        "q": "What is the youngest age you work with in North York?",
        "a": "We accept children from 18 months old. Our toddler yoga program is specifically designed for children 18 months to 3 years and is one of the only programs in North York led by someone with a formal early childhood education background."
      },
      {
        "q": "Do you work with public schools in North York?",
        "a": "Yes. We work with both public and private schools across North York. We can design programs that align with your school's wellness goals and curriculum. Contact us to discuss becoming an approved external provider for your school board."
      },
      {
        "q": "How much do programs cost in North York?",
        "a": "Pricing depends on the program type, frequency, and group size. We offer flexible packages for schools, daycares, and families. Contact us for a custom proposal tailored to your North York school or family."
      }
    ],
    "ctaHeading": "Bring kids yoga to your North York school or family today",
    "ctaBody": "We respond within 1 to 2 business days. No obligation. Just a friendly conversation about how we can support the children in your care.",
    "name": "North York"
  },
  "scarborough": {
    "slug": "scarborough",
    "h1": "Kids Yoga in Scarborough",
    "lead": "Professional kids yoga and mindfulness for Scarborough schools, childcare centres, daycares, and families. Led by a trained Early Childhood Educator. We come to you.",
    "aboutHeading": "Scarborough's kids yoga program built on real child development expertise",
    "aboutParagraphs": [
      "Earth and OM Kids has been serving Scarborough schools, childcare centres, and families since 2018. We bring professional kids yoga and mindfulness programs to communities including Agincourt, Birchcliff, Cliffside, Wexford, Woburn, West Hill, Morningside, Malvern, and Rouge.",
      "Every program is led by Taran Kaur, a trained Early Childhood Educator with nearly 10 years of experience in Toronto's diverse childcare and school communities. Scarborough is one of Toronto's most diverse communities and our programs reflect that with inclusive, welcoming sessions for every child.",
      "We come directly to your Scarborough school, daycare, community centre, or home. Sessions are flexible, fully customizable, and designed to fit seamlessly into your existing schedule."
    ],
    "features": [
      {
        "title": "Trained Early Childhood Educator",
        "desc": "Nearly 10 years of real classroom and childcare experience across Toronto and Scarborough."
      },
      {
        "title": "Inclusive and Culturally Welcoming",
        "desc": "Scarborough's diversity is a strength. Our programs welcome every child regardless of background or ability."
      },
      {
        "title": "We Come to You",
        "desc": "Serving all Scarborough neighbourhoods, schools, daycares, and homes."
      },
      {
        "title": "Fully Customized Programs",
        "desc": "Every session tailored to your age group, goals, space, and schedule."
      }
    ],
    "programsHeading": "Every program. Every age. Across Scarborough.",
    "programsIntro": "",
    "programs": [
      {
        "emoji": "🏫",
        "title": "School and Daycare Yoga Programs",
        "desc": "Classroom-ready yoga and mindfulness for Scarborough schools, Montessori programs, and childcare centres. 30 to 45 minutes. Wellness weeks, ongoing series, and single sessions.",
        "link": "/schools",
        "linkText": "School programs"
      },
      {
        "emoji": "🌿",
        "title": "After School Classes",
        "desc": "Weekly kids yoga classes in small groups for toddlers, preschoolers, and school age children across Scarborough. Ages 18 months to 12 years.",
        "link": "/families",
        "linkText": "After school classes"
      },
      {
        "emoji": "🍼",
        "title": "Toddler Yoga Scarborough",
        "desc": "Playful, song-based yoga for children from 18 months old. Short sessions designed for how very young children learn and move.",
        "link": "/toddler-yoga-toronto",
        "linkText": "Toddler yoga"
      },
      {
        "emoji": "🧘",
        "title": "Children's Mindfulness",
        "desc": "Practical mindfulness for Scarborough children. Breathing games, body awareness, guided relaxation, and emotional regulation activities.",
        "link": "/mindfulness-for-kids-toronto",
        "linkText": "Mindfulness programs"
      },
      {
        "emoji": "🎂",
        "title": "Yoga Birthday Parties",
        "desc": "Magical yoga birthday parties for children across Scarborough. We come to your home, condo, or party venue. Fully themed for ages 3 to 12.",
        "link": "/yoga-birthday-party-toronto",
        "linkText": "Birthday parties"
      },
      {
        "emoji": "👨‍👩‍👧",
        "title": "Family Yoga Workshops",
        "desc": "Family yoga experiences that bring Scarborough parents and children together through mindful movement, breathing, and connection.",
        "link": "/contact",
        "linkText": "Book a workshop"
      }
    ],
    "split": [
      {
        "title": "Bring professional yoga to your Scarborough school",
        "body": "We work with public schools, private schools, Montessori programs, and childcare centres across Scarborough. Single sessions, wellness weeks, and ongoing programs available.",
        "href": "/schools",
        "label": "Learn about school programs"
      },
      {
        "title": "Weekly classes and private sessions for your child",
        "body": "After school weekly classes, private home sessions, toddler yoga, birthday parties, and family workshops. Available across all Scarborough neighbourhoods for children from 18 months to 12 years.",
        "href": "/families",
        "label": "Explore family programs"
      }
    ],
    "quotes": [
      {
        "body": "I've been attending the outdoor yoga classes held every Saturday at Humber Bay for about 2 months now. It's been the most relaxing start to my weekend! Taran focuses on breathing, and encourages you to go at your own pace.",
        "name": "Sharmeen Rangwala"
      }
    ],
    "areasHeading": "Every corner of Scarborough",
    "areasIntro": "",
    "areas": [
      "Agincourt",
      "Birchcliff",
      "Cliffside",
      "Wexford",
      "Woburn",
      "West Hill",
      "Morningside",
      "Malvern",
      "Rouge",
      "Guildwood",
      "Eglinton East",
      "Kennedy Park",
      "Ionview",
      "Dorset Park",
      "Scarborough Town Centre",
      "Highland Creek"
    ],
    "faqHeading": "Questions from Scarborough schools and families",
    "faqs": [
      {
        "q": "Which areas of Scarborough do you serve?",
        "a": "We serve all of Scarborough including Agincourt, Birchcliff, Cliffside, Wexford, Woburn, West Hill, Morningside, Malvern, Rouge, and communities along Kingston Road, Lawrence Avenue East, Ellesmere Road, and Sheppard Avenue East."
      },
      {
        "q": "Do you offer inclusive programs for children with diverse needs?",
        "a": "Absolutely. As a trained Early Childhood Educator, Taran has extensive experience adapting sessions for children with diverse learning needs, sensory sensitivities, and developmental profiles. Every child is welcome in our programs."
      },
      {
        "q": "What is the youngest age you work with in Scarborough?",
        "a": "We accept children from 18 months old. Our toddler yoga program is specifically designed for children 18 months to 3 years and is one of the only programs in Scarborough led by someone with a formal early childhood education background."
      },
      {
        "q": "How do I book a kids yoga program in Scarborough?",
        "a": "Fill out our contact form or call (647) 856-8206. We respond within 1 to 2 business days with a custom proposal for your Scarborough school, daycare, or family."
      }
    ],
    "ctaHeading": "Bring kids yoga to your Scarborough school or family today",
    "ctaBody": "We respond within 1 to 2 business days. No obligation. Just a friendly conversation about how we can support the children in your care.",
    "name": "Scarborough"
  },
  "etobicoke": {
    "slug": "etobicoke",
    "h1": "Kids Yoga in Etobicoke",
    "lead": "Professional kids yoga and mindfulness for Etobicoke schools, childcare centres, daycares, and families. Led by a trained Early Childhood Educator. We come to you.",
    "aboutHeading": "Etobicoke's kids yoga program built on real child development expertise",
    "aboutParagraphs": [
      "Earth and OM Kids has been bringing professional kids yoga and mindfulness programs to Etobicoke schools, childcare centres, and families since 2018. We serve communities across Etobicoke including Bloordale, Islington, Mimico, New Toronto, Long Branch, Humber Valley, Richview, Rexdale, Thistletown, and Etobicoke City Centre.",
      "Every program is led by Taran Kaur, a trained Early Childhood Educator with nearly 10 years of hands-on experience in Toronto childcare and school communities. Every session is designed with real child development knowledge at its core.",
      "We come directly to your Etobicoke school, daycare, community centre, or home. Sessions are flexible, fully customizable, and designed to fit seamlessly into your existing schedule along Bloor Street West, Kipling Avenue, Islington Avenue, Royal York Road, Dixon Road, and throughout the Humber River corridor."
    ],
    "features": [
      {
        "title": "Trained Early Childhood Educator",
        "desc": "Nearly 10 years of real classroom and childcare experience across Toronto and Etobicoke."
      },
      {
        "title": "Etobicoke School Partnerships",
        "desc": "Trusted partnerships with schools and childcare centres across Etobicoke and West Toronto. Many return season after season."
      },
      {
        "title": "We Come to You",
        "desc": "Serving all Etobicoke neighbourhoods, schools, daycares, and homes across West Toronto."
      },
      {
        "title": "Fully Customized Programs",
        "desc": "Every session tailored to your age group, goals, space, and schedule."
      }
    ],
    "programsHeading": "Every program. Every age. Across Etobicoke.",
    "programsIntro": "",
    "programs": [
      {
        "emoji": "🏫",
        "title": "School and Daycare Yoga Programs",
        "desc": "Classroom-ready yoga and mindfulness for Etobicoke schools, Montessori programs, and childcare centres. 30 to 45 minutes. Wellness weeks, ongoing series, and single sessions.",
        "link": "/schools",
        "linkText": "School programs"
      },
      {
        "emoji": "🌿",
        "title": "After School Classes",
        "desc": "Weekly kids yoga classes in small groups for toddlers, preschoolers, and school age children across Etobicoke. Ages 18 months to 12 years.",
        "link": "/families",
        "linkText": "After school classes"
      },
      {
        "emoji": "🍼",
        "title": "Toddler Yoga Etobicoke",
        "desc": "Playful, song-based yoga for children from 18 months old. Short sessions designed for how very young children learn and move.",
        "link": "/toddler-yoga-toronto",
        "linkText": "Toddler yoga"
      },
      {
        "emoji": "🧘",
        "title": "Children's Mindfulness",
        "desc": "Practical mindfulness for Etobicoke children. Breathing games, body awareness, guided relaxation, and emotional regulation activities.",
        "link": "/mindfulness-for-kids-toronto",
        "linkText": "Mindfulness programs"
      },
      {
        "emoji": "🎂",
        "title": "Yoga Birthday Parties",
        "desc": "Magical yoga birthday parties for children across Etobicoke. We come to your home, condo, or party venue. Fully themed for ages 3 to 12.",
        "link": "/yoga-birthday-party-toronto",
        "linkText": "Birthday parties"
      },
      {
        "emoji": "👨‍👩‍👧",
        "title": "Family Yoga Workshops",
        "desc": "Family yoga experiences that bring Etobicoke parents and children together through mindful movement, breathing, and connection.",
        "link": "/contact",
        "linkText": "Book a workshop"
      }
    ],
    "split": [
      {
        "title": "Bring professional yoga to your Etobicoke school",
        "body": "We work with public schools, private schools, Montessori programs, and childcare centres across Etobicoke. Single sessions, wellness weeks, and ongoing programs available.",
        "href": "/schools",
        "label": "Learn about school programs"
      },
      {
        "title": "Weekly classes and private sessions for your child",
        "body": "After school weekly classes, private home sessions, toddler yoga, birthday parties, and family workshops. Available across all Etobicoke neighbourhoods for children from 18 months to 12 years.",
        "href": "/families",
        "label": "Explore family programs"
      }
    ],
    "quotes": [
      {
        "body": "This summer, I joined Taran's Saturday 9 AM yoga class at Humber Bay Shores Park. I loved not only how she instructed the class, but also how much she cared about everyone in the group. It wasn't just a yoga class, but also a great community here in Humber Bay.",
        "name": "Saihim Park"
      }
    ],
    "benefitsHeading": "Benefits Etobicoke teachers and parents see every day",
    "benefits": [
      {
        "title": "Improved Focus",
        "desc": "Children pay attention longer and transition between activities more smoothly. Etobicoke teachers report fewer classroom disruptions."
      },
      {
        "title": "Emotional Balance",
        "desc": "Kids gain practical tools to manage big feelings and reduce meltdowns at school and at home."
      },
      {
        "title": "Social Skills",
        "desc": "Build confidence, kindness, and cooperation through shared movement and mindfulness activities."
      },
      {
        "title": "Better Sleep and Calm",
        "desc": "Etobicoke families tell us their children are noticeably calmer at home and sleep better after classes."
      }
    ],
    "areasHeading": "Every corner of Etobicoke",
    "areasIntro": "",
    "areas": [
      "Bloordale",
      "Islington",
      "Mimico",
      "New Toronto",
      "Long Branch",
      "Humber Valley",
      "Richview",
      "Rexdale",
      "Thistletown",
      "Etobicoke City Centre",
      "Kipling",
      "Royal York",
      "Dixon Road",
      "Humber Bay",
      "Stonegate",
      "Markland Wood"
    ],
    "faqHeading": "Questions from Etobicoke schools and families",
    "faqs": [
      {
        "q": "Which areas of Etobicoke do you serve?",
        "a": "We serve all of Etobicoke including Bloordale, Islington, Mimico, New Toronto, Long Branch, Humber Valley, Richview, Rexdale, Thistletown, and Etobicoke City Centre. We work with schools and families along Bloor Street West, Kipling Avenue, Islington Avenue, Royal York Road, and Dixon Road."
      },
      {
        "q": "Do you work with both public and private schools in Etobicoke?",
        "a": "Yes. We work with public schools, private schools, Montessori programs, and independent childcare centres throughout Etobicoke. Our programs are designed to fit a wide range of school environments and schedules."
      },
      {
        "q": "What is the youngest age you work with in Etobicoke?",
        "a": "We accept children from 18 months old. Our toddler yoga program is specifically designed for children 18 months to 3 years and is one of the only programs in Etobicoke led by someone with a formal early childhood education background."
      },
      {
        "q": "How do I book a kids yoga program in Etobicoke?",
        "a": "Fill out our contact form or call us at (647) 856-8206. We will respond within 1 to 2 business days with a custom proposal tailored to your Etobicoke school, daycare, or family."
      }
    ],
    "ctaHeading": "Bring kids yoga to your Etobicoke school or family today",
    "ctaBody": "We respond within 1 to 2 business days. No obligation. Just a friendly conversation about how we can support the children in your care.",
    "name": "Etobicoke"
  },
  "downtown-toronto": {
    "slug": "downtown-toronto",
    "h1": "Kids Yoga in Downtown Toronto",
    "lead": "Professional kids yoga and mindfulness for Downtown Toronto schools, childcare centres, daycares, and families. Led by a trained Early Childhood Educator. We come to you.",
    "aboutHeading": "Downtown Toronto's kids yoga program built on real child development expertise",
    "aboutParagraphs": [
      "Earth and OM Kids has been delivering professional kids yoga and mindfulness programs to Downtown Toronto schools, childcare centres, and families since 2018. We serve all of the downtown core including The Annex, Kensington Market, Trinity Bellwoods, Little Italy, Harbourfront, Corktown, Leslieville, Riverdale, Rosedale, Midtown, and Forest Hill.",
      "Every program is led by Taran Kaur, a trained Early Childhood Educator with nearly 10 years of experience in Toronto's diverse school and childcare communities. Downtown Toronto children face a uniquely stimulating and fast paced environment. Taran designs every session to give children practical tools for calm, focus, and self awareness.",
      "We come directly to your Downtown Toronto school, childcare centre, condo amenity room, or home. No travel required. We work around the tight scheduling realities of downtown life and build programs that fit seamlessly into your existing routine."
    ],
    "features": [
      {
        "title": "Trained Early Childhood Educator",
        "desc": "Nearly 10 years of real classroom and childcare experience across Toronto's downtown communities."
      },
      {
        "title": "Flexible Downtown Scheduling",
        "desc": "Programs designed to fit the tight scheduling realities of downtown schools and busy city families."
      },
      {
        "title": "Trusted Downtown School Partners",
        "desc": "Including Lycée Français Toronto, East Toronto Village Children's Centre, and many more."
      },
      {
        "title": "Condo and Community Spaces Welcome",
        "desc": "We deliver programs in condo amenity rooms, community centres, and private spaces across the core."
      }
    ],
    "programsHeading": "Every program. Every age. Across Downtown Toronto.",
    "programsIntro": "",
    "programs": [
      {
        "emoji": "🏫",
        "title": "School and Childcare Programs",
        "desc": "In-class yoga and mindfulness for Downtown Toronto schools, Montessori programs, and childcare centres. 30 to 45 minutes. Wellness weeks, ongoing series, and single sessions.",
        "link": "/schools",
        "linkText": "School programs"
      },
      {
        "emoji": "🌿",
        "title": "After School Classes",
        "desc": "Weekly kids yoga classes in small groups for toddlers, preschoolers, and school age children across Downtown Toronto. Ages 18 months to 12 years.",
        "link": "/families",
        "linkText": "After school classes"
      },
      {
        "emoji": "🍼",
        "title": "Toddler Yoga Downtown Toronto",
        "desc": "Playful, song-based yoga for children from 18 months old. Short sessions designed for how very young children learn and move in the city.",
        "link": "/toddler-yoga-toronto",
        "linkText": "Toddler yoga"
      },
      {
        "emoji": "🧘",
        "title": "Children's Mindfulness",
        "desc": "Practical mindfulness for Downtown Toronto children. Breathing games, body awareness, guided relaxation, and emotional regulation for city kids.",
        "link": "/mindfulness-for-kids-toronto",
        "linkText": "Mindfulness programs"
      },
      {
        "emoji": "🎂",
        "title": "Yoga Birthday Parties",
        "desc": "Magical yoga birthday parties for children across Downtown Toronto. We come to your home, condo amenity room, or party venue. Fully themed for ages 3 to 12.",
        "link": "/yoga-birthday-party-toronto",
        "linkText": "Birthday parties"
      },
      {
        "emoji": "👨‍👩‍👧",
        "title": "Family Yoga Workshops",
        "desc": "Family yoga experiences that bring Downtown Toronto parents and children together through mindful movement, breathing, and connection.",
        "link": "/contact",
        "linkText": "Book a workshop"
      }
    ],
    "split": [
      {
        "title": "Bring professional yoga to your Downtown Toronto school",
        "body": "We work with public schools, private schools, Montessori programs, French language schools, and childcare centres across Downtown Toronto. Single sessions, wellness weeks, and ongoing programs available.",
        "href": "/schools",
        "label": "Learn about school programs"
      },
      {
        "title": "Weekly classes and private sessions for your child",
        "body": "After school weekly classes, condo and home sessions, toddler yoga, birthday parties, and family workshops. Available across all Downtown Toronto neighbourhoods for children from 18 months to 12 years.",
        "href": "/families",
        "label": "Explore family programs"
      }
    ],
    "quotes": [
      {
        "body": "We've been working with Earth & OM Kids for the past two years during our summer camp, and we've had such a great experience! The instructors are amazing with the children, patient, friendly, and always make the sessions fun and engaging.",
        "name": "Catherine Maheu"
      }
    ],
    "benefitsHeading": "Benefits Downtown Toronto teachers and parents see every day",
    "benefits": [
      {
        "title": "Better Focus",
        "desc": "Helps children stay calm and focused in a busy urban environment. Downtown teachers report fewer disruptions and smoother transitions."
      },
      {
        "title": "Emotional Regulation",
        "desc": "Gives kids practical tools to manage stress from city life, school, and big feelings usable independently anytime."
      },
      {
        "title": "Social Connection",
        "desc": "Builds confidence, kindness, and positive peer relationships through shared movement and mindfulness."
      },
      {
        "title": "Mindful City Living",
        "desc": "Introduces healthy lifelong habits early. Downtown children learn to slow down, breathe, and connect with themselves."
      }
    ],
    "areasHeading": "Every corner of the downtown core",
    "areasIntro": "",
    "areas": [
      "The Annex",
      "Yorkville",
      "Rosedale",
      "Forest Hill",
      "Midtown",
      "Kensington Market",
      "Trinity Bellwoods",
      "Little Italy",
      "Harbourfront",
      "Corktown",
      "Leslieville",
      "Riverdale",
      "St. Lawrence Market",
      "King West",
      "Liberty Village",
      "Queen West"
    ],
    "faqHeading": "Questions from Downtown Toronto schools and families",
    "faqs": [
      {
        "q": "Which areas of Downtown Toronto do you serve?",
        "a": "We serve all of Downtown Toronto including The Annex, Kensington Market, Trinity Bellwoods, Little Italy, Harbourfront, Corktown, Leslieville, Riverdale, Rosedale, Midtown, Forest Hill, and the St. Lawrence Market neighbourhood. We work along Spadina Avenue, Bloor Street West, College Street, Queen Street West, King Street, and the Yonge Street corridor."
      },
      {
        "q": "Can you come to our condo building or community space?",
        "a": "Yes. Many Downtown Toronto families host our family yoga workshops and birthday parties in condo amenity rooms, community centres, and private spaces. We bring everything needed for the session. Just let us know your space and we will make it work."
      },
      {
        "q": "Do you work with French language schools in Downtown Toronto?",
        "a": "Yes. We are proud to work with Lycée Français Toronto and can deliver programs in both English and French language school environments. Our programs are adaptable to a wide range of school cultures and community needs."
      },
      {
        "q": "How do I book a kids yoga program in Downtown Toronto?",
        "a": "Fill out our contact form or call us at (647) 856-8206. We will respond within 1 to 2 business days with a custom proposal tailored to your Downtown Toronto school, daycare, or family."
      }
    ],
    "ctaHeading": "Bring kids yoga to your Downtown Toronto school or family today",
    "ctaBody": "We respond within 1 to 2 business days. No obligation. Just a friendly conversation about how we can support the children in your care.",
    "name": "Downtown Toronto"
  }
};
