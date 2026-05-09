import { motion } from 'framer-motion';
import { ShieldCheck, RefreshCw, Users, Gift, Clock, TrophyIcon, Crown } from 'lucide-react';
import { Button } from './Button';

const perks = [
  { icon: ShieldCheck, label: "Exclusive Brotherhood Access" },
  { icon: RefreshCw, label: "30 Days Transformation System" },
  { icon: Users, label: "Private Community" },
  { icon: Gift, label: "Premium Growth Resources" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: "easeOut" as const, delay },
});

export function FoundingMember() {
  return (
    <section
      id="founding-member"
      className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-10 lg:py-18"
    >
      <motion.div
        {...fadeUp(0)}
        className="relative rounded-[28px] border-2 border-red-600/50 bg-[#0a0000] overflow-hidden shadow-[0_0_80px_rgba(229,9,20,0.08)]"
      >
        {/* ── Background atmosphere ── */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-red-600/8 blur-[120px] rounded-full" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(white 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
            }}
          />
        </div>

        {/* ── Content ── */}
        <div className="relative z-10 flex flex-col items-center px-6 md:px-12 lg:px-16 py-12 md:py-16 gap-10">
          {/* ─── Crown Badge ─── */}
          <motion.div {...fadeUp(0.05)} className="flex items-center gap-2.5 bg-red-600/15 border border-red-500/40 rounded-full px-5 py-2">

            <span className="text-[14px] md:text-xl font-bold uppercase tracking-[0.2em] text-white font-sans">
              Founding Member Access
            </span>
          </motion.div>

          {/* ─── Headline ─── */}
          <motion.div {...fadeUp(0.1)} className="text-center w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-white leading-[1.1] tracking-tight">
              তুমি আজই শুরু করলে,{' '}
              <br className="hidden sm:block" />
              তুমি এই <span className="text-white font-bold">MOVEMENT</span>-এর{' '}
              <br className="hidden sm:block" />
              <span className="text-red-500 font-bold">FOUNDING MEMBER</span>
            </h2>
          </motion.div>

          {/* ─── Price Cards ─── */}

          <motion.div {...fadeUp(0.15)} className="flex flex-col sm:flex-row items-stretch justify-center gap-5 md:gap-6 w-full">
            {/* Regular Price Card — RED */}
            <div className="flex flex-col w-full flex-1 gap-3">
              <span className="text-[30px] font-bold uppercase text-center leading-[1.1] tracking-tight text-red-500 font-display">
                ORIGINAL <span className='text-white'>PRICE</span>
              </span>
              <div className="relative flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-red-500/70 bg-gradient-to-b from-red-950/60 via-red-950/40 to-[#0d0000] px-8 py-8 sm:py-10 shadow-[0_0_30px_rgba(239,68,68,0.1)] h-full">
                <div className="flex items-baseline gap-1">
                  <span className="text-white text-2xl md:text-3xl font-display">৳</span>
                  <div className="relative inline-block">
                    <motion.span
                      className="block text-white text-6xl md:text-8xl font-display font-bold"
                      initial={{ opacity: 1 }}
                      whileInView={{ opacity: 0.45 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 2.1, ease: 'easeIn' }}
                    >
                      9,900
                    </motion.span>
                    {/* Animated slash */}
                    <motion.div
                      className="absolute left-[-6px] right-[-6px] h-[4px] md:h-[5px] bg-red-500 top-[52%] -translate-y-1/2 origin-left rounded-full pointer-events-none"
                      style={{
                        rotate: -6,
                        boxShadow: '0 0 10px rgba(239,68,68,0.9), 0 0 28px rgba(239,68,68,0.5)',
                      }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, delay: 0.95, ease: [0.25, 0.1, 0.25, 1] }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="text-red-500 text-3xl font-bold hidden sm:flex items-center select-none pt-8">›</div>
            <div className="text-red-500 text-3xl font-bold sm:hidden flex justify-center select-none rotate-90">›</div>

            {/* Founding Member Price Card — GREEN */}
            <div className="flex flex-col w-full flex-1 gap-3">
              <span className="text-[30px] font-bold uppercase text-center leading-[1.1] tracking-tight text-green-500 font-display">
                FOUNDING MEMBER <span className='text-white'>PRICE</span>
              </span>
              <div className="relative flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-green-500/70 bg-gradient-to-b from-green-900/50 via-green-950/40 to-[#000d04] px-8 py-8 sm:py-10 shadow-[0_0_40px_rgba(34,197,94,0.12)] h-full">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-white text-3xl md:text-4xl font-sans">৳</span>
                  <span className="text-white text-6xl md:text-8xl font-display font-bold leading-none">
                    990
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ─── Perks Row ─── */}
          <motion.div {...fadeUp(0.2)} className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full">
            {perks.map((perk, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center gap-3 rounded-xl bg-gradient-to-br from-[#1c1c1c] to-[#050505] border-1 border-red-500 px-4 py-6 text-center hover:border-white/20 hover:from-[#252525] transition-all duration-300 overflow-hidden group shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
              >
                {/* Subtle top glow */}
                <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <perk.icon size={28} className="text-red-400" />
                <span className="text-[14px] font-bold uppercase leading-[1.1] tracking-tight text-white font-sans">
                  {perk.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* ─── Founder Privilege Note ─── */}
          <motion.div {...fadeUp(0.25)} className="w-full flex justify-center">
            <div 
              className="relative w-full flex flex-col items-center justify-center rounded-2xl border-2 border-red-600/50 bg-[#09090b] px-6 py-10"
              style={{
                boxShadow: `0 20px 60px rgba(0,0,0,0.8), 0 0 60px rgba(255,59,59,0.15)`,
              }}
            >
              {/* Top Accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] z-20 rounded-t-2xl"
                style={{
                  background: `linear-gradient(90deg, transparent, #ff3b3b, transparent)`,
                }}
              />

              {/* Red glow behind the crown */}
              <div className="absolute top-10 w-24 h-24 bg-red-600/20 blur-xl rounded-xl pointer-events-none"></div>
{/*               
              <Crown size={40} className="text-[#ff2222] fill-[#ff2222] mb-4 relative z-10" style={{ filter: 'drop-shadow(0 0 10px rgba(255,34,34,0.6))' }} /> */}
              
              <div className="flex flex-col items-center w-full gap-3 relative z-10">
                <div className="relative w-full text-center pb-5 mb-2 border-b border-white/10">
                  {/* Faint line with a dot in middle */}
                  <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent"></div>
                  <div className="absolute -bottom-[3px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-red-600 rotate-45 shadow-[0_0_5px_rgba(255,0,0,0.8)]"></div>
                  
                  <h3 className="text-white text-center font-sans text-2xl md:text-[32px] leading-tight">
                    এটা <span className="text-[#ff3b3b] font-bold tracking-wide">ডিসকাউন্ট</span> না
                  </h3>
                </div>
                
                <h2 className="text-white text-center font-display text-[28px] md:text-5xl mt-1 font-bold tracking-wide">
                  <span className="text-white">FOUNDER MEMBER</span> দের
                </h2>

                <div className="mt-4 w-full bg-gradient-to-b from-[#1a0505] to-[#0a0000] border border-red-900/40 py-4 px-6 md:px-10 relative overflow-hidden flex justify-center items-center"
                  style={{
                    
                    boxShadow: "inset 0 0 20px rgba(255,0,0,0.1)"
                  }}
                >
                  <h1 className="text-[#ff2222] font-display text-4xl md:text-[64px] font-bold uppercase tracking-tight text-center" style={{ textShadow: "0 4px 10px rgba(255,0,0,0.3)" }}>
                    SPECIAL ACCESS
                  </h1>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ─── CTA Button ─── */}
          <motion.div {...fadeUp(0.3)} className="w-full flex justify-center items-center">
            <a
              href="#pricing"
              className="relative w-full max-w-md group block"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-red-600/20 blur-2xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <Button className="relative z-10 text-white text-center  text-xl md:text-lg tracking-[0.12em] uppercase font-sans">
                BECOME A FOUNDING MEMBER
              </Button>
            </a>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
