import { motion } from "framer-motion";
import { ThumbsUp, ThumbsDown } from "lucide-react";

export function SocialProof() {
  const reviewsRow1 = [
    {
      name: "@RafiqAhmed",
      time: "2 days ago",
      text: "আগে আমি কী করব ভেবে পেতাম না। এই কোর্সটি আমার চিন্তাভাবনাকে গুছিয়ে দিয়েছে। এখন আমি এআই ব্যবহার করে আমার স্টার্টআপের কাজগুলো খুব দ্রুত করতে পারছি।",
      initials: "RA",
    },
    {
      name: "@TaniaHossain",
      time: "1 week ago",
      text: "এআই কন্টেন্ট ক্রিয়েশন এবং ভিডিও এডিটিং মডিউলটি অবিশ্বাস্য। এখন আমি এবং আমার টিম আগের চেয়ে ১০ গুণ দ্রুত কন্টেন্ট তৈরি করতে পারছি।",
      initials: "TH",
    },
    {
      name: "@ShafiqHasan",
      time: "3 weeks ago",
      text: "আমার জীবনের সেরা ১০০০ টাকা ইনভেস্টমেন্ট। স্টাডি হ্যাকসগুলো আমার পড়াশোনার ধরন একেবারেই পালটে দিয়েছে।",
      initials: "SH",
    },
    {
      name: "@NaimulIslam",
      time: "1 month ago",
      text: "আমি কোডিংয়ে একদম নতুন ছিলাম, কিন্তু এই কোর্সের এআই প্রম্পট ইঞ্জিনিয়ারিং গাইড আমাকে আমার প্রথম ওয়েব অ্যাপ বানাতে সাহায্য করেছে!",
      initials: "NI",
    },
    // Duplicate for smooth marquee
    {
      name: "@RafiqAhmed",
      time: "2 days ago",
      text: "আগে আমি কী করব ভেবে পেতাম না। এই কোর্সটি আমার চিন্তাভাবনাকে গুছিয়ে দিয়েছে। এখন আমি এআই ব্যবহার করে আমার স্টার্টআপের কাজগুলো খুব দ্রুত করতে পারছি।",
      initials: "RA",
    },
    {
      name: "@TaniaHossain",
      time: "1 week ago",
      text: "এআই কন্টেন্ট ক্রিয়েশন এবং ভিডিও এডিটিং মডিউলটি অবিশ্বাস্য। এখন আমি এবং আমার টিম আগের চেয়ে ১০ গুণ দ্রুত কন্টেন্ট তৈরি করতে পারছি।",
      initials: "TH",
    },
    {
      name: "@ShafiqHasan",
      time: "3 weeks ago",
      text: "আমার জীবনের সেরা ১০০০ টাকা ইনভেস্টমেন্ট। স্টাডি হ্যাকসগুলো আমার পড়াশোনার ধরন একেবারেই পালটে দিয়েছে।",
      initials: "SH",
    },
    {
      name: "@NaimulIslam",
      time: "1 month ago",
      text: "আমি কোডিংয়ে একদম নতুন ছিলাম, কিন্তু এই কোর্সের এআই প্রম্পট ইঞ্জিনিয়ারিং গাইড আমাকে আমার প্রথম ওয়েব অ্যাপ বানাতে সাহায্য করেছে!",
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
      text: "ইকিগাই ফ্রেমওয়ার্ক আমার জীবনের লক্ষ্য স্পষ্ট করেছে। এখন আমি জানি আমার কোন দিকে ফোকাস করা উচিত।",
      initials: "FM",
    },
    {
      name: "@SadiaAfrin",
      time: "3 weeks ago",
      text: "অ্যাডোবি প্রিমিয়ার প্রো এবং ক্যাপকাট এর এআই এডিটিং হ্যাকসগুলো আমার ঘন্টার পর ঘন্টা সময় বাঁচাচ্ছে। অসাধারণ রেকমেন্ডেশন!",
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
      text: "ইকিগাই ফ্রেমওয়ার্ক আমার জীবনের লক্ষ্য স্পষ্ট করেছে। এখন আমি জানি আমার কোন দিকে ফোকাস করা উচিত।",
      initials: "FM",
    },
    {
      name: "@SadiaAfrin",
      time: "3 weeks ago",
      text: "অ্যাডোবি প্রিমিয়ার প্রো এবং ক্যাপকাট এর এআই এডিটিং হ্যাকসগুলো আমার ঘন্টার পর ঘন্টা সময় বাঁচাচ্ছে। অসাধারণ রেকমেন্ডেশন!",
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
    <div className="bg-navy-card rounded-xl p-5 w-[380px] md:w-[450px] shrink-0 border border-white/5 hover:border-white/10 transition-colors flex flex-col gap-3">
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
    <section className="relative w-full max-w-[1200px] mx-auto overflow-hidden py-24">
      <div className="text-center mb-16 px-6 relative z-10 w-full max-w-[1200px] mx-auto">
        <h2 className="font-display font-normal text-5xl md:text-6xl mb-4 leading-[1.2]">
          ১০,০০০+ <span className="text-electric-blue">Backbenchers</span>-দের ভরসা
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
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

