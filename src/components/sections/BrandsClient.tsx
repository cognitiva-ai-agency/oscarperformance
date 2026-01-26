"use client";

import Image from "next/image";
import Container from "../ui/Container";
import { motion } from "framer-motion";
import AnimatedGradientText from "../ui/AnimatedGradientText";

interface Brand {
  name: string;
  logo: string;
  width: number;
  height: number;
}

interface BrandsClientProps {
  brands: Brand[];
}

export default function BrandsClient({ brands }: BrandsClientProps) {
  // Quadruple brands array to ensure seamless loop on all screen sizes
  const duplicatedBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <section id="partners" className="pt-12 pb-24 lg:pt-20 lg:pb-32 relative overflow-hidden bg-black border-t border-[#1C1C1C]">
      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
             <div className="w-16 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-[#E10717] to-transparent opacity-70" />
             <div className="p-2 rounded-full bg-[#E10717]/5 border border-[#E10717]/20">
                <svg className="w-5 h-5 text-[#E10717]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
             </div>
             <div className="w-16 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-[#E10717] to-transparent opacity-70" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 gradient-title-silver text-depth leading-tight">
            Alianzas que Validan <AnimatedGradientText>Tu Confianza</AnimatedGradientText>
          </h2>
          <p className="text-lg md:text-xl text-[#A1A1A1] max-w-4xl mx-auto leading-relaxed font-light">
            Tu vehículo es una inversión sofisticada y no dejaríamos que cualquiera intervenga su cerebro electrónico. En <strong className="text-white">Oscar Performance</strong>, no "adivinamos"; aplicamos ciencia de datos a la combustión mediante protocolos de lectura y escritura oficiales.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-3 gap-2 md:gap-6 lg:gap-8 mb-20 lg:mb-24">
          {/* Pillar 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group relative h-full"
          >
             <div className="absolute -inset-[1px] bg-gradient-to-r from-[#E10717]/30 to-[#1a1a1a] rounded-[1rem] md:rounded-[2rem] opacity-30 group-hover:opacity-70 transition-opacity duration-500 blur-sm" />
             <div className="relative h-full rounded-[1rem] md:rounded-[2rem] bg-gradient-to-b from-[#181818] to-[#0a0a0a] border border-white/5 p-3 md:p-8 flex flex-col justify-between overflow-hidden">
                {/* Hover Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#E10717]/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#E10717]/10 transition-colors duration-500" />
                
                <div>
                  <div className="w-full flex justify-center mb-3 md:mb-6">
                    <div className="inline-flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-[#E10717]/10 text-[#E10717] border border-[#E10717]/20">
                      <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-[11px] md:text-xl font-bold text-white mb-2 md:mb-3 leading-tight text-center">Dealer Oficial</h3>
                  <p className="text-[#7B7B7B] text-[9px] md:text-sm leading-relaxed hidden md:block">
                    Somos representantes autorizados en Chile, utilizando exclusivamente herramientas <strong className="text-white">KESS3 originales</strong>. Accedemos a las ECUs más modernas de 2026 con total seguridad y respaldo técnico.
                  </p>
                  <p className="text-[#7B7B7B] text-[9px] leading-relaxed md:hidden">
                    Reps. autorizados. Herramientas <strong className="text-white">KESS3 originales</strong> 2026.
                  </p>
                </div>
             </div>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative h-full"
          >
             <div className="absolute -inset-[1px] bg-gradient-to-t from-[#E10717]/30 to-[#1a1a1a] rounded-[1rem] md:rounded-[2rem] opacity-30 group-hover:opacity-70 transition-opacity duration-500 blur-sm" />
             <div className="relative h-full rounded-[1rem] md:rounded-[2rem] bg-gradient-to-b from-[#181818] to-[#0a0a0a] border border-white/5 p-3 md:p-8 flex flex-col justify-between overflow-hidden">
                {/* Hover Glow */}
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E10717]/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#E10717]/10 transition-colors duration-500" />

                <div>
                  <div className="w-full flex justify-center mb-3 md:mb-6">
                    <div className="inline-flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-[#E10717]/10 text-[#E10717] border border-[#E10717]/20">
                      <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-[11px] md:text-xl font-bold text-white mb-2 md:mb-3 leading-tight text-center">Ingeniería</h3>
                  <p className="text-[#7B7B7B] text-[9px] md:text-sm leading-relaxed hidden md:block">
                    No instalamos archivos genéricos bajados de internet. Cada mapa de potencia se desarrolla bajo estándares que respetan los <strong className="text-white">límites térmicos y mecánicos</strong> de tu motor.
                  </p>
                  <p className="text-[#7B7B7B] text-[9px] leading-relaxed md:hidden">
                    Sin archivos genéricos. Desarrollo a medida respetando <strong className="text-white">límites</strong>.
                  </p>
                </div>
             </div>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="group relative h-full"
          >
             <div className="absolute -inset-[1px] bg-gradient-to-l from-[#E10717]/30 to-[#1a1a1a] rounded-[1rem] md:rounded-[2rem] opacity-30 group-hover:opacity-70 transition-opacity duration-500 blur-sm" />
             <div className="relative h-full rounded-[1rem] md:rounded-[2rem] bg-gradient-to-b from-[#181818] to-[#0a0a0a] border border-white/5 p-3 md:p-8 flex flex-col justify-between overflow-hidden">
                {/* Hover Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#E10717]/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#E10717]/10 transition-colors duration-500" />

                <div>
                  <div className="w-full flex justify-center mb-3 md:mb-6">
                    <div className="inline-flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-[#E10717]/10 text-[#E10717] border border-[#E10717]/20">
                      <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-[11px] md:text-xl font-bold text-white mb-2 md:mb-3 leading-tight text-center">Validación</h3>
                  <p className="text-[#7B7B7B] text-[9px] md:text-sm leading-relaxed hidden md:block">
                    Nuestra tecnología es la preferida por dueños de Porsche, BMW, Audi, Mercedes-Benz y los nuevos referentes del mercado como Tank y BYD.
                  </p>
                  <p className="text-[#7B7B7B] text-[9px] leading-relaxed md:hidden">
                    Preferido por dueños de <strong className="text-white">Porsche, BMW, Audi</strong> y nuevos referentes.
                  </p>
                </div>
             </div>
          </motion.div>
        </div>

        {/* Digital Vault Feature */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[2rem] bg-[#0E0E0E] border border-white/10 p-8 md:p-12 mb-20 lg:mb-24 overflow-hidden"
        >
           <div className="absolute top-0 right-0 w-96 h-96 bg-[#E10717]/5 rounded-full blur-[100px] pointer-events-none" />
           <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
             <div className="shrink-0 p-4 rounded-full bg-[#1A1A1A] border border-white/10">
                <svg className="w-10 h-10 text-[#E10717]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
             </div>
             <div>
               <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">La "Bóveda Digital"</h3>
               <p className="text-[#A1A1A1] text-lg leading-relaxed max-w-3xl">
                 Cada archivo original de tu vehículo se guarda en nuestra bóveda digital segura. Si decides vender el auto o necesitas pasar una revisión técnica estricta, <strong className="text-white">restauramos el software de fábrica en minutos</strong>. Tu inversión es 100% reversible.
               </p>
             </div>
           </div>
        </motion.div>

      </Container>

      {/* Infinite Scrolling Carousel */}
      <div className="relative w-full overflow-hidden border-t border-white/5 pt-12">
        <div className="flex w-max animate-scroll">
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`${brand.logo}-${index}`}
              className="flex-shrink-0 mx-8 md:mx-12 hover:scale-105 transition-transform duration-300"
            >
              <div className="h-12 md:h-16 flex items-center justify-center">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={brand.width}
                  height={brand.height}
                  className="w-auto h-full object-contain"
                  sizes="(max-width: 768px) 120px, 160px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
