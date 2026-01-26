"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size immediately
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Initial resize
    resizeCanvas();
    setIsReady(true);
    
    window.addEventListener("resize", resizeCanvas);

    // Particles for speed effect
    const particles: Array<{ x: number; y: number; length: number; speed: number; opacity: number }> = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 80 + 20,
        speed: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    // Animation loop
    let frame = 0;
    let animationFrameId: number;
    
    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw speed lines
      particles.forEach((particle) => {
        ctx.strokeStyle = `rgba(225, 7, 23, ${particle.opacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(particle.x - particle.length, particle.y);
        ctx.stroke();

        particle.x -= particle.speed;
        if (particle.x < -particle.length) {
          particle.x = canvas.width + particle.length;
          particle.y = Math.random() * canvas.height;
        }
      });

      // Draw subtle grid pattern
      ctx.strokeStyle = "rgba(123, 123, 123, 0.03)";
      ctx.lineWidth = 0.5;
      const gridSize = 50;
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw animated tachometer arc (top right)
      const arcX = canvas.width - 150;
      const arcY = 150;
      const radius = 100;
      const rpm = (Math.sin(frame * 0.02) + 1) * 0.5; // 0 to 1

      ctx.strokeStyle = "rgba(123, 123, 123, 0.1)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(arcX, arcY, radius, Math.PI, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = "rgba(225, 7, 23, 0.3)";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(arcX, arcY, radius, Math.PI, Math.PI + (Math.PI * rpm));
      ctx.stroke();

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
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-40"
      style={{ zIndex: 0, opacity: isReady ? 0.4 : 0 }}
    />
  );
}
