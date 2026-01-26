"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // Cast to ensure TS knows it's not null in closures
    const currentCanvas = canvas as HTMLCanvasElement;

    const renderCtx = canvas.getContext("2d");
    if (!renderCtx) return;
    const ctx = renderCtx;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle system for tech/data visualization
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;

      constructor() {
        this.x = Math.random() * currentCanvas.width;
        this.y = Math.random() * currentCanvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.color = Math.random() > 0.7 ? "225, 7, 23" : "255, 255, 255";
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > currentCanvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > currentCanvas.height) this.speedY *= -1;
      }

      draw() {
        // Increased particle opacity
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity * 1.5})`; 
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Energy waves
    class EnergyWave {
      y: number;
      amplitude: number;
      frequency: number;
      phase: number;
      speed: number;
      opacity: number;

      constructor(startY: number) {
        this.y = startY;
        this.amplitude = 30 + Math.random() * 20;
        this.frequency = 0.01 + Math.random() * 0.01;
        this.phase = Math.random() * Math.PI * 2;
        this.speed = 0.02 + Math.random() * 0.02;
        this.opacity = 0.2 + Math.random() * 0.2; // Increased base opacity
      }

      update() {
        this.phase += this.speed;
      }

      draw() {
        ctx.strokeStyle = `rgba(225, 7, 23, ${this.opacity})`;
        ctx.lineWidth = 2;
        ctx.beginPath();

        for (let x = 0; x < currentCanvas.width; x += 5) {
          const y = this.y + Math.sin(x * this.frequency + this.phase) * this.amplitude;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
    }

    // Initialize particles and waves
    const particles: Particle[] = [];
    const particleCount = 100;
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const waves: EnergyWave[] = [];
    for (let i = 0; i < 3; i++) {
      waves.push(new EnergyWave(currentCanvas.height * 0.3 + i * 150));
    }

    // Circuit lines (technical)
    const drawTechnicalGrid = () => {
      // Increased grid opacity
      ctx.strokeStyle = "rgba(225, 7, 23, 0.15)";
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = 0; x < currentCanvas.width; x += 100) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, currentCanvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < currentCanvas.height; y += 100) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(currentCanvas.width, y);
        ctx.stroke();
      }

      // Tech nodes at intersections
      for (let x = 0; x < currentCanvas.width; x += 100) {
        for (let y = 0; y < currentCanvas.height; y += 100) {
          if (Math.random() > 0.8) {
            // Increased node opacity
            ctx.fillStyle = "rgba(225, 7, 23, 0.4)";
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    };

    // Animation loop
    let frame = 0;
    let animationFrameId: number;

    const animate = () => {
      // Semi-transparent background for trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, currentCanvas.width, currentCanvas.height);

      // Draw technical grid (static)
      if (frame % 60 === 0) {
        drawTechnicalGrid();
      }

      // Update and draw energy waves
      waves.forEach((wave) => {
        wave.update();
        wave.draw();
      });

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw connecting lines between nearby particles
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            // Increased line opacity
            const opacity = (1 - distance / 150) * 0.4;
            ctx.strokeStyle = `rgba(225, 7, 23, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      // Pulsing center glow
      const centerX = currentCanvas.width / 2;
      const centerY = currentCanvas.height / 2;
      const pulseSize = 200 + Math.sin(frame * 0.02) * 50;
      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        pulseSize
      );
      gradient.addColorStop(0, "rgba(225, 7, 23, 0.2)"); // Increased
      gradient.addColorStop(0.5, "rgba(225, 7, 23, 0.05)"); // Increased
      gradient.addColorStop(1, "rgba(225, 7, 23, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, currentCanvas.width, currentCanvas.height);

      frame++;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Canvas animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />

      {/* Additional gradient overlays */}
      <motion.div
        className="absolute inset-0"
        style={{ zIndex: 2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Radial gradient from top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#E10717] rounded-full blur-[200px] opacity-20" /> {/* Increased */}
        
        {/* Corner accent */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#E10717] rounded-full blur-[180px] opacity-10" /> {/* Increased */}
        
        {/* Animated scan line */}
        <motion.div
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E10717] to-transparent"
          animate={{
            top: ["0%", "100%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ opacity: 0.5 }} // Increased
        />
      </motion.div>

      {/* Dark gradient overlay for readability - Reduced significantly */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black z-10" />
    </>
  );
}
