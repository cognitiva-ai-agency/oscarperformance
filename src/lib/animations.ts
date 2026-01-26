import { Variants } from "framer-motion";

// Premium easing curves (Apple/Samsung style)
const premiumEase = [0.16, 1, 0.3, 1] as const; // Smooth, elastic feel
const snapEase = [0.87, 0, 0.13, 1] as const; // Quick, snappy

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

// Deprecated animations removed to enforce standard consistency

