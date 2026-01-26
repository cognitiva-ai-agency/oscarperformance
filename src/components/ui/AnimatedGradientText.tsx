"use client";

import { ReactNode } from "react";

interface AnimatedGradientTextProps {
  children: ReactNode;
  className?: string;
}

export default function AnimatedGradientText({ children, className = "" }: AnimatedGradientTextProps) {
  return (
    <span 
      className={`inline bg-gradient-to-r from-[#E10717] via-[#FF4444] to-[#E10717] bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
}
