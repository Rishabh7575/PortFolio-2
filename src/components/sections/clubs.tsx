"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Users } from "lucide-react";

const clubsData = [
  {
    role: "GDSC Student Chapter — A.I. Lead",
    club: "Google Developer Student Clubs",
    period: "2024 — Present",
    description: "Led an artificial intelligence team of 10+ members and conducted 5+ hands-on workshops on machine learning, deep learning, and generative AI, guiding peers in real-world AI applications.",
  },
  {
    role: "ThinkIndia NITP — Web Development Lead",
    club: "ThinkIndia NIT Patna Chapter",
    period: "2024 — Present",
    description: "Managed web development initiatives for a team of 8+ developers, overseeing UI/UX planning and full-stack development workflows.",
  },
];

export function Clubs() {
  return (
    <Section id="clubs" className="py-24 border-t border-border">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-1/3">
          <div className="sticky top-32">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-6">
              Leadership
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed font-light">
              Community roles and leadership experiences at NIT Patna.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-2/3 flex flex-col gap-8 relative">
          {clubsData.map((club, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group"
            >
              <div className="glass p-8 rounded-3xl border border-white/20 dark:border-white/5 bg-background/30 backdrop-blur-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-xl border border-primary/20">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{club.role}</h3>
                      <span className="text-xs text-muted-foreground font-mono">{club.club}</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-4 py-1.5 rounded-full whitespace-nowrap border border-primary/20 max-w-fit">
                    {club.period}
                  </span>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  {club.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
