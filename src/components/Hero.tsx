import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="w-full isolate min-h-screen overflow-hidden relative"
  data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(1)">
  <img src="/modules/bg.jpg" alt="" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0"/>
    <div className="pointer-events-none absolute inset-0 ring-1 ring-black/30"></div>
    <header className="z-10 xl:top-6 relative">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img 
              src="https://yt3.ggpht.com/7umIhrv3vy-yRasCnhA2ps10Av3jEzLHEbhb67eUYfwP_3y25_KrKWACDjDC7GBbvxqIh1KkT7k=s176-c-k-c0x00ffffff-no-rj-mo" 
              alt="Logo" 
              className="w-[46px] h-[46px] rounded-lg object-cover shadow-lg" 
              referrerPolicy="no-referrer"
            />
          </a>
          <nav className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-full bg-white/5 px-1 py-1 ring-1 ring-border-subtle backdrop-blur">
              <a href="#overview" className="px-4 py-2 text-[15px] font-medium text-white/80 hover:text-white transition-colors">
                ওভারভিউ
              </a>
              <a href="#product" className="px-4 py-2 text-[15px] font-medium text-white/80 hover:text-white transition-colors">
                কোর্স
              </a>
              <a href="#pricing" className="px-4 py-2 text-[15px] font-medium text-white/80 hover:text-white transition-colors">
                প্রাইসিং
              </a>
              <a href="#contacts" className="px-4 py-2 text-[15px] font-medium text-white/80 hover:text-white transition-colors">
                যোগাযোগ
              </a>
              <a href="#pricing"
                className="ml-2 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-[15px] font-semibold text-neutral-900 hover:bg-white/90 transition-all">
                এনরোল করুন
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                  className="h-4 w-4">
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </a>
            </div>
          </nav>
          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur" id="mobile-menu-button" aria-expanded="false" aria-label="Toggle menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5 text-white/90"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
          </button>
        </div>
      </div>
    </header>
    <div className="z-10 relative">
      <div className="sm:pt-28 md:pt-32 lg:pt-40 max-w-[1200px] mx-auto pt-28 px-6 pb-24 text-center">
        <div className="mx-auto max-w-4xl">
          <div
            className="mb-8 inline-flex items-center gap-3 rounded-full bg-white/10 px-3 py-2 ring-1 ring-border-subtle backdrop-blur animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
            <span className="inline-flex items-center text-[10px] font-bold tracking-wider uppercase text-neutral-900 bg-white/90 rounded-full px-2.5 py-1">
              নতুন ব্যাচ
            </span>
            <span className="text-sm font-medium text-white/90">
              রেজিস্ট্রেশন চলছে — আজই এনরোল করুন
            </span>
          </div>
          <h1
            className="sm:text-6xl text-white md:text-7xl lg:text-8xl leading-[1.1] text-5xl text-white tracking-tight font-display animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">
            প্যাশন থেকে প্রফিট: 
            <br className="hidden sm:block" />
            এআই এবং ক্রিয়েটর ইকোনমি
          </h1>
          <p
            className="sm:text-xl animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.3s_both] text-lg text-slate-300 max-w-2xl mt-8 mx-auto leading-relaxed">
            ৩০ দিনে শিখুন কীভাবে এআই ব্যবহার করে আপনার প্যাশনকে একটি সফল ক্যারিয়ারে রূপান্তর করবেন। আমরা আপনাকে শেখাবো কন্টেন্ট ক্রিয়েশন, প্রোডাক্টিভিটি এবং কোডিং-এর আধুনিক সব টেকনিক।
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 mt-12 items-center justify-center animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.4s_both]">
            <a href="#pricing"
              className="inline-flex items-center gap-2 bg-white/10 ring-border-subtle ring-1 hover:bg-white/15 text-white text-[16px] font-bold rounded-full px-8 py-4 transition-all hover:scale-105 active:scale-95">
              এনরোল করুন
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                className="h-5 w-5">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
            <a href="#product"
              className="inline-flex items-center gap-2 rounded-full bg-transparent px-8 py-4 text-[16px] font-bold text-white/90 hover:text-white transition-all">
              কারিকুলাম দেখুন
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                className="w-5 h-5">
                <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z">
                </path>
              </svg>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-24 max-w-4xl animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.5s_both]">
          <div className="relative group">
            {/* Ambient Glow Background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-white/5 rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition duration-1000"></div>
            
            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border-subtle bg-black/40 shadow-2xl backdrop-blur-sm">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/RG6fjpBbGpA?start=0&end=20&autoplay=1&mute=1&loop=1&playlist=RG6fjpBbGpA&controls=0&modestbranding=1&rel=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Optional Overlay for Polish */}
            <div className="absolute inset-0 pointer-events-none rounded-lg ring-1 ring-inset ring-border-subtle"></div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
