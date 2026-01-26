"use client";

import { useEffect, useState } from "react";

/**
 * Custom hook to detect if user has enabled "prefers-reduced-motion"
 * This is an accessibility feature that some users enable to reduce animations
 * @returns boolean - true if user prefers reduced motion
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    
    // Initial check
    setPrefersReducedMotion(mediaQuery.matches);

    // Event listener for changes
    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // Add listener
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handler);
    } else {
      mediaQuery.addListener(handler);
    }

    // Cleanup
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handler);
      } else {
        mediaQuery.removeListener(handler);
      }
    };
  }, []);

  return prefersReducedMotion;
}
