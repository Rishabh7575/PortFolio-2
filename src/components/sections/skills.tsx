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

          {/* LeetCode Activity Bento Panel */}
          <motion.div variants={staggerFadeUp} className="col-span-1 md:col-span-2 lg:col-span-3 h-full">
            <TiltCard intensity={2} className="h-full">
              <div className="group relative glass p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden bg-background/40 backdrop-blur-md">
                <div className="relative z-10 flex flex-col lg:flex-row gap-8 justify-between">
                  <div className="flex flex-col max-w-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2.5 bg-orange-500/10 rounded-2xl border border-orange-500/20 shadow-inner flex items-center justify-center">
                        {/* Elegant Custom LeetCode Icon SVG */}
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-orange-500" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.102 17.93l-2.697 2.607c-.466.45-1.245.45-1.71 0l-5.865-5.665a1.162 1.162 0 010-1.654L10.996 9.07c.466-.45 1.245-.45 1.71 0l5.865 5.665a1.162 1.162 0 010 1.654l-2.469 2.387v.002z" opacity=".15"/>
                          <path d="M22 14.355c0-.742-.604-1.346-1.346-1.346H10.607c-.36 0-.702-.143-.956-.397l-3.957-3.957a1.352 1.352 0 010-1.91l3.957-3.957c.254-.254.596-.397.956-.397h10.047C21.396 2.397 22 1.793 22 1.051c0-.742-.604-1.346-1.346-1.346H10.607c-1.08 0-2.115.43-2.878 1.193L3.772 4.855a4.053 4.053 0 000 5.73l3.957 3.957c.763.763 1.798 1.193 2.878 1.193h10.047c.742 0 1.346-.604 1.346-1.346z"/>
                          <path d="M16.102 17.93l-2.697 2.607c-.466.45-1.245.45-1.71 0l-5.865-5.665a1.162 1.162 0 010-1.654L10.996 9.07c.466-.45 1.245-.45 1.71 0l5.865 5.665a1.162 1.162 0 010 1.654l-2.469 2.387v.002z" fill="#f97316"/>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground tracking-tight">LeetCode Snapshot</h3>
                    </div>
                    <p className="text-sm text-muted-foreground font-mono leading-relaxed mb-6 uppercase tracking-wider">
                      // Active tracking of algorithm patterns, data structures, and problem-solving velocity.
                    </p>
                    
                    <div className="flex flex-col gap-3 font-mono text-xs">
                      <div className="flex justify-between border-b border-white/5 py-2">
                        <span className="text-muted-foreground">Medium Complexity</span>
                        <span className="font-bold text-orange-500">195 Solved</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 py-2">
                        <span className="text-muted-foreground">Easy Foundation</span>
                        <span className="font-bold text-yellow-500">120 Solved</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-muted-foreground">Hard Algorithms</span>
                        <span className="font-bold text-red-500">35 Solved</span>
                      </div>
                    </div>
                  </div>

                  {/* LeetCode Amber/Orange Heatmap representation */}
                  <div className="flex-1 flex flex-col justify-center items-center lg:items-end">
                    <div className="glass border-white/10 p-6 rounded-2xl font-mono text-xs max-w-full overflow-hidden shadow-2xl bg-[#0a0a0c]/80 relative">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl pointer-events-none" />
                      
                      <div className="text-muted-foreground mb-4 text-[10px] uppercase tracking-wider flex justify-between gap-4">
                        <span>LEETCODE ACTIVITY</span>
                        <span className="text-orange-500 font-bold">350+ SOLVED (RATING: 1750)</span>
                      </div>
                      
                      {/* Grid representation */}
                      <div className="flex gap-1.5 overflow-x-auto pb-2">
                        {[...Array(24)].map((_, colIdx) => (
                          <div key={colIdx} className="flex flex-col gap-1.5 flex-shrink-0">
                            {[...Array(7)].map((_, rowIdx) => {
                              // Patterned orange heat distribution
                              const val = (colIdx * rowIdx + 2) % 4;
                              const colors = [
                                "bg-white/5 dark:bg-white/5",
                                "bg-orange-500/20 dark:bg-orange-500/15",
                                "bg-orange-500/60 dark:bg-orange-500/40",
                                "bg-orange-500 dark:bg-orange-500"
                              ];
                              return (
                                <div 
                                  key={rowIdx} 
                                  className={`w-3.5 h-3.5 rounded-sm ${colors[val]} hover:scale-125 hover:ring-2 hover:ring-orange-500/45 transition-all duration-300 cursor-help`}
                                  title={`${val * 2 + 1} problems solved on slot [${colIdx}-${rowIdx}]`}
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
