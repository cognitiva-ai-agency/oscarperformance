"use client";

import { ReactNode } from "react";

interface AnimatedGradientTextProps {
  children: ReactNode;
  className?: string;
}

export default function AnimatedGradientText({ children, className = "" }: AnimatedGradientTextProps) {
  return (
    <span 
      className={`inline bg-gradient-to-r from-[#E10717] via-[#FF4444] to-[#E10717] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient ${className}`}
      style={{
        animation: 'gradient 3s linear infinite'
      }}
    >
      {children}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% center;
          }
          50% {
            background-position: 100% center;
          }
        }
        .animate-gradient {
          animation: gradient 3s linear infinite;
        }
      `}</style>
    </span>
  );
}
