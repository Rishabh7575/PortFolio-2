"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/layout/section";
import { TiltCard } from "@/components/ui/tilt-card";
import { staggerContainer, staggerFadeUp } from "@/animations/variants";
import { ExternalLink, ChevronDown, ChevronUp, Terminal } from "lucide-react";
import { Github } from "@/components/ui/icons";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  imagePlaceholder: string;
  tags: string[];
  github: string;
  live: string;
  year: string;
  details: {
    problem: string;
    solution: string;
    challenges: string;
    deployment: string;
  };
}

const projectsData: Project[] = [
  {
    title: "SHL AI Recommendation Engine",
    description: "Architected a highly optimized semantic retrieval engine for the SHL product catalog. Reduced retrieval latency and RAM usage by replacing heavy Transformers with a scalable FAISS and Keyword-matching hybrid approach.",
    imagePlaceholder: "AI System Architecture",
    tags: ["FastAPI", "FAISS", "Python", "React", "Docker"],
    github: "https://github.com/Rishabh7575",
    live: "#",
    year: "2026",
    details: {
      problem: "Heavy semantic model loads on the server's free tiers triggered out-of-memory crashes and excessive cold start latency (>8 seconds).",
      solution: "Engineered a lightweight, dual-tiered keyword & semantic index retrieval mechanism. Replaced local sentence-transformer server pipelines with decoupled indexing and a memory-efficient hybrid FAISS matching strategy.",
      challenges: "Lowered backend RAM usage from 1.2GB to less than 150MB while retaining 95%+ retrieval accuracy.",
      deployment: "FastAPI REST API containerized with Docker, deployed on the Render Web Service architecture."
    }
  },
  {
    title: "Mumz E-Commerce Platform",
    description: "Engineered a headless, multi-product e-commerce experience. Implemented complex global state management using React Context and a highly responsive cart interaction model with sliding drawer states.",
    imagePlaceholder: "E-Commerce Visuals",
    tags: ["React", "Next.js", "Tailwind CSS", "State Management"],
    github: "https://github.com/Rishabh7575",
    live: "#",
    year: "2026",
    details: {
      problem: "State synchronization issues across highly interactive layout drawers caused redundant sub-tree renders and jerky UI jumps on lower-end mobile devices.",
      solution: "Established a dedicated, lightweight centralized Context structure to batch drawer toggles and shopping cart increments seamlessly.",
      challenges: "Achieved continuous 60fps animations across complex cart expansion sequences on mid-tier mobile browsers.",
      deployment: "Headless Next.js edge-rendered client optimized with Vercel's global CDN layers."
    }
  },
  {
    title: "Scalable Data Engine",
    description: "Built an asynchronous data ingestion pipeline capable of processing high-volume streams. Integrated Kafka for message brokering, strict Pydantic validation, and SQLAlchemy for robust PostgreSQL persistence.",
    imagePlaceholder: "Data Pipeline",
    tags: ["Python", "Kafka", "PostgreSQL", "FastAPI"],
    github: "https://github.com/Rishabh7575",
    live: "#",
    year: "2026",
    details: {
      problem: "High volumes of unstructured inbound Webhook logs occasionally caused Postgres lock bottlenecks and dirty writes under concurrent spikes.",
      solution: "Decoupled writing operations using Apache Kafka queues as an asynchronous buffer and added a strict validation layer with Pydantic models prior to engine writes.",
      challenges: "Handled spikes of 500+ writes/second with zero lost transaction envelopes and automated schema rollback safeguards.",
      deployment: "Fully containerized stack comprising FastAPI, Kafka, and PostgreSQL services configured under a unified Docker Swarm."
    }
  },
  {
    title: "Fake News Detection Model",
    description: "Developed a natural language processing model to classify news authenticity. Utilized TF-IDF for feature extraction and evaluated Logistic Regression and Random Forest models using comprehensive confusion matrices.",
    imagePlaceholder: "NLP Classification",
    tags: ["Scikit-Learn", "NLTK", "Pandas", "Matplotlib"],
    github: "https://github.com/Rishabh7575",
    live: "#",
    year: "2026",
    details: {
      problem: "Text corpus noise (stop-words, formatting variations) degraded standard bag-of-words classification accuracy to below 75%.",
      solution: "Engineered a granular custom preprocessor using NLTK lemmatization and applied weighted term frequency-inverse document frequency vectors (TF-IDF).",
      challenges: "Boosted ultimate classifier accuracy to 91% across Logistic Regression and Random Forest benchmark layers.",
      deployment: "Engineered as an executable Python module, complete with exported Matplotlib confusion matrices."
    }
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TiltCard intensity={3} className="w-full">
      <div className="group relative glass p-6 md:p-8 rounded-[2rem] border border-white/5 hover:border-primary/30 transition-all duration-700 overflow-hidden flex flex-col gap-8 bg-background/40 backdrop-blur-md">
        
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Image / Visual Area */}
          <div className="w-full lg:w-5/12 aspect-[4/3] rounded-2xl bg-foreground/5 overflow-hidden relative border border-white/5 group-hover:border-primary/20 transition-colors duration-500 shadow-inner flex-shrink-0">
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
            
            <h3 className="text-3xl font-bold text-foreground mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-blue-400 transition-all duration-500 w-fit">
              {project.title}
            </h3>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs font-semibold text-foreground bg-white/5 px-3 py-1 rounded-lg border border-white/10 shadow-sm backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-auto">
              <Link href={project.github} target="_blank" className="flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors group/link">
                <Github className="w-4 h-4 group-hover/link:-translate-y-1 transition-transform" /> View Source
              </Link>
              <Link href={project.live} target="_blank" className="flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors group/link">
                <ExternalLink className="w-4 h-4 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" /> Live Preview
              </Link>
              
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 text-xs font-bold text-primary bg-primary/5 hover:bg-primary/10 border border-primary/20 px-4 py-2 rounded-full transition-all ml-auto focus:outline-none"
              >
                <Terminal className="w-3.5 h-3.5" />
                {isOpen ? "Close Blueprint" : "Engineering Blueprint"}
                {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Collapsible Dossier details */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-white/5 pt-6 grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden text-sm"
            >
              <div className="flex flex-col gap-2 p-4 rounded-2xl bg-foreground/5 border border-white/5">
                <span className="font-mono text-xs text-primary/80 uppercase tracking-widest font-bold">// PROBLEM STATEMENT</span>
                <p className="text-muted-foreground leading-relaxed">{project.details.problem}</p>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-2xl bg-foreground/5 border border-white/5">
                <span className="font-mono text-xs text-primary/80 uppercase tracking-widest font-bold">// HIGH-PERFORMANCE SOLUTION</span>
                <p className="text-muted-foreground leading-relaxed">{project.details.solution}</p>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-2xl bg-foreground/5 border border-white/5">
                <span className="font-mono text-xs text-primary/80 uppercase tracking-widest font-bold">// CHALLENGES SOLVED</span>
                <p className="text-muted-foreground leading-relaxed">{project.details.challenges}</p>
              </div>

              <div className="flex flex-col gap-2 p-4 rounded-2xl bg-foreground/5 border border-white/5">
                <span className="font-mono text-xs text-primary/80 uppercase tracking-widest font-bold">// DEPLOYMENT & SYSTEMS</span>
                <p className="text-muted-foreground leading-relaxed">{project.details.deployment}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </TiltCard>
  );
}

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
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
