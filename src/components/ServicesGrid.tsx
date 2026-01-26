"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import Container from "./ui/Container";
import AnimatedGradientText from "./ui/AnimatedGradientText";
import { fadeInUp, staggerContainer } from "@/lib/animations";

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
    <section id="servicios" className="relative pt-8 pb-24 lg:pt-12 lg:pb-32 overflow-hidden">
      <Container className="relative z-10">
        {/* Section Label */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
             <div className="w-24 md:w-56 lg:w-72 h-[2px] bg-[#E10717]" />
             <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.159.954c.023.136.154.234.292.217a6.973 6.973 0 002.365-.79c.125-.062.278-.04.383.056l.788.75c.382.363.382.96 0 1.322l-.635.604a.276.276 0 00-.07.284c.15.535.255 1.09.309 1.66.012.138.128.242.267.242h.866c.54 0 .977.444.977.986v1.085c0 .542-.437.986-.977.986h-.867c-.139 0-.255.104-.267.242a7.1 7.1 0 00-.31 1.66.276.276 0 00.07.284l.635.604c.382.363.382.96 0 1.322l-.788.75c-.105.096-.258.118-.383.056a6.974 6.974 0 00-2.365-.79.277.277 0 00-.292.217l-.159.955c-.09.541-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.159-.955a.276.276 0 00-.291-.217 6.975 6.975 0 00-2.365.79.275.275 0 00-.383-.056l-.788-.75a.936.936 0 010-1.322l.635-.604a.276.276 0 00.07-.284 7.096 7.096 0 00-.31-1.66.276.276 0 00-.266-.242h-.867c-.54 0-.977-.444-.977-.986V9.897c0-.542.437-.986.977-.986h.867c.139 0 .255-.104.266-.242.054-.57.16-1.124.31-1.66a.276.276 0 00-.07-.284l-.635-.604a.936.936 0 010-1.322l.788-.75c.105-.096.258-.118.383-.056a6.974 6.974 0 002.365.79.277.277 0 00.292-.217l.159-.954zM12 15a3 3 0 100-6 3 3 0 000 6z" />
             </svg>
             <div className="w-24 md:w-56 lg:w-72 h-[2px] bg-[#E10717]" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-0 text-center gradient-title-silver leading-tight text-depth">
            Ingeniería aplicada <AnimatedGradientText>a su medida</AnimatedGradientText>
          </h2>
        </div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-[1.5rem] md:rounded-[2rem] border border-[#7B7B7B]/30 bg-[#1C1C1C] p-4 md:p-6 lg:p-8 hover:border-[#E10717]/50 transition-colors duration-300 group relative flex flex-col h-full justify-between"
            >
              <div className="absolute inset-0 bg-[#E10717]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[1.5rem] md:rounded-[2rem]" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="grid grid-cols-[auto_1fr] items-start gap-2 md:gap-3 mb-2 md:mb-3">
                  <div className="w-6 md:w-10 h-[1px] bg-[#E10717] mt-1.5 md:mt-2"></div>
                  <span className="text-[#7B7B7B] text-[10px] md:text-xs uppercase tracking-widest font-medium leading-tight">{service.label}</span>
                </div>
                <h3 className="text-white text-xs md:text-xl font-bold mb-2 group-hover:text-[#E10717] transition-colors leading-tight min-h-[3em] break-words" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>{service.title}</h3>
                <ul className="space-y-1 md:space-y-1.5 text-[10px] md:text-sm text-[#7B7B7B] mt-auto">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 md:gap-2">
                      <span className="text-[#E10717] mt-[2px] shrink-0">•</span> 
                      <span className="leading-tight break-words flex-1" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
