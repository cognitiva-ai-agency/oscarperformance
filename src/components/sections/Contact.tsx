"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import AnimatedGradientText from "../ui/AnimatedGradientText";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    vehiculo: "",
    anio: "",
    motor: "",
    mensaje: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Construct WhatsApp message
    const { nombre, email, telefono, vehiculo, anio, motor, mensaje } = formData;
    const whatsappMessage = `Hola Os Car Performance, me gustaría solicitar una evaluación.

*Datos del Cliente*:
• Nombre: ${nombre}
• Email: ${email}
• Teléfono: ${telefono}
• Vehículo: ${vehiculo}
• Año: ${anio}
• Motor: ${motor}

*Mensaje*:
${mensaje}`;

    const whatsappUrl = `https://wa.me/56932417147?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp after a minimal delay
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ nombre: "", email: "", telefono: "", vehiculo: "", anio: "", motor: "", mensaje: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section id="cotiza" className="relative py-24 lg:py-32 overflow-hidden">
      <Container className="relative z-20">
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
            <span className="text-[#7B7B7B] text-sm uppercase tracking-widest">Cotiza</span>
            <div className="w-12 h-[2px] bg-[#E10717]" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold leading-tight gradient-title-silver text-depth">
            Hablemos de <AnimatedGradientText>su próximo hito.</AnimatedGradientText>
          </h2>
        </motion.div>

        {/* Mobile-only text paragraph positioned between Title and Form */}
        <motion.p 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="block lg:hidden text-lg text-[#7B7B7B] mb-12 leading-relaxed text-center"
        >
          Cada gran proyecto comienza con una conversación técnica. Cuéntenos qué busca para su vehículo y definamos juntos la mejor estrategia para cristalizar ese rendimiento.
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-20"
        >
          {/* Left column - Content */}
          <motion.div variants={slideInLeft}>
            <p className="hidden lg:block text-lg text-[#7B7B7B] mb-8 leading-relaxed">
              Cada gran proyecto comienza con una conversación técnica. Cuéntenos qué busca para su vehículo y definamos juntos la mejor estrategia para cristalizar ese rendimiento.
            </p>
            
            {/* Contact info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-[#7B7B7B]">
                <div className="w-10 h-10 flex items-center justify-center bg-[#1C1C1C] rounded-xl">
                  <svg className="w-5 h-5 text-[#E10717]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <span>Región Metropolitana & Valparaíso</span>
              </div>
              
              <div className="flex items-center gap-4 text-[#7B7B7B]">
                <div className="w-10 h-10 flex items-center justify-center bg-[#1C1C1C] rounded-xl">
                  <svg className="w-5 h-5 text-[#E10717]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <a href="tel:+56932417147" className="text-[#7B7B7B] hover:text-[#E10717] transition-colors duration-300">
                  +56 9 3241 7147
                </a>
              </div>
              
              <div className="flex items-center gap-4 text-[#7B7B7B]">
                <div className="w-10 h-10 flex items-center justify-center bg-[#1C1C1C] rounded-xl">
                  <svg className="w-5 h-5 text-[#E10717]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <span>cotiza@oscarperformance.cl</span>
              </div>
            </div>
          </motion.div>
          
          {/* Right column - Form */}
          <motion.div variants={slideInRight}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm text-[#7B7B7B] mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1C1C1C] border border-[#7B7B7B]/30 rounded-xl text-white placeholder-[#7B7B7B] focus:outline-none focus:border-[#E10717] transition-colors duration-300"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm text-[#7B7B7B] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1C1C1C] border border-[#7B7B7B]/30 rounded-xl text-white placeholder-[#7B7B7B] focus:outline-none focus:border-[#E10717] transition-colors duration-300"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="telefono" className="block text-sm text-[#7B7B7B] mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#1C1C1C] border border-[#7B7B7B]/30 rounded-xl text-white placeholder-[#7B7B7B] placeholder:text-sm md:placeholder:text-base focus:outline-none focus:border-[#E10717] transition-colors duration-300"
                    placeholder="+56 9 XXXX XXXX"
                  />
                </div>
                
                <div>
                  <label htmlFor="vehiculo" className="block text-sm text-[#7B7B7B] mb-2">
                    Vehículo
                  </label>
                  <input
                    type="text"
                    id="vehiculo"
                    name="vehiculo"
                    value={formData.vehiculo}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#1C1C1C] border border-[#7B7B7B]/30 rounded-xl text-white placeholder-[#7B7B7B] focus:outline-none focus:border-[#E10717] transition-colors duration-300"
                    placeholder="Marca y modelo"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="anio" className="block text-sm text-[#7B7B7B] mb-2">
                    Año
                  </label>
                  <input
                    type="text"
                    id="anio"
                    name="anio"
                    value={formData.anio}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#1C1C1C] border border-[#7B7B7B]/30 rounded-xl text-white placeholder-[#7B7B7B] focus:outline-none focus:border-[#E10717] transition-colors duration-300"
                    placeholder="Año del vehículo"
                  />
                </div>
                
                <div>
                  <label htmlFor="motor" className="block text-sm text-[#7B7B7B] mb-2">
                    Motor
                  </label>
                  <input
                    type="text"
                    id="motor"
                    name="motor"
                    value={formData.motor}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#1C1C1C] border border-[#7B7B7B]/30 rounded-xl text-white placeholder-[#7B7B7B] placeholder:text-sm md:placeholder:text-base focus:outline-none focus:border-[#E10717] transition-colors duration-300"
                    placeholder="Ej: 2.0 Turbo, Diesel..."
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="mensaje" className="block text-sm text-[#7B7B7B] mb-2">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-[#1C1C1C] border border-[#7B7B7B]/30 rounded-xl text-white placeholder-[#7B7B7B] focus:outline-none focus:border-[#E10717] transition-colors duration-300 resize-none"
                  placeholder="¿Qué servicio te interesa?"
                />
              </div>
              
              <Button 
                type="submit" 
                variant="primary" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  "Solicitar Evaluación"
                )}
              </Button>
              
              {/* Success message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-[#E10717]/10 border border-[#E10717]/30 rounded-xl"
                >
                  <p className="text-center text-[#E10717]">
                    ¡Mensaje enviado! Te contactaremos pronto.
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
