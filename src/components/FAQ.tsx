import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      id: "faq-0",
      category: "ফাউন্ডেশন",
      q: "এই কোর্সটি কি আসক্তি থেকে বের হতে সত্যি সাহায্য করবে?",
      a: "হ্যাঁ। এখানে শুধু হাওয়ায় ভাসা মোটিভেশন নয়, নিউরোসায়েন্স এবং সাইকোলজির উপর ভিত্তি করে প্র্যাকটিক্যাল ফ্রেমওয়ার্ক শেয়ার করা হয়েছে যা বাজে অভ্যাস (যেমন: পর্ন বা সোশ্যাল মিডিয়া অ্যাডিকশন) ভাঙতে ধাপে ধাপে সাহায্য করে।"
    },
    {
      id: "faq-1",
      category: "প্রাইভেসি",
      q: "আমার প্রাইভেসি কি গোপন থাকবে?",
      a: "১০০% গোপন থাকবে। আমরা বুঝি এই জার্নিটা সেনসিটিভ। আমাদের কমিউনিটি ও সাপোর্ট সিস্টেম সম্পূর্ণ জাজমেন্ট-ফ্রি এবং প্রাইভেসি মেইনটেইন করে তৈরি করা।"
    },
    {
      id: "faq-2",
      category: "অ্যাক্সেস",
      q: "আমি যদি লাইভ ক্লাস মিস করি তবে কি রেকর্ডিং দেওয়া হবে?",
      a: "হ্যাঁ, প্রতিটি ক্লাসের লাইফটাইম রেকর্ডিং আপনার ড্যাশবোর্ডে সেভ থাকবে। আপনি যেকোনো সময়, যেকোনো জায়গা থেকে দেখতে পারবেন।"
    },
    {
      id: "faq-3",
      category: "স্কিলস",
      q: "কোর্স শেষে কি কোনো নির্দিষ্ট স্কিল শেখানো হবে?",
      a: "এই কোর্সে আপনাকে সরাসরি কোনো নির্দিষ্ট স্কিল (যেমন ওয়েব ডেভেলপমেন্ট বা গ্রাফিক্স ডিজাইন) শেখানো হবে না, বরং 'কীভাবে দ্রুত এবং ফোকাসড ওয়েতে যেকোনো স্কিল শিখতে হয়' তার ফাউন্ডেশন এবং টাইম ম্যানেজমেন্ট ফ্রেমওয়ার্ক শেখানো হবে।"
    }
  ];

  return (
    <section className="lg:py-32 pt-24 pb-24" id="faq">
      <div className="lg:px-8 max-w-[1200px] mx-auto pr-6 pl-6 relative">
        {/* Header */}
        <section className="relative">
          <div className="md:mb-16 grid md:grid-cols-12 mb-16 gap-x-6 gap-y-6 items-end">
            <div className="md:col-span-8 space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex text-[13px] font-medium gap-x-2 gap-y-2 items-center"
              >
                <span className="tabular-nums text-[20px] leading-none text-red-500/80 font-display">03</span>
                <span className="text-red-500/40">/</span>
                <span className="uppercase text-[11px] tracking-[0.2em] text-red-400 font-bold">FAQ</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="sm:text-5xl lg:text-6xl text-4xl font-display text-white tracking-tight leading-[1.1]"
              >
                সচরাচর জিজ্ঞাসিত <span className="text-red-500 underline decoration-2 underline-offset-4">প্রশ্ন</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="sm:text-base text-sm text-slate-400 max-w-2xl font-medium"
              >
                কোর্স সম্পর্কে আপনার মনে থাকা সমস্ত প্রশ্নের উত্তর এখানে দেওয়া হলো।
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-4 flex md:justify-end"
            >
              <div className="hidden sm:flex items-center gap-3">
                <a href="#support" className="inline-flex items-center text-[15px] hover:bg-white/5 font-medium text-white h-11 rounded-lg ring-white/15 ring-1 px-5 transition-all">
                  সাপোর্টে যোগাযোগ করুন
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Layout */}
        <div className="max-w-4xl mx-auto relative mt-8">
          
          {/* FAQ list */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative z-10"
          >
            <div className="divide-y divide-white/10">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;

                return (
                  <div 
                    key={faq.id} 
                    className="pt-6 pb-6"
                  >
                    <div className="text-[11px] uppercase font-bold text-slate-500 tracking-wider font-mono mb-2">
                      {faq.category}
                    </div>
                    <button 
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="group flex items-center justify-between w-full text-left outline-none"
                    >
                      <h3 className={`text-2xl sm:text-3xl font-display tracking-tight transition-colors duration-300 ${isOpen ? "text-white" : "text-slate-300"}`}>
                        {faq.q}
                      </h3>
                      <span className={`ml-4 shrink-0 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 transition-all duration-300 ${isOpen ? "bg-red-500/20 border-red-500/40 text-red-500 rotate-90 shadow-[0_0_15px_rgba(239,68,68,0.2)]" : "group-hover:bg-white/10 text-slate-400 group-hover:text-white"}`}>
                        <ChevronRight size={20} className="stroke-[2.5]" />
                      </span>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 pb-2 px-6 mt-4 bg-white/[0.03] rounded-xl backdrop-blur-md border border-white/10">
                            <p className="text-slate-300 text-sm md:text-base leading-relaxed font-sans font-medium">
                              {faq.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
