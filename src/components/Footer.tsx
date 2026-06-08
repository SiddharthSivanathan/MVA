import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" />
  </svg>
);

const sections = [
  {
    title: 'Explore',
    links: ['Packages', 'Destinations', 'Experiences', 'Gallery'],
  },
  {
    title: 'Company',
    links: ['About', 'Sustainability', 'Press', 'Careers'],
  },
  {
    title: 'Help',
    links: ['Plan a Trip', 'FAQ', 'Travel Insurance', 'Contact'],
  },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  return (
    <footer className="relative pt-24 pb-8 mt-10 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-72 w-[700px] bg-gradient-radial from-turquoise/15 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="section-padding max-w-[1500px] mx-auto">
        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="rounded-[28px] glass-strong p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
        >
          <div className="md:col-span-7">
            <div className="eyebrow mb-3">Stay in the tide</div>
            <h3 className="display text-3xl md:text-5xl leading-tight">
              Postcards in your inbox — <span className="text-gradient-ocean italic">never spam.</span>
            </h3>
            <p className="text-sm text-white/60 mt-3 max-w-md">
              Monthly stories from the islands, seasonal flash deals and our latest hidden coves. 6,200 subscribers.
            </p>
          </div>
          <div className="md:col-span-5">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
                setEmail('');
                setTimeout(() => setDone(false), 4000);
              }}
              className="flex items-center bg-white/5 border border-white/15 rounded-full p-1.5 focus-within:border-turquoise/60 transition"
            >
              <Mail className="h-4 w-4 mx-3 text-white/50" />
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="flex-1 bg-transparent outline-none text-sm placeholder:text-white/40 py-2"
              />
              <button className="btn-primary !py-2.5 !px-5 text-xs whitespace-nowrap">
                {done ? '✓ Subscribed' : 'Subscribe'}
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>
        </motion.div>

        {/* Main */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-12 gap-10">
          <div className="col-span-2 md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-11 w-11 grid place-items-center rounded-full bg-gradient-to-br from-turquoise to-sunset-400">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none">
                  <path d="M3 14c2-2 4-2 6 0s4 2 6 0 4-2 6 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="18" cy="7" r="2" fill="currentColor" />
                </svg>
              </span>
              <div>
                <div className="display text-2xl leading-none tracking-[0.18em]">M V A</div>
                <div className="text-[10px] tracking-[0.32em] text-turquoise/80 uppercase">Tours & Travels · Andaman</div>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              Small Andaman family. Sixteen years of slow, generous travel. Quietly, fiercely in love with these islands — and with the people who come visit them.
            </p>

            <div className="mt-7 space-y-3 text-sm text-white/75">
              <a href="tel:+919876543210" className="flex items-center gap-3 hover:text-turquoise">
                <Phone className="h-4 w-4" /> +91 98765 43210
              </a>
              <a href="mailto:hello@mvatours.in" className="flex items-center gap-3 hover:text-turquoise">
                <Mail className="h-4 w-4" /> hello@mvatours.in
              </a>
              <div className="flex items-center gap-3 text-white/60">
                <MapPin className="h-4 w-4" /> Aberdeen Bazaar, Port Blair · 744101
              </div>
            </div>
          </div>

          {sections.map((s) => (
            <div key={s.title} className="col-span-1 md:col-span-2">
              <div className="text-[11px] tracking-[0.32em] uppercase text-turquoise/80 mb-4">{s.title}</div>
              <ul className="space-y-2">
                {s.links.map((l) => (
                  <li key={l}>
                    <a
                      href={`#${l.toLowerCase().replace(/\s+/g, '-')}`}
                      className="group inline-flex items-center gap-1.5 text-sm text-white/65 hover:text-white transition"
                    >
                      {l}
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 md:col-span-1">
            <div className="text-[11px] tracking-[0.32em] uppercase text-turquoise/80 mb-4">Follow</div>
            <div className="flex md:flex-col gap-3">
              {[
                { Icon: InstagramIcon, href: '#', label: 'Instagram' },
                { Icon: FacebookIcon, href: '#', label: 'Facebook' },
                { Icon: YoutubeIcon, href: '#', label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-9 w-9 grid place-items-center rounded-full glass hover:bg-turquoise hover:text-navy-950 transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/45">
          <div>© {new Date().getFullYear()} M V A Tours &amp; Travels · Port Blair · All rights reserved.</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
