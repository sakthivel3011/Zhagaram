"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    id: "01",
    title: "College Cultural",
    content: "Energetic and unforgettable college culturals, symposiums, freshers, farewell nights and campus festivals.",

  },
  {
    id: "02",
    title: "Corporate",
    content: "Professional corporate meetings, launches, networking events, and brand experiences.",

  },
  {
    id: "03",
    title: "Concert",
    content: "Large-scale music concerts and live entertainment experiences with premium production.",
  },
  {
    id: "04",
    title: "Stage & Decoration",
    content: "Modern premium stage design, lighting experiences, floral décor, and luxury setups.",
  }
];

export default function AccordionList() {
  const [active, setActive] = useState<string>("01");

  return (
    <section id="statement" className="bg-[#f4f4f4] text-black py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 mb-16 text-center">
        <h2 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-extralight tracking-normal text-black mb-4">
          Our Services.
        </h2>
        <p className="font-outfit text-lg md:text-xl text-gray-600 max-w-2xl font-light leading-relaxed mx-auto">
          Events Designed To Inspire.
        </p>
      </div>

      <div className="w-full flex flex-col border-t border-black/10">
        {items.map((item) => (
          <motion.div
            key={item.id}
            className="border-b border-black/10 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <button
              onClick={() => setActive(active === item.id ? "" : item.id)}
              className={`w-full py-6 md:py-8 transition-colors duration-300 hover:bg-[#e5e5e5] ${active === item.id ? 'bg-[#e5e5e5]' : ''}`}
            >
              <div className="container mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
                <span className="font-outfit text-4xl md:text-[56px] lg:text-[72px] font-extralight tracking-normal text-black">
                  {item.title}
                </span>
                <span className="font-outfit text-3xl md:text-[40px] lg:text-[48px] font-extralight tracking-normal text-black">
                  {item.id}
                </span>
              </div>
            </button>

            <AnimatePresence>
              {active === item.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.165, 0.84, 0.44, 1] }}
                  className="bg-[#0d0d0d] border-t border-black/10"
                >
                  <div className="container mx-auto py-12 px-6 md:px-12 lg:px-24">
                    <div className="w-full">
                      <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed whitespace-pre-wrap">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
