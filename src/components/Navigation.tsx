import { useState, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Prakash Mali
          </h1>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("home")} className="nav-link">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="nav-link">
              About
            </button>
            <button onClick={() => scrollToSection("skills")} className="nav-link">
              Skills
            </button>
            <button onClick={() => scrollToSection("projects")} className="nav-link">
              Projects
            </button>
            <button onClick={() => scrollToSection("reviews")} className="nav-link">
              Reviews
            </button>
            <button onClick={() => scrollToSection("contact")} className="nav-link">
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
