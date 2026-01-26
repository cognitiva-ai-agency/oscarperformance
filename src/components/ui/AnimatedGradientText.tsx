"use client";

import { ReactNode } from "react";

interface AnimatedGradientTextProps {
  children: ReactNode;
  className?: string;
}

export default function AnimatedGradientText({ children, className = "" }: AnimatedGradientTextProps) {
  return (
    <>
      <span 
        className={`inline relative ${className}`}
      >
        <span 
          className="inline-block bg-gradient-to-r from-[#E10717] via-[#FF4444] to-[#E10717] bg-clip-text text-transparent animate-gradient-slide"
          style={{
            backgroundSize: '200% auto',
          }}
        >
          {children}
        </span>
      </span>
      <style jsx global>{`
        @keyframes gradient-slide {
          0%, 100% {
            background-position: 0% center;
          }
          50% {
            background-position: 100% center;
          }
        }
        
        .animate-gradient-slide {
          animation: gradient-slide 3s ease-in-out infinite;
          will-change: background-position;
        }
      `}</style>
    </>
  );
}
