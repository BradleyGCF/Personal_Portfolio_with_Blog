import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import FloatingBackground from "@/components/floating-background";
import Footer from "@/components/footer";
import About from "@/components/about";
import Projects from "@/components/projects";
// import About from "@/components/about"
// import Projects from "@/components/projects"
// import Skills from "@/components/skills"
// import Contact from "@/components/contact"
// import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <FloatingBackground />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      {/* 
      <Skills />
      <Contact />*/}
      <Footer />
    </main>
  );
}
