import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="w-full isolate min-h-screen overflow-hidden relative"
  data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(1)">
  <img src="/modules/bg.jpg" alt="" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0"/>
    <div className="pointer-events-none absolute inset-0 ring-1 ring-black/30"></div>
    
    <div className="z-10 relative">
      {/* Background Glow for Hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[60%] bg-electric-blue/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      <div className="sm:pt-20 md:pt-24 lg:pt-32 max-w-[1200px] mx-auto pt-20 px-6 pb-24 text-center">
        {/* Video Block */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto mb-20 max-w-4xl"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-white/5 rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition duration-1000"></div>
            
            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border-subtle bg-black/40 shadow-2xl backdrop-blur-sm animate-red-glow">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/RG6fjpBbGpA?start=0&end=20&autoplay=1&mute=1&loop=1&playlist=RG6fjpBbGpA&controls=0&modestbranding=1&rel=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="absolute inset-0 pointer-events-none rounded-lg ring-1 ring-inset ring-border-subtle"></div>
          </div>
        </motion.div>

        {/* Text Content Block */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="mx-auto max-w-4xl"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="mb-8 inline-flex items-center gap-3 rounded-full bg-white/10 px-3 py-2 ring-1 ring-border-subtle backdrop-blur"
          >
            <span className="inline-flex items-center text-[10px] font-bold tracking-wider uppercase text-neutral-900 bg-white/90 rounded-full px-2.5 py-1">
              নতুন ব্যাচ
            </span>
            <span className="text-sm font-medium text-white/90">
              রেজিস্ট্রেশন চলছে — আজই এনরোল করুন
            </span>
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
            className="sm:text-6xl text-white md:text-7xl lg:text-8xl leading-[1.1] text-5xl text-white tracking-tight font-display"
          >
            মাস্টার ইউর মাইন্ড: 
            <br className="hidden sm:block" />
            অ্যাডিকশন থেকে সেলফ-মাস্টারি
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
            className="sm:text-xl text-lg text-slate-300 max-w-2xl mt-8 mx-auto leading-relaxed"
          >
            ৩০ দিনে বাজে আসক্তি (ডোপামিন/পর্ন অ্যাডিকশন) থেকে নিজেকে মুক্ত করুন। আমরা আপনাকে শেখাবো কীভাবে ব্রেইন রিবুট করে ফোকাস ফেরাতে হয়, টাইম ম্যানেজমেন্ট মাস্টার করতে হয় এবং প্রোডাক্টিভ স্কিল ডেভেলপমেন্টের মাধ্যমে জীবনের কন্ট্রোল নিজের হাতে নিতে হয়।
          </motion.p>

          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto shadow-2xl relative overflow-hidden group">
             {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-3xl -z-10 group-hover:bg-red-500/20 transition-all duration-700"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-electric-blue/10 blur-3xl -z-10 group-hover:bg-electric-blue/20 transition-all duration-700"></div>
            
            {/* Live Status & Countdown */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="flex items-center gap-2 mb-1">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <span className="text-sm font-bold tracking-widest text-red-500 uppercase">Live</span>
              </div>
              <p className="text-slate-400 text-sm font-medium">শুরু হতে বাকি:</p>
              <div className="text-3xl font-mono font-bold text-white tracking-wider">
                02:43:54
              </div>
            </div>

            {/* Pricing Section */}
            <div className="flex flex-col items-center md:items-start gap-1">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-display font-bold text-white">৳১০০০</span>
                <span className="text-lg text-slate-500 line-through decoration-red-500/50">৳৫০০০</span>
              </div>
              <div className="text-xs font-bold text-red-400 bg-red-500/10 px-2 py-1 rounded border border-red-500/20">
                ৮০% ছাড় - সীমিত সময়ের অফার
              </div>
              <p className="text-[10px] text-slate-400 mt-2 italic">*আজীবন রেকর্ডিং সুযোগ</p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 w-full md:w-auto">
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 bg-white text-black text-sm font-bold rounded-xl px-8 py-4 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
              >
                এনরোল করুন
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
                whileTap={{ scale: 0.98 }}
                href="#product"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 px-8 py-3 text-xs font-bold text-white transition-all"
              >
                কারিকুলাম দেখুন
              </motion.a>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
    </section>
  );
}
