"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin } from "@/components/ui/icons";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-white/5 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-xl font-extrabold tracking-tighter hover:opacity-80 transition-opacity">
          {siteConfig.name}
        </Link>

        {/* Desktop is hidden, handled by NavDock */}
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
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
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium px-4 py-2 rounded-lg hover:bg-accent transition-colors"
              >
                {item.title}
              </Link>
            ))}
            <hr className="border-border" />
            <div className="flex items-center gap-4 px-4 py-2">
              <Link href={siteConfig.links.github} target="_blank" className="hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </Link>
              <Link href={siteConfig.links.linkedin} target="_blank" className="hover:text-primary transition-colors">
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
