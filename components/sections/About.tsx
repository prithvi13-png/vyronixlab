"use client";

import { BrainCircuit, Infinity as InfinityIcon } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const pillars = [
  {
    icon: BrainCircuit,
    title: "Education First",
    description: "Every plan comes with the reasoning behind it, so you build understanding, not dependence.",
  },
  {
    icon: InfinityIcon,
    title: "Knowledge That Lasts",
    description: "A body and a mindset you can maintain long after your coaching program ends.",
  },
];

export default function About() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute -left-32 top-1/3 h-[380px] w-[380px] rounded-full bg-gold/5 blur-[140px]" />
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Our Philosophy"
              align="left"
              title="We Don't Just Coach. We Educate."
              description="Complete education, accountability, and transformation built around your body, not a template."
            />
          </div>

          <div className="flex flex-col gap-5">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="glass flex items-start gap-5 rounded-2xl p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold/30 text-gold">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-offwhite">{pillar.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-grey">{pillar.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
