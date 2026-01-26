"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Fixed opacity values to avoid hydration mismatch
const opacities = [0.8, 0.6, 0.9, 0.7, 0.85, 0.65, 0.75, 0.95, 0.55, 0.7, 0.8, 0.6, 0.9, 0.75, 0.65];

export default function SpeedLines() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const lines = containerRef.current.querySelectorAll(".speed-line");
    
    // Animate speed lines
    gsap.to(lines, {
      x: -2000,
      duration: 2,
      stagger: 0.1,
      repeat: -1,
      ease: "none",
    });
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="speed-line absolute h-[1px] w-[800px] bg-gradient-to-r from-transparent via-[#E10717] to-transparent"
          style={{
            top: `${(i + 1) * 6}%`,
            left: "100%",
            opacity: opacities[i],
          }}
        />
      ))}
    </div>
  );
}
