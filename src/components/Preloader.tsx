import { useEffect, useRef } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    // Initial state
    gsap.set(textRef.current, { y: 20, opacity: 0, letterSpacing: "0px" });

    const progressObj = { val: 0 };

    tl.to(textRef.current, {
      y: 0,
      opacity: 1,
      letterSpacing: "4px",
      duration: 1.8,
      ease: "power2.out",
    }, 0)
      .to(progressObj, {
        val: 100,
        duration: 1.8,
        roundProps: "val",
        onUpdate: () => {
          if (progressRef.current) {
            progressRef.current.innerText = Math.round(progressObj.val).toString();
          }
        },
        ease: "power2.inOut"
      }, 0)
      .to(containerRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "expo.inOut",
        delay: 0.3,
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
          className="text-4xl md:text-6xl lg:text-7xl font-anton uppercase text-white leading-tight font-bold"
          style={{
            textShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
          }}
        >
          REBUILD YOURSELF IN <br className="md:hidden" />
          <span className="text-[#ef4444]">30-DAY</span>
        </h1>
      </div>

      {/* Tiny sophisticated counter at the bottom */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3 text-[#a1a1aa] font-mono text-[10px] tracking-[0.2em] uppercase opacity-70">
        <span>Loading</span>
        <div className="h-[1px] w-8 bg-white/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-white/80 origin-left" style={{ transform: 'scaleX(0)', animation: 'progressLine 1.8s ease-in-out forwards' }} />
        </div>
        <span className="w-6 text-right tabular-nums"><span ref={progressRef}>0</span>%</span>
      </div>

      {/* Inline styles for the progress line animation */}
      <style>{`
        @keyframes progressLine {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
}
