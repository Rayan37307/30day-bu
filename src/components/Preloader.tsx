import { useEffect, useRef } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

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
      duration: 0.8,
      ease: "expo.out",
    })
      .to(containerRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "expo.inOut",
        delay: 1.0,
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
          className="text-4xl md:text-7xl font-anton uppercase text-white tracking-tight leading-tight"
          style={{
            textShadow: '0 0 25px rgba(255, 59, 59, 0.4), 0 0 50px rgba(255, 59, 59, 0.2)',
          }}
        >
          REBUILD YOURSELF IN <br className="md:hidden" />
          <span className="text-[#ef4444]">"30 DAYS"</span>
        </h1>
      </div>
    </div>
  );
}
