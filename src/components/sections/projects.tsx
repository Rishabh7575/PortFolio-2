"use client";

import React from "react";
import { Section } from "@/components/layout/section";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Projects() {
  return (
    <Section id="projects" className="py-24 border-t border-border/50">
      <div className="flex flex-col gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Selected Works.
          </h2>
          <p className="text-muted-foreground">
            A showcase of impactful AI systems, applications, and tools I've built.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {/* Project Row Placeholder */}
          <div className="group relative glass p-6 md:p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden flex flex-col md:flex-row gap-8 items-center">
            
            {/* Image Placeholder */}
            <div className="w-full md:w-5/12 aspect-[4/3] rounded-2xl bg-muted/50 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-500/10 group-hover:scale-105 transition-transform duration-700" />
            </div>
            
            {/* Content */}
            <div className="w-full md:w-7/12 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">
                  AI / Full-Stack
                </span>
                <span className="text-sm text-muted-foreground">2026</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">Project Title</h3>
              <p className="text-muted-foreground leading-relaxed">
                A brief, impactful description of the project, highlighting the problem solved and the technologies used.
              </p>
              
              <Link href="#" className="inline-flex items-center gap-2 mt-4 text-sm font-semibold hover:text-primary transition-colors w-fit">
                View Project <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
