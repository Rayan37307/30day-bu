import { useState, useEffect } from 'react';
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
import { Preloader } from './components/Preloader';
import { Approach } from './components/Approach';
import { Features } from './components/Features';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) return;

    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis only after loading
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    // Synchronize Lenis with ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Add Lenis to GSAP's ticker
    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);

    // Disable GSAP's default lag smoothing to avoid sync issues
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger after a short delay to account for layout shifts
    const refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(tickerCallback);
      clearTimeout(refreshTimeout);
    };
  }, [isLoading]);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      <div className={`relative min-h-screen overflow-x-hidden bg-navy-deep flex flex-col ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
        {/* Global Background Elements */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />
          
          {/* Red Splashes/Gradients */}
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-electric-blue/10 blur-[120px] opacity-60" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-electric-blue/5 blur-[150px] opacity-40" />
          <div className="absolute top-[40%] right-[-5%] w-[30%] h-[40%] rounded-full bg-electric-blue/10 blur-[100px] opacity-30" />
          <div className="absolute bottom-[20%] left-[5%] w-[40%] h-[30%] rounded-full bg-electric-blue/5 blur-[120px] opacity-40" />
        </div>

        {/* Main Content Hierarchy */}
        <div className="relative z-10 flex flex-col items-center w-full">
          {/* <Navbar /> */}
          <Hero />
          <CTABanner />
          <Approach />
          <Features />
          <Modules />
          {/* <Mentor /> */}
          <SocialProof />
          <Pricing />
          <FAQ />
          <Footer />
        </div>
      </div>
    </>
  );
}
