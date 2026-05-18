"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/layout/section";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Download } from "lucide-react";
import { Github } from "@/components/ui/icons";
import { siteConfig } from "@/config/site";
import { staggerContainer, fadeUp } from "@/animations/variants";
import Link from "next/link";

const roles = [
  "AI Systems Architect",
  "Full-Stack Engineer",
  "Systems Pipeline Engineer",
];

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
      
      {/* Immersive Theme-Adaptive Ambient Orbs */}
      <div className="absolute inset-0 pointer-events-none -z-20 overflow-hidden bg-background">
        
        {/* Soft Purple Glow Orb */}
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1], 
            opacity: [0.25, 0.45, 0.25],
            x: [0, 40, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] mix-blend-screen dark:opacity-100 opacity-60" 
        />

        {/* Soft Electric Blue Glow Orb */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.18, 0.38, 0.18],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[550px] h-[550px] bg-blue-500/10 rounded-full blur-[140px] mix-blend-screen dark:opacity-100 opacity-65" 
        />

        {/* Soft Cyan Highlight Orb */}
        <motion.div 
          animate={{ 
            scale: [0.9, 1.1, 0.9], 
            opacity: [0.12, 0.28, 0.12],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-cyan-400/5 rounded-full blur-[100px] mix-blend-screen dark:opacity-100 opacity-55" 
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
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-foreground/5 border border-border shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
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
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-500 to-cyan-500 drop-shadow-sm dark:from-primary dark:via-indigo-400 dark:to-cyan-400">{siteConfig.name}</span>
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
                  className="text-2xl sm:text-3xl font-mono text-cyan-600 dark:text-cyan-400 font-semibold tracking-wide"
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
                <MagneticButton className="group glass border-border hover:border-primary/30 px-8 py-4.5 font-bold text-base flex items-center justify-center gap-2 shadow-2xl w-full sm:w-auto transition-premium hover:bg-white/5">
                  Dossier PDF
                  <Download className="w-4.5 h-4.5 group-hover:scale-110 transition-transform text-cyan-600 dark:text-cyan-400" />
                </MagneticButton>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Placeholder to anchor the fixed scrolling Orb element */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2"
          >
            <div className="w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </Section>
  );
}
