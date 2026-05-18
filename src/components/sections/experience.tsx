"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";

const experienceData = [
  {
    role: "Full-Stack Engineer Intern",
    company: "Tech Innovations Inc.",
    period: "June 2025 - Present",
    description: "Architected and deployed a highly scalable microservices backend using FastAPI and Docker. Improved search retrieval latency by 40% via optimized FAISS index integration. Built the modern React frontend.",
    skills: ["React", "FastAPI", "Docker", "Python"],
  },
  {
    role: "AI Systems Developer",
    company: "University Research Lab",
    period: "Jan 2025 - May 2025",
    description: "Developed an AI-powered data engine that processes and cleans large datasets automatically. Implemented RAG (Retrieval-Augmented Generation) pipelines for internal tooling.",
    skills: ["Python", "LangChain", "OpenAI", "PostgreSQL"],
  },
];

export function Experience() {
  return (
    <Section id="experience" className="py-32">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-1/3">
          <div className="sticky top-32">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Experience
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My professional journey building software at scale and researching AI technologies.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-2/3 flex flex-col gap-12 relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[15px] top-4 bottom-4 w-px bg-gradient-to-b from-primary/50 via-border to-transparent hidden md:block" />

          {experienceData.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative pl-0 md:pl-12 group"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[11px] top-1.5 w-2 h-2 rounded-full bg-primary hidden md:block group-hover:scale-150 transition-transform duration-300 ring-4 ring-background" />

              <div className="glass p-8 rounded-3xl border border-white/5 hover:border-primary/20 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                    <span className="text-lg text-muted-foreground font-medium">{exp.company}</span>
                  </div>
                  <span className="text-sm font-bold text-primary bg-primary/10 px-4 py-1.5 rounded-full whitespace-nowrap border border-primary/20">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-foreground/5 rounded-md text-sm font-medium">
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
