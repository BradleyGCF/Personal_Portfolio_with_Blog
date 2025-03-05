"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A modern portfolio website with smooth animations and responsive design.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Vue.js", "Firebase", "Vuetify"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current and forecasted weather data for any location.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "OpenWeather API", "Chart.js"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 5,
    title: "Social Media Platform",
    description: "A social media platform with features like posts, comments, likes, and user profiles.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "GraphQL", "PostgreSQL"],
    liveLink: "#",
    githubLink: "#",
  },
]

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const nextProject = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const prevProject = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium">My Work</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="relative">
          <motion.div
            className="overflow-hidden rounded-xl shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-video">
              <Image
                src={projects[activeProject].image || "/placeholder.svg"}
                alt={projects[activeProject].title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                <motion.h3
                  className="text-white text-2xl md:text-3xl font-bold mb-2"
                  key={`title-${activeProject}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {projects[activeProject].title}
                </motion.h3>
                <motion.p
                  className="text-white/80 mb-4 max-w-2xl"
                  key={`desc-${activeProject}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {projects[activeProject].description}
                </motion.p>
                <motion.div
                  className="flex flex-wrap gap-2 mb-4"
                  key={`tags-${activeProject}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {projects[activeProject].tags.map((tag, index) => (
                    <span key={index} className="bg-primary/80 text-primary-foreground px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </motion.div>
                <motion.div
                  className="flex gap-4"
                  key={`links-${activeProject}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <a
                    href={projects[activeProject].liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md font-medium transition-all duration-300 inline-flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={projects[activeProject].githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-background/80 hover:bg-background text-foreground px-4 py-2 rounded-md font-medium transition-all duration-300 inline-flex items-center gap-2"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full shadow-lg z-10"
            onClick={prevProject}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full shadow-lg z-10"
            onClick={nextProject}
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`bg-secondary/80 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl ${
                activeProject === index ? "ring-2 ring-primary" : ""
              }`}
              whileHover={{ y: -10 }}
              onClick={() => setActiveProject(index)}
            >
              <div className="relative h-48">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.slice(0, 2).map((tag, i) => (
                    <span key={i} className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 2 && (
                    <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">
                      +{project.tags.length - 2}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a href="#" className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2">
            View All Projects
            <ChevronRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

