"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  ShieldOff,
  Timer,
  HeartPulse,
  Flame,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const modules = [
  {
    id: "01",
    title: "ADDICTION RECOVERY PROTOCOL",
    subtitle: "কালকে থেকে বদলে যাবো-এই FAKE PROMISE এর LOOP থেকে বের হতে হবে এবার।",
    Icon: ShieldOff,
    accentColor: "#ff3b3b",
    glowColor: "rgba(255,59,59,0.18)",
    points: [
      "কিভাবে আজকেই ACTION নেওয়া শুরু করবে",
      "কিভাবে URGES CONTROL করবে",
      "কিভাবে PORN ADDICTION এর DANGEROUS CYCLE COMPLETELY BREAK করবে",
      "কিভাবে GUILT আর SHAME থেকে বের হয়ে MENTALLY STRONG হবে",
    ],
    footer:
      "এই PHASE এ DEDICATEDLY পর্ন এডিকশন থেকে বের হওয়ার SCIENTIFIC METHOD নিয়ে আলাপ হবে",
  },
  {
    id: "02",
    title: "DISCIPLINE REBUILDING SYSTEM",
    subtitle:
      "জীবনে কিছু করতে হলে DISCIPLINE লাগবেই বস। টাকা কামাতে হলে আগে তো কাজে FOCUS করা শিখতে হবে নাকি?",
    Icon: Timer,
    accentColor: "#a855f7",
    glowColor: "rgba(168,85,247,0.18)",
    points: [
      "কিভাবে সব DISTRACTION বাদ দিয়ে DEEP FOCUS এ কাজ করবে",
      "কিভাবে একটা PROPER ROUTINE BUILD করবে",
      "কিভাবে CONSISTENCY MAINTAIN করবে",
      "কিভাবে DISCIPLINE এর মাধ্যমে অল্প সময়ে MASSIVE IMPROVEMENT আনবে",
    ],
    footer:
      "এই PHASE এ তুমি শিখবে কিভাবে নিজের MIND কে CONTROL করে একজন REAL ACTION TAKER হতে হয়",
  },
  {
    id: "03",
    title: "THE RECOVERY FRAMEWORK",
    subtitle: "নিজের সবথেকে শক্তিশালী VERSION কে ফিরিয়ে আনতে হবে এবার",
    Icon: HeartPulse,
    accentColor: "#10b981",
    glowColor: "rgba(16,185,129,0.18)",
    points: [
      "কিভাবে BRAIN FOG থেকে বের হয়ে MENTAL CLARITY ফিরিয়ে আনবে",
      "MASTURBATION এর কারণে হওয়া DAMAGE কিভাবে RECOVER করবে",
      "DOPAMINE ABUSE এর পর BRAIN & BODY কিভাবে REBUILD করবে",
      "কিভাবে আবার ENERGY আর MOTIVATION ফিরে পাবে",
    ],
    footer:
      "PORN আর MASTURBATION তোমার শরীরের ওপর যেই ক্ষতিগুলা করছে। সেগুলা ঠিক করতে হবে এই PHASE এ",
  },
  {
    id: "04",
    title: "MASCULINITY & PURPOSE BLUEPRINT",
    subtitle:
      "তুমি শুধু ADDICTION থেকে বের হওয়ার জন্য আসো নাই। তুমি আসছো নিজের STRONGEST VERSION এ TRANSFORM হওয়ার জন্য",
    Icon: Flame,
    accentColor: "#f59e0b",
    glowColor: "rgba(245,158,11,0.18)",
    points: [
      "কিভাবে WEAK MINDSET DESTROY করে POWERFUL MENTALITY BUILD করবে",
      "কিভাবে MASCULINE CONFIDENCE BUILD করবে",
      "কিভাবে PURPOSE-DRIVEN LIFE BUILD করবে",
      "কিভাবে নিজের EMOTIONS CONTROL করবে",
    ],
    footer:
      "তুমি যেন নিজেকে নিয়ে PROUD FEEL করতে পারো। আয়নার সামনে দাঁড়ালে যেনো লজ্জা না লাগে, সেই ব্যবস্থা করা হবে বস",
  },
];

/** Desktop icon badge with glow ring */
function IconBadgeDesktop({
  Icon,
  accentColor,
  glowColor,
}: {
  Icon: React.ElementType;
  accentColor: string;
  glowColor: string;
}) {
  return (
    <div
      className="flex h-[88px] w-[88px] items-center justify-center rounded-2xl border-2 bg-[#0e0e10] shrink-0"
      style={{
        borderColor: `${accentColor}55`,
        boxShadow: `0 0 0 5px ${glowColor}, 0 0 50px ${glowColor}, inset 0 0 24px ${glowColor}`,
      }}
    >
      <Icon
        size={44}
        strokeWidth={1.5}
        style={{
          color: accentColor,
          filter: `drop-shadow(0 0 12px ${accentColor}) drop-shadow(0 0 4px ${accentColor})`,
        }}
      />
    </div>
  );
}

/** Mobile icon badge with glow ring */
function IconBadgeMobile({
  Icon,
  accentColor,
  glowColor,
}: {
  Icon: React.ElementType;
  accentColor: string;
  glowColor: string;
}) {
  return (
    <div
      className="flex h-10 w-10 items-center justify-center rounded-xl border bg-[#0e0e10] shrink-0"
      style={{
        borderColor: `${accentColor}50`,
        boxShadow: `0 0 0 3px ${glowColor}, 0 0 24px ${glowColor}`,
      }}
    >
      <Icon
        size={20}
        strokeWidth={1.8}
        style={{
          color: accentColor,
          filter: `drop-shadow(0 0 6px ${accentColor})`,
        }}
      />
    </div>
  );
}

export function Modules() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const wrappers = gsap.utils.toArray<HTMLElement>(".card-wrapper");
      const isMobile = window.innerWidth < 768;
      const slideFrom = isMobile ? "95vh" : "100vh";
      const scrollMultiplier = isMobile ? 80 : 100;

      gsap.set(wrappers.slice(1), { y: slideFrom });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${wrappers.length * scrollMultiplier}%`,
          pin: true,
          scrub: 1,
          pinSpacing: true,
        },
      });

      wrappers.forEach((wrapper, i) => {
        if (i === 0) return;
        const syncLabel = `card-${i}`;

        tl.to(wrapper, { y: "0vh", ease: "none" }, syncLabel);

        for (let j = 0; j < i; j++) {
          const prevInner = wrappers[j].querySelector(".card-inner");
          const scaleStep = isMobile ? 0.04 : 0.05;
          const opacityStep = isMobile ? 0.08 : 0.1;

          tl.to(
            prevInner,
            {
              scale: 1 - (i - j) * scaleStep,
              opacity: 1 - (i - j) * opacityStep,
              filter: "blur(2px)",
              ease: "none",
            },
            syncLabel
          );
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <div className="bg-transparent w-full">
      {/* ── Header ── */}
      <section className="py-10 lg:py-18 text-center w-full">
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6">
          <h2 className="font-display font-medium text-4xl md:text-6xl mb-3 md:mb-4 text-white">
            ৩০-দিনের{" "}
            <span className="text-gradient-red font-bold font-display ">
              MASTERPLAN
            </span>
          </h2>
        </div>
      </section>

      {/* ── Pinned Stacking Cards ── */}
      <section
        ref={containerRef}
        className="relative flex items-center justify-center h-[100svh] w-full max-w-[1200px] mx-auto overflow-hidden px-3 md:px-6"
      >
        {modules.map((mod, i) => {
          const { Icon } = mod;
          return (
            <div
              key={mod.id}
              className="card-wrapper absolute inset-0 flex items-center justify-center w-full h-full px-4 md:px-0 will-change-transform"
              style={{ zIndex: i + 1 }}
            >
              <article
                className="card-inner relative w-full max-w-[1200px] origin-top flex flex-col md:flex-row overflow-hidden rounded-xl md:rounded-2xl will-change-transform border border-red-600/80 md:border-2 md:border-red-600"
                style={{
                  background: "#09090b",
                  top: `calc(-2vh + ${i * 16}px)`,
                  boxShadow: `0 20px 60px rgba(0,0,0,0.8), 0 0 80px ${mod.glowColor}`,
                }}
              >
                {/* Accent top-edge line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] z-20"
                  style={{
                    background: `linear-gradient(90deg, transparent, #ff3b3b, transparent)`,
                  }}
                />

                {/* ── MOBILE LAYOUT ── */}
                <div className="flex flex-col md:hidden w-full h-full">
                  {/* Top bar */}
                  <div className="flex items-center gap-3 px-4 pt-4 pb-3 bg-[#0c0c0e] border-b border-white/[0.06]">
                    <IconBadgeMobile
                      Icon={Icon}
                      accentColor={mod.accentColor}
                      glowColor={mod.glowColor}
                    />
                    <span
                      className="rounded-sm border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em]"
                      style={{
                        color: mod.accentColor,
                        borderColor: `${mod.accentColor}30`,
                        background: `${mod.accentColor}10`,
                      }}
                    >
                      Phase {mod.id}
                    </span>
                  </div>

                  {/* Title block */}
                  <div 
                    className="px-4 pt-4 pb-3 bg-[#0c0c0e] border-b"
                    style={{ borderColor: `${mod.accentColor}50` }}
                  >
                    <h3 
                      className="font-display text-xl font-bold uppercase leading-tight mb-2"
                      style={{ color: mod.accentColor }}
                    >
                      {mod.title}
                    </h3>
                    <p className="text-sm font-medium leading-relaxed text-slate-300/90">
                      {mod.subtitle}
                    </p>
                  </div>

                  {/* Points list */}
                  <div className="flex-1 overflow-y-auto px-4 py-3 bg-[#050505]">
                    <ul className="relative space-y-4">
                      <div className="absolute bottom-2 left-[16px] top-2 w-px bg-white/[0.08]" />
                      {mod.points.map((point, pIdx) => (
                        <li key={pIdx} className="relative flex items-start gap-4">
                          <div
                            className="relative z-10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0c0c0e] border border-white/10"
                            style={{ boxShadow: `0 0 0 3px ${mod.accentColor}15` }}
                          >
                            <span
                              className="text-sm font-bold"
                              style={{ color: mod.accentColor }}
                            >
                              {pIdx + 1}
                            </span>
                          </div>
                          <span className="pt-1 text-sm leading-relaxed text-slate-200 font-medium">
                            {point.split(/([A-Za-z0-9&]+(?:[-\s]+[A-Za-z0-9&]+)*)/g).map((part, i) => {
                              if (/^[A-Za-z0-9&]/.test(part)) {
                                return (
                                  <span
                                    key={i}
                                    className="font-display font-bold uppercase mx-1"
                                    style={{ color: mod.accentColor }}
                                  >
                                    {part}
                                  </span>
                                );
                              }
                              return <span key={i}>{part}</span>;
                            })}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {mod.footer && (
                      <div 
                        className="mt-4 mb-2 p-3 rounded-lg bg-[#121214] border"
                        style={{ borderColor: `${mod.accentColor}50` }}
                      >
                        <p className="text-slate-300 text-sm font-medium leading-relaxed italic">
                          "{mod.footer}"
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* ── DESKTOP LAYOUT ── */}
                {/* Left panel */}
                <div 
                  className="hidden md:relative md:flex w-full flex-col justify-between border-b p-8 md:w-[40%] md:border-b-0 md:border-r md:p-12 md:pr-16 lg:p-16 lg:pr-24 bg-[#0c0c0e]"
                  style={{ borderColor: `${mod.accentColor}50` }}
                >
                  <div className="mb-10 flex items-center justify-between">
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
                    <IconBadgeDesktop
                      Icon={Icon}
                      accentColor={mod.accentColor}
                      glowColor={mod.glowColor}
                    />
                  </div>

                  <div>
                    <h3 
                      className="mb-4 font-display text-3xl uppercase font-bold leading-tight md:text-[2.2rem] lg:text-[2.8rem]"
                      style={{ color: mod.accentColor }}
                    >
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

                {/* Right panel */}
                <div className="hidden md:flex w-full items-center p-8 md:w-[60%] md:p-12 lg:p-16 bg-[#050505]">
                  <div className="w-full">
                    <ul className="relative w-full space-y-10">
                      <div className="absolute bottom-5 left-[22px] top-5 w-px bg-white/[0.08]" />
                      {mod.points.map((point, pIdx) => (
                        <li key={pIdx} className="relative flex items-start gap-7">
                          <div
                            className="relative z-10 mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0c0c0e] border border-white/10 shadow-xl"
                            style={{ boxShadow: `0 0 0 4px ${mod.accentColor}15` }}
                          >
                            <span
                              className="text-lg font-bold"
                              style={{ color: mod.accentColor }}
                            >
                              {pIdx + 1}
                            </span>
                          </div>
                          <span className="pt-2 text-[17px] md:text-[19px] leading-relaxed text-slate-200 font-medium tracking-wide">
                            {point.split(/([A-Za-z0-9&]+(?:[-\s]+[A-Za-z0-9&]+)*)/g).map((part, i) => {
                              if (/^[A-Za-z0-9&]/.test(part)) {
                                return (
                                  <span
                                    key={i}
                                    className="font-display font-bold uppercase mx-1"
                                    style={{ color: mod.accentColor }}
                                  >
                                    {part}
                                  </span>
                                );
                              }
                              return <span key={i}>{part}</span>;
                            })}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {mod.footer && (
                      <div 
                        className="mt-12 p-6 rounded-xl bg-[#121214] border"
                        style={{ borderColor: `${mod.accentColor}50` }}
                      >
                        <p className="text-slate-300 text-lg font-medium leading-relaxed italic">
                          "{mod.footer}"
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </section>
    </div>
  );
}