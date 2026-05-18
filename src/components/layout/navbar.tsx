"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Track which section is currently active in the viewport
  const sectionIds = siteConfig.mainNav.map((item) => item.href.replace("#", ""));
  const activeSection = useScrollSpy(sectionIds, 150);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Logo */}
        <Link href="/" className="font-bold text-xl tracking-tighter">
          Rishabh.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 glass px-6 py-2 rounded-full">
          {siteConfig.mainNav.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-4 py-1.5 text-sm font-medium transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.title}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link href={siteConfig.links.github} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="w-5 h-5" />
          </Link>
          <Link href={siteConfig.links.linkedin} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="w-5 h-5" />
          </Link>
          <ThemeToggle />
          <Link 
            href="/resume.pdf" 
            target="_blank"
            className="px-4 py-2 text-sm font-semibold bg-foreground text-background rounded-full hover:bg-foreground/90 transition-transform active:scale-95"
          >
            Resume
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            className="p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 glass rounded-2xl p-4 flex flex-col gap-4 pointer-events-auto shadow-xl border-border"
          >
            {siteConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium px-4 py-2 rounded-lg hover:bg-accent transition-colors"
              >
                {item.title}
              </Link>
            ))}
            <hr className="border-border" />
            <div className="flex items-center gap-4 px-4 py-2">
              <Link href={siteConfig.links.github} target="_blank">
                <Github className="w-6 h-6" />
              </Link>
              <Link href={siteConfig.links.linkedin} target="_blank">
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link 
                href="/resume.pdf" 
                target="_blank"
                className="ml-auto px-4 py-1.5 text-sm font-semibold bg-foreground text-background rounded-full"
              >
                Resume
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
