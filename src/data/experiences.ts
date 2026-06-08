export type Experience = {
  id: string;
  title: string;
  duration: string;
  level: 'Easy' | 'Moderate' | 'Adventurous';
  price: number;
  image: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    id: 'scuba',
    title: 'Scuba Diving',
    duration: '45 min dive',
    level: 'Easy',
    price: 3500,
    image:
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1400&q=80',
    description:
      'Glide through coral cathedrals at Elephant Beach with PADI-certified instructors. No experience needed.',
  },
  {
    id: 'snorkeling',
    title: 'Snorkeling',
    duration: '2 hrs',
    level: 'Easy',
    price: 1200,
    image:
      'https://images.unsplash.com/photo-1559825481-12a05cc00344?auto=format&fit=crop&w=1400&q=80',
    description:
      'Drift over clown-fish gardens at Bharatpur reef — equipment, briefing and reef-safe sunscreen included.',
  },
  {
    id: 'candle-dinner',
    title: 'Candle-Light Beach Dinner',
    duration: '3 hrs',
    level: 'Easy',
    price: 4500,
    image:
      'https://images.unsplash.com/photo-1496318447583-f524534e9ce1?auto=format&fit=crop&w=1400&q=80',
    description:
      'Private cabana, hand-laid table on the sand, four-course chef\'s menu and a sky full of stars over the Andaman Sea.',
  },
  {
    id: 'camping',
    title: 'Island Camping',
    duration: 'Overnight',
    level: 'Moderate',
    price: 5800,
    image:
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1400&q=80',
    description:
      'Bell tents at a secluded cove, beach bonfire, fresh seafood and bioluminescent waves at midnight.',
  },
  {
    id: 'sea-walk',
    title: 'Sea Walk',
    duration: '30 min',
    level: 'Easy',
    price: 3800,
    image:
      'https://images.unsplash.com/photo-1564550974352-c4d77fce4a8b?auto=format&fit=crop&w=1400&q=80',
    description:
      'Walk the ocean floor at North Bay in a Newtsuit-style helmet — feed reef fish with your own hands.',
  },
  {
    id: 'jet-ski',
    title: 'Jet Ski',
    duration: '15 min',
    level: 'Moderate',
    price: 900,
    image:
      'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1400&q=80',
    description:
      'Carve across the bay at Elephant Beach — solo or tandem, full safety briefing included.',
  },
  {
    id: 'parasailing',
    title: 'Parasailing',
    duration: '20 min',
    level: 'Adventurous',
    price: 3200,
    image:
      'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&w=1400&q=80',
    description:
      'Lift 250 ft above the lagoon for a postcard view of Havelock\'s coral shelf — solo or tandem.',
  },
  {
    id: 'kayak',
    title: 'Mangrove Kayaking',
    duration: '2 hrs',
    level: 'Moderate',
    price: 1500,
    image:
      'https://images.unsplash.com/photo-1626445306593-d1e98d8b8c4f?auto=format&fit=crop&w=1400&q=80',
    description:
      'Paddle through emerald mangrove tunnels at dawn — kingfishers, mudskippers and absolute silence.',
  },
];
