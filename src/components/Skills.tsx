import { Card } from "@/components/ui/card";
import { Brain, Code, Database, BarChart, Plug, Globe } from "lucide-react";

const skillsData = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Deep learning, neural networks, model optimization, and deployment",
  },
  {
    icon: Code,
    title: "Python Development",
    description: "Advanced Python, scikit-learn, TensorFlow, PyTorch, and automation",
  },
  {
    icon: Database,
    title: "Data Science & Operations",
    description: "Data analysis, data operations, statistical modeling, and data pipelines",
  },
  {
    icon: BarChart,
    title: "Data Analytics",
    description: "Statistical analysis, predictive modeling, and business intelligence",
  },
  {
    icon: Plug,
    title: "APIs & Integration",
    description: "REST APIs, API development, third-party integrations, and web services",
  },
  {
    icon: Globe,
    title: "Basic Web Development",
    description: "HTML, CSS, JavaScript, React basics, and responsive design",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <Card 
              key={index} 
              className="p-6 space-y-4 border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg w-fit">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-xl text-foreground">{skill.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
