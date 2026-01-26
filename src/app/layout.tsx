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
  metadataBase: new URL("https://www.oscarperformance.cl"),
  title: "Os Car Performance | Libera el potencial de tu motor",
  description: "Reprogramación de alto nivel y tecnología de precisión para vehículos de alta gama.",
  keywords: ["chiptuning", "tuning automotriz", "performance", "DPF", "EGR", "ECU", "deportivos", "autos de lujo", "Santiago", "Valparaíso"],
  authors: [{ name: "Os Car Performance" }],
  openGraph: {
    title: "Os Car Performance | Libera el potencial de tu motor",
    description: "Reprogramación de alto nivel y tecnología de precisión para vehículos de alta gama.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Os Car Performance Logo",
      },
    ],
    type: "website",
    locale: "es_CL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Os Car Performance | Libera el potencial de tu motor",
    description: "Reprogramación de alto nivel y tecnología de precisión para vehículos de alta gama.",
    images: ["/images/logo.png"],
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
