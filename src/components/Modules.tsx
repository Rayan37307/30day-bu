"use client";

import { useRef } from "react";
import { Brain, Video, Cpu, Rocket } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const modules = [
  {
    id: "01",
    title: "দ্য ইনার গেম",
    subtitle: "দিন ১-৭: প্যাশন এবং প্রোডাক্টিভিটি",
    icon: <Brain className="text-red-400" size={28} strokeWidth={1.5} />,
    accentColor: "#ff3b3b",
    accentBg: "rgba(255,59,59,0.08)",
    glowColor: "rgba(255,59,59,0.15)",
    points: [
      "ইকিগাই ফ্রেমওয়ার্ক ব্যবহার করে জীবনের আসল প্যাশন খুঁজে বের করা।",
      "অলসতা দূর করা এবং কার্যকরী অভ্যাস গড়ে তোলা।",
      "দ্রুত জ্ঞান অর্জনের জন্য নিউরোসায়েন্স-সমর্থিত স্টাডি টিপস।",
    ],
  },
  {
    id: "02",
    title: "ক্রিয়েটর ইকোনমি",
    subtitle: "দিন ৮-১৫: কন্টেন্ট এবং এডিটিং",
    icon: <Video className="text-purple-400" size={28} strokeWidth={1.5} />,
    accentColor: "#a855f7",
    accentBg: "rgba(168,85,247,0.08)",
    glowColor: "rgba(168,85,247,0.15)",
    points: [
      "একটি আধুনিক কন্টেন্ট ক্রিয়েশন ওয়ার্কফ্লো সেটআপ করা।",
      "এআই টুল ব্যবহার করে দ্রুত হাই-রিটেনশন ভিডিও এডিট করা।",
      "অ্যালগরিদম ডমিনেট করার মতো হুক এবং স্টোরিটেলিং স্ক্রিপ্ট লেখা।",
    ],
  },
  {
    id: "03",
    title: "দ্য টেকনিক্যাল এজ",
    subtitle: "দিন ১৬-২৫: এআই এর মাধ্যমে কোডিং",
    icon: <Cpu className="text-emerald-400" size={28} strokeWidth={1.5} />,
    accentColor: "#10b981",
    accentBg: "rgba(16,185,129,0.08)",
    glowColor: "rgba(16,185,129,0.15)",
    points: [
      "প্রম্পট ইঞ্জিনিয়ারিংয়ের সম্পূর্ণ গাইডলাইন।",
      "কোড টাইপ না করেই লজিক এবং আর্কিটেকচার তৈরি করা।",
      "এআই ব্যবহার করে আপনার প্রথম ফুল-ফাংশনাল ওয়েব অ্যাপ ডিপ্লয় করা।",
    ],
  },
  {
    id: "04",
    title: "ইন্টিগ্রেশন এবং লঞ্চ",
    subtitle: "দিন ২৬-৩০: সবকিছুর বাস্তবায়ন",
    icon: <Rocket className="text-amber-400" size={28} strokeWidth={1.5} />,
    accentColor: "#f59e0b",
    accentBg: "rgba(245,158,11,0.08)",
    glowColor: "rgba(245,158,11,0.15)",
    points: [
      "আপনার প্যাশনের সাথে নতুন টেকনিক্যাল স্কিলের সমন্বয় করা।",
      "আপনার পরবর্তী বড় লক্ষ্যের জন্য একটি ৯০-দিনের অ্যাকশন প্ল্যান তৈরি করা।",
      "ফাইনাল প্রশ্নোত্তর, প্রজেক্ট রিভিউ এবং গ্র্যাজুয়েশন।",
    ],
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
    <div className="bg-transparent">
      {/* Header Section (Scrolls normally) */}
      <section className="pt-40 pb-20 px-6 text-center">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/30 mb-4">
          কোর্স কারিকুলাম
        </p>
        <h2 className="font-display font-medium text-4xl md:text-5xl mb-4 text-white">
          ৩০-দিনের <span className="text-red-500 font-bold">রোডম্যাপ</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-lg pt-2 leading-relaxed">
          প্রতিদিন নতুন কিছু শিখুন। নিচে কোর্সের ৪টি ধাপের ব্রেকডাউন দেওয়া হলো।
        </p>
      </section>

      {/* Pinned Stacking Cards Section */}
      <section ref={containerRef} className="relative flex items-center justify-center h-screen w-full overflow-hidden px-4 md:px-6">
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
            <div
              className="card-inner relative w-full max-w-[1200px] origin-top flex flex-col md:flex-row overflow-hidden rounded-[28px] border border-white/[0.06] bg-[#0a0a0d] shadow-[0_30px_60px_rgba(0,0,0,0.6)] will-change-transform"
              style={{
                top: `calc(-5vh + ${i * 30}px)`, 
                boxShadow: `0 0 0 1px rgba(255,255,255,0.04), 0 30px 60px rgba(0,0,0,0.6), 0 0 80px ${mod.glowColor}`,
              }}
            >
              {/* Accent top-edge line */}
              <div
                className="absolute top-0 left-[10%] right-[10%] h-[1px] rounded-full"
                style={{
                  background: `linear-gradient(90deg, transparent, ${mod.accentColor}55, transparent)`,
                }}
              />

              {/* Left panel */}
              <div
                className="relative flex w-full flex-col justify-between border-b border-white/[0.05] p-8 md:w-[42%] md:border-b-0 md:border-r md:p-12"
                style={{ background: mod.accentBg }}
              >
                <div className="mb-10 flex items-center justify-between">
                  <span
                    className="rounded-full border px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em]"
                    style={{
                      color: mod.accentColor,
                      borderColor: `${mod.accentColor}30`,
                      background: `${mod.accentColor}10`,
                    }}
                  >
                    Module {mod.id}
                  </span>
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10"
                    style={{ background: `${mod.accentColor}15` }}
                  >
                    {mod.icon}
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 font-display text-2xl font-semibold leading-tight text-white md:text-[1.65rem]">
                    {mod.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-slate-400">
                    {mod.subtitle}
                  </p>
                </div>

                <div
                  className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full blur-3xl opacity-20"
                  style={{ background: mod.accentColor }}
                />
              </div>

              {/* Right panel — steps */}
              <div className="flex w-full items-center p-8 md:w-[58%] md:p-12 bg-[#0e0e12]">
                <ul className="relative w-full space-y-7">
                  <div className="absolute bottom-5 left-[18px] top-5 w-px bg-white/[0.06]" />
                  {mod.points.map((point, pIdx) => (
                    <li key={pIdx} className="relative flex items-start gap-5">
                      <div
                        className="relative z-10 mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-[#0e0e12]"
                        style={{
                          boxShadow: `0 0 0 3px ${mod.accentColor}12, inset 0 1px 2px rgba(255,255,255,0.06)`,
                        }}
                      >
                        <span
                          className="text-sm font-semibold"
                          style={{ color: mod.accentColor }}
                        >
                          {pIdx + 1}
                        </span>
                      </div>
                      <span className="pt-1.5 text-[14.5px] leading-relaxed text-slate-300">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}