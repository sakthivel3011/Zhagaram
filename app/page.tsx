"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Statement from "@/app/components/Statement";
import AccordionList from "@/app/components/AccordionList";
import Experience from "@/app/components/Experience";
import Testimonials from "@/app/components/Testimonials";
import Footer from "@/app/components/Footer";

export default function Home() {
  useEffect(() => {
    document.title = "Zhagaram | Home";
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(lenis.raf);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Statement />
      <AccordionList />
      <Testimonials />
      <Experience />
      <Footer />
    </main>
  );
}
