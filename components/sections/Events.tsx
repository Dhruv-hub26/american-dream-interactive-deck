"use client";
import { motion } from "framer-motion";

import Section from "@/components/ui/Section";

export default function Events() {
    return (
        <Section id="events" className="bg-background text-white px-8 md:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center w-full">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative group"
                >
                    <div className="absolute -inset-4 bg-accent/10 blur-2xl rounded-[4rem] group-hover:bg-accent/20 transition-all"></div>
                    <div className="relative rounded-[3.5rem] overflow-hidden border border-white/10 aspect-[4/5] md:aspect-square">
                        <img src="/assets/events-atrium.jpg" alt="Events" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-6xl font-bold font-playfair mb-10 leading-tight">
                        Grand <br /><span className="text-accent italic">Spectacles.</span>
                    </h2>
                    <div className="space-y-12">
                        <div className="group border-l-2 border-accent/30 hover:border-accent pl-8 transition-colors">
                            <h4 className="text-2xl font-bold mb-3 font-playfair">Global Fashion Hub</h4>
                            <p className="text-gray-400 font-inter leading-relaxed">Hosting the world&apos;s most prestigious runway events and high-end fashion launches.</p>
                        </div>
                        <div className="group border-l-2 border-white/10 hover:border-accent pl-8 transition-colors">
                            <h4 className="text-2xl font-bold mb-3 font-playfair">Iconic Performances</h4>
                            <p className="text-gray-400 font-inter leading-relaxed">Acoustically tuned atriums designed for legendary live performances and cultural exhibits.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}