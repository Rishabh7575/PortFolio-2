"use client";

import React from "react";
import { motion, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Section } from "@/components/layout/section";
import { AnimatedText } from "@/components/ui/animated-text";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ArrowRight, Download } from "lucide-react";
import { useMousePosition } from "@/hooks/use-mouse-position";

export function Hero() {
  const mousePosition = useMousePosition();
  
  // Create motion values based on mouse position for parallax effect
  // Calculate relative position based on center of screen
  const x = typeof window !== "undefined" ? mousePosition.x - window.innerWidth / 2 : 0;
  const y = typeof window !== "undefined" ? mousePosition.y - window.innerHeight / 2 : 0;

  // Spring animation for smooth catching up
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(useMotionValue(x), springConfig);
  const smoothY = useSpring(useMotionValue(y), springConfig);

  // Update motion values when mouse moves
  React.useEffect(() => {
    smoothX.set(x);
    smoothY.set(y);
  }, [x, y, smoothX, smoothY]);

  // Transform mouse values into subtle rotation values
  const rotateX = useTransform(smoothY, [-500, 500], [10, -10]);
  const rotateY = useTransform(smoothX, [-500, 500], [-10, 10]);
  const floatY = useTransform(smoothY, [-500, 500], [-20, 20]);

  return (
    <Section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-between pt-32 pb-20 relative overflow-hidden">
      
      {/* Cinematic Ambient Background */}
      <div className="absolute inset-0 pointer-events-none -z-20 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-50" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[120px] mix-blend-screen opacity-50" />
        {/* Subtle noise overlay could go here */}
      </div>

      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col z-10 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/50 backdrop-blur-sm w-fit mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-sm font-medium text-muted-foreground tracking-wide">
            Available for new opportunities
          </span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
          <AnimatedText text="Building AI-powered" delay={0.1} />
          <AnimatedText text="systems & modern" delay={0.2} />
          <AnimatedText text="experiences." className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500" delay={0.3} />
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed"
        >
          Mechanical Engineering student at NIT Patna building scalable full-stack applications, 
          intelligent AI tools, and premium frontend architectures.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <MagneticButton className="group bg-foreground text-background px-8 py-4 font-semibold flex items-center justify-center gap-2 hover:bg-foreground/90">
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </MagneticButton>
          <MagneticButton className="group glass border-border px-8 py-4 font-semibold flex items-center justify-center gap-2 hover:bg-accent/50">
            Resume
            <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </MagneticButton>
        </motion.div>
      </div>

      {/* Right Content - Astronaut / Visual */}
      <div className="w-full md:w-1/2 mt-16 md:mt-0 flex justify-center md:justify-end relative z-10 perspective-[1000px]">
        <motion.div
          style={{
            rotateX,
            rotateY,
            y: floatY,
            transformStyle: "preserve-3d"
          }}
          className="relative w-72 h-72 md:w-96 md:h-96"
        >
          {/* 
            Placeholder for Astronaut. 
            Replace with actual 3D model, Spline viewer, or transparent PNG.
          */}
          <div className="absolute inset-0 glass rounded-3xl flex flex-col items-center justify-center border-primary/20 shadow-[0_0_60px_rgba(var(--primary),0.2)]">
             <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-blue-500 animate-pulse mix-blend-screen blur-xl absolute" />
             <span className="text-muted-foreground font-mono text-sm relative z-10 p-4 text-center">
               [ Astronaut Asset Here ]<br />
               (Moves with cursor)
             </span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
