import { MessageSquareQuote } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50  flex items-center justify-between px-2 py-2 rounded-lg bg-surface border border-border-subtle shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),_0_20px_40px_rgba(0,0,0,0.6)] w-[95%] max-w-[1200px]"
    >
      {/* Left Logo */}
      <div className="flex items-center pl-1">
        <img 
          src="https://yt3.ggpht.com/7umIhrv3vy-yRasCnhA2ps10Av3jEzLHEbhb67eUYfwP_3y25_KrKWACDjDC7GBbvxqIh1KkT7k=s176-c-k-c0x00ffffff-no-rj-mo" 
          alt="Logo" 
          className="w-[46px] h-[46px] rounded-lg object-cover" 
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Right Links & Buttons */}
      <div className="flex items-center gap-6 pr-1">
        <div className="hidden md:flex items-center gap-8">
          <a href="#overview" className="text-[15px] font-medium text-slate-200 hover:text-white transition-colors">ওভারভিউ</a>
          <a href="#product" className="text-[15px] font-medium text-slate-200 hover:text-white transition-colors">কোর্স</a>
          <a href="#pricing" className="text-[15px] font-medium text-slate-200 hover:text-white transition-colors">প্রাইসিং</a>
          <a href="#contacts" className="text-[15px] font-medium text-slate-200 hover:text-white transition-colors">যোগাযোগ</a>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2 md:ml-4">
          <button className="w-[46px] h-[46px] rounded-lg bg-electric-blue flex items-center justify-center text-white hover:bg-electric-blue-hover transition-colors shadow-[0_0_15px_rgba(255,59,59,0.4)] hover:shadow-[0_0_20px_rgba(255,59,59,0.7)] group">
            <MessageSquareQuote size={22} strokeWidth={2} className="transform transition-transform group-hover:scale-110" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
