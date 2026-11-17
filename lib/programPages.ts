// Copy for the toddler, mindfulness and birthday pages, moved here word for word from the old
// page components so they share components/rd/ProgramTemplate with the other activity pages.
export type ProgramSection =
  | { type: 'seo'; heading: string; paragraphs: string[] }
  | { type: 'cards'; heading: string; intro?: string; items: { title: string; desc: string; emoji?: string; href?: string; label?: string }[] }
  | { type: 'steps'; heading: string; intro?: string; items: { title: string; desc: string }[] }
  | { type: 'details'; heading: string; intro?: string; items: { label: string; value: string }[] }
  | { type: 'quote'; body: string; name: string; google?: boolean }
  | { type: 'faq'; heading: string; items: { q: string; a: string }[] }
  | { type: 'related'; heading: string; items: { href: string; label: string }[] }
  | { type: 'cta'; heading: string; body: string; label: string };

export type ProgramPage = {
  slug: string;
  hero: { title: string; lead: string; actions: { href: string; label: string }[] };
  sections: ProgramSection[];
};

export const programPages: Record<string, ProgramPage> = {
  "toddler-yoga-toronto": {
    "slug": "toddler-yoga-toronto",
    "hero": {
      "title": "Toddler Yoga in Toronto",
      "lead": "Playful, song-based yoga classes for children from 18 months old. Fun movement, animal poses, and breathing games designed for how toddlers actually learn. Serving Toronto and the GTA.",
      "actions": [
        {
          "href": "/contact",
          "label": "Book a Toddler Yoga Program"
        },
        {
          "href": "/programs",
          "label": "View All Programs"
        }
      ]
    },
    "sections": [
      {
        "type": "seo",
        "heading": "Toddler Yoga Classes in Toronto Starting at 18 Months",
        "paragraphs": [
          "Earth and OM Kids offers Toronto's most thoughtfully designed toddler yoga program for children from 18 months old. While most yoga programs start at age 3 or older, we believe the foundation for lifelong mindfulness and body awareness starts much earlier and we have the early childhood education background to do it right.",
          "Our toddler yoga sessions are nothing like adult yoga classes. They are short (20 to 30 minutes), joyful, and built entirely around how toddlers actually learn through songs, repetition, animal sounds, imaginative play, and movement that feels like fun rather than exercise. There are no expectations for sitting still, following long instructions, or holding poses perfectly. Toddlers wiggle. We celebrate that.",
          "Every toddler yoga session is led by Taran Kaur, a trained Early Childhood Educator with nearly 10 years of experience working with very young children across Toronto daycares, Montessori schools, and childcare centres. Taran understands toddler development deeply cognitively, emotionally, and physically and designs every session around the real developmental needs of this age group.",
          "We deliver toddler yoga programs across Toronto and the GTA including North York, Scarborough, Etobicoke, Downtown Toronto, Vaughan, Mississauga, and Markham. We come directly to your daycare, Montessori school, childcare centre, or home. Many Toronto daycares and childcare centres bring us in for regular weekly toddler yoga sessions as part of their enrichment programming.",
          "Parents are warmly welcomed to join their toddlers during sessions. For very young children, having a familiar caregiver nearby transforms yoga into a shared bonding experience. Many families tell us that toddler yoga becomes one of their favourite weekly rituals together."
        ]
      },
      {
        "type": "cards",
        "heading": "Why We Welcome Toddlers from 18 Months",
        "intro": "Most programs make you wait until age 3. We know that the earlier children experience mindful movement, the deeper the benefits go.",
        "items": [
          {
            "title": "Brain Development",
            "desc": "The first three years of life are the most critical period for brain development. Introducing movement, breathing, and body awareness at this stage builds lasting neural pathways."
          },
          {
            "title": "ECE Expertise",
            "desc": "As a trained Early Childhood Educator, Taran has the professional knowledge to work safely and effectively with very young children in ways a standard yoga teacher cannot."
          },
          {
            "title": "Early Emotional Tools",
            "desc": "Toddlers who learn simple breathing and body awareness techniques early have a head start on emotional regulation before the big feelings of preschool arrive."
          }
        ]
      },
      {
        "type": "steps",
        "heading": "What Happens in a Toddler Yoga Session",
        "intro": "",
        "items": [
          {
            "title": "Welcome Circle",
            "desc": "A familiar song and greeting to help toddlers settle in and feel safe. Repetition is key for this age group."
          },
          {
            "title": "Animal Adventure",
            "desc": "Story-based movement where toddlers become different animals through poses, sounds, and imaginative play."
          },
          {
            "title": "Breathing Games",
            "desc": "Simple and fun breathing techniques like balloon breathing and bunny breaths that toddlers genuinely love."
          },
          {
            "title": "Cosy Relaxation",
            "desc": "A short guided rest with gentle music. Many toddlers surprise their parents by actually staying still for this part."
          }
        ]
      },
      {
        "type": "cards",
        "heading": "Benefits of Toddler Yoga in Toronto",
        "intro": "What Toronto parents and daycare directors notice after just a few sessions.",
        "items": [
          {
            "emoji": "🏃",
            "title": "Gross Motor Skills",
            "desc": "Balancing, stretching, jumping, and crawling through yoga poses builds strength and coordination."
          },
          {
            "emoji": "🗣️",
            "title": "Language Development",
            "desc": "Naming animals, body parts, and describing movements supports early vocabulary and communication."
          },
          {
            "emoji": "😌",
            "title": "Early Calm",
            "desc": "Simple breathing tools give toddlers their very first strategies for managing big feelings."
          },
          {
            "emoji": "🌟",
            "title": "Confidence",
            "desc": "Mastering a new pose and being celebrated for it builds self-esteem from the very earliest age."
          }
        ]
      },
      {
        "type": "quote",
        "body": "We had a wonderful experience with Earth & Om kids! The sessions were fun, engaging and calming for the children.",
        "name": "Kanwalpreet Kaur",
        "google": true
      },
      {
        "type": "cards",
        "heading": "Who Our Toddler Yoga Programs Are For",
        "intro": "",
        "items": [
          {
            "title": "Toronto Daycares and Childcare Centres",
            "desc": "We offer regular weekly toddler yoga sessions for daycares and childcare centres across Toronto. Sessions are designed to fit seamlessly into your daily schedule and enhance your existing programming.",
            "href": "/schools",
            "label": "School and daycare programs"
          },
          {
            "title": "Montessori Schools",
            "desc": "Toddler yoga aligns beautifully with Montessori principles of independence, movement, and whole child development. We have experience working within Montessori environments across the GTA.",
            "href": "/schools",
            "label": "Montessori programs"
          },
          {
            "title": "Families at Home",
            "desc": "Book a private toddler yoga session for your child and a small group of friends. Great for playdates, parent and tot groups, and family wellness at home across Toronto and the GTA.",
            "href": "/contact",
            "label": "Book a home session"
          }
        ]
      },
      {
        "type": "faq",
        "heading": "Questions About Toddler Yoga in Toronto",
        "items": [
          {
            "q": "Can an 18 month old really do yoga?",
            "a": "Yes. Our sessions are designed specifically for children from 18 months old. There are no expectations for stillness or perfect poses. Sessions are play-based, song-led, and built entirely around what toddlers can actually do at this developmental stage. As a trained Early Childhood Educator, Taran has the expertise to make it work beautifully."
          },
          {
            "q": "Do parents need to stay during toddler yoga?",
            "a": "For children under 2 years old, we recommend parents or caregivers stay and participate. For children closer to 3, it depends on the child's comfort level. Many families find that joining in together makes the experience even more special."
          },
          {
            "q": "How long are toddler yoga sessions?",
            "a": "Toddler yoga sessions are 20 to 30 minutes. This is the appropriate attention span for children in this age range. We pack a lot of joy, movement, and learning into a short and perfectly paced session."
          },
          {
            "q": "Where do you offer toddler yoga programs in Toronto?",
            "a": "We offer toddler yoga across Toronto and the GTA including North York, Scarborough, Etobicoke, Downtown Toronto, Vaughan, Mississauga, and Markham. We come to your daycare, school, or home."
          }
        ]
      },
      {
        "type": "cta",
        "heading": "Ready to Start Your Toddler's Yoga Journey?",
        "body": "Get in touch today to book a toddler yoga session for your daycare, school, or family across Toronto and the GTA.",
        "label": "Book a Toddler Yoga Program"
      }
    ]
  },
  "mindfulness-for-kids-toronto": {
    "slug": "mindfulness-for-kids-toronto",
    "hero": {
      "title": "Mindfulness for Kids in Toronto",
      "lead": "Professional children's mindfulness programs for Toronto schools, daycares, and families. Practical tools that help children manage stress, improve focus, and build lifelong emotional resilience. Ages 18 months to 12 years.",
      "actions": [
        {
          "href": "/contact",
          "label": "Book a Mindfulness Program"
        },
        {
          "href": "/programs",
          "label": "View All Programs"
        }
      ]
    },
    "sections": [
      {
        "type": "seo",
        "heading": "Children's Mindfulness Programs Across Toronto and the GTA",
        "paragraphs": [
          "Children in Toronto today are navigating more stress, stimulation, and emotional complexity than ever before. Screens, busy schedules, academic pressure, and the pace of city life all affect how children feel, focus, and regulate themselves. Mindfulness gives children practical, age-appropriate tools to slow down, breathe, and reconnect with themselves.",
          "Earth and OM Kids delivers professional mindfulness programs for children across Toronto and the Greater Toronto Area including North York, Scarborough, Etobicoke, Downtown Toronto, Vaughan, Mississauga, and Markham. Our programs are led by Taran Kaur, a trained Early Childhood Educator with nearly 10 years of experience in Toronto childcare and school communities.",
          "Mindfulness for children looks very different from adult mindfulness. It is not about sitting in silence or clearing the mind. For young children, mindfulness happens through movement, breathing games, sensory activities, guided stories, and simple emotional check-ins. Our programs are always playful, engaging, and developmentally appropriate for the age group being served.",
          "We offer children's mindfulness programs for Toronto schools, daycares, Montessori programs, and families. Programs range from single wellness sessions and PD day workshops to ongoing weekly visits and multi-week mindfulness series. Every program is fully customized to the goals, age group, and environment of your Toronto school or family.",
          "Research consistently shows that children who practice mindfulness regularly demonstrate improved attention, better emotional regulation, reduced anxiety, and stronger social skills. These are not abstract benefits they are changes that Toronto teachers, directors, and parents notice in real classrooms and real homes within weeks of starting a program."
        ]
      },
      {
        "type": "cards",
        "heading": "What Children's Mindfulness Actually Looks Like",
        "intro": "Not sitting in silence. Real, playful, and age-appropriate tools children actually use.",
        "items": [
          {
            "title": "Breathing Techniques",
            "desc": "Fun, memorable breathing exercises like balloon breathing, bunny breathing, and 5 finger breathing that children can use independently when they feel overwhelmed."
          },
          {
            "title": "Mindful Movement",
            "desc": "Slow intentional movement through yoga poses and body scans that help children connect physical sensations with emotional states."
          },
          {
            "title": "Sensory Awareness",
            "desc": "Simple activities that engage all five senses to anchor children in the present moment. Particularly effective for anxious or easily distracted children."
          },
          {
            "title": "Emotional Check-ins",
            "desc": "Age-appropriate tools for naming and identifying feelings. Children learn a feelings vocabulary that supports communication and self-regulation."
          },
          {
            "title": "Guided Relaxation",
            "desc": "Short guided visualizations and relaxation stories that calm the nervous system and give children a sense of safety and peace."
          },
          {
            "title": "Gratitude and Positivity",
            "desc": "Simple gratitude practices that shift children's attention toward what is good in their lives, building optimism and resilience over time."
          }
        ]
      },
      {
        "type": "cards",
        "heading": "Who Our Mindfulness Programs Are For",
        "intro": "",
        "items": [
          {
            "title": "Toronto Schools and Daycares",
            "desc": "We deliver children's mindfulness programs to public schools, private schools, Montessori programs, and childcare centres across Toronto. Programs are designed to support classroom wellness goals and integrate with your existing schedule.",
            "href": "/schools",
            "label": "School programs"
          },
          {
            "title": "Families at Home",
            "desc": "Private mindfulness sessions for families in Toronto and the GTA. Learn practical techniques together that you can use at home, during homework, at bedtime, and whenever your child needs to reset.",
            "href": "/families",
            "label": "Family programs"
          },
          {
            "title": "Special Needs and Diverse Learners",
            "desc": "As a trained Early Childhood Educator, Taran has extensive experience adapting mindfulness programs for children with anxiety, sensory processing differences, ADHD, and diverse learning profiles. Every child is welcome.",
            "href": "/contact",
            "label": "Get in touch"
          }
        ]
      },
      {
        "type": "cards",
        "heading": "Benefits of Mindfulness for Children",
        "intro": "What Toronto teachers, directors, and parents notice after just a few sessions.",
        "items": [
          {
            "emoji": "🧠",
            "title": "Better Focus",
            "desc": "Children pay attention longer and transition between activities more smoothly. Teachers notice fewer disruptions."
          },
          {
            "emoji": "😊",
            "title": "Reduced Anxiety",
            "desc": "Breathing techniques give children immediate tools to calm their nervous system when worry or stress arises."
          },
          {
            "emoji": "💤",
            "title": "Improved Sleep",
            "desc": "Families consistently report that children fall asleep more easily and wake less frequently after starting mindfulness programs."
          },
          {
            "emoji": "🤝",
            "title": "Stronger Relationships",
            "desc": "Mindful children are more empathetic, patient, and able to manage conflict with peers and siblings."
          }
        ]
      },
      {
        "type": "quote",
        "body": "In my years working in early childhood settings, I saw so many children carrying stress they did not have words for. Mindfulness gave them a language through their bodies and breath to feel safe, strong, and calm.",
        "name": "Taran Kaur, Founder of Earth and OM Kids",
        "google": false
      },
      {
        "type": "faq",
        "heading": "Questions About Kids Mindfulness in Toronto",
        "items": [
          {
            "q": "What is mindfulness for kids?",
            "a": "Mindfulness for kids is the practice of helping children pay attention to the present moment through breathing, movement, and body awareness activities. For children it looks like breathing games, yoga poses, guided relaxation, and sensory activities not sitting in silence. It builds emotional regulation, focus, and resilience."
          },
          {
            "q": "What age can children start mindfulness?",
            "a": "Children can begin age-appropriate mindfulness activities from as young as 18 months old. Earth and OM Kids offers mindfulness programs for children from 18 months to 12 years across Toronto and the GTA, with each program fully tailored to the developmental stage of the child."
          },
          {
            "q": "How is mindfulness different from kids yoga?",
            "a": "Kids yoga uses physical poses and movement as the primary vehicle, while mindfulness focuses more broadly on present moment awareness through breathing, sensory activities, guided relaxation, and emotional check-ins. Our programs blend both approaches so children get the benefits of movement and mindfulness together."
          },
          {
            "q": "Can mindfulness help a child with anxiety?",
            "a": "Yes. Research consistently shows that mindfulness practices reduce anxiety in children by activating the calming part of the nervous system. Simple breathing techniques and body awareness exercises give children practical tools to manage worry and stress in real time. We have extensive experience adapting programs for children with anxiety."
          },
          {
            "q": "Do you offer mindfulness programs for Toronto schools and daycares?",
            "a": "Yes. We deliver children's mindfulness programs to schools, daycares, and childcare centres across Toronto and the GTA. Programs include single sessions, wellness weeks, and ongoing weekly visits. All programs are designed to fit your school schedule and curriculum goals."
          }
        ]
      },
      {
        "type": "cta",
        "heading": "Ready to Bring Mindfulness to Your Child or School?",
        "body": "Get in touch today to book a children's mindfulness program for your Toronto school, daycare, or family. We respond within 1 to 2 business days.",
        "label": "Book a Mindfulness Program"
      }
    ]
  },
  "yoga-birthday-party-toronto": {
    "slug": "yoga-birthday-party-toronto",
    "hero": {
      "title": "A Birthday Party They Will Never Forget",
      "lead": "Fun, active, and magical yoga birthday parties for children across Toronto and the GTA. We come to you. Ages 3 to 12.",
      "actions": [
        {
          "href": "/contact",
          "label": "Book a Birthday Party"
        },
        {
          "href": "/programs",
          "label": "View All Programs"
        }
      ]
    },
    "sections": [
      {
        "type": "seo",
        "heading": "Kids Yoga Birthday Parties in Toronto and the GTA",
        "paragraphs": [
          "Looking for a unique and unforgettable kids birthday party idea in Toronto? Earth and OM Kids brings the magic of yoga and mindfulness directly to your party venue. Our birthday yoga parties are fun, energetic, and filled with laughter giving children an experience they will talk about long after the cake is gone.",
          "Our kids yoga birthday parties are available across Toronto and the Greater Toronto Area including North York, Scarborough, Etobicoke, Downtown Toronto, Vaughan, Mississauga, Markham, and Richmond Hill. We come to your home, backyard, condo amenity room, community centre, or any party venue in the GTA. You handle the cake. We handle the fun.",
          "Every birthday party is led by Taran Kaur, a trained Early Childhood Educator with nearly 10 years of experience working with children across Toronto. Taran has a natural gift for capturing children's attention and turning movement into play. Parents consistently tell us their children were engaged, laughing, and asking when the next yoga party is.",
          "Our yoga birthday parties are designed for children ages 3 to 12. Each session is fully tailored to the birthday child's age group, interests, and theme. Whether your child loves animals, nature, superheroes, or magic, we weave yoga poses, breathing games, and mindfulness activities into a story that brings their theme to life.",
          "A typical kids yoga birthday party in Toronto is 45 to 60 minutes and includes a welcome circle, a themed yoga adventure story, breathing and mindfulness games, a group relaxation activity, and a birthday celebration moment. We recommend 8 to 16 children for the best experience, though we can accommodate larger groups with advance notice."
        ]
      },
      {
        "type": "cards",
        "heading": "Everything You Need for the Perfect Party",
        "intro": "",
        "items": [
          {
            "title": "Themed Yoga Adventure",
            "desc": "A fully custom story-based yoga journey built around your child's favourite theme. Animals, nature, space, ocean, superheroes we make it magical."
          },
          {
            "title": "Breathing and Mindfulness Games",
            "desc": "Fun and interactive breathing games that children love. These give kids tools they can use long after the party is over."
          },
          {
            "title": "Birthday Child Spotlight",
            "desc": "A special moment just for the birthday child. They get to lead a pose, make a wish, and feel truly celebrated in front of their friends."
          },
          {
            "title": "Group Relaxation Activity",
            "desc": "A calming guided relaxation to wind down after the active yoga adventure. Parents love this part too."
          },
          {
            "title": "We Come to You",
            "desc": "We travel to your home, backyard, condo, or party venue anywhere across Toronto and the GTA. No extra travel fees within the city."
          },
          {
            "title": "Fully Customizable",
            "desc": "Every detail is tailored to your child's age, interests, and group size. Just tell us your vision and we will make it happen."
          }
        ]
      },
      {
        "type": "steps",
        "heading": "Simple to Book. Magical to Experience.",
        "intro": "",
        "items": [
          {
            "title": "Get in Touch",
            "desc": "Fill out our contact form or call us. Tell us your child's age, the party date, location, and any theme ideas."
          },
          {
            "title": "We Design Your Party",
            "desc": "Taran creates a fully custom yoga adventure story and activity plan built around your child's theme and age group."
          },
          {
            "title": "We Come to You",
            "desc": "On the day, we arrive at your venue ready to go. All you need is a clear floor space roughly the size of a living room."
          },
          {
            "title": "Pure Magic",
            "desc": "Children move, breathe, laugh, and leave with new tools and memories. Parents relax and enjoy the show."
          }
        ]
      },
      {
        "type": "quote",
        "body": "Earth & OM Kids is a wonderful place for children. The environment is warm, welcoming, and thoughtfully designed, and the staff are kind, patient, and professional. I highly recommend Earth & OM Kids to families looking for a safe, engaging, and supportive space for their children.",
        "name": "Ogede Bashir",
        "google": true
      },
      {
        "type": "details",
        "heading": "Party Details at a Glance",
        "intro": "",
        "items": [
          {
            "label": "Ages",
            "value": "3 to 12 years old"
          },
          {
            "label": "Duration",
            "value": "45 to 60 minutes"
          },
          {
            "label": "Group size",
            "value": "8 to 16 children recommended"
          },
          {
            "label": "Location",
            "value": "Your home, backyard, condo, or venue"
          },
          {
            "label": "Service area",
            "value": "Toronto and GTA wide"
          },
          {
            "label": "Booking lead time",
            "value": "2 to 3 weeks in advance recommended"
          }
        ]
      },
      {
        "type": "faq",
        "heading": "Frequently Asked Questions",
        "items": [
          {
            "q": "How far in advance should I book a yoga birthday party in Toronto?",
            "a": "We recommend booking at least 2 to 3 weeks in advance to secure your preferred date and time. Weekend dates fill up quickly, especially during spring and fall. The sooner you reach out the better."
          },
          {
            "q": "What space do you need for the party?",
            "a": "We need a clear floor space roughly the size of a living room. We bring all the materials needed. Yoga mats can be provided or children can use a soft floor or carpet. We make it work in most home and venue spaces."
          },
          {
            "q": "Can parents join in the yoga party?",
            "a": "Absolutely. Parents are welcome to join in the fun. Many parents end up participating alongside their children and love it. It is a beautiful shared experience."
          },
          {
            "q": "Do you serve areas outside Toronto for birthday parties?",
            "a": "Yes. We travel across the Greater Toronto Area including North York, Scarborough, Etobicoke, Vaughan, Mississauga, Markham, and Richmond Hill. Contact us with your location and we will confirm availability."
          },
          {
            "q": "How much does a kids yoga birthday party in Toronto cost?",
            "a": "Pricing varies based on the duration, group size, and location. Contact us for a custom quote. We offer flexible options to fit a range of budgets."
          }
        ]
      },
      {
        "type": "cta",
        "heading": "Ready to Book Your Child's Yoga Birthday Party?",
        "body": "Dates fill up fast. Get in touch today and we will create a birthday experience your child and their friends will never forget.",
        "label": "Book a Birthday Party"
      }
    ]
  }
};
