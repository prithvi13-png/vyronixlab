"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={siteConfig.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with VYRONIX LAB on WhatsApp"
      initial={{ opacity: 0, scale: 0, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.6, duration: 0.6, type: "spring" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-background shadow-gold-glow-lg sm:bottom-8 sm:right-8"
    >
      <span className="absolute inset-0 rounded-full bg-gold-light/40 animate-ping" />
      <WhatsAppIcon className="relative h-6 w-6 text-[#25D366]" />
    </motion.a>
  );
}
