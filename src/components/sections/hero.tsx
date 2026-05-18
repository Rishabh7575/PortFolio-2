"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Section } from "@/components/layout/section";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ArrowRight, Download, Terminal, Settings } from "lucide-react";
import { Github } from "@/components/ui/icons";
import { siteConfig } from "@/config/site";
import { staggerContainer, fadeUp } from "@/animations/variants";
import Link from "next/link";

const roles = [
  "AI Systems Architect",
  "Full-Stack Engineer",
  "Systems Pipeline Engineer",
];

function AICoreOrb() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax spring mouse values
  const mX = useMotionValue(0);
  const mY = useMotionValue(0);

  const springConfig = { stiffness: 60, damping: 25, mass: 0.8 };
  const smoothX = useSpring(mX, springConfig);
  const smoothY = useSpring(mY, springConfig);

  // Exaggerated depth translations for parallax
  const orbX = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const orbY = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);
  const ring1X = useTransform(smoothX, [-0.5, 0.5], [-35, 35]);
  const ring1Y = useTransform(smoothY, [-0.5, 0.5], [-35, 35]);
  const ring2X = useTransform(smoothX, [-0.5, 0.5], [-50, 50]);
  const ring2Y = useTransform(smoothY, [-0.5, 0.5], [-50, 50]);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      const xNorm = (e.clientX / window.innerWidth) - 0.5;
      const yNorm = (e.clientY / window.innerHeight) - 0.5;
      mX.set(xNorm);
      mY.set(yNorm);
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, [mX, mY]);

  return (
    <div 
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] flex items-center justify-center cursor-pointer select-none group"
    >
      {/* Immersive Background Ambient glow */}
      <motion.div
        animate={{
          scale: isHovered ? [1.1, 1.25, 1.1] : [1, 1.1, 1],
          opacity: isHovered ? 0.75 : 0.4,
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[80%] h-[80%] bg-gradient-to-tr from-primary/30 via-indigo-500/20 to-cyan-500/30 rounded-full blur-[80px] sm:blur-[120px] mix-blend-screen pointer-events-none"
      />

      {/* Outer Telemetry Ring 2 (Exaggerated Parallax) */}
      <motion.div
        style={{
          x: ring2X,
          y: ring2Y,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute w-full h-full rounded-full border border-white/5 border-dashed pointer-events-none flex items-center justify-center"
      >
        <div className="absolute top-1/4 left-0 w-2 h-2 rounded-full bg-cyan-400/80 shadow-[0_0_10px_#22d3ee] animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-1.5 h-1.5 rounded-full bg-primary/80 shadow-[0_0_8px_#a855f7]" />
      </motion.div>

      {/* Mid Telemetry Ring 1 (Mid Parallax) */}
      <motion.div
        style={{
          x: ring1X,
          y: ring1Y,
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute w-[85%] h-[85%] rounded-full border border-white/10 pointer-events-none flex items-center justify-center"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary/70" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400/70" />
      </motion.div>

      {/* Intelligent Shape-Morphing AI Core (Reactive Parallax) */}
      <motion.div
        style={{
          x: orbX,
          y: orbY,
        }}
        animate={{
          borderRadius: isHovered
            ? ["50% 50% 50% 50%", "38% 62% 45% 55%", "55% 45% 60% 40%", "45% 55% 38% 62%", "50% 50% 50% 50%"]
            : ["50% 50% 50% 50%", "43% 57% 48% 52%", "55% 45% 53% 47%", "47% 53% 42% 58%", "50% 50% 50% 50%"],
          rotate: [0, 90, 180, 270, 360],
          scale: isHovered ? 1.08 : 1.0,
        }}
        transition={{
          borderRadius: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { type: "spring", stiffness: 200, damping: 18 }
        }}
        className="relative w-[65%] h-[65%] rounded-3xl bg-gradient-to-tr from-primary/80 via-indigo-600/70 to-cyan-400/80 shadow-[0_0_80px_rgba(139,92,246,0.3)] backdrop-blur-md border border-white/10 flex items-center justify-center overflow-hidden"
      >
        {/* Dynamic Glassmorphic Core Overlay */}
        <div className="absolute inset-2 bg-black/10 rounded-[inherit] backdrop-blur-[4px] border border-white/5 flex items-center justify-center select-none pointer-events-none">
          {/* Internal Telemetry Matrix */}
          <div className="flex flex-col items-center justify-center font-mono text-[9px] text-cyan-200/90 gap-0.5 tracking-wider scale-[0.8] sm:scale-100">
            <span className="text-[10px] font-bold text-white tracking-widest flex items-center gap-1">
              <Settings className="w-2.5 h-2.5 animate-spin" style={{ animationDuration: "8s" }} /> CORE_V2
            </span>
            <span className="opacity-70 animate-pulse">// ACTIVE</span>
            <span className="opacity-50">SYNC: 100%</span>
          </div>
        </div>
      </motion.div>

      {/* Floating HUD telemetry data boxes */}
      <motion.div 
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-4 right-0 glass border-white/5 p-3 rounded-xl font-mono text-[8px] sm:text-[9px] text-muted-foreground flex flex-col gap-1 backdrop-blur-md max-w-[110px] sm:max-w-none shadow-2xl"
      >
        <span className="text-cyan-400 font-bold tracking-widest uppercase">// STABILITY</span>
        <span>INDEX: 99.82%</span>
        <span>NODE: NITP_MAIN</span>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-4 left-0 glass border-white/5 p-3 rounded-xl font-mono text-[8px] sm:text-[9px] text-muted-foreground flex flex-col gap-1 backdrop-blur-md max-w-[110px] sm:max-w-none shadow-2xl"
      >
        <span className="text-primary font-bold tracking-widest uppercase">// NEURAL_NET</span>
        <span>RAG_LATENCY: 8ms</span>
        <span>STATUS: STEADY</span>
      </motion.div>
    </div>
  );
}

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 lg:pt-0">
      
      {/* Immersive Deep Aurora Dark Environment */}
      <div className="absolute inset-0 pointer-events-none -z-20 overflow-hidden bg-[#030304]">
        
        {/* Soft Purple Glow Orb */}
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1], 
            opacity: [0.35, 0.5, 0.35],
            x: [0, 40, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] mix-blend-screen" 
        />

        {/* Soft Electric Blue Glow Orb */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.25, 0.45, 0.25],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[550px] h-[550px] bg-blue-500/10 rounded-full blur-[140px] mix-blend-screen" 
        />

        {/* Soft Cyan Highlight Orb */}
        <motion.div 
          animate={{ 
            scale: [0.9, 1.1, 0.9], 
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-cyan-400/5 rounded-full blur-[100px] mix-blend-screen" 
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[85vh]">
          
          {/* Left Column: Spacious Cinematic Copy */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left gap-6 order-2 lg:order-1"
          >
            {/* Availability Indicator */}
            <motion.div 
              variants={fadeUp}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-foreground/5 border border-white/5 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
                // SYSTEM_ONLINE: NIT Patna
              </span>
            </motion.div>

            {/* Premium Futuristic Sans-Serif Header */}
            <div className="flex flex-col gap-3">
              <motion.span variants={fadeUp} className="text-sm font-mono text-primary font-bold uppercase tracking-widest">// INITIALIZING IDENTITY</motion.span>
              <motion.h1 
                variants={fadeUp} 
                className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-foreground leading-[1.05]"
              >
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-400 to-cyan-400 drop-shadow-sm">{siteConfig.name}</span>
              </motion.h1>
            </div>
            
            {/* Dynamic Role Switcher */}
            <motion.div variants={fadeUp} className="h-10 sm:h-12 overflow-hidden flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }} // Custom spring bezier
                  className="text-2xl sm:text-3xl font-mono text-cyan-400 font-semibold tracking-wide"
                >
                  &gt; {roles[roleIndex]}
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Thin clean body text */}
            <motion.p 
              variants={fadeUp} 
              className="text-base sm:text-lg text-muted-foreground/80 font-light max-w-xl leading-relaxed mt-2"
            >
              Mechanical Engineering scholar at the <span className="font-semibold text-foreground">National Institute of Technology, Patna</span>. 
              Engineering intelligent retrieval engines, highly-responsive headless architectures, and scalable data pipeline brokers.
            </motion.p>

            {/* Premium CTA Buttons with spring transitions */}
            <motion.div 
              variants={fadeUp} 
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4"
            >
              <Link href={siteConfig.links.github} target="_blank">
                <MagneticButton className="group bg-foreground text-background px-8 py-4.5 font-bold text-base flex items-center justify-center gap-2 shadow-2xl w-full sm:w-auto transition-premium">
                  <Github className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                  Source Code
                </MagneticButton>
              </Link>
              
              <Link href="/resume.pdf" target="_blank">
                <MagneticButton className="group glass border-white/5 hover:border-primary/30 px-8 py-4.5 font-bold text-base flex items-center justify-center gap-2 shadow-2xl w-full sm:w-auto transition-premium hover:bg-white/5">
                  Dossier PDF
                  <Download className="w-4.5 h-4.5 group-hover:scale-110 transition-transform text-cyan-400" />
                </MagneticButton>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: AI Core Orb Element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1], delay: 0.2 }}
            className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2"
          >
            <AICoreOrb />
          </motion.div>

        </div>
      </div>
    </Section>
  );
}
