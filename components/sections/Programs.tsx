"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { programs, siteConfig } from "@/lib/site-config";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";

export default function Programs() {
  return (
    <section id="programs" className="section-padding relative">
      <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gold/5 blur-[160px]" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Programs"
          title="Choose Your Transformation Plan."
          description="Two premium coaching plans, both built on personalization, education, and real support."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {programs.map((program, i) => (
            <motion.div
              key={program.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={cn(
                "relative flex flex-col overflow-hidden rounded-3xl border p-8 sm:p-10",
                program.popular
                  ? "border-gold/50 bg-card shadow-gold-glow-lg lg:scale-[1.03]"
                  : "border-white/10 bg-card/60 shadow-card"
              )}
            >
              {program.popular && (
                <div className="absolute right-0 top-0">
                  <div className="flex items-center gap-1.5 rounded-bl-2xl bg-gold-gradient px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] text-background">
                    <Sparkles className="h-3.5 w-3.5" />
                    Most Popular
                  </div>
                </div>
              )}
              {program.popular && <div className="pointer-events-none absolute inset-0 bg-luxury-radial" />}

              <div className="relative">
                <h3 className="font-display text-2xl text-offwhite sm:text-3xl">{program.name}</h3>
                <p className="mt-2 text-sm text-grey">{program.tagline}</p>

                <div className="mt-8 flex items-end gap-2">
                  <span className={cn("font-display text-5xl", program.popular ? "text-gold-gradient" : "text-offwhite")}>
                    {program.price}
                  </span>
                </div>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-grey">{program.duration} Coaching</p>

                <div className="gold-divider my-8" />

                <ul className="flex flex-col gap-3.5">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-offwhite/90">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <MagneticButton
                    href={siteConfig.whatsappHref}
                    variant={program.popular ? "solid" : "outline"}
                    className="w-full"
                  >
                    Get Started
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-14 max-w-3xl rounded-2xl border border-white/5 bg-white/[0.02] px-6 py-6 text-center sm:px-10"
        >
          <p className="text-sm leading-relaxed text-grey">
            Real transformation takes <span className="text-offwhite">3–6 months</span>. Both plans cover
            3 months of coaching {" "}
            <span className="text-gold-gradient font-medium">renew anytime</span> to keep going.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
