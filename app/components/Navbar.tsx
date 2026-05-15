"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logoIcon from "@/app/logo/icon.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    } else {
      window.location.href = `/#${id}`;
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/20 bg-black">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 h-[88px] flex items-center justify-between">
        <Link href="/" className="block text-white hover:text-gray-300 transition-colors">
          <div className="flex items-center gap-3">
            <Image src={logoIcon} alt="Zhagaram Logo" width={60} height={60} className="object-contain" />
            <span className="font-[family-name:var(--font-michroma)] text-2xl font-bold tracking-wider uppercase">Zhagaram</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 font-[family-name:var(--font-oxanium)] text-[13px] uppercase tracking-wide text-brand-orange">
          <Link href="/" className="text-link hover:text-white transition-colors"><span className="text-link_span">Home</span></Link>
          <Link href="/about" className="text-link hover:text-white transition-colors"><span className="text-link_span">About</span></Link>
          <Link href="#statement" onClick={(e) => handleScrollTo(e, "statement")} className="text-link hover:text-white transition-colors"><span className="text-link_span">Services</span></Link>
          <Link href="#testimonials" onClick={(e) => handleScrollTo(e, "testimonials")} className="text-link hover:text-white transition-colors"><span className="text-link_span">TESTIMONIAL</span></Link>
          <Link href="/gallery" className="text-link hover:text-white transition-colors"><span className="text-link_span">Gallery</span></Link>
        </nav>

        <div className="hidden lg:flex items-center gap-4 font-[family-name:var(--font-oxanium)]">
          <Link href="/contact" className="button-custom group bg-brand-orange px-6 py-[10px] transition-all uppercase text-[13px] font-medium text-black border border-transparent whitespace-nowrap">
            <div className="button_background bg-brand-orange group-hover:bg-orange-600 transition-colors"></div>
            <span className="button_text"><span className="button_span">BOOK EVENT</span></span>
          </Link>
        </div>

        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-screen w-[280px] bg-black border-l border-white/10 p-8 flex flex-col gap-6 uppercase text-sm font-semibold z-50 lg:hidden font-[family-name:var(--font-oxanium)]"
            >
              <div className="flex justify-end mb-4">
                <button className="text-white" onClick={() => setIsOpen(false)}>
                  <X size={24} />
                </button>
              </div>
              <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-brand-orange transition-colors border-b border-white/10 pb-3">Home</Link>
              <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-brand-orange transition-colors border-b border-white/10 pb-3">About</Link>
              <Link href="#statement" onClick={(e) => handleScrollTo(e, "statement")} className="hover:text-brand-orange transition-colors border-b border-white/10 pb-3">Services</Link>
              <Link href="#testimonials" onClick={(e) => handleScrollTo(e, "testimonials")} className="hover:text-brand-orange transition-colors border-b border-white/10 pb-3">TESTIMONIAL</Link>
              <Link href="/gallery" onClick={() => setIsOpen(false)} className="hover:text-brand-orange transition-colors border-b border-white/10 pb-3">Gallery</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="text-brand-orange hover:text-white transition-colors pb-3">Contact Us</Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
