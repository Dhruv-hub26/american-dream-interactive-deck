"use client";

import React, { useState, useRef } from "react";
import { Home, BarChart2, Star, Mail, Utensils, Calendar } from "lucide-react";
import { motion } from "framer-motion";

function MagneticWrapper({ children }: { children: React.ReactElement }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

export default function Navbar() {
  const navItems = [
    { name: "Home", icon: Home, href: "#hero" },
    { name: "Stats", icon: BarChart2, href: "#scale" },
    { name: "Attractions", icon: Star, href: "#attractions" },
    { name: "Leasing", icon: Mail, href: "#leasing" },
    { name: "Dining", icon: Utensils, href: "#dining" },
    { name: "Events", icon: Calendar, href: "#events" },
  ];

  return (
    <div className="fixed bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-[100]">
      <motion.nav
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "backOut" }}
        className="glass-panel px-5 py-2 md:px-8 md:py-3 rounded-full flex items-center gap-4 md:gap-8 shadow-[inset_0_0_20px_rgba(212,175,55,0.05),0_20px_40px_rgba(0,0,0,0.6)] border border-white/10 bg-black/40 backdrop-blur-2xl"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <MagneticWrapper key={item.name}>
              <motion.a
                href={item.href}
                className="flex flex-col items-center gap-1 group relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="p-2.5 rounded-full transition-all duration-300 group-hover:bg-accent/10 text-gray-400 group-hover:text-accent group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                  <Icon strokeWidth={1.5} className="w-5 h-5 md:w-6 md:h-6" />
                </div>

                {/* Tooltip on Hover */}
                <span className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-accent text-[10px] px-2 py-1 rounded border border-accent/20 tracking-widest uppercase pointer-events-none">
                  {item.name}
                </span>
              </motion.a>
            </MagneticWrapper>
          );
        })}
      </motion.nav>
    </div>
  );
}