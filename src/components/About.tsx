import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, BadgeCheck, Globe2, Users } from 'lucide-react';
import { useRef } from 'react';
import AmbientOrbs from './AmbientOrbs';
import SectionHeading from './SectionHeading';

const milestones = [
  { year: '2009', label: 'Founded in Port Blair with a single boat' },
  { year: '2014', label: 'First international guests · 27 countries to date' },
  { year: '2019', label: 'Govt. of India "Approved Tour Operator" status' },
  { year: '2024', label: 'Voted Andaman\'s #1 boutique travel partner' },
];

const credentials = [
  { icon: BadgeCheck, label: 'IATA + Govt. Approved' },
  { icon: Award, label: 'TripAdvisor Travellers\' Choice 2023, 24, 25' },
  { icon: Users, label: '12,400+ guests hosted' },
  { icon: Globe2, label: '27 countries served' },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const img2Y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="about" ref={ref} className="relative py-28 md:py-36 section-padding max-w-[1500px] mx-auto">
      <AmbientOrbs palette="sand" intensity={1.1} />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Imagery */}
        <div className="lg:col-span-6 relative">
          <motion.div style={{ y: imgY }} className="relative">
            <div className="relative rounded-[28px] overflow-hidden h-[440px] md:h-[520px]">
              <img
                src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?auto=format&fit=crop&w=1600&q=80"
                alt="The MVA team with a guest at Radhanagar beach"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block">
              <div className="rounded-2xl glass-strong p-4 flex items-center gap-3 shadow-soft">
                <div className="display text-4xl text-gradient-sunset">16+</div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-white/65 leading-snug max-w-[120px]">
                  Years of island storytelling
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{ y: img2Y }}
            className="hidden md:block absolute -right-4 -top-10 w-52 h-72 rounded-3xl overflow-hidden border border-white/15 shadow-soft"
          >
            <img
              src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=600&q=80"
              alt=""
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Copy */}
        <div className="lg:col-span-6">
          <SectionHeading
            eyebrow="The M V A Story"
            title={
              <>
                A small Andaman family,
                <br />
                <span className="text-gradient italic">obsessed with your joy.</span>
              </>
            }
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 space-y-5 text-white/70 leading-relaxed"
          >
            <p>
              M V A Tours &amp; Travels began in 2009 with a wooden boat, one mobile phone and an idea — that
              the Andamans deserve to be experienced slowly, deeply and on your own terms.
            </p>
            <p>
              Today, we are a small, fiercely local team of 26 — guides, drivers, dive masters, chefs and
              chai-makers — handcrafting trips for travellers who want more than a checklist. We know the
              tides, the shy beach behind the lighthouse, the chef who makes the best fish curry in Neil. And
              we share it all with you, generously.
            </p>
          </motion.div>

          {/* Credentials */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            {credentials.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 glass rounded-2xl px-4 py-3"
                >
                  <Icon className="h-4 w-4 text-turquoise shrink-0" />
                  <span className="text-xs text-white/80">{c.label}</span>
                </motion.div>
              );
            })}
          </div>

          {/* Timeline */}
          <div className="mt-10 relative pl-6">
            <span className="absolute left-1.5 top-2 bottom-2 w-px bg-gradient-to-b from-turquoise via-white/20 to-sunset-500" />
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative pb-5 last:pb-0"
              >
                <span className="absolute -left-[18px] top-1 h-3 w-3 rounded-full bg-turquoise ring-4 ring-turquoise/20" />
                <div className="text-sm">
                  <span className="display text-xl text-turquoise mr-3">{m.year}</span>
                  <span className="text-white/70">{m.label}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <a href="#contact" className="btn-primary mt-10">
            Start a conversation
          </a>
        </div>
      </div>
    </section>
  );
}
