"use client";

import { motion } from "framer-motion";
import { followUpItems } from "@/lib/site-config";
import SectionHeading from "@/components/ui/SectionHeading";

export default function DailyFollowUp() {
  return (
    <section className="section-padding relative bg-card/20">
      <div className="gold-divider absolute inset-x-0 top-0" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Daily Accountability"
          title="Real Transformation Happens Daily."
          description="Most people fail because nobody keeps them accountable."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {followUpItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-light group relative flex flex-col gap-4 rounded-2xl p-7 transition-all duration-300 hover:bg-white/[0.05]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-gradient text-background shadow-gold-glow transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-lg text-offwhite">{item.title}</h3>
                <p className="text-sm leading-relaxed text-grey">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
