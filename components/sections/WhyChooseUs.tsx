"use client";

import { motion } from "framer-motion";
import { whyChooseUs } from "@/lib/site-config";
import SectionHeading from "@/components/ui/SectionHeading";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Why VYRONIX LAB"
          title="Coaching Built On Education, Not Guesswork."
          description="We don't just tell you what to do we teach you why."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-card p-7 shadow-card transition-colors duration-300 hover:border-gold/30"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/0 blur-2xl transition-colors duration-500 group-hover:bg-gold/10" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/5 text-gold transition-all duration-300 group-hover:border-gold/50 group-hover:shadow-gold-glow">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="relative mt-5 font-display text-lg text-offwhite">{card.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-grey">{card.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
