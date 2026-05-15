"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import logoIcon from "@/app/logo/icon.png";

export default function Hero() {

  return (
    <section className="relative h-screen w-full flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="https://radiant-assets.netlify.app/video/home-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />
      </div>

      <div className="w-full px-6 md:px-12 lg:px-24 relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12">
        <div className="max-w-[900px]">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="hero-text font-[family-name:var(--font-oxanium)] text-6xl md:text-8xl lg:text-[110px] leading-[0.95] tracking-tight mb-8"
          >
            <span className="text-white">PREMIUM</span><br />
            <span className="text-brand-orange">EVENT<br />PLANNERS.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
            className="hero-text text-[20px] md:text-[22px] text-gray-300 mb-12 max-w-[800px] leading-[1.4] font-[family-name:var(--font-oxanium)]"
          >
            Where Culture Meets Celebration.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
            className="hero-text flex flex-col sm:flex-row gap-4"
          >
            <a href="" className="button-custom group px-8 py-4 font-[family-name:var(--font-oxanium)] font-medium tracking-wider text-sm text-center text-black">
              <div className="button_background bg-brand-orange group-hover:bg-orange-600 transition-colors"></div>
              <span className="button_text"><span className="button_span">EXPLORE EVENTS</span></span>
            </a>
            <a href="" className="button-custom group px-8 py-4 font-[family-name:var(--font-oxanium)] font-medium tracking-wider text-sm text-center text-brand-orange border border-white/10 transition-colors hover:border-brand-orange/50">
              <div className="button_background bg-transparent group-hover:bg-white/5 transition-colors"></div>
              <span className="button_text"><span className="button_span">BOOK YOUR EVENT</span></span>
            </a>
          </motion.div>
        </div>

        {/* Large Logo Icon on the Right */}
        <div className="flex justify-center w-full lg:w-auto flex-shrink-0 lg:-translate-x-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -15, 0],
            }}
            transition={{ 
              opacity: { duration: 1 },
              scale: { duration: 1 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="w-[200px] h-[200px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]"
          >
            <Image src={logoIcon} alt="Zhagaram Logo" width={500} height={500} className="object-contain" quality={100} priority />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
