import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Compass, Play, Sparkles, Star } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// Hand-picked iconic Andaman & Nicobar photos — aerial island, Radhanagar white sand, golden sunset.
const SLIDES = [
  {
    src: 'https://images.unsplash.com/photo-1641719320002-743bc0384e0f?auto=format&fit=crop&w=2400&q=85',
    alt: 'Aerial view of an Andaman island floating in turquoise sea',
  },
  {
    src: 'https://images.unsplash.com/photo-1593202232429-549625b8660d?auto=format&fit=crop&w=2400&q=85',
    alt: 'A single ironwood tree on the powder-white sand of Radhanagar Beach, Havelock',
  },
  {
    src: 'https://images.unsplash.com/photo-1641719508492-bca560e49506?auto=format&fit=crop&w=2400&q=85',
    alt: 'Golden sunset over the Andaman Sea silhouetting island trees',
  },
];

const SLIDE_DURATION = 6500; // ms per slide

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  // Auto-advance the slideshow.
  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % SLIDES.length), SLIDE_DURATION);
    return () => clearInterval(id);
  }, []);

  // Preload next slide for seamless crossfade.
  useEffect(() => {
    const next = (active + 1) % SLIDES.length;
    const img = new Image();
    img.src = SLIDES[next].src;
  }, [active]);

  return (
    <section ref={ref} id="home" className="relative h-[100svh] min-h-[700px] w-full overflow-hidden">
      {/* Cinematic image slideshow with Ken-Burns drift */}
      <motion.div style={{ scale }} className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={active}
            src={SLIDES[active].src}
            alt={SLIDES[active].alt}
            // @ts-expect-error - lowercase HTML attr, valid but typed loosely on motion.img
            fetchpriority="high"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{
              opacity: { duration: 1.6, ease: [0.22, 1, 0.36, 1] },
              scale: { duration: SLIDE_DURATION / 1000 + 1.6, ease: 'linear' },
            }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </motion.div>

      {/* Cinematic gradient overlays */}
      <motion.div style={{ opacity }} className="absolute inset-0 bg-gradient-to-b from-navy-950/40 via-navy-950/30 to-navy-950/90" />
      <motion.div style={{ opacity }} className="absolute inset-0 bg-gradient-to-r from-navy-950/70 via-transparent to-navy-950/40" />

      {/* Floating ambient orbs */}
      <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-turquoise/20 blur-[120px] animate-float-slow" />
      <div className="absolute bottom-10 right-0 h-[28rem] w-[28rem] rounded-full bg-sunset-500/20 blur-[140px] animate-float-med" />

      {/* Content */}
      <motion.div
        style={{ y: titleY, opacity }}
        className="relative z-10 h-full flex flex-col justify-center section-padding max-w-[1500px] mx-auto pt-28 pb-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="eyebrow mb-7"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Andaman · Nicobar · Since 2009
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="display text-[44px] sm:text-[64px] md:text-[84px] lg:text-[104px] leading-[0.95] tracking-tight max-w-5xl"
        >
          Discover Paradise
          <br />
          <span className="text-gradient-ocean italic">in the Andaman</span>{' '}
          <span className="text-gradient-sunset italic">Islands</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.9 }}
          className="mt-7 max-w-xl text-base md:text-lg text-white/75 leading-relaxed"
        >
          Luxury Tours, Island Adventures &amp; Unforgettable Experiences — handcrafted by people who call these islands home.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.9 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#packages" className="btn-primary group">
            <Compass className="h-4 w-4" />
            Explore Packages
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#contact" className="btn-ghost group">
            <Play className="h-3.5 w-3.5 fill-white" />
            Plan Your Trip
          </a>
        </motion.div>

        {/* Bottom row: stats / scroll cue */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute left-5 right-5 sm:left-8 sm:right-8 lg:left-16 lg:right-16 xl:left-24 xl:right-24 bottom-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
        >
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80',
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80',
                ].map((a, i) => (
                  <img key={i} src={a} alt="" className="h-9 w-9 rounded-full border-2 border-navy-950 object-cover" />
                ))}
              </div>
              <div className="text-xs">
                <div className="flex items-center gap-1 text-sunset-300">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-sunset-300" />
                  ))}
                  <span className="text-white ml-1">4.96</span>
                </div>
                <div className="text-white/60">Loved by 12,000+ travellers</div>
              </div>
            </div>

            <div className="hidden sm:block h-10 w-px bg-white/20" />

            <div className="text-xs leading-tight">
              <div className="text-white/60">Featured in</div>
              <div className="display text-lg tracking-wide">Condé Nast · Travel + Leisure</div>
            </div>
          </div>

          <div className="hidden md:flex flex-col items-end gap-5">
            {/* Slide indicators */}
            <div className="flex items-center gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Show slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === active ? 'w-10 bg-turquoise' : 'w-4 bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
            <motion.a
              style={{ y }}
              href="#packages"
              className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-white/70 hover:text-turquoise transition group"
            >
              <span>Scroll</span>
              <span className="relative block h-12 w-px overflow-hidden">
                <span className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-turquoise to-transparent animate-pulse" />
              </span>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Animated SVG wave overlay at bottom */}
      <div className="pointer-events-none absolute -bottom-1 inset-x-0 z-[5]">
        <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="w-full h-[120px]">
          <defs>
            <linearGradient id="waveGrad" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#030813" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#030813" stopOpacity="1" />
            </linearGradient>
          </defs>
          <motion.path
            initial={{ d: 'M0,80 C240,140 480,30 720,80 C960,130 1200,30 1440,80 L1440,160 L0,160 Z' }}
            animate={{
              d: [
                'M0,80 C240,140 480,30 720,80 C960,130 1200,30 1440,80 L1440,160 L0,160 Z',
                'M0,90 C240,40 480,140 720,80 C960,30 1200,140 1440,80 L1440,160 L0,160 Z',
                'M0,80 C240,140 480,30 720,80 C960,130 1200,30 1440,80 L1440,160 L0,160 Z',
              ],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            fill="url(#waveGrad)"
          />
        </svg>
      </div>
    </section>
  );
}
