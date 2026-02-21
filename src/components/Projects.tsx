import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp, ExternalLink, Github, Star } from "lucide-react";
import ayucareImg from "@/assets/projects/ayucare.webp";
import smartAttendanceImg from "@/assets/projects/smart_attendance.webp";

interface Project {
  title: string;
  problemStatement: string;
  role: string;
  technicalImplementation: string;
  techStack: string;
  outcome: string;
  liveDemo?: string;
  github?: string;
  image?: string;
  flagship?: boolean;
}

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "AyuCare – Ayurvedic Health Assistant",
      problemStatement: "Developed an AI-powered Ayurvedic health assistant to provide personalized wellness recommendations using natural remedies.",
      role: "Integrated OpenAI API for conversational AI, trained custom datasets using Teachable Machine for classification, and designed a responsive conversational interface.",
      technicalImplementation: "Built backend logic for response generation, optimized prompt engineering for contextual health guidance, and structured data pipeline for user personalization.",
      techStack: "Python, OpenAI API, Teachable Machine, HTML, CSS",
      outcome: "Used by 100+ users, improved accessibility to AI-driven natural wellness insights. Runner-Up at AI Hack Days 2025.",
      github: "https://github.com/Ujasvi29/AyuCare",
      image: ayucareImg,
      flagship: true,
    },
    {
      title: "Smart Attendance System",
      problemStatement: "Designed a computer vision-based attendance system to automate classroom attendance tracking.",
      role: "Implemented real-time face detection and recognition pipeline using OpenCV, integrated webcam stream processing, and connected MySQL database for persistent storage.",
      technicalImplementation: "Built Flask-based backend for attendance logging, optimized detection accuracy under varying lighting conditions, and reduced manual verification errors.",
      techStack: "Python, OpenCV, Flask, MySQL",
      outcome: "Reduced manual attendance effort by 80%, improved speed and reliability in classroom tracking.",
      image: smartAttendanceImg,
    },
    {
      title: "KNN vs SVM: Comparative Analysis of Classification Models",
      problemStatement: "Analyzed and compared distance-based and margin-based supervised learning algorithms to evaluate performance across structured datasets.",
      role: "Designed experiment pipeline, performed data preprocessing, and conducted systematic model evaluation.",
      technicalImplementation: "Performed data preprocessing and feature scaling. Tuned hyperparameters (k-value for KNN, C and kernel for SVM). Evaluated models using Accuracy, Precision, Recall, F1-score. Compared confusion matrices and visualized decision boundaries.",
      techStack: "Python, Scikit-learn, NumPy, Pandas, Matplotlib",
      outcome: "Demonstrated practical understanding of bias-variance tradeoff and model performance analysis for classification problems.",
      github: "https://github.com/pujareddy2",
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
              className={`bg-card/50 backdrop-blur-sm border-2 transition-all duration-500 animate-fade-in ${
                project.flagship 
                  ? "border-primary/40 glow-soft shadow-[0_0_30px_rgba(72,209,204,0.15)]" 
                  : "border-primary/20 hover:border-primary/40 glow-soft"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="pt-6">
                <div className={`grid ${project.image ? "md:grid-cols-[200px,1fr]" : ""} gap-6`}>
                  {/* Project Image */}
                  {project.image && (
                    <div className="w-full h-48 md:h-full rounded-lg overflow-hidden bg-muted/20 glow-soft">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  )}
                  
                  {/* Project Content */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {project.flagship && (
                        <span className="flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                          <Star className="w-3 h-3" /> Flagship Project
                        </span>
                      )}
                    </div>
                    <CardTitle className="text-xl sm:text-2xl text-foreground mb-2">{project.title}</CardTitle>
                    <p className="text-muted-foreground text-sm sm:text-base mb-4">{project.problemStatement}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Button 
                        size="sm"
                        onClick={() => toggleProject(index)}
                        className="glow-soft flex items-center gap-2 text-sm transition-all duration-300"
                      >
                        {expandedProject === index ? (
                          <>Hide Details <ChevronUp className="w-3 h-3" /></>
                        ) : (
                          <>View Details <ChevronDown className="w-3 h-3" /></>
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
                          <h4 className="text-base font-semibold text-primary mb-1">Technical Implementation</h4>
                          <p className="text-muted-foreground text-sm">{project.technicalImplementation}</p>
                        </div>
                        <div>
                          <h4 className="text-base font-semibold text-primary mb-1">Tech Stack</h4>
                          <p className="text-muted-foreground text-sm">{project.techStack}</p>
                        </div>
                        <div>
                          <h4 className="text-base font-semibold text-primary mb-1">Outcome / Impact</h4>
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
