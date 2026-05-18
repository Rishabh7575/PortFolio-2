"use client";

import React from "react";
import { motion, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useMousePosition } from "@/hooks/use-mouse-position";

export function AstronautSystem() {
  const mousePosition = useMousePosition();
  
  // Center is approx middle of screen for calculation
  const x = typeof window !== "undefined" ? mousePosition.x - window.innerWidth / 2 : 0;
  const y = typeof window !== "undefined" ? mousePosition.y - window.innerHeight / 2 : 0;

  const springConfig = { damping: 30, stiffness: 100 };
  const smoothX = useSpring(useMotionValue(x), springConfig);
  const smoothY = useSpring(useMotionValue(y), springConfig);

  React.useEffect(() => {
    smoothX.set(x);
    smoothY.set(y);
  }, [x, y, smoothX, smoothY]);

  // Subtle physics
  const rotateX = useTransform(smoothY, [-500, 500], [15, -15]);
  const rotateY = useTransform(smoothX, [-500, 500], [-15, 15]);
  const floatY = useTransform(smoothY, [-500, 500], [-10, 10]);

  return (
    <div className="fixed bottom-10 left-10 z-0 hidden lg:block pointer-events-none perspective-[1200px]">
      <motion.div
        style={{
          rotateX,
          rotateY,
          y: floatY,
          transformStyle: "preserve-3d"
        }}
        className="relative w-64 h-64"
      >
        {/* Placeholder for the Astronaut Asset */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Base ambient glow */}
          <div className="absolute w-40 h-40 bg-primary/20 blur-[60px] rounded-full animate-pulse" />
          
          <div className="glass w-48 h-48 rounded-full border-primary/20 shadow-[0_0_40px_rgba(var(--primary),0.15)] flex items-center justify-center relative overflow-hidden backdrop-blur-xl">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
             <span className="text-primary font-mono text-xs opacity-70">
                [ HUD Astronaut ]
             </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
