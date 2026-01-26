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
    <section id="partners" className="pt-8 pb-24 lg:pt-12 lg:pb-32 relative overflow-hidden border-t border-[#1C1C1C]">
      <Container className="relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-24 md:w-56 lg:w-72 h-[2px] bg-[#E10717]" />
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
            <div className="w-24 md:w-56 lg:w-72 h-[2px] bg-[#E10717]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-title-silver text-depth">
            Trabajamos con las <AnimatedGradientText>mejores marcas</AnimatedGradientText>
          </h2>
          <p className="text-lg text-[#7B7B7B] max-w-3xl mx-auto">
            Trabajamos bajo estándares globales con partners de renombre en el rubro del performance. Aseguramos una mejora de potencia precisa y segura mediante herramientas de ingeniería de clase mundial.
          </p>
        </div>
      </Container>

      {/* Infinite Scrolling Carousel */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-scroll">
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`${brand.logo}-${index}`}
              className="flex-shrink-0 mx-8 md:mx-12"
            >
              <div className="h-16 flex items-center justify-center transition-opacity duration-300">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={brand.width}
                  height={brand.height}
                  className="w-auto h-full object-contain"
                  sizes="(max-width: 768px) 150px, 200px"
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
          animation: scroll 9s linear infinite;
        }
      `}</style>
    </section>
  );
}
