"use client";

import React, { useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";

export default function ContactPage() {
  useEffect(() => {
    document.title = "Zhagaram | Contact";
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col font-inter">
      <Navbar />
      
      <main className="flex-grow pt-40 pb-32 relative overflow-hidden flex items-center">
        {/* Subtle orange glow to match the vibe from screenshot */}
        <div className="absolute -bottom-[20%] -left-[10%] w-[800px] h-[800px] bg-brand-orange/15 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 justify-between">
            
            {/* Left Content */}
            <motion.div
              className="lg:w-5/12"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="font-outfit text-6xl md:text-7xl lg:text-[80px] font-extralight tracking-tight mb-8 whitespace-nowrap">
                Contact <span className="text-brand-orange font-normal">Us</span>
              </h1>
              
              <div className="space-y-6 max-w-[500px]">
                <p className="text-white text-lg md:text-[20px] font-light tracking-wide">
                  Let’s Create Unforgettable Moments Together.
                </p>
                <p className="text-gray-400 text-base md:text-[16px] font-light leading-relaxed">
                  From college culturals and concerts to corporate gatherings and large-scale celebrations, ZHAGARAM creates immersive event experiences filled with energy, creativity, and elegance.
                </p>
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div
              className="lg:w-6/12"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <form className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full font-[family-name:var(--font-oxanium)] mt-4">
                {/* First Name */}
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.1em] text-white mb-2 font-medium">First Name*</label>
                  <input 
                    type="text" 
                    placeholder="Enter your first name"
                    className="w-full bg-transparent border-b border-[#333333] pb-3 text-white focus:outline-none focus:border-brand-orange transition-colors text-sm placeholder:text-gray-600"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.1em] text-white mb-2 font-medium">Email Address*</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full bg-transparent border-b border-[#333333] pb-3 text-white focus:outline-none focus:border-brand-orange transition-colors text-sm placeholder:text-gray-600"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.1em] text-white mb-2 font-medium">Phone Number*</label>
                  <input 
                    type="tel" 
                    placeholder="Enter your phone number"
                    className="w-full bg-transparent border-b border-[#333333] pb-3 text-white focus:outline-none focus:border-brand-orange transition-colors text-sm placeholder:text-gray-600"
                  />
                </div>

                {/* Event Field (Dropdown) */}
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.1em] text-white mb-2 font-medium">Event Type*</label>
                  <select 
                    className="w-full bg-transparent border-b border-[#333333] pb-3 text-white focus:outline-none focus:border-brand-orange transition-colors text-sm"
                    defaultValue=""
                  >
                    <option value="" disabled className="text-gray-600 bg-[#0a0a0a]">Select event type</option>
                    <option value="college-cultural" className="text-white bg-[#0a0a0a]">College Cultural</option>
                    <option value="symposium" className="text-white bg-[#0a0a0a]">Symposium</option>
                    <option value="concert" className="text-white bg-[#0a0a0a]">Concert</option>
                    <option value="dj-night" className="text-white bg-[#0a0a0a]">DJ Night</option>
                    <option value="corporate-event" className="text-white bg-[#0a0a0a]">Corporate Event</option>
                    <option value="farewell-event" className="text-white bg-[#0a0a0a]">Farewell Event</option>
                    <option value="other" className="text-white bg-[#0a0a0a]">Other</option>
                  </select>
                </div>

                {/* Message Field */}
                <div className="md:col-span-2">
                  <label className="block text-[11px] uppercase tracking-[0.1em] text-white mb-2 font-medium">Event Details*</label>
                  <textarea 
                    placeholder="“Tell us about your event vision, audience size, requirements, and preferred experience.”"
                    className="w-full bg-transparent border-b border-[#333333] pb-3 text-white focus:outline-none focus:border-brand-orange transition-colors text-[13px] resize-none h-16 placeholder:text-gray-500 font-inter font-light"
                  ></textarea>
                </div>

                <div className="md:col-span-2 mt-2">
                  <button type="submit" className="bg-brand-orange text-black font-mono font-bold uppercase tracking-[0.1em] text-[13px] px-8 py-[14px] hover:bg-orange-600 transition-colors inline-block w-fit">
                    PLAN YOUR EVENT
                  </button>
                </div>
              </form>
            </motion.div>
            
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
