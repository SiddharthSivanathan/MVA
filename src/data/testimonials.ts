export type Testimonial = {
  id: string;
  name: string;
  city: string;
  trip: string;
  rating: number;
  quote: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Aanya & Rohan Sharma',
    city: 'Mumbai',
    trip: 'Honeymoon · 6 Nights',
    rating: 5,
    quote:
      'The MVA team turned six days into the loveliest chapter of our lives. The private beach dinner at Radhanagar — we still talk about it every week.',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 't2',
    name: 'Vikram Iyer',
    city: 'Bengaluru',
    trip: 'Family · 7 Nights',
    rating: 5,
    quote:
      'Three generations on one trip and not a single hiccup. The kids loved the glass-boat ride; my parents loved the unhurried pace. World-class hospitality.',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 't3',
    name: 'Meera Krishnan',
    city: 'Chennai',
    trip: 'Solo · 5 Nights',
    rating: 5,
    quote:
      'As a solo female traveller I felt safe and looked-after every minute. The PADI dive at Havelock — bucket-list moment. Worth every rupee.',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 't4',
    name: 'James & Hannah Brooke',
    city: 'London',
    trip: 'Luxury Resort · 4 Nights',
    rating: 5,
    quote:
      'We have travelled the Maldives, Bora Bora and Seychelles. The Andamans — and MVA Tours — quietly outshone them all. Authentic, unspoilt, exquisite.',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 't5',
    name: 'Ananya Gupta',
    city: 'Delhi',
    trip: 'Adventure · 8 Nights',
    rating: 5,
    quote:
      'Mangrove kayaking, Baratang caves, Milky-Way camping at a secret cove. The MVA team reads your mood and curates each day perfectly.',
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  },
];
