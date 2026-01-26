"use client";

import { ReactNode } from "react";

interface AnimatedGradientTextProps {
  children: ReactNode;
  className?: string;
}

export default function AnimatedGradientText({ children, className = "" }: AnimatedGradientTextProps) {
  return (
    <span className={`relative inline-block overflow-hidden ${className}`}>
      {/* Texto base invisible para ocupar espacio */}
      <span className="opacity-0">{children}</span>
      
      {/* Capa animada con GPU Transform */}
      <span 
        className="absolute top-0 left-0 w-[200%] h-full flex select-none pointer-events-none animate-gradient-gpu"
        style={{
          willChange: "transform",
        }}
      >
        {/* Duplicamos el contenido para el loop infinito perfecto */}
        <span className="w-1/2 flex justify-center bg-gradient-to-r from-[#E10717] via-[#FF4444] to-[#E10717] bg-clip-text text-transparent">
          {children}
        </span>
        <span className="w-1/2 flex justify-center bg-gradient-to-r from-[#E10717] via-[#FF4444] to-[#E10717] bg-clip-text text-transparent">
          {children}
        </span>
      </span>

      <style jsx global>{`
        @keyframes gradient-gpu-slide {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-gradient-gpu {
          animation: gradient-gpu-slide 3s linear infinite;
        }
      `}</style>
    </span>
  );
}
