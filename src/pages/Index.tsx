import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Reviews />
      <Contact />
      
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p>© 2025 Prakash Mali. All rights reserved.</p>
        <p className="mt-2 text-sm">AI/ML Developer | Data Science | Data Analytics | Data Operations | Basic Web Developer | Editor</p>
      </footer>
    </div>
  );
};

export default Index;
