import { motion } from 'framer-motion';
import {
  Award,
  Compass,
  Headphones,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import AmbientOrbs from './AmbientOrbs';
import SectionHeading from './SectionHeading';

const features = [
  {
    icon: Award,
    title: 'Trusted Local Experts',
    body:
      'Born-and-raised Andamani guides who know the tides, the chefs, the dive masters, the hidden coves.',
    accent: 'from-turquoise to-ocean-500',
  },
  {
    icon: Sparkles,
    title: 'Affordable Luxury',
    body:
      'Boutique resorts, private boats and chef-led dinners — at prices that feel like a quiet gift.',
    accent: 'from-sunset-300 to-sunset-600',
  },
  {
    icon: Headphones,
    title: '24 / 7 Concierge',
    body:
      'One WhatsApp message away — at 3 am, mid-ferry, before a dive. We are right beside you.',
    accent: 'from-ocean-200 to-turquoise',
  },
  {
    icon: HeartHandshake,
    title: 'Personalized Itineraries',
    body:
      'No copy-paste tours. Every day is a conversation between your hopes and the islands\' rhythm.',
    accent: 'from-sand-300 to-sunset-400',
  },
  {
    icon: ShieldCheck,
    title: 'Safe &amp; Comfortable',
    body:
      'Govt.-licensed boats, certified dives, child-friendly vehicles, female-led pickups on request.',
    accent: 'from-turquoise to-sunset-400',
  },
  {
    icon: Compass,
    title: 'Best Island Guides',
    body:
      'Multilingual, story-rich, deeply patient. Our guides are the unsung heroes of your trip.',
    accent: 'from-ocean-400 to-navy-400',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 md:py-36 section-padding max-w-[1500px] mx-auto">
      <AmbientOrbs palette="lavender" intensity={1.1} />

      <SectionHeading
        eyebrow="Why M V A Tours"
        title={
          <>
            Sixteen years on these islands.
            <br />
            <span className="text-gradient-ocean italic">Every detail learned by heart.</span>
          </>
        }
        subtitle="We are not a call-centre travel agent. We are a small Andaman family that has been crafting island stories for travellers since 2009."
        align="center"
      />

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl p-7 md:p-8 glass hover:bg-white/[0.08] border-white/10 hover:border-white/25 transition-all duration-500 overflow-hidden"
            >
              {/* glow on hover */}
              <div className={`absolute -top-20 -right-20 h-44 w-44 rounded-full bg-gradient-to-br ${f.accent} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700`} />

              <div className={`relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${f.accent} shadow-glow-sm`}>
                <Icon className="h-6 w-6 text-white" />
                <span className="absolute inset-0 rounded-2xl ring-1 ring-white/30" />
              </div>

              <h3 className="display text-2xl md:text-[26px] mt-6 leading-tight">{f.title}</h3>
              <p className="mt-3 text-sm text-white/65 leading-relaxed">{f.body}</p>

              <div className="mt-6 flex items-center gap-2 text-xs text-turquoise/80 opacity-60 group-hover:opacity-100 transition">
                <span className="h-px w-6 bg-turquoise/60 group-hover:w-10 transition-all" />
                Promise {String(i + 1).padStart(2, '0')}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Floating stat ribbon */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="mt-16 rounded-[28px] glass-strong p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {[
          { n: '16+', l: 'Years curating Andaman' },
          { n: '12,400', l: 'Happy travellers hosted' },
          { n: '4.96 / 5', l: 'Average guest rating' },
          { n: '37', l: 'Islands we cover' },
        ].map((s, i) => (
          <motion.div
            key={s.l}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
            className="text-center"
          >
            <div className="display text-3xl md:text-5xl text-gradient-ocean">{s.n}</div>
            <div className="text-[11px] tracking-[0.22em] uppercase text-white/55 mt-2">{s.l}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
