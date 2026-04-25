"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

import Section from "@/components/ui/Section";

export default function Contact() {
    return (
        <Section id="contact" className="bg-black relative px-8 flex items-center">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 blur-[150px] -z-10 animate-pulse"></div>

            <div className="max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h2 className="text-6xl md:text-7xl font-bold font-playfair text-white mb-10 leading-tight">
                            Connect with <br /><span className="text-accent italic">Excellence.</span>
                        </h2>
                        <p className="text-gray-400 text-xl mb-16 font-light font-inter">
                            Be part of North America&apos;s premier lifestyle destination.
                        </p>

                        <div className="space-y-10">
                            <div className="flex items-center gap-8 group">
                                <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-accent transition-colors">
                                    <Mail className="w-6 h-6 text-accent" />
                                </div>
                                <span className="text-xl text-gray-300 font-inter tracking-wide group-hover:text-white transition-colors">leasing@americandream.com</span>
                            </div>
                            <div className="flex items-center gap-8 group">
                                <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-accent transition-colors">
                                    <MapPin className="w-6 h-6 text-accent" />
                                </div>
                                <span className="text-xl text-gray-300 font-inter tracking-wide group-hover:text-white transition-colors">East Rutherford, New Jersey</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="glass-panel p-12 rounded-[3.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl shadow-2xl"
                    >
                        <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <input type="text" placeholder="First Name" className="bg-transparent border-b border-white/20 py-4 focus:border-accent outline-none text-white font-inter transition-all placeholder:text-gray-600" />
                                <input type="text" placeholder="Last Name" className="bg-transparent border-b border-white/20 py-4 focus:border-accent outline-none text-white font-inter transition-all placeholder:text-gray-600" />
                            </div>
                            <input type="email" placeholder="Business Email" className="w-full bg-transparent border-b border-white/20 py-4 focus:border-accent outline-none text-white font-inter transition-all placeholder:text-gray-600" />
                            <textarea placeholder="Tell us about your brand" rows={4} className="w-full bg-transparent border-b border-white/20 py-4 focus:border-accent outline-none text-white font-inter transition-all resize-none placeholder:text-gray-600"></textarea>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-accent text-black font-bold py-6 rounded-[2rem] flex items-center justify-center gap-4 text-sm tracking-[0.2em] uppercase shadow-[0_20px_50px_rgba(212,175,55,0.2)]"
                            >
                                Request Prospectus <Send className="w-4 h-4" />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[60vh] bg-[url('/assets/support-luxury.jpg')] bg-cover opacity-[0.03] grayscale -z-20"></div>
        </Section>
    );
}