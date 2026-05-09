import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, BrainCircuit, Zap, Code, PlayCircle, TrendingUp, Infinity } from 'lucide-react';
import { Button } from "./Button";

export function Features() {
  return (
    <section className="sm:px-6 lg:px-8 md:pb-24 lg:pt-24 max-w-[1200px] mx-auto pt-8 pr-4 pb-16 pl-4 relative z-10" id="features">
      
      {/* Background Orbs for Glassmorphism effect */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none -z-10 translate-y-[-50%] -translate-x-1/2" />
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-red-600/5 blur-[150px] rounded-full pointer-events-none -z-10 translate-x-1/3" />
      

      {/* Heading */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-center"
      >
        <h2 className="mx-auto max-w-4xl font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter text-white leading-[1.1]">
          আপনার সফলতার জন্য <span className="text-gradient-red">সবকিছু</span> এক জায়গায়
        </h2>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10 items-center justify-center">
          <Button as="a" href="#pricing">
            এনরোল করুন
          </Button>
          
          <div className="inline-block group relative">
            <a href="#product" className="inline-flex gap-2 text-sm font-bold text-white/80 glass-light rounded-full px-8 py-3.5 items-center hover:bg-white/10 transition-all">
              <PlayCircle size={18} className="text-red-500 opacity-80" />
              কারিকুলাম দেখুন
            </a>
            <span className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 rounded-full opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" style={{ background: "radial-gradient(60% 100% at 50% 50%, rgba(239,68,68,0.4), rgba(239,68,68,0.1) 35%, transparent 70%)", filter: "blur(10px) saturate(120%)" }} aria-hidden="true"></span>
          </div>
        </div>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 relative">
        
        {/* Card 1: Science-Based */}
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="group relative overflow-hidden rounded-2xl bg-[#09090b] border border-red-900/30 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-red-600/50"
        >
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-xl bg-red-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <BrainCircuit className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-2xl tracking-tight font-display text-white mb-4">সাইন্স-ভিত্তিক সল্যুশন</h3>
            <p className="leading-relaxed text-slate-400 text-base font-sans">
              ব্রেইন রিওয়্যার এবং নিউরোসায়েন্স-সমর্থিত ফ্রেমওয়ার্ক দিয়ে চিরতরে আসক্তি দূর করুন এবং নিজের ব্রেইনকে আবার টিউন করুন।
            </p>
          </div>
          {/* Subtle Glow */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-red-600/5 blur-3xl rounded-full group-hover:bg-red-600/10 transition-colors"></div>
        </motion.article>

        {/* Card 2: Lifetime Access */}
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="group relative overflow-hidden rounded-2xl bg-[#09090b] border border-red-900/30 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-red-600/50"
        >
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-xl bg-red-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Infinity className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-display tracking-tight text-white mb-4">লাইফটাইম অ্যাক্সেস</h3>
            <p className="leading-relaxed text-slate-400 text-base font-sans">
              একবার এনরোল করুন, আজীবন ফিউচার আপডেট এবং সব নতুন কন্টেন্ট উপভোগ করুন কোনো এক্সট্রা পেমেন্ট ছাড়াই।
            </p>
          </div>
          {/* Subtle Glow */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-red-600/5 blur-3xl rounded-full group-hover:bg-red-600/10 transition-colors"></div>
        </motion.article>

        {/* Card 3: Private Community */}
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="group relative overflow-hidden rounded-2xl bg-[#09090b] border border-red-900/30 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-red-600/50"
        >
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-xl bg-red-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-display tracking-tight text-white mb-4">প্রাইভেট কমিউনিটি অ্যাক্সেস</h3>
            <p className="leading-relaxed text-slate-400 text-base font-sans">
              একই লক্ষ্যে এগিয়ে চলা হাজারো 'Action Takers'-দের সাথে যুক্ত হোন এবং যেকোনো সমস্যায় ২৪/৭ সাপোর্ট পান।
            </p>
          </div>
          {/* Subtle Glow */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-red-600/5 blur-3xl rounded-full group-hover:bg-red-600/10 transition-colors"></div>
        </motion.article>

      </div>
    </section>
  );
}
