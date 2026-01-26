"use client";

import { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/useMediaQuery";

export default function EngineBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
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

    // Engine pistons animation
    class Piston {
      x: number;
      y: number;
      height: number;
      maxHeight: number;
      speed: number;
      phase: number;

      constructor(x: number, phase: number) {
        this.x = x;
        this.y = canvas!.height * 0.6;
        this.height = 0;
        this.maxHeight = 100;
        this.speed = 0.05;
        this.phase = phase;
      }

      update(frame: number) {
        this.height = (Math.sin(frame * this.speed + this.phase) + 1) * 0.5 * this.maxHeight;
        this.y = canvas!.height * 0.6; // Update Y on resize
      }

      draw() {
        // Piston body
        ctx!.fillStyle = "rgba(225, 7, 23, 0.15)";
        ctx!.fillRect(this.x - 15, this.y - this.height, 30, this.height);
        
        // Piston head
        ctx!.fillStyle = "rgba(225, 7, 23, 0.3)";
        ctx!.fillRect(this.x - 20, this.y - this.height - 10, 40, 10);
        
        // Connecting rod
        ctx!.strokeStyle = "rgba(255, 255, 255, 0.2)";
        ctx!.lineWidth = 3;
        ctx!.beginPath();
        ctx!.moveTo(this.x, this.y - this.height);
        ctx!.lineTo(this.x, this.y + 50);
        ctx!.stroke();
      }
    }

    // Gear animation
    class Gear {
      x: number;
      y: number;
      radius: number;
      teeth: number;
      rotation: number;
      rotationSpeed: number;

      constructor(x: number, y: number, radius: number, speed: number) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.teeth = 12;
        this.rotation = 0;
        this.rotationSpeed = speed;
      }

      update(canvasWidth: number, canvasHeight: number) {
        this.rotation += this.rotationSpeed;
      }

      draw() {
        ctx!.save();
        ctx!.translate(this.x, this.y);
        ctx!.rotate(this.rotation);

        // Gear body
        ctx!.fillStyle = "rgba(255, 255, 255, 0.05)";
        ctx!.beginPath();
        ctx!.arc(0, 0, this.radius, 0, Math.PI * 2);
        ctx!.fill();

        // Gear teeth
        ctx!.fillStyle = "rgba(255, 255, 255, 0.08)";
        for (let i = 0; i < this.teeth; i++) {
          const angle = (Math.PI * 2 / this.teeth) * i;
          ctx!.save();
          ctx!.rotate(angle);
          ctx!.fillRect(-5, this.radius - 5, 10, 10);
          ctx!.restore();
        }

        // Center circle
        ctx!.fillStyle = "rgba(0, 0, 0, 0.5)";
        ctx!.beginPath();
        ctx!.arc(0, 0, this.radius * 0.3, 0, Math.PI * 2);
        ctx!.fill();

        ctx!.restore();
      }
    }

    // Initialize elements
    let pistons: Piston[] = [];
    const initPistons = () => {
        pistons = [];
        // Reduce pistons on mobile
        const pistonCount = isMobile 
          ? Math.min(3, Math.floor(canvas.width / 150))
          : Math.floor(canvas.width / 150);
        const startX = (canvas.width - (pistonCount * 100)) / 2;
        
        for (let i = 0; i < pistonCount; i++) {
            pistons.push(new Piston(startX + i * 120, i * (Math.PI / 2)));
        }
    };
    initPistons();

    let gears: Gear[] = [];
    const initGears = () => {
        // Reduce gears significantly on mobile
        gears = isMobile 
          ? [new Gear(canvas.width * 0.5, canvas.height * 0.5, 150, 0.002)] // Just 1 central gear on mobile
          : [
              new Gear(canvas.width * 0.1, canvas.height * 0.2, 80, 0.01),
              new Gear(canvas.width * 0.9, canvas.height * 0.8, 120, -0.005),
              new Gear(canvas.width * 0.5, canvas.height * 0.5, 200, 0.002), // Big central gear
            ];
    };
    initGears();
    
    // Re-init on resize
    window.addEventListener("resize", () => {
        initPistons();
        initGears();
    });

    // Animation loop
    let frame = 0;
    let animationFrameId: number;

    const animate = () => {
      // Clear
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw Gears first (background layer)
      gears.forEach((gear) => {
        gear.update(canvas.width, canvas.height);
        gear.draw();
      });

      // Draw Pistons
      pistons.forEach((piston) => {
        piston.update(frame);
        piston.draw();
      });
      
      // Connecting line at bottom (crankshaft)
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, canvas.height * 0.6 + 50);
      ctx.lineTo(canvas.width, canvas.height * 0.6 + 50);
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
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
