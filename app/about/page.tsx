"use client";

import React, { useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import logoIcon from "@/app/logo/icon.png";

const team = [
  {
    role: "Executive Chairman",
    name: "Vishal Padiyar",
    image: "https://cdn.prod.website-files.com/690a89e276b0d65618a2b915/695d41d21ca5a3470e5a061e_7%20b%26w.png"
  },
  {
    role: "President",
    name: "Mahdi Yahya",
    image: "https://cdn.prod.website-files.com/690a89e276b0d65618a2b915/699b4df7132893691c1512f1_madhi_B%26W.png"
  },
  {
    role: "Chief Technology Officer",
    name: "Chris Galloway",
    image: "https://cdn.prod.website-files.com/690a89e276b0d65618a2b915/6960eae19e8032a993664eb3_1082-modified.png"
  }
  
];

export default function AboutPage() {
  useEffect(() => {
    document.title = "Zhagaram | About";
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col font-inter">
      <Navbar />
      
      <main className="flex-grow pt-[88px]">
        
        {/* Hero Section */}
        <section className="relative w-full h-[75vh] min-h-[600px] flex items-center overflow-hidden">
          <div className="container mx-auto px-6 md:px-12 lg:px-24 flex justify-between relative z-10 w-full h-full items-center">
            
            {/* Left Content */}
            <motion.div
              className="w-full lg:w-1/2 lg:pr-16 relative z-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="font-outfit text-[60px] md:text-[75px] lg:text-[88px] font-light tracking-tight mb-6 leading-[1.05]">
                Crafting Extraordinary <br/>
                <span className="text-brand-orange font-[family-name:var(--font-oxanium)]">Celebrations</span>
              </h1>
              <p className="text-gray-400 text-[17px] font-light leading-[1.6] max-w-[500px]">
                ZHAGARAM is a premium event management brand dedicated to creating unforgettable celebrations through elegance, creativity, and cultural richness. From luxury Event and vibrant college culturals to grand concerts and corporate experiences, we transform every event into a timeless memory.
              </p>  
            </motion.div>

            {/* Large Logo Icon on the Right */}
            <div className="hidden lg:block flex-shrink-0 relative z-20">
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
                className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]"
              >
                <Image src={logoIcon} alt="Zhagaram Logo" width={450} height={450} className="object-contain opacity-70" quality={100} priority />
              </motion.div>
            </div>
          </div>

          {/* Right Video Background (Desktop only to match layout, or full width with gradient) */}
          <div className="absolute right-0 top-0 w-full lg:w-3/4 h-full z-0 opacity-50 lg:opacity-100">
            <video 
              src="https://radiant-assets.netlify.app/video/ai-cloud-hero.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover object-right"
            ></video>
            {/* Gradient mask to blend the video smoothly into the left black area */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="w-full bg-[#f4f4f5] text-black pt-20 pb-32 border-t border-brand-orange/30 relative">
          
          {/* Subtle Orange Crosses from screenshot on the border */}
          <div className="absolute top-[-9px] left-6 md:left-12 lg:left-24 text-brand-orange text-[14px] font-light">+</div>
          <div className="absolute top-[-9px] right-6 md:right-12 lg:right-24 text-brand-orange text-[14px] font-light">+</div>

          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <div className="text-center mb-12">
              <h2 className="font-outfit text-4xl md:text-5xl lg:text-[50px] font-extralight tracking-tight mb-4 text-[#0a0a0a]">
                Meet The Creative Minds
              </h2>
              <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                The passionate team behind Zhagaram’s unforgettable celebrations and luxury experiences.
              </p>
            </div>

            {/* Image Grid with no gaps, matching screenshot exactly */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full border-t border-l border-black/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {team.map((person, index) => (
                <div key={index} className="relative aspect-[4/5] border-r border-b border-black/10 overflow-hidden group">
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  />
                  {/* Subtle info on hover to keep functionality while matching visual style when not hovered */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 pointer-events-none">
                    <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-brand-orange mb-1">
                      {person.role}
                    </p>
                    <h3 className="font-outfit text-2xl font-light text-white">
                      {person.name}
                    </h3>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

      </main>

      {/* Adjust Footer background since it follows a white section now */}
      <div className="bg-[#0a0a0a]">
        <Footer />
      </div>
    </div>
  );
}
