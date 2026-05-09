import { useState, useEffect } from 'react';
import { Button } from './Button';

export function StickyBottomBar() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 16,
    minutes: 27,
    seconds: 6
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              if (days > 0) {
                days--;
                hours = 23;
              } else {
                clearInterval(timer);
                return prev;
              }
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-[#1a0000] via-[#2a0000] to-[#1a0000] border-t border-[#E50914]/30 z-[100] shadow-[0_-10px_40px_rgba(0,0,0,0.5)] hidden lg:block">
      <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between">
        
        {/* Left: Image, Text & Timer */}
        <div className="flex items-center gap-6 h-full">
          <div className="h-[90px] w-[80px] -mt-[18px] relative overflow-visible">
             <img src="/IMG_2718-removebg-preview.png" alt="Mentor" className="w-full h-full object-contain object-bottom drop-shadow-md" />
          </div>
          
          <span className="text-white/90 text-[15px] font-sans tracking-wide">
            Hurry Up!! Time is running out.
          </span>
          
          <div className="flex items-center gap-2 ml-2">
            <TimeUnit value={timeLeft.days} />
            <TimeUnit value={timeLeft.hours} />
            <TimeUnit value={timeLeft.minutes} />
            <TimeUnit value={timeLeft.seconds} />
          </div>
        </div>

        {/* Right: Discount & Button */}
        <div className="flex items-center gap-6">
          <span className="text-white/90 text-sm tracking-wider uppercase font-sans">
            GET AT <span className="text-electric-blue font-bold">50%</span> DISCOUNT
          </span>
          
          <a 
            href="#pricing" 
            className="py-2.5 px-6 rounded-full border border-electric-blue/60 bg-gradient-to-r from-[#3a0000] to-[#5a0000] text-white font-bold text-sm tracking-wide transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(255,59,59,0.3)] whitespace-nowrap"
          >
            Register Today for ৳৯৯৯
          </a>
        </div>

      </div>
    </div>
  );
}

function TimeUnit({ value }: { value: number }) {
  return (
    <div className="w-[38px] h-[38px] rounded-md border border-electric-blue/40 bg-[#3a0000] flex items-center justify-center shadow-inner">
      <span className="text-white font-bold text-lg leading-none font-sans">{value}</span>
    </div>
  );
}
