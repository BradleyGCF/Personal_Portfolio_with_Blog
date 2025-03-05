import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import FloatingBackground from "@/components/floating-background";
import Footer from "@/components/footer";
import About from "@/components/about";
import Projects from "@/components/projects";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <FloatingBackground />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
