"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import {
  Code,
  Server,
  Palette,
  Zap,
  Database,
  Download,
} from "lucide-react";
import React from "react";

export default function AboutSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = [
    {
      name: "Frontend Development",
      icon: <Code className="h-6 w-6 text-primary dark:text-white" />,
      description: "React, Next.js",
    },
    {
      name: "Backend Development",
      icon: <Server className="h-6 w-6 text-primary dark:text-white" />,
      description: "Node.js, Express",
    },
    {
      name: "UI/UX Design",
      icon: <Palette className="h-6 w-6 text-primary dark:text-white" />,
      description: "Figma, Adobe XD",
    },
    {
      name: "Agile Methodologies",
      icon: <Zap className="h-6 w-6 text-primary dark:text-white" />,
      description: "Scrum, Kanban, Lean",
    },
    {
      name: "Database Management",
      icon: <Database className="h-6 w-6 text-primary dark:text-white" />,
      description: "MongoDB, PostgreSQL, ORM: Prisma",
    },

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section ref={ref} id="about" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-primary dark:bg-white mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-foreground/70">
            I&apos;m a passionate Full Stack Developer with a keen eye for
            design and a commitment to creating seamless user experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/20 to-black/20 blur-xl opacity-70 dark:opacity-30"></div>
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/brad.jpg?height=600&width=600"
                  alt="Bradley Caruci"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-foreground/70 mb-4">
                With over 3 years of experience in web development, I&apos;ve
                worked on a diverse range of projects from small business
                websites to large-scale enterprise applications. My approach
                combines technical expertise with creative problem-solving to
                deliver solutions that exceed expectations.
              </p>
              <p className="text-foreground/70">
                I&apos;m constantly learning and exploring new technologies to
                stay at the forefront of web development. My goal is to create
                digital experiences that are not only visually stunning but also
                highly functional and accessible.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-2xl font-bold mb-6">Key Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start p-4 rounded-lg bg-background border border-border"
                  >
                    <div className="mr-4 text-red-600">{skill.icon}</div>
                    <div>
                      <h4 className="font-medium mb-1">{skill.name}</h4>
                      <p className="text-sm text-foreground/60">
                        {skill.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.a
              href="#"
              className="inline-flex items-center mt-6 gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-medium transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} />
              Download CV
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
