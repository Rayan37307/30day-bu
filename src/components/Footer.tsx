import { Youtube, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-transparent py-12">
      <div className="max-w-[1200px] mx-auto px-6 border-t border-border-subtle pt-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Credits Section */}
          <div className="flex flex-col gap-2 text-center md:text-left">
            <p className="text-sm font-medium text-slate-200">
              {new Date().getFullYear()} © ব্যাকবেঞ্চার্স ইউনিভার্সিটি
            </p>
            <p className="text-[12px] text-text-secondary tracking-wide">
              প্যাশন থেকে প্রফিট: এআই এবং ক্রিয়েটর ইকোনমি
            </p>
          </div>

          {/* Social Icons Section */}
          <div className="flex items-center gap-4">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-lg border border-border-subtle bg-surface/50 hover:bg-surface hover:border-white/20 transition-all group"
              aria-label="Facebook"
            >
              <Facebook size={20} className="text-text-secondary group-hover:text-white transition-colors" />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-lg border border-border-subtle bg-surface/50 hover:bg-surface hover:border-white/20 transition-all group"
              aria-label="YouTube"
            >
              <Youtube size={20} className="text-text-secondary group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
