import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowRight, Clock, Flame } from 'lucide-react';
import { useRef } from 'react';
import { experiences, type Experience } from '../data/experiences';
import AmbientOrbs from './AmbientOrbs';
import SectionHeading from './SectionHeading';

function ExperienceCard({ e, i }: { e: Experience; i: number }) {
  const colorByLevel: Record<Experience['level'], string> = {
    Easy: 'text-ocean-200 bg-ocean-500/10 border-ocean-400/30',
    Moderate: 'text-sand-300 bg-sand-300/10 border-sand-300/30',
    Adventurous: 'text-sunset-300 bg-sunset-500/10 border-sunset-400/30',
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: i * 0.05 }}
      className="snap-start shrink-0 w-[300px] md:w-[380px] h-[480px] md:h-[540px] relative rounded-3xl overflow-hidden border border-white/10 group"
    >
      <motion.img
        src={e.image}
        alt={e.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />

      <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
        <span className={`text-[10px] tracking-[0.22em] uppercase border rounded-full px-2.5 py-1 ${colorByLevel[e.level]}`}>
          {e.level}
        </span>
        <span className="display text-2xl">₹{e.price.toLocaleString('en-IN')}</span>
      </div>

      <div className="absolute inset-x-5 bottom-5">
        <div className="flex items-center gap-3 text-xs text-white/70 mb-3">
          <Clock className="h-3.5 w-3.5" />
          {e.duration}
        </div>
        <h3 className="display text-3xl md:text-4xl leading-tight">{e.title}</h3>
        <p className="mt-2 text-sm text-white/65 leading-relaxed line-clamp-3">{e.description}</p>

        <a
          href="#contact"
          className="mt-5 inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase text-turquoise hover:text-white transition"
        >
          Book this experience
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
}

export default function Experiences() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  const scroll = (dir: 'l' | 'r') => {
    const el = scrollerRef.current;
    if (!el) return;
    const w = el.clientWidth * 0.8;
    el.scrollBy({ left: dir === 'l' ? -w : w, behavior: 'smooth' });
  };

  return (
    <section
      id="experiences"
      ref={sectionRef}
      className="relative py-28 md:py-36 overflow-hidden"
    >
      <AmbientOrbs palette="gold" intensity={1.2} />
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -z-10 opacity-30 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[120%] w-[120%] bg-gradient-radial from-ocean-700/20 via-transparent to-transparent" />
      </motion.div>

      <div className="section-padding max-w-[1500px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Iconic Experiences"
            title={
              <>
                Moments you will
                <br />
                <span className="text-gradient italic">tell stories about</span>
              </>
            }
            subtitle="Hand-picked adventures and quiet luxuries. Add as many as you like — we'll thread them through your itinerary."
          />
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('l')}
              aria-label="Scroll left"
              className="h-12 w-12 grid place-items-center rounded-full glass hover:bg-white/15 transition"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scroll('r')}
              aria-label="Scroll right"
              className="h-12 w-12 grid place-items-center rounded-full glass hover:bg-white/15 transition"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-navy-950 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-navy-950 to-transparent z-10" />

        <div
          ref={scrollerRef}
          className="flex gap-5 md:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none px-5 sm:px-8 lg:px-16 xl:px-24 pb-8"
          style={{ scrollbarWidth: 'none' }}
        >
          {experiences.map((e, i) => (
            <ExperienceCard key={e.id} e={e} i={i} />
          ))}
          <div className="shrink-0 w-1" />
        </div>
      </div>

      <div className="section-padding max-w-[1500px] mx-auto mt-10 flex items-center gap-3 text-xs text-white/50">
        <Flame className="h-3.5 w-3.5 text-sunset-400" />
        Most-booked this week: Scuba Diving, Sea Walk, Beach Dinner
      </div>
    </section>
  );
}
