"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { TiltCard } from "@/components/ui/tilt-card";
import { staggerContainer, staggerFadeUp } from "@/animations/variants";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const projectsData = [
  {
    title: "SHL AI Recommendation Engine",
    description: "Architected a highly optimized semantic retrieval engine for the SHL product catalog. Reduced retrieval latency and RAM usage by replacing heavy Transformers with a scalable FAISS and Keyword-matching hybrid approach.",
    imagePlaceholder: "AI System Architecture",
    tags: ["FastAPI", "FAISS", "Python", "React", "Docker"],
    github: "https://github.com/Rishabh7575",
    live: "#",
    year: "2026",
  },
  {
    title: "Mumz E-Commerce Platform",
    description: "Engineered a headless, multi-product e-commerce experience. Implemented complex global state management using React Context and a highly responsive cart interaction model with sliding drawer states.",
    imagePlaceholder: "E-Commerce Visuals",
    tags: ["React", "Next.js", "Tailwind CSS", "State Management"],
    github: "https://github.com/Rishabh7575",
    live: "#",
    year: "2026",
  },
  {
    title: "Scalable Data Engine",
    description: "Built an asynchronous data ingestion pipeline capable of processing high-volume streams. Integrated Kafka for message brokering, strict Pydantic validation, and SQLAlchemy for robust PostgreSQL persistence.",
    imagePlaceholder: "Data Pipeline",
    tags: ["Python", "Kafka", "PostgreSQL", "FastAPI"],
    github: "https://github.com/Rishabh7575",
    live: "#",
    year: "2026",
  },
  {
    title: "Fake News Detection Model",
    description: "Developed a natural language processing model to classify news authenticity. Utilized TF-IDF for feature extraction and evaluated Logistic Regression and Random Forest models using comprehensive confusion matrices.",
    imagePlaceholder: "NLP Classification",
    tags: ["Scikit-Learn", "NLTK", "Pandas", "Matplotlib"],
    github: "https://github.com/Rishabh7575",
    live: "#",
    year: "2026",
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

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-12"
        >
          {projectsData.map((project) => (
            <motion.div key={project.title} variants={staggerFadeUp}>
              <TiltCard intensity={5} className="w-full">
                <div className="group relative glass p-6 md:p-8 rounded-[2rem] border border-white/5 hover:border-primary/30 transition-all duration-700 overflow-hidden flex flex-col lg:flex-row gap-10 items-center bg-background/40 backdrop-blur-md">
                  
                  {/* Image / Visual Area */}
                  <div className="w-full lg:w-5/12 aspect-[4/3] rounded-2xl bg-foreground/5 overflow-hidden relative border border-white/5 group-hover:border-primary/20 transition-colors duration-500 shadow-inner">
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
                        <span key={tag} className="text-sm font-medium text-foreground bg-white/5 px-4 py-1.5 rounded-lg border border-white/10 shadow-sm backdrop-blur-sm">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-6 mt-auto">
                      <Link href={project.github} className="flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors group/link">
                        <Github className="w-5 h-5 group-hover/link:-translate-y-1 transition-transform" /> View Source
                      </Link>
                      <Link href={project.live} className="flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors group/link">
                        <ExternalLink className="w-5 h-5 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" /> Live Preview
                      </Link>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
