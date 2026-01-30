"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import AnimatedGradientText from "../ui/AnimatedGradientText";
import vehicleDatabase from "@/data/vehicleDatabase.json";

// =============================================================================
// DATA TYPES
// =============================================================================

interface StageData {
  hp: number;
  nm: number;
  gainHpPercent: number;
  gainNmPercent: number;
  price: number;
  requirements?: string[];
}

interface EngineData {
  title: string;
  stock: { hp: number; nm: number };
  stage1: StageData;
  stage2?: StageData;
}

type VehicleDatabase = Record<string, Record<string, Record<string, EngineData>>>;

const EMPTY_ENGINE_DATA: EngineData = {
  title: "",
  stock: { hp: 0, nm: 0 },
  stage1: { hp: 0, nm: 0, gainHpPercent: 0, gainNmPercent: 0, price: 0 }
};

// Cast imported JSON to typed database
const DB_VEHICLES = vehicleDatabase as VehicleDatabase;

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

// =============================================================================
// COMPONENT
// =============================================================================

export default function Configurator() {
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [selectedEngine, setSelectedEngine] = useState<string>("");
  const [activeStage, setActiveStage] = useState<"stage1" | "stage2">("stage1");

  // Derived data
  const brands = useMemo(() => Object.keys(DB_VEHICLES).sort(), []);
  
  const models = useMemo(() => {
    if (!selectedBrand) return [];
    return Object.keys(DB_VEHICLES[selectedBrand]).sort();
  }, [selectedBrand]);

  const engines = useMemo(() => {
    if (!selectedBrand || !selectedModel) return [];
    return Object.keys(DB_VEHICLES[selectedBrand][selectedModel]).sort();
  }, [selectedBrand, selectedModel]);

  const engineData = useMemo(() => {
    if (!selectedBrand || !selectedModel || !selectedEngine) return null;
    return DB_VEHICLES[selectedBrand][selectedModel][selectedEngine];
  }, [selectedBrand, selectedModel, selectedEngine]);

  const displayData = engineData || EMPTY_ENGINE_DATA;
  const hasData = !!engineData;

  // Handlers
  const handleBrandChange = (brand: string) => {
    setSelectedBrand(brand);
    setSelectedModel("");
    setSelectedEngine("");
    setActiveStage("stage1");
  };

  const handleModelChange = (model: string) => {
    setSelectedModel(model);
    setSelectedEngine("");
    setActiveStage("stage1");
  };

  const handleEngineChange = (engine: string) => {
    setSelectedEngine(engine);
    setActiveStage("stage1");
  };

  const handleReset = () => {
    setSelectedBrand("");
    setSelectedModel("");
    setSelectedEngine("");
    setActiveStage("stage1");
    
    // Add delay to ensure state updates complete before scrolling
    setTimeout(() => {
      const configuradorSection = document.getElementById("calculadora");
      if (configuradorSection) {
        const isMobile = window.innerWidth < 768;
        
        if (isMobile) {
          // On mobile, use scrollIntoView for more reliable positioning
          configuradorSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        } else {
          // Desktop: use existing offset approach
          const headerOffset = 100;
          const elementPosition = configuradorSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    }, 100); // 100ms delay to ensure DOM updates
  };

  // Select styles - consistent premium dark look
  const selectClasses = `
    w-full px-4 py-4 rounded-xl
    bg-[#1C1C1C] text-white
    border border-[#7B7B7B]/30
    focus:outline-none focus:border-[#E10717] focus:ring-2 focus:ring-[#E10717]/30
    transition-all duration-300
    appearance-none cursor-pointer
    text-base
    disabled:opacity-40 disabled:cursor-not-allowed
  `;

  const labelClasses = "block text-[#7B7B7B] text-xs uppercase tracking-wider mb-2 font-medium";

  return (
    <section id="calculadora" className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden bg-black">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#E10717]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#1a1a1a]/30 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-[#E10717] to-transparent opacity-70" />
            <div className="p-2 rounded-full bg-[#E10717]/5 border border-[#E10717]/20">
              <svg className="w-5 h-5 text-[#E10717]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.75 11.25l-2.07-5.518a3.25 3.25 0 00-3.047-2.232H9.367a3.25 3.25 0 00-3.047 2.232L4.25 11.25m15.5 0v6.5a1.5 1.5 0 01-1.5 1.5h-1a1.5 1.5 0 01-1.5-1.5v-.5a.5.5 0 00-.5-.5h-8.5a.5.5 0 00-.5.5v.5a1.5 1.5 0 01-1.5 1.5h-1a1.5 1.5 0 01-1.5-1.5v-6.5m15.5 0h-15.5" />
              </svg>
            </div>
            <div className="w-12 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-[#E10717] to-transparent opacity-70" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-title-silver leading-tight tracking-tight">
            <AnimatedGradientText>Calculadora</AnimatedGradientText>
          </h2>
          <p className="text-[#A1A1A1] text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Selecciona tu vehículo y descubre el potencial de potencia que podemos desbloquear.
          </p>
        </motion.div>

        {/* Main Configurator Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative">
            <div className="absolute -inset-[1px] bg-gradient-to-b from-[#E10717]/20 via-transparent to-[#1a1a1a] rounded-[2rem] opacity-50 blur-sm" />
            <div className="relative rounded-[2rem] bg-gradient-to-b from-[#181818] to-[#0a0a0a] border border-white/5 p-6 md:p-10 overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#E10717]/5 rounded-full blur-[100px] pointer-events-none" />
              
              {/* Dropdowns - Vertical Stack */}
              <div className="relative z-10 space-y-5">
                {/* Brand Select */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <label className={labelClasses}>Marca</label>
                  <div className="relative">
                    <select
                      value={selectedBrand}
                      onChange={(e) => handleBrandChange(e.target.value)}
                      className={selectClasses}
                    >
                      <option value="">Seleccionar marca...</option>
                      {brands.map((brand) => (
                        <option key={brand} value={brand}>{brand}</option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-5 h-5 text-[#7B7B7B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>

                {/* Model Select */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: selectedBrand ? 1 : 0,
                    height: selectedBrand ? "auto" : 0,
                    marginBottom: selectedBrand ? 20 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: "hidden" }}
                >
                  <label className={labelClasses}>Modelo</label>
                  <div className="relative">
                    <select
                      value={selectedModel}
                      onChange={(e) => handleModelChange(e.target.value)}
                      className={selectClasses}
                      disabled={!selectedBrand}
                    >
                      <option value="">Seleccionar modelo...</option>
                      {models.map((model) => (
                        <option key={model} value={model}>{model}</option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-5 h-5 text-[#7B7B7B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>

                {/* Engine Select */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: selectedModel ? 1 : 0,
                    height: selectedModel ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: "hidden" }}
                >
                  <label className={labelClasses}>Motor</label>
                  <div className="relative">
                    <select
                      value={selectedEngine}
                      onChange={(e) => handleEngineChange(e.target.value)}
                      className={selectClasses}
                      disabled={!selectedModel}
                    >
                      <option value="">Seleccionar motor...</option>
                      {engines.map((engine) => (
                        <option key={engine} value={engine}>{engine}</option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-5 h-5 text-[#7B7B7B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Result Card - Dyno Sheet */}
              <motion.div
                initial={false}
                animate={{
                  opacity: hasData ? 1 : 0,
                  height: hasData ? "auto" : 0,
                  marginTop: hasData ? 32 : 0,
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 overflow-hidden"
              >
                <div className={!hasData ? "invisible" : "pb-1"}>
                  {/* Separator */}
                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />
                  
                  {/* Dyno Sheet Card */}
                  <div className="relative rounded-2xl bg-[#0E0E0E]/80 backdrop-blur-xl border border-white/10 p-6 md:p-8 overflow-hidden">
                    {/* Accent Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#E10717] to-transparent" />
                    
                    {/* Header */}
                    <div className="text-center mb-6">
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-1">{displayData.title}</h4>
                      <p className="text-[#7B7B7B] text-sm">Análisis de Rendimiento</p>
                    </div>

                    {/* Stage Tabs (if Stage 2 available) */}
                    {displayData.stage2 && (
                      <div className="flex justify-center gap-2 mb-6">
                        <button
                          onClick={() => setActiveStage("stage1")}
                          className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                            activeStage === "stage1"
                              ? "bg-[#E10717] text-white shadow-lg shadow-[#E10717]/25"
                              : "bg-white/5 text-[#7B7B7B] hover:text-white hover:bg-white/10"
                          }`}
                        >
                          Stage 1
                        </button>
                        <button
                          onClick={() => setActiveStage("stage2")}
                          className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                            activeStage === "stage2"
                              ? "bg-[#E10717] text-white shadow-lg shadow-[#E10717]/25"
                              : "bg-white/5 text-[#7B7B7B] hover:text-white hover:bg-white/10"
                          }`}
                        >
                          Stage 2
                        </button>
                      </div>
                    )}

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {/* Horsepower */}
                      <div className="bg-[#1C1C1C]/50 rounded-xl p-4 md:p-5 border border-white/5 overflow-hidden">
                        <div className="text-[#7B7B7B] text-xs uppercase tracking-wider mb-3 font-medium">Potencia (HP)</div>
                        <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-end sm:justify-between sm:gap-2">
                          <div className="min-w-0 flex-1">
                            <span className="text-white/50 text-xs sm:text-sm line-through">{displayData.stock.hp}</span>
                            <div className="text-white text-xl sm:text-2xl md:text-3xl font-bold break-all">
                              {activeStage === "stage1" ? displayData.stage1.hp : displayData.stage2?.hp}
                            </div>
                          </div>
                          <div className="text-[#E10717] font-bold text-sm sm:text-base md:text-lg whitespace-nowrap flex-shrink-0">
                            +{activeStage === "stage1" ? displayData.stage1.gainHpPercent : displayData.stage2?.gainHpPercent}%
                          </div>
                        </div>
                      </div>

                      {/* Torque */}
                      <div className="bg-[#1C1C1C]/50 rounded-xl p-4 md:p-5 border border-white/5 overflow-hidden">
                        <div className="text-[#7B7B7B] text-xs uppercase tracking-wider mb-3 font-medium">Torque (NM)</div>
                        <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-end sm:justify-between sm:gap-2">
                          <div className="min-w-0 flex-1">
                            <span className="text-white/50 text-xs sm:text-sm line-through">{displayData.stock.nm}</span>
                            <div className="text-white text-xl sm:text-2xl md:text-3xl font-bold break-all">
                              {activeStage === "stage1" ? displayData.stage1.nm : displayData.stage2?.nm}
                            </div>
                          </div>
                          <div className="text-[#E10717] font-bold text-sm sm:text-base md:text-lg whitespace-nowrap flex-shrink-0">
                            +{activeStage === "stage1" ? displayData.stage1.gainNmPercent : displayData.stage2?.gainNmPercent}%
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Requirements (Stage 2 only) */}
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: activeStage === "stage2" && displayData.stage2?.requirements ? 1 : 0,
                        height: activeStage === "stage2" && displayData.stage2?.requirements ? "auto" : 0,
                        marginBottom: activeStage === "stage2" && displayData.stage2?.requirements ? 24 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className={!(activeStage === "stage2" && displayData.stage2?.requirements) ? "invisible" : "mb-6"}>
                        <div className="bg-[#E10717]/5 border border-[#E10717]/20 rounded-xl p-4">
                          <div className="text-[#E10717] text-xs uppercase tracking-wider mb-2 font-medium flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            Requisitos Hardware
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {displayData.stage2?.requirements?.map((req, i) => (
                              <span key={i} className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#1C1C1C] text-white/80 text-xs md:text-sm font-medium">
                                {req}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Price */}
                    <div className="text-center border-t border-white/5 pt-6">
                      <div className="text-[#7B7B7B] text-xs uppercase tracking-wider mb-2">Inversión</div>
                      <div className="text-white text-3xl md:text-4xl font-bold">
                        {formatPrice(activeStage === "stage1" ? displayData.stage1.price : (displayData.stage2?.price || 0))}
                      </div>
                      <p className="text-[#7B7B7B] text-xs mt-2">IVA incluido • Garantía 2 años</p>
                    </div>
                  </div>

                  {/* Reset Button */}
                  <div className="flex justify-center mt-6">
                    <button
                      onClick={handleReset}
                      className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-transparent border border-white/10 text-[#7B7B7B] hover:text-white hover:border-white/30 transition-all duration-300"
                    >
                      <svg className="w-4 h-4 transition-transform group-hover:-rotate-180 duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Nueva Búsqueda
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Empty State */}
              {!hasData && (
                <div className="relative z-10 text-center py-8 text-[#7B7B7B]">
                  <svg className="w-16 h-16 mx-auto mb-4 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.75 11.25l-2.07-5.518a3.25 3.25 0 00-3.047-2.232H9.367a3.25 3.25 0 00-3.047 2.232L4.25 11.25m15.5 0v6.5a1.5 1.5 0 01-1.5 1.5h-1a1.5 1.5 0 01-1.5-1.5v-.5a.5.5 0 00-.5-.5h-8.5a.5.5 0 00-.5.5v.5a1.5 1.5 0 01-1.5 1.5h-1a1.5 1.5 0 01-1.5-1.5v-6.5m15.5 0h-15.5" />
                  </svg>
                  <p className="text-sm font-light">Selecciona un vehículo para ver las opciones de potencia</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
