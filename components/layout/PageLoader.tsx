"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { getLenisInstance } from "@/lib/lenis";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    getLenisInstance()?.stop();
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 18 + 6;
        if (next >= 100) {
          clearInterval(interval);
          return 100;
        }
        return next;
      });
    }, 140);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        setLoading(false);
        getLenisInstance()?.start();
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="absolute inset-0 bg-luxury-radial" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex flex-col items-center gap-5"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="h-28 w-28 sm:h-32 sm:w-32"
            >
              <Image src="/logo-mark.png" alt="VYRONIX LAB" width={128} height={128} priority className="h-28 w-28 sm:h-32 sm:w-32" />
            </motion.div>
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-gold/60" />
              <span className="font-display text-3xl tracking-[0.35em] text-gold-gradient sm:text-4xl">
                VYRONIX
              </span>
              <span className="h-[1px] w-8 bg-gold/60" />
            </div>
            <p className="text-[10px] uppercase tracking-[0.5em] text-grey">Lab</p>

            <div className="mt-4 h-[2px] w-48 overflow-hidden rounded-full bg-white/10 sm:w-64">
              <motion.div
                className="h-full bg-gold-gradient"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
            <p className="font-mono text-xs tabular-nums text-grey">{Math.floor(progress)}%</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
