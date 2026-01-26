"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import Container from "./ui/Container";
import AnimatedGradientText from "./ui/AnimatedGradientText";

const services = [
  {
    label: "Stage 1",
    title: "Optimización ECU Completa",
    features: ["+20-30% Potencia", "+25-35% Par Motor", "Mejor Respuesta"]
  },
  {
    label: "Stage 2",
    title: "Máximo Rendimiento",
    features: ["+30-40% Potencia", "+35-45% Par Motor", "Performance Extremo"]
  },
  {
    label: "DPF OFF",
    title: "Elimina Filtro de Partículas",
    features: ["Fin Regeneraciones", "Menos Averías", "Mayor Durabilidad"]
  },
  {
    label: "EGR OFF",
    title: "Desactiva Válvula EGR",
    features: ["Motor Más Limpio", "Mejor Combustión", "Menos Carbonilla"]
  },
  {
    label: "AdBlue OFF",
    title: "Elimina Sistema SCR",
    features: ["Sin Repostaje AdBlue", "Ahorro Mantenimiento", "Sin Fallos Sistema"]
  },
  {
    label: "DTC OFF",
    title: "Elimina Códigos Error",
    features: ["Sin Check Engine", "ECU Limpia", "Sin Testigos"]
  },
  {
    label: "Ingeniería de Escape",
    title: "Sistemas de Alto Flujo",
    features: ["Downpipes Premium", "Borla & Akrapovič", "Sonido Superior"]
  },
  {
    label: "Pops & Bangs",
    title: "Sonido Deportivo",
    features: ["Sonido Agresivo", "Llamas en Escape", "Experiencia Racing"]
  }
];

export const ServicesGrid = () => {
  return (
    <section id="servicios" className="relative py-24 lg:py-32 overflow-hidden">
      <Container className="relative z-10">
        {/* Section Label */}
        <div className="flex items-center justify-center gap-4 mb-6">
           <div className="w-12 h-[2px] bg-[#E10717]" />
           <span className="text-[#7B7B7B] text-sm uppercase tracking-widest">Servicios</span>
           <div className="w-12 h-[2px] bg-[#E10717]" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-title-silver leading-tight text-depth">
          Ingeniería aplicada <AnimatedGradientText>a su medida</AnimatedGradientText>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-[2rem] border border-[#7B7B7B]/30 bg-[#1C1C1C] p-6 hover:border-[#E10717]/50 transition-colors duration-300 group relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-[#E10717]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-[1px] bg-[#E10717]"></div>
                  <span className="text-[#7B7B7B] text-xs uppercase tracking-widest font-medium">{service.label}</span>
                </div>
                <h3 className="text-white text-xl font-bold mb-2 group-hover:text-[#E10717] transition-colors">{service.title}</h3>
                <ul className="space-y-1.5 text-sm text-[#7B7B7B] mt-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-[#E10717]">•</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
