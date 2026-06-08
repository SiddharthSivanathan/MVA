import { motion } from 'framer-motion';

/**
 * Soft, slow-drifting pastel color washes that sit behind a section to break
 * the uniform navy. Each instance places two or three large blurred orbs at
 * configurable corners — fully decorative, pointer-events:none.
 */

export type OrbPalette =
  | 'coral'       // Packages — warm welcome
  | 'mint'        // Destinations — calm sea
  | 'lavender'    // WhyChooseUs — trust, softness
  | 'gold'        // Experiences — energy, adventure
  | 'seafoam'     // Testimonials — kindness
  | 'pearl'       // Gallery — neutral light
  | 'sand'        // About — warm story
  | 'peach';      // Contact — invitation

const palettes: Record<OrbPalette, { a: string; b: string; c: string }> = {
  coral:    { a: 'rgba(255,138,101,0.22)', b: 'rgba(255,183,145,0.18)', c: 'rgba(30,200,200,0.10)' },
  mint:     { a: 'rgba(167,244,211,0.20)', b: 'rgba(135,206,250,0.16)', c: 'rgba(255,183,145,0.10)' },
  lavender: { a: 'rgba(199,168,240,0.22)', b: 'rgba(255,138,180,0.14)', c: 'rgba(135,206,250,0.10)' },
  gold:     { a: 'rgba(255,213,128,0.22)', b: 'rgba(255,138,101,0.18)', c: 'rgba(30,200,200,0.10)' },
  seafoam:  { a: 'rgba(159,226,191,0.22)', b: 'rgba(167,244,211,0.16)', c: 'rgba(255,213,128,0.12)' },
  pearl:    { a: 'rgba(220,230,240,0.18)', b: 'rgba(199,168,240,0.14)', c: 'rgba(255,183,145,0.10)' },
  sand:     { a: 'rgba(255,213,128,0.18)', b: 'rgba(255,183,145,0.16)', c: 'rgba(167,244,211,0.10)' },
  peach:    { a: 'rgba(255,183,145,0.22)', b: 'rgba(255,138,180,0.16)', c: 'rgba(135,206,250,0.10)' },
};

export default function AmbientOrbs({
  palette,
  intensity = 1,
}: {
  palette: OrbPalette;
  intensity?: number; // 0.5 .. 1.5
}) {
  const p = palettes[palette];
  const i = intensity;
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Top-left primary orb */}
      <motion.span
        className="absolute -top-32 -left-32 rounded-full blur-[120px]"
        style={{
          width: `${28 * i}rem`,
          height: `${28 * i}rem`,
          background: `radial-gradient(circle, ${p.a} 0%, transparent 65%)`,
        }}
        animate={{ x: [0, 40, -10, 0], y: [0, 20, -10, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Bottom-right secondary orb */}
      <motion.span
        className="absolute -bottom-40 -right-24 rounded-full blur-[140px]"
        style={{
          width: `${32 * i}rem`,
          height: `${32 * i}rem`,
          background: `radial-gradient(circle, ${p.b} 0%, transparent 65%)`,
        }}
        animate={{ x: [0, -30, 20, 0], y: [0, -25, 15, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Mid accent orb */}
      <motion.span
        className="absolute top-1/3 left-1/2 -translate-x-1/2 rounded-full blur-[160px]"
        style={{
          width: `${24 * i}rem`,
          height: `${24 * i}rem`,
          background: `radial-gradient(circle, ${p.c} 0%, transparent 70%)`,
        }}
        animate={{ x: ['-50%', '-30%', '-60%', '-50%'], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
