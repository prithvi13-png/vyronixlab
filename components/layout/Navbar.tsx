"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site-config";
import MagneticButton from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";
import { lockScroll, unlockScroll } from "@/lib/lenis";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "py-3" : "py-6"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
          <div
            className={cn(
              "flex items-center gap-4 rounded-full px-5 py-2 transition-all duration-500",
              scrolled ? "glass" : "bg-transparent"
            )}
          >
            <a href="#home" className="flex items-center gap-3">
              <Image
                src="/logo-mark.png"
                alt="VYRONIX LAB"
                width={80}
                height={80}
                priority
                className="h-14 w-14 shrink-0 sm:h-[4.5rem] sm:w-[4.5rem]"
              />
              <span className="font-display text-lg tracking-[0.25em] text-offwhite sm:text-xl">
                VYRONIX
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-gold">Lab</span>
            </a>
          </div>

          <nav className="hidden items-center gap-1 rounded-full px-2 py-2 lg:flex glass">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-grey transition-colors duration-300 hover:bg-white/5 hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <MagneticButton href={siteConfig.whatsappHref} className="!px-6 !py-3 !text-xs">
              Book Now
            </MagneticButton>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="glass flex h-11 w-11 items-center justify-center rounded-full text-offwhite lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex flex-col bg-background/98 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-6">
              <div className="flex items-center gap-3">
                <Image src="/logo-mark.png" alt="VYRONIX LAB" width={56} height={56} className="h-12 w-12" />
                <span className="font-display text-lg tracking-[0.25em] text-offwhite">VYRONIX</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="glass flex h-11 w-11 items-center justify-center rounded-full text-offwhite"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col items-center justify-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="font-display text-3xl text-offwhite transition-colors hover:text-gold"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: navLinks.length * 0.06 + 0.1 }}>
                <MagneticButton href={siteConfig.whatsappHref} className="mt-4">
                  Book Now
                </MagneticButton>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
