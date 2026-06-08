import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, Heart, Star } from 'lucide-react';
import { useState } from 'react';
import { packages, type Package } from '../data/packages';
import AmbientOrbs from './AmbientOrbs';
import SectionHeading from './SectionHeading';

function formatINR(n: number) {
  return new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(n);
}

function PackageCard({ pkg, index }: { pkg: Package; index: number }) {
  const [liked, setLiked] = useState(false);
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-3xl overflow-hidden bg-navy-900/40 border border-white/10 backdrop-blur-sm hover:border-turquoise/40 transition-all duration-700"
      whileHover={{ y: -8 }}
    >
      <div className="relative h-80 overflow-hidden">
        <motion.img
          src={pkg.image}
          alt={pkg.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />

        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-[10px] tracking-[0.22em] uppercase font-medium bg-white/15 backdrop-blur-md border border-white/20">
            {pkg.tag}
          </span>
        </div>

        <button
          onClick={() => setLiked((v) => !v)}
          aria-label="Save"
          className="absolute top-4 right-4 h-10 w-10 grid place-items-center rounded-full glass hover:bg-white/20 transition"
        >
          <Heart
            className={`h-4 w-4 transition ${liked ? 'fill-sunset-400 text-sunset-400' : 'text-white'}`}
          />
        </button>

        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <div className="flex items-center gap-1 text-xs text-white px-3 py-1.5 rounded-full glass">
            <Star className="h-3 w-3 fill-sunset-300 text-sunset-300" />
            {pkg.rating}
            <span className="text-white/60 ml-1">({pkg.reviews})</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-white px-3 py-1.5 rounded-full glass">
            <Clock className="h-3 w-3" />
            {pkg.duration}
          </div>
        </div>
      </div>

      <div className="p-6 md:p-7 flex flex-col gap-4">
        <h3 className="display text-2xl md:text-[26px] leading-tight">{pkg.title}</h3>
        <p className="text-sm text-white/65 leading-relaxed line-clamp-3">{pkg.description}</p>

        <div className="flex flex-wrap gap-2 pt-1">
          {pkg.highlights.map((h) => (
            <span
              key={h}
              className="text-[11px] tracking-wide text-turquoise/90 bg-turquoise/10 border border-turquoise/20 rounded-full px-2.5 py-1"
            >
              {h}
            </span>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between pt-4 border-t border-white/5">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-xs text-white/50">From</span>
              <span className="display text-3xl text-white">₹{formatINR(pkg.price)}</span>
              {pkg.originalPrice && (
                <span className="text-xs text-white/40 line-through">
                  ₹{formatINR(pkg.originalPrice)}
                </span>
              )}
            </div>
            <span className="text-[11px] text-white/40">per person · twin sharing</span>
          </div>

          <a
            href="#contact"
            className="group/btn inline-flex items-center gap-1.5 text-sm font-medium text-white rounded-full px-4 py-2 bg-white/5 hover:bg-turquoise hover:text-navy-950 border border-white/15 transition-all"
          >
            View Details
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Packages() {
  return (
    <section id="packages" className="relative py-28 md:py-36 section-padding max-w-[1500px] mx-auto">
      <AmbientOrbs palette="coral" />

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
        <SectionHeading
          eyebrow="Curated Packages"
          title={
            <>
              Journeys, hand-stitched
              <br />
              <span className="text-gradient-ocean italic">to your story</span>
            </>
          }
          subtitle="No two travellers are alike — and neither are our trips. Choose a starting point; we shape every day around you."
        />
        <a href="#contact" className="hidden md:inline-flex btn-ghost text-xs">
          Build a custom trip <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
        {packages.map((pkg, i) => (
          <PackageCard key={pkg.id} pkg={pkg} index={i} />
        ))}
      </div>
    </section>
  );
}
