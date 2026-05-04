import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "এই কোর্সটি কি এআই-তে একেবারে নতুনদের জন্য উপযুক্ত?",
      a: "হ্যাঁ। এআই ভিডিও এডিটিং এবং কোডিংয়ের টেকনিক্যাল বিষয়গুলো একদম শুরু থেকে শেখানো হবে। পূর্ব অভিজ্ঞতা না থাকলেও চিন্তার কিছু নেই।"
    },
    {
      q: "আমি যদি লাইভ ক্লাস মিস করি তবে কি রেকর্ডিং দেওয়া হবে?",
      a: "অবশ্যই। প্রতিটি ক্লাসের রেকর্ডিং ২৪ ঘণ্টার মধ্যে ওয়েবসাইটে আপলোড করা হবে এবং আপনি আজীবন সেগুলোর অ্যাক্সেস পাবেন।"
    },
    {
      q: "আমি কীভাবে কোর্সের ফি পেমেন্ট করতে পারি?",
      a: "আমাদের সিকিউর পেমেন্ট গেটওয়ের মাধ্যমে বিকাশ, নগদ এবং সব ধরনের লোকাল/ইন্টারন্যাশনাল ক্রেডিট ও ডেবিট কার্ড গ্রহণ করা হয়।"
    },
    {
      q: "কোর্স শেষে কি কোনো সার্টিফিকেট দেওয়া হবে?",
      a: "হ্যাঁ, আপনি ৩০ দিনের শেষে ফাইনাল প্রজেক্ট সফলভাবে জমা দিলে একটি ভেরিফায়েড ডিজিটাল সার্টিফিকেট পাবেন।"
    }
  ];

  return (
    <section className="relative w-full max-w-[1200px] mx-auto px-6 py-24">
      <div className="text-center mb-16">
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
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen ? "bg-white/5 border-electric-blue/40" : "bg-transparent border-white/10 hover:bg-white/[0.02]"
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
