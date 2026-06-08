import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import { testimonials } from '../data/testimonials';
import AmbientOrbs from './AmbientOrbs';
import SectionHeading from './SectionHeading';

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % testimonials.length), 7000);
    return () => clearInterval(id);
  }, []);

  const go = (d: 1 | -1) =>
    setI((v) => (v + d + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-28 md:py-36 section-padding max-w-[1500px] mx-auto">
      <AmbientOrbs palette="seafoam" />

      <SectionHeading
        eyebrow="Words from our travellers"
        title={
          <>
            Not reviews —
            <br />
            <span className="text-gradient-sunset italic">love letters</span>
          </>
        }
        align="center"
      />

      <div className="relative mt-14 mx-auto max-w-4xl">
        <Quote className="absolute -top-6 -left-2 md:-left-8 h-20 w-20 text-turquoise/15" strokeWidth={1} />

        <div className="relative h-[360px] md:h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 glass-strong rounded-[28px] p-8 md:p-12 flex flex-col items-center text-center"
            >
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-sunset-300 text-sunset-300" />
                ))}
              </div>
              <p className="display text-2xl md:text-3xl lg:text-[34px] leading-snug text-white/95 max-w-3xl">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-8 flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-14 w-14 rounded-full object-cover border-2 border-turquoise/60"
                />
                <div className="text-left">
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs text-white/55">
                    {t.city} · {t.trip}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-5">
          <button
            onClick={() => go(-1)}
            aria-label="Previous"
            className="h-12 w-12 grid place-items-center rounded-full glass hover:bg-white/15 transition"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Slide ${k + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  k === i ? 'w-10 bg-turquoise' : 'w-1.5 bg-white/25 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            aria-label="Next"
            className="h-12 w-12 grid place-items-center rounded-full glass hover:bg-white/15 transition"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
