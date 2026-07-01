"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Project } from "@/app/data/projects";
import { PortfolioImage } from "../motion/PortfolioImage";
import { StaggerItem } from "../motion/primitives";
import { MOTION_EASE } from "../motion/config";

const CARD_LIFT_TRANSITION = {
  duration: 0.3,
  ease: MOTION_EASE,
};

export function PortfolioProjectCard({ project }: { project: Project }) {
  const reduce = useReducedMotion();

  const card = (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border-soft bg-surface">
      <div className="relative">
        {project.tag ? (
          <span className="absolute top-3 left-3 z-10 rounded-full bg-bronze/20 px-2.5 py-0.5 text-xs font-medium text-bronze-light">
            {project.tag}
          </span>
        ) : null}
        <PortfolioImage
          src={project.image}
          alt={`Screenshot ${project.title}`}
          sizes="(max-width: 768px) 100vw, 50vw"
          aspectClass="aspect-[16/10]"
          containerClassName="rounded-none border-0"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="inline-flex w-fit rounded-full border border-border-soft bg-surface-2 px-3 py-0.5 text-xs text-bronze-light">
          {project.category}
        </span>
        <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-content-muted">
          {project.description}
        </p>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex h-12 w-fit items-center justify-center rounded-full border border-border-soft px-5 text-sm font-medium transition-colors hover:border-bronze/50 hover:bg-surface-2"
        >
          Lihat Live
        </a>
      </div>
    </article>
  );

  if (reduce) {
    return <StaggerItem className="h-full">{card}</StaggerItem>;
  }

  return (
    <StaggerItem className="h-full">
      <motion.div
        className="h-full"
        whileHover={{ y: -4 }}
        transition={CARD_LIFT_TRANSITION}
      >
        {card}
      </motion.div>
    </StaggerItem>
  );
}
