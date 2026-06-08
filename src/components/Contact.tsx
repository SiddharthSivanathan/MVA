import { motion } from 'framer-motion';
import {
  Calendar,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Users,
} from 'lucide-react';
import { useState } from 'react';
import AmbientOrbs from './AmbientOrbs';
import SectionHeading from './SectionHeading';

const interests = [
  'Honeymoon',
  'Family',
  'Adventure',
  'Luxury',
  'Solo',
  'Group',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    travellers: '2',
    date: '',
    interest: 'Honeymoon',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 section-padding max-w-[1500px] mx-auto">
      <AmbientOrbs palette="peach" intensity={1.2} />

      <SectionHeading
        eyebrow="Start your journey"
        title={
          <>
            Tell us your dream —
            <br />
            <span className="text-gradient-sunset italic">we'll quietly handle the rest.</span>
          </>
        }
        align="center"
      />

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-7 glass-strong rounded-[28px] p-7 md:p-10 relative overflow-hidden"
        >
          <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Your Name" icon={<Users className="h-3.5 w-3.5" />}>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Aanya Sharma"
                className="contact-input"
              />
            </Field>

            <Field label="Email Address" icon={<Mail className="h-3.5 w-3.5" />}>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className="contact-input"
              />
            </Field>

            <Field label="Phone / WhatsApp" icon={<Phone className="h-3.5 w-3.5" />}>
              <input
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="contact-input"
              />
            </Field>

            <Field label="Travellers" icon={<Users className="h-3.5 w-3.5" />}>
              <input
                type="number"
                min="1"
                value={form.travellers}
                onChange={(e) => setForm({ ...form, travellers: e.target.value })}
                className="contact-input"
              />
            </Field>

            <Field label="Travel Date" icon={<Calendar className="h-3.5 w-3.5" />}>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="contact-input"
              />
            </Field>

            <Field label="Trip Type" icon={<Send className="h-3.5 w-3.5" />}>
              <div className="flex flex-wrap gap-2 pt-1">
                {interests.map((i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setForm({ ...form, interest: i })}
                    className={`text-[11px] px-3 py-1.5 rounded-full border transition ${
                      form.interest === i
                        ? 'bg-turquoise text-navy-950 border-turquoise'
                        : 'border-white/15 text-white/70 hover:border-white/40'
                    }`}
                  >
                    {i}
                  </button>
                ))}
              </div>
            </Field>

            <div className="md:col-span-2">
              <Field label="Tell us a little about your dream trip" icon={<MessageCircle className="h-3.5 w-3.5" />}>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="We're celebrating our 10th anniversary and would love a private dinner on the beach…"
                  className="contact-input resize-none"
                />
              </Field>
            </div>

            <div className="md:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <p className="text-[11px] text-white/45 leading-snug max-w-xs">
                We typically respond within 30 minutes during 9 am – 9 pm IST. No bots — a real human reads every message.
              </p>
              <button type="submit" className="btn-primary group">
                {sent ? 'Sent — talk soon ✨' : 'Send Enquiry'}
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        </motion.div>

        {/* Info column */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="lg:col-span-5 space-y-5"
        >
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="block rounded-[28px] p-6 md:p-7 bg-gradient-to-br from-[#0bbf6a] to-[#055f3a] hover:from-[#16d77a] hover:to-[#055f3a] transition-all duration-500 group"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] tracking-[0.32em] uppercase text-white/80">Fastest reply</span>
              <span className="h-10 w-10 grid place-items-center rounded-full bg-white/20 group-hover:bg-white/30">
                <MessageCircle className="h-4 w-4" />
              </span>
            </div>
            <div className="display text-3xl md:text-4xl">Chat on WhatsApp</div>
            <p className="text-sm text-white/80 mt-2">+91 98765 43210 · usually replies in 4 minutes</p>
          </a>

          <div className="rounded-[28px] glass p-6 md:p-7 space-y-5">
            <InfoLine icon={Phone} title="Call us" lines={['+91 98765 43210', '+91 91234 56789']} href="tel:+919876543210" />
            <InfoLine icon={Mail} title="Email" lines={['hello@mvatours.in', 'bookings@mvatours.in']} href="mailto:hello@mvatours.in" />
            <InfoLine
              icon={MapPin}
              title="Visit us"
              lines={['Aberdeen Bazaar, Port Blair', 'Andaman &amp; Nicobar Islands · 744101']}
            />
          </div>

          <MapEmbed />
        </motion.div>
      </div>

      <style>{`
        .contact-input {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 14px;
          padding: 12px 14px;
          font-size: 14px;
          color: white;
          outline: none;
          transition: all .3s ease;
        }
        .contact-input::placeholder { color: rgba(255,255,255,0.35); }
        .contact-input:focus {
          border-color: rgba(30,200,200,0.6);
          background: rgba(30,200,200,0.05);
          box-shadow: 0 0 0 3px rgba(30,200,200,0.12);
        }
        input[type="date"]::-webkit-calendar-picker-indicator { filter: invert(.7); }
      `}</style>
    </section>
  );
}

function MapEmbed() {
  const [show, setShow] = useState(false);
  return (
    <div className="rounded-[28px] overflow-hidden border border-white/10 h-64 relative bg-navy-900">
      {show ? (
        <iframe
          title="M V A Tours · Port Blair"
          src="https://maps.google.com/maps?q=Port%20Blair%20Andaman&t=&z=11&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full grayscale-[40%] contrast-[1.1]"
          loading="lazy"
        />
      ) : (
        <button
          type="button"
          onClick={() => setShow(true)}
          className="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-3 group"
          style={{
            backgroundImage:
              'linear-gradient(135deg, rgba(3,8,19,0.4), rgba(3,8,19,0.7)), url("https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=70")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <MapPin className="h-7 w-7 text-turquoise group-hover:scale-110 transition-transform" />
          <span className="text-sm tracking-wide">View map of our Port Blair office</span>
          <span className="text-[11px] tracking-[0.32em] uppercase text-white/60 border border-white/20 rounded-full px-3 py-1 group-hover:bg-white/10 transition">
            Load Google Maps
          </span>
        </button>
      )}
    </div>
  );
}

function Field({
  label,
  icon,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="flex items-center gap-1.5 text-[11px] tracking-[0.22em] uppercase text-white/55">
        {icon}
        {label}
      </span>
      {children}
    </label>
  );
}

function InfoLine({
  icon: Icon,
  title,
  lines,
  href,
}: {
  icon: any;
  title: string;
  lines: string[];
  href?: string;
}) {
  const Wrap: any = href ? 'a' : 'div';
  return (
    <Wrap href={href} className="flex items-start gap-4 group">
      <span className="h-11 w-11 grid place-items-center rounded-full bg-white/5 border border-white/10 group-hover:bg-turquoise group-hover:text-navy-950 transition">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <div className="text-[11px] tracking-[0.22em] uppercase text-white/55 mb-0.5">{title}</div>
        {lines.map((l) => (
          <div key={l} className="text-sm text-white/85" dangerouslySetInnerHTML={{ __html: l }} />
        ))}
      </div>
    </Wrap>
  );
}
