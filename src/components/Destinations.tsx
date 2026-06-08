import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { destinations, type Destination } from '../data/destinations';
import AmbientOrbs from './AmbientOrbs';
import SectionHeading from './SectionHeading';

function DestCard({ d, index, large }: { d: Destination; index: number; large?: boolean }) {
  return (
    <motion.a
      href="#contact"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative block rounded-[28px] overflow-hidden border border-white/10 ${
        large ? 'h-[560px] md:h-[640px]' : 'h-[340px] md:h-[400px]'
      }`}
    >
      <motion.img
        src={d.image}
        alt={d.name}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent group-hover:from-navy-950/95 transition-all duration-700" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/40 via-transparent to-transparent" />

      {/* Top meta */}
      <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-[11px] tracking-[0.22em] uppercase glass rounded-full px-3 py-1.5">
          <MapPin className="h-3 w-3" /> {d.meta}
        </span>
        <span className="h-10 w-10 grid place-items-center rounded-full glass group-hover:bg-turquoise group-hover:text-navy-950 transition-all duration-500">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      {/* Bottom content */}
      <div className="absolute inset-x-5 bottom-5 md:inset-x-7 md:bottom-7">
        <motion.div
          initial={false}
          className="transition-all duration-700 group-hover:-translate-y-2"
        >
          <div className="text-[11px] tracking-[0.32em] uppercase text-turquoise/90 mb-2">{d.coords}</div>
          <h3 className={`display ${large ? 'text-5xl md:text-7xl' : 'text-3xl md:text-4xl'} leading-[1] tracking-tight`}>
            {d.name}
          </h3>
          <p className="mt-2 text-sm text-white/70 italic">{d.tagline}</p>

          <p className="mt-3 text-sm text-white/70 max-w-md leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-h-0 group-hover:max-h-32 overflow-hidden">
            {d.description}
          </p>
        </motion.div>
      </div>

      {/* Wave underline animation */}
      <span className="absolute left-7 right-7 bottom-3 h-px bg-gradient-to-r from-transparent via-turquoise/60 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
    </motion.a>
  );
}

export default function Destinations() {
  return (
    <section id="destinations" className="relative py-28 md:py-36 section-padding max-w-[1500px] mx-auto">
      <AmbientOrbs palette="mint" />
      <SectionHeading
        eyebrow="Six Islands · One Archipelago"
        title={
          <>
            Where will the
            <br />
            <span className="text-gradient-sunset italic">tide carry you?</span>
          </>
        }
        subtitle="From the powder-white sweep of Radhanagar to the quiet limestone caves of Baratang — every island has a voice. We help you listen."
      />

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
        <div className="lg:col-span-7">
          <DestCard d={destinations[0]} index={0} large />
        </div>
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 md:gap-6">
          <DestCard d={destinations[1]} index={1} />
          <DestCard d={destinations[2]} index={2} />
        </div>
        <div className="lg:col-span-4">
          <DestCard d={destinations[3]} index={3} />
        </div>
        <div className="lg:col-span-4">
          <DestCard d={destinations[4]} index={4} />
        </div>
        <div className="lg:col-span-4">
          <DestCard d={destinations[5]} index={5} />
        </div>
      </div>
    </section>
  );
}
