"use client";

import { motion, Variants } from "motion/react";
import { Badge } from "./ui/badge";
import { ColourfulText } from "./colourful-text";
import Image from "next/image";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section className="custom-container custom-padding pt-10 md:pt-10">
      <div className="space-y-10">
        {/* Left Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-3 text-center md:space-y-6"
        >
          <motion.div variants={item}>
            <Badge className="bg-primary/10 dark:bg-primary/30 gap-0 font-bold">
              <ColourfulText
                text="A Finance Zayed Branch"
                className="text-xs md:text-lg"
              />
            </Badge>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-foreground font-playfair text-3xl leading-tight font-bold md:text-6xl"
          >
            Graduation Project — Team 5
          </motion.h1>

          <motion.p
            variants={item}
            className="text-muted-foreground mx-auto max-w-2xl text-sm md:text-lg"
          >
            This project provides a financial and strategic analysis of Arab
            Polvara and SpinAlex, using models such as PESTEL, Porter’s Five
            Forces, and financial ratios to evaluate performance and market
            position.
          </motion.p>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative w-full"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-card rounded-2xl border p-4 shadow-xl"
          >
            <div className="text-muted-foreground relative flex aspect-square items-center justify-center overflow-hidden rounded-lg bg-linear-to-br from-gray-100 to-gray-200 md:aspect-video">
              <Image
                src={"/groupp.jpeg"}
                alt="Team Photo"
                layout="fill"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Floating animation */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="bg-primary/20 absolute -right-6 -bottom-6 h-24 w-24 rounded-full opacity-60 blur-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
