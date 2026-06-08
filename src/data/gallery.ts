export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  span: 'sm' | 'md' | 'lg' | 'tall' | 'wide';
  category: 'Beach' | 'Resort' | 'Water Sports' | 'Sunset' | 'Cruise' | 'Wildlife';
};

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Turquoise lagoon and white sand',
    span: 'lg',
    category: 'Beach',
  },
  {
    id: 'g2',
    src: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1000&q=80',
    alt: 'Overwater villa at sunset',
    span: 'md',
    category: 'Resort',
  },
  {
    id: 'g3',
    src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80',
    alt: 'Scuba diver near coral',
    span: 'tall',
    category: 'Water Sports',
  },
  {
    id: 'g4',
    src: 'https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?auto=format&fit=crop&w=1200&q=80',
    alt: 'Andaman sunset over palms',
    span: 'wide',
    category: 'Sunset',
  },
  {
    id: 'g5',
    src: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1000&q=80',
    alt: 'Resort infinity pool',
    span: 'md',
    category: 'Resort',
  },
  {
    id: 'g6',
    src: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1000&q=80',
    alt: 'Jet ski wake',
    span: 'sm',
    category: 'Water Sports',
  },
  {
    id: 'g7',
    src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1200&q=80',
    alt: 'Aerial Havelock',
    span: 'lg',
    category: 'Beach',
  },
  {
    id: 'g8',
    src: 'https://images.unsplash.com/photo-1496318447583-f524534e9ce1?auto=format&fit=crop&w=1000&q=80',
    alt: 'Beach candle dinner',
    span: 'tall',
    category: 'Sunset',
  },
  {
    id: 'g9',
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
    alt: 'Yacht at anchor',
    span: 'md',
    category: 'Cruise',
  },
  {
    id: 'g10',
    src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80',
    alt: 'Radhanagar beach',
    span: 'wide',
    category: 'Beach',
  },
  {
    id: 'g11',
    src: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=1000&q=80',
    alt: 'Beach hammock',
    span: 'sm',
    category: 'Resort',
  },
  {
    id: 'g12',
    src: 'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&w=1000&q=80',
    alt: 'Parasailing',
    span: 'md',
    category: 'Water Sports',
  },
];
