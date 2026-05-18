"use client";

import React from "react";
import { Section } from "@/components/layout/section";

export function Experience() {
  return (
    <Section id="experience" className="py-24 border-t border-border/50">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Experience.
          </h2>
          <p className="text-muted-foreground">
            My professional journey and academic background.
          </p>
        </div>

        <div className="w-full md:w-2/3 flex flex-col gap-12 border-l border-border/50 pl-8 md:pl-12 relative">
          
          {/* Experience Item Placeholder */}
          <div className="relative">
            {/* Timeline Dot */}
            <div className="absolute -left-[37px] md:-left-[53px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary" />
            
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium text-primary">2024 - Present</span>
              <h3 className="text-xl font-bold text-foreground">Software Engineer Intern</h3>
              <span className="text-muted-foreground font-medium mb-4">Tech Company Name</span>
              <p className="text-muted-foreground leading-relaxed">
                Description of responsibilities, achievements, and technologies used during this role.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </Section>
  );
}
