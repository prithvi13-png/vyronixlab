"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import GoldParticles from "@/components/ui/GoldParticles";
import MagneticButton from "@/components/ui/MagneticButton";

const headline = [
  "Luxury Body Transformation.",
  "Science-Based Coaching.",
  "Built Around You.",
];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden bg-background">
      {/* Background layers */}
      <div className="absolute inset-0 bg-luxury-radial" />
      <div className="absolute -left-40 top-1/4 h-[420px] w-[420px] rounded-full bg-gold/10 blur-[140px]" />
      <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[160px]" />
      <GoldParticles count={50} />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 pt-28 text-center lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-6 flex items-center gap-3 rounded-full border border-gold/20 bg-white/[0.02] px-5 py-2 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-gold-glow" />
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-grey">
            Premium Online Body Transformation Coaching
          </span>
        </motion.div>

        <h1 className="font-display text-4xl leading-[1.15] text-offwhite sm:text-5xl md:text-6xl lg:text-7xl">
          {headline.map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={i === 1 ? "block text-gold-gradient" : "block"}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95 }}
          className="mx-auto mt-8 max-w-2xl text-balance text-base leading-relaxed text-grey sm:text-lg"
        >
          Stop guessing. Start understanding. Personalized nutrition, customized workouts, and daily
          accountability — built around you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.15 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <MagneticButton href="#programs">
            Start Your Transformation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </MagneticButton>
          <MagneticButton href="#programs" variant="outline">
            View Programs
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-grey"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="h-4 w-4 text-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
