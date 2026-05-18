"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export function Outro() {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden border-t border-border/50">
      
      {/* Cinematic Ambient Background */}
      <div className="absolute inset-0 pointer-events-none -z-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="text-center z-10 px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
        >
          Keep building. <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
            Keep shipping.
          </span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-muted-foreground text-lg"
        >
          &copy; {new Date().getFullYear()} {siteConfig.name}. Handcrafted with precision.
        </motion.p>
      </div>
    </section>
  );
}
