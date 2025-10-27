import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Oracle Cloud Infrastructure Certified AI Foundations Associate",
      platform: "Oracle",
      year: "2024",
    },
    {
      title: "Data Analytics Job Simulation",
      platform: "Deloitte via Forage",
      year: "2024",
    },
    {
      title: "IoT Bootcamp",
      platform: "NIELIT Aurangabad",
      year: "2024",
    },
    {
      title: "Introduction to Data Science",
      platform: "Simplilearn",
      year: "2023",
    },
    {
      title: "Python Foundation",
      platform: "Infosys Springboard",
      year: "2023",
    },
    {
      title: "Java Basics",
      platform: "Udemy",
      year: "2023",
    },
    {
      title: "DBMS & Operating Systems",
      platform: "Scaler Academy",
      year: "2023",
    },
    {
      title: "C Programming",
      platform: "Talentio Merit Curve",
      year: "2023",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative" id="certifications">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-glow animate-slide-down">
          Certifications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="glow-soft bg-card/50 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 animate-fade-in group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-primary/20 rounded-lg flex-shrink-0 transition-all duration-300 group-hover:bg-primary/30 group-hover:scale-110">
                    <Award className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-base text-foreground leading-tight group-hover:text-primary transition-colors duration-300">{cert.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex justify-between items-center">
                  <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">{cert.platform}</p>
                  <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">{cert.year}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
