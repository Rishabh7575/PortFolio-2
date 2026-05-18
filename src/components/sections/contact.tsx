"use client";

import React, { useState } from "react";
import { Section } from "@/components/layout/section";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Send, Mail, MapPin, Terminal, CheckCircle2, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { motion, AnimatePresence } from "framer-motion";

export function Contact() {
  const [isFocused, setIsFocused] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [secureHash, setSecureHash] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("submitting");
    
    // Simulate high-security system packet encryption
    setTimeout(() => {
      setStatus("success");
      // Generate a mock unique SHA hash
      const chars = "ABCDEF0123456789";
      let hash = "0x";
      for (let i = 0; i < 16; i++) {
        hash += chars[Math.floor(Math.random() * chars.length)];
      }
      setSecureHash(hash);
    }, 1500);
  };

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
            <a href="mailto:rishabh7575.gp@gmail.com" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span className="text-lg font-medium group-hover:text-primary transition-colors">
                rishabh7575.gp@gmail.com
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

        {/* Right Side: Form / Success HUD */}
        <div className="w-full lg:w-1/2 glass p-8 md:p-12 rounded-[2rem] border border-white/5 relative overflow-hidden bg-background/40 backdrop-blur-xl min-h-[480px] flex flex-col justify-center">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10 animate-pulse" />
          
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center text-center font-mono text-xs gap-6"
              >
                <div className="p-4 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.15)]">
                  <ShieldCheck className="w-12 h-12" />
                </div>
                
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-green-400 uppercase tracking-widest">[ SIGNAL TRANSMITTED ]</h3>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider">Your message packet has been securely encrypted & dispatched.</p>
                </div>

                <div className="w-full p-5 rounded-2xl bg-black/40 border border-white/5 flex flex-col gap-2.5 text-left text-[11px] text-muted-foreground font-mono select-none">
                  <div>
                    <span className="text-green-500 font-bold">STATUS:</span> SUCCESS // 200 OK
                  </div>
                  <div>
                    <span className="text-primary font-bold">PKT_HASH:</span> {secureHash}
                  </div>
                  <div>
                    <span className="text-primary font-bold">DISPATCH:</span> contact@rishabh.dev
                  </div>
                  <div>
                    <span className="text-primary font-bold">TIMESTAMP:</span> {new Date().toISOString()}
                  </div>
                </div>

                <button 
                  onClick={() => {
                    setStatus("idle");
                    setFormData({ name: "", email: "", message: "" });
                  }}
                  className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground hover:text-primary transition-all border border-white/5 hover:border-primary/20 px-4 py-2 rounded-full mt-2"
                >
                  <Terminal className="w-3 h-3" /> Reset Signal Channel
                </button>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-6"
              >
                <div className="flex flex-col gap-2 group">
                  <label htmlFor="name" className="text-sm font-bold text-muted-foreground uppercase tracking-wider group-focus-within:text-primary transition-colors">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setIsFocused("name")}
                    onBlur={() => setIsFocused(null)}
                    className="w-full bg-foreground/5 border-b-2 border-white/10 px-4 py-4 rounded-t-xl outline-none transition-all duration-300 focus:bg-foreground/10 focus:border-primary focus:ring-4 focus:ring-primary/10 text-foreground placeholder:text-muted-foreground/50"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="flex flex-col gap-2 group">
                  <label htmlFor="email" className="text-sm font-bold text-muted-foreground uppercase tracking-wider group-focus-within:text-primary transition-colors">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setIsFocused("email")}
                    onBlur={() => setIsFocused(null)}
                    className="w-full bg-foreground/5 border-b-2 border-white/10 px-4 py-4 rounded-t-xl outline-none transition-all duration-300 focus:bg-foreground/10 focus:border-primary focus:ring-4 focus:ring-primary/10 text-foreground placeholder:text-muted-foreground/50"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="flex flex-col gap-2 group">
                  <label htmlFor="message" className="text-sm font-bold text-muted-foreground uppercase tracking-wider group-focus-within:text-primary transition-colors">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setIsFocused("message")}
                    onBlur={() => setIsFocused(null)}
                    className="w-full bg-foreground/5 border-b-2 border-white/10 px-4 py-4 rounded-t-xl outline-none transition-all duration-300 focus:bg-foreground/10 focus:border-primary focus:ring-4 focus:ring-primary/10 text-foreground placeholder:text-muted-foreground/50 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <MagneticButton 
                  type="submit" 
                  disabled={status === "submitting"}
                  className="mt-4 bg-foreground text-background px-8 py-5 text-lg font-bold flex items-center justify-center gap-3 hover:bg-foreground/90 rounded-xl w-full group disabled:opacity-50"
                >
                  {status === "submitting" ? "Securing Tunnel..." : "Send Message"}
                  {status !== "submitting" && (
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  )}
                </MagneticButton>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
