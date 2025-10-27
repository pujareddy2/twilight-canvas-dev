import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp, ExternalLink, Github } from "lucide-react";
import legalGuardianImg from "@/assets/projects/legal_guardian.webp";
import launchpointImg from "@/assets/projects/launchpoint.webp";
import ayucareImg from "@/assets/projects/ayucare.webp";
import smartAttendanceImg from "@/assets/projects/smart_attendance.webp";

interface Project {
  title: string;
  summary: string;
  role: string;
  techStack: string;
  outcome: string;
  liveDemo?: string;
  github?: string;
  image: string;
}

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "Legal Guardian AI",
      summary: "AI-powered document verification system that detects forged certificates.",
      role: "Designed and developed the FastAPI-based backend using Python. Integrated ML models with Scikit-learn for real-time document verification. Built cryptographic hashing and Firestore data layer for integrity.",
      techStack: "Python, FastAPI, Firestore, Scikit-learn, Cryptographic Hashing",
      outcome: "Enabled 90% faster document analysis and improved detection accuracy by 35%.",
      github: "https://github.com/pujareddy2/legal-guardian-ai-hackathon",
      image: legalGuardianImg,
    },
    {
      title: "LaunchPoint",
      summary: "Interactive online lodge booking platform for mountain retreats.",
      role: "Designed and implemented the UI/UX for hotel search, pricing, and amenity selection. Created booking flow and secure online payment system.",
      techStack: "HTML, CSS, JavaScript",
      outcome: "Fully functional, responsive platform with seamless booking workflow.",
      liveDemo: "https://lovable.dev/projects/d511445c-6ed1-4da8-ac09-c5e51eb7f3a5",
      github: "https://github.com/pujareddy2/launch-point-lab",
      image: launchpointImg,
    },
    {
      title: "AyuCare – Ayurvedic Health Assistant",
      summary: "Runner-Up at AI Hack Bays 2025 — AI Ayurvedic health assistant integrating OpenAI API & Teachable Machine.",
      role: "Integrated OpenAI API and Teachable Machine for Ayurvedic health recommendations. Designed conversational UI and built dataset for personalized suggestions.",
      techStack: "Python, OpenAI API, Teachable Machine, HTML, CSS",
      outcome: "Used by 100+ users, improved access to AI-driven natural wellness insights.",
      github: "https://github.com/Ujasvi29/AyuCare",
      image: ayucareImg,
    },
    {
      title: "Smart Attendance System",
      summary: "Computer Vision-based attendance tracker for educational institutions.",
      role: "Developed the face recognition model using OpenCV, integrated real-time webcam data, and connected with MySQL for storage. Built user interface for attendance tracking.",
      techStack: "Python, OpenCV, Flask, MySQL",
      outcome: "Reduced manual attendance work by 80%; improved speed and reliability in classrooms.",
      image: smartAttendanceImg,
    },
  ];

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative" id="projects">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-glow animate-slide-down">
          Featured Projects
        </h2>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="glow-soft bg-card/50 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-[200px,1fr] gap-6">
                  {/* Project Image */}
                  <div className="w-full h-48 md:h-full rounded-lg overflow-hidden bg-muted/20 glow-soft">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  
                  {/* Project Content */}
                  <div>
                    <CardTitle className="text-xl sm:text-2xl text-foreground mb-2">{project.title}</CardTitle>
                    <p className="text-muted-foreground text-sm sm:text-base mb-4">{project.summary}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Button 
                        size="sm"
                        onClick={() => toggleProject(index)}
                        className="glow-soft flex items-center gap-2 text-sm transition-all duration-300"
                      >
                        {expandedProject === index ? (
                          <>
                            Hide Case Study <ChevronUp className="w-3 h-3" />
                          </>
                        ) : (
                          <>
                            View Case Study <ChevronDown className="w-3 h-3" />
                          </>
                        )}
                      </Button>
                      {project.liveDemo && (
                        <Button 
                          size="sm"
                          variant="outline" 
                          className="glow-purple border-2 flex items-center gap-2 text-sm transition-all duration-300"
                          onClick={() => window.open(project.liveDemo, '_blank')}
                        >
                          Live Demo <ExternalLink className="w-3 h-3" />
                        </Button>
                      )}
                      {project.github && (
                        <Button 
                          size="sm"
                          variant="outline" 
                          className="glow-purple border-2 flex items-center gap-2 text-sm transition-all duration-300"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          GitHub <Github className="w-3 h-3" />
                        </Button>
                      )}
                    </div>
                    
                    {expandedProject === index && (
                      <div className="mt-4 space-y-3 animate-slide-up border-t border-primary/20 pt-4">
                        <div>
                          <h4 className="text-base font-semibold text-primary mb-1">My Role</h4>
                          <p className="text-muted-foreground text-sm">{project.role}</p>
                        </div>
                        <div>
                          <h4 className="text-base font-semibold text-primary mb-1">Tech Stack</h4>
                          <p className="text-muted-foreground text-sm">{project.techStack}</p>
                        </div>
                        <div>
                          <h4 className="text-base font-semibold text-primary mb-1">Outcome</h4>
                          <p className="text-muted-foreground text-sm">{project.outcome}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
