"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import MagneticButton from "@/components/ui/MagneticButton";
import GoldParticles from "@/components/ui/GoldParticles";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-luxury-radial" />
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[180px]" />
      <GoldParticles count={25} />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <span className="h-[1px] w-8 bg-gold/60" />
          <span className="text-xs font-medium uppercase tracking-[0.4em] text-gold">Get Started</span>
          <span className="h-[1px] w-8 bg-gold/60" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 font-display text-3xl leading-tight text-offwhite sm:text-4xl md:text-6xl"
        >
          Book Your Transformation <span className="text-gold-gradient">Today.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-grey sm:text-lg"
        >
          Message us on WhatsApp to start your personalized coaching program.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-5"
        >
          <MagneticButton href={siteConfig.whatsappHref}>
            <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
            Chat On WhatsApp
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </MagneticButton>
          <a
            href={siteConfig.whatsappHref}
            className="text-sm tracking-wide text-grey transition-colors hover:text-gold"
          >
            {siteConfig.whatsappDisplay}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
