"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

import Section from "@/components/ui/Section";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.2 }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 120, damping: 10 }
    }
  };

  const title1 = "The Future of Retail is an ";
  const title2 = "Experience.";

  const { scrollY } = useScroll();
  const backgroundScale = useTransform(scrollY, [0, 1000], [1, 1.15]);

  return (
    <Section id="hero">
      <motion.div
        initial={{ filter: "blur(20px)", opacity: 0 }}
        whileInView={{ filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ scale: backgroundScale }}
        className="absolute inset-0 w-full h-full z-0 origin-top"
      >
        <div className="absolute inset-0 bg-[url('/assets/luxury-atrium.jpg')] bg-cover bg-center -z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.85)_100%)] pointer-events-none"></div>
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center px-4 md:px-8 text-center mt-12 w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel backdrop-blur-[32px] px-6 py-10 md:px-12 md:py-16 rounded-[2.5rem] shadow-2xl flex flex-col items-center border border-white/10"
          style={{ WebkitBackdropFilter: "blur(32px)" }}
        >
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white max-w-4xl tracking-tight leading-[1.1] flex flex-wrap justify-center"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            <div className="flex flex-wrap justify-center items-center gap-[0.25em]">
              <span className="flex flex-wrap items-center">
                {title1.split(" ").map((word, wordIdx) => (
                  <span key={`word-${wordIdx}`} className="flex mr-[0.25em]">
                    {word.split("").map((char, charIdx) => (
                      <motion.span key={`char-${wordIdx}-${charIdx}`} variants={letterVariants} className="inline-block">
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </span>
              <span className="text-accent italic flex">
                {title2.split("").map((char, charIdx) => (
                  <motion.span key={`char-accent-${charIdx}`} variants={letterVariants} className="inline-block">
                    {char}
                  </motion.span>
                ))}
              </span>
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
            className="mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl font-light"
          >
            Welcome to American Dream Mall. World-class entertainment, luxury retail, and refined dining.
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-gray-400 font-inter">Explore</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown className="w-5 h-5 text-accent" />
        </motion.div>
      </motion.div>
    </Section>
  );
}