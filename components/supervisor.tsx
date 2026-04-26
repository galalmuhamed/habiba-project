"use client";

import { motion } from "motion/react";

export default function ThanksCard() {
  return (
    <section className="custom-padding custom-container flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative w-full"
      >
        {/* Gradient Border */}
        <div className="from-primary/30 via-primary/20 to-primary/40 rounded-3xl bg-linear-to-br p-px">
          {/* Card */}
          <div className="bg-card/80 relative overflow-hidden rounded-3xl p-10 shadow-xl backdrop-blur-xl md:p-14">
            {/* Soft background glow */}
            <div className="bg-primary/10 absolute -top-20 -right-20 h-72 w-72 rounded-full blur-3xl" />
            <div className="bg-primary/10 absolute -bottom-20 -left-20 h-72 w-72 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative z-10 space-y-6 text-center">
              {/* Title */}
              <h2 className="text-2xl font-bold md:text-4xl">Special Thanks</h2>

              {/* Message */}
              <p className="text-muted-foreground mx-auto max-w-2xl text-sm leading-relaxed md:text-lg">
                We extend our sincere gratitude to our supervisor for her
                continuous guidance, valuable insights, and unwavering support
                throughout this project. Her mentorship played a key role in
                shaping our work and helping us achieve meaningful results.
              </p>

              {/* Doctor Info */}
              <div className="pt-4">
                <h3 className="text-xl font-semibold">Dr. Heba Hazem</h3>
                <p className="text-muted-foreground text-sm">
                  Project Supervisor
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
