"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/site-config";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function Stats() {
  return (
    <section className="relative border-y border-white/5 bg-card/40 py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="flex flex-col items-center gap-3 text-center"
              >
                <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
                <div className="font-display text-2xl text-offwhite sm:text-3xl">
                  {stat.value !== undefined ? (
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  ) : (
                    <span className="text-gold-gradient">{stat.display}</span>
                  )}
                </div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-grey">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
