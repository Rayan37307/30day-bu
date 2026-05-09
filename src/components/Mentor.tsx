import { motion } from "framer-motion";
import { Youtube, Facebook } from "lucide-react";

export function Mentor() {
  return (
    <section className="relative w-full max-w-[1200px] mx-auto px-6 py-10 lg:py-18" id="mentor">
      <div className="text-center mb-5">
        <h2 className="text-5xl md:text-6xl lg:text-7xl mb-12 font-display text-white tracking-tight leading-tight">
          তোমার <span className="text-white">ভাই</span>
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
            className="relative aspect-[5/5] border-2 border-blue-500 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]z z-10"
          >
            <img 
              src="/asifboss.webp" 
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
              <p className="text-white text-[15px] md:text-[17px] font-medium uppercase tracking-wider">CO-Founder of Backbenchers University</p>
            </div>

            <div className="space-y-6 text-slate-300 font-display text-[15px] md:text-[17px] leading-[1.8] mb-12">
              <p>
                আমি চাই সবাইকে নিয়ে আগাতে । মানুষকে সত্যের পথে ডাকতে।তুমিও অনেক talented,boss । হয়তো তুমি খুব ভালো student না, কিন্তু তোমার মাঝেও অসাধারণ কিছু করার potential আছে । আমাদের journey তো কেবল শুরু । যেতে হবে বহুদূর ।
                বাংলাদেশের প্রতিটা backbencher যেন আবার ঘুরে দাঁড়ানোর সুযোগ পায় — সেই চেষ্টা করবো, ইনশাআল্লাহ ।
              </p>
            </div>

            {/* Social Stats (Square blocks like screenshot) */}
            <div className="flex flex-wrap gap-4">
              <a href="https://www.youtube.com/@backbenchersuniversity-111" target="_blank" rel="noopener noreferrer" className="bg-[#111] border-1 border-red-500 rounded-2xl p-5 flex flex-col w-[140px] shadow-lg transition-transform hover:-translate-y-1">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mb-5">
                  <Youtube className="text-[#E50914]" size={22} />
                </div>
                <h4 className="text-xl font-bold text-white mb-1">151K+</h4>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">Subscribers</p>
              </a>
              
              <a href="https://www.facebook.com/MuhammadAsifRayhanOfficial" target="_blank" rel="noopener noreferrer" className="bg-[#111] border-1 border-blue-500 rounded-2xl p-5 flex flex-col w-[140px] shadow-lg transition-transform hover:-translate-y-1">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mb-5">
                  <Facebook className="text-blue-500" size={22} />
                </div>
                <h4 className="text-xl font-bold text-white mb-1">323K+</h4>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">Followers</p>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
