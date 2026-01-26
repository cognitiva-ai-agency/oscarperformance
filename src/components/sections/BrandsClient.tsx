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
    <section id="partners" className="py-24 lg:py-32 relative overflow-hidden border-t border-[#1C1C1C]">
      <Container className="relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-[#E10717]" />
            <span className="text-[#7B7B7B] text-sm uppercase tracking-widest">Partners Tecnológicos</span>
            <div className="w-12 h-[2px] bg-[#E10717]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 gradient-title-silver text-depth">
            Trabajamos con las <AnimatedGradientText>mejores marcas</AnimatedGradientText>
          </h2>
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
              <div className="h-16 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={brand.width}
                  height={brand.height}
                  className="w-auto h-full object-contain"
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
