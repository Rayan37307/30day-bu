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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6"
        >
          {/* Card A */}
          <motion.section
            variants={itemVariants}
            className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 md:p-8 lg:col-span-2 hover:border-red-500/30 hover:from-red-500/20 hover:to-red-900/50 transition duration-300 group"
          >
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
              <svg className="h-full w-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="gridA" width="24" height="24" patternUnits="userSpaceOnUse">
                    <path d="M24 0H0V24" stroke="#ef4444" strokeOpacity="0.25" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="400" height="300" fill="url(#gridA)" />
                <circle cx="60" cy="90" r="2" fill="#ef4444" />
                <circle cx="210" cy="60" r="2" fill="#ef4444" />
                <circle cx="320" cy="140" r="2" fill="#ef4444" />
                <path d="M50 210C100 160 170 170 220 130C270 90 320 100 350 70" stroke="#ef4444" strokeOpacity="0.35" strokeWidth="1.2" fill="none" />
              </svg>
            </div>
            <div className="relative z-10">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-red-500/10 ring-1 ring-red-500/30 group-hover:scale-110 transition-transform">
                <Globe2 className="h-5 w-5 text-red-500 stroke-[1.5]" />
              </div>
              <h3 className="text-xl md:text-2xl tracking-tight font-display text-white">
                একটি প্ল্যাটফর্ম।<br /><span className="text-red-500 font-display curly-underline">গ্লোবাল অপারেশন।</span>
              </h3>
              <p className="mt-3 text-sm md:text-base text-slate-400 font-sans">
                আপনার সকল লার্নিং ম্যাটেরিয়াল এবং সাপোর্ট এক জায়গায় পান। যা আপনার লক্ষ্য অর্জনে সাহায্য করবে।
              </p>
            </div>
          </motion.section>

          {/* Card B (Large) */}
          <motion.section
            variants={itemVariants}
            className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 md:p-8 lg:col-span-4 hover:border-red-500/30 transition duration-300 group"
          >
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <svg className="h-full w-full" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g stroke="#ef4444" strokeOpacity="0.25">
                  <path d="M0 40H800M0 80H800M0 120H800M0 160H800M0 200H800M0 240H800" />
                  <path d="M80 0V300M160 0V300M240 0V300M320 0V300M400 0V300M480 0V300M560 0V300M640 0V300M720 0V300" />
                </g>
                <path d="M20 160C60 90 140 90 200 150C235 185 270 185 315 150C370 107 430 120 480 165" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="relative z-10">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-red-500/10 ring-1 ring-red-500/30 group-hover:scale-110 transition-transform">
                <Package className="h-5 w-5 text-red-500 stroke-[1.5]" />
              </div>
              <h3 className="text-xl md:text-2xl tracking-tight font-display text-white">
                সীমানাহীন সম্ভাবনা।<br /><span className="text-red-500 font-display curly-underline">আপনার লক্ষ্য এবার হাতের মুঠোয়।</span>
              </h3>
              <p className="mt-3 text-sm md:text-base text-slate-400 max-w-2xl font-sans">
                আমরা আপনার লার্নিং জার্নি থেকে সব ধরনের বাধা দূর করি, যাতে আপনি ফোকাস করতে পারেন আপনার ব্যক্তিগত প্রবৃদ্ধিতে।
              </p>
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Ship, text: "গ্লোবাল শিপিং" },
                  { icon: ShieldCheck, text: "সিকিউর পেমেন্ট" },
                  { icon: Wallet, text: "লোকাল পেমেন্ট" },
                  { icon: BadgeCheck, text: "সার্টিফাইড মেন্টর" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-lg border border-border-subtle bg-white/[0.02] p-3 hover:border-red-500/30 transition group/item">
                    <item.icon className="h-4 w-4 text-red-500 stroke-[1.5]" />
                    <p className="text-[12px] text-slate-300 font-sans">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Card C */}
          <motion.section
            variants={itemVariants}
            className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 md:p-8 lg:col-span-2 hover:border-red-500/30 hover:from-red-500/20 hover:to-red-900/50 transition duration-300 group"
          >
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
              <svg className="h-full w-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="gridC" width="22" height="22" patternUnits="userSpaceOnUse">
                    <path d="M22 0H0V22" stroke="#ef4444" strokeOpacity="0.25" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="400" height="300" fill="url(#gridC)" />
                <path d="M40 230C110 180 180 80 350 120" stroke="#ef4444" strokeOpacity="0.35" strokeWidth="1.2" fill="none" />
                <circle cx="140" cy="150" r="3" fill="#ef4444" />
                <circle cx="260" cy="120" r="3" fill="#ef4444" />
              </svg>
            </div>
            <div className="relative z-10">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-red-500/10 ring-1 ring-red-500/30 group-hover:scale-110 transition-transform">
                <Sparkles className="h-5 w-5 text-red-500 stroke-[1.5]" />
              </div>
              <h3 className="text-xl md:text-2xl tracking-tight font-display text-white">
                স্মার্ট লার্নিং।<br /><span className="text-red-500 font-display curly-underline">সহজ সমাধান।</span>
              </h3>
              <p className="mt-3 text-sm md:text-base text-slate-400 font-sans">
                অত্যাধুনিক এআই টুলস এবং টেকনিক শিখুন যা আপনার কাজের গতিকে বহুগুণ বাড়িয়ে দিবে।
              </p>
            </div>
          </motion.section>

          {/* Card D */}
          <motion.section
            variants={itemVariants}
            className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 md:p-8 lg:col-span-2 hover:border-red-500/30 hover:from-red-500/20 hover:to-red-900/50 transition duration-300 group"
          >
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
              <svg className="h-full w-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="dotsD" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="1" fill="#ef4444" fill-opacity="0.25" />
                  </pattern>
                </defs>
                <rect width="400" height="300" fill="url(#dotsD)" />
                <circle cx="200" cy="150" r="70" stroke="#ef4444" strokeOpacity="0.35" strokeWidth="1.2" fill="none" />
                <circle cx="200" cy="150" r="36" stroke="#ef4444" strokeOpacity="0.45" strokeWidth="1.2" fill="none" />
              </svg>
            </div>
            <div className="relative z-10">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-red-500/10 ring-1 ring-red-500/30 group-hover:scale-110 transition-transform">
                <ShieldCheck className="h-5 w-5 text-red-500 stroke-[1.5]" />
              </div>
              <h3 className="text-xl md:text-2xl tracking-tight font-display text-white">
                বিশ্বস্ত মেন্টরশিপ।<br /><span className="text-red-500 font-display curly-underline">সফল ক্যারিয়ার।</span>
              </h3>
              <p className="mt-3 text-sm md:text-base text-slate-400 font-sans">
                সরাসরি ইন্ডাস্ট্রির মেন্টরদের থেকে শিখুন এবং আপনার ক্যারিয়ারের জন্য সঠিক দিকনির্দেশনা পান।
              </p>
            </div>
          </motion.section>

          {/* Card E */}
          <motion.section
            variants={itemVariants}
            className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 md:p-8 lg:col-span-2 hover:border-red-500/30 hover:from-red-500/20 hover:to-red-900/50 transition duration-300 group"
          >
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
              <svg className="h-full w-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="gridE" width="24" height="24" patternUnits="userSpaceOnUse">
                    <path d="M24 0H0V24" stroke="#ef4444" strokeOpacity="0.2" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="400" height="300" fill="url(#gridE)" />
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
                একবার এনরোল করুন এবং আজীবন কোর্সের সকল রিসোর্স এবং ফিউচার আপডেট উপভোগ করুন।
              </p>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </section>
  );
}
