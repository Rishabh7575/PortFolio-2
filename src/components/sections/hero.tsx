"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from "framer-motion";
import { Section } from "@/components/layout/section";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ArrowRight, Download, Github } from "lucide-react";
import { siteConfig } from "@/config/site";
import { staggerContainer, fadeUp } from "@/animations/variants";
import Link from "next/link";

const roles = [
  "AI Systems Architect",
  "Full-Stack Engineer",
  "Data Pipeline Builder",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section id="home" className="min-h-[90vh] flex flex-col items-center justify-center relative overflow-hidden pt-20">
      
      {/* Cinematic Ambient Background */}
      <div className="absolute inset-0 pointer-events-none -z-20 overflow-hidden">
        {/* Primary Glow */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1], 
            opacity: [0.4, 0.6, 0.4],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] mix-blend-screen" 
        />
        {/* Secondary Shifting Blue/Cyan Glow */}
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1], 
            opacity: [0.3, 0.5, 0.3],
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-[140px] mix-blend-screen" 
        />
      </div>

      {/* Central Identity Card with Spotlight */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        onMouseMove={handleMouseMove}
        className="group relative z-10 px-8 py-16 md:px-16 md:py-20 rounded-[2.5rem] border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] flex flex-col items-center text-center max-w-4xl w-full hover:border-primary/20 transition-colors duration-700 bg-background/40 backdrop-blur-xl overflow-hidden"
      >
        {/* Hover Spotlight Dynamic Dual-Glow */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(var(--primary), 0.12),
                rgba(59, 130, 246, 0.06) 40%,
                transparent 80%
              )
            `,
          }}
        />

        <motion.div 
          variants={fadeUp}
          className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 mb-8 border border-white/5 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-muted-foreground tracking-wide">
            Available for new opportunities
          </span>
        </motion.div>

        <motion.h1 variants={fadeUp} className="relative text-5xl md:text-7xl font-extrabold tracking-tighter text-foreground leading-[1.1] mb-6">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 drop-shadow-sm">{siteConfig.name}</span>
        </motion.h1>
        
        <motion.div variants={fadeUp} className="relative h-12 md:h-16 overflow-hidden mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={roleIndex}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.5, ease: "anticipate" }}
              className="text-3xl md:text-5xl font-bold text-muted-foreground tracking-tight"
            >
              {roles[roleIndex]}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.p variants={fadeUp} className="relative text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          Mechanical Engineering student at NIT Patna building scalable full-stack applications, 
          intelligent AI tools, and premium frontend architectures.
        </motion.p>

        <motion.div variants={fadeUp} className="relative flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
          <Link href={siteConfig.links.github} target="_blank">
            <MagneticButton className="group bg-foreground text-background px-10 py-5 font-bold text-lg flex items-center justify-center gap-2 hover:bg-foreground/90 shadow-xl w-full sm:w-auto">
              <Github className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              GitHub
            </MagneticButton>
          </Link>
          <Link href="/resume.pdf" target="_blank">
            <MagneticButton className="group glass border-white/10 px-10 py-5 font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/5 hover:border-primary/30 transition-all duration-300 shadow-xl w-full sm:w-auto">
              Resume
              <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </MagneticButton>
          </Link>
        </motion.div>
      </motion.div>
    </Section>
  );
}

