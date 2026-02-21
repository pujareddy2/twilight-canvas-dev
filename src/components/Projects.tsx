import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp, ExternalLink, Github, Star, BarChart3 } from "lucide-react";
import ayucareImg from "@/assets/projects/ayucare.webp";
import smartAttendanceImg from "@/assets/projects/smart_attendance.webp";
import legalGuardianImg from "@/assets/projects/legal_guardian.webp";
import knnSvmImg from "@/assets/projects/knn_svm.webp";

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
  badge?: string;
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
      outcome: "Built and demonstrated a functional AI-powered health assistant integrating LLM-based conversational logic and classification workflows. Presented at AI Hack Days 2025 and secured Runner-Up position.",
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
      title: "Legal Document Intelligence System",
      problemStatement: "Developed an AI-driven system to analyze and summarize complex legal documents for improved readability and faster interpretation.",
      role: "Designed NLP-based processing pipeline for extracting key clauses and generating structured summaries.",
      technicalImplementation: "Implemented text preprocessing and tokenization. Applied TF-IDF for feature extraction. Used classification models for document categorization. Structured summarized outputs for clarity and usability.",
      techStack: "Python, Scikit-learn, NLP, TF-IDF, HTML, CSS",
      outcome: "Demonstrated practical NLP implementation for domain-specific text analysis and document intelligence.",
      github: "https://github.com/pujareddy2",
      image: legalGuardianImg,
    },
    {
      title: "Visual Pattern Classifier – KNN vs SVM Interactive Analysis",
      problemStatement: "Built an interactive machine learning visualization app to compare distance-based and margin-based classifiers on structured datasets.",
      role: "Designed full ML experiment pipeline including preprocessing, scaling, hyperparameter tuning, evaluation, and deployment.",
      technicalImplementation: "Implemented KNN and SVM using Scikit-learn. Tuned hyperparameters (k-value, C, kernel). Evaluated using Accuracy, Precision, Recall, F1-score. Compared confusion matrices. Visualized decision boundaries. Deployed interactive demo using Streamlit.",
      techStack: "Python, Scikit-learn, NumPy, Pandas, Matplotlib, Streamlit",
      outcome: "Showcased comparative model behavior and bias-variance tradeoff through real-time interactive visualization.",
      liveDemo: "https://visual-pattern-classifier.streamlit.app/",
      github: "https://github.com/pujareddy2",
      image: knnSvmImg,
      badge: "Interactive ML Visualization",
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
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      {project.flagship && (
                        <span className="flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                          <Star className="w-3 h-3" /> Flagship Project
                        </span>
                      )}
                      {project.badge && (
                        <span className="flex items-center gap-1 text-xs font-medium text-accent-foreground bg-accent/20 px-2 py-1 rounded">
                          <BarChart3 className="w-3 h-3" /> {project.badge}
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
                          onClick={() => window.open(project.liveDemo, '_blank', 'noopener,noreferrer')}
                        >
                          Live Demo <ExternalLink className="w-3 h-3" />
                        </Button>
                      )}
                      {project.github && (
                        <Button 
                          size="sm"
                          variant="outline" 
                          className="glow-purple border-2 flex items-center gap-2 text-sm transition-all duration-300"
                          onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}
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
