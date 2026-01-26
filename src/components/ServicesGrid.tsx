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
    <section id="servicios" className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden bg-black">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#E10717]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#1a1a1a]/20 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        
        {/* --- BLOCK 1: PERFORMANCE --- */}
        <div className="mb-24 lg:mb-32">
            <div className="text-center mb-16">
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-4 mb-6"
            >
                <div className="w-12 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-[#E10717] to-transparent opacity-70" />
                <div className="p-2 rounded-full bg-[#E10717]/5 border border-[#E10717]/20">
                    <svg className="w-5 h-5 text-[#E10717]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                </div>
                <div className="w-12 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-[#E10717] to-transparent opacity-70" />
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center gradient-title-silver leading-tight tracking-tight">
                Redefine las Reglas <AnimatedGradientText>de Fábrica</AnimatedGradientText>
            </h2>
            <p className="text-[#A1A1A1] text-lg max-w-2xl mx-auto leading-relaxed font-light">
                Los fabricantes limitan el rendimiento de tu motor por razones comerciales. Nosotros le devolvemos su carácter original y su agilidad perdida.
            </p>
            </div>
            
            <div className="grid grid-cols-2 gap-3 md:gap-6 lg:gap-8">
            {/* Stage 1 Card */}
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative h-full"
            >
                <div className="absolute -inset-[1px] bg-gradient-to-r from-[#E10717]/30 to-[#1a1a1a] rounded-[1.5rem] md:rounded-[2rem] opacity-30 group-hover:opacity-70 transition-opacity duration-500 blur-sm" />
                <div className="relative h-full rounded-[1.5rem] md:rounded-[2rem] bg-gradient-to-b from-[#181818] to-[#0a0a0a] border border-white/5 p-4 md:p-8 lg:p-10 flex flex-col justify-between overflow-hidden">
                    {/* Hover Glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-[#E10717]/5 rounded-full blur-[40px] md:blur-[80px] pointer-events-none group-hover:bg-[#E10717]/10 transition-colors duration-500" />
                    
                    <div>
                        <div className="w-full flex justify-center mb-3 md:mb-6">
                            <div className="inline-flex items-center gap-1.5 md:gap-2 px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-[#E10717]/10 border border-[#E10717]/20">
                                <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-[#E10717] animate-pulse" />
                                <span className="text-[#E10717] text-[10px] md:text-xs font-bold tracking-widest uppercase">Stage 1</span>
                            </div>
                        </div>
                        <h3 className="text-white text-base md:text-3xl font-bold mb-1 md:mb-2 leading-tight text-center">El Despertar</h3>
                        <p className="text-[#7B7B7B] font-medium text-[10px] md:text-sm mb-3 md:mb-6 uppercase tracking-wider text-center">Solo Software</p>
                        <p className="text-gray-400 leading-relaxed font-light text-[11px] md:text-base">
                            Ideal para uso diario. <span className="hidden md:inline">Sin tocar un solo tornillo, optimizamos la electrónica para ganar entre un <span className="text-white font-semibold">20% y 30% más de potencia</span>.</span><span className="md:hidden">Ganancia de <span className="text-white font-semibold">+20-30% HP</span>. Respuesta inmediata y adelantamientos seguros.</span>
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Stage 2 Card */}
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative h-full"
            >
                <div className="absolute -inset-[1px] bg-gradient-to-l from-[#E10717]/30 to-[#1a1a1a] rounded-[1.5rem] md:rounded-[2rem] opacity-30 group-hover:opacity-70 transition-opacity duration-500 blur-sm" />
                <div className="relative h-full rounded-[1.5rem] md:rounded-[2rem] bg-gradient-to-b from-[#181818] to-[#0a0a0a] border border-white/5 p-4 md:p-8 lg:p-10 flex flex-col justify-between overflow-hidden">
                     {/* Hover Glow */}
                     <div className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-[#E10717]/5 rounded-full blur-[40px] md:blur-[80px] pointer-events-none group-hover:bg-[#E10717]/10 transition-colors duration-500" />

                    <div>
                        <div className="w-full flex justify-center mb-3 md:mb-6">
                            <div className="inline-flex items-center gap-1.5 md:gap-2 px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-[#E10717]/10 border border-[#E10717]/20">
                                <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-[#E10717] animate-pulse" />
                                <span className="text-[#E10717] text-[10px] md:text-xs font-bold tracking-widest uppercase">Stage 2</span>
                            </div>
                        </div>
                        <h3 className="text-white text-base md:text-3xl font-bold mb-1 md:mb-2 leading-tight text-center">Pura Sangre</h3>
                        <p className="text-[#7B7B7B] font-medium text-[10px] md:text-sm mb-3 md:mb-6 uppercase tracking-wider text-center">Soft + Hard</p>
                        <p className="text-gray-400 leading-relaxed font-light text-[11px] md:text-base">
                            Para entusiastas. <span className="hidden md:inline">Combinamos reprogramación avanzada con mejoras físicas (Downpipes/Intakes). <span className="text-white font-semibold">Torque agresivo</span> y cifras de deportivo.</span><span className="md:hidden">Reprogramación + <span className="text-white font-semibold">Hardware</span>. Torque agresivo y rendimiento de deportivo.</span>
                        </p>
                    </div>
                </div>
            </motion.div>
            </div>
        </div>

        {/* --- BLOCK 2: SOLUTIONS --- */}
        <div className="mb-24 lg:mb-32">
            <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center gradient-title-silver leading-tight tracking-tight">
                Que un Sensor No Detenga <AnimatedGradientText>Tu Marcha</AnimatedGradientText>
            </h2>
            <p className="text-[#A1A1A1] text-lg max-w-2xl mx-auto leading-relaxed font-light">
                Los sistemas modernos antipolución fallan. Cuando el concesionario solo ofrece cambiar piezas millonarias, nosotros entregamos la alternativa inteligente.
            </p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-6 lg:gap-8">
            {/* AdBlue Card */}
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative h-full"
            >
                <div className="absolute -inset-[1px] bg-gradient-to-r from-[#E10717]/30 to-[#1a1a1a] rounded-[1.5rem] md:rounded-[2rem] opacity-30 group-hover:opacity-70 transition-opacity duration-500 blur-sm" />
                <div className="relative h-full rounded-[1.5rem] md:rounded-[2rem] bg-gradient-to-b from-[#181818] to-[#0a0a0a] border border-white/5 p-4 md:p-8 lg:p-10 flex flex-col justify-between overflow-hidden">
                    {/* Hover Glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-[#E10717]/5 rounded-full blur-[40px] md:blur-[80px] pointer-events-none group-hover:bg-[#E10717]/10 transition-colors duration-500" />
                    
                    <div>
                        <div className="w-full flex justify-center mb-3 md:mb-6">
                            <div className="inline-flex items-center gap-1.5 md:gap-2 px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-[#E10717]/10 border border-[#E10717]/20">
                                <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-[#E10717] animate-pulse" />
                                <span className="text-[#E10717] text-[10px] md:text-xs font-bold tracking-widest uppercase">AdBlue / SCR</span>
                            </div>
                        </div>
                        <h3 className="text-white text-base md:text-3xl font-bold mb-1 md:mb-2 leading-tight text-center">Definitiva</h3>
                        <p className="text-[#7B7B7B] font-medium text-[10px] md:text-sm mb-3 md:mb-6 uppercase tracking-wider text-center">Solución SW</p>
                        <p className="text-gray-400 leading-relaxed font-light text-[11px] md:text-base">
                            <span className="hidden md:inline">Especialistas en motores BlueHDi (PSA), Mercedes y Diesel modernos. Eliminamos la cuenta regresiva de <span className="text-white">"No arranque en 800km"</span> mediante software seguro.</span><span className="md:hidden">Eliminamos la cuenta regresiva <span className="text-white">"No arranque en 800km"</span> en PSA y Diesel modernos. 100% Reversible.</span>
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* DPF & EGR Card */}
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative h-full"
            >
                <div className="absolute -inset-[1px] bg-gradient-to-l from-[#E10717]/30 to-[#1a1a1a] rounded-[1.5rem] md:rounded-[2rem] opacity-30 group-hover:opacity-70 transition-opacity duration-500 blur-sm" />
                <div className="relative h-full rounded-[1.5rem] md:rounded-[2rem] bg-gradient-to-b from-[#181818] to-[#0a0a0a] border border-white/5 p-4 md:p-8 lg:p-10 flex flex-col justify-between overflow-hidden">
                    {/* Hover Glow */}
                    <div className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-[#E10717]/5 rounded-full blur-[40px] md:blur-[80px] pointer-events-none group-hover:bg-[#E10717]/10 transition-colors duration-500" />

                    <div>
                        <div className="w-full flex justify-center mb-3 md:mb-6">
                            <div className="inline-flex items-center gap-1.5 md:gap-2 px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-[#E10717]/10 border border-[#E10717]/20">
                                <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-[#E10717] animate-pulse" />
                                <span className="text-[#E10717] text-[10px] md:text-xs font-bold tracking-widest uppercase">DPF & EGR</span>
                            </div>
                        </div>
                        <h3 className="text-white text-base md:text-3xl font-bold mb-1 md:mb-2 leading-tight text-center">Respiración</h3>
                        <p className="text-[#7B7B7B] font-medium text-[10px] md:text-sm mb-3 md:mb-6 uppercase tracking-wider text-center">Fiabilidad</p>
                        <p className="text-gray-400 leading-relaxed font-light text-[11px] md:text-base">
                            <span className="hidden md:inline">Evita el "Limp Mode" (modo emergencia) y el daño prematuro al turbo por contrapresión excesiva. Devuelve la <span className="text-white">fiabilidad absoluta</span>.</span><span className="md:hidden">Evita "Limp Mode" y daños al turbo. Fiabilidad absoluta para tu motor diésel.</span>
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* DTC OFF Card */}
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -5 }}
                className="group relative h-full"
            >
                <div className="absolute -inset-[1px] bg-gradient-to-b from-[#E10717]/20 to-[#1a1a1a] rounded-[1.5rem] md:rounded-[2rem] opacity-30 group-hover:opacity-70 transition-opacity duration-500 blur-sm" />
                <div className="relative h-full rounded-[1.5rem] md:rounded-[2rem] bg-gradient-to-b from-[#181818] to-[#0a0a0a] border border-white/5 p-4 md:p-8 lg:p-10 flex flex-col justify-between overflow-hidden">
                    {/* Hover Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-64 md:h-64 bg-[#E10717]/5 rounded-full blur-[40px] md:blur-[80px] pointer-events-none group-hover:bg-[#E10717]/10 transition-colors duration-500" />

                    <div>
                        <div className="w-full flex justify-center mb-3 md:mb-6">
                            <div className="inline-flex items-center gap-1.5 md:gap-2 px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-[#E10717]/10 border border-[#E10717]/20">
                                <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-[#E10717] animate-pulse" />
                                <span className="text-[#E10717] text-[10px] md:text-xs font-bold tracking-widest uppercase">DTC OFF</span>
                            </div>
                        </div>
                        <h3 className="text-white text-base md:text-3xl font-bold mb-1 md:mb-2 leading-tight text-center">Diagnóstico</h3>
                        <p className="text-[#7B7B7B] font-medium text-[10px] md:text-sm mb-3 md:mb-6 uppercase tracking-wider text-center">Adiós Testigos</p>
                        <p className="text-gray-400 leading-relaxed font-light text-[11px] md:text-base">
                            <span className="hidden md:inline">Eliminamos códigos de error persistentes que encienden el "Check Engine" por fallos de sensores o modificaciones. <span className="text-white">ECU limpia sin falsas alarmas</span>.</span><span className="md:hidden">Apagamos códigos de error persistentes. Mantén tu tablero limpio y sin "Check Engine".</span>
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Start/Stop Card */}
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -5 }}
                className="group relative h-full"
            >
                <div className="absolute -inset-[1px] bg-gradient-to-t from-[#E10717]/20 to-[#1a1a1a] rounded-[1.5rem] md:rounded-[2rem] opacity-30 group-hover:opacity-70 transition-opacity duration-500 blur-sm" />
                <div className="relative h-full rounded-[1.5rem] md:rounded-[2rem] bg-gradient-to-b from-[#181818] to-[#0a0a0a] border border-white/5 p-4 md:p-8 lg:p-10 flex flex-col justify-between overflow-hidden">
                    {/* Hover Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-64 md:h-64 bg-[#E10717]/5 rounded-full blur-[40px] md:blur-[80px] pointer-events-none group-hover:bg-[#E10717]/10 transition-colors duration-500" />

                    <div>
                        <div className="w-full flex justify-center mb-3 md:mb-6">
                            <div className="inline-flex items-center gap-1.5 md:gap-2 px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-[#E10717]/10 border border-[#E10717]/20">
                                <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-[#E10717] animate-pulse" />
                                <span className="text-[#E10717] text-[10px] md:text-xs font-bold tracking-widest uppercase">Start/Stop</span>
                            </div>
                        </div>
                        <h3 className="text-white text-base md:text-3xl font-bold mb-1 md:mb-2 leading-tight text-center">Desgaste Cero</h3>
                        <p className="text-[#7B7B7B] font-medium text-[10px] md:text-sm mb-3 md:mb-6 uppercase tracking-wider text-center">Protección</p>
                        <p className="text-gray-400 leading-relaxed font-light text-[11px] md:text-base">
                            <span className="hidden md:inline">El ciclo continuo de encendido y apagado fatiga la batería y el motor de arranque. <span className="text-white">Desactivamos este sistema</span> para extender la vida útil de tus componentes.</span><span className="md:hidden">Protege tu batería y motor de arranque. Desactivamos el apagado automático para extender su vida útil.</span>
                        </p>
                    </div>
                </div>
            </motion.div>
            </div>
        </div>

        {/* --- VIP BANNER (Estrategia 2026) --- */}
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[2rem] bg-[#0E0E0E] border border-white/10 p-8 md:p-12 overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#E10717]/5 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
                {/* Icon Container similar to Boveda (Left side) */}
                <div className="shrink-0 p-4 rounded-full bg-[#1A1A1A] border border-white/10">
                    <svg className="w-10 h-10 text-[#E10717]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </div>

                <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        Llevamos el Laboratorio a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E10717] to-[#ff4444]">Tu Garage</span>
                    </h3>
                    <p className="text-[#A1A1A1] text-lg leading-relaxed max-w-3xl">
                        Nuestro <strong className="text-white font-medium">Servicio VIP a Domicilio</strong> despliega una unidad técnica móvil en tu casa u oficina (RM y V Región). Reprogramamos in-situ mientras tú sigues con tu día.
                    </p>
                </div>
            </div>
        </motion.div>

      </Container>
    </section>
  );
};
