import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Hero from "@/components/sections/Hero";
// Lazy load all sections for maximum performance
const About = dynamic(() => import("@/components/sections/About"), {
  loading: () => <div className="min-h-[400px]" />,
  ssr: true,
});

const Services = dynamic(() => import("@/components/sections/Services"), {
  loading: () => <div className="min-h-[400px]" />,
  ssr: true,
});

const Brands = dynamic(() => import("@/components/sections/Brands"), {
  loading: () => <div className="min-h-[200px]" />,
  ssr: true,
});

const Difference = dynamic(() => import("@/components/sections/Difference"), {
  loading: () => <div className="min-h-[400px]" />,
  ssr: true,
});

const Contact = dynamic(() => import("@/components/sections/Contact"), {
  loading: () => <div className="min-h-[600px]" />,
  ssr: true,
});

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
            <Services />
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
