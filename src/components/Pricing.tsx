import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function Pricing() {
  const features = [
    "৩০ দিনের লাইভ ইন্টারঅ্যাকটিভ ক্লাস",
    "হাতে-কলমে এআই এডিটিং এবং গাইড",
    "এক্সক্লুসিভ প্রাইভেট ডিসকর্ড কমিউনিটি",
    "মেন্টরদের সাথে সরাসরি প্রশ্নোত্তর",
    "কোর্স শেষে সার্টিফিকেট প্রদান"
  ];

  return (
    <section className="relative w-full max-w-[1200px] mx-auto px-6 py-24" id="pricing">
      <div className="text-center mb-16 relative z-10">
        <h2 className="font-display font-normal text-5xl md:text-6xl mb-4">
          সহজ এবং স্বচ্ছ <span className="text-electric-blue">প্রাইসিং</span>
        </h2>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg font-medium">
          কোনো লুকানো চার্জ নেই। একটি সহজ মূল্যে সবকিছু পান।
        </p>
      </div>

      <div className="relative w-full flex-grow mx-auto z-10 w-full mb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full rounded-[38px] bg-white/10 pb-[52px] lg:pb-[56px] p-[1px] shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
        >
          {/* Main Dark Card */}
          <div className="bg-navy-card rounded-[36px] w-full h-full relative z-20 flex flex-col md:flex-row border border-white/5">
            
            {/* Left Column (Pricing Info) */}
            <div className="w-full md:w-[45%] lg:w-1/2 p-8 md:p-12 flex flex-col border-b md:border-b-0 md:border-r border-white/5 relative z-10">
              
              {/* Tag Selection (Fake Toggle) */}
              <div className="inline-flex items-center gap-5 bg-white/5 border border-white/10 rounded-full px-4 py-2 w-max mb-10 shadow-sm relative z-10">
                <div className="flex items-center gap-2 cursor-pointer">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff3b3b] shadow-[0_0_12px_#ff3b3b]" />
                  <span className="text-sm font-medium text-white tracking-wide">One-Time</span>
                </div>
                <div className="text-sm font-medium text-slate-500 cursor-not-allowed">Monthly</div>
              </div>

              {/* Price */}
              <div className="mb-2 relative z-10">
                <div className="flex items-end gap-3">
                  <span className="font-display font-normal text-7xl lg:text-8xl text-[#ff8888] drop-shadow-[0_0_20px_rgba(255,136,136,0.3)] tracking-tighter">৳১০০০</span>
                </div>
                <div className="mt-1 flex items-center gap-2">
                   <span className="text-slate-500 line-through text-xl font-medium">৳৫০০০</span>
                   <span className="text-electric-blue text-sm font-bold bg-electric-blue/10 px-2 py-0.5 rounded">৮০% ছাড়</span>
                </div>
              </div>
              <p className="text-[#a1a1aa] mb-auto text-sm z-10 pt-4">এককালীন পেমেন্ট। আজীবন অ্যাক্সেস।</p>

              {/* CTA Button */}
              <div className="relative mt-10 md:mt-12 w-full max-w-[280px] group cursor-pointer z-10 mb-2 md:mb-0">
                {/* Intense Outer Glow */}
                <div className="absolute -inset-1 bg-[#ff1a1a] blur-[25px] opacity-60 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                {/* Button Base */}
                <button className="relative w-full py-4 rounded-xl font-bold text-lg text-white bg-gradient-to-b from-[#ff4d4d] to-[#e60000] border border-t-[#ff8080] border-x-[#e60000]/50 border-b-[#990000] shadow-[inset_0_2px_15px_rgba(255,255,255,0.3),_0_5px_15px_rgba(0,0,0,0.5)] transition-transform transform group-hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center">
                  এখনই জয়েন করুন
                </button>
              </div>
            </div>

            {/* Right Column (Features) */}
            <div className="w-full md:w-[55%] lg:w-1/2 p-10 md:p-12 pl-10 md:pl-16 flex flex-col justify-center relative z-10">
              <h4 className="text-[#71717a] text-[15px] font-medium mb-8 flex items-center gap-1.5 tracking-wide">
                Features <span className="text-lg leading-none">+</span>
              </h4>
              <ul className="flex flex-col gap-6">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <CheckCircle2 size={22} strokeWidth={1.5} className="text-[#a1a1aa] shrink-0" />
                    <span className="text-slate-200 text-[15.5px] leading-snug font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom Lip Content */}
          <div className="absolute bottom-0 left-0 w-full h-[52px] lg:h-[56px] flex items-center justify-center text-white gap-2 font-medium z-10">
            <CheckCircle2 size={18} className="text-white/80" />
            <span className="text-[15px] tracking-wide text-white/90">আজীবন রেকর্ডিং ওভারভিউ এবং ফিডব্যাক সেশন</span>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
