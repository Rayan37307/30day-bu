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
    title: "দ্য রিবুট",
    subtitle: "দিন ১-৭: ডোপামিন ডিটক্স এবং অ্যাডিকশন রিকভারি",
    icon: <Brain className="text-red-400" size={28} strokeWidth={1.5} />,
    accentColor: "#ff3b3b",
    accentBg: "rgba(255,59,59,0.08)",
    glowColor: "rgba(255,59,59,0.15)",
    points: [
      "ডোপামিন লুপ বোঝা এবং পর্ন/সোশ্যাল মিডিয়া আসক্তি থেকে বিজ্ঞানসম্মত উপায়ে বের হয়ে আসার রুটম্যাপ।",
      "সাবকনশাস মাইন্ডের ট্রিগারগুলো আইডেন্টিফাই করা এবং বাজে অভ্যাস ভাঙার সাইকোলজিক্যাল হ্যাকস।",
      "ব্রেইনকে রিবুট করে হারিয়ে যাওয়া ড্রাইভ, ফোকাস এবং সেলফ-কনফিডেন্স পুনরায় ফিরে পাওয়া।",
    ],
  },
  {
    id: "02",
    title: "মাস্টার অফ টাইম",
    subtitle: "দিন ৮-১৫: টাইম ম্যানেজমেন্ট এবং প্রোডাক্টিভিটি",
    icon: <Video className="text-purple-400" size={28} strokeWidth={1.5} />,
    accentColor: "#a855f7",
    accentBg: "rgba(168,85,247,0.08)",
    glowColor: "rgba(168,85,247,0.15)",
    points: [
      "Getting Things Done (GTD) মেথড ব্যবহার করে ব্রেইনের ওভারলোড কমানো এবং কাজের সিস্টেম তৈরি করা।",
      "প্রোকাস্টিনেশন (অলসতা) দূর করে প্রতিদিনের কাজের একটি সলিড রুটিন ও ডিসিপ্লিন ডেভেলপ করা।",
      "টাইম-ব্লকিং এবং প্রমোডোরো টেকনিকের মাধ্যমে দিনে ৪ ঘণ্টার কাজ ২ ঘণ্টায় শেষ করার ফর্মুলা।",
    ],
  },
  {
    id: "03",
    title: "দ্য ডিপ ওয়ার্ক",
    subtitle: "দিন ১৬-২৫: ফোকাস এবং স্কিল ডেভেলপমেন্ট",
    icon: <Cpu className="text-emerald-400" size={28} strokeWidth={1.5} />,
    accentColor: "#10b981",
    accentBg: "rgba(16,185,129,0.08)",
    glowColor: "rgba(16,185,129,0.15)",
    points: [
      "সম্পূর্ণ ডিস্ট্রাকশন-ফ্রি এনভায়রনমেন্ট তৈরি করে হাই-ইনকাম স্কিল শেখার মানসিক প্রস্তুতি।",
      "দ্রুত এবং কার্যকরী উপায়ে যেকোনো নতুন স্কিল (কোডিং, এডিটিং বা ডিজাইন) আয়ত্ত করার 'লার্নিং হাউ টু লার্ন' টেকনিক।",
      "স্কিল শেখার সময় লার্নিং কার্ভকে ছোট করে দ্রুত প্র্যাকটিক্যাল প্রজেক্টে কাজ শুরু করার গাইডলাইন।",
    ],
  },
  {
    id: "04",
    title: "দ্য 'Aura Boss' মাইন্ডসেট",
    subtitle: "দিন ২৬-৩০: ইন্টিগ্রেশন এবং কনসিস্টেন্সি",
    icon: <Rocket className="text-amber-400" size={28} strokeWidth={1.5} />,
    accentColor: "#f59e0b",
    accentBg: "rgba(245,158,11,0.08)",
    glowColor: "rgba(245,158,11,0.15)",
    points: [
      "আপনার নতুন ডিসিপ্লিন এবং স্কিলগুলোকে প্রতিদিনের লাইফস্টাইলের সাথে মানিয়ে নেওয়া।",
      "রিল্যাপ্স ঠেকানোর জন্য একটি শক্তিশালী এবং প্র্যাকটিক্যাল ৯০-দিনের অ্যাকশন প্ল্যান তৈরি করা।",
      "ফাইনাল প্রশ্নোত্তর, পার্সোনাল গ্রোথ রিভিউ এবং ভবিষ্যতের সফলতার জন্য রোডম্যাপ।",
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
    <div className="bg-transparent w-full">
      {/* Header Section (Scrolls normally) */}
      <section className="py-20 text-center w-full">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <p className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-text-secondary mb-4">
            কোর্স কারিকুলাম
          </p>
          <h2 className="font-display font-medium text-4xl md:text-5xl mb-4 text-white">
            ৩০-দিনের <span className="text-red-500 font-bold font-display curly-underline">রোডম্যাপ</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg pt-2 leading-relaxed">
            প্রতিদিন নিজেকে নতুন করে গড়ুন। নিচে কোর্সের ৪টি ধাপের মাস্টার ব্রেকডাউন দেওয়া হলো।
          </p>
        </div>
      </section>

      {/* Pinned Stacking Cards Section */}
      <section ref={containerRef} className="relative flex items-center justify-center h-screen w-full max-w-[1400px] mx-auto overflow-hidden px-6">
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
              className="card-inner relative w-full max-w-[1400px] origin-top flex flex-col md:flex-row overflow-hidden rounded-2xl border border-border-subtle bg-surface shadow-[0_30px_60px_rgba(0,0,0,0.6)] will-change-transform min-h-[550px] md:min-h-[600px]"
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
                className="relative flex w-full flex-col justify-between border-b border-border-subtle p-8 md:w-[40%] md:border-b-0 md:border-r md:p-12 lg:p-16"
                style={{ background: mod.accentBg }}
              >
                <div className="mb-12 flex items-center justify-between">
                  <span
                    className="rounded-full border px-4 py-2 text-[12px] font-bold uppercase tracking-[0.2em]"
                    style={{
                      color: mod.accentColor,
                      borderColor: `${mod.accentColor}30`,
                      background: `${mod.accentColor}10`,
                    }}
                  >
                    Module {mod.id}
                  </span>
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-xl border border-border-subtle"
                    style={{ background: `${mod.accentColor}15` }}
                  >
                    {mod.icon}
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
              <div className="flex w-full items-center p-8 md:w-[60%] md:p-12 lg:p-16 bg-surface">
                <ul className="relative w-full space-y-10">
                  <div className="absolute bottom-5 left-[22px] top-5 w-px bg-white/[0.08]" />
                  {mod.points.map((point, pIdx) => (
                    <li key={pIdx} className="relative flex items-start gap-7">
                      <div
                        className="relative z-10 mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border-subtle bg-surface shadow-xl"
                        style={{
                          boxShadow: `0 0 0 4px ${mod.accentColor}15, inset 0 1px 2px rgba(255,255,255,0.06)`,
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
              </div>
            </div>

          </div>
        ))}
      </section>
    </div>
  );
}