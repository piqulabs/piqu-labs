"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { CARD_HOVER_TRANSITION } from "./config";

const BRONZE_BORDER_HOVER = "rgba(201, 154, 106, 0.55)";

export function MotionCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      whileHover={{
        scale: 1.02,
        borderColor: BRONZE_BORDER_HOVER,
      }}
      transition={CARD_HOVER_TRANSITION}
    >
      {children}
    </motion.div>
  );
}
