import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Brands from "@/components/sections/Brands";
import Difference from "@/components/sections/Difference";
import Contact from "@/components/sections/Contact";

// Lazy load heavy components for better performance
const ServicesGrid = dynamic(
  () => import("@/components/ServicesGrid").then((mod) => ({ default: mod.ServicesGrid })),
  {
    loading: () => <div className="min-h-[400px]" />,
  }
);

const TracingBeam = dynamic(
  () => import("@/components/ui/tracing-beam").then((mod) => ({ default: mod.TracingBeam })),
  {
    loading: () => <div className="min-h-[200px]" />,
  }
);

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <TracingBeam className="px-6">
          <div className="relative z-10">
            <About />
            <ServicesGrid />
            <Brands />
            <Difference />
            <Contact />
          </div>
        </TracingBeam>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
