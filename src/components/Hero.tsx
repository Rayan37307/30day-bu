import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "./Button";

export function Hero() {
  return (
    <section className="w-full isolate min-h-[85vh] md:min-h-screen overflow-hidden relative bg-black flex flex-col items-center justify-center pt-8 md:pt-24 pb-16 md:pb-24">
      
      {/* Red/Purple Gradient Background Glows for Glassmorphism */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-red-900/10 via-transparent to-transparent pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="z-10 relative w-full max-w-[1200px] mx-auto px-6 text-center flex flex-col items-center">
        

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="leading-[1.2] font-display max-w-5xl mx-auto mb-8"
        >
          <span className="text-3xl sm:text-4xl lg:text-5xl text-white align-middle block mb-3">নিজের ফিরিয়ে আনতে <span className="text-red-500">বেস্ট ভার্সনকে</span></span>
          <span className="text-4xl sm:text-5xl lg:text-5xl text-white align-middle">
            শুধু <span className="text-gradient-red drop-shadow-sm ">৩০ দিনই</span> যথেষ্ট
          </span>
        </motion.h1>

        {/* Massive Video */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[1200px] mx-auto mb-6 relative group"
        >
          
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[#09090b] border border-red-900/30 p-2">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/RG6fjpBbGpA?modestbranding=1&rel=0"
              title="Course Intro Video"
              aria-label="Backbencher University Course Introduction Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-2 flex flex-col items-center gap-4"
        >
          <Button as="a" href="#pricing" className="scale-[1.2] font-anton md:scale-[1.3] origin-top w-full leading-[1.1] tracking-tightest max-w-[400px] text-xl">
            START YOUR COMEBACK
          </Button>
          
          {/* Micro Trust Element */}
          {/* <div className="flex items-center gap-2 mt-1 opacity-80">
            <div className="flex items-center text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-slate-300 text-sm font-medium tracking-wide">Join 5,000+ action takers.</span>
          </div> */}
        </motion.div>

      </div>
    </section>
  );
}
