import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AutomotiveBackground from "@/components/ui/AutomotiveBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Os Car Performance | Ingeniería Automotriz de Alto Rendimiento",
  description: "Ingeniería y software de vanguardia para vehículos de alta gama. Chiptuning, gestión de emisiones, ingeniería de escape y mantenimiento electrónico. Servicio premium en Santiago y Valparaíso.",
  keywords: ["chiptuning", "tuning automotriz", "performance", "DPF", "EGR", "ECU", "deportivos", "autos de lujo", "Santiago", "Valparaíso"],
  authors: [{ name: "Os Car Performance" }],
  openGraph: {
    title: "Os Car Performance | Performance sin concesiones",
    description: "Elevamos el estándar de los vehículos más exigentes. Ingeniería y software de vanguardia.",
    type: "website",
    locale: "es_CL",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`}>
        <AutomotiveBackground />
        {children}
      </body>
    </html>
  );
}
