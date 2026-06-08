export type Package = {
  id: string;
  title: string;
  duration: string;
  nights: number;
  rating: number;
  reviews: number;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  tag: string;
  highlights: string[];
};

export const packages: Package[] = [
  {
    id: 'honeymoon',
    title: 'Romantic Honeymoon Escape',
    duration: '6 Days · 5 Nights',
    nights: 5,
    rating: 4.9,
    reviews: 312,
    price: 38900,
    originalPrice: 52000,
    description:
      'A whisper-soft honeymoon across Port Blair, Havelock and Neil — private sunset cruises, candle-lit beach dinners and overwater villa stays.',
    image:
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1600&q=80',
    tag: 'Most Loved',
    highlights: ['Private Beach Dinner', 'Sunset Cruise', 'Luxury Villa Stay'],
  },
  {
    id: 'family',
    title: 'Family Island Discovery',
    duration: '7 Days · 6 Nights',
    nights: 6,
    rating: 4.8,
    reviews: 487,
    price: 32500,
    originalPrice: 41000,
    description:
      'Crafted for families — gentle snorkeling reefs, glass-bottom boats, jungle trails and hand-picked resorts every child remembers for years.',
    image:
      'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=1600&q=80',
    tag: 'Best for Family',
    highlights: ['Glass Boat Ride', 'Cellular Jail Light Show', 'Reef Snorkeling'],
  },
  {
    id: 'scuba',
    title: 'Scuba Diving Adventure',
    duration: '5 Days · 4 Nights',
    nights: 4,
    rating: 4.95,
    reviews: 264,
    price: 41500,
    description:
      'Descend into living coral cathedrals at Havelock and North Bay. PADI-certified dives, sea-walks and a night under bioluminescent skies.',
    image:
      'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=1600&q=80',
    tag: 'Adventure',
    highlights: ['PADI Dive', 'Sea Walk', 'Bioluminescent Night'],
  },
  {
    id: 'luxury',
    title: 'Luxury Beach Resort Escape',
    duration: '4 Days · 3 Nights',
    nights: 3,
    rating: 4.97,
    reviews: 189,
    price: 58900,
    originalPrice: 72000,
    description:
      'For the connoisseur — Radhanagar villas, private chefs, infinity pools that meet the Andaman Sea, and an unhurried, barefoot kind of luxury.',
    image:
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80',
    tag: 'Signature',
    highlights: ['Infinity Pool Villa', 'Private Chef', 'Spa Rituals'],
  },
  {
    id: 'expedition',
    title: 'Adventure Island Expedition',
    duration: '8 Days · 7 Nights',
    nights: 7,
    rating: 4.85,
    reviews: 421,
    price: 47200,
    description:
      'For thrill-seekers — kayak through mangroves, trek to Baratang limestone caves, parasail at sunset and camp beneath an unbroken Milky Way.',
    image:
      'https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?auto=format&fit=crop&w=1600&q=80',
    tag: 'Expedition',
    highlights: ['Mangrove Kayak', 'Limestone Caves', 'Island Camping'],
  },
  {
    id: 'cruise',
    title: 'Andaman Cruise & Reef',
    duration: '5 Days · 4 Nights',
    nights: 4,
    rating: 4.88,
    reviews: 273,
    price: 44800,
    description:
      'Sail private catamarans between hidden coves, dive uncharted reefs, and dine on the deck as the stars find their reflection in the sea.',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
    tag: 'Premium',
    highlights: ['Private Catamaran', 'Hidden Coves', 'Deck Dining'],
  },
];
