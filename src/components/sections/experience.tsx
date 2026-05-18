"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";

const experienceData = [
  {
    role: "AI & Data Systems Architect (Project Lead)",
    company: "University Software Lab",
    period: "2025 - Present",
    description: "Led the development of a production-ready SHL AI Recommendation Engine. Scaled the backend architecture using FastAPI and optimized memory footprint by integrating a hybrid FAISS and Keyword-retrieval pipeline. Cut response latency significantly for concurrent inference requests.",
    skills: ["FastAPI", "FAISS", "Python", "System Design"],
  },
  {
    role: "Full-Stack Software Engineer Intern",
    company: "Tech Innovations",
    period: "2024 - 2025",
    description: "Architected modern headless e-commerce solutions and data pipelines. Engineered complex React frontend state management with Zustand and Context API, while migrating legacy REST endpoints to highly structured Pydantic and Kafka-driven data streams.",
    skills: ["React", "Next.js", "Kafka", "PostgreSQL"],
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
