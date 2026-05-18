"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Github, Linkedin, Twitter } from "@/components/ui/icons";
import Link from "next/link";

export function Outro() {
  return (
    <section className="relative w-full h-[60vh] flex flex-col items-center justify-center overflow-hidden border-t border-border/50">
      
      {/* Cinematic Ambient Background */}
      <div className="absolute inset-0 pointer-events-none -z-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="text-center z-10 px-4 flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-10"
        >
          Keep building. <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
            Keep shipping.
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center gap-6 mb-12"
        >
          <Link href={siteConfig.links.github} target="_blank" className="p-4 rounded-full glass hover:bg-foreground/10 hover:text-primary transition-all duration-300 hover:-translate-y-1 group">
            <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </Link>
          <Link href={siteConfig.links.linkedin} target="_blank" className="p-4 rounded-full glass hover:bg-foreground/10 hover:text-primary transition-all duration-300 hover:-translate-y-1 group">
            <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </Link>
          <Link href={siteConfig.links.twitter} target="_blank" className="p-4 rounded-full glass hover:bg-foreground/10 hover:text-primary transition-all duration-300 hover:-translate-y-1 group">
            <Twitter className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </Link>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-muted-foreground text-sm font-medium tracking-wider uppercase"
        >
          &copy; {new Date().getFullYear()} {siteConfig.name}. Handcrafted with precision.
        </motion.p>
      </div>
    </section>
  );
}
