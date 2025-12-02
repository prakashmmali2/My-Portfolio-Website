import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import coldTruckProject from "@/assets/cold-truck-project.jpg";
import youtubeAudioProject from "@/assets/youtube-audio-project.jpg";
import vtonProject from "@/assets/vton-project.jpg";
import stockMarketProject from "@/assets/stock-market-project.jpg";

const projectsData = [
  {
    image: coldTruckProject,
    title: "Cold Truck Real Time Data Handling",
    description: "IoT monitoring system for cold chain logistics tracking temperature, humidity, and GPS in real-time using ESP32 sensors. Built with Python, MQTT, and AWS IoT Core, processing data from 100+ vehicles with automated alerts and predictive maintenance.",
    tags: ["Python", "IoT", "AWS", "MQTT"],
  },
  {
    image: youtubeAudioProject,
    title: "YouTube Creation Audio Editor",
    description: "Audio editing tool for YouTube creators with AI-powered noise reduction, voice enhancement, and automated normalization. Features batch processing, intro/outro templates, and silence removal using Python, librosa, and FFmpeg.",
    tags: ["Python", "FFmpeg", "Audio Processing"],
  },
  {
    image: vtonProject,
    title: "3D Modeling of VTON Model",
    description: "Virtual Try-On system using GANs and 3D modeling for fashion e-commerce. Creates realistic body models from photos with cloth simulation physics for accurate fit visualization. Built with TensorFlow, Blender API, and Three.js.",
    tags: ["Computer Vision", "TensorFlow", "GANs"],
  },
  {
    image: stockMarketProject,
    title: "Indian Stock Market Price Real-Time Data in Excel",
    description: "Excel-based real-time stock tracker for NSE/BSE with VBA macros and Python integration. Features technical indicators, automated alerts, portfolio tracking, and live data for 500+ stocks with second-by-second updates.",
    tags: ["Excel VBA", "Python", "API Integration"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-border bg-card hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="font-semibold text-xl text-foreground">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
