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

  const [isHovered, setIsHovered] = React.useState(false);

  // Subtle physics
  const rotateX = useTransform(smoothY, [-500, 500], [12, -12]);
  const rotateY = useTransform(smoothX, [-500, 500], [-12, 12]);

  return (
    <div className="fixed bottom-10 left-10 z-30 hidden lg:block perspective-[1200px]">
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d"
          }}
          className="relative w-64 h-64 flex items-center justify-center pointer-events-none"
        >
          {/* Base ambient glow with dynamic hover response */}
          <motion.div 
            animate={{ 
              opacity: isHovered ? [0.8, 1, 0.8] : [0.4, 0.6, 0.4], 
              scale: isHovered ? 1.3 : 1 
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-48 h-48 bg-primary/20 blur-[60px] rounded-full pointer-events-none transition-all duration-500" 
          />
          
          <motion.div 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="pointer-events-auto glass w-48 h-48 rounded-full border-primary/20 shadow-[0_0_45px_rgba(var(--primary),0.15)] flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-xl cursor-crosshair group"
          >
             {/* Radial scanning sweep animation */}
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             
             {/* Dynamic radar ring */}
             <motion.div
               animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
               className="absolute inset-2 border border-primary/10 rounded-full pointer-events-none"
             />

             <AnimatePresence mode="wait">
               {isHovered ? (
                 <motion.div
                   key="telemetry"
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.95 }}
                   transition={{ duration: 0.2 }}
                   className="flex flex-col items-center justify-center font-mono text-[9px] text-primary/80 gap-1 tracking-wider"
                 >
                   <span className="text-[10px] font-bold text-primary animate-pulse">[ SIGNAL ACTIVE ]</span>
                   <span className="opacity-70">LATENCY: {(Math.random() * 20 + 5).toFixed(1)}ms</span>
                   <span className="opacity-70">SYS: OPERATIONAL</span>
                   <span className="opacity-70 text-[8px] mt-1 text-muted-foreground">LOC: NIT PATNA</span>
                 </motion.div>
               ) : (
                 <motion.div
                   key="default"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   transition={{ duration: 0.2 }}
                   className="flex flex-col items-center justify-center gap-2"
                 >
                   <span className="text-primary font-mono text-xs opacity-75 tracking-widest font-semibold uppercase animate-pulse">
                      [ HUD NODE ]
                   </span>
                   <span className="text-[9px] text-muted-foreground font-mono opacity-50 tracking-wider">
                      HOVER TO SYNC
                   </span>
                 </motion.div>
               )}
             </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
