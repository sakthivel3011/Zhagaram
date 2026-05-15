"use client";

import React, { useEffect, useState } from "react";
import gsap from "gsap";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (   
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-[999] w-12 h-12 bg-brand-orange text-black rounded-full flex items-center justify-center transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        } hover:bg-orange-600 shadow-lg`}
      aria-label="Scroll to top"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 19V5M12 5L5 12M12 5L19 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
