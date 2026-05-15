"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const onMouseMove = (e: MouseEvent) => {
      // Inner dot (fast)
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.05,
        ease: "power2.out",
      });
      // Outer ring (slow - creating the effect)
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const onMouseEnter = () => {
      gsap.to(follower, { scale: 1.5, backgroundColor: "rgba(255, 69, 34, 0.1)", borderColor: "rgba(255, 69, 34, 0.5)" });
      gsap.to(cursor, { scale: 0.5 });
    };

    const onMouseLeave = () => {
      gsap.to(follower, { scale: 1, backgroundColor: "transparent", borderColor: "#FF4522" });
      gsap.to(cursor, { scale: 1 });
    };

    window.addEventListener("mousemove", onMouseMove);

    // Add hover effect to all interactive elements
    const interactiveElements = document.querySelectorAll("a, button, .cursor-pointer");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Inner Dot */}
      <div
        ref={cursorRef}
        className="hidden md:block fixed top-0 left-0 w-2 h-2 bg-brand-orange rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />
      {/* Outer Ring */}
      <div
        ref={followerRef}
        className="hidden md:block fixed top-0 left-0 w-8 h-8 border border-brand-orange rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
      />
    </>
  );
}
