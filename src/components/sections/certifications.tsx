"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Award, ExternalLink } from "lucide-react";
import Link from "next/link";

const certificationsData = [
  {
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    date: "2025",
    link: "#",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "Coursera (DeepLearning.AI)",
    date: "2024",
    link: "#",
  },
];

export function Certifications() {
  return (
    <Section id="certifications" className="py-24 border-t border-border">
      <div className="flex flex-col gap-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-4">
            Certifications
          </h2>
          <p className="text-base text-muted-foreground font-light">
            Continuous learning, systems architecture certifications, and professional accreditations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
          {certificationsData.map((cert, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-6 rounded-3xl border border-white/20 dark:border-white/5 bg-background/30 backdrop-blur-md flex flex-col justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-primary/10 rounded-xl text-primary flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <span className="text-xs text-muted-foreground font-mono">{cert.issuer}</span>
                </div>
              </div>
              
              <div className="mt-6 flex items-center justify-between pt-4 border-t border-border">
                <span className="text-xs font-mono font-bold text-muted-foreground">{cert.date}</span>
                <Link href={cert.link} className="flex items-center gap-1 text-xs font-bold hover:text-primary transition-colors">
                  Verify <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
