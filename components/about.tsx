"use client";

import { motion } from "motion/react";
import Image from "next/image";

const methods = [
  {
    title: "Porter’s Five Forces",
    desc: "Evaluates industry competitiveness and external pressures.",
  },
  {
    title: "PESTEL Analysis",
    desc: "Analyzes macro-environmental factors affecting the market.",
  },
  {
    title: "Horizontal Analysis",
    desc: "Tracks financial growth and trends over time.",
  },
  {
    title: "Vertical Analysis",
    desc: "Breaks down financial structure and proportions.",
  },
];

export default function About() {
  return (
    <section className="reelative custom-padding custom-container">
      <div className="grid gap-5 md:gap-10 lg:grid-cols-2">
        {/* LEFT - Sticky Story */}
        <div className="h-fit space-y-6 lg:sticky lg:top-32">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl leading-tight font-bold md:text-5xl"
          >
            Financial Analysis <br /> & Strategic Insights
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-md text-lg"
          >
            This project analyzes two major textile companies using advanced
            financial and strategic frameworks to uncover performance, risks,
            and market positioning.
          </motion.p>

          {/* Highlight */}
          <div className="bg-primary/10 text-primary rounded-2xl p-5 text-sm">
            Comparing real-world companies using structured analytical models.
          </div>
        </div>

        {/* RIGHT - Scroll Content */}
        <div className="space-y-16">
          {/* Companies */}
          <div className="space-y-10">
            {/* Company 1 */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-accent relative overflow-hidden rounded-3xl p-6 shadow-xl"
            >
              <div className="bg-accent relative mx-auto size-36 rounded-full">
                <Image
                  src="/arab.png"
                  alt="Arab Logo"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-foreground text-center text-2xl font-semibold">
                Arab Polvara
              </h3>
              <p className="text-muted-foreground mx-auto max-w-sm text-sm opacity-80">
                Evaluated for financial stability and operational efficiency.
              </p>
            </motion.div>

            {/* Company 2 */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-accent relative overflow-hidden rounded-3xl p-6 shadow-xl"
            >
              <div className="bg-accent relative mx-auto size-36 rounded-full">
                <Image
                  src="/Spin.png"
                  alt="Arab Logo"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-foreground text-center text-2xl font-semibold">
                SpinAlex
              </h3>
              <p className="text-muted-foreground mx-auto max-w-sm text-sm opacity-80">
                Compared for market position and financial performance.
              </p>
            </motion.div>
          </div>

          {/* Methods */}
          <div className="grid gap-8 sm:grid-cols-2">
            {methods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="group bg-card ring-primary/10 hover:ring-primary relative rounded-2xl border p-6 shadow-md ring-2 hover:shadow-xl"
              >
                <div className="relative z-10">
                  <h4 className="mb-2 font-semibold">{method.title}</h4>
                  <p className="text-muted-foreground text-sm">{method.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
