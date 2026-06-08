export type Destination = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  meta: string;
  coords: string;
};

export const destinations: Destination[] = [
  {
    id: 'havelock',
    name: 'Havelock Island',
    tagline: 'The Beating Heart of the Andamans',
    description:
      'Swissôtel-soft sands, electric blue water, and Radhanagar — voted Asia\'s best beach. Havelock is where the islands first take your breath away.',
    image:
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1800&q=80',
    meta: '38 km from Port Blair',
    coords: '12.0270° N · 92.9876° E',
  },
  {
    id: 'neil',
    name: 'Neil Island',
    tagline: 'Andaman\'s Slow, Romantic Whisper',
    description:
      'Bicycle-quiet villages, the natural rock bridge, and Bharatpur reef. Neil is the Andamans at half-speed — and it is glorious.',
    image:
      'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1800&q=80',
    meta: '37 km from Port Blair',
    coords: '11.8316° N · 93.0426° E',
  },
  {
    id: 'cellular',
    name: 'Cellular Jail',
    tagline: 'Where Silence Still Speaks',
    description:
      'A living monument to India\'s freedom struggle. Walk the seven wings, then return at dusk for a sound-and-light show that lingers for days.',
    image:
      'https://images.unsplash.com/photo-1623059508779-2542c6e83753?auto=format&fit=crop&w=1800&q=80',
    meta: 'Port Blair',
    coords: '11.6754° N · 92.7480° E',
  },
  {
    id: 'radhanagar',
    name: 'Radhanagar Beach',
    tagline: 'Asia\'s Most Beautiful Beach',
    description:
      'Two kilometres of powder-white silica, ironwood forests behind, turquoise ahead. Time the sunset — it changes you a little.',
    image:
      'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1800&q=80',
    meta: 'Havelock',
    coords: '11.9833° N · 92.9500° E',
  },
  {
    id: 'ross',
    name: 'Ross Island',
    tagline: 'A Forgotten British Capital',
    description:
      'Roots devour Victorian ballrooms; peacocks roam the ruins. Ross is a place where nature reclaims empire, beautifully.',
    image:
      'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1800&q=80',
    meta: '2 km from Port Blair',
    coords: '11.6678° N · 92.7621° E',
  },
  {
    id: 'baratang',
    name: 'Baratang Island',
    tagline: 'Limestone, Mud Volcanoes & Mangroves',
    description:
      'Cruise emerald creeks through dense mangroves to limestone caves and India\'s only mud volcanoes — a primordial, otherworldly day.',
    image:
      'https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?auto=format&fit=crop&w=1800&q=80',
    meta: '100 km from Port Blair',
    coords: '12.1042° N · 92.7720° E',
  },
];
