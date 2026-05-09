"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const modules = [
  {
    id: "01",
    title: "Addiction Destruction Protocol",
    subtitle: "“কালকে থেকে বদলে যাবো”- এই fake promise এর loop থেকে বের হতে হবে এবার।",
    icon: "/phases/phase-01.png",
    accentColor: "#ff3b3b",
    accentBg: "rgba(255,59,59,0.08)",
    glowColor: "rgba(255,59,59,0.15)",
    points: [
      "কিভাবে আজকেই action নেওয়া শুরু করবে",
      "কিভাবে urges control করবে",
      "কিভাবে porn addiction-এর dangerous cycle completely break করবে",
      "কিভাবে guilt আর shame থেকে বের হয়ে mentally strong হবে",
    ],
    footer: "“এই phase এ dedicatedly পর্ন এডিকশন থেকে বের হওয়ার scintific method নিয়ে আলাপ হবে”"
  },
  {
    id: "02",
    title: "Discipline Rebuilding System",
    subtitle: "জীবনে কিছু করতে হলে discipline লাগবেই বস। টাকা কামাতে হলে আগে তো কাজে focus করা শিখতে হবে নাকি?",
    icon: "/phases/phase-02.png",
    accentColor: "#a855f7",
    accentBg: "rgba(168,85,247,0.08)",
    glowColor: "rgba(168,85,247,0.15)",
    points: [
      "কিভাবে সব distraction বাদ দিয়ে deep focus-এ কাজ করবে",
      "কিভাবে একটা proper routine build করবে",
      "কিভাবে consistency maintain করবে",
      "কিভাবে discipline-এর মাধ্যমে অল্প সময়ে massive improvement আনবে",
    ],
    footer: "“এই phase-এ তুমি শিখবে কিভাবে নিজের mind-কে control করে একজন real action taker হতে হয়”"
  },
  {
    id: "03",
    title: "The Recovery Framework",
    subtitle: "নিজের সবথেকে শক্তিশালী version কে ফিরিয়ে আনতে হবে এবার",
    icon: "/phases/phase-03.png",
    accentColor: "#10b981",
    accentBg: "rgba(16,185,129,0.08)",
    glowColor: "rgba(16,185,129,0.15)",
    points: [
      "কিভাবে brain fog থেকে বের হয়ে mental clarity ফিরিয়ে আনবে",
      "Masturbation এর কারণে হওয়া damage কিভাবে recover করবে",
      "Dopamine abuse এর পর brain & body কিভাবে rebuild করবে",
      "কিভাবে আবার energy আর motivation ফিরে পাবে",
    ],
    footer: "Porn আর masturbation তোমার শরীরের ওপর যেই ক্ষতিগুলা করছে। সেগুলা ঠিক করতে হবে এই phase এ।"
  },
  {
    id: "04",
    title: "Masculinity & Purpose Blueprint",
    subtitle: "তুমি শুধু addiction থেকে বের হওয়ার জন্য আসো নাই। তুমি আসছো নিজের strongest version এ transform হওয়ার জন্য",
    icon: "/phases/phase-04.png",
    accentColor: "#f59e0b",
    accentBg: "rgba(245,158,11,0.08)",
    glowColor: "rgba(245,158,11,0.15)",
    points: [
      "কিভাবে weak mindset destroy করে powerful mentality build করবে",
      "কিভাবে masculine confidence build করবে",
      "কিভাবে purpose-driven life build করবে",
      "কিভাবে নিজের emotions control করবে",
    ],
    footer: "তুমি যেন নিজেকে নিয়ে proud feel করতে পারো। আয়নার সামনে দাঁড়ালে যেনো লজ্জা না লাগে, সেই বেবস্থা করা হবে বস।"
  },
];

export function Modules() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const wrappers = gsap.utils.toArray<HTMLElement>(".card-wrapper");
      
      // 1. Force all cards (except the first one) to start below the screen
      gsap.set(wrappers.slice(1), { y: "100vh" });

      // 2. Pin the container and create a timeline tied to the scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",     // Pin exactly when the section hits the top
          end: `+=${wrappers.length * 100}%`, // Scroll distance (400vh for 4 cards)
          pin: true,
          scrub: 1, // Smooth scrubbing
        },
      });

      wrappers.forEach((wrapper, i) => {
        if (i === 0) return; // Skip first card (it's already in the center)

        const syncLabel = `card-${i}`;

        // 3. Bring the current card up from the bottom
        tl.to(wrapper, {
            y: "0vh",
            ease: "none",
        }, syncLabel);

        // 4. At the EXACT SAME TIME, scale down ALL previously stacked cards
        for (let j = 0; j < i; j++) {
          const prevInner = wrappers[j].querySelector(".card-inner");
          tl.to(prevInner, {
              scale: 1 - ((i - j) * 0.05), // Drops by 0.05 scale each step back
              opacity: 1 - ((i - j) * 0.1), // Fades slightly for depth
              filter: "blur(2px)", // Optional blur effect
              ease: "none"
          }, syncLabel);
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <div className="bg-transparent w-full">
      {/* Header Section (Scrolls normally) */}
      <section className="py-20 text-center w-full">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <p className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-slate-400 mb-4">
            কোর্স কারিকুলাম
          </p>
          <h2 className="font-display font-medium text-4xl md:text-5xl mb-4 text-white">
            ৩০-দিনের <span className="text-gradient-red font-bold font-display underline decoration-2 underline-offset-4">রোডম্যাপ</span>
          </h2>
          <p className="text-slate-300/90 max-w-xl mx-auto text-lg pt-2 leading-relaxed">
            প্রতিদিন নিজেকে নতুন করে গড়ুন। নিচে কোর্সের ৪টি ধাপের মাস্টার ব্রেকডাউন দেওয়া হলো।
          </p>
        </div>
      </section>

      {/* Pinned Stacking Cards Section */}
      <section ref={containerRef} className="relative flex items-center justify-center h-screen w-full max-w-[1200px] mx-auto overflow-hidden px-6">
        {modules.map((mod, i) => (
          <div
            key={mod.id}
            className="card-wrapper absolute inset-0 flex items-center justify-center w-full h-full will-change-transform"
            style={{ zIndex: i + 1 }}
          >
            {/* 
              origin-top: Scales from the top edge, not the center
              top: calc... Creates the visual "stacked edges" offset effect
            */}
            <article
              className="card-inner relative w-full max-w-[1200px] origin-top flex flex-col md:flex-row overflow-hidden rounded-2xl will-change-transform min-h-[550px] md:min-h-[600px] border-2 border-red-600 shadow-2xl"
              style={{
                background: "#09090b",
                top: `calc(-5vh + ${i * 30}px)`, 
                boxShadow: `0 30px 100px rgba(0,0,0,0.8), 0 0 120px ${mod.glowColor}`,
              }}
            >
              {/* Accent top-edge line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] z-20"
                style={{
                  background: `linear-gradient(90deg, transparent, #ff3b3b, transparent)`,
                }}
              />

              {/* Left panel */}
              <div
                className="relative flex w-full flex-col justify-between border-b border-border-subtle p-8 md:w-[40%] md:border-b-0 md:border-r md:p-12 lg:p-16 bg-[#0c0c0e]"
              >
                <div className="mb-12 flex items-center justify-between">
                  <span
                    className="rounded-sm border px-4 py-2 text-[12px] font-bold uppercase tracking-[0.2em]"
                    style={{
                      color: mod.accentColor,
                      borderColor: `${mod.accentColor}30`,
                      background: `${mod.accentColor}10`,
                    }}
                  >
                    Phase {mod.id}
                  </span>
                  <div
                    className="flex h-24 w-24 items-center justify-center rounded-2xl border-2 border-red-500 overflow-hidden shadow-[0_0_40px_rgba(255,59,59,0.2)] bg-[#121214]"
                  >
                    {typeof mod.icon === 'string' ? (
                      <img src={mod.icon} alt="" className="w-full h-full object-cover scale-110" />
                    ) : (
                      mod.icon
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 font-display text-3xl font-bold leading-tight text-white md:text-[2.2rem] lg:text-[2.8rem]">
                    {mod.title}
                  </h3>
                  <p className="text-lg md:text-xl font-medium leading-relaxed text-slate-300 opacity-90">
                    {mod.subtitle}
                  </p>
                </div>

                <div
                  className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full blur-[100px] opacity-20"
                  style={{ background: mod.accentColor }}
                />
              </div>

              {/* Right panel — steps */}
              <div className="flex w-full items-center p-8 md:w-[60%] md:p-12 lg:p-16 bg-[#050505]">
                <div className="w-full">
                  <ul className="relative w-full space-y-10">
                    <div className="absolute bottom-5 left-[22px] top-5 w-px bg-white/[0.08]" />
                    {mod.points.map((point, pIdx) => (
                      <li key={pIdx} className="relative flex items-start gap-7">
                        <div
                          className="relative z-10 mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-deep border border-border-subtle shadow-xl"
                          style={{
                            boxShadow: `0 0 0 4px ${mod.accentColor}15`,
                          }}
                        >
                          <span
                            className="text-lg font-bold"
                            style={{ color: mod.accentColor }}
                          >
                            {pIdx + 1}
                          </span>
                        </div>
                        <span className="pt-2 text-[17px] md:text-[19px] leading-relaxed text-slate-200 font-medium tracking-wide">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {mod.footer && (
                    <div className="mt-12 p-6 rounded-xl bg-[#121214] border border-red-900/30">
                      <p className="text-slate-300 text-lg font-medium leading-relaxed italic">
                        "{mod.footer}"
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </article>

          </div>
        ))}
      </section>
    </div>
  );
}