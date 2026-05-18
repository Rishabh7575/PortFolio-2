"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Briefcase } from "lucide-react";

const experienceData = [
  {
    role: "Software Developer Intern",
    company: "BlueStocks",
    period: "Jun 2025 — July 2025",
    description: "Collaborated on production web architecture. Re-engineered core component states to optimize render pacing and integrated secure REST APIs.",
    skills: ["React.js", "REST APIs", "State Management", "UI Optimization"],
    highlights: [
      "Optimized production UI rendering, raising perceived frontend responsiveness by 15-20%.",
      "Built robust client-side state handling and unified error-handling frameworks across 3+ core interfaces.",
      "Integrated React components with secure backend REST endpoints with zero regressions."
    ]
  }
];

export function Experience() {
  return (
    <Section id="experience" className="py-24 border-t border-border">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-1/3">
          <div className="sticky top-32">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-6">
              Experience
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed font-light">
              Professional software developer internships building responsive product components and APIs.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-2/3 flex flex-col gap-12 relative">
          {experienceData.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="glass p-8 rounded-3xl border border-white/20 dark:border-white/5 bg-background/30 backdrop-blur-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-xl border border-primary/20">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                      <span className="text-sm text-muted-foreground font-mono">{exp.company}</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 px-4 py-1.5 rounded-full whitespace-nowrap border border-cyan-500/20 max-w-fit">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-light">
                  {exp.description}
                </p>

                <div className="mb-6">
                  <span className="text-xs font-mono font-bold text-primary block mb-2 uppercase tracking-widest">// KEY_DELIVERABLES</span>
                  <ul className="list-disc list-inside text-xs text-muted-foreground/80 flex flex-col gap-2 pl-1 font-light leading-relaxed">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="px-2.5 py-1 bg-foreground/5 rounded-lg text-xs font-semibold text-foreground border border-border">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
