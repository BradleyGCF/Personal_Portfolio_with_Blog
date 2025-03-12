import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-foreground inline-block mb-4">
              Bradley<span className="text-red-600">.</span>
            </Link>
            <p className="text-foreground/70 max-w-md mb-6">
              Full Stack Developer specializing in creating elegant, high-performance web applications with a focus on
              user experience and clean code.
            </p>
            <div className="flex space-x-4">
              <Link href="https://github.com/BradleyGCF" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://www.linkedin.com/in/bradleycaruci/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            
              <Link
                href="mailto:bradleycaruci@gmail.com"
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
    
          
              <li>
                <Link href="#about" className="text-foreground/70 hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-foreground/70 hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-foreground/70 hover:text-foreground transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-foreground/70 hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              
              <li>
                <Link
                  href="mailto:bradleycaruci@gmail.com"
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  bradleycaruci@gmail.com
                </Link>
              </li>
              <li>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60">&copy; {currentYear} Bradley Caruci. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            
            
          </div>
        </div>
      </div>
    </footer>
  )
}
