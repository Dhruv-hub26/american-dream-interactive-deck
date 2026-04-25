"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "scale", label: "The Scale" },
  { id: "attractions", label: "Attractions" },
  { id: "leasing", label: "Leasing" },
  { id: "dining", label: "Dining" },
  { id: "events", label: "Events" },
  { id: "contact", label: "Lead Gen" },
];

export default function DotNavigation() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      // Find the section that occupies the most of the viewport
      const current = sections.find((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // The element is "active" if its top is mostly at the top of the viewport
          return rect.top >= -window.innerHeight / 2 && rect.top <= window.innerHeight / 2;
        }
        return false;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    // Attach to the main scrolling container (which handles snap)
    const mainContainer = document.querySelector("main");
    if (mainContainer) {
      mainContainer.addEventListener("scroll", handleScroll);
      // Initial check
      handleScroll();
      return () => mainContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[100] hidden md:flex flex-col gap-4">
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <button
            key={section.id}
            onClick={() => handleClick(section.id)}
            className="group relative flex items-center justify-end"
            aria-label={`Scroll to ${section.label}`}
          >
            <span
              className={`absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-accent text-[10px] px-2 py-1 rounded border border-accent/20 tracking-widest uppercase pointer-events-none whitespace-nowrap ${
                isActive ? "opacity-100" : ""
              }`}
            >
              {section.label}
            </span>
            <motion.div
              animate={{
                height: isActive ? 32 : 12,
                backgroundColor: isActive ? "#D4AF37" : "rgba(255,255,255,0.2)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-3 rounded-full border border-white/10 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
            />
          </button>
        );
      })}
    </div>
  );
}
