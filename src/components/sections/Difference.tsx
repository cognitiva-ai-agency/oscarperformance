"use client";

import { motion } from "framer-motion";

import Container from "../ui/Container";
import AnimatedGradientText from "../ui/AnimatedGradientText";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const highlights = [
  {
    title: "Dealer Oficial Alientech",
    subtitle: "KESS3 Originales",
    description: "Sin riesgos de clones. Herramientas oficiales y protocolos seguros para garantizar la integridad de tu ECU.",
    icon: (
      <svg className="w-4 h-4 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Ingeniería Reversible",
    subtitle: "Back to Stock",
    description: "Software invisible (CVN Patch) y 100% reversible. Tu respaldo de fábrica queda protegido en nuestra bóveda digital.",
    icon: (
      <svg className="w-4 h-4 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
  {
    title: "Laboratorio en tu Garage",
    subtitle: "Servicio VIP",
    description: "Unidad técnica móvil en Santiago y V Región. Llevamos el laboratorio portátil y estabilizadores a tu ubicación.",
    icon: (
      <svg className="w-4 h-4 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
];

export default function Difference() {
  return (
    <section id="diferencia" className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden bg-black">
      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-[#E10717] to-transparent opacity-70" />
                <div className="p-2 rounded-full bg-[#E10717]/5 border border-[#E10717]/20">
                    <svg className="w-5 h-5 text-[#E10717]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                </div>
                <div className="w-16 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-[#E10717] to-transparent opacity-70" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-title-silver text-depth">
                Tu Inversión Protegida <AnimatedGradientText>por Ciencia, No por Suerte</AnimatedGradientText>
            </h2>
            <p className="text-lg text-[#7B7B7B] max-w-4xl mx-auto">
              En Oscar Performance, entendemos que tu vehículo no es solo transporte; es un activo de alta ingeniería. Nos alejamos del "taller de tuning" convencional para convertirnos en tu Partner de Ingeniería, donde la transparencia se mide en datos reales y resultados certificados.
            </p>
          </motion.div>
          
          {/* Highlights grid */}
          <div className="grid grid-cols-3 gap-2 md:gap-8 lg:gap-12">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -5 }}
                className="group relative h-full"
              >
                 <div className="absolute -inset-[1px] bg-gradient-to-r from-[#E10717]/30 to-[#1a1a1a] rounded-[1rem] md:rounded-[2rem] opacity-30 group-hover:opacity-70 transition-opacity duration-500 blur-sm" />
                 <div className="relative h-full rounded-[1rem] md:rounded-[2rem] bg-gradient-to-b from-[#181818] to-[#0a0a0a] border border-white/5 p-2 md:p-8 flex flex-col justify-between overflow-hidden">
                    {/* Hover Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#E10717]/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#E10717]/10 transition-colors duration-500" />
                    
                    <div>
                      {/* Icon Container - Centered */}
                      <div className="w-full flex justify-center mb-2 md:mb-6">
                        <div className="inline-flex items-center justify-center w-8 h-8 md:w-16 md:h-16 rounded-lg md:rounded-xl bg-[#E10717]/10 text-[#E10717] border border-[#E10717]/20">
                          {item.icon}
                        </div>
                      </div>
                      
                      {/* Text Content - Center Aligned */}
                      <h3 className="text-[10px] md:text-xl font-bold text-white mb-1 md:mb-2 leading-tight text-center">
                        {item.title}
                      </h3>
                      <p className="text-[#E10717] font-medium mb-1 md:mb-3 text-[9px] md:text-sm tracking-wide uppercase text-center">
                        {item.subtitle}
                      </p>
                      <p className="text-[#7B7B7B] text-[8px] md:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                 </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
