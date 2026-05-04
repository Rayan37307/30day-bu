import { motion } from "framer-motion";
import { Youtube, Facebook } from "lucide-react";

export function Mentor() {
  return (
    <section className="relative w-full max-w-[1200px] mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-medium text-white tracking-wide">
          পরিচিত হোন <span className="text-electric-blue font-black uppercase">আপনার মেন্টরের</span> সাথে
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start bg-navy-card border border-white/5 rounded-3xl p-6 md:p-8">
        {/* Left: Image */}
        <div className="w-full md:w-[45%] shrink-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/5 bg-navy-card"
          >
            <img 
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=800" 
              alt="Mentor" 
              className="w-full h-full object-cover"
            />
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-[55%] flex flex-col pt-2 lg:pt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-2xl md:text-3xl font-display font-medium text-electric-blue mb-1">আসিফ রায়হান</h3>
            <p className="text-slate-400 text-sm md:text-[15px] mb-8 font-medium">ডকুমেন্টারি ফিল্মমেকার</p>

            <div className="space-y-5 text-slate-300 text-[14px] md:text-[15px] leading-relaxed mb-10">
              <p>
                আমি আসিফ রায়হান — একজন ডকুমেন্টারি ফিল্মমেকার, যার সিনেমাটিক এডিটিং স্টাইল এতটাই অনন্য যে ক্রিয়েটররা ইউটিউবে "কীভাবে আসিফ রায়হানের মতো এডিট করতে হয়" নিয়ে টিউটোরিয়াল তৈরি করা শুরু করেছিল।
              </p>
              <p>
                আমি ২০২০ সালে আমার ইউটিউব যাত্রা শুরু করি। পরবর্তী ৪ বছরে শূন্য থেকে সবকিছু—ভিডিও এডিটিং, রিসার্চ, স্ক্রিপ্টিং, স্টোরিটেলিং—শিখে আমার প্রথম চ্যানেলটিকে ৫০ হাজার সাবস্ক্রাইবারে নিয়ে যাই। প্রতিটি ভিডিও ছিল একটি শিক্ষা; প্রতিটি ভুল আমাকে আরও নিখুঁত করেছে।
              </p>
              <p>
                এরপর আমি একদম নতুনভাবে শুরু করি জিরো সাবস্ক্রাইবার থেকে। আর এবার সবকিছু ম্যাজিকের মতো কাজ করল — <strong className="text-white font-semibold">মাত্র ৪১ দিনে ১ লাখের বেশি সাবস্ক্রাইবার।</strong> আমার প্রথম ডকুমেন্টারিটি <strong className="text-white font-semibold">মাত্র ৫ দিনে ১ মিলিয়ন ভিউ পার করে।</strong> এটা কোনো ভাগ্য ছিল না, বরং ৪ বছরের শিক্ষাকে একটি সঠিক সিস্টেমে প্রয়োগ করার ফলাফল।
              </p>
              <p className="text-white font-medium">
                এই সিস্টেমটি আমাকে এমন কিছু শিখিয়েছে যা বেশিরভাগ এডিটর কখনও বুঝতে পারে না:<br/>
                সেরা কন্টেন্ট শুধু এডিট করা হয় না। এর পেছনে থাকে গভীর রিসার্চ, দুর্দান্ত স্ক্রিপ্টিং, শুট এবং নিখুঁত স্টোরিটেলিং।
              </p>
              <p>
                কাজের প্রতি এই প্যাশনই আমার অডিয়েন্স তৈরি করেছে — আর আমি আমার প্রাইভেট ব্যাচে ঠিক এই বিষয়গুলোই শেখাই। আপনি যদি সবচেয়ে প্রফেশনাল লেভেলের এডিটিং শিখতে চান — তবে আপনার যাত্রা এখান থেকেই শুরু হচ্ছে।
              </p>
            </div>

            {/* Stats Boxes */}
            <div className="flex flex-wrap gap-4 mt-auto">
              <div className="bg-[#121214] border border-white/5 rounded-xl p-4 md:p-5 flex flex-col min-w-[120px] items-start transition-colors hover:bg-white/[0.02]">
                <Youtube className="text-red-600 mb-3" size={24} />
                <span className="text-xl md:text-2xl font-bold text-white mb-0.5">৪৬৫ হাজার+</span>
                <span className="text-[11px] md:text-xs text-slate-500 uppercase tracking-wider font-medium">সাবস্ক্রাইবার</span>
              </div>
              <div className="bg-[#121214] border border-white/5 rounded-xl p-4 md:p-5 flex flex-col min-w-[120px] items-start transition-colors hover:bg-white/[0.02]">
                <Facebook className="text-blue-500 mb-3 hover:text-white transition-colors" size={24} />
                <span className="text-xl md:text-2xl font-bold text-white mb-0.5">১০০ হাজার+</span>
                <span className="text-[11px] md:text-xs text-slate-500 uppercase tracking-wider font-medium">ফলোয়ার</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
