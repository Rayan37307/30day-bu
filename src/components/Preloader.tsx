import { useEffect, useRef } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    // Initial state
    gsap.set(textRef.current, { y: 60, opacity: 0 });

    tl.to(textRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.4,
      ease: "expo.out",
      delay: 0,
    })
      .to(containerRef.current, {
        yPercent: -100,
        duration: 0.6,
        ease: "expo.inOut",
        delay: 0,
      })
      .to(containerRef.current, {
        pointerEvents: "none",
        duration: 0.1,
      });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/bgloader.jpg" 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <div className="absolute inset-0 border-b border-border-subtle" />
      </div>

      {/* Text Content - now moves with the container */}
      <div className="relative z-10 px-6 text-center">
        <h1
          ref={textRef}
          className="text-4xl md:text-7xl font-display font-bold text-white tracking-tight leading-tight"
          style={{
            textShadow: '0 0 25px rgba(255, 59, 59, 0.4), 0 0 50px rgba(255, 59, 59, 0.2)',
          }}
        >
          ৩০-দিনের জীবন <br />
          <span className="text-electric-blue curly-underline">পরিবর্তনের</span> প্রোগ্রাম
        </h1>
      </div>
    </div>
  );
}
