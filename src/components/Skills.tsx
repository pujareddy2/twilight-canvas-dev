import { Brain, Code, Database } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    {
      icon: Brain,
      title: "AI/ML",
      items: ["TensorFlow", "PyTorch", "Computer Vision", "NLP", "Deep Learning"],
    },
    {
      icon: Code,
      title: "Development",
      items: ["React", "JavaScript", "TypeScript", "HTML/CSS", "Node.js"],
    },
    {
      icon: Database,
      title: "Database",
      items: ["SQL", "Firebase", "MongoDB", "PostgreSQL", "Redis"],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-glow">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="glow-soft bg-card/50 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 transition-all duration-300"
            >
              <CardHeader>
                <div className="mb-4">
                  <skill.icon className="w-12 h-12 text-primary" />
                </div>
                <CardTitle className="text-2xl text-foreground">{skill.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex} 
                      className="text-muted-foreground text-lg flex items-center"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mr-3" />
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
