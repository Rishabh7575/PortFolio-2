"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/animations/variants";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
  animate?: boolean;
}

export function Section({
  children,
  className,
  id,
  animate = true,
  ...props
}: SectionProps) {
  const Component = animate ? motion.section : "section";
  
  const animationProps = animate
    ? {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        variants: fadeUp,
      }
    : {};

  return (
    <Component
      id={id}
      className={cn("py-20 lg:py-40 w-full max-w-7xl mx-auto", className)}
      {...animationProps}
      {...props}
    >
      {children}
    </Component>
  );
}
