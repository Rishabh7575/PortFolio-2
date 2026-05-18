"use client";

import React from "react";
import { motion } from "framer-motion";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Home, User, Code2, Briefcase, GraduationCap, Award, Mail, Blocks } from "lucide-react";

const navIcons: Record<string, React.ReactNode> = {
  home: <Home className="w-5 h-5" />,
  about: <User className="w-5 h-5" />,
  skills: <Code2 className="w-5 h-5" />,
  projects: <Blocks className="w-5 h-5" />,
  experience: <Briefcase className="w-5 h-5" />,
  clubs: <Award className="w-5 h-5" />,
  certifications: <GraduationCap className="w-5 h-5" />,
  contact: <Mail className="w-5 h-5" />,
};

export function NavDock() {
  const sectionIds = siteConfig.mainNav.map((item) => item.href.replace("#", ""));
  const activeSection = useScrollSpy(sectionIds, 150);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-4 items-center"
    >
      <nav className="glass p-3 rounded-full flex flex-col gap-3 items-center border-white/10 shadow-2xl">
        {siteConfig.mainNav.map((item) => {
          const sectionId = item.href.replace("#", "");
          const isActive = activeSection === sectionId;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative group p-3 rounded-full transition-all"
              aria-label={item.title}
            >
              {isActive && (
                <motion.div
                  layoutId="dockIndicator"
                  className="absolute inset-0 bg-primary/20 border border-primary/30 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              
              <div className={cn(
                "transition-colors duration-300",
                isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
              )}>
                {navIcons[sectionId]}
              </div>

              {/* Tooltip */}
              <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-foreground text-background text-sm font-semibold opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-xl">
                {item.title}
              </div>
            </Link>
          );
        })}
      </nav>
      
      <div className="glass p-2 rounded-full border-white/10 shadow-xl">
        <ThemeToggle />
      </div>
    </motion.div>
  );
}
