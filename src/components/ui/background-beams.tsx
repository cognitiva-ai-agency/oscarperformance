"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute top-0 left-0 w-full h-full bg-neutral-950/[0.96] overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-x-0 w-full top-0 bg-gradient-to-t from-neutral-950 via-neutral-950 to-transparent h-px " />
      <div className="absolute inset-x-0 w-full bottom-0 bg-neutral-950 h-px " />
      <div className="absolute inset-x-0 w-full top-32 bg-gradient-to-t from-neutral-950 via-neutral-950 to-transparent h-[50vh] blur-3xl" />

      {/* Modern Aceternity-style beams using Tailwind v4 compatible structure */}
      <div className="absolute left-0 top-0 h-full w-full">
         <div className="absolute h-full w-full [background-image:linear-gradient(to_bottom,transparent,transparent_50%,rgba(225,7,23,0.1)_50%,rgba(225,7,23,0.1)_100%),linear-gradient(to_right,rgba(100,100,100,0.1),rgba(100,100,100,0.1)_1px,transparent_1px,transparent)] [background-size:24px_36px]" />
      </div>
     
      {/* Moving gradients */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
         <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
    </div>
  );
};
