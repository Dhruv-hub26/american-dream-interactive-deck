"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, children, className = "" }: SectionProps) {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring", stiffness: 100, damping: 20, mass: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  return (
    <motion.section
      id={id}
      className={`h-screen w-full snap-start snap-always relative overflow-hidden flex flex-col items-center justify-center ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.4 }}
      variants={sectionVariants}
    >
      {children}
    </motion.section>
  );
}
