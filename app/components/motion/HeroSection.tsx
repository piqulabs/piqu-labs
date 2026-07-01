"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { HeroVisual } from "../home/HeroVisual";
import { HERO_STAGGER_DELAY, MOTION_EASE, REVEAL_TRANSITION } from "./config";
import { WhatsAppButton } from "./WhatsAppButton";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: HERO_STAGGER_DELAY },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: REVEAL_TRANSITION,
  },
};

function HeroCopy({ animated }: { animated: boolean }) {
  const logo = (
    <Image
      src="/logo-PIQU-Labs-removebg-preview.png"
      alt="PIQU Labs"
      width={120}
      height={34}
      priority
      className="h-8 w-auto sm:h-9"
    />
  );

  const heading = (
    <h1 className="relative z-10 max-w-xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
      Website Profesional untuk{" "}
      <span className="text-gradient">Bisnis Kalian</span>
    </h1>
  );

  const subtext = (
    <p className="max-w-md text-lg text-content-muted">
      Website yang bikin bisnis lebih dipercaya dan meningkatkan penjualan. Mulai
      dari Rp900.000.
    </p>
  );

  const ctas = (
    <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
      <WhatsAppButton
        href="https://wa.me/6285787091529?text=Halo%20PIQU%20Labs,%20saya%20mau%20konsultasi%20website"
        className="flex h-12 items-center justify-center rounded-full bg-bronze px-6 font-medium text-content transition-colors hover:bg-bronze-dark"
      >
        Konsultasi Gratis via WhatsApp
      </WhatsAppButton>
      <a
        href="#portfolio"
        className="flex h-12 items-center justify-center rounded-full border border-border-soft px-6 font-medium transition-colors hover:bg-surface"
      >
        Lihat Portfolio
      </a>
    </div>
  );

  if (!animated) {
    return (
      <div className="flex flex-col gap-5">
        {logo}
        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-12 top-1/2 h-56 w-[130%] -translate-y-1/2 opacity-30 blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse at 30% 50%, rgba(169, 113, 63, 0.35) 0%, transparent 65%)",
            }}
          />
          {heading}
        </div>
        {subtext}
        {ctas}
      </div>
    );
  }

  return (
    <motion.div
      className="flex flex-col gap-5"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>{logo}</motion.div>

      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-12 top-1/2 h-56 w-[130%] -translate-y-1/2 opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(169, 113, 63, 0.35) 0%, transparent 65%)",
          }}
        />
        <motion.div variants={itemVariants}>{heading}</motion.div>
      </div>

      <motion.div variants={itemVariants}>{subtext}</motion.div>

      <motion.div variants={itemVariants}>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <WhatsAppButton
            href="https://wa.me/6285787091529?text=Halo%20PIQU%20Labs,%20saya%20mau%20konsultasi%20website"
            className="flex h-12 items-center justify-center rounded-full bg-bronze px-6 font-medium text-content transition-colors hover:bg-bronze-dark"
          >
            Konsultasi Gratis via WhatsApp
          </WhatsAppButton>
          <motion.a
            href="#portfolio"
            className="flex h-12 items-center justify-center rounded-full border border-border-soft px-6 font-medium transition-colors hover:bg-surface"
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: MOTION_EASE }}
          >
            Lihat Portfolio
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section className="flex min-h-[100dvh] items-center px-6 py-12 lg:py-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="text-center lg:text-left">
          <HeroCopy animated={!reduce} />
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}
