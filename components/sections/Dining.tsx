"use client";
import { motion } from "framer-motion";

import Section from "@/components/ui/Section";

export default function Dining() {
    return (
        <Section id="dining" className="flex items-center">
            {/* Parallax Background */}
            <motion.div
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('/assets/culinary-hero.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            </motion.div>

            <div className="container mx-auto px-8 md:px-16 relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-2xl"
                >
                    <span className="text-accent tracking-[0.4em] uppercase text-xs mb-6 block font-inter font-bold">Refined Gastronomy</span>
                    <h2 className="text-6xl md:text-8xl font-bold text-white mb-8 font-playfair leading-none">
                        Culinary <br /><span className="italic text-accent">Artistry.</span>
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed font-inter max-w-lg">
                        From Michelin-starred concepts to global street food icons,
                        experience a world of flavors curated for the sophisticated palate.
                    </p>
                </motion.div>
            </div>
        </Section>
    );
}