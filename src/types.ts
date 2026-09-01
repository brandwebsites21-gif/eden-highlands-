export interface RoomItem {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  amenities: string[];
  description: string;
  specs: {
    bed: string;
    capacity: string;
    kitchen: string;
    climate: string;
  };
  highlight?: string;
  tag?: string;
  imageCaption: string;
  bgVariant?: 'cream' | 'pink' | 'sage' | 'tan';
}

export interface AmenityItem {
  id: string;
  title: string;
  category: 'in-room' | 'property' | 'convenience';
  desc: string;
  iconName: string;
  cardType: 'card' | 'textcard';
  bgVariant?: 'cream' | 'pink' | 'sage' | 'tan';
  caption?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  category: 'rooms' | 'spaces' | 'grounds' | 'lifestyle';
  aspect: 'landscape' | 'portrait' | 'square' | 'wide';
  bgVariant: 'cream' | 'pink' | 'sage' | 'tan';
  subtitle?: string;
}

export interface JournalPost {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  imageCaption: string;
  bgVariant: 'cream' | 'pink' | 'sage' | 'tan';
  content: {
    intro: string;
    sections: {
      heading?: string;
      paragraphs: string[];
      pullQuote?: string;
    }[];
  };
}

export interface ValueItem {
  title: string;
  desc: string;
  iconName: 'sprout' | 'circle-dot' | 'heart' | 'flame';
}

export interface ExperienceItem {
  id: string;
  title: string;
  eyebrow: string;
  desc: string;
  details: string[];
  imageCaption: string;
  bgVariant: 'cream' | 'pink' | 'sage' | 'tan';
}
