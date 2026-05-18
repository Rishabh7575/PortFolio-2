"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/animations/variants";

interface SectionProps extends Omit<React.HTMLAttributes<HTMLElement>, "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart"> {
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
  if (animate) {
    return (
      <motion.section
        id={id}
        className={cn("py-20 lg:py-40 w-full max-w-7xl mx-auto", className)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        {...props}
      >
        {children}
      </motion.section>
    );
  }

  return (
    <section
      id={id}
      className={cn("py-20 lg:py-40 w-full max-w-7xl mx-auto", className)}
      {...props}
    >
      {children}
    </section>
  );
}
