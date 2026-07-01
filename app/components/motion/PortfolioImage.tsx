"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { PORTFOLIO_HOVER_TRANSITION } from "./config";

export function PortfolioImage({
  src,
  alt,
  sizes,
  aspectClass = "aspect-[4/3]",
  containerClassName = "",
}: {
  src: string;
  alt: string;
  sizes: string;
  aspectClass?: string;
  containerClassName?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-border-soft ${aspectClass} ${containerClassName}`}
    >
      <motion.div
        className="absolute inset-0"
        whileHover={reduce ? undefined : { scale: 1.03 }}
        transition={PORTFOLIO_HOVER_TRANSITION}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={sizes}
        />
      </motion.div>
    </div>
  );
}
