"use client";

import React, { MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import {
  ShieldCheck,
  BrainCircuit,
  Infinity,
} from "lucide-react";
import { Button } from "./Button";

/* ─────────────────────────────────────────
   Feature card data
───────────────────────────────────────── */
const features = [
  {
    Icon: BrainCircuit,
    label: "নিউরোসায়েন্স-সমর্থিত",
    title: "সাইন্স-ভিত্তিক সল্যুশন",
    body: "ব্রেইন রিওয়্যার এবং নিউরোসায়েন্স-সমর্থিত ফ্রেমওয়ার্ক দিয়ে চিরতরে আসক্তি দূর করুন এবং নিজের ব্রেইনকে আবার টিউন করুন।",
    stat: "১০০%",
    statLabel: "বৈজ্ঞানিক পদ্ধতি",
  },
  {
    Icon: Infinity,
    label: "একবার পেমেন্ট",
    title: "লাইফটাইম অ্যাক্সেস",
    body: "একবার এনরোল করুন, আজীবন ফিউচার আপডেট এবং সব নতুন কন্টেন্ট উপভোগ করুন — কোনো এক্সট্রা পেমেন্ট ছাড়াই।",
    stat: "∞",
    statLabel: "আজীবন আপডেট",
  },
  {
    Icon: ShieldCheck,
    label: "একা না",
    title: "প্রাইভেট কমিউনিটি",
    body: "একই লক্ষ্যে এগিয়ে চলা হাজারো 'Action Takers'-দের সাথে যুক্ত হোন এবং যেকোনো সমস্যায় ২৪/৭ সাপোর্ট পান।",
    stat: "৫০০০+",
    statLabel: "অ্যাক্টিভ মেম্বার",
  },
];

/* ─────────────────────────────────────────
   Animation variants
───────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: "easeOut" as const, delay },
});

/* ─────────────────────────────────────────
   FeatureCard Component
───────────────────────────────────────── */
function FeatureCard({ feat, index }: { feat: typeof features[0], index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useMotionValue(0), { damping: 40, stiffness: 200 });
  const rotateY = useSpring(useMotionValue(0), { damping: 40, stiffness: 200 });

  function handleMouseMove(currentTarget: EventTarget & HTMLElement, clientX: number, clientY: number) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    
    const x = clientX - left;
    const y = clientY - top;
    
    mouseX.set(x);
    mouseY.set(y);
    
    // Subtle 3D tilt calculation (-4 to 4 degrees)
    const rX = -((y / height) - 0.5) * 8;
    const rY = ((x / width) - 0.5) * 8;
    
    rotateX.set(rX);
    rotateY.set(rY);
  }

  function handleTouchMove(e: React.TouchEvent<HTMLElement>) {
    const touch = e.touches[0];
    handleMouseMove(e.currentTarget, touch.clientX, touch.clientY);
  }

  function onMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.article
      {...fadeUp(0.15 + index * 0.1)}
      onMouseMove={(e) => handleMouseMove(e.currentTarget, e.clientX, e.clientY)}
      onTouchMove={handleTouchMove}
      onMouseLeave={onMouseLeave}
      onTouchEnd={onMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-red-500/30 bg-gradient-to-b from-red-950/20 to-transparent backdrop-blur-md transition-colors duration-500 hover:border-red-500/80 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]"
    >
      {/* Interactive Glow following cursor/thumb */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(239, 68, 68, 0.12),
              transparent 80%
            )
          `,
        }}
      />

      <div className="flex flex-1 flex-col p-7 lg:p-8 relative z-10" style={{ transform: "translateZ(30px)" }}>
        {/* Icon + label row */}
        <div className="mb-6 flex items-start justify-between">
          {/* Minimal icon badge */}
          <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-black/50 transition-transform duration-300 group-hover:scale-105">
            <feat.Icon
              size={24}
              strokeWidth={1.5}
              className="text-white/80"
            />
          </div>

          {/* Pill label */}
          <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/60 bg-white/5">
            {feat.label}
          </span>
        </div>

        {/* Stat callout */}
        <div className="mb-4 flex items-baseline gap-2">
          <span className="font-display text-4xl font-bold leading-none text-white">
            {feat.stat}
          </span>
          <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
            {feat.statLabel}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-3 font-display text-xl font-bold tracking-tight text-white lg:text-2xl">
          {feat.title}
        </h3>

        {/* Body */}
        <p className="flex-1 text-sm leading-relaxed text-slate-400 lg:text-[15px]">
          {feat.body}
        </p>
      </div>
    </motion.article>
  );
}

/* ─────────────────────────────────────────
   Component
───────────────────────────────────────── */
export function Features() {
  return (
    <section
      id="features"
      className="relative z-10 overflow-hidden px-4 sm:px-6 lg:px-8 py-10 lg:py-18 max-w-[1200px] mx-auto"
      style={{ perspective: 1500 }}
    >
      {/* ── Background atmosphere ── */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ── Eyebrow + Headline ── */}
      <motion.div {...fadeUp(0.05)} className="text-center">
        <h2 className="mx-auto max-w-4xl font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter text-white leading-[1.08]">
          এবার <span className="text-red-500">খেলা</span> হবে
        </h2>
      </motion.div>

      {/* ── Feature Cards ── */}
      <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
        {features.map((feat, i) => (
          <FeatureCard key={i} feat={feat} index={i} />
        ))}
      </div>
    </section>
  );
}