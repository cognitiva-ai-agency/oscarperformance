import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
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
        url: "/images/og-image.jpg",
        width: 1080,
        height: 1080,
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
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/images/og-image.jpg",
    apple: "/images/og-image.jpg",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "JMbsDpJ0TlM1ewiFL0mq05YfK9a7nJUYQF7K5x2C-vU",
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
        {children}
      </body>
    </html>
  );
}
