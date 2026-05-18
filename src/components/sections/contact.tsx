"use client";

import React, { useState } from "react";
import { Section } from "@/components/layout/section";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Send, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Contact() {
  const [isFocused, setIsFocused] = useState<string | null>(null);

  return (
    <Section id="contact" className="py-32">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        
        {/* Left Side: Copy */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Let's build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
              something amazing.
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
            I'm currently open to new opportunities, freelance projects, and collaborations. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col gap-6 mt-8">
            <a href={`mailto:rishabh@example.com`} className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span className="text-lg font-medium group-hover:text-primary transition-colors">
                hello@rishabh.com
              </span>
            </a>
            <div className="flex items-center gap-4 group cursor-default">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <span className="text-lg font-medium">
                NIT Patna, India
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-1/2 glass p-8 md:p-12 rounded-[2rem] border border-white/5 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10" />
          
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                Name
              </label>
              <input 
                type="text" 
                id="name" 
                onFocus={() => setIsFocused("name")}
                onBlur={() => setIsFocused(null)}
                className="w-full bg-foreground/5 border-b-2 border-white/10 px-4 py-4 rounded-t-xl outline-none transition-colors focus:bg-foreground/10 focus:border-primary text-foreground placeholder:text-muted-foreground/50"
                placeholder="John Doe"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                onFocus={() => setIsFocused("email")}
                onBlur={() => setIsFocused(null)}
                className="w-full bg-foreground/5 border-b-2 border-white/10 px-4 py-4 rounded-t-xl outline-none transition-colors focus:bg-foreground/10 focus:border-primary text-foreground placeholder:text-muted-foreground/50"
                placeholder="john@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                Message
              </label>
              <textarea 
                id="message" 
                rows={4}
                onFocus={() => setIsFocused("message")}
                onBlur={() => setIsFocused(null)}
                className="w-full bg-foreground/5 border-b-2 border-white/10 px-4 py-4 rounded-t-xl outline-none transition-colors focus:bg-foreground/10 focus:border-primary text-foreground placeholder:text-muted-foreground/50 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <MagneticButton 
              type="button" 
              className="mt-4 bg-foreground text-background px-8 py-5 text-lg font-bold flex items-center justify-center gap-3 hover:bg-foreground/90 rounded-xl w-full group"
            >
              Send Message
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </MagneticButton>
          </form>
        </div>
      </div>
    </Section>
  );
}
