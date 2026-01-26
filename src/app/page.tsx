import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import { ServicesGrid } from "@/components/ServicesGrid";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Brands from "@/components/sections/Brands";
import Difference from "@/components/sections/Difference";
import Contact from "@/components/sections/Contact";

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
