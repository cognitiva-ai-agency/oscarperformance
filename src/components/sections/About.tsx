"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

import Image from "next/image";
import Container from "../ui/Container";
import AnimatedGradientText from "../ui/AnimatedGradientText";
import { fadeInUp, staggerContainer } from "@/lib/animations";



export default function About() {
  const statsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for mobile to avoid heavy GSAP on entry
    const isMobileDevice = window.matchMedia("(max-width: 768px)").matches;
    if (isMobileDevice) return;

    const setupAboutAnimations = async () => {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

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
                gsap.from(counter, {
                  innerHTML: 0,
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
    };

    setupAboutAnimations();
  }, []);

  return (
    <section id="nosotros" className="pt-8 pb-24 lg:pt-12 lg:pb-32 relative overflow-hidden">
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
            <div className="w-24 md:w-56 lg:w-72 h-[2px] bg-[#E10717]" />
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
            <div className="w-24 md:w-56 lg:w-72 h-[2px] bg-[#E10717]" />
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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
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
                  +<span className="stat-number" data-target="9">9</span>
                </div>
                <div className="text-sm text-[#7B7B7B] mt-1">Años de experiencia</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#E10717]">
                  <span className="stat-number" data-target="500">500</span>+
                </div>
                <div className="text-sm text-[#7B7B7B] mt-1">Vehículos optimizados</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#E10717]">
                  <span className="stat-number" data-target="98">98</span>%
                </div>
                <div className="text-sm text-[#7B7B7B] mt-1">Satisfacción</div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Image placeholder */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
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
