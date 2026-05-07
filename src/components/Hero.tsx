import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "./Button";

export function Hero() {
  return (
    <section className="w-full isolate min-h-screen overflow-hidden relative bg-black flex flex-col items-center justify-center pt-32 pb-20">
      
      {/* Red Gradient Background Glows */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-red-900/20 to-transparent pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[50%] bg-red-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="z-10 relative w-full max-w-[1200px] mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center rounded-sm bg-white/5 border border-white/10 px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="text-sm font-bold tracking-widest uppercase text-slate-300">
            নতুন ব্যাচ <span className="mx-2 text-white/20">•</span> রেজিস্ট্রেশন চলছে
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="leading-[1.2] tracking-tight font-display max-w-5xl mx-auto mb-16"
        >
          <span className="text-3xl sm:text-4xl lg:text-5xl text-white align-middle mr-3">মাস্টার</span>
          <span className="text-4xl sm:text-6xl lg:text-[72px] text-[#E50914] drop-shadow-sm align-middle">ইউর মাইন্ড: অ্যাডিকশন থেকে</span><br className="hidden sm:block" />
          <span className="text-3xl sm:text-4xl lg:text-5xl text-white block mt-2">সেলফ-মাস্টারি অর্জন করুন</span>
        </motion.h1>

        {/* Massive Video */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[1000px] mx-auto mb-16 relative group"
        >
          {/* Edge Glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-b from-white/10 to-transparent rounded-sm opacity-50 group-hover:opacity-100 transition duration-700 pointer-events-none z-20"></div>
          
          <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-black shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] border border-white/5">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/RG6fjpBbGpA?start=0&end=20&autoplay=1&mute=1&loop=1&playlist=RG6fjpBbGpA&controls=0&modestbranding=1&rel=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button as="a" href="#pricing">
            এনরোল করুন
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
