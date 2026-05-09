import { motion } from "framer-motion";
import { ThumbsUp, ThumbsDown } from "lucide-react";

export function SocialProof() {
  const reviewsRow1 = [
    {
      name: "@RafiqAhmed",
      time: "2 days ago",
      text: "আগে প্রতিদিন ঘন্টার পর ঘন্টা বাজে অভ্যাসে নষ্ট করতাম। এই কোর্সটি আমার চোখ খুলে দিয়েছে। এখন আমি সম্পূর্ণ ক্লিন এবং আমার সব ফোকাস স্কিল ডেভেলপমেন্টে দিচ্ছি। ৫ স্টার! ⭐⭐⭐⭐⭐",
      initials: "RA",
    },
    {
      name: "@TaniaHossain",
      time: "1 week ago",
      text: "টাইম ম্যানেজমেন্ট মডিউলটি অবিশ্বাস্য। GTD মেথড ফলো করে আমি এখন আমার পড়াশোনা এবং পার্সোনাল প্রজেক্টগুলো খুব সুন্দরভাবে ব্যালেন্স করতে পারছি।",
      initials: "TH",
    },
    {
      name: "@ShafiqHasan",
      time: "3 weeks ago",
      text: "আমার জীবনের সেরা ১০০০ টাকা ইনভেস্টমেন্ট। ডোপামিন ডিটক্স মডিউলটা আমাকে আমার হারিয়ে যাওয়া ফোকাস ফিরিয়ে দিয়েছে। ব্রেইন এখন আগের চেয়ে অনেক শার্প।",
      initials: "SH",
    },
    {
      name: "@NaimulIslam",
      time: "1 month ago",
      text: "আসক্তি থেকে বের হওয়া এতটা সহজ হবে ভাবিনি। রিকভারি গাইডলাইনগুলো এতটাই প্র্যাকটিক্যাল যে, এখন আমি প্রতিদিন নিয়ম করে কোডিং শিখতে পারছি কোনো রকম ডিস্ট্রাকশন ছাড়াই।",
      initials: "NI",
    },
    // Duplicate for smooth marquee
    {
      name: "@RafiqAhmed",
      time: "2 days ago",
      text: "আগে প্রতিদিন ঘন্টার পর ঘন্টা বাজে অভ্যাসে নষ্ট করতাম। এই কোর্সটি আমার চোখ খুলে দিয়েছে। এখন আমি সম্পূর্ণ ক্লিন এবং আমার সব ফোকাস স্কিল ডেভেলপমেন্টে দিচ্ছি। ৫ স্টার! ⭐⭐⭐⭐⭐",
      initials: "RA",
    },
    {
      name: "@TaniaHossain",
      time: "1 week ago",
      text: "টাইম ম্যানেজমেন্ট মডিউলটি অবিশ্বাস্য। GTD মেথড ফলো করে আমি এখন আমার পড়াশোনা এবং পার্সোনাল প্রজেক্টগুলো খুব সুন্দরভাবে ব্যালেন্স করতে পারছি।",
      initials: "TH",
    },
    {
      name: "@ShafiqHasan",
      time: "3 weeks ago",
      text: "আমার জীবনের সেরা ১০০০ টাকা ইনভেস্টমেন্ট। ডোপামিন ডিটক্স মডিউলটা আমাকে আমার হারিয়ে যাওয়া ফোকাস ফিরিয়ে দিয়েছে। ব্রেইন এখন আগের চেয়ে অনেক শার্প।",
      initials: "SH",
    },
    {
      name: "@NaimulIslam",
      time: "1 month ago",
      text: "আসক্তি থেকে বের হওয়া এতটা সহজ হবে ভাবিনি। রিকভারি গাইডলাইনগুলো এতটাই প্র্যাকটিক্যাল যে, এখন আমি প্রতিদিন নিয়ম করে কোডিং শিখতে পারছি কোনো রকম ডিস্ট্রাকশন ছাড়াই।",
      initials: "NI",
    },
  ];

  const reviewsRow2 = [
    {
      name: "@NusratJahan",
      time: "5 days ago",
      text: "এত কম দামে এত ভ্যালু! প্রতিদিন ক্লাস করার জন্য অপেক্ষা করে থাকি। আমার মনে হয় সবার এই কোর্সটি করা উচিত।",
      initials: "NJ",
    },
    {
      name: "@FaisalMahmud",
      time: "2 weeks ago",
      text: "ডিটক্স মডিউলটি আমার জীবনের লক্ষ্য স্পষ্ট করেছে। এখন আমি জানি আমার কোন দিকে ফোকাস করা উচিত।",
      initials: "FM",
    },
    {
      name: "@SadiaAfrin",
      time: "3 weeks ago",
      text: "টাইম-ব্লকিং টেকনিকগুলো আমার ঘন্টার পর ঘন্টা সময় বাঁচাচ্ছে। অসাধারণ রেকমেন্ডেশন!",
      initials: "SA",
    },
    {
      name: "@KamrulHasan",
      time: "1 month ago",
      text: "কমিউনিটি সাপোর্ট সত্যিই চমৎকার। যখনই কোনো সমস্যায় পড়েছি, মেন্টর এবং অন্যান্য সদস্যরা সাথে সাথে সাহায্য করেছেন।",
      initials: "KH",
    },
     // Duplicate for smooth marquee
    {
      name: "@NusratJahan",
      time: "5 days ago",
      text: "এত কম দামে এত ভ্যালু! প্রতিদিন ক্লাস করার জন্য অপেক্ষা করে থাকি। আমার মনে হয় সবার এই কোর্সটি করা উচিত।",
      initials: "NJ",
    },
    {
      name: "@FaisalMahmud",
      time: "2 weeks ago",
      text: "ডিটক্স মডিউলটি আমার জীবনের লক্ষ্য স্পষ্ট করেছে। এখন আমি জানি আমার কোন দিকে ফোকাস করা উচিত।",
      initials: "FM",
    },
    {
      name: "@SadiaAfrin",
      time: "3 weeks ago",
      text: "টাইম-ব্লকিং টেকনিকগুলো আমার ঘন্টার পর ঘন্টা সময় বাঁচাচ্ছে। অসাধারণ রেকমেন্ডেশন!",
      initials: "SA",
    },
    {
      name: "@KamrulHasan",
      time: "1 month ago",
      text: "কমিউনিটি সাপোর্ট সত্যিই চমৎকার। যখনই কোনো সমস্যায় পড়েছি, মেন্টর এবং অন্যান্য সদস্যরা সাথে সাথে সাহায্য করেছেন।",
      initials: "KH",
    },
  ];

  const CommentCard = ({ review }: { review: any }) => (
    <div className="glass-heavy rounded-2xl p-6 w-[380px] md:w-[450px] shrink-0 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 flex flex-col gap-3 shadow-[0_0_15px_rgba(239,68,68,0.15)] hover:shadow-[0_0_25px_rgba(239,68,68,0.3)]">
      <div className="flex gap-4">
        <div className="w-10 h-10 rounded-full bg-electric-blue/20 flex items-center justify-center text-electric-blue font-bold shrink-0 text-sm">
          {review.initials}
        </div>
        <div className="flex flex-col w-full">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-bold text-[13px] text-slate-200">{review.name}</span>
            <span className="text-[12px] text-slate-400">{review.time}</span>
          </div>
          <p className="text-[14px] text-slate-200 leading-relaxed">
            {review.text}
          </p>
          <div className="flex items-center gap-4 mt-3 text-slate-400">
            <div className="flex items-center gap-1.5 cursor-pointer hover:text-slate-200 transition-colors">
              <ThumbsUp size={14} />
              <span className="text-[12px] font-medium">{Math.floor(Math.random() * 80) + 20}</span>
            </div>
            <div className="cursor-pointer hover:text-slate-200 transition-colors">
              <ThumbsDown size={14} />
            </div>
            <span className="text-[12px] font-medium ml-2 cursor-pointer hover:text-electric-blue transition-colors">Reply</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative w-full max-w-[1200px] mx-auto overflow-hidden py-20 px-6">
      {/* Background Orb for Glassmorphism */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="text-center mb-16 relative z-10 w-full">
        <h2 className="font-display font-normal text-5xl md:text-6xl mb-4 leading-[1.2]">
          4,74000+ <span className="text-gradient-red">Backbenchers</span>-দের ভরসা
        </h2>
        <p className="text-slate-300/90 max-w-2xl mx-auto text-lg">
          শুধু আমাদের কথায় বিশ্বাস করবেন না। যারা এই জার্নিতে অংশ নিয়েছে তাদের অভিজ্ঞতা শুনুন।
        </p>
      </div>

      <div className="flex flex-col gap-6 relative z-10 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {/* Row 1: Slides Left */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          <div className="flex gap-6 px-3">
            {reviewsRow1.map((review, idx) => (
              <CommentCard key={`r1-${idx}`} review={review} />
            ))}
          </div>
        </div>

        {/* Row 2: Slides Right */}
        <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused]">
          <div className="flex gap-6 px-3">
            {reviewsRow2.map((review, idx) => (
              <CommentCard key={`r2-${idx}`} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

