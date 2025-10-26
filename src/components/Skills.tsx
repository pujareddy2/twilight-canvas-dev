import { Code, Brain, Cloud } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    {
      icon: Code,
      title: "Languages",
      items: ["Python", "Java", "C", "HTML", "CSS", "JavaScript"],
    },
    {
      icon: Brain,
      title: "AI & ML",
      items: ["TensorFlow", "Scikit-learn", "NLP", "LLMs", "Generative AI", "OpenCV"],
    },
    {
      icon: Cloud,
      title: "Cloud & Tools",
      items: ["GitHub", "Firebase", "Power BI", "MySQL", "Oracle Cloud", "Google Cloud"],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-glow">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="glow-soft bg-card/50 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                <div className="mb-3">
                  <skill.icon className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{skill.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1.5">
                  {skill.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex} 
                      className="text-muted-foreground text-sm flex items-center hover:text-primary transition-colors cursor-default"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
