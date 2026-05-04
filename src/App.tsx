import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Hero } from './components/Hero';

import { Modules } from './components/Modules';
import { SocialProof } from './components/SocialProof';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Navbar } from './components/Navbar';
import { CTABanner } from './components/CTABanner';
import { Footer } from './components/Footer';
import { Mentor } from './components/Mentor';

export default function App() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    // Synchronize Lenis with ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Add Lenis to GSAP's ticker
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Disable GSAP's default lag smoothing to avoid sync issues
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-navy-deep flex flex-col">
      {/* Global Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />
      </div>

      {/* Main Content Hierarchy */}
      <div className="relative z-10 flex flex-col items-center w-full">
        <Navbar />
        <Hero />
        <CTABanner />

        <Modules />
        {/* <Mentor /> */}
        <SocialProof />
        <Pricing />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}
