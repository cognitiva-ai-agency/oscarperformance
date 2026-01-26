"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../ui/Container";
import Button from "../ui/Button";
import AnimatedGradientText from "../ui/AnimatedGradientText";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { smoothScrollTo } from "@/lib/smoothScroll";
import { useIsMobile } from "@/hooks/useMediaQuery";

import EngineBackground from "../ui/EngineBackground";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    // FIX: Check media query directly to avoid race condition with useIsMobile hook
    // This ensures we NEVER run desktop animations on mobile, even for a split second
    const isMobileDevice = window.matchMedia("(max-width: 768px)").matches;

    if (isMobileDevice) {
      if (headingRef.current) {
        // Ensure strictly visible on mobile
        headingRef.current.style.opacity = "1";
        headingRef.current.style.transform = "none";
      }
      return;
    }

    // Smooth heading animation (desktop only)
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.3,
        }
      );
    }

    // CTA pulse animation (desktop only)
    if (ctaRef.current) {
      gsap.to(ctaRef.current, {
        boxShadow: "0 0 40px rgba(225, 7, 23, 0.6)",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }
  }, []); // Run once on mount

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center bg-[#000000] overflow-hidden pt-32 lg:pt-40">
      {/* Exclusive Engine Background for Hero */}
      <EngineBackground />
      
      {/* Content */}
      <Container className="relative z-20">
        <div className="flex flex-col items-start max-w-5xl mx-auto pt-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E10717]/10 border border-[#E10717]/30 rounded-full mb-8 backdrop-blur-sm"
          >
            <span className="w-2 h-2 bg-[#E10717] rounded-full animate-pulse shadow-[0_0_10px_#E10717]" />
            <span className="text-sm font-semibold text-[#E10717] uppercase tracking-wider">Ingeniería de Alto Rendimiento</span>
          </motion.div>
          
          {/* Main heading - Optimized for LCP on Mobile */}
          {/* We bypass Framer Motion on the H1 to ensure immediate rendering (LCP) */}
          <h1 
            ref={headingRef}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 gradient-title-silver text-depth opacity-100"
          >
            Ingeniería de vanguardia para el <AnimatedGradientText>performance de su motor.</AnimatedGradientText>
          </h1>
          
          {/* Subtitle - Standard fade in */}
          {/* Subtitle - Optimized for LCP */}
          <p 
            className="text-lg md:text-xl text-[#7B7B7B] max-w-2xl mb-10 mt-8 leading-relaxed opacity-100 animate-in fade-in duration-1000 slide-in-from-bottom-5"
          >
            Superamos la reprogramación convencional para articular una solución de ingeniería integral que optimiza la arquitectura electrónica de su vehículo. Elevamos el desempeño de los modelos más exigentes mediante una hoja de ruta técnica y resultados tangibles que validan nuestra entrega de valor.
          </p>
          
          {/* CTA Buttons */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <div ref={ctaRef} className="rounded-full">
              <Button 
                variant="primary" 
                size="lg" 
                href="#cotiza"
                onClick={(e) => smoothScrollTo(e as any, "#cotiza")}
              >
                Agendar Evaluación
              </Button>
            </div>
            <Button 
              variant="outline" 
              size="lg" 
              href="#servicios"
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
