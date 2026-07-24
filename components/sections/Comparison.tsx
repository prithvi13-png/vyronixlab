"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { comparisonRows } from "@/lib/site-config";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Comparison() {
  return (
    <section className="section-padding relative">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="The Difference"
          title="Premium Coaching, Without The Premium Guesswork."
          description="What a complete, education-first coaching system actually looks like."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-card/60 p-8 sm:p-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-grey">Traditional Coaching</p>
            <p className="mt-4 font-display text-2xl text-offwhite/70">Generic &amp; Costly</p>
            <ul className="mt-8 flex flex-col gap-4">
              {comparisonRows.map((row) => (
                <li key={row.label} className="flex items-center gap-3 text-sm text-grey">
                  <X className="h-4 w-4 shrink-0 text-grey/50" strokeWidth={2} />
                  <span>{row.label}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-gold/30 bg-card p-8 shadow-gold-glow sm:p-10"
          >
            <div className="pointer-events-none absolute inset-0 bg-luxury-radial" />
            <p className="relative text-xs font-semibold uppercase tracking-[0.3em] text-gold">VYRONIX LAB</p>
            <p className="relative mt-4 font-display text-2xl text-gold-gradient">Personalized &amp; Proven</p>
            <ul className="relative mt-8 flex flex-col gap-4">
              {comparisonRows.map((row) => (
                <li key={row.label} className="flex items-center gap-3 text-sm text-offwhite">
                  <Check className="h-4 w-4 shrink-0 text-gold" strokeWidth={2} />
                  <span>{row.label}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
