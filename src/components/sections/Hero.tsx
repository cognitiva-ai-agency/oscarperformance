"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import AnimatedGradientText from "../ui/AnimatedGradientText";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { smoothScrollTo } from "@/lib/smoothScroll";
import { useIsMobile } from "@/hooks/useMediaQuery";

import EngineBackground from "../ui/EngineBackground";

export default function Hero() {
  const isMobile = useIsMobile();
  
  // Standard motion settings handled via variants
  
  const handleScroll = (e: React.MouseEvent<any>, href: string) => {
    smoothScrollTo(e, href);
  };

  return (
    <section id="inicio" className="relative min-h-[100vh] flex items-center justify-center bg-[#000000] overflow-hidden pt-36 lg:pt-44">
      {/* Exclusive Engine Background for Hero */}
      <EngineBackground />
      
      {/* Content */}
      <Container className="relative z-20">
        <div className="flex flex-col items-start max-w-5xl mx-auto pt-28 md:pt-16 lg:pt-24">

          
          {/* Main heading - Optimized for LCP on Mobile */}
          {/* We bypass Framer Motion on the H1 to ensure immediate rendering (LCP) */}
          {/* Main heading - Optimized for LCP on Mobile */}
          {/* Main heading - Optimized for LCP on Mobile */}
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 gradient-title-silver text-depth animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-backwards"
          >
            Ingeniería de vanguardia para el{"\u00A0"}<AnimatedGradientText>performance de su motor.</AnimatedGradientText>
          </h1>
          
          {/* Subtitle */}
          <motion.p 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-[#7B7B7B] max-w-2xl mb-10 mt-24 md:mt-8 leading-relaxed"
          >
            Superamos la reprogramación convencional para articular una solución de ingeniería integral que optimiza la arquitectura electrónica de su vehículo. Elevamos el desempeño de los modelos más exigentes mediante una hoja de ruta técnica y resultados tangibles que validan nuestra entrega de valor.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <div className="rounded-full shadow-[0_0_20px_rgba(225,7,23,0.3)] hover:shadow-[0_0_30px_rgba(225,7,23,0.5)] transition-shadow duration-300">
              <Button 
                variant="primary" 
                size="md" 
                href="#cotiza"
                className="w-fit !py-3 !px-8 whitespace-nowrap"
                onClick={(e) => handleScroll(e, "#cotiza")}
              >
                Agendar Evaluación
              </Button>
            </div>
            <Button 
              variant="outline" 
              size="md" 
              href="#servicios"
              className="w-fit !py-3 !px-8 whitespace-nowrap"
              onClick={(e) => smoothScrollTo(e as any, "#servicios")}
            >
              Ver Servicios
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
