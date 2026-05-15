"use client";

import React, { useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

const galleryItems = [
  {
    title: "Gala Dinner",
    description: "Opulent settings for high-profile gatherings.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Cinematic Wedding",
    description: "Bespoke design for unforgettable moments.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Brand Activation",
    description: "Immersive experiences for global brands.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Lighting Design",
    description: "Transforming spaces with dynamic illumination.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Custom Installations",
    description: "Artistic structures tailored to your vision.",
    image: "https://images.unsplash.com/photo-1504384308090-c564bd248275?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Sensory Experience",
    description: "Engaging all senses in a curated environment.",
    image: "https://images.unsplash.com/photo-1470225620780-99128d25e918?auto=format&fit=crop&w=800&q=80"
  }
];

export default function GalleryPage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Lenis is handled globally by SmoothScroll in layout.tsx

    // Scroll animations handled by Framer Motion in JSX

    // GSAP animation for text color on scroll
    const items = gsap.utils.toArray<HTMLElement>(".gallery-item");
    items.forEach((item) => {
      const title = item.querySelector(".item-title");
      const desc = item.querySelector(".item-desc");
      
      if (title) {
        gsap.fromTo(title, 
          { color: "rgba(255, 255, 255, 0.3)" },
          { 
            color: "#FF4522",
            scrollTrigger: {
              trigger: item,
              start: "top 70%",
              end: "top 40%",
              scrub: true,
            }
          }
        );
      }
      
      if (desc) {
        gsap.fromTo(desc, 
          { color: "rgba(255, 255, 255, 0.3)" },
          { 
            color: "#ffffff",
            scrollTrigger: {
              trigger: item,
              start: "top 70%",
              end: "top 40%",
              scrub: true,
            }
          }
        );
      }
    });

    return () => {
      // Cleanup handled globally
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col font-inter">
      <Navbar />
      
      <main className="flex-grow pt-[88px]">
        
        {/* Hero Section */}
        <section className="relative w-full h-[40vh] min-h-[300px] flex items-center overflow-hidden border-b border-white/10">
          <div className="container mx-auto px-6 md:px-12 lg:px-24 flex relative z-10 w-full h-full items-center">
            <div className="w-full">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand-orange mb-3 block">Visualizing Opulence</span>
              <h1 className="font-outfit text-[50px] md:text-[65px] lg:text-[75px] font-light tracking-tight mb-4 leading-[1.1]">
                Our <span className="text-brand-orange font-normal">Gallery</span>
              </h1>
              <p className="text-gray-400 text-[16px] font-light leading-[1.6] max-w-[500px]">
                A visual journey through our most exclusive events and bespoke designs.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid - Matching About Page Leadership Style but Dark */}
        <section className="w-full bg-[#0a0a0a] py-20">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <div className="gallery-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full border-t border-l border-white/10">
              {galleryItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                  className="gallery-item relative aspect-[4/5] border-r border-b border-white/10 overflow-hidden group"
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 pointer-events-none">
                    <p className="item-title font-mono text-[11px] uppercase tracking-[0.1em] text-brand-orange mb-1">
                      {item.title}
                    </p>
                    <h3 className="item-desc font-outfit text-2xl font-light text-white">
                      {item.description}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
