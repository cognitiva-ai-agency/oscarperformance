import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Servicio a Domicilio | Os Car Performance",
  description: "Reprogramación y diagnóstico en la comodidad de tu hogar u oficina. Servicio VIP para clientes premium en Santiago y Valparaíso.",
  keywords: ["servicio a domicilio", "reprogramación móvil", "diagnóstico a domicilio", "VIP", "premium"],
};

export default function ServicioADomicilioPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#000000] pt-32">
        <div className="container mx-auto px-6 py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Servicio{" "}
              <span className="text-[#E10717]">a Domicilio</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-12">
              Ingeniería automotriz VIP en la comodidad de tu hogar u oficina.
            </p>
            
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-12">
              <p className="text-gray-400 text-lg">
                Contenido en desarrollo. Para agendar servicio a domicilio, contáctanos vía WhatsApp.
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
