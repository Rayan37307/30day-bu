import { motion } from 'framer-motion';
import { ShieldCheck, RefreshCw, Users, Gift, Clock, TrophyIcon } from 'lucide-react';

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
                  <span className="text-white text-3xl md:text-4xl font-display">৳</span>
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
          <motion.div {...fadeUp(0.25)} className="w-full">
            <div className="flex items-start gap-4 rounded-2xl bg-gradient-to-br from-[#1c1c1c] to-[#050505] border-1 border-red-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] px-5 py-10 md:px-6 md:py-10">
              <div className="mt-0.5 flex-shrink-0">
                <Clock size={28} className="text-red-400" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-white text-sm md:text-base font-sans leading-relaxed">
                  এটা ডিসকাউন্ট না
                </p>
                <p className="text-red-400 text-sm md:text-base font-bold font-sans leading-relaxed">
                  এটা FOUNDER দের SPECIAL ACCESS
                </p>
              </div>
            </div>
          </motion.div>

          {/* ─── CTA Button ─── */}
          <motion.div {...fadeUp(0.3)} className="w-full">
            <a
              href="#pricing"
              className="relative w-full group block"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-red-600/20 blur-2xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative w-full bg-gradient-to-b from-[#ff2222] to-[#cc0000] border-b-[5px] border-[#880000] rounded-xl py-4 px-8 flex items-center justify-center gap-3 transition-all duration-150 active:border-b-[0px] active:translate-y-[5px] group-hover:brightness-110 shadow-[0_8px_30px_rgba(204,0,0,0.4)]">
                {/* <span className="text-white/70 text-lg">🔒</span> */}
                <span className="relative z-10 text-white  text-xl md:text-lg tracking-[0.12em] uppercase font-sans">
                  BECOME A FOUNDING MEMBER
                </span>
                {/* <span className="relative z-10 text-white/70 text-lg">›</span> */}
              </div>
            </a>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
