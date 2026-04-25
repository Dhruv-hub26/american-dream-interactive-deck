"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

import Section from "@/components/ui/Section";

export default function LeasingTeaser() {
  return (
    <Section id="leasing" className="bg-background flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      {/* Top Gradient Line */}
      <div className="absolute top-0 w-1/2 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl flex flex-col items-center z-10 w-full"
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
          className="uppercase text-accent text-sm md:text-md mb-8 font-medium font-inter"
        >
          Phase 2 Leasing Opportunities
        </motion.p>

        <h2
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-14 tracking-tight leading-tight font-playfair"
        >
          Join the <span className="text-accent italic">Global Stage.</span>
        </h2>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group px-10 py-5 border border-accent rounded-full text-white overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]"
        >
          <motion.div
            animate={{ opacity: [0, 0.15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute inset-0 bg-accent"
          ></motion.div>

          <div className="relative z-10 flex items-center gap-3">
            <span className="font-medium tracking-widest uppercase text-xs font-inter">Download Retail Prospectus</span>
            <Download className="w-5 h-5 text-accent" />
          </div>
        </motion.button>
      </motion.div>

      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-gradient-to-t from-accent/5 to-transparent pointer-events-none blur-3xl z-0 -translate-y-10"></div>
    </Section>
  );
}