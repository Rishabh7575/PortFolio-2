"use client";

import React from "react";
import { Section } from "@/components/layout/section";
import { motion } from "framer-motion";

export function About() {
  return (
    <Section id="about" className="py-24 border-t border-border/50">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="w-full md:w-1/3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            About Me.
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
        </div>
        <div className="w-full md:w-2/3">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Placeholder for about content. This section will contain the narrative
            of your journey as a Mechanical Engineering student at NIT Patna
            transitioning into AI and modern software engineering.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
             {/* Stats placeholder */}
             <div className="flex flex-col gap-1">
               <span className="text-4xl font-bold text-foreground">3+</span>
               <span className="text-sm text-muted-foreground font-medium">Years Coding</span>
             </div>
             <div className="flex flex-col gap-1">
               <span className="text-4xl font-bold text-foreground">15+</span>
               <span className="text-sm text-muted-foreground font-medium">Projects Built</span>
             </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
