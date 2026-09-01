import { RoomItem, AmenityItem, GalleryItem, JournalPost, ValueItem, ExperienceItem } from '../types';

export const HOTEL_PHONE = '+255 745 303 032';
export const HOTEL_PHONE_RAW = '255745303032';
export const HOTEL_INSTAGRAM = 'https://instagram.com/edenhighlandshotel';
export const HOTEL_INSTAGRAM_HANDLE = '@edenhighlandshotel';
export const HOTEL_LOCATION = 'TANZAM Highway, ~700m from Mafiati junction, Mbeya, Tanzania';

export const ROOMS_DATA: RoomItem[] = [
  {
    id: 'standard-double',
    name: 'Standard Double Room',
    price: '$180',
    priceNote: '/ night · Confirmed public listing rate',
    amenities: ['Kitchen in room', 'Air conditioning', 'Free high-speed Wi-Fi', 'Free secure parking'],
    description: 'A self-contained sanctuary featuring a private kitchenette, custom timber millwork, tailored climate control, and tranquil garden courtyard outlooks.',
    specs: {
      bed: 'King-sized highland bed',
      capacity: 'Up to 2 guests',
      kitchen: 'Fully equipped private kitchenette',
      climate: 'Individual multi-split air conditioning'
    },
    highlight: 'Confirmed Public Listing Rate',
    imageCaption: 'Standard Double Room, Eden Highlands Hotel',
    bgVariant: 'tan'
  },
  {
    id: 'family-room',
    name: 'Highland Family Suite',
    price: 'Contact for current rates',
    priceNote: 'Direct availability check',
    amenities: ['Full in-room kitchen', 'Kid-friendly setup', 'Free parking', 'Air conditioning'],
    description: 'Generous multi-bed layout tailored for families and travelling groups navigating the southern highlands highway with separate living and dining spaces.',
    specs: {
      bed: '1 King + 2 Twin beds',
      capacity: 'Up to 4 guests',
      kitchen: 'Full family kitchen with stovetop & cookware',
      climate: 'Dual-zone air conditioning'
    },
    highlight: 'Kid-Friendly Accommodation',
    imageCaption: 'Highland Family Suite, Eden Highlands Hotel',
    bgVariant: 'pink'
  },
  {
    id: 'executive-room',
    name: 'Executive Garden Studio',
    price: 'Contact for current rates',
    priceNote: 'Direct availability check',
    amenities: ['Dedicated workstation', 'Kitchenette', 'High-speed Wi-Fi', 'Complimentary parking'],
    description: 'Engineered for business travellers and extended-stay guests seeking peaceful desk focus, reliable internet, and self-contained cooking freedom.',
    specs: {
      bed: 'King-sized orthopedic bed',
      capacity: 'Up to 2 guests',
      kitchen: 'Executive kitchenette & coffee station',
      climate: 'Quiet whisper-mode air conditioning'
    },
    highlight: 'Business & Extended Stays',
    imageCaption: 'Executive Garden Studio, Eden Highlands Hotel',
    bgVariant: 'sage'
  }
];

export const AMENITIES_DATA: AmenityItem[] = [
  {
    id: 'kitchen',
    title: 'Kitchen in all rooms',
    category: 'in-room',
    desc: 'Every room is equipped with its own dedicated cooking facilities, cookware, and refrigerator for true self-contained freedom.',
    iconName: 'Utensils',
    cardType: 'textcard',
    bgVariant: 'pink',
    caption: 'In-Room Kitchenette'
  },
  {
    id: 'ac',
    title: 'Air conditioning',
    category: 'in-room',
    desc: 'Whisper-quiet climate control in every bedroom and suite ensuring ideal temperature year-round regardless of highway weather.',
    iconName: 'Wind',
    cardType: 'card',
    bgVariant: 'sage',
    caption: 'Individual Climate Control'
  },
  {
    id: 'parking',
    title: 'Free secure parking',
    category: 'convenience',
    desc: 'Spacious on-site parking accessible directly from the TANZAM Highway, guarded around the clock for peace of mind.',
    iconName: 'Car',
    cardType: 'card',
    bgVariant: 'tan',
    caption: 'Highway-Accessible On-Site Parking'
  },
  {
    id: 'wifi',
    title: 'High-speed Wi-Fi',
    category: 'in-room',
    desc: 'Seamless wireless connectivity extending across guest rooms, private terraces, and common areas.',
    iconName: 'Wifi',
    cardType: 'card',
    bgVariant: 'cream',
    caption: 'Fiber Wireless Across Grounds'
  },
  {
    id: 'fitness',
    title: 'Fitness center',
    category: 'property',
    desc: 'On-site workout facilities for maintaining your routine while exploring or transiting the southern circuit.',
    iconName: 'Dumbbell',
    cardType: 'card',
    bgVariant: 'sage',
    caption: 'Highlands Fitness Room'
  },
  {
    id: 'family',
    title: 'Kid-friendly accommodation',
    category: 'property',
    desc: 'Thoughtfully designed spaces and self-catering flexibility that make travelling with children easy and relaxed.',
    iconName: 'Users',
    cardType: 'card',
    bgVariant: 'pink',
    caption: 'Family Welcoming Suites'
  },
  {
    id: 'reception',
    title: '24-Hour front desk & assistance',
    category: 'convenience',
    desc: 'Warm highland hospitality and seamless late-night check-in support for highway travellers.',
    iconName: 'Clock',
    cardType: 'card',
    bgVariant: 'tan',
    caption: 'Day & Night Concierge Care'
  },
  {
    id: 'laundry',
    title: 'Laundry & valet services',
    category: 'convenience',
    desc: 'Prompt garment care and refreshing laundry services available on request for road journeyers.',
    iconName: 'Sparkles',
    cardType: 'card',
    bgVariant: 'cream',
    caption: 'Highland Care & Pressing'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Standard Double Suite',
    caption: 'Bedroom, Eden Highlands Hotel',
    category: 'rooms',
    aspect: 'landscape',
    bgVariant: 'tan',
    subtitle: 'King bed suite with warm linen and morning highland light'
  },
  {
    id: 'g2',
    title: 'In-Room Kitchenette',
    caption: 'Self-contained kitchen, Eden Highlands Hotel',
    category: 'rooms',
    aspect: 'square',
    bgVariant: 'pink',
    subtitle: 'Cookware, induction range, and fresh coffee facilities'
  },
  {
    id: 'g3',
    title: 'Gathering & Meeting Hall',
    caption: 'Event and meeting space, Eden Highlands Hotel',
    category: 'spaces',
    aspect: 'wide',
    bgVariant: 'cream',
    subtitle: 'Natural wood tables and tranquil garden acoustics'
  },
  {
    id: 'g4',
    title: 'Fitness Center',
    caption: 'Fitness center, Eden Highlands Hotel',
    category: 'spaces',
    aspect: 'portrait',
    bgVariant: 'sage',
    subtitle: 'Dedicated cardio and conditioning area'
  },
  {
    id: 'g5',
    title: 'Courtyard Grounds & TANZAM Arrival',
    caption: 'Property grounds & entry, Eden Highlands Hotel',
    category: 'grounds',
    aspect: 'landscape',
    bgVariant: 'tan',
    subtitle: 'Secure gated arrival ~700m from Mafiati junction'
  },
  {
    id: 'g6',
    title: 'Evening Turndown Ritual',
    caption: 'Signature evening experience, Eden Highlands Hotel',
    category: 'lifestyle',
    aspect: 'portrait',
    bgVariant: 'pink',
    subtitle: 'Highland herbal infusions and restful aromatherapy'
  },
  {
    id: 'g7',
    title: 'Highland Family Suite',
    caption: 'Family accommodation, Eden Highlands Hotel',
    category: 'rooms',
    aspect: 'landscape',
    bgVariant: 'cream',
    subtitle: 'Spacious layout designed for parents and children'
  },
  {
    id: 'g8',
    title: 'Quiet Workspace Corner',
    caption: 'Executive studio desk, Eden Highlands Hotel',
    category: 'rooms',
    aspect: 'square',
    bgVariant: 'sage',
    subtitle: 'Ergonomic seating and high-speed Wi-Fi connectivity'
  }
];

export const VALUES_DATA: ValueItem[] = [
  {
    title: 'Sustainability',
    desc: 'Local materials, water conservation, and lighter highland operations.',
    iconName: 'sprout'
  },
  {
    title: 'Individuality',
    desc: 'No two rooms feel alike; thoughtful tactile details in every corner.',
    iconName: 'circle-dot'
  },
  {
    title: 'Care',
    desc: 'A concierge team that knows your pace and welcomes you warmly.',
    iconName: 'heart'
  },
  {
    title: 'Comfort & Warmth',
    desc: 'A true home away from home with the freedom of self-catering.',
    iconName: 'flame'
  }
];

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: 'evening-ritual',
    title: 'Signature Evening Turndown & Aromatherapy',
    eyebrow: 'Signature experience',
    desc: 'A restful evening ritual featuring fresh highland herbal tea, botanical linen mist, and soothing lighting designed to decompress you after long highway driving.',
    details: [
      'Locally sourced Mbeya chamomile & mint tisanes',
      'Highland botanical essential oil diffuser preparation',
      'Quiet-hour turn-down service on request'
    ],
    imageCaption: 'Signature Evening Turndown Experience, Eden Highlands Hotel',
    bgVariant: 'tan'
  },
  {
    id: 'meeting-spaces',
    title: 'Spaces to Gather, Meet, and Connect',
    eyebrow: 'Events & meetings',
    desc: 'Flexible meeting and group spaces configured for workshops, board retreats, family milestones, and highway convoy briefings with bespoke catering coordination.',
    details: [
      'Configurable seating for small to mid-sized groups',
      'High-speed Wi-Fi for hybrid presentations',
      'Direct WhatsApp booking & catering consultation'
    ],
    imageCaption: 'Event and meeting space, Eden Highlands Hotel',
    bgVariant: 'pink'
  },
  {
    id: 'highland-walks',
    title: 'Mbeya Escarpment & Tea Ridge Walks',
    eyebrow: 'Local discovery',
    desc: 'Direct staff recommendations for morning jogs, gentle ridgeline paths, and viewpoint trails overlooking the southern highlands tea estates.',
    details: [
      'Curated morning trail guides from our concierge',
      'Cool mountain breeze and panoramic valley viewpoints',
      'Picnic provisions prepared in your in-room kitchen'
    ],
    imageCaption: 'Highland Scenery, Mbeya Region',
    bgVariant: 'sage'
  },
  {
    id: 'local-dining',
    title: 'Regional Gastronomy & Market Exploration',
    eyebrow: 'Culinary companion',
    desc: 'Guidance on sourcing fresh avocado, highland coffee beans, and local produce from Mafiati and Mbeya markets to cook in your private kitchenette.',
    details: [
      'Concierge guide to the freshest local produce stalls',
      'Recommendations for traditional Tanzanian barbecue spots',
      'Fresh milk and locally roasted coffee beans on request'
    ],
    imageCaption: 'Fresh Highland Harvest, Mbeya Tanzania',
    bgVariant: 'cream'
  }
];

export const JOURNAL_DATA: JournalPost[] = [
  {
    slug: 'the-art-of-the-self-contained-stay',
    title: 'The Art of the Self-Contained Stay on the TANZAM Highway',
    subtitle: 'Why having your own kitchen and quiet sanctuary changes road travel through Tanzania.',
    date: '18 August 2026',
    readTime: '4 min read',
    category: 'Travel Philosophy',
    excerpt: 'When driving between Dar es Salaam, Mbeya, and southern borders, the rhythm of your day shouldn’t depend on fixed restaurant schedules. The freedom of a private kitchen brings you home.',
    imageCaption: 'Kitchen & Living Space, Eden Highlands Hotel',
    bgVariant: 'pink',
    content: {
      intro: 'Long-distance highway travel across East Africa has a distinct cadence. After hours of watching rolling tea slopes, volcanic ridges, and bustling junction towns along the TANZAM corridor, what a traveller seeks isn’t elaborate ceremony. It is a warm exhale.',
      sections: [
        {
          heading: 'Autonomy at Your Own Tempo',
          paragraphs: [
            'At Eden Highlands Hotel, we built our rooms around the conviction that self-contained living offers unmatched peace. Whether arriving at 9 PM with children who need simple comfort food, or waking before dawn for an early border crossing with a fresh pot of coffee, having a fully equipped kitchenette restores control.',
            'You can brew your tea the exact strength you prefer, store cold drinks, prepare light meals, or simply enjoy seasonal avocados and mountain fruit bought along the highway.'
          ],
          pullQuote: 'A self-contained room isn’t just an amenity—it is the freedom to live at your own rhythm on the road.'
        },
        {
          heading: 'Resting Where the Air is Cool and Clear',
          paragraphs: [
            'Mbeya sits cradled between the Poroto and Kipengere mountain ranges. At 1,700 meters above sea level, evening temperatures drop quickly. Combining air-conditioned climate control with crisp highland linens ensures that road weariness lifts completely by morning.',
            'Our position—about 700 meters from Mafiati junction—keeps you seamlessly connected to the highway while providing a sheltered, quiet setting protected from direct thoroughfare noise.'
          ]
        }
      ]
    }
  },
  {
    slug: 'mbeya-highlands-guide',
    title: 'A Soft Guide to Mbeya: Peaks, Coffee, and Crater Lakes',
    subtitle: 'Curated spots to discover when breaking your journey in Tanzania’s southern highlands.',
    date: '10 August 2026',
    readTime: '6 min read',
    category: 'Highlands Guide',
    excerpt: 'From the crystalline waters of Lake Ngozi to high-altitude coffee estates, Mbeya is far more than a highway stop. Here is our understated field guide.',
    imageCaption: 'Mbeya Highlands Landscape & Mist',
    bgVariant: 'sage',
    content: {
      intro: 'Many travellers know the TANZAM Highway primarily as a trade artery linking Tanzania with Zambia and Malawi. Yet those who linger discover that Mbeya possesses some of the most dramatic and gentle landscapes in East Africa.',
      sections: [
        {
          heading: 'The Crater of Lake Ngozi',
          paragraphs: [
            'Hidden within the lush Poroto Mountains, Lake Ngozi is the second-largest crater lake in Africa. The hike winds through dense montane forest alive with bird calls and highland colobus monkeys, opening abruptly onto emerald-green waters cradled in caldera walls.',
            'Our team is happy to recommend trusted local guides and arrange safe morning departures right from our parking grounds.'
          ],
          pullQuote: 'High mountain air, volcanic soil, and ancient forests make Mbeya feel timeless.'
        },
        {
          heading: 'Coffee Aromas in the Foothills',
          paragraphs: [
            'The volcanic slopes surrounding Mbeya produce some of Tanzania’s finest Arabica coffees. The beans are characterized by bright citrus acidity, honeyed sweetness, and a full, rounded body.',
            'We encourage guests to pick up freshly roasted beans from local growers to grind in their room kitchenette for an unforgettable sunrise cup.'
          ]
        }
      ]
    }
  },
  {
    slug: 'travelling-with-family-on-the-road',
    title: 'Highway Travel with Family: Quiet Comfort for Children',
    subtitle: 'How thoughtful space design transforms long-distance road trips with kids into peaceful memories.',
    date: '28 July 2026',
    readTime: '5 min read',
    category: 'Family Travel',
    excerpt: 'Kid-friendly accommodation isn’t about flashy distractions; it’s about spacious rooms, safe parking, comfortable beds, and food flexibility that keeps everyone happy.',
    imageCaption: 'Family Accommodation Setup, Eden Highlands Hotel',
    bgVariant: 'cream',
    content: {
      intro: 'Travelling across countries or between regional capitals with children requires thoughtful logistics. Cramped standard hotel rooms often increase friction when children need to unwind after hours seated in the car.',
      sections: [
        {
          heading: 'Space to Unpack and Breathe',
          paragraphs: [
            'Our family accommodation options prioritize roominess and safety. Gated parking right near your door means unloading strollers, luggage, and cooler boxes is effortless.',
            'With high-speed Wi-Fi, children can watch their favorite bedtime stories while parents relax on the terrace or prepare a quick meal in the kitchen.'
          ],
          pullQuote: 'When children feel at home, parents can truly rest.'
        },
        {
          heading: 'Kid-Friendly Hospitality',
          paragraphs: [
            'Eden Highlands is publicly recognized as kid-friendly accommodation. Our team understands family needs—from extra pillows to ice for cooler bags—and provides attentive, unobtrusive care throughout your stay.'
          ]
        }
      ]
    }
  },
  {
    slug: 'the-evening-turndown-ritual',
    title: 'The Evening Ritual: Decompressing from Highway Driving',
    subtitle: 'Why sensory cues and botanical infusions create the deepest sleep after hundreds of kilometers.',
    date: '14 July 2026',
    readTime: '3 min read',
    category: 'Wellness & Rest',
    excerpt: 'Highway vibration and focused driving fatigue the nervous system. Our signature evening turndown is designed to gently reset your senses.',
    imageCaption: 'Aromatherapy & Herbal Teas, Eden Highlands Hotel',
    bgVariant: 'tan',
    content: {
      intro: 'Prolonged driving places specific demands on the eyes, neck, and nervous system. The constant hum of the asphalt and changing light conditions leave the body subtly alert long after the engine is turned off.',
      sections: [
        {
          heading: 'A Tactile Reset',
          paragraphs: [
            'Our signature evening experience invites you to transition into restful stillness. We recommend taking advantage of our whisper-quiet air conditioning, washing away road dust, and settling in with our botanical tisanes.',
            'The calming aroma of local highland herbs helps steady breathing, preparing you for restorative sleep before your next morning journey.'
          ],
          pullQuote: 'True luxury on the road is uninterrupted, deeply restorative rest.'
        }
      ]
    }
  }
];

export const STATS_DATA = [
  { num: '4.3★', label: 'Google rating' },
  { num: '16', label: 'Verified reviews' },
  { num: '1,900+', label: 'Instagram community' },
  { num: '~700m', label: 'From Mafiati junction' }
];

export const FAQS_DATA = [
  {
    q: 'Where exactly is Eden Highlands Hotel located?',
    a: 'We are situated directly along the TANZAM Highway in Mbeya, Tanzania, approximately 700 meters from the Mafiati junction. Our location offers easy highway access with a peaceful, secure setback.'
  },
  {
    q: 'Do all rooms have their own private kitchen?',
    a: 'Yes, every room at Eden Highlands Hotel features a private, self-contained kitchenette equipped with cooking amenities, cookware, and a refrigerator.'
  },
  {
    q: 'Is parking secure and free?',
    a: 'Yes, we provide complimentary, gated on-site parking with 24-hour security, ideal for road travellers, SUVs, family vehicles, and safari setups.'
  },
  {
    q: 'How do I check current rates and book my stay?',
    a: 'You can call or WhatsApp us directly at +255 745 303 032. We will immediately confirm current room options, availability, and nightly rates.'
  },
  {
    q: 'Are pets or children allowed?',
    a: 'Eden Highlands Hotel is officially listed as kid-friendly accommodation with spacious layouts. For specific pet policies, please message our front desk directly.'
  }
];
