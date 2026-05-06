import { motion } from "framer-motion";
import { Youtube, Facebook } from "lucide-react";

export function Mentor() {
  return (
    <section className="relative w-full max-w-[1200px] mx-auto px-6 py-32" id="mentor">
      {/* Section Pre-header */}
      <div className="flex justify-center mb-6">
        <motion.span 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/5 text-red-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] shadow-[0_0_15px_rgba(239,68,68,0.15)] animate-red-glow"
        >
          আপনার মেন্টরের সাথে পরিচিত হোন
        </motion.span>
      </div>

      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight leading-tight">
          স্টুডেন্ট থেকে <span className="text-red-500 curly-underline">ক্রিয়েটর</span>... <br/>
          গল্পটি ভাগ্যের নয়, <span className="text-slate-400">সিস্টেমের।</span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-[2.5rem] p-8 md:p-12 lg:p-16 relative overflow-hidden group">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-500/10 blur-[120px] -z-10 opacity-50 group-hover:opacity-80 transition-opacity duration-1000" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] -z-10 opacity-30 group-hover:opacity-50 transition-opacity duration-1000" />

        {/* Left: Cinematic Image Container */}
        <div className="w-full lg:w-[42%] shrink-0">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group/img"
          >
            <img 
              src="/IMG_2718.jpg" 
              alt="Asif - Founder of Backbenchers University" 
              className="w-full h-full object-cover grayscale-[20%] group-hover/img:grayscale-0 transition-all duration-1000 scale-105 group-hover/img:scale-100"
            />
            {/* Cinematic Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl" />
            
            {/* Name Overlay for Mobile/Small tablets */}
            <div className="absolute bottom-8 left-8 right-8 lg:hidden">
              <h3 className="text-3xl font-display font-bold text-white mb-1">আসিফ</h3>
              <p className="text-red-500 text-xs font-bold uppercase tracking-widest">Founder, Backbencher's University</p>
            </div>
          </motion.div>
        </div>

        {/* Right: Copywriting Section */}
        <div className="w-full lg:w-[58%] flex flex-col pt-4">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="hidden lg:block mb-8">
              <h3 className="text-5xl font-display font-bold text-white mb-2">আসিফ</h3>
              <p className="text-red-500 text-sm font-bold uppercase tracking-[0.3em]">Digital Creator & CSE Student</p>
            </div>

            <div className="space-y-6 text-slate-300 text-lg md:text-xl leading-relaxed mb-12 font-medium">
              <p>
                আমি আসিফ। সিএসই-র একজন স্টুডেন্ট হিসেবে যখন যাত্রা শুরু করি, তখন আমার সবচেয়ে বড় শত্রু ছিল <span className="text-white">প্রোকাস্টিনেশন আর সোশ্যাল মিডিয়া অ্যাডিকশন।</span> ঘন্টার পর ঘন্টা স্ক্রল করে দিন শেষে নিজেকে শূন্য লাগত। কিন্তু আমি জানতাম, এভাবে চললে <span className="text-red-500">"ব্যাকবেঞ্চার্স ইউনিভার্সিটি"</span> কখনো বাস্তব হবে না।
              </p>
              <p>
                আমি ডাইভে দিলাম নিউরোসায়েন্স আর প্রোডাক্টিভিটি সিস্টেমের গভীরে। <span className="text-white">GTD ফ্রেমওয়ার্ক আর এআই-কে</span> সঙ্গী করে আমি আমার ব্রেইনকে রিবুট করলাম। ফলাফল? মাত্র কয়েক বছরে <span className="text-white">২ লাখেরও বেশি মানুষের</span> একটি কমিউনিটি এবং <span className="text-red-500">"Aura Boss"</span> অ্যাপের জন্ম।
              </p>
              <p className="text-slate-400 italic text-[17px]">
                "এই জার্নিতে আমি যা শিখেছি, তা কোনো থিওরিটিক্যাল বইয়ের জ্ঞান নয়। এটি রক্ত-মাংসের অভিজ্ঞতা যা আপনাকে শেখাবে কীভাবে ডিস্ট্রাকশনের সমুদ্র থেকে মাথা তুলে দাঁড়িয়ে নিজের স্বপ্নকে বাস্তবে রূপ দিতে হয়।"
              </p>
            </div>

            {/* Authority Bullets (Bento-ish Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/5 rounded-2xl p-6 flex flex-col gap-3 group/item hover:bg-white/[0.08] hover:border-red-500/30 hover:-translate-y-1 transition-all duration-300">
                <Youtube className="text-red-500 group-hover/item:scale-110 group-hover/item:drop-shadow-[0_0_10px_rgba(239,68,68,0.5)] transition-all" size={24} />
                <div>
                  <h4 className="text-2xl font-bold text-white">২০০,০০০+</h4>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider group-hover/item:text-slate-400 transition-colors">Subscribers Community</p>
                </div>
              </div>
              
              <div className="bg-white/5 border border-white/5 rounded-2xl p-6 flex flex-col gap-3 group/item hover:bg-white/[0.08] hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300">
                <Facebook className="text-blue-500 group-hover/item:scale-110 group-hover/item:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all" size={24} />
                <div>
                  <h4 className="text-2xl font-bold text-white">৩০০,০০০+</h4>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider group-hover/item:text-slate-400 transition-colors">Facebook Community</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
