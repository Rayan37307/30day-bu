import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export function CTABanner() {
  const [timeLeft, setTimeLeft] = useState({ h: 2, m: 45, s: 12 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { h, m, s } = prev;
        if (s > 0) s--;
        else {
          s = 59;
          if (m > 0) m--;
          else {
            m = 59;
            if (h > 0) h--;
          }
        }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-[1200px] mx-auto px-6 mt-4 md:mt-8 relative z-20 mb-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative flex flex-col md:flex-row items-center justify-between rounded-[24px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-electric-blue/30 w-full"
      >
        {/* Background Gradients & Shapes to match the reference */}
        <div className="absolute inset-0 bg-black" /> {/* Base Dark */}
        
        {/* Diagonal Accent Shape (Left) */}
        <div 
          className="absolute inset-y-0 left-0 w-[120%] md:w-[65%] bg-[#7a0000]" 
          style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)' }} 
        />

        {/* Content Wrapper */}
        <div className="relative w-full flex flex-col md:flex-row items-center justify-between px-8 py-10 md:px-6 lg:px-10 lg:py-8 z-10 gap-8 md:gap-4 lg:gap-8">
          
          {/* Left: Timer */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 text-white font-normal text-xl md:text-base lg:text-xl mb-1 lg:mb-2 tracking-wide font-display">
              <div className="bg-white text-[#7a0000] px-2 py-0.5 rounded text-xs font-black uppercase tracking-widest relative -top-0.5 font-sans">Live</div>
              শুরু হতে বাকি:
            </div>
            <div className="font-mono font-black text-5xl md:text-4xl lg:text-5xl text-white drop-shadow-md tracking-tighter">
              {String(timeLeft.h).padStart(2, '0')}:{String(timeLeft.m).padStart(2, '0')}:{String(timeLeft.s).padStart(2, '0')}
            </div>
          </div>

          {/* Center: Image/Pricing */}
          <div className="flex flex-col items-center justify-center rounded-xl w-full md:w-auto">
             <div className="flex items-end gap-2 lg:gap-3 justify-center text-center">
               <span className="font-display font-normal text-5xl md:text-4xl lg:text-5xl text-white drop-shadow-sm">৳১০০০</span>
               <span className="text-slate-400 line-through text-2xl md:text-lg lg:text-xl mb-1 lg:mb-1.5 font-medium">৳৫০০০</span>
             </div>
             <p className="text-[#ff6666] text-base md:text-xs lg:text-base font-bold mt-1 lg:mt-2 tracking-wide drop-shadow-sm w-full text-center">৮০% ছাড় - সীমিত সময়ের অফার</p>
          </div>

          {/* Right: CTA Button */}
          <div className="flex flex-col items-center md:items-end w-full md:w-auto lg:shrink-0">
            <button className="w-full bg-[#c2f0c2] hover:bg-[#aae6aa] text-black font-bold text-xl md:text-base lg:text-xl py-4 md:py-3 lg:py-4 px-6 md:px-4 lg:px-6 rounded-[12px] lg:rounded-[16px] transition-all duration-300 flex items-center justify-center gap-2 lg:gap-3 group shadow-[0_10px_20px_rgba(0,0,0,0.3)] whitespace-nowrap">
              এখনই জয়েন করুন
              <ArrowRight size={20} className="transform transition-transform group-hover:translate-x-1" />
            </button>
            <p className="text-slate-400 text-sm md:text-xs lg:text-sm mt-3 md:mt-2 lg:mt-3 flex items-center gap-1.5 font-medium whitespace-nowrap">
              <Clock size={14} className="text-[#aae6aa]" />
              *আজীবন রেকর্ডিং সুযোগ
            </p>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
