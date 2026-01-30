import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Eliminación DPF y EGR | Os Car Performance",
  description: "Solución profesional para filtros de partículas y válvulas EGR. Recupera potencia y elimina problemas de regeneración.",
  keywords: ["DPF", "EGR", "filtro partículas", "válvula EGR", "eliminación DPF", "regeneración DPF"],
};

export default function DpfEgrPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#000000] pt-32">
        <div className="container mx-auto px-6 py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Gestión Profesional de{" "}
              <span className="text-[#E10717]">DPF y EGR</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-12">
              Solución definitiva para filtros de partículas y válvulas EGR problemáticas.
            </p>
            
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-12">
              <p className="text-gray-400 text-lg">
                Contenido en desarrollo. Para consultas inmediatas sobre DPF/EGR, contáctanos vía WhatsApp.
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
