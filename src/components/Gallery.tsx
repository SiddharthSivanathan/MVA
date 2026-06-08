import { AnimatePresence, motion } from 'framer-motion';
import { Camera, X } from 'lucide-react';
import { useState } from 'react';
import { galleryItems, type GalleryItem } from '../data/gallery';
import AmbientOrbs from './AmbientOrbs';
import SectionHeading from './SectionHeading';

const spanClasses: Record<GalleryItem['span'], string> = {
  sm: 'row-span-1 col-span-1',
  md: 'row-span-2 col-span-1',
  lg: 'row-span-2 col-span-2',
  tall: 'row-span-3 col-span-1',
  wide: 'row-span-1 col-span-2',
};

const categories = ['All', 'Beach', 'Resort', 'Water Sports', 'Sunset', 'Cruise'] as const;

export default function Gallery() {
  const [active, setActive] = useState<(typeof categories)[number]>('All');
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const items = galleryItems.filter((g) => active === 'All' || g.category === active);

  return (
    <section id="gallery" className="relative py-28 md:py-36 section-padding max-w-[1500px] mx-auto">
      <AmbientOrbs palette="pearl" />
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <SectionHeading
          eyebrow="Postcards from the islands"
          title={
            <>
              A gallery of
              <br />
              <span className="text-gradient-ocean italic">salt-tinted memories</span>
            </>
          }
          subtitle="Every frame, taken by us or a guest. No stock photography, no filters that lie."
        />
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`text-xs tracking-wide px-4 py-2 rounded-full border transition-all duration-300 ${
                active === c
                  ? 'bg-turquoise text-navy-950 border-turquoise'
                  : 'glass border-white/15 hover:border-white/40'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-rows-[120px] md:auto-rows-[140px] gap-3 md:gap-4"
      >
        <AnimatePresence>
          {items.map((g, i) => (
            <motion.button
              key={g.id}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.6, delay: (i % 6) * 0.04 }}
              onClick={() => setLightbox(g)}
              className={`group relative ${spanClasses[g.span]} rounded-2xl overflow-hidden border border-white/10`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="flex items-center gap-1.5 text-[10px] tracking-[0.22em] uppercase text-white/90">
                  <Camera className="h-3 w-3" /> {g.category}
                </span>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[80] bg-navy-950/90 backdrop-blur-2xl grid place-items-center p-6"
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 h-11 w-11 grid place-items-center rounded-full glass hover:bg-white/20"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[85vh] max-w-[92vw] rounded-2xl shadow-soft"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
