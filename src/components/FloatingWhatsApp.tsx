import { motion } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 2200);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-[70] flex flex-col items-end gap-3">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.95 }}
          className="w-[260px] glass-strong rounded-2xl p-4 shadow-soft"
        >
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <div className="flex items-center gap-2">
                <span className="relative h-2 w-2 rounded-full bg-green-400">
                  <span className="absolute inset-0 rounded-full bg-green-400 animate-ping" />
                </span>
                <span className="text-xs text-white/70">Online · replies in 4 min</span>
              </div>
              <div className="display text-lg mt-1 leading-tight">Hi from the M V A team 👋</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/50 hover:text-white"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="text-xs text-white/65 mb-3 leading-relaxed">
            Tell me about your dream Andaman trip — dates, travellers, vibe — and I'll send back a hand-built quote.
          </p>
          <a
            href="https://wa.me/919876543210?text=Hi%20MVA%20Tours%2C%20I%27d%20like%20to%20plan%20a%20trip%20to%20the%20Andamans"
            target="_blank"
            rel="noreferrer"
            className="block text-center w-full bg-[#25D366] hover:bg-[#1ebd5a] text-white text-sm font-medium py-2.5 rounded-full transition"
          >
            Open WhatsApp
          </a>
        </motion.div>
      )}

      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', damping: 16, stiffness: 200 }}
        onClick={() => setOpen((v) => !v)}
        aria-label="Open WhatsApp chat"
        className="relative h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#1ebd5a] grid place-items-center shadow-[0_10px_40px_-10px_rgba(37,211,102,0.7)] transition group"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
        <MessageCircle className="h-6 w-6 text-white relative" />
      </motion.button>
    </div>
  );
}
