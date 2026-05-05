import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "এই কোর্সটি কি আসক্তি থেকে বের হতে সত্যি সাহায্য করবে?",
      a: "হ্যাঁ। এখানে শুধু হাওয়ায় ভাসা মোটিভেশন নয়, নিউরোসায়েন্স এবং সাইকোলজির উপর ভিত্তি করে প্র্যাকটিক্যাল ফ্রেমওয়ার্ক শেয়ার করা হয়েছে যা বাজে অভ্যাস (যেমন: পর্ন বা সোশ্যাল মিডিয়া অ্যাডিকশন) ভাঙতে ধাপে ধাপে সাহায্য করে।"
    },
    {
      q: "আমার প্রাইভেসি কি গোপন থাকবে?",
      a: "১০০% গোপন থাকবে। আমরা বুঝি এই জার্নিটা সেনসিটিভ। আমাদের কমিউনিটি ও সাপোর্ট সিস্টেম সম্পূর্ণ জাজমেন্ট-ফ্রি এবং প্রাইভেসি মেইনটেইন করে তৈরি করা।"
    },
    {
      q: "আমি যদি লাইভ ক্লাস মিস করি তবে কি রেকর্ডিং দেওয়া হবে?",
      a: "হ্যাঁ, প্রতিটি ক্লাসের লাইফটাইম রেকর্ডিং আপনার ড্যাশবোর্ডে সেভ থাকবে। আপনি যেকোনো সময়, যেকোনো জায়গা থেকে দেখতে পারবেন।"
    },
    {
      q: "কোর্স শেষে কি কোনো নির্দিষ্ট স্কিল শেখানো হবে?",
      a: "এই কোর্সে আপনাকে সরাসরি কোনো নির্দিষ্ট স্কিল (যেমন ওয়েব ডেভেলপমেন্ট বা গ্রাফিক্স ডিজাইন) শেখানো হবে না, বরং 'কীভাবে দ্রুত এবং ফোকাসড ওয়েতে যেকোনো স্কিল শিখতে হয়' তার ফাউন্ডেশন এবং টাইম ম্যানেজমেন্ট ফ্রেমওয়ার্ক শেখানো হবে, যা আপনাকে যেকোনো ফিল্ডে সাকসেসফুল হতে সাহায্য করবে।"
    }
  ];

  return (
    <section className="relative w-full max-w-[1200px] mx-auto px-6 py-20 overflow-hidden rounded-lg">
      <div className="relative z-10 text-center mb-16">
        <h2 className="font-display font-normal text-5xl mb-4 leading-[1.2]">
          সচরাচর জিজ্ঞাসিত প্রশ্ন (FAQ)
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className={`rounded-lg border transition-all duration-300 overflow-hidden ${
                isOpen ? "bg-surface border-electric-blue/40" : "bg-transparent border-border-subtle hover:bg-white/[0.02]"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-electric-blue"
              >
                <span className={`font-semibold text-lg transition-colors duration-300 ${isOpen ? "text-electric-blue" : "text-slate-200"}`}>
                  {faq.q}
                </span>
                <ChevronDown 
                  className={`text-slate-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180 text-electric-blue" : ""}`} 
                  size={20} 
                />
              </button>
              
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-6 pt-0 text-slate-200 leading-relaxed font-medium">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
