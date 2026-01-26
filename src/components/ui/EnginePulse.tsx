"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface EnginePulseProps {
  intensity?: number;
}

export default function EnginePulse({ intensity = 1 }: EnginePulseProps) {
  const pulseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pulseRef.current) return;

    // Create pulsing engine effect
    gsap.to(pulseRef.current, {
      scale: 1.2,
      opacity: 0.8,
      duration: 1.5 * intensity,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });
  }, [intensity]);

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      <div
        ref={pulseRef}
        className="w-96 h-96 rounded-full bg-[#E10717]/10 blur-3xl"
      />
    </div>
  );
}
