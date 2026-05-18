"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const projectsData = [
  {
    title: "AI Recommendation Engine",
    description: "A highly optimized semantic retrieval engine built for scale. Reduces latency by 40% and handles concurrent inference effortlessly. Designed with a modular FastAPI backend and deep FAISS index integration.",
    imagePlaceholder: "AI System Visual",
    tags: ["Python", "FastAPI", "React", "FAISS", "Transformers"],
    github: "#",
    live: "#",
    year: "2026",
  },
  {
    title: "E-Commerce Experience",
    description: "A premium headless e-commerce storefront with complex global state management, highly responsive cart interactions, and a seamless checkout flow inspired by top-tier modern brands.",
    imagePlaceholder: "E-Commerce Visual",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
    github: "#",
    live: "#",
    year: "2025",
  },
  {
    title: "Modular Data Engine",
    description: "An asynchronous data ingestion pipeline capable of processing high-volume data streams. Integrates Kafka, Pydantic validation, and SQLAlchemy for persistent storage.",
    imagePlaceholder: "Data Engine Visual",
    tags: ["Python", "Kafka", "PostgreSQL", "Docker"],
    github: "#",
    live: "#",
    year: "2025",
  },
];

export function Projects() {
  return (
    <Section id="projects" className="py-32">
      <div className="flex flex-col gap-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Selected Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A curated showcase of complex systems, modern applications, and scalable architectures I've engineered.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {projectsData.map((project, idx) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="group relative glass p-6 md:p-8 rounded-[2rem] border border-white/5 hover:border-primary/30 transition-all duration-700 overflow-hidden flex flex-col lg:flex-row gap-10 items-center"
            >
              
              {/* Image / Visual Area */}
              <div className="w-full lg:w-5/12 aspect-[4/3] rounded-2xl bg-foreground/5 overflow-hidden relative border border-white/5 group-hover:border-primary/20 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-500/10 group-hover:scale-105 transition-transform duration-1000 ease-out flex items-center justify-center">
                  <span className="text-xl font-bold text-muted-foreground/50 tracking-widest uppercase mix-blend-overlay">
                    {project.imagePlaceholder}
                  </span>
                </div>
              </div>
              
              {/* Content Area */}
              <div className="w-full lg:w-7/12 flex flex-col justify-center h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
                    Featured
                  </span>
                  <span className="text-sm text-muted-foreground font-medium">{project.year}</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-blue-400 transition-all duration-500 w-fit">
                  {project.title}
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-sm font-medium text-foreground bg-foreground/5 px-4 py-1.5 rounded-lg border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 mt-auto">
                  <Link href={project.github} className="flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors">
                    <Github className="w-5 h-5" /> View Source
                  </Link>
                  <Link href={project.live} className="flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors">
                    <ExternalLink className="w-5 h-5" /> Live Preview
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
