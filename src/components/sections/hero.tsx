"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/layout/section";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ArrowRight, Download } from "lucide-react";
import { siteConfig } from "@/config/site";

const roles = [
  "AI Systems Builder",
  "Full-Stack Engineer",
  "Frontend Specialist",
  "UI/UX Enthusiast",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20">
      
      {/* Cinematic Ambient Background */}
      <div className="absolute inset-0 pointer-events-none -z-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] mix-blend-screen opacity-70" />
      </div>

      {/* Central Identity Card */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", bounce: 0.3 }}
        className="relative z-10 glass px-8 py-16 md:px-16 md:py-20 rounded-3xl border border-white/5 shadow-2xl flex flex-col items-center text-center max-w-4xl w-full hover:border-primary/20 transition-colors duration-700"
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-muted-foreground tracking-wide">
            Available for new opportunities
          </span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">{siteConfig.name}</span>
        </h1>
        
        <div className="h-12 md:h-16 overflow-hidden mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={roleIndex}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.5, ease: "anticipate" }}
              className="text-3xl md:text-5xl font-bold text-muted-foreground"
            >
              {roles[roleIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          Mechanical Engineering student at NIT Patna building scalable full-stack applications, 
          intelligent AI tools, and premium frontend architectures.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
          <MagneticButton className="group bg-foreground text-background px-10 py-5 font-bold text-lg flex items-center justify-center gap-2 hover:bg-foreground/90 shadow-xl">
            View Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </MagneticButton>
          <MagneticButton className="group glass border-border px-10 py-5 font-bold text-lg flex items-center justify-center gap-2 hover:bg-accent/50 shadow-xl">
            Resume
            <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </MagneticButton>
        </div>
      </motion.div>
    </Section>
  );
}
