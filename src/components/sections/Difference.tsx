"use client";

import { motion } from "framer-motion";

import Container from "../ui/Container";
import AnimatedGradientText from "../ui/AnimatedGradientText";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const highlights = [
  {
    title: "Tecnología Global",
    subtitle: "Alientech",
    description: "Contamos con el expertise y las herramientas líderes a nivel mundial (Alientech) para intervenir su unidad de control con total seguridad.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "Seguridad",
    subtitle: "Software Testeado",
    description: "Cada modificación es probada exhaustivamente antes de la entrega final.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Conveniencia",
    subtitle: "Servicio VIP",
    description: "Entendemos su ritmo de vida. Llevamos nuestro taller a su domicilio, asegurando la misma calidad y rigurosidad técnica de nuestra casa matriz.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

export default function Difference() {
  return (
    <section id="diferencia" className="relative pt-8 pb-24 lg:pt-12 lg:pb-32 overflow-hidden">
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
              <div className="w-24 md:w-56 lg:w-72 h-[2px] bg-[#E10717]" />
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              <div className="w-24 md:w-56 lg:w-72 h-[2px] bg-[#E10717]" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-title-silver text-depth">
                Su vehículo en <AnimatedGradientText>las mejores manos</AnimatedGradientText>
            </h2>
            <p className="text-lg text-[#7B7B7B] max-w-2xl mx-auto">
              La confianza se construye con resultados. Nos diferenciamos por un mindset de mejora continua y una transparencia absoluta en cada proceso técnico.
            </p>
          </motion.div>
          
          {/* Highlights grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="relative group text-center"
              >
                {/* Icon container */}
                <div 
                  className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-[#1C1C1C] border border-[#7B7B7B]/30 rounded-xl text-[#E10717] transition-all duration-300 group-hover:border-[#E10717] group-hover:shadow-lg group-hover:shadow-[#E10717]/20"
                >
                  {item.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-1">
                  {item.title}
                </h3>
                
                {/* Subtitle */}
                <p className="text-[#E10717] font-medium mb-3">
                  {item.subtitle}
                </p>
                
                {/* Description */}
                <p className="text-[#7B7B7B] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
