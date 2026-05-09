import { motion } from 'framer-motion';
import { ShieldCheck, RefreshCw, Users, Gift, Clock, TrophyIcon } from 'lucide-react';

const perks = [
  { icon: ShieldCheck, label: "FOUNDER'S SPECIAL ACCESS", labelBn: "ফাউন্ডারদের বিশেষ সুবিধা" },
  { icon: RefreshCw, label: "LIFETIME UPDATES", labelBn: "সব আপডেট ফ্রি" },
  { icon: Users, label: "PRIVATE COMMUNITY", labelBn: "এক্সক্লুসিভ কমিউনিটি" },
  { icon: Gift, label: "BONUS RESOURCES", labelBn: "এক্সক্লুসিভ বোনাস" },
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
      className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-16 md:py-24"
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
            <p className="mt-4 text-sm md:text-base text-gray-400 leading-relaxed">
              শুরু থেকেই যারা এই journey-এর আশি হবে,{' '}
              তাদের জন্য lifetime lowest price.
            </p>
          </motion.div>

          {/* ─── Price Cards ─── */}
             
          <motion.div {...fadeUp(0.15)} className="flex flex-col sm:flex-row items-stretch justify-center gap-5 md:gap-6 w-full">
            {/* Regular Price Card — RED */}
            
            <div className="relative flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-red-500/70 bg-gradient-to-b from-red-950/60 via-red-950/40 to-[#0d0000] px-8 py-8 sm:py-10 flex-1 shadow-[0_0_30px_rgba(239,68,68,0.1)]">
              <div className="flex items-baseline gap-1">
                <span className="text-white text-2xl md:text-3xl font-display">৳</span>
                <span className="text-white text-6xl md:text-8xl font-display font-bold line-through decoration-red-500/80 decoration-[3px]">
                  9,900
                </span>
              </div>
            </div>

            {/* Arrow */}
            <div className="text-red-500 text-3xl font-bold hidden sm:flex items-center select-none">›</div>
            <div className="text-red-500 text-3xl font-bold sm:hidden flex justify-center select-none rotate-90">›</div>

            {/* Founding Member Price Card — GREEN */}
            
            <div className="relative flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-green-500/70 bg-gradient-to-b from-green-900/50 via-green-950/40 to-[#000d04] px-8 py-8 sm:py-10 flex-1 shadow-[0_0_40px_rgba(34,197,94,0.12)]">
              
              <div className="flex items-baseline gap-1.5">
                <span className="text-white text-3xl md:text-4xl font-display">৳</span>
                <span className="text-white text-6xl md:text-8xl font-display font-bold leading-none">
                  990
                </span>
              </div>
            </div>
          </motion.div>

          {/* ─── Perks Row ─── */}
          <motion.div {...fadeUp(0.2)} className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full">
            {perks.map((perk, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 rounded-xl bg-white/[0.04] border border-white/10 px-4 py-6 text-center hover:border-red-500/30 transition-colors duration-300"
              >
                <perk.icon size={28} className="text-red-400" />
                <span className="text-[13px] font-bold uppercase tracking-[0.12em] text-white font-sans leading-snug">
                  {perk.label}
                </span>
                <span className="text-[12px] text-gray-300 font-sans leading-snug">
                  {perk.labelBn}
                </span>
              </div>
            ))}
          </motion.div>

          {/* ─── Founder Privilege Note ─── */}
          <motion.div {...fadeUp(0.25)} className="w-full">
            <div className="flex items-start gap-4 rounded-2xl bg-white/[0.03] border border-white/10 px-5 py-5 md:px-6 md:py-5">
              <div className="mt-0.5 flex-shrink-0">
                <Clock size={28} className="text-red-400" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-white text-sm md:text-base font-sans leading-relaxed">
                  এটা ডিসকাউন্ট না, <span className="inline-block">✓</span>
                </p>
                <p className="text-red-400 text-sm md:text-base font-bold font-sans leading-relaxed">
                  এটা শুরু থেকেই নিয়মিতদের জন্য privilege.
                </p>
                <p className="text-gray-400 text-xs md:text-sm font-sans leading-relaxed">
                  Launch-এর পর এই price আর কখনো আসবে না।
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
                <span className="text-white/70 text-lg">🔒</span>
                <span className="relative z-10 text-white font-bold text-base md:text-lg tracking-[0.12em] uppercase font-sans">
                  আমি FOUNDING MEMBER হতে চাই
                </span>
                <span className="relative z-10 text-white/70 text-lg">›</span>
              </div>
            </a>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
