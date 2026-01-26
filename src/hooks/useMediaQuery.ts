"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook to detect if the current device is mobile based on screen width
 * @param breakpoint - Width in pixels to consider as mobile (default: 768px)
 * @returns boolean - true if screen width is less than breakpoint
 */
export function useIsMobile(breakpoint: number = 768): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Initial check
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Check on mount
    checkMobile();

    // Add event listener for resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, [breakpoint]);

  return isMobile;
}

/**
 * Custom hook for media queries
 * @param query - Media query string (e.g., "(max-width: 768px)")
 * @returns boolean - true if media query matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    
    // Initial check
    setMatches(mediaQuery.matches);

    // Event listener for changes
    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Add listener (use deprecated addListener for broader compatibility)
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
  }, [query]);

  return matches;
}
