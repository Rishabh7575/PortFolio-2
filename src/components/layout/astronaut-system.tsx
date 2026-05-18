"use client";

import React from "react";
import { motion, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useMousePosition } from "@/hooks/use-mouse-position";

export function AstronautSystem() {
  const mousePosition = useMousePosition();
  
  // Center is approx middle of screen for calculation
  const x = typeof window !== "undefined" ? mousePosition.x - window.innerWidth / 2 : 0;
  const y = typeof window !== "undefined" ? mousePosition.y - window.innerHeight / 2 : 0;

  const springConfig = { damping: 40, stiffness: 80 };
  const smoothX = useSpring(useMotionValue(x), springConfig);
  const smoothY = useSpring(useMotionValue(y), springConfig);

  React.useEffect(() => {
    smoothX.set(x);
    smoothY.set(y);
  }, [x, y, smoothX, smoothY]);

  // Subtle physics
  const rotateX = useTransform(smoothY, [-500, 500], [10, -10]);
  const rotateY = useTransform(smoothX, [-500, 500], [-10, 10]);

  return (
    <div className="fixed bottom-10 left-10 z-0 hidden lg:block pointer-events-none perspective-[1200px]">
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d"
          }}
          className="relative w-64 h-64"
        >
          {/* Placeholder for the Astronaut Asset */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Base ambient glow with subtle breathing */}
            <motion.div 
              animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-40 h-40 bg-primary/20 blur-[60px] rounded-full" 
            />
            
            <div className="glass w-48 h-48 rounded-full border-primary/20 shadow-[0_0_40px_rgba(var(--primary),0.15)] flex items-center justify-center relative overflow-hidden backdrop-blur-xl">
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
               <span className="text-primary font-mono text-xs opacity-70">
                  [ HUD Astronaut ]
               </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
