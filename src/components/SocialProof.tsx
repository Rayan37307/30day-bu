import { motion } from "framer-motion";
import { ThumbsUp, ThumbsDown } from "lucide-react";

export function SocialProof() {
  const row1Images = [
    "/comments/IMG_3247.PNG",
    "/comments/IMG_3248.PNG",
    "/comments/IMG_3249.PNG",
    "/comments/IMG_3250.PNG",
    "/comments/IMG_3251.PNG",
    "/comments/IMG_3252.PNG",
    "/comments/IMG_3253.PNG",
    "/comments/IMG_3254.PNG",
  ];

  const row2Images = [
    "/comments/IMG_3255.PNG",
    "/comments/IMG_3256.PNG",
    "/comments/IMG_3258.PNG",
    "/comments/IMG_3259.PNG",
    "/comments/IMG_3260.PNG",
    "/comments/IMG_3261.PNG",
    "/comments/IMG_3262.PNG",
  ];

  const CommentImage = ({ src }: { src: string }) => (
    <div className="shrink-0 w-[240px] md:w-[320px]">
      <img src={src} alt="User Feedback" className="w-full h-auto block rounded-lg border-gray-500 border-1" loading="lazy" />
    </div>
  );

  return (
    <section className="relative w-full overflow-hidden py-24 px-6 bg-[#1A1C1E]">
      <div className="max-w-[1400px] mx-auto relative z-10">
      {/* Background Orb */}
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 blur-[150px] rounded-full pointer-events-none -z-10" /> */}

      <div className="text-center mb-16 relative z-10 w-full">
        <h2 className="font-display font-normal text-5xl md:text-6xl mb-4 leading-[1.2]">
          4,74,000+ <span className="text-gradient-red">Backbenchers</span>-দের ভরসা
        </h2>
        <p className="text-slate-300/90 max-w-2xl mx-auto text-lg">
          শুধু আমাদের কথায় বিশ্বাস করবেন না। যারা এই জার্নিতে অংশ নিয়েছে তাদের সরাসরি ফিডব্যাক দেখুন।
        </p>
      </div>

      <div className="flex flex-col gap-8 relative z-10 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        {/* Row 1: Slides Left */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          <div className="flex gap-6 px-3">
            {[...row1Images, ...row1Images].map((src, idx) => (
              <CommentImage key={`r1-${idx}`} src={src} />
            ))}
          </div>
        </div>

        {/* Row 2: Slides Right */}
        <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused]">
          <div className="flex gap-6 px-3">
            {[...row2Images, ...row2Images].map((src, idx) => (
              <CommentImage key={`r2-${idx}`} src={src} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

