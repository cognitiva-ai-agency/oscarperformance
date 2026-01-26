"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Container from "../ui/Container";
import AnimatedGradientText from "../ui/AnimatedGradientText";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Counter animation for stats
    if (statsRef.current) {
      const counters = statsRef.current.querySelectorAll(".stat-number");
      
      counters.forEach((counter) => {
        const target = counter.getAttribute("data-target");
        if (!target) return;

        ScrollTrigger.create({
          trigger: counter,
          start: "top 80%",
          onEnter: () => {
            gsap.to(counter, {
              innerHTML: target,
              duration: 2,
              snap: { innerHTML: 1 },
              ease: "power2.out",
            });
          },
        });
      });
    }

    // Image reveal animation
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 70%",
          },
        }
      );
    }
  }, []);

  return (
    <section id="nosotros" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Tech particle background removed */}
      
      <Container className="relative z-10">
        {/* Centered Header Section */}
        <motion.div
           variants={fadeInUp}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-[#E10717]" />
            <span className="text-[#7B7B7B] text-sm uppercase tracking-widest">Nosotros</span>
            <div className="w-12 h-[2px] bg-[#E10717]" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold leading-tight gradient-title-silver text-depth">
            Socios en el camino a la <AnimatedGradientText>excelencia</AnimatedGradientText>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Text content */}
          <motion.div variants={slideInLeft} className="order-2 lg:order-1">
            <div className="space-y-6 text-[#7B7B7B] leading-relaxed">
              <p className="text-lg">
                Su automóvil tiene un potencial que aún no ha experimentado. En Os Car Performance, nuestro trabajo es articular tecnología de vanguardia y expertise técnico para liberar ese rendimiento oculto, garantizando una entrega de potencia fluida y segura.
              </p>
              <p className="text-lg">
                No solo optimizamos software; potenciamos la ingeniería de su máquina para que cada trayecto sea una demostración de eficiencia y autoridad en la ruta.
              </p>
            </div>
            
            {/* Stats with counter animation */}
            <motion.div 
              ref={statsRef}
              variants={fadeInUp}
              className="grid grid-cols-3 gap-8 mt-10 pt-10 border-t border-[#7B7B7B]/20"
            >
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#E10717]">
                  +<span className="stat-number" data-target="9">0</span>
                </div>
                <div className="text-sm text-[#7B7B7B] mt-1">Años de experiencia</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#E10717]">
                  <span className="stat-number" data-target="500">0</span>+
                </div>
                <div className="text-sm text-[#7B7B7B] mt-1">Vehículos optimizados</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#E10717]">
                  <span className="stat-number" data-target="98">0</span>%
                </div>
                <div className="text-sm text-[#7B7B7B] mt-1">Satisfacción</div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Image placeholder */}
          <motion.div 
            variants={slideInRight}
            className="order-1 lg:order-2 relative"
          >
            <div ref={imageRef} className="relative aspect-[4/3] bg-[#000000] rounded-xl overflow-hidden">
              {/* Team photo */}
              <Image
                src="/images/equipo_tecnico.webp"
                alt="Equipo técnico de Os Car Performance"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Red accent corner */}
              <div className="absolute bottom-0 right-0 w-24 h-24">
                <div className="absolute bottom-0 right-0 w-full h-full bg-[#E10717]/10" />
                <div className="absolute bottom-0 right-0 w-1 h-full bg-[#E10717]" />
                <div className="absolute bottom-0 right-0 w-full h-1 bg-[#E10717]" />
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border border-[#E10717]/20 rounded-xl" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
