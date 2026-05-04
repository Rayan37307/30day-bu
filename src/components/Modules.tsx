import { useRef } from "react";
import { Brain, Video, Cpu, Rocket } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function Modules() {
  const containerRef = useRef<HTMLDivElement>(null);

  const modules = [
    {
      id: "01",
      title: "দ্য ইনার গেম",
      subtitle: "দিন ১-৭: প্যাশন এবং প্রোডাক্টিভিটি",
      icon: <Brain className="text-blue-400" size={28} strokeWidth={1.5} />,
      accentColor: "#3b82f6",
      accentBg: "rgba(59,130,246,0.08)",
      glowColor: "rgba(59,130,246,0.15)",
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

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".module-card");

      cards.forEach((card, i) => {
        const isLast = i === cards.length - 1;
        const stickyOffset = 300 + i * 20;

        // Pin the card using GSAP ScrollTrigger
        ScrollTrigger.create({
          trigger: card,
          start: `top ${stickyOffset}px`,
          endTrigger: containerRef.current,
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
          id: `pin-${i}`,
        });

        // Scale down + fade as subsequent cards stack on top
        if (!isLast) {
          gsap.to(card, {
            scale: 0.94,
            opacity: 0.4,
            ease: "none",
            scrollTrigger: {
              trigger: cards[i + 1],
              start: `top ${140 + (i + 1) * 20 + 100}px`,
              end: `top ${140 + (i + 1) * 20}px`,
              scrub: true,
            },
          });
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <section className="relative w-full max-w-[940px] mx-auto px-6 pt-48 pb-32">
      {/* Section Header */}
      <div className="text-center mb-32">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/30 mb-4">
          কোর্স কারিকুলাম
        </p>
        <h2 className="font-display font-medium text-4xl md:text-5xl mb-4 text-white">
          ৩০-দিনের{" "}
          <span className="text-electric-blue font-bold">রোডম্যাপ</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-lg pt-2 leading-relaxed">
          প্রতিদিন নতুন কিছু শিখুন। নিচে কোর্সের ৪টি ধাপের ব্রেকডাউন দেওয়া
          হলো।
        </p>
      </div>

      {/* Stacking Cards — GSAP handles the pinning and stacking */}
      <div ref={containerRef} className="relative flex flex-col gap-10 pb-[60vh]">
        {modules.map((mod, idx) => (
          <div
            key={mod.id}
            className="module-card relative w-full will-change-transform"
            style={{
              zIndex: idx + 1,
              transformOrigin: "center top",
            }}
          >
            <div
              className="relative overflow-hidden rounded-[28px] border border-white/[0.06] bg-[#0a0a0d] flex flex-col md:flex-row"
              style={{
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
                className="relative w-full md:w-[42%] p-10 md:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/[0.05]"
                style={{ background: mod.accentBg }}
              >
                <div className="flex items-center justify-between mb-10">
                  <span
                    className="text-[11px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full border"
                    style={{
                      color: mod.accentColor,
                      borderColor: `${mod.accentColor}30`,
                      background: `${mod.accentColor}10`,
                    }}
                  >
                    Module {mod.id}
                  </span>
                  <div
                    className="w-11 h-11 rounded-2xl border border-white/10 flex items-center justify-center"
                    style={{ background: `${mod.accentColor}15` }}
                  >
                    {mod.icon}
                  </div>
                </div>

                <div>
                  <h3 className="font-display font-semibold text-2xl md:text-[1.65rem] text-white leading-tight mb-3">
                    {mod.title}
                  </h3>
                  <p className="text-slate-400 text-[14px] leading-relaxed">
                    {mod.subtitle}
                  </p>
                </div>

                <div
                  className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none"
                  style={{ background: mod.accentColor }}
                />
              </div>

              {/* Right panel — steps */}
              <div className="w-full md:w-[58%] p-10 md:p-12 flex items-center">
                <ul className="w-full space-y-7 relative">
                  <div className="absolute left-[18px] top-5 bottom-5 w-px bg-white/[0.06]" />
                  {mod.points.map((point, pIdx) => (
                    <li
                      key={pIdx}
                      className="flex items-start gap-5 relative"
                    >
                      <div
                        className="relative z-10 mt-0.5 w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border border-white/[0.07] bg-[#0e0e12]"
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
                      <span className="text-slate-300 text-[14.5px] leading-relaxed pt-1.5">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}