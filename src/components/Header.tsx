"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Container from "./ui/Container";
import Button from "./ui/Button";

const navLinks = [
  { name: "Nosotros", href: "#nosotros" },
  { name: "Servicios", href: "#servicios" },
  { name: "Partners", href: "#partners" },
  { name: "Ventajas", href: "#diferencia" },
];

import { smoothScrollTo } from "@/lib/smoothScroll";

// ... existing imports

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    smoothScrollTo(e, href);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? "py-4 bg-[#000000]/80 backdrop-blur-md shadow-2xl" 
          : "py-8 bg-[#000000]/60 backdrop-blur-sm"
      }`}
    >
      {/* ... existing border code ... */}
      {isScrolled && (
        <motion.div 
          layoutId="header-border"
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#E10717]/50 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      )}

      <Container>
        <nav className="flex items-center justify-between transition-all duration-500">
          {/* Logo Container */}
          <motion.a 
            href="#" 
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => handleNavClick(e as any, "#")}
          >
            <Image
              src="/images/logo.png"
              alt="Os Car Performance"
              width={360}
              height={120}
              className={`transition-all duration-500 ${isScrolled ? "h-16" : "h-24"} w-auto`}
              priority
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e as any, link.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx + 0.5, duration: 0.5 }}
                className="relative group text-sm uppercase tracking-[0.2em] font-medium"
              >
                <span className="text-[#7B7B7B] group-hover:text-white transition-colors duration-300">
                  {link.name}
                </span>
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#E10717] transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
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
            </motion.div>
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

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ 
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4 border-t border-[#7B7B7B]/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e as any, link.href)}
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
        </motion.div>
      </Container>
    </motion.header>
  );
}
