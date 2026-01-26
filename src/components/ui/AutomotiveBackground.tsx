"use client";

import { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/useMediaQuery";

interface Particle {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  angle: number;
}

export default function AutomotiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const scrollSpeedRef = useRef(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles
    const initParticles = () => {
      // Reduce particles significantly on mobile for better performance
      const particleCount = isMobile 
        ? 10 
        : Math.min(50, Math.floor(window.innerWidth / 30));
      particlesRef.current = [];

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          length: Math.random() * 80 + 40,
          speed: Math.random() * 2 + 1,
          opacity: Math.random() * 0.3 + 0.1,
          angle: Math.random() * 20 - 10, // Slight angle variation
        });
      }
    };
    initParticles();

    // Track scroll speed
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollSpeedRef.current = Math.abs(currentScrollY - lastScrollY) * 0.1;
      lastScrollY = currentScrollY;
      
      // Decay scroll speed
      setTimeout(() => {
        scrollSpeedRef.current *= 0.9;
      }, 100);
    };
    window.addEventListener("scroll", handleScroll);

    // Animation loop
    let lastFrameTime = 0;
    const targetFPS = isMobile ? 30 : 60; // Limit to 30fps on mobile
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime: number = 0) => {
      // Framerate limiting
      const deltaTime = currentTime - lastFrameTime;
      
      if (deltaTime < frameInterval) {
        requestAnimationFrame(animate);
        return;
      }
      
      lastFrameTime = currentTime - (deltaTime % frameInterval);

      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // Calculate speed based on scroll
        const totalSpeed = particle.speed + scrollSpeedRef.current;

        // Update position
        particle.x -= totalSpeed;

        // Reset particle when it goes off screen
        if (particle.x + particle.length < 0) {
          particle.x = canvas.width + particle.length;
          particle.y = Math.random() * canvas.height;
        }

        // Draw speed line
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate((particle.angle * Math.PI) / 180);

        const gradient = ctx.createLinearGradient(0, 0, particle.length, 0);
        gradient.addColorStop(0, `rgba(225, 7, 23, 0)`);
        gradient.addColorStop(0.5, `rgba(225, 7, 23, ${particle.opacity})`);
        gradient.addColorStop(1, `rgba(225, 7, 23, 0)`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(particle.length, 0);
        ctx.stroke();

        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: -1, opacity: 0.8 }}
      />
      {/* Dark overlay for readability */}
      <div 
        className="fixed inset-0 bg-black/10 pointer-events-none"
        style={{ zIndex: -1 }}
      />
    </>
  );
}
