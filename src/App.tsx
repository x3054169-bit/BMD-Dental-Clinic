import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfoCards from './components/InfoCards';
import TrustBanner from './components/TrustBanner';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Services from './components/Services';
import CTABanner from './components/CTABanner';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyBottomBar from './components/StickyBottomBar';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen selection:bg-teal-100 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <InfoCards />
        <TrustBanner />
        <WhyChooseUs />
        <About />
        <Services />
        <CTABanner />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <StickyBottomBar />
    </div>
  );
}
