import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Packages from './components/Packages';
import Destinations from './components/Destinations';
import WhyChooseUs from './components/WhyChooseUs';
import Experiences from './components/Experiences';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  useEffect(() => {
    // Soft preload of first hero frame
    const hint = document.createElement('link');
    hint.rel = 'preload';
    hint.as = 'image';
    hint.href =
      'https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?auto=format&fit=crop&w=2000&q=80';
    document.head.appendChild(hint);
  }, []);

  return (
    <div className="relative overflow-x-hidden bg-navy-950 text-white">
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Packages />
        <Destinations />
        <WhyChooseUs />
        <Experiences />
        <Testimonials />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
