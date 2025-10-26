import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  summary: string;
  description: string;
  role: string;
  caseStudy: string;
  liveDemo?: string;
}

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "LaunchPoint (Lovable Platform)",
      summary: "AI-generated online lodge booking platform for luxurious mountain retreats with seamless payment integration.",
      description: "LaunchPoint is an AI-generated online lodge booking platform for luxurious mountain retreats. Users can explore stays, view amenities like Wi-Fi and meals, filter by price, and make secure payments online.",
      role: "Designed and developed the complete UI/UX flow using Lovable.AI. Built booking filters, integrated pricing modules, and connected the payment feature for a seamless booking experience.",
      caseStudy: "Focused on simplifying the booking process with elegant visuals and fast navigation. Improved user interaction by adding soft glows and dynamic feedback, creating a rich mountain escape booking experience.",
      liveDemo: "#",
    },
    {
      title: "Legal Guardian AI",
      summary: "Smart document verification tool that detects fake or modified certificates using AI-powered scanning.",
      description: "Legal Guardian AI is a smart document verification tool that detects fake or modified certificates using AI. It scans uploaded documents and highlights tampered or altered sections.",
      role: "Designed the AI-based scanning module and backend logic for verification. Implemented the difference-highlighting system for users to easily identify altered areas.",
      caseStudy: "Created to promote digital authenticity, the project helps institutions and legal professionals verify document integrity instantly, reducing human error and preventing fraud.",
    },
    {
      title: "AICare – Ayurvedic Health Assistant",
      summary: "AI-powered health assistant focusing on Ayurvedic medicine and natural healing for rural healthcare.",
      description: "AICare is an AI-powered health assistant focusing on Ayurvedic medicine and natural healing. It helps users in rural areas discover affordable and natural remedies.",
      role: "Developed the conversational AI system and designed the interface for user-friendly Ayurvedic suggestions.",
      caseStudy: "Built during the 'AI for Rural Healthcare' hackathon, AICare merges modern AI with Ayurvedic wisdom. It provides home-based remedies and boosts awareness of sustainable healthcare options.",
    },
    {
      title: "Smart Attendance System",
      summary: "Automated attendance system using facial recognition and ID validation with real-time data access.",
      description: "This system automates attendance using facial recognition and ID validation. Authorized personnel can access attendance data instantly.",
      role: "Created and trained the face recognition module, connected it to a real-time database, and developed a clean UI for data viewing.",
      caseStudy: "Reduced manual attendance marking by 90%. Integrated secure verification to avoid proxy attendance. This project showcases AI-based automation in education management.",
    },
  ];

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative" id="projects">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-glow">
          Featured Projects
        </h2>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="glow-soft bg-card/50 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl text-foreground">{project.title}</CardTitle>
                <p className="text-muted-foreground text-lg mt-2">{project.summary}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Button 
                    onClick={() => toggleProject(index)}
                    className="glow-soft flex items-center gap-2"
                  >
                    {expandedProject === index ? (
                      <>
                        Hide Case Study <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        View Case Study <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                  {project.liveDemo && (
                    <Button 
                      variant="outline" 
                      className="glow-purple border-2 flex items-center gap-2"
                      onClick={() => window.open(project.liveDemo, '_blank')}
                    >
                      Live Demo <ExternalLink className="w-4 h-4" />
                    </Button>
                  )}
                </div>
                
                {expandedProject === index && (
                  <div className="mt-6 space-y-4 animate-fade-in border-t border-primary/20 pt-6">
                    <div>
                      <h4 className="text-xl font-semibold text-primary mb-2">Description</h4>
                      <p className="text-muted-foreground text-lg">{project.description}</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-primary mb-2">My Role</h4>
                      <p className="text-muted-foreground text-lg">{project.role}</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-primary mb-2">Case Study</h4>
                      <p className="text-muted-foreground text-lg">{project.caseStudy}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
