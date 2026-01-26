"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 cursor-pointer";
  
  const variants = {
    primary: "bg-[#E10717] text-white hover:bg-[#CC0614] hover:shadow-lg hover:shadow-[#E10717]/30 active:scale-95 border border-transparent",
    secondary: "bg-transparent text-brand-white border border-brand-gray-light hover:border-brand-white hover:bg-brand-white/10 hover:shadow-[0_0_15px_rgba(225,7,23,0.3)] active:scale-95 backdrop-blur-sm",
    outline: "bg-transparent text-brand-white border-2 border-brand-red hover:bg-brand-red/20 hover:text-white active:scale-95 backdrop-blur-sm",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-9 py-4 text-lg",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClassName}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...(props as any)}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={combinedClassName}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
