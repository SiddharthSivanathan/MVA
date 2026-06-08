import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'left' | 'center';
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}
    >
      <div className="eyebrow mb-5">
        <span className="h-px w-8 bg-turquoise/60" />
        {eyebrow}
      </div>
      <h2 className="display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-5 text-base md:text-lg text-white/65 leading-relaxed max-w-2xl">{subtitle}</p>}
    </motion.div>
  );
}
