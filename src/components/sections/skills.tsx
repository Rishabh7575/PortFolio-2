"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { TiltCard } from "@/components/ui/tilt-card";
import { staggerContainer, staggerFadeUp } from "@/animations/variants";
import { 
  Code2, 
  Database, 
  LayoutTemplate, 
  TerminalSquare, 
  Cpu, 
  Wrench 
} from "lucide-react";

import { 
  Code2, 
  Database, 
  LayoutTemplate, 
  TerminalSquare, 
  Cpu, 
  Wrench,
  GitBranch
} from "lucide-react";

interface SkillItem {
  name: string;
  level: "Expert" | "Advanced" | "Intermediate";
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  context: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: <Code2 className="w-6 h-6 text-primary" />,
    context: "Primary core code constructs and compilation strategies.",
    skills: [
      { name: "TypeScript", level: "Expert" },
      { name: "Python", level: "Expert" },
      { name: "JavaScript", level: "Expert" },
      { name: "C++", level: "Advanced" }
    ],
  },
  {
    title: "Frontend Architectures",
    icon: <LayoutTemplate className="w-6 h-6 text-primary" />,
    context: "Building fluid user interfaces and global state controllers.",
    skills: [
      { name: "Next.js", level: "Expert" },
      { name: "React.js", level: "Expert" },
      { name: "Zustand", level: "Advanced" },
      { name: "Tailwind CSS", level: "Expert" }
    ],
  },
  {
    title: "Backend & Queues",
    icon: <Database className="w-6 h-6 text-primary" />,
    context: "Asynchronous processing engines and relational schema design.",
    skills: [
      { name: "FastAPI", level: "Expert" },
      { name: "PostgreSQL", level: "Expert" },
      { name: "Kafka", level: "Advanced" },
      { name: "Node.js", level: "Advanced" }
    ],
  },
  {
    title: "AI & Retrieval",
    icon: <Cpu className="w-6 h-6 text-primary" />,
    context: "Semantic indexing matching pipelines and embeddings orchestration.",
    skills: [
      { name: "FAISS Indexing", level: "Expert" },
      { name: "LangChain", level: "Advanced" },
      { name: "Transformers", level: "Advanced" },
      { name: "RAG Pipelines", level: "Expert" }
    ],
  },
  {
    title: "Core Engineering",
    icon: <TerminalSquare className="w-6 h-6 text-primary" />,
    context: "Theoretical foundations and high-performance algorithms.",
    skills: [
      { name: "Algorithms", level: "Expert" },
      { name: "Data Structures", level: "Expert" },
      { name: "System Design", level: "Advanced" },
      { name: "DBMS Strategies", level: "Advanced" }
    ],
  },
  {
    title: "Tools & Deployments",
    icon: <Wrench className="w-6 h-6 text-primary" />,
    context: "CI/CD control layers and automated delivery systems.",
    skills: [
      { name: "Docker Container", level: "Expert" },
      { name: "Git & Actions", level: "Expert" },
      { name: "Vercel Hosting", level: "Expert" },
      { name: "Linux Bash", level: "Advanced" }
    ],
  },
];

export function Skills() {
  return (
    <Section id="skills" className="py-32">
      <div className="flex flex-col gap-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Technical Arsenal
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A comprehensive overview of the technologies, languages, and core engineering principles I leverage to build robust software systems.
          </p>
        </div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={staggerFadeUp} className="h-full">
              <TiltCard intensity={10} className="h-full">
                <div className="group relative glass p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden flex flex-col h-full bg-background/40 backdrop-blur-md">
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-2xl border border-primary/20 shadow-inner">
                        {category.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground tracking-tight">{category.title}</h3>
                    </div>

                    <p className="text-xs text-muted-foreground font-mono leading-relaxed mb-6 border-b border-white/5 pb-4 uppercase tracking-wider">
                      // {category.context}
                    </p>
                    
                    <div className="flex flex-col gap-3 mt-auto">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="flex justify-between items-center bg-foreground/5 hover:bg-foreground/10 border border-white/5 px-4 py-2.5 rounded-xl transition-all">
                          <span className="text-sm font-semibold text-foreground">{skill.name}</span>
                          <span className="text-[10px] font-mono font-bold tracking-widest text-primary uppercase bg-primary/10 px-2 py-0.5 rounded border border-primary/20">{skill.level}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}

          {/* GitHub Activity Bento Panel */}
          <motion.div variants={staggerFadeUp} className="col-span-1 md:col-span-2 lg:col-span-3 h-full">
            <TiltCard intensity={2} className="h-full">
              <div className="group relative glass p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden bg-background/40 backdrop-blur-md">
                <div className="relative z-10 flex flex-col lg:flex-row gap-8 justify-between">
                  <div className="flex flex-col max-w-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-2xl border border-primary/20 shadow-inner">
                        <GitBranch className="w-6 h-6 text-primary animate-pulse" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground tracking-tight">GitHub Pulse</h3>
                    </div>
                    <p className="text-sm text-muted-foreground font-mono leading-relaxed mb-6 uppercase tracking-wider">
                      // Active tracking of coding focus indices and commit distribution.
                    </p>
                    
                    <div className="flex flex-col gap-3 font-mono text-xs">
                      <div className="flex justify-between border-b border-white/5 py-2">
                        <span className="text-muted-foreground">AI / Semantic Code</span>
                        <span className="font-bold text-primary">45%</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 py-2">
                        <span className="text-muted-foreground">Systems & Micro-Busses</span>
                        <span className="font-bold text-blue-400">35%</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-muted-foreground">Heads-Up Display UI</span>
                        <span className="font-bold text-foreground">20%</span>
                      </div>
                    </div>
                  </div>

                  {/* Contribution Heatmap Mock */}
                  <div className="flex-1 flex flex-col justify-center items-center lg:items-end">
                    <div className="glass border-white/10 p-6 rounded-2xl font-mono text-xs max-w-full overflow-hidden shadow-2xl bg-[#0a0a0c]/80">
                      <div className="text-muted-foreground mb-4 text-[10px] uppercase tracking-wider flex justify-between gap-4">
                        <span>CONTRIBUTIONS (PAST YEAR)</span>
                        <span className="text-primary font-bold">1,824 COMMITS</span>
                      </div>
                      
                      {/* Grid representation */}
                      <div className="flex gap-1.5 overflow-x-auto pb-2">
                        {[...Array(24)].map((_, colIdx) => (
                          <div key={colIdx} className="flex flex-col gap-1.5 flex-shrink-0">
                            {[...Array(7)].map((_, rowIdx) => {
                              // Pseudo-random greens
                              const val = (colIdx * rowIdx + 3) % 4;
                              const colors = [
                                "bg-white/5",
                                "bg-primary/20",
                                "bg-primary/50",
                                "bg-primary"
                              ];
                              return (
                                <div 
                                  key={rowIdx} 
                                  className={`w-3.5 h-3.5 rounded ${colors[val]} hover:scale-125 hover:ring-2 hover:ring-primary/45 transition-all duration-300 cursor-help`}
                                  title={`${val * 2 + 1} commit(s) on cycle [${colIdx}-${rowIdx}]`}
                                />
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
