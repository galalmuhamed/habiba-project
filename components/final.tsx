"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { FileText, Presentation } from "lucide-react";

export default function FinalSection() {
  return (
    <section className="custom-container custom-padding">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-16 max-w-2xl text-center"
      >
        <h2 className="mb-4 text-4xl font-bold md:text-5xl">
          Final Deliverables
        </h2>
        <p className="text-muted-foreground text-lg">
          Access the complete project documentation and presentation materials.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
        {/* Report */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -8, scale: 1.03 }}
          transition={{ duration: 0.5 }}
          className="group from-primary to-primary/10 relative rounded-3xl bg-linear-to-r p-px"
        >
          <div className="bg-card h-full rounded-3xl p-10 shadow-lg transition">
            <div className="mb-6 flex justify-center">
              <div className="bg-primary/20 text-primary flex h-16 w-16 items-center justify-center rounded-full">
                <FileText size={28} />
              </div>
            </div>

            <h3 className="mb-3 text-xl font-semibold">Final Report</h3>

            <p className="text-muted-foreground mb-6 text-sm">
              Detailed documentation including financial analysis, methodology,
              and results.
            </p>

            <Button asChild className="w-full">
              <a href="/report.pdf" target="_blank">
                View / Download
              </a>
            </Button>
          </div>

          {/* Glow */}
          <div className="bg-primary absolute inset-0 -z-10 rounded-3xl opacity-0 blur-2xl transition group-hover:opacity-40" />
        </motion.div>

        {/* Presentation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -8, scale: 1.03 }}
          transition={{ duration: 0.5 }}
          className="group from-primary to-primary/10 relative rounded-3xl bg-linear-to-l p-px"
        >
          <div className="bg-card h-full rounded-3xl p-10 shadow-lg transition">
            <div className="mb-6 flex justify-center">
              <div className="bg-primary/20 text-primary flex h-16 w-16 items-center justify-center rounded-full">
                <Presentation size={28} />
              </div>
            </div>

            <h3 className="mb-3 text-xl font-semibold">Presentation Slides</h3>

            <p className="text-muted-foreground mb-6 text-sm">
              Visual summary of the project, including key insights and analysis
              results.
            </p>

            <Button asChild className="w-full">
              <a href="/presentation.pdf" target="_blank">
                View / Download
              </a>
            </Button>
          </div>

          {/* Glow */}
          <div className="bg-primary absolute inset-0 -z-10 rounded-3xl opacity-0 blur-2xl transition group-hover:opacity-40" />
        </motion.div>
      </div>
    </section>
  );
}
