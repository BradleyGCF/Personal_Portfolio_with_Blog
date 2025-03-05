"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO, TechStart",
    image: "/placeholder.svg?height=100&width=100",
    text: "Bradley's work on our platform exceeded our expectations. His attention to detail and ability to translate our vision into a functional, beautiful product was impressive. He's not just a developer, but a true partner in our success.",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Product Manager, InnovateCorp",
    image: "/placeholder.svg?height=100&width=100",
    text: "Working with Bradley was a game-changer for our project. His technical expertise combined with his creative approach resulted in a solution that not only met our requirements but also enhanced the overall user experience.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Marketing Director, GrowthLabs",
    image: "/placeholder.svg?height=100&width=100",
    text: "Bradley has a rare combination of technical skill and design sensibility. He understood our brand and created a website that perfectly captures our identity while providing an exceptional user experience. Highly recommended!",
  },
  {
    id: 4,
    name: "David Kim",
    position: "Founder, NextLevel",
    image: "/placeholder.svg?height=100&width=100",
    text: "I've worked with many developers, but Bradley stands out for his commitment to quality and his collaborative approach. He doesn't just build what you ask for—he improves upon your ideas and delivers a superior product.",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? testimonials.length - 1 : newIndex;
    });
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setAutoplay(false);
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-8" />
          <p className="max-w-3xl mx-auto text-lg text-foreground/70">
            What clients and colleagues say about working with me.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-10 left-0 text-red-600/20 dark:text-red-600/10">
            <Quote className="h-24 w-24" />
          </div>

          <div className="relative z-10">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-background border border-border rounded-xl p-8 md:p-10"
            >
              <p className="text-lg md:text-xl text-foreground/80 italic mb-8">
                &quot;{testimonials[currentIndex].text}&quot;
              </p>

              <div className="flex items-center">
                <div className="mr-4 rounded-full overflow-hidden h-16 w-16 border-2 border-red-600">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-foreground/60">
                    {testimonials[currentIndex].position}
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-between items-center mt-8">
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    type="button"
                    key={`testimonial-${testimonials[index].name}`} 
                    onClick={() => handleDotClick(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-red-600"
                        : "w-2 bg-foreground/20"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePrev}
                  className="rounded-full"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleNext}
                  className="rounded-full"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
