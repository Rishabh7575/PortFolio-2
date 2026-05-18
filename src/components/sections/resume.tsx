"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/layout/section";
import { TiltCard } from "@/components/ui/tilt-card";
import { FileText, Download, GraduationCap, Briefcase, Award, Eye, EyeOff } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ResumeViewer() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <Section id="resume" className="py-24 border-t border-white/5">
      <div className="flex flex-col gap-12 max-w-4xl mx-auto">
        
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Professional Dossier
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A comprehensive visual index of my background, education, and technical trajectory. Open the inline preview or download the full copy.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => setIsPreviewOpen(!isPreviewOpen)}
            className="group flex items-center gap-3 bg-foreground text-background px-8 py-4 font-bold rounded-2xl shadow-xl hover:bg-foreground/90 transition-all w-full md:w-auto justify-center"
          >
            {isPreviewOpen ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            {isPreviewOpen ? "Hide Resume Preview" : "Preview Resume"}
          </button>
          
          <a 
            href="/resume.pdf" 
            target="_blank"
            download
            className="group flex items-center gap-3 glass border-white/10 hover:border-primary/30 px-8 py-4 font-bold rounded-2xl shadow-xl hover:bg-white/5 transition-all w-full md:w-auto justify-center"
          >
            <Download className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            Download PDF Copy
          </a>
        </div>

        <AnimatePresence>
          {isPreviewOpen && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="w-full mt-6"
            >
              <TiltCard intensity={1} className="w-full">
                <div className="glass border-white/10 p-8 md:p-12 rounded-[2.5rem] bg-[#0a0a0c]/90 text-foreground font-mono text-sm leading-relaxed shadow-2xl relative overflow-hidden">
                  
                  {/* Subtle watermarked grid background */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

                  {/* Document Header */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-8 mb-8 gap-4 relative z-10">
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">{siteConfig.name}</h3>
                      <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">AI Systems Architect & Full-Stack Engineer</p>
                    </div>
                    <div className="text-xs text-muted-foreground flex flex-col gap-1 items-start md:items-end">
                      <span>EMAIL: contact@rishabh.dev</span>
                      <span>GITHUB: github.com/Rishabh7575</span>
                    </div>
                  </div>

                  {/* Education block */}
                  <div className="mb-8 relative z-10">
                    <div className="flex items-center gap-3 border-b border-white/5 pb-2 mb-4">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      <span className="font-bold text-xs uppercase tracking-widest text-primary">// EDUCATION</span>
                    </div>
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h4 className="font-bold text-foreground">National Institute of Technology, Patna</h4>
                        <p className="text-xs text-muted-foreground mt-1">Bachelor of Technology (B.Tech) - Mechanical Engineering</p>
                      </div>
                      <span className="text-xs text-muted-foreground flex-shrink-0">Grad: 2026</span>
                    </div>
                  </div>

                  {/* Work Experience */}
                  <div className="mb-8 relative z-10">
                    <div className="flex items-center gap-3 border-b border-white/5 pb-2 mb-4">
                      <Briefcase className="w-5 h-5 text-primary" />
                      <span className="font-bold text-xs uppercase tracking-widest text-primary">// PROFESSIONAL DOSSIER</span>
                    </div>
                    
                    <div className="flex flex-col gap-6">
                      <div>
                        <div className="flex justify-between items-center">
                          <h4 className="font-bold text-foreground">University Software Lab</h4>
                          <span className="text-xs text-muted-foreground">2025 - Present</span>
                        </div>
                        <p className="text-xs text-primary font-bold mt-0.5">Systems Architect & Developer</p>
                        <ul className="list-disc list-inside mt-2 text-xs text-muted-foreground flex flex-col gap-1.5 pl-2 leading-relaxed">
                          <li>Re-engineered indexing layers for large catalogs, reducing latency by 45%.</li>
                          <li>Implemented asynchronous messaging queues using Apache Kafka to prevent processing bottlenecks.</li>
                        </ul>
                      </div>

                      <div>
                        <div className="flex justify-between items-center">
                          <h4 className="font-bold text-foreground">Tech Innovations Lab</h4>
                          <span className="text-xs text-muted-foreground">2024 - 2025</span>
                        </div>
                        <p className="text-xs text-primary font-bold mt-0.5">Full Stack Engineering Intern</p>
                        <ul className="list-disc list-inside mt-2 text-xs text-muted-foreground flex flex-col gap-1.5 pl-2 leading-relaxed">
                          <li>Led migration to modular React structure, improving mobile load speeds by 30%.</li>
                          <li>Designed robust schema integrations for multi-tier relational configurations.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Technical Highlights */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 border-b border-white/5 pb-2 mb-4">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="font-bold text-xs uppercase tracking-widest text-primary">// TECHNICAL INDEX</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="flex flex-col gap-1">
                        <span className="text-muted-foreground">AI / RETRIEVAL:</span>
                        <span className="text-foreground">FAISS, RAG pipelines, LangChain, Embeddings</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-muted-foreground">LANGUAGES & ARCHS:</span>
                        <span className="text-foreground">TypeScript, Next.js, Python, FastAPI, Kafka</span>
                      </div>
                    </div>
                  </div>

                </div>
              </TiltCard>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </Section>
  );
}
