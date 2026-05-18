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
    <Section id="certifications" className="py-24">
      <div className="flex flex-col gap-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Certifications
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Continuous learning and professional accreditations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full">
          {certificationsData.map((cert, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/5 hover:border-primary/20 transition-all duration-300 flex flex-col h-full group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <span className="text-muted-foreground font-medium">{cert.issuer}</span>
                </div>
              </div>
              
              <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                <span className="text-sm font-bold text-muted-foreground">{cert.date}</span>
                <Link href={cert.link} className="flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors">
                  View Credential <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
