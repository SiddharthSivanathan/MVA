import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Phone, X } from 'lucide-react';
import { cn } from '../lib/utils';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Packages', href: '#packages' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'py-3 bg-navy-950/60 backdrop-blur-2xl border-b border-white/10 shadow-soft'
            : 'py-5 bg-transparent',
        )}
      >
        <div className="section-padding flex items-center justify-between gap-6 max-w-[1500px] mx-auto">
          <a href="#home" className="flex items-center gap-3 group">
            <span className="relative h-10 w-10 grid place-items-center rounded-full bg-gradient-to-br from-turquoise to-sunset-400 shadow-glow-sm">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none">
                <path d="M3 14c2-2 4-2 6 0s4 2 6 0 4-2 6 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M3 18c2-2 4-2 6 0s4 2 6 0 4-2 6 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".6" />
                <circle cx="18" cy="7" r="2" fill="currentColor" />
              </svg>
              <span className="absolute inset-0 rounded-full ring-1 ring-white/30 group-hover:ring-white/60 transition" />
            </span>
            <div className="flex flex-col leading-none">
              <span className="display text-[20px] md:text-[22px] tracking-[0.18em]">M V A</span>
              <span className="text-[10px] tracking-[0.32em] text-turquoise/80 uppercase">Tours & Travels · Andaman</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1 glass rounded-full px-2 py-1.5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-4 py-2 text-[13px] font-medium text-white/80 hover:text-white transition group rounded-full"
              >
                <span className="relative z-10">{l.label}</span>
                <span className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-[12px] text-white/70 hover:text-turquoise transition"
            >
              <Phone className="h-3.5 w-3.5" />
              +91 98765 43210
            </a>
            <a href="#contact" className="btn-primary !px-5 !py-2.5 text-[12px]">
              Plan Your Trip
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden glass rounded-full p-2.5"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div className="absolute inset-0 bg-navy-950/90 backdrop-blur-2xl" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-navy-900/95 border-l border-white/10 p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="display text-2xl">Menu</span>
                <button onClick={() => setOpen(false)} className="glass rounded-full p-2" aria-label="Close menu">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-1">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                    className="display text-3xl py-3 border-b border-white/5 hover:text-turquoise transition"
                  >
                    {l.label}
                  </motion.a>
                ))}
              </nav>
              <div className="mt-auto space-y-3">
                <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full">
                  Plan Your Trip
                </a>
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-2 text-sm text-white/70"
                >
                  <Phone className="h-4 w-4" /> +91 98765 43210
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
