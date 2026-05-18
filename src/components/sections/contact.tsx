"use client";

import React from "react";
import { Section } from "@/components/layout/section";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Send } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Contact() {
  return (
    <Section id="contact" className="py-32 border-t border-border/50">
      <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto gap-8">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">amazing</span> together.
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          I'm always open to discussing product design work, software engineering opportunities, or partnership opportunities.
        </p>
        
        <div className="mt-8">
          <MagneticButton className="group bg-foreground text-background px-10 py-5 text-lg font-semibold flex items-center justify-center gap-3 hover:bg-foreground/90 rounded-full">
            Say Hello
            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </MagneticButton>
        </div>
      </div>
    </Section>
  );
}
