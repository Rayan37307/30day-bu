import { motion } from "framer-motion";

const symptoms = [
  "আজকে শেষ বারের মতো হাত মারবো। আজকেই লাস্ট। প্রমিস!",
  "কালকে থেকে ভালো হয়ে যাবো।",
  "সারাদিন কিছু করতে মনে চায় না। সবকিছু বিরক্ত লাগে।",
  "কোনো কাজে ৫ মিনিটের বেশি ফোকাস নাই।",
  "জীবনের কোনো লক্ষ্য নাই। এমনেই বেঁচে আছি কোনোমতে।"
];

export function IsThisYou() {
  return (
    <section className="w-full relative py-24 bg-black overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[900px] mx-auto px-6 relative z-10">
        
        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display font-bold text-white mb-20 text-center"
        >
          এটা কী <span className="text-electric-blue">তুমি?</span>
        </motion.h2>

        {/* Timeline List */}
        <div className="relative pl-6 md:pl-0">
          
          {/* Vertical String / Line */}
          <div className="absolute left-[31px] md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-red-500/50 to-transparent md:-translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-20">
            {symptoms.map((text, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
              >
                {/* Dot */}
                <div className="absolute left-[-1px] md:left-1/2 w-[14px] h-[14px] rounded-full bg-electric-blue border-[3px] border-black md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(255,59,59,0.8)]"></div>
                
                {/* Content Box */}
                <div className="w-full md:w-[45%] ml-8 md:ml-0">
                  <div className="glass-panel relative rounded-2xl p-6 md:p-8 border border-white/5 shadow-xl hover:border-electric-blue/30 transition-all duration-300 group">
                    {/* Subtle glow inside the card on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/0 to-electric-blue/0 group-hover:from-electric-blue/5 group-hover:to-transparent rounded-2xl transition-all duration-500" />
                    
                    <p className="relative z-10 text-slate-200 text-lg md:text-xl font-medium leading-relaxed font-sans">
                      {text}
                    </p>
                  </div>
                </div>
                
                {/* Empty space for alternate side on desktop */}
                <div className="hidden md:block w-[45%]"></div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
