"use client";

import React from "react";
import { Section } from "@/components/layout/section";
import { motion } from "framer-motion";

export function About() {
  return (
    <Section id="about" className="py-32">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="w-full lg:w-1/3">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="sticky top-32"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Who I Am
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full mb-8" />
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-2/3 glass p-8 md:p-12 rounded-[2rem] border border-white/10 flex flex-col gap-6 text-lg text-muted-foreground leading-relaxed shadow-[0_8px_32px_rgba(0,0,0,0.12)] bg-background/40 backdrop-blur-xl"
        >
          <p>
            I am a software engineer focused on the intersection of modern web architecture and artificial intelligence. Currently pursuing my degree in Mechanical Engineering at <strong className="text-foreground">NIT Patna</strong>, I have spent the last few years transitioning into a deeply passionate system builder.
          </p>
          <p>
            My journey into software wasn't standard. It began with an obsession for efficiency—how to make systems run faster, scale better, and look incredible. I specialize in building <strong className="text-foreground">highly optimized AI retrieval pipelines</strong> (using FastAPI, FAISS, and LangChain) and <strong className="text-foreground">premium frontend products</strong> (using Next.js, React, and Framer Motion).
          </p>
          <p>
            When I'm not writing code, I'm organizing national-level hackathons, researching new LLM architectures, or refining the absolute smallest details of a user interface. I believe that world-class software requires both ruthless technical precision and extreme empathy for the end-user.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6 pt-6 border-t border-white/5">
             <div className="flex flex-col gap-1">
               <span className="text-4xl font-bold text-foreground">3+</span>
               <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Years Coding</span>
             </div>
             <div className="flex flex-col gap-1">
               <span className="text-4xl font-bold text-foreground">15+</span>
               <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Projects Built</span>
             </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
