"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  BrainCircuit,
  Infinity,
  PlayCircle,
  Zap,
  Users,
  BadgeCheck,
  ArrowRight,
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
    accent: "#ef4444",
    glow: "rgba(239,68,68,0.18)",
    stat: "১০০%",
    statLabel: "বৈজ্ঞানিক পদ্ধতি",
  },
  {
    Icon: Infinity,
    label: "একবার পেমেন্ট",
    title: "লাইফটাইম অ্যাক্সেস",
    body: "একবার এনরোল করুন, আজীবন ফিউচার আপডেট এবং সব নতুন কন্টেন্ট উপভোগ করুন — কোনো এক্সট্রা পেমেন্ট ছাড়াই।",
    accent: "#f59e0b",
    glow: "rgba(245,158,11,0.18)",
    stat: "∞",
    statLabel: "আজীবন আপডেট",
  },
  {
    Icon: ShieldCheck,
    label: "একা না",
    title: "প্রাইভেট কমিউনিটি",
    body: "একই লক্ষ্যে এগিয়ে চলা হাজারো 'Action Takers'-দের সাথে যুক্ত হোন এবং যেকোনো সমস্যায় ২৪/৭ সাপোর্ট পান।",
    accent: "#10b981",
    glow: "rgba(16,185,129,0.18)",
    stat: "৫০০০+",
    statLabel: "অ্যাক্টিভ মেম্বার",
  },
];

/* ─────────────────────────────────────────
   Trust badges
───────────────────────────────────────── */
const badges = [
  { Icon: BadgeCheck, text: "৩০-দিনের মানি-ব্যাক গ্যারান্টি" },
  { Icon: Users, text: "৫০০০+ সফল স্টুডেন্ট" },
  { Icon: Zap, text: "তাৎক্ষণিক অ্যাক্সেস" },
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
   Component
───────────────────────────────────────── */
export function Features() {
  return (
    <section
      id="features"
      className="relative z-10 overflow-hidden px-4 pt-16 pb-20 sm:px-6 md:pb-28 lg:px-8 lg:pt-24 max-w-[1200px] mx-auto"
    >
      {/* ── Background atmosphere ── */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Red pulse left */}
        <div className="absolute top-1/2 -left-32 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-red-600/6 blur-[140px]" />
        {/* Amber pulse right */}
        <div className="absolute top-1/4 -right-24 h-[500px] w-[500px] rounded-full bg-amber-500/5 blur-[120px]" />
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
          আপনার সফলতার জন্য{" "}
          <span className="relative inline-block">
            <span className="text-gradient-red">সবকিছু</span>
            {/* Underline glow */}
            <span
              className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #ef4444, transparent)",
                filter: "blur(2px)",
              }}
            />
          </span>{" "}
          এক জায়গায়
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-slate-400">
          তোমার জীবন বদলে দেওয়ার জন্য দরকার শুধু একটা সিদ্ধান্ত। বাকি সব আমরা দিচ্ছি।
        </p>

        {/* ── CTAs ── */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button as="a" href="#pricing">
            এনরোল করুন
          </Button>
        </div>

        {/* ── Trust badges ── */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
          {badges.map(({ Icon, text }, i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.04] px-4 py-2"
            >
              <Icon size={14} className="text-red-400 shrink-0" />
              <span className="text-xs font-medium text-slate-300">{text}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Feature Cards ── */}
      <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
        {features.map((feat, i) => (
          <motion.article
            key={i}
            {...fadeUp(0.15 + i * 0.1)}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0a0a0c] transition-all duration-500 hover:-translate-y-1.5"
            style={{
              boxShadow: `0 0 0 0 ${feat.glow}`,
            }}
            whileHover={{
              boxShadow: `0 0 60px ${feat.glow}`,
            }}
          >
            {/* Top accent stripe */}
            <div
              className="h-[2px] w-full shrink-0"
              style={{
                background: `linear-gradient(90deg, transparent, ${feat.accent}, transparent)`,
              }}
            />

            <div className="flex flex-1 flex-col p-7 lg:p-8">
              {/* Icon + label row */}
              <div className="mb-6 flex items-start justify-between">
                {/* Glowing icon badge */}
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-xl border bg-[#0e0e11] transition-transform duration-300 group-hover:scale-105"
                  style={{
                    borderColor: `${feat.accent}35`,
                    boxShadow: `0 0 0 4px ${feat.glow}, inset 0 0 16px ${feat.glow}`,
                  }}
                >
                  <feat.Icon
                    size={28}
                    strokeWidth={1.5}
                    style={{
                      color: feat.accent,
                      filter: `drop-shadow(0 0 8px ${feat.accent})`,
                    }}
                  />
                </div>

                {/* Pill label */}
                <span
                  className="rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em]"
                  style={{
                    color: feat.accent,
                    borderColor: `${feat.accent}28`,
                    background: `${feat.accent}0d`,
                  }}
                >
                  {feat.label}
                </span>
              </div>

              {/* Stat callout */}
              <div className="mb-4 flex items-baseline gap-2">
                <span
                  className="font-display text-4xl font-bold leading-none"
                  style={{ color: feat.accent }}
                >
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

              {/* Bottom divider + micro CTA */}
              <div className="mt-6 flex items-center gap-2 border-t border-white/[0.06] pt-5">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: feat.accent }}
                />
                <span className="text-xs font-semibold text-slate-400 group-hover:text-white transition-colors">
                  আরও জানুন
                </span>
                <ArrowRight
                  size={12}
                  className="text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-all"
                />
              </div>
            </div>

            {/* Corner glow blob */}
            <div
              className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: feat.accent }}
            />
          </motion.article>
        ))}
      </div>

      {/* ── Bottom Banner CTA ── */}
      <motion.div
        {...fadeUp(0.5)}
        className="relative mt-12 overflow-hidden rounded-2xl border border-red-900/30 bg-gradient-to-br from-[#120808] via-[#0d0505] to-[#09090b] p-8 sm:p-10 lg:p-12"
      >
        {/* Glow pulse behind */}
        <div className="pointer-events-none absolute -top-20 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[80px]" />

        <div className="relative z-10 flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left sm:gap-10">
          {/* Left copy */}
          <div className="flex-1">
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-red-400">
              সীমিত আসন বাকি আছে
            </p>
            <h3 className="font-display text-2xl font-bold text-white sm:text-3xl leading-tight">
              আজই শুরু করো। কালকের অপেক্ষা করো না।
            </h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed max-w-md">
              প্রতিটি দিন দেরি করলে, প্রতিটি দিন তুমি নিজের থেকে আরও দূরে সরে যাচ্ছ।
            </p>
          </div>

          {/* Right action */}
          <div className="flex shrink-0 flex-col items-center gap-3">
            <Button as="a" href="#pricing">
              এখনই এনরোল করুন
            </Button>
            <p className="text-xs text-slate-500">
              ৩০-দিনের মানি-ব্যাক গ্যারান্টি সহ
            </p>
          </div>
        </div>

        {/* Left border accent */}
        <div className="absolute left-0 top-8 bottom-8 w-[3px] rounded-full bg-gradient-to-b from-transparent via-red-500 to-transparent" />
      </motion.div>
    </section>
  );
}