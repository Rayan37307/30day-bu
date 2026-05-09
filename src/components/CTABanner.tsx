import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function CTABanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 16,
    minutes: 27,
    seconds: 6
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              if (days > 0) {
                days--;
                hours = 23;
              } else {
                clearInterval(timer);
                return prev;
              }
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full max-w-[900px] mx-auto px-6 mb-32 mt-12 relative z-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full bg-[#0d0000] border-2 border-[#E50914] rounded-[40px] py-16 px-6 md:px-16 flex flex-col items-center justify-center text-center shadow-[0_0_60px_rgba(229,9,20,0.15)] relative overflow-hidden"
      >
        {/* Title */}
        <h2 className="text-2xl md:text-4xl font-sans font-bold text-white tracking-wide mb-12 uppercase">
          Get At <span className="text-[#E50914]">50%</span> Discount
        </h2>

        {/* Timer */}
        <div className="flex items-center gap-3 md:gap-8 mb-12">
          <TimeUnit value={timeLeft.days} label="DAYS" />
          <TimeUnit value={timeLeft.hours} label="HOURS" />
          <TimeUnit value={timeLeft.minutes} label="MINS" />
          <TimeUnit value={timeLeft.seconds} label="SECS" />
        </div>

        {/* Button */}
        <a 
          href="#pricing"
          className="relative w-full max-w-[600px] group block"
        >
          {/* Subtle Outer Glow */}
          <div className="absolute inset-0 bg-[#E50914]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative w-full bg-gradient-to-r from-[#2a0000] via-[#110000] to-[#2a0000] border border-[#E50914]/60 rounded-full py-4 px-6 md:px-8 flex items-center justify-center gap-3 transition-transform duration-300 group-hover:scale-[1.02] shadow-[inset_0_-5px_15px_rgba(0,0,0,0.6)]">
            <span className="text-white font-bold text-lg md:text-xl font-sans tracking-wide">Secure Your Seat ৳৯৯৯</span>
            <span className="text-slate-400 font-medium text-base md:text-lg line-through decoration-slate-500 font-sans">৳২০০০</span>
          </div>
        </a>

        {/* Bottom Text */}
        <div className="mt-5">
          <span className="text-slate-300 text-[11px] md:text-xs tracking-[0.25em] font-medium uppercase">
            Attack Now
          </span>
        </div>
      </motion.div>
    </section>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="w-[70px] h-[75px] md:w-[110px] md:h-[120px] rounded-[20px] bg-[#1a0303] flex flex-col items-center justify-center shadow-inner gap-1 md:gap-2">
      <span className="text-3xl md:text-[50px] font-bold text-[#E50914] leading-none font-sans">{value}</span>
      <span className="text-[9px] md:text-xs text-[#E50914]/60 font-medium tracking-widest mt-1 uppercase">{label}</span>
    </div>
  );
}
