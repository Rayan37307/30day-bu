import { motion } from "framer-motion";
import { ChevronsDown, CheckCircle2 } from "lucide-react";

const symptoms = [
  "আজকে শেষ বারের মতো হাত মারবো। আজকেই লাস্ট। প্রমিস!",
  "কালকে থেকে ভালো হয়ে যাবো।",
  "সারাদিন কিছু করতে মনে চায় না। সবকিছু বিরক্ত লাগে।",
  "কোনো কাজে ৫ মিনিটের বেশি ফোকাস নাই।",
  "জীবনের কোনো লক্ষ্য নাই। এমনেই বেঁচে আছি কোনোমতে।"
];

const benefits = [
  { text: "আসক্তি থেকে পুরোপুরি বের হয়ে গেছো তুমি", highlight: "", textEnd: "" },
  { text: "ঘন্টার পর ঘন্টা", highlight: "deep focus", textEnd: "নিয়ে কাজ করতে পারতেছো" },
  { text: "দিন শেষে নিজের উপর", highlight: "proud feel", textEnd: "করতেছো" },
  { text: "জীবনে আবার", highlight: "clear direction", textEnd: "খুঁজে পাইছো" },
  { text: "ছোট ছোট মুহূর্তগুলো", highlight: "genuinely enjoy", textEnd: "করতে পারতেছো" }
];

const redParticles = [...Array(20)].map(() => ({
  top: `${Math.random() * 45}%`,
  left: `${Math.random() * 100}%`,
  width: `${Math.random() * 4 + 2}px`,
  height: `${Math.random() * 4 + 2}px`,
  opacity: Math.random() * 0.6 + 0.1,
}));

const greenParticles = [...Array(20)].map(() => ({
  top: `${Math.random() * 45 + 55}%`,
  left: `${Math.random() * 100}%`,
  width: `${Math.random() * 4 + 2}px`,
  height: `${Math.random() * 4 + 2}px`,
  opacity: Math.random() * 0.6 + 0.1,
}));

export function IsThisYou() {
  return (
    <section className="w-full relative py-24 bg-[#030000] overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#E50914]/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#22c55e]/5 to-transparent pointer-events-none" />
      
      <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-red-600/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] bg-green-500/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Red Particles */}
      {redParticles.map((p, i) => (
        <div 
          key={`red-${i}`}
          className="absolute rounded-full bg-[#E50914] shadow-[0_0_10px_rgba(229,9,20,0.8)] pointer-events-none"
          style={{ top: p.top, left: p.left, width: p.width, height: p.height, opacity: p.opacity }}
        />
      ))}

      {/* Green Particles */}
      {greenParticles.map((p, i) => (
        <div 
          key={`green-${i}`}
          className="absolute rounded-full bg-[#22c55e] shadow-[0_0_10px_rgba(34,197,94,0.8)] pointer-events-none"
          style={{ top: p.top, left: p.left, width: p.width, height: p.height, opacity: p.opacity }}
        />
      ))}

      <div className="max-w-[1000px] mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Top Section (Red) */}
        <div className="w-full mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-[44px] h2 font-bold text-center mb-12 tracking-wide"
          >
            <span className="text-white">এটা কি</span> <span className="text-[#E50914]">তুমি?</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {symptoms.map((text, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#1c1c1c] to-[#050505] border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_0_20px_rgba(229,9,20,0.02)] rounded-2xl p-5 md:p-6 flex items-start gap-4 hover:border-[#E50914]/40 hover:from-[#252525] transition-all duration-300"
              >
                <div className="mt-2.5 w-[5px] h-[5px] rounded-full bg-[#E50914] shadow-[0_0_8px_rgba(229,9,20,0.8)] shrink-0"></div>
                <p className="text-slate-300 text-base md:text-[18px] font-medium leading-relaxed font-sans">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full relative py-12 flex justify-center items-center">
          <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-[#030000] px-4 text-[#22c55e]"
          >
            <ChevronsDown size={44} className="drop-shadow-[0_0_15px_rgba(34,197,94,0.6)]" />
          </motion.div>
        </div>

        {/* Bottom Section (Green) */}
        <div className="w-full flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-[50px] h2font-bold text-center mb-3"
          >
            <span className="text-white">৩০ দিন</span> <span className="text-[#22c55e] drop-shadow-[0_0_12px_rgba(34,197,94,0.3)]">পরে...</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300/90 text-base md:text-lg mb-12 font-medium"
          >
            তোমার <span className="text-[#22c55e]">নতুন versionটা</span> কেমন হতে পারে?
          </motion.p>

          <div className="w-full max-w-[850px] flex flex-col gap-4">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#051108] border border-white/5 rounded-xl p-4 md:p-5 flex items-center gap-4 md:gap-6 hover:border-[#22c55e]/30 transition-colors shadow-[0_0_20px_rgba(34,197,94,0.03)]"
              >
                <div className="shrink-0 flex items-center justify-center">
                  <CheckCircle2 className="text-[#22c55e] drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]" size={26} strokeWidth={2.5} />
                </div>
                
                <div className="w-px h-10 bg-white/10 shrink-0 hidden md:block"></div>
                
                <p className="text-slate-300 text-[17px] md:text-[19px] font-medium leading-relaxed font-sans">
                  {benefit.text}
                  {benefit.highlight && <span className="text-[#22c55e] font-bold"> {benefit.highlight} </span>}
                  {benefit.textEnd && <span>{benefit.textEnd}</span>}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
