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

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 className="w-6 h-6 text-primary" />,
    skills: ["TypeScript", "JavaScript", "Python", "C++", "HTML", "CSS"],
  },
  {
    title: "Frontend",
    icon: <LayoutTemplate className="w-6 h-6 text-primary" />,
    skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Redux", "Zustand"],
  },
  {
    title: "Backend",
    icon: <Database className="w-6 h-6 text-primary" />,
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"],
  },
  {
    title: "AI / ML",
    icon: <Cpu className="w-6 h-6 text-primary" />,
    skills: ["Python", "TensorFlow", "Scikit-Learn", "OpenAI API", "LangChain", "RAG"],
  },
  {
    title: "Core Engineering",
    icon: <TerminalSquare className="w-6 h-6 text-primary" />,
    skills: ["Data Structures", "Algorithms", "System Design", "OOP", "DBMS", "OS"],
  },
  {
    title: "Tools & DevOps",
    icon: <Wrench className="w-6 h-6 text-primary" />,
    skills: ["Git", "GitHub", "Docker", "AWS", "Vercel", "Postman", "Linux"],
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
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-3 bg-primary/10 rounded-2xl border border-primary/20 shadow-inner">
                        {category.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground tracking-tight">{category.title}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {category.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-4 py-2 bg-foreground/5 hover:bg-foreground/10 border border-white/5 rounded-full text-sm font-medium transition-colors cursor-default shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
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
