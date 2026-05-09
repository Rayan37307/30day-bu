import { useEffect, useRef } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    // Initial state: Text is blurred, slightly smaller, and shifted down
    gsap.set(textRef.current, { y: 40, opacity: 0, scale: 0.95, filter: "blur(10px)" });
    gsap.set(progressBarRef.current, { scaleX: 0, transformOrigin: "left" });

    const progressObj = { val: 0 };

    // Dashboard boot-up sequence
    tl.to(progressObj, {
        val: 100,
        duration: 1.2,
        roundProps: "val",
        onUpdate: () => {
          if (progressRef.current) {
            progressRef.current.innerText = Math.round(progressObj.val).toString();
          }
        },
        ease: "power4.inOut" // Fast acceleration and deceleration
      }, 0)
      .to(progressBarRef.current, {
        scaleX: 1,
        duration: 1.2,
        ease: "power4.inOut"
      }, 0)
      .to(textRef.current, {
        y: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.0,
        ease: "expo.out", // Sharp snap into place
      }, 0.2)
      .to(textRef.current, {
        letterSpacing: "4px",
        duration: 1.0,
        ease: "power2.out"
      }, 0.2)
      .to(containerRef.current, {
        yPercent: -100,
        scale: 1.02, // Subtle zoom as it exits
        opacity: 0,
        duration: 0.7,
        ease: "expo.inOut",
      }, 1.4) // 0.2s pause after boot completes before exiting
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
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#09090b]"
    >
      {/* Deep charcoal gradient texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c1c21] to-[#09090b] pointer-events-none" />
      
      {/* Film grain noise overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay" 
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' 
        }} 
      />
      
      {/* Soft top-down spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.03] blur-[100px] rounded-full pointer-events-none" />

      {/* Text Content */}
      <div className="relative z-10 px-6 text-center flex flex-col items-center">
        <h1
          ref={textRef}
          className="text-4xl md:text-6xl lg:text-7xl font-display uppercase text-white leading-tight font-bold"
          style={{
            textShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
          }}
        >
          REBUILD YOURSELF IN <br className="md:hidden" />
          <span className="text-[#ef4444]">30-DAY</span>
        </h1>
      </div>
    </div>
  );
}
