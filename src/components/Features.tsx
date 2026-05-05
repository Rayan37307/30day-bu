import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Package, ShieldCheck, Wallet, BadgeCheck, Ship, Sparkles, RotateCcw } from 'lucide-react';

export function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="w-full py-24 bg-transparent relative overflow-hidden" id="features">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-red-500 mb-4"
          >
            কেন আমাদের বেছে নিবেন?
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl text-white mb-6"
          >
            আপনার সফলতার জন্য <span className="text-red-500 font-display curly-underline">সবকিছু</span> এক জায়গায়
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Card 1: Privacy/Judgment-Free */}
          <motion.section
            variants={itemVariants}
            className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 md:p-8 hover:border-red-500/30 transition duration-300 group"
          >
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
              <svg className="h-full w-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid1" width="24" height="24" patternUnits="userSpaceOnUse">
                    <path d="M24 0H0V24" stroke="#ef4444" strokeOpacity="0.25" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="400" height="300" fill="url(#grid1)" />
              </svg>
            </div>
            <div className="relative z-10">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-red-500/10 ring-1 ring-red-500/30 group-hover:scale-110 transition-transform">
                <ShieldCheck className="h-5 w-5 text-red-500 stroke-[1.5]" />
              </div>
              <h3 className="text-xl md:text-2xl tracking-tight font-display text-white">
                জাজমেন্ট-ফ্রি জোন।<br /><span className="text-red-500 font-display curly-underline">নিরাপদ রিকভারি।</span>
              </h3>
              <p className="mt-3 text-sm md:text-base text-slate-400 font-sans">
                আপনার প্রাইভেসি আমাদের কাছে সবচেয়ে গুরুত্বপূর্ণ। সম্পূর্ণ জাজমেন্ট-ফ্রি এবং নিরাপদ পরিবেশে আপনার রিকভারি এবং পার্সোনাল গ্রোথের সাপোর্ট পান।
              </p>
            </div>
          </motion.section>

          {/* Card 2: Neuroscience/Psychology */}
          <motion.section
            variants={itemVariants}
            className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 md:p-8 hover:border-red-500/30 transition duration-300 group"
          >
             <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
              <svg className="h-full w-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="200" cy="150" r="70" stroke="#ef4444" strokeOpacity="0.35" strokeWidth="1.2" fill="none" />
                <circle cx="200" cy="150" r="36" stroke="#ef4444" strokeOpacity="0.45" strokeWidth="1.2" fill="none" />
              </svg>
            </div>
            <div className="relative z-10">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-red-500/10 ring-1 ring-red-500/30 group-hover:scale-110 transition-transform">
                <Sparkles className="h-5 w-5 text-red-500 stroke-[1.5]" />
              </div>
              <h3 className="text-xl md:text-2xl tracking-tight font-display text-white">
                সাইকোলজি-বেসড সল্যুশন।<br /><span className="text-red-500 font-display curly-underline">ব্রেইন রিবুট।</span>
              </h3>
              <p className="mt-3 text-sm md:text-base text-slate-400 font-sans">
                শুধুমাত্র মোটিভেশন নয়, আসক্তি দূর করতে এবং ব্রেইনকে রিওয়্যার করতে নিউরোসায়েন্স-সমর্থিত ফ্রেমওয়ার্ক ব্যবহার করা হয়েছে।
              </p>
            </div>
          </motion.section>

          {/* Card 3: Productivity/GTD */}
          <motion.section
            variants={itemVariants}
            className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 md:p-8 hover:border-red-500/30 transition duration-300 group"
          >
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
              <svg className="h-full w-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 210C100 160 170 170 220 130C270 90 320 100 350 70" stroke="#ef4444" strokeOpacity="0.35" strokeWidth="1.2" fill="none" />
              </svg>
            </div>
            <div className="relative z-10">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-red-500/10 ring-1 ring-red-500/30 group-hover:scale-110 transition-transform">
                <Globe2 className="h-5 w-5 text-red-500 stroke-[1.5]" />
              </div>
              <h3 className="text-xl md:text-2xl tracking-tight font-display text-white">
                স্মার্ট প্রোডাক্টিভিটি।<br /><span className="text-red-500 font-display curly-underline">সহজ সমাধান।</span>
              </h3>
              <p className="mt-3 text-sm md:text-base text-slate-400 font-sans">
                Getting Things Done (GTD) মেথড এবং টাইম-ব্লকিং এর মতো প্রুভেন সিস্টেম শিখে আপনার কাজের গতি এবং ফোকাস বহুগুণ বাড়িয়ে নিন।
              </p>
            </div>
          </motion.section>

          {/* Card 4: Lifetime Access */}
          <motion.section
            variants={itemVariants}
            className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 md:p-8 hover:border-red-500/30 transition duration-300 group"
          >
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
              <svg className="h-full w-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 180C60 120 120 180 160 160C200 140 230 150 260 120" stroke="#ef4444" strokeOpacity="0.45" strokeWidth="1.6" fill="none" />
              </svg>
            </div>
            <div className="relative z-10">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-red-500/10 ring-1 ring-red-500/30 group-hover:scale-110 transition-transform">
                <RotateCcw className="h-5 w-5 text-red-500 stroke-[1.5]" />
              </div>
              <h3 className="text-xl md:text-2xl tracking-tight font-display text-white">
                লাইফটাইম অ্যাক্সেস।<br /><span className="text-red-500 font-display curly-underline">কোনো রিস্ক নেই।</span>
              </h3>
              <p className="mt-3 text-sm md:text-base text-slate-400 font-sans">
                একবার এনরোল করুন এবং আজীবন কোর্সের সকল রিসোর্স, ফিউচার আপডেট এবং এক্সক্লুসিভ কমিউনিটি সাপোর্ট উপভোগ করুন।
              </p>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </section>
  );
}
