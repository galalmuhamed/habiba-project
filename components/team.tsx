"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "./ui/badge";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
type Team = {
  id: string;
  name: string;
  image: string;
  role: string[];
  description: string;
};
const teamMembers: Team[] = [
  {
    id: "840016",
    image: "/beba.jpeg",
    name: "Habiba Galal",
    role: [
      "financial performance",
      "operating efficiency",
      "Liquidity ratios",
      "80% power bi",
    ],
    description:
      "Contributed to financial performance analysis by evaluating profitability and trends Assessed operating efficiency through cost structure and resource utilization Analyzed liquidity to evaluate short-term financial stability and working capital management",
  },
  {
    id: "840015",
    name: "Habiba Hosney",
    image: "/habiba.jpeg",
    role: [
      "Firms Overview",
      "Horizontal Analysis (Balance sheet)",
      "Final Report file",
    ],
    description:
      "An overview provides a clear and concise snapshot of the company or report, highlighting the most important insights such as financial performance, operational efficiency, and overall position, allowing the reader to quickly grasp the big picture before diving into details. Horizontal analysis, on the other hand, is a financial evaluation technique that compares line items in financial statements across multiple periods to identify trends, measure growth or decline, and assess how the company’s performance evolves over time.",
  },
  {
    id: "840014",
    name: "Jody Sameh",
    image: "/jody.jpeg",
    role: [
      "SWOT Analysis,Future Outlook",
      "Vertical Income statement (intrest expense, tax expense)",
      "Powerpoint",
    ],
    description:
      "This project covers multiple tasks aimed at analyzing and presenting the financial and strategic position of the companies. Task 2 includes a SWOT analysis along with a future outlook to evaluate strengths, weaknesses, opportunities, and threats. Task 3 focuses on a vertical income statement analysis, specifically examining interest expense and tax expense to better understand the financial structure and performance. In addition, a PowerPoint presentation was prepared entirely by me to clearly and professionally summarize all findings in a structured way.",
  },
  {
    id: "840039",
    name: "Shahd Sameh",
    image: "/shahd.jpeg",
    role: [
      "External auditors",
      "shareholders rights and executive compensations.",
      " Vertical: liabilities in balance sheet",
      "handled the design of the final report",
    ],
    description:
      "I contributed to the project by working on Task 2, which covered external auditors, shareholders’ rights, and executive compensation, as well as Task 3, where I focused on the vertical analysis of liabilities in the balance sheet. In addition, I was responsible for designing and organizing the final report, where I handled the overall layout, formatting, and color scheme to ensure a clear and visually appealing presentation. I also created and integrated graphs using Power BI, which I found particularly engaging, and they helped present the data in a more effective and insightful way.",
  },
  {
    id: "840040",
    name: "Shimaa Ahmed",
    image: "/shima.jpeg",
    role: [
      "Code of ethics and professional conduct",
      "Corporate social responsibility",
      "Spinalex (Finsas)",
      "Horizontal Balance sheet (Liabilities & Equity)",
      "Horizontal Analysis",
    ],

    description:
      "Code of ethics and professional conduct sfocuses on applying key ethical principles such as integrity, transparency, and accountability to ensure responsible decision-making within the company. Corporate social responsibility highlights the company’s role in society by evaluating its environmental, social, and economic impact while balancing profitability with ethical practices. The analysis of Spinalex and Arap Polvara provides a clear view of their financial performance by examining key statements and identifying major trends and changes over time. Horizontal balance sheet analysis (liabilities and equity) compares financial data across different periods to track growth, detect fluctuations, and understand how the companies’ financial positions have evolved.",
  },
  {
    id: "840112",
    name: "Nora Mohamed",
    image: "/nora.jpeg",
    role: [
      "Corporate Governance (BOD, Internal Control & Risk Management)",
      "Vertical Analysis – Income Statement",
    ],
    description:
      "This section evaluates the corporate governance of both companies by analyzing the Board of Directors structure, level of independence, and the role of the Audit Committee. It also reviews the effectiveness of internal control systems and how each company manages risks to ensure stability and protect its assets. <br/> This section presents a vertical analysis of the income statement, where net sales are taken as 100%, and all other items are expressed as a percentage of it. The aim is to assess the cost structure and compare how efficiently each company manages its costs and generates profit.",
  },
  {
    id: "840008",
    name: "Akram Nabil",
    image: "/akram.jpeg",
    role: [
      "Team Leader",
      "Growth potential",
      "regulatory Environment & Entry/Exit barriers in the industry characteristics ",
      "Long term debt ratios",
      "Adjusting Word Files",
      "Final Presentation",
    ],
    description: "",
  },
  {
    id: "840003",
    name: "Ahmed Shafik ",
    image: "/shafik.jpeg",
    role: [
      "Competitive rivalry",
      "Threat of new entrants",
      "Threat of substitutes",
      "Ratios- profitability",
    ],
    description: "",
  },
  {
    id: "840091",
    name: "Mahmoud Reda",
    image: "/reda.jpeg",
    role: [
      "Economical and social at pestel",
      "horizontal analysis (Income Statement)",
    ],
    description:
      "I contributed to a comprehensive graduation project focused on the Textile Industry, where I analyzed the performance and strategic positioning of Arab Polvara and Spinalex. <br/> My role involved conducting a detailed PESTEL analysis to evaluate the macro-environmental factors affecting the companies, as well as applying Porter's Five Forces to assess industry competitiveness and market dynamics. <br/> n addition, I performed a horizontal financial analysis for both companies, comparing their financial performance over multiple years to identify trends, growth patterns, and potential risks. <br/> This experience enhanced my analytical, research, and financial evaluation skills, and provided me with a deeper understanding of strategic decision-making within the textile sector.",
  },
  {
    id: "840089",
    name: "Mohamed Yasser",
    image: "/yasser.jpeg",
    role: [
      "Environmental and technological at pestel",
      "Horizontal analysis (balance sheet polvara)",
    ],
    description:
      "I contributed to a comprehensive graduation project within the Textile Industry, where I analyzed the performance and strategic positioning of Arab Polvara and Spinalex. <br/> My role included conducting a detailed PESTEL analysis to evaluate external macro-environmental factors, as well as applying Porter's Five Forces to assess industry competitiveness and market structure. <br/> Additionally, I performed a vertical financial analysis for both companies, examining the proportion of each financial statement item relative to key figures to better understand cost structure, profitability, and financial efficiency. <br/> This experience strengthened my analytical, strategic thinking, and financial analysis skills, while providing deeper insights into the dynamics of the textile sector.",
  },
  {
    id: "840001",
    name: "Ahmed Shabaan ",
    image: "/shabaan.jpeg",
    role: [
      "power of suppliers ",
      "Power of bayers",
      "Major players",
      "Investors ratios",
    ],
    description: "",
  },
  {
    id: "840123",
    name: "Youssef Mahmoud",
    image: "/joo.jpeg",
    role: ["political & Legal at PESTEL ", "Vertical (assets & balance sheet)"],
    description: "",
  },
];

export default function Team() {
  return (
    <section className="bg-accent">
      <div className="custom-container custom-padding grid gap-5 md:gap-10 lg:grid-cols-2">
        {/* LEFT - Sticky Content */}
        <div className="h-fit space-y-6 lg:sticky lg:top-32">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl leading-tight font-bold md:text-5xl"
          >
            Meet the Team
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground max-w-md text-lg"
          >
            A team of 12 dedicated students collaborating to build a powerful
            financial analysis system. Each member contributed unique expertise
            to bring this project to life.
          </motion.p>
        </div>

        {/* RIGHT - Scroll Cards */}
        <div className="grid gap-5 sm:grid-cols-2">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={cn("bg-card relative rounded-2xl p-3 shadow-md")}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative aspect-square w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="-z-20 aspect-square w-full rounded-lg object-cover"
                    />
                    <div className="absolute inset-0 z-1 rounded-lg bg-linear-to-t from-black via-black/30 to-transparent" />
                    {/* Info */}
                    <div className="absolute bottom-4 left-4 z-10 text-white">
                      <h3 className="text-lg font-semibold">{member.name}</h3>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="bg-background/80 max-h-[80vh] overflow-hidden rounded-2xl border p-0 md:min-w-2xl">
                  {/* Hidden for accessibility */}
                  <VisuallyHidden>
                    <DialogHeader>
                      <DialogTitle>{member.name}</DialogTitle>
                      <DialogDescription>{member.id}</DialogDescription>
                    </DialogHeader>
                  </VisuallyHidden>

                  <div className="flex w-full flex-col md:flex-row">
                    {/* Image Section */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="relative h-96 w-full md:h-auto md:w-1/3"
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="h-full max-h-42 overflow-y-scroll p-6 md:h-auto md:max-h-full md:w-1/2 md:flex-1 md:overflow-auto md:p-8"
                    >
                      <h3 className="font-playfair text-2xl leading-tight font-semibold md:text-3xl">
                        {member.name}
                      </h3>

                      <p className="text-muted-foreground mt-1 text-sm">
                        {member.id}
                      </p>

                      {/* Roles */}
                      <div className="mt-5">
                        <p className="mb-2 text-sm font-medium">Roles</p>

                        <div className="flex flex-wrap gap-2">
                          {member.role.map((role: string, idx: number) => (
                            <span
                              key={idx}
                              className="bg-primary/10 text-primary border-primary/20 rounded-full border px-3 py-1 text-xs"
                            >
                              {role}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Description */}
                      <div
                        className="text-muted-foreground mt-5 text-sm leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: member.description,
                        }}
                      />
                    </motion.div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
