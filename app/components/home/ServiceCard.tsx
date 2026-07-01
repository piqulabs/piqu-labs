"use client";

import Link from "next/link";
import {
  Calendar,
  Code,
  FileText,
  Monitor,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { MOTION_EASE } from "../motion/config";
import { StaggerItem } from "../motion/primitives";

const BRONZE_BORDER_HOVER = "rgba(201, 154, 106, 0.55)";

const iconMap = {
  monitor: Monitor,
  document: FileText,
  calendar: Calendar,
  code: Code,
} as const;

export type ServiceIcon = keyof typeof iconMap;

export type Service = {
  title: string;
  desc: string;
  href: string;
  price: string;
  className: string;
  featured: boolean;
  icon: ServiceIcon;
  external?: boolean;
};

function PriceBadge({ price }: { price: string }) {
  return (
    <span className="inline-flex w-fit rounded-full bg-bronze/20 px-3 py-1 text-xs font-medium text-bronze-light">
      {price}
    </span>
  );
}

function ServiceIconDisplay({
  icon,
  featured,
}: {
  icon: LucideIcon;
  featured: boolean;
}) {
  const Icon = icon;
  return (
    <Icon
      className={
        featured
          ? "size-20 text-bronze/50 sm:size-24"
          : "size-8 text-bronze/70"
      }
      strokeWidth={featured ? 1.25 : 1.75}
      aria-hidden
    />
  );
}

export function ServiceCard({
  title,
  desc,
  href,
  price,
  className,
  featured,
  icon,
  external,
}: Service) {
  const reduce = useReducedMotion();
  const Icon = iconMap[icon];

  const content = (
    <div className="flex h-full flex-col">
      {featured ? (
        <div className="relative flex flex-1 flex-col items-center justify-center px-2 py-8 lg:py-10">
          <span className="absolute top-0 right-0 rounded-full bg-bronze/20 px-2.5 py-0.5 text-xs font-medium text-bronze-light">
            Paling Laris
          </span>
          <ServiceIconDisplay icon={Icon} featured />
        </div>
      ) : (
        <div className="mb-4">
          <ServiceIconDisplay icon={Icon} featured={false} />
        </div>
      )}

      <div className={`flex flex-col gap-3 ${featured ? "mt-2" : "flex-1"}`}>
        <PriceBadge price={price} />
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-content-muted">
          {desc}
        </p>
        <span className="text-sm font-medium text-bronze-light transition-colors group-hover:text-gold">
          {external ? "Diskusi kebutuhan →" : "Lihat detail →"}
        </span>
      </div>
    </div>
  );

  const cardClass =
    "group h-full rounded-2xl border border-border-soft bg-surface p-6 transition-colors";

  const linkClass = "flex h-full flex-col";

  const inner = external ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={linkClass}
    >
      {content}
    </a>
  ) : (
    <Link href={href} className={linkClass}>
      {content}
    </Link>
  );

  if (reduce) {
    return (
      <StaggerItem className={`h-full ${className}`}>
        <div className={cardClass}>{inner}</div>
      </StaggerItem>
    );
  }

  return (
    <StaggerItem className={`h-full ${className}`}>
      <motion.div
        className={cardClass}
        whileHover={{ y: -2, borderColor: BRONZE_BORDER_HOVER }}
        transition={{ duration: 0.2, ease: MOTION_EASE }}
      >
        {inner}
      </motion.div>
    </StaggerItem>
  );
}
