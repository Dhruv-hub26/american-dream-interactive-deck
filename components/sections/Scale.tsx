"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const scaleData = [
  {
    value: "3 Million",
    unit: "Sq. Ft.",
    label: "World-Class Scale",
    delay: 0.1,
  },
  {
    value: "40 Million+",
    unit: "Annual",
    label: "High-Frequency Traffic",
    delay: 0.3,
  },
  {
    value: "4 Miles",
    unit: "From NYC",
    label: "Prime Connectivity",
    delay: 0.5,
  },
];

export default function Scale() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative w-full py-24 md:py-32 bg-background text-text overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 style={{ fontFamily: "var(--font-playfair)" }} className="text-4xl md:text-5xl font-bold mb-4">
            Unprecedented <span className="text-accent italic">Scale</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A destination unlike any other, built to entertain the tri-state area and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {scaleData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: item.delay, ease: "easeOut" }}
              className="glass-panel p-8 rounded-2xl flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors duration-500"
            >
              <div className="mb-2">
                <span className="text-4xl md:text-5xl font-bold text-accent" style={{ fontFamily: "var(--font-playfair)" }}>
                  {item.value}
                </span>
                <span className="text-xl md:text-2xl text-gray-300 ml-2">{item.unit}</span>
              </div>
              <p className="text-sm uppercase tracking-widest text-gray-400 mt-4">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-accent/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
    </section>
  );
}
