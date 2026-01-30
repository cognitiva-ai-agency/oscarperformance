import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Stage 1 - Reprogramación ECU | Os Car Performance",
  description: "Aumenta la potencia de tu motor hasta +30% con nuestra reprogramación Stage 1. Ingeniería de precisión para vehículos de alta gama.",
  keywords: ["Stage 1", "reprogramación ECU", "chiptuning", "aumento potencia", "performance"],
};

export default function Stage1Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black">
        <div className="container mx-auto px-6 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Reprogramación{" "}
              <span className="text-[#E10717]">Stage 1</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-12">
              Libera el verdadero potencial de tu motor con nuestra ingeniería de precisión.
            </p>
            
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-12">
              <p className="text-gray-400 text-lg">
                Contenido en desarrollo. Para consultas sobre Stage 1, contáctanos vía WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
