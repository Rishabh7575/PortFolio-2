"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { TiltCard } from "@/components/ui/tilt-card";
import { Download, GraduationCap, Briefcase, Award, Terminal, Code2, Sparkles, Trophy } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ResumeViewer() {
  return (
    <Section id="resume" className="py-24 border-t border-border">
      <div className="flex flex-col gap-12">
        
        {/* Header Title with quick PDF download */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b border-border">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-4">
              Resume
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-xl font-light">
              Interactive snapshot of my technical credentials, systems architecture background, and NIT Patna academic track.
            </p>
          </div>
          
          <a 
            href="/resume.pdf" 
            target="_blank"
            download
            className="group flex items-center gap-3 bg-foreground text-background dark:bg-white dark:text-black hover:bg-foreground/90 dark:hover:bg-white/90 px-7 py-3.5 font-bold rounded-2xl shadow-xl transition-all w-full md:w-auto justify-center transition-premium"
          >
            <Download className="w-5 h-5 group-hover:scale-110 transition-transform text-cyan-600 dark:text-cyan-500" />
            Download PDF Copy
          </a>
        </div>

        {/* Spacious, easy-to-scan 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Quick Profile Indices (Sticky) */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-28">
            <TiltCard intensity={2}>
              <div className="glass p-6 rounded-3xl border border-white/20 dark:border-white/5 bg-background/30 backdrop-blur-xl flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-xs font-mono tracking-widest text-primary font-bold uppercase">
                    // QUICK_FACTS
                  </span>
                </div>
                
                <div className="flex flex-col gap-4 font-mono text-sm border-b border-border pb-4">
                  <div>
                    <span className="text-muted-foreground text-xs block mb-1">UNIVERSITY</span>
                    <span className="font-bold text-foreground">NIT Patna</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground text-xs block mb-1">MAJOR</span>
                    <span className="font-bold text-foreground">Mechanical Engineering</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground text-xs block mb-1">MINOR</span>
                    <span className="font-bold text-foreground">Machine Learning</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground text-xs block mb-1">CGPA</span>
                    <span className="font-bold text-primary">7.80 / 10.0</span>
                  </div>
                </div>

                <div className="flex flex-col gap-4 font-mono text-sm border-b border-border pb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-xs">LEETCODE RATING</span>
                    <span className="font-bold text-orange-500">1750 (Max)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-xs">CODECHEF RATING</span>
                    <span className="font-bold text-yellow-500">1670 (Max)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-xs">PROBLEMS SOLVED</span>
                    <span className="font-bold text-foreground">900+ Total</span>
                  </div>
                </div>

                <div className="flex flex-col gap-1 text-xs text-muted-foreground font-mono">
                  <span>EMAIL: kumarvrishabh700@gmail.com</span>
                  <span>PHONE: +91 8409066141</span>
                  <span>LINKEDIN: linkedin.com/in/rishabhkumar26</span>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Right Column: Frosted Glass Dossier Sheet */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            {/* Experience Card */}
            <TiltCard intensity={1}>
              <div className="glass p-8 rounded-3xl border border-white/20 dark:border-white/5 bg-background/30 backdrop-blur-xl">
                <div className="flex items-center gap-3 border-b border-border pb-4 mb-6">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <h3 className="font-mono text-xs uppercase tracking-widest text-primary font-bold">// WORK_EXPERIENCE</h3>
                </div>
                
                <div className="flex flex-col gap-4">
                  <div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 mb-2">
                      <h4 className="text-xl font-bold text-foreground">Software Developer Intern</h4>
                      <span className="text-xs font-mono text-muted-foreground">Jun 2025 — July 2025</span>
                    </div>
                    <p className="text-sm font-bold text-primary font-mono mb-3">BlueStocks | Fintech Architecture</p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground/90 flex flex-col gap-2 pl-1.5 leading-relaxed font-light">
                      <li>Collaborated on enhancing React component architecture, improving state management and asynchronous data handling in production UI.</li>
                      <li>Implemented 3+ user-facing features including data fetching, UI state handling, and error feedback across core screens.</li>
                      <li>Integrated React frontend with backend REST APIs, improving perceived responsiveness by approximately 15-20%.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Featured Projects from Resume */}
            <TiltCard intensity={1}>
              <div className="glass p-8 rounded-3xl border border-white/20 dark:border-white/5 bg-background/30 backdrop-blur-xl">
                <div className="flex items-center gap-3 border-b border-border pb-4 mb-6">
                  <Terminal className="w-5 h-5 text-primary" />
                  <h3 className="font-mono text-xs uppercase tracking-widest text-primary font-bold">// FEATURED_SYSTEMS</h3>
                </div>
                
                <div className="flex flex-col gap-6">
                  {/* Project 1 */}
                  <div className="border-b border-border pb-6 last:border-b-0 last:pb-0">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 mb-2">
                      <h4 className="text-lg font-bold text-foreground">GenAI ATS Resume Checker with Chatbot</h4>
                      <span className="text-xs font-mono text-muted-foreground">Jan 2025</span>
                    </div>
                    <p className="text-xs text-primary font-mono mb-2 font-semibold">LangChain, HuggingFace, Streamlit, Python</p>
                    <ul className="list-disc list-inside text-xs text-muted-foreground/90 flex flex-col gap-1.5 pl-1.5 font-light">
                      <li>Developed a GenAI-based ATS using transformer embeddings with scikit-learn and NLTK, generating 3 structured evaluation signals per resume to support resume-job matching and feedback.</li>
                      <li>Integrated a LangChain chatbot for resume enhancement, improving feedback response speed by Approximately 40%.</li>
                      <li>Deployed on Streamlit and used by 50+ users, enabling real-time resume scoring and ATS optimization.</li>
                    </ul>
                  </div>

                  {/* Project 2 */}
                  <div className="border-b border-border pb-6 last:border-b-0 last:pb-0">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 mb-2">
                      <h4 className="text-lg font-bold text-foreground">AI LMS Generator (Learning Management System)</h4>
                      <span className="text-xs font-mono text-muted-foreground">Sep 2025</span>
                    </div>
                    <p className="text-xs text-primary font-mono mb-2 font-semibold">Next.js, Node.js, Express.js, REST APIs, PostgreSQL</p>
                    <ul className="list-disc list-inside text-xs text-muted-foreground/90 flex flex-col gap-1.5 pl-1.5 font-light">
                      <li>Developed a full-stack AI-powered learning platform that generates structured courses, quizzes, and lesson plans from prompts, implementing REST APIs for course creation, authentication, and progress tracking, supporting 50+ users.</li>
                      <li>Designed responsive dashboards with Next.js enabling easier course navigation, quizzes, and updated learning insights, reducing content creation effort by 60%.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Positions of Responsibility */}
            <TiltCard intensity={1}>
              <div className="glass p-8 rounded-3xl border border-white/20 dark:border-white/5 bg-background/30 backdrop-blur-xl">
                <div className="flex items-center gap-3 border-b border-border pb-4 mb-6">
                  <Code2 className="w-5 h-5 text-primary" />
                  <h3 className="font-mono text-xs uppercase tracking-widest text-primary font-bold">// LEADERSHIP_&_COMMUNITIES</h3>
                </div>
                
                <div className="flex flex-col gap-5 text-sm">
                  <div>
                    <h4 className="font-bold text-foreground">GDSC Student Chapter — A.I. Lead</h4>
                    <ul className="list-disc list-inside text-xs text-muted-foreground mt-2 flex flex-col gap-1 pl-1 leading-relaxed font-light">
                      <li>Led an artificial intelligence team of 10+ members and conducted 5+ hands-on workshops on machine learning, deep learning, and generative AI, guiding peers in real-world AI applications.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground">ThinkIndia NITP — Web Development Lead</h4>
                    <ul className="list-disc list-inside text-xs text-muted-foreground mt-2 flex flex-col gap-1 pl-1 leading-relaxed font-light">
                      <li>Managed web development initiatives for a team of 8+ developers, overseeing UI/UX planning and full-stack development workflows.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Achievements & Trophies */}
            <TiltCard intensity={1}>
              <div className="glass p-8 rounded-3xl border border-white/20 dark:border-white/5 bg-background/30 backdrop-blur-xl">
                <div className="flex items-center gap-3 border-b border-border pb-4 mb-6">
                  <Trophy className="w-5 h-5 text-primary" />
                  <h3 className="font-mono text-xs uppercase tracking-widest text-primary font-bold">// KEY_ACHIEVEMENTS</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-foreground/5 border border-border">
                    <Sparkles className="w-4 h-4 text-amber-500 mt-0.5" />
                    <div>
                      <span className="font-bold block text-foreground">HP PowerLab 1.0 & 2.0</span>
                      <span className="text-[10px] text-muted-foreground">Qualified for Round 2</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-foreground/5 border border-border">
                    <Sparkles className="w-4 h-4 text-primary mt-0.5" />
                    <div>
                      <span className="font-bold block text-foreground">Bajaj HackRx- 6.0</span>
                      <span className="text-[10px] text-muted-foreground">Round 2 Qualifier</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-foreground/5 border border-border">
                    <Sparkles className="w-4 h-4 text-cyan-500 mt-0.5" />
                    <div>
                      <span className="font-bold block text-foreground">Grab Hackathon</span>
                      <span className="text-[10px] text-muted-foreground">Top 500 teams among 25000+ teams</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-foreground/5 border border-border">
                    <Sparkles className="w-4 h-4 text-yellow-500 mt-0.5" />
                    <div>
                      <span className="font-bold block text-foreground">Competitive Coding</span>
                      <span className="text-[10px] text-muted-foreground">Solved 900+ DSA Problems</span>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>

          </div>

        </div>

      </div>
    </Section>
  );
}
