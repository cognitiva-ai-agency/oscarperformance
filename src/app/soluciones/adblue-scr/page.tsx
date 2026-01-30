import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solución AdBlue / SCR | Os Car Performance",
  description: "Solución definitiva a fallos de AdBlue y SCR. Ingeniería electrónica para Peugeot, Citroën y Mercedes-Benz. No más arranque prohibido.",
  keywords: ["AdBlue", "SCR", "arranque prohibido", "Peugeot", "Citroën", "Mercedes-Benz", "urea", "falla AdBlue"],
};

export default function AdBluePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#000000] pt-32">
        <div className="container mx-auto px-6 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-3xl mx-auto">
                Solución Definitiva al Sistema{" "}
                <span className="text-[#E10717]">AdBlue / SCR</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
                No dejes que una falla de software detenga tu motor.{" "}
                <span className="text-white font-semibold">
                  Ingeniería electrónica
                </span>{" "}
                para recuperar la fiabilidad de tu Peugeot, Citroën o Mercedes-Benz.
              </p>
            </div>

            {/* Problem Section */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-12 mb-12">
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                <p className="text-xl font-semibold text-white">
                  ¿Ves la cuenta regresiva de "Arranque prohibido"?
                </p>
                
                <p>
                  Los sistemas de urea cristalizada son el{" "}
                  <span className="text-[#E10717] font-semibold">
                    talón de Aquiles
                  </span>{" "}
                  de los motores modernos.
                </p>
                
                <p>
                  Mientras el concesionario propone cambios de depósito millonarios,{" "}
                  <span className="text-white font-semibold">
                    nosotros aplicamos ingeniería de software vía Alientech
                  </span>{" "}
                  para gestionar la falla de raíz.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <Link
                href="https://wa.me/56123456789?text=Hola%2C%20necesito%20diagnóstico%20prioritario%20para%20falla%20AdBlue%2FSCR"
                className="inline-block bg-[#E10717] hover:bg-[#c00612] text-white font-bold text-lg px-12 py-5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-900/50"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar Diagnóstico Prioritario
              </Link>
              
              <p className="text-gray-400 mt-6 text-sm">
                Respuesta en menos de 2 horas • Diagnóstico sin compromiso
              </p>
            </div>

            {/* Benefits Section */}
            <div className="mt-20 grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-[#E10717] text-4xl font-bold mb-3">24h</div>
                <h3 className="text-white font-semibold mb-2">Solución Rápida</h3>
                <p className="text-gray-400 text-sm">
                  Intervención en un día hábil
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-[#E10717] text-4xl font-bold mb-3">100%</div>
                <h3 className="text-white font-semibold mb-2">Reversible</h3>
                <p className="text-gray-400 text-sm">
                  Podemos restaurar si es necesario
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-[#E10717] text-4xl font-bold mb-3">PSA</div>
                <h3 className="text-white font-semibold mb-2">Especialistas</h3>
                <p className="text-gray-400 text-sm">
                  Peugeot, Citroën y Mercedes
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
