"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import logoIcon from "@/app/logo/icon1.png";
import { motion } from "framer-motion";

export default function PageLoader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const loader = loaderRef.current;
    const text = textRef.current;
    if (!loader || !text) return;

    // Wait exactly 5 seconds before starting the reveal animation
    const timeout = setTimeout(() => {
      const tl = gsap.timeline();
      
      tl.to(text, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: "power2.inOut",
      })
      .to(".loader-panel", {
        yPercent: -100,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.inOut",
      }, "+=0.2")
      .set(loader, { display: "none" });
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[10000] flex flex-col justify-center items-center font-[family-name:var(--font-michroma)] text-white overflow-hidden"
    >
      {/* Background Panels */}
      <div className="absolute inset-0 grid grid-cols-4 z-0">
        <div className="bg-[#0a0a0a] loader-panel border-r border-white/5"></div>
        <div className="bg-[#0a0a0a] loader-panel border-r border-white/5"></div>
        <div className="bg-[#0a0a0a] loader-panel border-r border-white/5"></div>
        <div className="bg-[#0a0a0a] loader-panel"></div>
      </div>

      <div ref={textRef} className="flex flex-col items-center gap-4 relative z-10">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mb-2"
        >
          <Image src={logoIcon} alt="Zhagaram Logo" width={250} height={250} className="object-contain" />
        </motion.div>
      </div>
    </div>
  );
}
