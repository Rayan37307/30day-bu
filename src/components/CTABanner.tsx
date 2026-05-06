import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="w-full max-w-[1000px] mx-auto px-6 mb-32 mt-12 relative z-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full bg-[#070707] rounded-3xl border border-white/5 py-24 px-8 md:px-16 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden"
      >
        {/* Subtle top glow */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-display text-white tracking-tight leading-[1.4] max-w-2xl mb-10">
          প্রস্তুত নিজেকে <span className="text-[#E50914]">আসক্তি থেকে মুক্ত</span> করে<br className="hidden sm:block" />
          জীবনের কন্ট্রোল নিতে <span className="text-[#E50914]">৩০ দিনে?</span>
        </h2>
        
        <a 
          href="#pricing"
          className="inline-flex items-center justify-center bg-[#E50914] hover:bg-[#f00a16] text-white text-[15px] font-bold rounded-lg px-10 py-3.5 transition-all shadow-[0_0_20px_rgba(229,9,20,0.25)] hover:shadow-[0_0_30px_rgba(229,9,20,0.4)] hover:-translate-y-0.5 border border-red-500/50"
        >
          হ্যাঁ, আমি প্রস্তুত <ChevronRight size={16} className="ml-1" strokeWidth={2.5} />
        </a>
      </motion.div>
    </section>
  );
}
