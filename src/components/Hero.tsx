import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <Badge variant="secondary" className="inline-flex items-center gap-2 px-4 py-2 text-sm">
            <Sparkles className="w-4 h-4" />
            Available for Freelance Projects
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Prakash Mali
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground">
            AI/ML Developer | Data Science | Data Analytics | Data Operations | Basic Web Developer | Editor
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforming data into actionable insights with cutting-edge machine learning and advanced analytics
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" onClick={() => scrollToSection("projects")} className="bg-gradient-to-r from-primary to-secondary text-background hover:opacity-90 transition-opacity">
              View My Work
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
              Get In Touch
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 mt-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:letsworkwithprakash2@gmail.com" className="text-foreground hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
