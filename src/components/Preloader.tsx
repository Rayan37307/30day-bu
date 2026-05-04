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
    gsap.set(textRef.current, { y: 100, opacity: 0 });

    tl.to(textRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
      delay: 0.5,
    })
      .to(textRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power4.in",
        delay: 1.5,
      })
      .to(curtainRef.current, {
        yPercent: -100,
        duration: 1.2,
        ease: "power4.inOut",
      });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Black Curtain */}
      <div
        ref={curtainRef}
        className="absolute inset-0 bg-black z-0 border-b border-white/10"
      />

      {/* Text Content */}
      <div className="relative z-10 px-6 text-center">
        <h1
          ref={textRef}
          className="text-4xl md:text-7xl font-display font-bold text-white tracking-tight leading-tight"
          style={{
            textShadow: '0 0 20px rgba(0, 102, 255, 0.5), 0 0 40px rgba(0, 102, 255, 0.3)',
          }}
        >
          ৩০-দিনের জীবন <br />
          <span className="text-electric-blue">পরিবর্তনের</span> প্রোগ্রাম
        </h1>
      </div>
    </div>
  );
}
