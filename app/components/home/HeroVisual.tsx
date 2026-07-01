"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { REVEAL_TRANSITION } from "../motion/config";

function BrowserFrame({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border-soft bg-surface shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
      <div
        className="flex items-center gap-1.5 border-b border-border-soft bg-surface-2 px-3 py-2.5"
        aria-hidden
      >
        <span className="size-2 rounded-full bg-bronze/50" />
        <span className="size-2 rounded-full bg-bronze-light/40" />
        <span className="size-2 rounded-full bg-border-soft" />
      </div>
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover object-top"
          sizes="(max-width: 1024px) 90vw, 420px"
        />
      </div>
    </div>
  );
}

const floatTransition = {
  duration: 5,
  repeat: Infinity,
  ease: "easeInOut" as const,
};

export function HeroVisual() {
  const reduce = useReducedMotion();

  const floatProps = reduce
    ? {}
    : {
        animate: { y: [0, -6, 0] },
        transition: floatTransition,
      };

  const backFloatProps = reduce
    ? {}
    : {
        animate: { y: [0, -4, 0] },
        transition: { ...floatTransition, duration: 6, delay: 0.5 },
      };

  return (
    <div className="relative mx-auto mt-10 h-[280px] w-full max-w-md sm:h-[320px] lg:mx-0 lg:mt-0 lg:h-[380px] lg:max-w-none">
      <motion.div
        className="absolute right-0 top-10 w-[88%] sm:top-12"
        style={{ rotate: "-6deg" }}
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={
          reduce
            ? { opacity: 1, y: 0 }
            : { opacity: 1, y: [0, -4, 0] }
        }
        transition={
          reduce
            ? { ...REVEAL_TRANSITION, delay: 0.25 }
            : {
                opacity: { ...REVEAL_TRANSITION, delay: 0.25 },
                y: { ...floatTransition, duration: 6, delay: 0.5 },
              }
        }
      >
        <BrowserFrame
          src="/portfolio/senshi.png"
          alt="Screenshot website Senshi Barbershop"
        />
      </motion.div>

      <motion.div
        className="absolute left-0 top-0 z-10 w-[92%]"
        style={{ rotate: "3deg" }}
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={
          reduce
            ? { opacity: 1, y: 0 }
            : { opacity: 1, y: [0, -6, 0] }
        }
        transition={
          reduce
            ? { ...REVEAL_TRANSITION, delay: 0.15 }
            : {
                opacity: { ...REVEAL_TRANSITION, delay: 0.15 },
                y: floatTransition,
              }
        }
      >
        <BrowserFrame
          src="/portfolio/lumiere.png"
          alt="Screenshot website Lumière Klinik Kecantikan"
          priority
        />
      </motion.div>
    </div>
  );
}
