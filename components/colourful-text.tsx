"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export function ColourfulText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}--${index}`}
      initial={{
        y: 0,
      }}
      animate={{
        scale: [1, 1.01, 1],
        filter: ["blur(0px)", `blur(4px)`, "blur(0px)"],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        repeatDelay: 5,
        repeat: Infinity,
      }}
      className={cn(
        "text-primary inline-block font-sans tracking-tight whitespace-pre",
        className,
      )}
    >
      {char}
    </motion.span>
  ));
}
