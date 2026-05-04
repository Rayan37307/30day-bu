import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative w-full max-w-[1200px] mx-auto px-6 pt-32 pb-24 md:pt-40 md:pb-32 flex flex-col items-center gap-16">
      {/* Top Video Container */}
      <div className="w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video w-full rounded-[32px] md:rounded-[48px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)] border border-white/10"
        >
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/RG6fjpBbGpA?autoplay=1&loop=1&playlist=RG6fjpBbGpA&controls=0&start=0&end=130" 
            title="AI এর যুগে টিকে থাকতে ৭টি সেরা স্কিল 🔥" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          ></iframe>


        </motion.div>
      </div>

      {/* Bottom Text Content */}
      <div className="w-full flex flex-col items-center text-center z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric-blue/30 bg-electric-blue/10 text-electric-blue text-sm font-semibold tracking-wide uppercase mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-electric-blue animate-pulse" />
          30-দিনের লাইভ কোর্স
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-display font-normal text-6xl md:text-8xl lg:text-9xl leading-[1.1] mb-8"
        >
          অসীম <span className="text-electric-blue drop-shadow-[0_0_20px_rgba(0,123,255,0.5)]">সাফল্য</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-2xl text-slate-200 font-medium leading-relaxed max-w-2xl"
        >
          একটি ৩০ দিনের রূপান্তরমূলক জার্নি। প্রতিদিন শিখুন নতুন হাই-ইনকাম স্কিল: ডিসিপ্লিন, টাইম ম্যানেজমেন্ট, আসক্তি থেকে মুক্তি এবং বাস্তব জীবনের প্রয়োজনীয় স্কিল ডেভেলপমেন্ট।
        </motion.p>
      </div>
    </section>
  );
}
