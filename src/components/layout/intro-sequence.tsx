"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function IntroSequence() {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Disable scroll during intro
    document.body.style.overflow = "hidden";
    
    const timer = setTimeout(() => {
      setIsComplete(true);
      document.body.style.overflow = "";
    }, 2200);

    return () => {
      document.body.style.overflow = "";
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -100,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070708] text-foreground font-mono"
        >
          {/* Subtle tech background grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center gap-6">
            {/* Visual loader track indicator */}
            <div className="flex gap-1.5 h-1 items-end overflow-hidden mb-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ height: "4px", opacity: 0.3 }}
                  animate={{ 
                    height: ["4px", "16px", "4px"],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut"
                  }}
                  className="w-1 bg-primary rounded-full"
                />
              ))}
            </div>

            {/* Monospace premium identity text */}
            <div className="overflow-hidden flex flex-col items-center">
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="text-2xl md:text-3xl font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-primary"
              >
                Rishabh
              </motion.h1>
              
              <motion.p
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 0.6 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-2"
              >
                AI Systems & Full-Stack Builder
              </motion.p>
            </div>
          </div>

          {/* Glowing bottom line progress bar */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "30%" }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-16 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
