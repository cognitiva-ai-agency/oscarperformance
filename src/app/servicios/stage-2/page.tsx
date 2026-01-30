import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Stage 2 - Performance Avanzado | Os Car Performance",
  description: "Reprogramación Stage 2 para máximo rendimiento. Modificaciones hardware y software para entusiastas del motorsport.",
  keywords: ["Stage 2", "performance avanzado", "motorsport", "tuning extremo", "track day"],
};

export default function Stage2Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#000000] pt-32">
        <div className="container mx-auto px-6 py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Performance Avanzado{" "}
              <span className="text-[#E10717]">Stage 2</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-12">
              Máximo rendimiento para entusiastas del motorsport y track days.
            </p>
            
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-12">
              <p className="text-gray-400 text-lg">
                Contenido en desarrollo. Para consultas sobre Stage 2, contáctanos vía WhatsApp.
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
