"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "next-themes";
import { Settings } from "lucide-react";

export function AICoreOrb() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const { theme } = useTheme();

  // Scroll tracking
  const { scrollY } = useScroll();

  useEffect(() => {
    setIsMounted(true);
    const checkScreen = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Single, unified transforms using functional callbacks to prevent reference-switching issues in Framer Motion
  const scale = useTransform(scrollY, (latest) => {
    const ratio = Math.min(Math.max(latest / 650, 0), 1);
    if (isLargeScreen) {
      return 1.0 - ratio * (1.0 - 0.58);
    } else {
      return 0.82 - ratio * (0.82 - 0.44);
    }
  });

  const opacity = useTransform(scrollY, (latest) => {
    const ratio = Math.min(Math.max(latest / 650, 0), 1);
    const currentTheme = theme || "dark";
    if (currentTheme === "light") {
      return 0.9 - ratio * (0.9 - 0.14); // Light mode range (softer)
    } else {
      return 1.0 - ratio * (1.0 - 0.22); // Dark mode range (glowing)
    }
  });

  const x = useTransform(scrollY, (latest) => {
    const ratio = Math.min(Math.max(latest / 650, 0), 1);
    if (isLargeScreen) {
      // Slides smoothly from 22vw (Hero right column alignment) to 0vw (Center watermark)
      return `${22 - ratio * 22}vw`;
    } else {
      return "0vw";
    }
  });

  // Moves down slightly while scrolling to stay vertically centered behind sections
  const y = useTransform(scrollY, (latest) => {
    const ratio = Math.min(Math.max(latest / 650, 0), 1);
    return `${ratio * 40}px`;
  });

  // Core energy arcs fade away as you scroll down
  const energyOpacity = useTransform(scrollY, [0, 600], [0.8, 0.15]);
  
  // Ambient pulse lighting gets softer
  const glowScale = useTransform(scrollY, [0, 600], [1.15, 0.95]);

  if (!isMounted) {
    return null; // Prevent hydration mismatches
  }

  return (
    <div 
      className="fixed inset-0 pointer-events-none flex items-center justify-center overflow-hidden"
      style={{ zIndex: 1 }} // Explicit z-index 1 to guarantee it sits in front of body background but behind main (z-10)
    >
      <motion.div
        style={{
          x,
          y,
          scale,
          opacity,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-[290px] h-[290px] sm:w-[430px] sm:h-[430px] flex items-center justify-center cursor-pointer select-none group pointer-events-auto transition-shadow"
      >
        {/* Shifting Aurora Background Glow Orb */}
        <motion.div
          style={{
            scale: glowScale,
          }}
          animate={{
            opacity: isHovered ? 0.75 : 0.4,
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[80%] h-[80%] bg-gradient-to-tr from-primary/30 via-indigo-500/20 to-cyan-500/30 rounded-full blur-[80px] sm:blur-[120px] mix-blend-screen pointer-events-none dark:opacity-100 opacity-60"
        />

        {/* Outer Telemetry Ring 2 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
          className="absolute w-full h-full rounded-full border border-primary/10 dark:border-white/5 border-dashed pointer-events-none flex items-center justify-center"
        >
          <div className="absolute top-1/4 left-0 w-2 h-2 rounded-full bg-cyan-400/80 shadow-[0_0_10px_#22d3ee] animate-pulse" />
          <div className="absolute bottom-1/4 right-0 w-1.5 h-1.5 rounded-full bg-primary/80 shadow-[0_0_8px_#a855f7]" />
        </motion.div>

        {/* Mid Telemetry Ring 1 */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute w-[86%] h-[86%] rounded-full border border-primary/20 dark:border-white/10 pointer-events-none flex items-center justify-center"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary/70" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400/70" />
        </motion.div>

        {/* Intelligent Shape-Morphing AI Core */}
        <motion.div
          animate={{
            borderRadius: isHovered
              ? ["50% 50% 50% 50%", "38% 62% 45% 55%", "55% 45% 60% 40%", "45% 55% 38% 62%", "50% 50% 50% 50%"]
              : ["50% 50% 50% 50%", "43% 57% 48% 52%", "55% 45% 53% 47%", "47% 53% 42% 58%", "50% 50% 50% 50%"],
            rotate: [0, 90, 180, 270, 360],
            scale: isHovered ? 1.08 : 1.0,
          }}
          transition={{
            borderRadius: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 28, repeat: Infinity, ease: "linear" },
            scale: { type: "spring", stiffness: 200, damping: 18 }
          }}
          className="relative w-[65%] h-[65%] bg-gradient-to-tr from-primary/70 via-indigo-600/50 to-cyan-400/70 shadow-[0_0_80px_rgba(139,92,246,0.18)] dark:shadow-[0_0_80px_rgba(139,92,246,0.3)] backdrop-blur-md border border-white/20 dark:border-white/10 flex items-center justify-center overflow-hidden"
        >
          {/* Glassmorphic Core Mask Overlay */}
          <div className="absolute inset-1.5 bg-white/20 dark:bg-black/25 rounded-[inherit] backdrop-blur-[6px] border border-white/30 dark:border-white/5 flex items-center justify-center select-none pointer-events-none">
            
            {/* Elegant SVG Energy Arcs & Neural Lightning */}
            <motion.svg
              style={{
                opacity: energyOpacity,
              }}
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full p-6 select-none pointer-events-none"
            >
              <defs>
                <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              {/* Plasma Path 1 */}
              <motion.path
                d="M 50 15 Q 32 45 68 50 T 50 85"
                fill="none"
                stroke="url(#cyanGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                animate={{
                  strokeDashoffset: [160, 0],
                  opacity: [0.4, 0.85, 0.4]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  strokeDasharray: "25 15"
                }}
              />

              {/* Neural Path 2 */}
              <motion.path
                d="M 25 35 Q 65 20 40 75 T 80 65"
                fill="none"
                stroke="url(#purpleGrad)"
                strokeWidth="2.0"
                strokeLinecap="round"
                animate={{
                  strokeDashoffset: [-160, 0],
                  opacity: [0.3, 0.75, 0.3]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 1.5
                }}
                style={{
                  strokeDasharray: "30 20"
                }}
              />

              {/* Micro Sparks Loop */}
              <motion.circle
                cx="50"
                cy="50"
                r="30"
                fill="none"
                stroke="#22d3ee"
                strokeWidth="1"
                strokeDasharray="4 20"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
            </motion.svg>

            {/* Internal Telemetry Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center font-mono text-[9px] dark:text-cyan-200/90 text-indigo-950/80 gap-0.5 tracking-wider scale-[0.8] sm:scale-100 z-10">
              <span className="text-[10px] font-bold dark:text-white text-indigo-950 tracking-widest flex items-center gap-1">
                <Settings className="w-2.5 h-2.5 animate-spin" style={{ animationDuration: "8s" }} /> AI_CORE
              </span>
              <span className="opacity-70 animate-pulse">// STREAMING</span>
              <span className="opacity-50">NODE: NITP_DOSS</span>
            </div>

          </div>
        </motion.div>

        {/* Floating Telemetry Stats Boxes */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-4 right-0 glass border-white/20 p-2.5 rounded-xl font-mono text-[8px] sm:text-[9px] text-muted-foreground flex flex-col gap-1 backdrop-blur-md max-w-[110px] sm:max-w-none shadow-2xl"
        >
          <span className="text-cyan-600 dark:text-cyan-400 font-bold tracking-widest uppercase">// SYS_STAT</span>
          <span>STABLE: 99%</span>
          <span>VOLTS: 1.22</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-4 left-0 glass border-white/20 p-2.5 rounded-xl font-mono text-[8px] sm:text-[9px] text-muted-foreground flex flex-col gap-1 backdrop-blur-md max-w-[110px] sm:max-w-none shadow-2xl"
        >
          <span className="text-indigo-600 dark:text-primary font-bold tracking-widest uppercase">// NEURAL</span>
          <span>LAT: {(theme === "light" ? 12 : 8)}ms</span>
          <span>SYNC: ACTIVE</span>
        </motion.div>

      </motion.div>
    </div>
  );
}
