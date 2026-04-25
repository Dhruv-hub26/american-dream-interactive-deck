"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const attractions = [
  {
    id: 1,
    title: "Luxury Retail District",
    subtitle: "Over 450 premium brands curated for excellence.",
    image: "/assets/leasing-retail.jpg",
    size: "md:col-span-2 md:row-span-2"
  },
  {
    id: 2,
    title: "DreamWorks Water Park",
    subtitle: "Largest indoor water park in North America.",
    image: "/assets/mall-layout.jpg",
    size: "md:col-span-1 md:row-span-1"
  },
  {
    id: 3,
    title: "Culinary Experiences",
    subtitle: "Michelin-starred dining concepts.",
    image: "/assets/culinary-hero.jpg",
    size: "md:col-span-1 md:row-span-1"
  },
];

import Section from "@/components/ui/Section";
import { Variants } from "framer-motion";

export default function Attractions() {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <Section id="attractions" className="py-24 md:py-32 px-4 md:px-8">
      <motion.div
        variants={containerVariants}
        className="max-w-7xl mx-auto w-full"
      >
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-playfair">
            Curated <span className="text-accent italic">Attractions</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-xl font-inter">
            An ecosystem of entertainment tailored for every audience. From indoor skiing to global culinary icons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px] md:auto-rows-[300px]">
          {attractions.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, filter: "brightness(1.1)" }}
              className={`relative group rounded-[2.5rem] overflow-hidden glass-panel border border-white/10 ${item.size}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500" />
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end z-10">
                <div className="transform transition-transform duration-500 translate-y-8 group-hover:translate-y-0">
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 font-playfair">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mb-6 font-inter leading-relaxed line-clamp-2">
                    {item.subtitle}
                  </p>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity bg-accent text-black px-6 py-2 rounded-full flex items-center gap-2 font-medium">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Big SNOW Card */}
          <motion.div
            variants={itemVariants}
            className="relative group rounded-[2.5rem] overflow-hidden glass-panel md:col-span-3 h-[300px] border border-white/10"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('/assets/events-atrium.jpg')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
              <div className="max-w-2xl transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                <h3 className="text-4xl font-bold text-white font-playfair mb-2">Big SNOW</h3>
                <p className="text-gray-300 mb-4">North America&apos;s first indoor real-snow ski and snowboard center.</p>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity bg-accent text-black px-6 py-2 rounded-full flex items-center gap-2 font-medium w-fit">
                  Explore Experience <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}