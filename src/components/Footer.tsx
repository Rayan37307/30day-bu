import { Youtube, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-transparent pt-12 pb-8 px-6 relative z-10 mt-auto">
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <img 
            src="https://yt3.ggpht.com/7umIhrv3vy-yRasCnhA2ps10Av3jEzLHEbhb67eUYfwP_3y25_KrKWACDjDC7GBbvxqIh1KkT7k=s176-c-k-c0x00ffffff-no-rj-mo" 
            alt="Logo" 
            className="w-8 h-8 rounded-full object-cover" 
            referrerPolicy="no-referrer"
          />
          <span className="text-white font-bold text-base tracking-wide">Backbenchers University</span>
        </div>

        {/* Center: Copyright */}
        <div className="text-[#a1a1aa] text-[13px] md:absolute md:left-1/2 md:-translate-x-1/2 font-medium">
          Copyright {new Date().getFullYear()} © Backbenchers University
        </div>

        {/* Right: Socials */}
        <div className="flex items-center gap-5">
          <a href="#" className="text-[#a1a1aa] hover:text-white transition-colors" aria-label="YouTube">
            <Youtube size={20} />
          </a>
          <a href="#" className="text-[#a1a1aa] hover:text-white transition-colors" aria-label="Facebook">
            <Facebook size={20} className="fill-current stroke-0" />
          </a>
        </div>

      </div>
    </footer>
  );
}
