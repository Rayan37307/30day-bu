import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "./Button";

export function CTABanner() {
  return (
    <section className="w-full max-w-[1000px] mx-auto px-6 mb-32 mt-12 relative z-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full glass-heavy rounded-3xl py-24 px-8 md:px-16 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden"
      >
        {/* Subtle top glow */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-display text-white tracking-tight leading-[1.4] max-w-2xl mb-10">
          প্রস্তুত নিজেকে <span className="text-gradient-red">আসক্তি থেকে মুক্ত</span> করে<br className="hidden sm:block" />
          জীবনের কন্ট্রোল নিতে <span className="text-gradient-red">৩০ দিনে?</span>
        </h2>
        
        <Button as="a" href="#pricing">
          হ্যাঁ, আমি প্রস্তুত
        </Button>
      </motion.div>
    </section>
  );
}
