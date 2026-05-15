"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="bg-[#f4f4f4] text-black pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl mx-auto mb-8"
        >
          <h2 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-extralight tracking-normal text-black mb-4">
            Every Event Tells A Story.
          </h2>
          <p className="font-outfit text-lg md:text-xl text-gray-600 font-light leading-relaxed">
            We don’t just organize events — we create immersive experiences filled with emotion, elegance, and unforgettable energy.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center"
        >
          <a href="#" className="button-custom group px-8 py-4 font-outfit font-medium tracking-wider text-sm text-center text-white">
            <div className="button_background bg-black group-hover:bg-gray-800 transition-colors"></div>
            <span className="button_text"><span className="button_span">BOOK NOW</span></span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
