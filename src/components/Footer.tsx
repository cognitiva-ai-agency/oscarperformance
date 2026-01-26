"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "./ui/Container";
import { smoothScrollTo } from "@/lib/smoothScroll";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1C1C] border-t border-[#7B7B7B]/10">
      <Container>
        <div className="py-16 flex flex-col items-center text-center">
          {/* Brand */}
          <a 
            href="#" 
            className="inline-flex items-center gap-2 mb-6"
            onClick={(e) => smoothScrollTo(e as any, "#")}
          >
            <Image
              src="/images/logo.png"
              alt="Os Car Performance"
              width={700}
              height={224}
              className="h-40 md:h-56 w-auto"
            />
          </a>
          <p className="text-[#7B7B7B] max-w-2xl leading-relaxed">
            Ingeniería y software de vanguardia para vehículos de alta gama. 
            Elevamos el estándar de los vehículos más exigentes.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-[#7B7B7B]/10">
          <div className="flex justify-center items-center">
            <p className="text-[#7B7B7B] text-sm">
              © {currentYear} Os Car Performance. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
