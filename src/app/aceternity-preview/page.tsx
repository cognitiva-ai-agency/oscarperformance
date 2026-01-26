"use client";
import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function AceternityDemo() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white relative w-full overflow-hidden">
        {/* Background Beams Implementation */}
        <BackgroundBeams className="z-0" />
        
        <div className="relative z-10 p-10">
            <h1 className="text-4xl font-bold text-center mb-10 text-brand-red">
                Aceternity UI Integration Demo
            </h1>
            
            {/* Tracing Beam Implementation */}
            <TracingBeam className="px-6">
                <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                    <div className="mb-10">
                        <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4 border border-brand-red/50">
                            High Performance Architecture
                        </h2>
                        <p className="text-brand-gray text-lg mb-4">
                            Implementación de arquitectura limpia utilizando Next.js 16 y Tailwind CSS v4.
                            Los componentes de Aceternity UI ahora están integrados con la paleta de colores corporativa.
                        </p>
                        
                        <div className="h-40 w-full bg-brand-dark rounded-xl border border-brand-gray/20 flex items-center justify-center mb-4">
                            <span className="text-brand-gray">Content Placeholder</span>
                        </div>
                        
                        <p className="text-brand-gray">
                            Gracias a la configuración en <code>tailwind.config.ts</code>, ahora podemos usar 
                            clases como <code>bg-brand-red</code> o <code>text-brand-dark</code> directamente.
                        </p>
                    </div>

                    <div className="mb-10">
                         <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4 border border-brand-red/50">
                            Optimización de Recursos
                        </h2>
                        <p className="text-brand-gray text-lg">
                            Las animaciones como los Background Beams están optimizadas para correr fuera del hilo principal
                            cuando es posible, manteniendo el LCP bajo control.
                        </p>
                    </div>
                </div>
            </TracingBeam>
        </div>
    </div>
  );
}
