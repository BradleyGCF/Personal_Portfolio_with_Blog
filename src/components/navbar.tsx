"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X, Sun, Moon, Github, Linkedin, } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [language, setLanguage] = useState("EN")
  const { theme, setTheme } = useTheme()

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "ES" : "EN")
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-foreground">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              Bradley
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <motion.li key={item.name} whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link href={item.href} className="text-foreground/80 hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={toggleLanguage} className="rounded-full px-3 h-8">
                {language}
              </Button>

              {mounted && (
                <Button variant="outline" size="icon" onClick={toggleTheme} className="rounded-full">
                  {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex hover:items-center space-x-4">
            {mounted && (
              <Button variant="outline" size="icon" onClick={toggleTheme} className="rounded-full">
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            )}

            <Button variant="ghost" size="icon" onClick={toggleMenu} className="rounded-full">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="container mx-auto px-4 py-6">
              <ul className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: navItems.indexOf(item) * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="text-foreground/80 hover:text-foreground transition-colors block py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: navItems.length * 0.05 }}
                >
                  <Button variant="outline" size="sm" onClick={toggleLanguage} className="rounded-full px-3 h-8 mt-2">
                    {language}
                  </Button>
                </motion.li>
              </ul>

              <div className="flex space-x-4 mt-6 pt-6 border-t border-border">
                <Link href="https://github.com/bradleycaruci" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Github className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://linkedin.com/in/bradleycaruci" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
                
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

