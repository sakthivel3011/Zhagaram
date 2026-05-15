"use client";

import { motion } from "framer-motion";

export default function Statement() {
  return (
    <section id="about" className="py-32 md:py-48 relative bg-brand-orange/100 text-black border-y border-black overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-24 relative z-10 flex justify-center items-center">

        {/* Background Sphere Centered Behind Text */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[300px] h-[300px] md:w-[600px] md:h-[600px]" style={{ maskImage: 'radial-gradient(circle, black 30%, transparent 50%)', WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 50%)' }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-contain mix-blend-darken"
            >
              <source src="https://radiant-assets.netlify.app/video/black-sphere.webm" type="video/webm" />
            </video>
          </div>
        </div>

        <div className="max-w-[1000px] text-center relative z-10">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="statement-text font-[family-name:var(--font-great-vibes)] text-3xl md:text-5xl lg:text-[56px] font-light leading-[1.2]"
          >
            Zhagaram is a premium event management company specializing in elegant celebrations, cultural festivals, college events, corporate experiences, weddings, concerts, and unforgettable moments. We blend creativity, tradition, and modern luxury to craft events that leave lasting impressions
          </motion.h2>
        </div>
      </div>

      {/* Frame Lines */}
      {/* Horizontal lines */}
      <div className="absolute top-[64px] left-0 right-0 h-[1px] bg-black/30 pointer-events-none"></div>
      <div className="absolute bottom-[64px] left-0 right-0 h-[1px] bg-black/30 pointer-events-none"></div>

      {/* Vertical lines */}
      <div className="absolute top-[64px] bottom-[64px] left-6 md:left-12 lg:left-24 w-[1px] bg-black/30 pointer-events-none"></div>
      <div className="absolute top-[64px] bottom-[64px] right-6 md:right-12 lg:right-24 w-[1px] bg-black/30 pointer-events-none"></div>

      {/* Decorative crosses at intersections */}
      <div className="absolute top-[64px] left-6 md:left-12 lg:left-24 pointer-events-none text-black" style={{ transform: 'translate(-50%, -50%)' }}>
        <div className="w-[14px] h-[14px] flex justify-center items-center relative">
          <div className="absolute w-[1px] h-full bg-current"></div>
          <div className="absolute h-[1px] w-full bg-current"></div>
        </div>
      </div>

      <div className="absolute top-[64px] right-6 md:right-12 lg:right-24 pointer-events-none text-black" style={{ transform: 'translate(50%, -50%)' }}>
        <div className="w-[14px] h-[14px] flex justify-center items-center relative">
          <div className="absolute w-[1px] h-full bg-current"></div>
          <div className="absolute h-[1px] w-full bg-current"></div>
        </div>
      </div>

      <div className="absolute bottom-[64px] left-6 md:left-12 lg:left-24 pointer-events-none text-black" style={{ transform: 'translate(-50%, 50%)' }}>
        <div className="w-[14px] h-[14px] flex justify-center items-center relative">
          <div className="absolute w-[1px] h-full bg-current"></div>
          <div className="absolute h-[1px] w-full bg-current"></div>
        </div>
      </div>

      <div className="absolute bottom-[64px] right-6 md:right-12 lg:right-24 pointer-events-none text-black" style={{ transform: 'translate(50%, 50%)' }}>
        <div className="w-[14px] h-[14px] flex justify-center items-center relative">
          <div className="absolute w-[1px] h-full bg-current"></div>
          <div className="absolute h-[1px] w-full bg-current"></div>
        </div>
      </div>
    </section>
  );
}
