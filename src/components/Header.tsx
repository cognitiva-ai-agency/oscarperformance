"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Container from "./ui/Container";
import Button from "./ui/Button";
import { smoothScrollTo } from "@/lib/smoothScroll";

const navLinks = [
  { name: "Nosotros", href: "#nosotros" },
  { name: "Servicios", href: "#servicios" },
  { name: "Partners", href: "#partners" },
  { name: "Ventajas", href: "#diferencia" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle class based on scroll position - lightweight check
      if (window.scrollY > 50) {
        if (!isScrolled) setIsScrolled(true);
      } else {
        if (isScrolled) setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]); // Depend on isScrolled to avoid unnecessary setStates

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    smoothScrollTo(e, href);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ease-in-out ${
        isScrolled 
          ? "py-4 bg-[#000000]/80 backdrop-blur-md shadow-2xl" 
          : "py-4 md:py-8 bg-[#000000]/60 backdrop-blur-sm"
      }`}
    >
      {/* Scroll Border Indicator - Pure CSS Transition */}
      <div 
        className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#E10717]/50 to-transparent transition-opacity duration-500 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      <Container>
        <nav className="flex items-center justify-between transition-all duration-500">
          {/* Logo Container */}
          <a 
            href="#" 
            className="flex items-center transform transition-transform duration-200 hover:scale-105"
            onClick={(e) => handleNavClick(e, "#")}
          >
            <Image
              src="/images/logo.png"
              alt="Os Car Performance"
              width={252}
              height={84}
              /* 
                 Aggressive optimization for mobile LCP:
                 - Mobile (< 768px): loads ~150px-180px version
                 - Desktop (> 768px): loads full 252px version
              */
              sizes="(max-width: 768px) 180px, 252px"
              quality={85}
              className={`transition-all duration-500 ${isScrolled ? "h-16" : "h-24"} w-auto`}
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative group text-sm uppercase tracking-[0.2em] font-medium"
              >
                <span className="text-[#7B7B7B] group-hover:text-white transition-colors duration-300">
                  {link.name}
                </span>
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#E10717] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            
            <div className="animate-in fade-in slide-in-from-right-4 duration-700 delay-300 fill-mode-backwards">
              <Button 
                variant="primary" 
                size="sm" 
                href="#cotiza" 
                className="px-8 flex items-center gap-2 group"
                onClick={(e) => handleNavClick(e as any, "#cotiza")}
              >
                <span>Cotiza</span>
                <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu - Pure CSS / Conditional rendering */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
             isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-4 border-t border-[#7B7B7B]/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-[#7B7B7B] hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <Button 
              variant="primary" 
              size="sm" 
              href="#cotiza" 
              className="w-full"
              onClick={(e) => handleNavClick(e as any, "#cotiza")}
            >
              Cotiza Ahora
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
