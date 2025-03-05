"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } =
        imageRef.current.getBoundingClientRect();

      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;

      imageRef.current.style.transform = `perspective(1000px) rotateY(${
        x * 10
      }deg) rotateX(${-y * 10}deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      {/* Background animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-background/50 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#0F1829]/30 dark:bg-[#fefeff]/30 rounded-full filter blur-3xl animate-blob"></div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#0F1829]/30 dark:bg-[#fefeff]/30 rounded-full filter blur-3xl animate-blob "></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              className="inline-block text-primary font-medium mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Hello, I&apos;m
            </motion.span>
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Bradley Caruci
            </motion.h1>
            <motion.div
              className="overflow-hidden h-12 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <motion.div
                animate={{ y: [0, -40, -80, -120, -160, 0] }}
                transition={{
                  duration: 10,
                  ease: "easeInOut",
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 1,
                }}
                className="text-2xl md:text-3xl font-semibold text-muted-foreground"
              >
                <div className="h-12 flex items-center">Web Developer</div>
                <div className="h-12 flex items-center">UI/UX Designer</div>
                <div className="h-12 flex items-center">Frontend Expert</div>
                <div className="h-12 flex items-center">Problem Solver</div>
                <div className="h-12 flex items-center">Creative Thinker</div>
              </motion.div>
            </motion.div>
            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              I create stunning digital experiences that combine beautiful
              design with clean, efficient code. Let&apos;s build something
              amazing together.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <a
                href="#contact"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="bg-background border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Projects
              </a>
            </motion.div>

            <motion.div
              className="flex gap-4 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub Profile"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn Profile"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Twitter Profile"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Twitter size={24} />
              </a>
            </motion.div>
          </motion.div>

          <div className="relative hidden lg:block ">
            <div className="relative w-full  h-[700px] ">
              <Spline scene="https://prod.spline.design/eJapy1X6FYeaT0y5/scene.splinecode" />
            </div>
            <div className="absolute -bottom-5 -right-5 w-40 h-24 bg-[#F6F7F8] dark:bg-[#0F1829] rounded-lg mr-10 flex items-center justify-center text-primary-foreground font-bold text-xl">
              <span className="text-[transparent]">Let&apos;s Talk!</span>
            </div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <span className="text-muted-foreground mb-2">Scroll Down</span>
          <ArrowDown className="text-primary animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
