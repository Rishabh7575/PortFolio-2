"use client";

import React from "react";
import { Section } from "@/components/layout/section";

export function Skills() {
  return (
    <Section id="skills" className="py-24 border-t border-border/50">
      <div className="flex flex-col gap-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Technical Arsenal.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of the technologies, languages, and tools I use to build scalable modern applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Skill Category Placeholder */}
          <div className="glass p-8 rounded-3xl border border-white/5 hover:border-primary/20 transition-colors">
            <h3 className="text-xl font-semibold mb-6">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-foreground/5 rounded-full text-sm font-medium">React</span>
              <span className="px-4 py-2 bg-foreground/5 rounded-full text-sm font-medium">Next.js</span>
              <span className="px-4 py-2 bg-foreground/5 rounded-full text-sm font-medium">Tailwind CSS</span>
            </div>
          </div>
          {/* More categories can be added here */}
        </div>
      </div>
    </Section>
  );
}
