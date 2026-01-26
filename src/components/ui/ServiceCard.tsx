"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  index: number;
}

export default function ServiceCard({ title, description, icon, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative p-8 bg-white border border-[#7B7B7B]/30 rounded-xl transition-all duration-300 hover:border-[#E10717] hover:shadow-xl hover:shadow-[#E10717]/10"
    >
      {/* Accent line on hover */}
      <div className="absolute top-0 left-0 w-0 h-1 bg-[#E10717] transition-all duration-300 group-hover:w-full" />
      
      {/* Icon */}
      <div className="mb-6 text-[#E10717]">
        {icon}
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-bold text-[#1C1C1C] mb-3 group-hover:text-[#E10717] transition-colors duration-300">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-[#7B7B7B] leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
