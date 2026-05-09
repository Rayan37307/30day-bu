import { motion } from "framer-motion";
import { Youtube, Facebook } from "lucide-react";

export function Mentor() {
  return (
    <section className="relative w-full max-w-[1200px] mx-auto px-6 py-32" id="mentor">
      
      {/* Title block matching screenshot */}
      <div className="text-center mb-6">
        <h3 className="text-2xl md:text-3xl font-display font-medium text-white tracking-wide">
          আপনার <span className="text-[#E50914] font-bold">মেন্টরের</span> সাথে পরিচিত হোন
        </h3>
      </div>

      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-tight">
          স্টুডেন্ট থেকে <span className="text-[#E50914]">ক্রিয়েটর</span>... <br/>
          গল্পটি ভাগ্যের নয়, <span className="text-slate-300">সিস্টেমের।</span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        {/* Left: Mentor Image */}
        <div className="w-full lg:w-[45%] shrink-0 relative group">
          {/* Red Glowing Background */}
          <div className="absolute -inset-4 bg-red-600/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-red-600/10 blur-[100px] rounded-full pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[5/5] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 z-10"
          >
            <img 
              src="/asifvaii.jpeg" 
              alt="Asif" 
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>

        {/* Right: Bio and Stats */}
        <div className="w-full lg:w-[55%] flex flex-col pt-2 lg:pt-8">
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-8">
              <h3 className="text-4xl md:text-[44px] font-display font-bold text-[#E50914] mb-2 leading-none">MUHAMMAD ASIF RAYHAN</h3>
              <p className="text-slate-400 text-[15px] md:text-[17px] font-medium uppercase tracking-wider">Digital Creator & CO-Founder of Backbencher's University</p>
            </div>

            <div className="space-y-6 text-slate-300 text-[15px] md:text-[17px] leading-[1.8] mb-12">
              <p>
                আমি আসিফ। সিএসই-র একজন স্টুডেন্ট হিসেবে যখন যাত্রা শুরু করি, তখন আমার সবচেয়ে বড় শত্রু ছিল প্রোকাস্টিনেশন আর সোশ্যাল মিডিয়া অ্যাডিকশন। ঘন্টার পর ঘন্টা স্ক্রল করে দিন শেষে নিজেকে শূন্য লাগত। কিন্তু আমি জানতাম, এভাবে চললে "ব্যাকবেঞ্চার্স ইউনিভার্সিটি" কখনো বাস্তব হবে না।
              </p>
              <p>
                আমি ডাইভে দিলাম নিউরোসায়েন্স আর প্রোডাক্টিভিটি সিস্টেমের গভীরে। GTD ফ্রেমওয়ার্ক আর এআই-কে সঙ্গী করে আমি আমার ব্রেইনকে রিবুট করলাম। ফলাফল? মাত্র কয়েক বছরে ২ লাখেরও বেশি মানুষের একটি কমিউনিটি এবং "Aura Boss" অ্যাপের জন্ম।
              </p>
              <p className="font-semibold text-white italic">
                "এই জার্নিতে আমি যা শিখেছি, তা কোনো থিওরিটিক্যাল বইয়ের জ্ঞান নয়। এটি রক্ত-মাংসের অভিজ্ঞতা যা আপনাকে শেখাবে কীভাবে ডিস্ট্রাকশনের সমুদ্র থেকে মাথা তুলে দাঁড়িয়ে নিজের স্বপ্নকে বাস্তবে রূপ দিতে হয়।"
              </p>
            </div>

            {/* Social Stats (Square blocks like screenshot) */}
            <div className="flex flex-wrap gap-4">
              <div className="bg-[#111] border border-white/5 rounded-2xl p-5 flex flex-col w-[140px] shadow-lg transition-transform hover:-translate-y-1">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mb-5">
                  <Youtube className="text-[#E50914]" size={22} />
                </div>
                <h4 className="text-xl font-bold text-white mb-1">151K+</h4>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">Subscribers</p>
              </div>
              
              <div className="bg-[#111] border border-white/5 rounded-2xl p-5 flex flex-col w-[140px] shadow-lg transition-transform hover:-translate-y-1">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mb-5">
                  <Facebook className="text-blue-500" size={22} />
                </div>
                <h4 className="text-xl font-bold text-white mb-1">300K+</h4>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">Followers</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
