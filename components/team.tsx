"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
const teamMembers = [
  {
    image: "/h1.jpeg",
    name: "Ahmed Ali",
    id: "20201234",
    role: ["Frontend Developer", "Backend Developer"],
  },
  {
    image: "/h2.jpeg",
    name: "Sara Mohamed",
    id: "20205678",
    role: ["Frontend Developer", "Backend Developer"],
  },
  {
    image: "/j.jpeg",
    name: "Omar Hassan",
    id: "20207891",
    role: ["Frontend Developer", "Backend Developer"],
  },
  {
    image: "/n2.jpeg",
    name: "Mona Khaled",
    id: "20204567",
    role: ["Frontend Developer", "Backend Developer"],
  },
  {
    image: "/sh.jpeg",
    name: "Youssef Adel",
    id: "20201111",
    role: ["Frontend Developer", "Backend Developer"],
  },
  {
    image: "/sh.jpeg",
    name: "Nour Ibrahim",
    id: "20202222",
    role: ["Frontend Developer", "Backend Developer"],
  },
  {
    image: "/sh.jpeg",
    name: "Hassan Tarek",
    id: "20203333",
    role: ["Frontend Developer", "Backend Developer"],
  },
  {
    image: "/sh.jpeg",
    name: "Laila Samy",
    id: "20204444",
    role: ["Frontend Developer", "Backend Developer"],
  },
  {
    image: "/sh.jpeg",
    name: "Karim Fathy",
    id: "20205555",
    role: ["Frontend Developer", "Backend Developer"],
  },
  {
    image: "/sh.jpeg",
    name: "Salma Nabil",
    id: "20206666",
    role: ["Frontend Developer", "Backend Developer"],
  },
  {
    image: "/sh.jpeg",
    name: "Mostafa Ali",
    id: "20207777",
    role: ["Frontend Developer", "Backend Developer"],
  },
  {
    image: "/sh.jpeg",
    name: "Dina Magdy",
    id: "20208888",
    role: ["Frontend Developer", "Backend Developer"],
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

                  <p className="mb-3 text-sm text-white/60">ID: {member.id}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
/*
      <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
            Meet the Team
          </span>
*/
