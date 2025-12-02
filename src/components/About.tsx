import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Github, Linkedin, Mail } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm Prakash Mali, a passionate AI/ML Developer, Data Analytics specialist, Web Developer, and Editor with a proven track record of delivering high-impact solutions across various industries. With expertise in Python, machine learning, and advanced analytics, I help businesses unlock the full potential of their data. My approach combines technical excellence with business acumen, ensuring that every solution not only works beautifully but also drives measurable results. From predictive models to automated pipelines and creative content editing, I deliver end-to-end solutions that make a difference.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 space-y-4 border-border bg-card">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Education</h3>
                  <p className="text-sm text-muted-foreground">2022-2026</p>
                </div>
              </div>
              <p className="text-foreground">B.Tech CSE in Computer Science with AI/ML</p>
            </Card>
            
            <Card className="p-6 space-y-4 border-border bg-card">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-xl">Achievements</h3>
              </div>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  National Level Hackathon Winner
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Paper Published "Vistara"
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Python Certificates
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  AI/ML Certificates
                </li>
              </ul>
            </Card>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-primary to-secondary text-background hover:opacity-90 transition-opacity"
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.open('#', '_blank')}
              className="border-primary text-primary hover:bg-primary/10"
            >
              View Resume
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

export default About;
