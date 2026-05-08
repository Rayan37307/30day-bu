import React from 'react';
import { motion } from 'framer-motion';
import { Check, Rocket } from 'lucide-react';
import { Button } from "./Button";

export function Pricing() {
  const features = [
    "৩০ দিনের লাইভ ইন্টারেক্টিভ ট্রান্সফরমেশন ক্লাস",
    "ডোপামিন ডিটক্স এবং টাইম-ম্যানেজমেন্টের প্র্যাকটিক্যাল গাইড",
    "এক্সক্লুসিভ জাজমেন্ট-ফ্রি প্রাইভেট ডিসকর্ড কমিউনিটি",
    "মেন্টরদের সাথে সরাসরি প্রাইভেট প্রশ্নোত্তর",
    "কোর্স শেষে কমপ্লিশন সার্টিফিকেট প্রদান"
  ];

  return (
    <div className="mx-auto max-w-[1200px] max-md:px-6" id="pricing">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-x-16 gap-y-16 mt-20 mb-20 px-6 py-20 relative overflow-hidden">
        
        {/* Background Orb for Glassmorphism */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 blur-[150px] rounded-full pointer-events-none -z-10" />

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 w-full relative z-10">
          <div className="flex flex-col gap-6 w-full">
            <div className="flex gap-3 items-center">
              <span className="flex items-center justify-center text-[11px] font-mono font-medium text-red-400 bg-red-500/10 w-7 h-7 border-border-subtle border rounded-lg shadow-[0_0_10px_rgba(239,68,68,0.2)]">
                04
              </span>
              <span className="uppercase text-sm font-medium text-gray-500 tracking-widest font-sans">
                PRICING
              </span>
            </div>
            <h2 className="md:text-5xl lg:text-6xl leading-[1.1] text-4xl text-white font-display font-normal tracking-tight">
              সবার জন্য সহজ <span className="text-gradient-red">প্রাইসিং।</span>
            </h2>
            <p className="text-lg text-gray-400 font-light w-full leading-relaxed font-sans">
              কোনো মাসিক ফি নেই। একবার পেমেন্ট করুন এবং আজীবনের জন্য সেলফ-মাস্টারির সকল রিসোর্স পেয়ে যান।
            </p>
          </div>

          <div className="z-10 flex flex-col items-center md:items-end relative">
            <div className="flex glass-light rounded-full p-1.5 items-center">
              <div className="text-sm font-bold text-black uppercase tracking-widest bg-white rounded-full px-8 py-2.5 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                এককালীন পেমেন্ট
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <section className="flex flex-col pt-0 relative gap-x-12 gap-y-12 items-center justify-center">
          {/* Background Glow Effects */}
          <div className="pointer-events-none absolute inset-0 opacity-50">
            <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-red-500/30 to-transparent"></div>
            <div className="absolute top-0 bottom-0 left-1/4 w-px bg-gradient-to-b from-transparent via-red-500/10 to-transparent"></div>
            <div className="absolute top-0 bottom-0 right-1/4 w-px bg-gradient-to-b from-transparent via-red-500/10 to-transparent"></div>
            <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-red-900/10 to-transparent opacity-30"></div>
          </div>

          {/* Pricing Card */}
          <motion.div 
            whileHover={{ y: -5, scale: 1.005 }}
            className="overflow-hidden z-10 group glass-heavy rounded-3xl w-full max-w-[1200px] relative transition-all duration-500 hover:shadow-[0_0_40px_rgba(239,68,68,0.3)]">
            
            {/* Floating Pulse Badge */}
            <div className="absolute top-6 right-6 z-20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            </div>
            
            <div className="absolute top-6 right-12 z-20">
              <span className="text-[10px] font-mono font-bold tracking-widest text-red-400 uppercase bg-red-500/10 px-2 py-1 rounded border border-red-500/20">
                প্রো চয়েস
              </span>
            </div>
            {/* Card Background */}
            <div className="pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500/10 via-transparent to-transparent absolute inset-0"></div>
            {/* Stars Effect */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{ 
                backgroundImage: 'radial-gradient(white 1px, transparent 1px)', 
                backgroundSize: '40px 40px', 
                maskImage: 'radial-gradient(circle, black 40%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 100%)'
              }}
            ></div>

            <div className="grid grid-cols-1 md:grid-cols-2 p-6 min-h-[450px] relative gap-12">
              {/* Left Column */}
              <div className="flex flex-col gap-8 h-full items-start justify-between">
                {/* Icon & Title */}
                <div className="flex items-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-red-400">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.1 4-1 4-1s.25 2.25 0 4z"></path>
                    <path d="M15 13v5s3.03-.55 4-2c1.1-1.62 1-4 1-4s-2.25-.25-4 0z"></path>
                  </svg>
                  <h3 className="text-3xl font-normal text-white tracking-tight font-display">
                    প্রো প্ল্যান
                  </h3>
                </div>

                {/* Price */}
                <div>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-5xl md:text-7xl lg:text-8xl font-normal text-white tracking-tight font-display">
                      ৳১০০০
                    </span>
                    <span className="text-lg md:text-xl lg:text-2xl font-normal text-white tracking-tight font-display opacity-90 line-through decoration-red-500/50">
                      ৳৫০০০
                    </span>
                  </div>
                  <p className="text-gray-400 text-base md:text-lg font-light font-sans">
                    আজীবন অ্যাক্সেস। কোনো লুকানো খরচ নেই।
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col justify-between h-full gap-10">
                {/* Features List */}
                <ul className="space-y-6 pt-2">
                  {features.map((feature, idx) => (
                    <motion.li 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      key={idx} 
                      className="flex items-center gap-4 text-white text-xl font-light font-sans group/item"
                    >
                      <span className="w-6 h-6 rounded-full glass-light flex items-center justify-center shrink-0 border-red-500/20 group-hover/item:bg-red-500/20 transition-colors">
                        <Check size={14} className="text-red-400" />
                      </span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="flex justify-start md:justify-end mt-auto pt-4">
                  <Button className="w-full sm:w-auto">
                    এখনই জয়েন করুন
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </motion.div>
    </div>
  );
}
