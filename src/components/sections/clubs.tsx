"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";

const clubsData = [
  {
    role: "Technical Lead",
    club: "Hackathon Society NIT Patna",
    period: "2024 - Present",
    description: "Leading a team of 40+ developers in organizing national-level hackathons. Mentoring junior students in React and modern full-stack development.",
  },
  {
    role: "Core Member",
    club: "Robotics Club",
    period: "2023 - 2024",
    description: "Designed control systems for autonomous rovers. Participated in national robotics competitions focusing on computer vision and pathfinding algorithms.",
  },
];

export function Clubs() {
  return (
    <Section id="clubs" className="py-24">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-1/3">
          <div className="sticky top-32">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Leadership & Clubs
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Extracurricular leadership and community involvement at NIT Patna.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-2/3 flex flex-col gap-8 relative">
          <div className="absolute left-[15px] top-4 bottom-4 w-px bg-gradient-to-b from-primary/50 via-border to-transparent hidden md:block" />

          {clubsData.map((club, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative pl-0 md:pl-12 group"
            >
              <div className="absolute left-[11px] top-1.5 w-2 h-2 rounded-full bg-primary hidden md:block group-hover:scale-150 transition-transform duration-300 ring-4 ring-background" />

              <div className="glass p-8 rounded-3xl border border-white/5 hover:border-primary/20 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{club.role}</h3>
                    <span className="text-lg text-muted-foreground font-medium">{club.club}</span>
                  </div>
                  <span className="text-sm font-bold text-primary bg-primary/10 px-4 py-1.5 rounded-full whitespace-nowrap border border-primary/20">
                    {club.period}
                  </span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed text-lg">
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
