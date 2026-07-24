"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { timelineSteps } from "@/lib/site-config";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="timeline" className="section-padding relative bg-card/20">
      <div className="gold-divider absolute inset-x-0 top-0" />
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="The Process"
          title="Your Transformation Timeline."
          description="A clear, structured path from your first assessment to a complete, sustainable transformation."
        />

        <div ref={containerRef} className="relative mt-20">
          <div className="absolute left-6 top-0 h-full w-[2px] bg-white/10 sm:left-1/2 sm:-translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gold-gradient shadow-gold-glow"
            />
          </div>

          <div className="flex flex-col gap-14">
            {timelineSteps.map((item, i) => {
              const Icon = item.icon;
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex items-start gap-6 pl-16 sm:pl-0 ${
                    isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-background text-gold shadow-gold-glow sm:left-1/2 sm:-translate-x-1/2">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>

                  <div className={`hidden sm:block sm:w-1/2 ${isEven ? "sm:pr-14 sm:text-right" : "sm:pl-14 sm:text-left"}`}>
                    <TimelineCard step={item.step} title={item.title} description={item.description} align={isEven ? "right" : "left"} />
                  </div>
                  <div className="sm:hidden">
                    <TimelineCard step={item.step} title={item.title} description={item.description} align="left" />
                  </div>
                  <div className="hidden sm:block sm:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({
  step,
  title,
  description,
  align,
}: {
  step: number;
  title: string;
  description: string;
  align: "left" | "right";
}) {
  return (
    <div className={`rounded-2xl border border-white/5 bg-card p-6 shadow-card ${align === "right" ? "sm:ml-auto" : ""}`}>
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Step {step}</span>
      <h3 className="mt-2 font-display text-xl text-offwhite">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-grey">{description}</p>
    </div>
  );
}
