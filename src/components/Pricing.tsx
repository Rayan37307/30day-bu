import React from 'react';

export function Pricing() {
  const features = [
    "৩০ দিনের লাইভ ইন্টারঅ্যাকটিভ ক্লাস",
    "হাতে-কলমে এআই এডিটিং এবং গাইড",
    "এক্সক্লুসিভ প্রাইভেট ডিসকর্ড কমিউনিটি",
    "মেন্টরদের সাথে সরাসরি প্রশ্নোত্তর",
    "কোর্স শেষে সার্টিফিকেট প্রদান"
  ];

  return (
    <div className="mx-auto max-w-[1200px] max-md:px-6" id="pricing">
      <div className="flex flex-col gap-x-16 gap-y-16 rounded-lg border border-border-subtle bg-surface mt-20 mb-20 px-6 py-20 relative overflow-hidden">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 w-full relative z-10">
          <div className="flex flex-col gap-6 w-full">
            <div className="flex gap-3 items-center">
              <span className="flex items-center justify-center text-[11px] font-mono font-medium text-red-400 bg-red-500/10 w-7 h-7 border-border-subtle border rounded-lg shadow-[0_0_10px_rgba(239,68,68,0.2)]">
                04
              </span>
              <span className="uppercase text-sm font-medium text-gray-500 tracking-widest font-sans">
                PRICING
              </span>
            </div>
            <h2 className="md:text-5xl lg:text-6xl leading-[1.1] text-4xl text-white font-display font-normal tracking-tight">
              সবার জন্য সহজ <span className="text-text-secondary">প্রাইসিং।</span>
            </h2>
            <p className="text-lg text-gray-400 font-light w-full leading-relaxed font-sans">
              কোনো মাসিক ফি নেই। একবার পেমেন্ট করুন এবং আজীবনের জন্য কোর্সের সকল রিসোর্স এবং ফিউচার আপডেট পেয়ে যান।
            </p>
          </div>

          <div className="z-10 flex flex-col items-center md:items-end relative">
            <div className="flex bg-[#111111] border-white/10 border rounded-full p-1.5 backdrop-blur-sm items-center">
              <div className="text-sm font-semibold text-black bg-white rounded-full px-8 py-2.5 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                এককালীন পেমেন্ট
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <section className="flex flex-col pt-0 relative gap-x-12 gap-y-12 items-center justify-center">
          {/* Background Glow Effects */}
          <div className="pointer-events-none absolute inset-0 opacity-50">
            <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-red-500/30 to-transparent"></div>
            <div className="absolute top-0 bottom-0 left-1/4 w-px bg-gradient-to-b from-transparent via-red-500/10 to-transparent"></div>
            <div className="absolute top-0 bottom-0 right-1/4 w-px bg-gradient-to-b from-transparent via-red-500/10 to-transparent"></div>
            <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-red-900/10 to-transparent opacity-30"></div>
          </div>

          {/* Pricing Card */}
          <div className="overflow-hidden z-10 group bg-surface w-full max-w-[1200px] border-border-subtle border rounded-lg relative shadow-2xl">
            {/* Card Background */}
            <div className="pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2e1a1a] via-surface to-surface absolute inset-0"></div>
            {/* Stars Effect */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{ 
                backgroundImage: 'radial-gradient(white 1px, transparent 1px)', 
                backgroundSize: '40px 40px', 
                maskImage: 'radial-gradient(circle, black 40%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 100%)'
              }}
            ></div>

            <div className="grid grid-cols-1 md:grid-cols-2 p-6 min-h-[450px] relative gap-12">
              {/* Left Column */}
              <div className="flex flex-col gap-8 h-full items-start justify-between">
                {/* Icon & Title */}
                <div className="flex items-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-red-400">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.1 4-1 4-1s.25 2.25 0 4z"></path>
                    <path d="M15 13v5s3.03-.55 4-2c1.1-1.62 1-4 1-4s-2.25-.25-4 0z"></path>
                  </svg>
                  <span className="text-3xl font-normal text-white tracking-tight font-display">
                    প্রো প্ল্যান
                  </span>
                </div>

                {/* Price */}
                <div>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-8xl lg:text-9xl font-normal text-white tracking-tight font-display">
                      ৳১০০০
                    </span>
                    <span className="text-2xl lg:text-3xl font-normal text-white tracking-tight font-display opacity-90 line-through decoration-red-500/50">
                      ৳৫০০০
                    </span>
                  </div>
                  <p className="text-gray-400 text-lg font-light font-sans">
                    আজীবন অ্যাক্সেস। কোনো লুকানো খরচ নেই।
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col justify-between h-full gap-10">
                {/* Features List */}
                <ul className="space-y-6 pt-2">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-white text-xl font-light font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="flex justify-start md:justify-end mt-auto pt-4">
                  <button className="w-full sm:w-auto hover:bg-red-500/10 hover:border-red-400 hover:shadow-[0_0_35px_rgba(239,68,68,0.6),inset_0_0_20px_rgba(239,68,68,0.4)] hover:scale-[1.02] transition-all duration-300 flex group text-base font-medium text-white bg-black/60 border-red-500 border rounded-lg px-12 py-4 shadow-[0_0_20px_rgba(239,68,68,0.5),inset_0_0_10px_rgba(239,68,68,0.2)] gap-2 items-center justify-center">
                    এখনই জয়েন করুন
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
