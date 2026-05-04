import React from 'react';

export function Footer() {
  return (
    <footer className="overflow-hidden text-white bg-[#050505] border-neutral-800 border-t pt-24">
      {/* Giant Brand Text */}
      <div 
        className="text-center w-full mb-20 px-4"
        style={{ 
          maskImage: 'linear-gradient(180deg, transparent, black 0%, black 55%, transparent)', 
          WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 55%, transparent)' 
        }}
      >
        <h1 className="text-[15vw] leading-[0.7] select-none font-normal footer-brand-text text-[#141414] tracking-tighter mix-blend-screen scale-y-110">
          BACKBENCHERS
        </h1>
      </div>

      {/* Links Grid */}
      <div className="border-t border-neutral-900 grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side: Navigation Links */}
        <div className="p-8 md:p-16 grid grid-cols-2 gap-12 border-r border-neutral-900">
          <div className="flex flex-col gap-6">
            <a href="#" className="text-xs font-medium text-neutral-500 uppercase tracking-widest hover:text-white transition-colors">আমাদের সম্পর্কে</a>
            <a href="#" className="text-xs font-medium text-neutral-500 uppercase tracking-widest hover:text-white transition-colors">কোর্স</a>
            <a href="#" className="text-xs font-medium text-neutral-500 uppercase tracking-widest hover:text-white transition-colors">টেকনোলজি</a>
          </div>
          <div className="flex flex-col gap-6">
            <a href="#" className="text-xs font-medium text-neutral-500 uppercase tracking-widest hover:text-white transition-colors">যোগাযোগ</a>
            <a href="#" className="text-xs font-medium text-neutral-500 uppercase tracking-widest hover:text-white transition-colors">ইনস্টাগ্রাম</a>
            <a href="#" className="text-xs font-medium text-neutral-500 uppercase tracking-widest hover:text-white transition-colors">টুইটার</a>
            <a href="#" className="text-xs font-medium text-neutral-500 uppercase tracking-widest hover:text-white transition-colors">ফেসবুক</a>
          </div>
        </div>

        {/* Right Side: Wireframe Illustration */}
        <div className="lg:h-auto lg:border-t-0 flex overflow-hidden aether-bottles w-full h-48 border-neutral-900 border-t relative items-center justify-center">
          <svg viewBox="0 0 400 120" className="opacity-20 max-h-[160px] w-full h-full" preserveAspectRatio="xMidYMid meet" strokeWidth="2">
            {/* Tube 1 (Outline) */}
            <path d="M40 100 L50 30 L90 30 L100 100" stroke="white" strokeWidth="1" fill="none"></path>
            <rect x="50" y="20" width="40" height="10" stroke="white" strokeWidth="1" fill="none"></rect>

            {/* Tube 2 (Outline) */}
            <path d="M120 100 L130 10 L170 10 L180 100" stroke="white" strokeWidth="1" fill="none"></path>
            <rect x="130" y="5" width="40" height="5" stroke="white" strokeWidth="1" fill="none"></rect>

            {/* Dropper Bottle (wave liquid) */}
            <g transform="translate(200, 10)" className="dropper-bottle">
              <defs>
                <clipPath id="dropper-clip">
                  <path d="M15 25 Q15 20 20 20 L40 20 Q45 20 45 25 L45 80 Q45 90 30 90 Q15 90 15 80 Z" />
                </clipPath>
              </defs>
              <path d="M25 0 L25 10 L20 10 L20 20 L40 20 L40 10 L35 10 L35 0 Z" stroke="white" strokeWidth="1" fill="none"></path>
              <path d="M15 25 Q15 20 20 20 L40 20 Q45 20 45 25 L45 80 Q45 90 30 90 Q15 90 15 80 Z" stroke="white" strokeWidth="1" fill="none"></path>
              <g clipPath="url(#dropper-clip)">
                <rect className="liquid-fill" x="15" y="60" width="30" height="30" fill="#ef4444" opacity="0.6"></rect>
                <path className="liquid-wave" d="M15 60 Q22 55 30 57 Q38 59 45 56 L45 90 L15 90 Z" fill="#ef4444" opacity="0.9"></path>
              </g>
            </g>

            {/* Tube 3 (Outline) */}
            <path d="M270 100 L280 20 L320 20 L330 100" stroke="white" strokeWidth="1" fill="none"></path>
            <rect x="280" y="10" width="40" height="10" stroke="white" strokeWidth="1" fill="none"></rect>

            {/* Dropper 2 (Outline) */}
            <g transform="translate(350, 20)">
              <rect x="25" y="0" width="10" height="20" stroke="white" strokeWidth="1" fill="none"></rect>
              <path d="M15 25 Q15 20 20 20 L40 20 Q45 20 45 25 L45 70 Q45 80 30 80 Q15 80 15 70 Z" stroke="white" strokeWidth="1" fill="none"></path>
            </g>
          </svg>
        </div>

        {/* Copyright Row */}
        <div className="border-t border-neutral-900 px-8 md:px-16 py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-neutral-600 font-medium tracking-wide lg:col-span-2">
          <div>
            {new Date().getFullYear()} © সর্বস্বত্ব সংরক্ষিত - ব্যাকবেঞ্চার্স ইউনিভার্সিটি
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">প্রাইভেসি পলিসি</a>
            <a href="#" className="hover:text-white transition-colors">ব্যবহারের শর্তাবলী</a>
            <a href="#" className="hover:text-white transition-colors">কুকিজ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
