import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, BrainCircuit, Zap, Code, PlayCircle, TrendingUp, Infinity } from 'lucide-react';

export function Features() {
  return (
    <section className="sm:px-6 lg:px-8 md:pb-24 lg:pt-24 max-w-[1200px] mx-auto pt-8 pr-4 pb-16 pl-4 relative z-10" id="features">
      
      {/* Pill */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto w-fit mb-6"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-300 backdrop-blur-sm">
          <span className="inline-flex items-center justify-center rounded-full bg-red-500/20 text-red-500 px-2 py-0.5 font-bold">
            নতুন ব্যাচ
          </span>
          <span className="font-medium tracking-widest uppercase text-[10px]">কেন আমাদের বেছে নিবেন?</span>
        </div>
      </motion.div>

      {/* Heading */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-center"
      >
        <h2 className="mx-auto max-w-4xl font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter text-white leading-[1.1]">
          আপনার সফলতার জন্য <span className="text-red-500 curly-underline">সবকিছু</span> এক জায়গায়
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-slate-400 font-medium leading-relaxed">
          শুধুমাত্র হাওয়ায় ভাসা মোটিভেশন নয়, বরং নিউরোসায়েন্স এবং প্রুভেন সিস্টেমের মাধ্যমে নিজেকে নতুন করে আবিষ্কার করুন।
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10 items-center justify-center">
          <a href="#pricing" className="inline-flex items-center gap-2 rounded-lg bg-white text-neutral-900 px-8 py-3.5 text-sm font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 transition-all">
            এনরোল করুন
          </a>
          
          <div className="inline-block group relative">
            <a href="#product" className="inline-flex gap-2 border border-white/10 hover:border-white/20 hover:text-white transition-all hover:-translate-y-0.5 text-sm font-bold text-white/80 bg-white/5 rounded-lg px-8 py-3.5 backdrop-blur-xl items-center">
              <PlayCircle size={18} className="text-red-500 opacity-80" />
              কারিকুলাম দেখুন
            </a>
            <span className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 rounded-full opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" style={{ background: "radial-gradient(60% 100% at 50% 50%, rgba(239,68,68,0.4), rgba(239,68,68,0.1) 35%, transparent 70%)", filter: "blur(10px) saturate(120%)" }} aria-hidden="true"></span>
          </div>
        </div>
      </motion.div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 auto-rows-[220px] md:mt-16 md:grid-cols-6 lg:grid-cols-12 overflow-hidden mt-16 gap-5 relative">
        
        {/* Orbit Card: Psychology */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="group relative overflow-hidden border border-white/10 rounded-3xl md:col-span-3 lg:col-span-4 md:row-span-2 bg-gradient-to-bl from-white/[0.03] to-transparent backdrop-blur-sm hover:border-white/20 transition-all duration-500 hover:-translate-y-1"
        >
          <div className="relative h-full overflow-hidden flex flex-col">
            <div className="flex-1 relative overflow-hidden">
              <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/20 animate-pulse" style={{ animationDelay: "0s" }}></div>
                <div className="absolute left-1/2 top-1/2 h-[160px] w-[160px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/20 animate-pulse" style={{ animationDelay: "0.6s" }}></div>
                <div className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/10 animate-pulse" style={{ animationDelay: "1.2s" }}></div>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md transition-transform duration-300 group-hover:scale-110 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                  <BrainCircuit className="h-10 w-10 text-electric-blue" />
                </div>
              </div>
            </div>
            <div className="relative border-t border-white/5 bg-black/20">
              <div className="p-6">
                <h3 className="text-xl tracking-tight font-display text-white">সাইকোলজি-বেসড সল্যুশন</h3>
                <p className="leading-relaxed text-slate-400 mt-2 text-sm font-sans">
                  ব্রেইন রিওয়্যার এবং নিউরোসায়েন্স-সমর্থিত ফ্রেমওয়ার্ক দিয়ে চিরতরে আসক্তি দূর করুন।
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Code Card: Lifetime Access */}
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="overflow-hidden border border-white/10 rounded-3xl relative md:col-span-3 lg:col-span-4 md:row-span-2 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-sm hover:border-white/20 transition-all duration-500 hover:-translate-y-1"
        >
          <div className="h-full p-6 relative flex flex-col">
            <div className="relative mx-auto h-full w-full flex items-center justify-center flex-1 overflow-hidden">
              <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-green-500/20 animate-pulse" style={{ animationDelay: "0s" }}></div>
                <div className="absolute left-1/2 top-1/2 h-[140px] w-[140px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-green-500/20 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-green-500/10 animate-pulse" style={{ animationDelay: "1s" }}></div>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-green-500/30 bg-green-500/10 backdrop-blur-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-180 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                  <Infinity className="h-10 w-10 text-green-400" />
                </div>
              </div>
            </div>
            <div className="relative pt-4">
              <h3 className="text-xl font-display tracking-tight text-white">লাইফটাইম অ্যাক্সেস</h3>
              <p className="mt-2 text-sm text-slate-400 font-sans">একবার এনরোল করুন, আজীবন ফিউচার আপডেট উপভোগ করুন কোনো রিস্ক ছাড়াই।</p>
            </div>
          </div>
        </motion.article>

        {/* Stat Card: Productivity */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="rounded-3xl border border-white/10 p-6 md:col-span-6 lg:col-span-4 md:row-span-1 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.04] transition-all duration-500 flex flex-col justify-center relative overflow-hidden group hover:-translate-y-1 hover:border-white/20"
        >
          <div className="absolute right-0 top-0 w-40 h-40 bg-white/5 blur-3xl rounded-full -z-10 group-hover:bg-white/10 transition-colors duration-500"></div>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-5xl font-display tracking-tighter text-white drop-shadow-md">10x</p>
              <p className="mt-2 text-sm text-slate-300 font-medium">স্মার্ট প্রোডাক্টিভিটি</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              <Zap className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-red-400 bg-red-500/10 w-fit px-3 py-1.5 rounded-full border border-red-500/20">
            <TrendingUp size={14} />
            <span className="text-xs font-bold tracking-wider">GTD Framework</span>
          </div>
        </motion.div>

        {/* Testimonial/Privacy Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col justify-between rounded-3xl border border-white/10 p-6 backdrop-blur-sm md:col-span-6 lg:col-span-4 md:row-span-1 bg-gradient-to-tr from-white/[0.02] to-white/[0.05] hover:border-white/20 transition-all duration-500 group hover:-translate-y-1"
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all">
                <ShieldCheck className="h-5 w-5 text-red-500" />
              </div>
              <div>
                <h3 className="text-lg font-display text-white">জাজমেন্ট-ফ্রি জোন</h3>
                <p className="text-[11px] text-slate-400 uppercase tracking-widest font-bold">100% Privacy</p>
              </div>
            </div>
          </div>
          <p className="leading-relaxed text-sm font-medium text-slate-300 font-sans">
            "আপনার প্রাইভেসি আমাদের কাছে সবচেয়ে গুরুত্বপূর্ণ। সম্পূর্ণ নিরাপদ পরিবেশে আপনার রিকভারি এবং পার্সোনাল গ্রোথের সাপোর্ট পান।"
          </p>
        </motion.div>

      </div>
    </section>
  );
}
