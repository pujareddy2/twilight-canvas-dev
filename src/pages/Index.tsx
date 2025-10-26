import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Skills />
      <Projects />
      <Achievements />
      <Certifications />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 text-center border-t border-primary/20">
        <p className="text-muted-foreground text-base">
          © 2025 Puja Midde. Built with passion and AI.
        </p>
      </footer>
    </main>
  );
};

export default Index;
