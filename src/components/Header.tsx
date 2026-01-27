"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Container from "./ui/Container";
import Button from "./ui/Button";
import { smoothScrollTo } from "@/lib/smoothScroll";

const navLinks = [
  { name: "Nosotros", href: "#nosotros" },
  { name: "Servicios", href: "#servicios" },
  { name: "Calculadora", href: "#configurador" },
  { name: "Partners", href: "#partners" },
  { name: "Confianza", href: "#diferencia" },
];

const sectionIcons: Record<string, React.ReactNode> = {
  inicio: null,
  nosotros: (
    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
  servicios: (
    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.159.954c.023.136.154.234.292.217a6.973 6.973 0 002.365-.79c.125-.062.278-.04.383.056l.788.75c.382.363.382.96 0 1.322l-.635.604a.276.276 0 00-.07.284c.15.535.255 1.09.309 1.66.012.138.128.242.267.242h.866c.54 0 .977.444.977.986v1.085c0 .542-.437.986-.977.986h-.867c-.139 0-.255.104-.267.242a7.1 7.1 0 00-.31 1.66.276.276 0 00.07.284l.635.604c.382.363.382.96 0 1.322l-.788.75c-.105.096-.258.118-.383.056a6.974 6.974 0 00-2.365-.79.277.277 0 00-.292.217l-.159.955c-.09.541-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.159-.955a.276.276 0 00-.291-.217 6.975 6.975 0 00-2.365.79.275.275 0 00-.383-.056l-.788-.75a.936.936 0 010-1.322l.635-.604a.276.276 0 00.07-.284 7.096 7.096 0 00-.31-1.66.276.276 0 00-.266-.242h-.867c-.54 0-.977-.444-.977-.986V9.897c0-.542.437-.986.977-.986h.867c.139 0 .255-.104.266-.242.054-.57.16-1.124.31-1.66a.276.276 0 00-.07-.284l-.635-.604a.936.936 0 010-1.322l.788-.75c.105-.096.258-.118.383-.056a6.974 6.974 0 002.365.79.277.277 0 00.292-.217l.159-.954zM12 15a3 3 0 100-6 3 3 0 000 6z" />
    </svg>
  ),
  configurador: (
    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
    </svg>
  ),
  partners: (
    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  ),
  diferencia: (
    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  ),
  cotiza: (
    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    </svg>
  ),
};

const sectionNames: Record<string, string> = {
  inicio: "INICIO",
  nosotros: "NOSOTROS",
  servicios: "SERVICIOS",
  configurador: "CALCULADORA",
  partners: "PARTNERS",
  diferencia: "CONFIANZA",
  cotiza: "COTIZA"
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showMenuItems, setShowMenuItems] = useState(false);
  const logoRef = useRef<HTMLAnchorElement>(null);

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
  }, [isScrolled]);

  // Handle menu items visibility with timing synchronized to logo animation
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Show menu items immediately to avoid visual glitch
      setShowMenuItems(true);
    } else {
      // Hide menu items immediately when closing
      setShowMenuItems(false);
    }
  }, [isMobileMenuOpen]);

  // Track active section for menu highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        rootMargin: "-45% 0px -45% 0px", // Detect when section is in the middle of the screen
        threshold: 0 
      }
    );

    const observeSections = () => {
      document.querySelectorAll("section[id]").forEach((section) => {
        observer.observe(section);
      });
    };

    // Initial observation
    observeSections();

    // Watch for dynamic sections (lazy loaded)
    const mutationObserver = new MutationObserver(() => {
        observeSections();
    });

    mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
    });

    return () => {
        observer.disconnect();
        mutationObserver.disconnect();
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    smoothScrollTo(e, href);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Overlay - Click outside to close */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[998] md:hidden cursor-default"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ... backdrop ... */}

      <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 delay-200 ease-in-out ${
        isMobileMenuOpen 
          ? "py-4 bg-[#000000]/70 backdrop-blur-md transition-none delay-0 z-[999]" 
          : isScrolled 
            ? "py-4 bg-[#000000]/80 backdrop-blur-md shadow-2xl z-50" 
            : "py-4 md:py-8 bg-[#000000]/60 backdrop-blur-sm z-50"
      }`}
    >
      {/* Scroll Border Indicator */}
      <div 
        className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#E10717]/50 to-transparent transition-opacity ${
          isScrolled && !isMobileMenuOpen ? "opacity-100 duration-500" : "opacity-0 duration-0"
        }`}
      />

      {/* Active Section Indicator - Centered Bottom */}
      <div className={`absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-10 md:hidden transition-all duration-300 ${
        isMobileMenuOpen || !isScrolled ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
      }`}>
        {/* Icon removed per user request - showing text only */}
        <div className="flex items-center">
          <div className="w-4 h-[1px] bg-[#E10717] opacity-50" />
          <span className="mx-2 text-[10px] uppercase tracking-widest text-white/70 font-bold">
              {sectionNames[activeSection] || ""}
          </span>
          <div className="w-4 h-[1px] bg-[#E10717] opacity-50" />
        </div>
      </div>

      <Container>
        <nav className="flex items-center justify-between transition-all duration-300 relative z-[100]">
          {/* Logo Container - Smooth drag-and-drop style animation */}
          <div 
            className={`flex items-center transition-all duration-500 ease-out md:relative md:left-0 md:translate-x-0 md:top-0 md:z-10 ${
              isMobileMenuOpen 
                ? "absolute left-1/2 -translate-x-1/2 -top-6 z-30 pointer-events-none" 
                : isScrolled
                  ? "relative z-10" // Scrolled = Left aligned (flow)
                  : "absolute left-1/2 -translate-x-1/2 top-40 z-10" // Top = Centered
            }`}
            style={{ 
              transitionProperty: "transform, left",
              transitionDuration: "500ms",
              transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)" // Smooth drag-like curve with slight overshoot
            }}
          >
            <a 
              ref={logoRef}
              href="#" 
              className={`flex items-center will-change-transform transition-transform ease-out md:transition-none ${
                isMobileMenuOpen ? "scale-[1.5]" : "scale-100"
              }`}
              style={{ 
                transformOrigin: isMobileMenuOpen ? "top center" : "center center",
                transitionDuration: "500ms",
                transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)" // Match parent animation
              }}
              onClick={(e) => handleNavClick(e as React.MouseEvent<HTMLAnchorElement>, "#")}
            >
              <Image
                src="/images/logo.png"
                alt="Os Car Performance"
                width={252}
                height={84}
                sizes="(max-width: 768px) 180px, 252px"
                quality={85}
                className={`transition-all duration-200 ${
                  isMobileMenuOpen 
                    ? "h-28 w-auto" 
                    : isScrolled 
                      ? "h-20 w-auto" 
                      : "w-[90vw] scale-[1.7] h-auto md:w-auto md:h-28 md:scale-100"
                }`}
                style={{ 
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  objectFit: "contain",
                  display: "block"
                }}
                priority
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative group text-sm uppercase tracking-[0.2em] font-medium ${
                    activeSection === link.href.substring(1) ? "text-white" : "text-[#7B7B7B]"
                }`}
              >
                <span className="group-hover:text-white transition-colors duration-300">
                  {link.name}
                </span>
                <span className={`absolute -bottom-2 left-0 h-[1px] bg-[#E10717] transition-all duration-300 ${
                    activeSection === link.href.substring(1) ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </a>
            ))}
            
            <div className="animate-in fade-in slide-in-from-right-4 duration-700 delay-300 fill-mode-backwards">
              <Button 
                variant="primary" 
                size="sm" 
                href="#cotiza" 
                className="!py-2 !px-6 flex items-center gap-2 group whitespace-nowrap"
                onClick={(e) => handleNavClick(e as any, "#cotiza")}
              >
                <span>Cotiza</span>
                <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button - Positioned absolute when open to avoid pushing centered logo */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            className={`p-2 text-white transition-all duration-500 active:scale-90 md:hidden cursor-pointer z-[1000] ml-auto ${isMobileMenuOpen ? "fixed top-6 right-6" : "relative"}`}
            aria-label="Toggle menu"
            style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
          >
            <svg
              className="w-8 h-8"
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

        {/* Mobile Menu - Stabilized structure to prevent hydration errors */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-200 ease-out relative z-[80] ${
              isMobileMenuOpen && showMenuItems ? "max-h-[500px] opacity-100 visible" : "max-h-0 opacity-0 invisible"
          }`}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className={`${isScrolled ? "pt-32" : "pt-36"} pb-4 border-t border-[#7B7B7B]/10 flex flex-col items-center`}>
            {/* Always render children structure but hide content to keep fiber tree stable */}
            <motion.div
              initial={false}
              animate={isMobileMenuOpen && showMenuItems ? "visible" : "hidden"}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.04,
                    delayChildren: 0
                  }
                },
                hidden: {}
              }}
              className="space-y-4 flex flex-col items-center w-full"
            >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <motion.a
                  key={`mobile-${link.href}`}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 20
                      }
                    }
                  }}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative flex items-center text-xs uppercase tracking-wider transition-colors duration-200 font-bold ${
                    isActive ? "text-white" : "text-[#7B7B7B] hover:text-white"
                  }`}
                >
                  {/* Active Indicator Line - Symmetric */}
                  <span 
                    className={`w-8 h-[2px] bg-[#E10717] mr-3 transition-opacity duration-200 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  {link.name}
                  <span 
                    className={`w-8 h-[2px] bg-[#E10717] ml-3 transition-opacity duration-200 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </motion.a>
              );
            })}
            
            {/* Centered Button Container */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 20
                  }
                }
              }}
              className="w-full flex justify-center pt-4"
            >
              <Button 
                variant="primary" 
                size="sm" 
                href="#cotiza" 
                className="w-fit !py-2 !px-6 flex items-center justify-center gap-2 group whitespace-nowrap"
                onClick={(e) => handleNavClick(e as any, "#cotiza")}
              >
                <span>Cotiza</span>
                <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </motion.div>
          </motion.div>
          </div>
        </div>
      </Container>
    </header>
    </>
  );
}
